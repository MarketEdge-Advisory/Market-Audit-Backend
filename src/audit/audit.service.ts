import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EmailService } from '../email/email.service';
import { LogsService } from '../logs/logs.service';
import { SaveAnswerDto } from './dto/save-answer.dto';
import { SaveLeadDto } from './dto/save-lead.dto';
import { StartAuditDto } from './dto/start-audit.dto';
import { SessionStatus } from '@prisma/client';

interface TierDefinition {
  min: number;
  max: number;
  tier: string;
  message: string;
}

@Injectable()
export class AuditService {
  private readonly tiers: TierDefinition[] = [
    { min: 0,   max: 99,  tier: 'Foundational',    message: 'You are at the beginning of a structured marketing growth journey.' },
    { min: 100, max: 159, tier: 'Growth',           message: 'You have solid momentum and clear opportunities to scale performance.' },
    { min: 160, max: 209, tier: 'Advanced',         message: 'Your marketing is well managed and producing meaningful business outcomes.' },
    { min: 210, max: 250, tier: 'Marketing Leader', message: 'Your marketing is highly strategic and well executed.' },
  ];

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly logsService: LogsService, // added
  ) {}

  /**
   * Fetches the latest active audit template
   */
  async getTemplate() {
    const template = await this.prisma.auditTemplate.findFirst({
      where: { isActive: true },
      orderBy: { version: 'desc' },
      include: {
        sections: {
          orderBy: { sortOrder: 'asc' },
          include: {
            questions: {
              orderBy: { sortOrder: 'asc' },
              include: { options: { orderBy: { sortOrder: 'asc' } } },
            },
          },
        },
      },
    });

    if (!template) throw new NotFoundException('No active audit template found');
    return template;
  }

  /**
   * Initializes a new audit session
   */
  async startAudit(input: StartAuditDto) {
    const template = await this.prisma.auditTemplate.findFirst({
      where: input.templateVersion ? { version: input.templateVersion } : { isActive: true },
      orderBy: { version: 'desc' },
    });

    if (!template) throw new NotFoundException('No matching template found');

    const session = await this.prisma.auditSession.create({
      data: { templateId: template.id, status: SessionStatus.in_progress },
    });

    return { sessionId: session.id, status: session.status };
  }

  /**
   * Saves an answer and updates the score for that question
   */
  async saveAnswer(sessionId: string, input: SaveAnswerDto) {
    const session = await this.prisma.auditSession.findUnique({ where: { id: sessionId } });
    if (!session || session.status !== SessionStatus.in_progress) {
      
      throw new BadRequestException('Session not found or already completed');
    }

    const option = await this.prisma.auditOption.findUnique({ where: { id: input.optionId } });
    if (!option) throw new BadRequestException('Invalid option');

    return this.prisma.auditAnswer.upsert({
      where:  { sessionId_questionId: { sessionId, questionId: input.questionId } },
      update: { optionId: option.id, pointsAwarded: option.points, answeredAt: new Date() },
      create: { sessionId, questionId: input.questionId, optionId: option.id, pointsAwarded: option.points },
    });
  }

  /**
   * STEP 1: Finalize audit and lock results
   */
  async submitAudit(sessionId: string) {
    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: {
        template: { include: { sections: { include: { questions: true } } } },
        answers: true,
      },
    });

    if (!session) throw new NotFoundException('Session not found');

    // If user clicks twice, just return the existing result instead of erroring
    if (session.status === SessionStatus.completed) {
      return this.prisma.auditResult.findUnique({ where: { sessionId } });
    }

    // Calculation Logic
    const pointsMap = new Map(session.answers.map(a => [a.questionId, a.pointsAwarded]));
    const sectionScores = session.template.sections.map(section => ({
      sectionId:   section.id,
      sectionCode: section.code,
      title:       section.title,
      score:       section.questions.reduce((sum, q) => sum + (pointsMap.get(q.id) ?? 0), 0),
      maxScore:    section.maxScore,
    }));

    const totalScore = sectionScores.reduce((sum, s) => sum + s.score, 0);
    const tier = this.resolveTier(totalScore);

    return this.prisma.$transaction(async (tx) => {
      await tx.auditSession.update({
        where: { id: sessionId },
        data:  { status: SessionStatus.completed, completedAt: new Date() },
      });

      return tx.auditResult.upsert({
        where:  { sessionId },
        update: { totalScore, maxScore: session.template.maxScore, tier: tier.tier, message: tier.message, sectionScores, locked: true },
        create: { sessionId, totalScore, maxScore: session.template.maxScore, tier: tier.tier, message: tier.message, sectionScores, locked: true },
      });
    });
  }

  /**
   * STEP 2: Save user info and unlock results
   */
  async saveLead(sessionId: string, input: SaveLeadDto) {
    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: { result: true },
    });

    if (!session?.result) {
      throw new BadRequestException('Submit audit results before providing contact information.');
    }

    const updatedResult = await this.prisma.$transaction(async (tx) => {
      await tx.auditLead.upsert({
        where:  { sessionId },
        update: { ...input },
        create: { sessionId, ...input },
      });

      return tx.auditResult.update({
        where: { sessionId },
        data:  { locked: false },
      });
    });

    // Log the client submission
    await this.logsService.create({
      actorType: 'client',
      action:    'SUBMIT',
      entity:    'AuditSession',
      entityId:  sessionId,
      after: {
        email:      input.email,
        fullName:   input.fullName,
        tier:       updatedResult.tier,
        totalScore: updatedResult.totalScore,
      },
    });

    this.emailService.sendResultsEmail({
      clientEmail: input.email,
      clientName:  input.fullName,
      ...updatedResult,
      sessionId,
      sectionScores: updatedResult.sectionScores as any,
    }).catch(err => console.error('Email processing error:', err));

    return { sessionId, unlocked: true };
  }

  /**
   * Fetches results if unlocked, otherwise returns locked/finalized status.
   */
  async getResult(sessionId: string) {
    const session = await this.prisma.auditSession.findUnique({ where: { id: sessionId } });
    if (!session) throw new NotFoundException('Session not found');

    const result = await this.prisma.auditResult.findUnique({ where: { sessionId } });

    // submitAudit hasn't been called yet — audit is not finalized
    if (!result) {
      return { sessionId, finalized: false };
    }

    // Audit finalized but lead not saved yet — result still locked
    if (result.locked) {
      return { sessionId, finalized: true, locked: true };
    }

    // Fully unlocked — return everything
    return { ...result, finalized: true, locked: false };
  }

  /**
   * Sends Strategy Call request email
   */
  async requestCall(sessionId: string) {
    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: { result: true, lead: true },
    });

    if (!session?.result || session.result.locked || !session.lead) {
      throw new BadRequestException('Audit must be completed and unlocked to request a call.');
    }

    await this.emailService.sendCallRequestEmail({
      clientEmail: session.lead.email,
      clientName:  session.lead.fullName,
      ...session.result,
      sectionScores: session.result.sectionScores as any,
    });

    return { sessionId, callRequested: true };
  }

  private resolveTier(totalScore: number): TierDefinition {
    const tier = this.tiers.find(t => totalScore >= t.min && totalScore <= t.max);
    return tier || this.tiers[0];
  }
}