import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
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
    {
      min: 0,
      max: 99,
      tier: 'Foundational',
      message:
        'You are at the beginning of a structured marketing growth journey.',
    },
    {
      min: 100,
      max: 159,
      tier: 'Growth',
      message:
        'You have solid momentum and clear opportunities to scale performance.',
    },
    {
      min: 160,
      max: 209,
      tier: 'Advanced',
      message:
        'Your marketing is well managed and producing meaningful business outcomes.',
    },
    {
      min: 210,
      max: 250,
      tier: 'Marketing Leader',
      message: 'Your marketing is highly strategic and well executed.',
    },
  ];

  constructor(private readonly prisma: PrismaService) {}

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
              include: {
                options: { orderBy: { sortOrder: 'asc' } },
              },
            },
          },
        },
      },
    });

    if (!template) {
      throw new NotFoundException('No active audit template found');
    }

    return template;
  }

  async startAudit(input: StartAuditDto) {
    const template = input.templateVersion
      ? await this.prisma.auditTemplate.findUnique({
          where: { version: input.templateVersion },
        })
      : await this.prisma.auditTemplate.findFirst({
          where: { isActive: true },
          orderBy: { version: 'desc' },
        });

    if (!template) {
      throw new NotFoundException('No matching audit template found');
    }

    const session = await this.prisma.auditSession.create({
      data: {
        templateId: template.id,
        status: SessionStatus.in_progress,
      },
    });

    return {
      sessionId: session.id,
      status: session.status,
      startedAt: session.startedAt,
      templateVersion: template.version,
    };
  }

  async saveAnswer(sessionId: string, input: SaveAnswerDto) {
    if (!input.questionId || !input.optionId) {
      throw new BadRequestException('questionId and optionId are required');
    }

    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: {
        template: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (session.status !== SessionStatus.in_progress) {
      throw new BadRequestException('Cannot answer a completed audit session');
    }

    const question = await this.prisma.auditQuestion.findUnique({
      where: { id: input.questionId },
      include: { section: true },
    });

    if (!question || question.section.templateId !== session.templateId) {
      throw new BadRequestException('Invalid question for this session');
    }

    const option = await this.prisma.auditOption.findUnique({
      where: { id: input.optionId },
    });

    if (!option || option.questionId !== question.id) {
      throw new BadRequestException('Invalid option for selected question');
    }

    const answer = await this.prisma.auditAnswer.upsert({
      where: {
        sessionId_questionId: {
          sessionId,
          questionId: question.id,
        },
      },
      update: {
        optionId: option.id,
        pointsAwarded: option.points,
        answeredAt: new Date(),
      },
      create: {
        sessionId,
        questionId: question.id,
        optionId: option.id,
        pointsAwarded: option.points,
      },
    });

    return {
      sessionId,
      questionId: answer.questionId,
      optionId: answer.optionId,
      pointsAwarded: answer.pointsAwarded,
      answeredAt: answer.answeredAt,
    };
  }

  async submitAudit(sessionId: string) {
    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: {
        template: {
          include: {
            sections: {
              orderBy: { sortOrder: 'asc' },
              include: {
                questions: {
                  orderBy: { sortOrder: 'asc' },
                },
              },
            },
          },
        },
        answers: true,
      },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (session.status !== SessionStatus.in_progress) {
      throw new BadRequestException('Audit session already submitted');
    }

    const requiredQuestionIds = session.template.sections.flatMap((section) =>
      section.questions.map((question) => question.id),
    );

    const answeredQuestionIds = new Set(
      session.answers.map((answer) => answer.questionId),
    );
    const missingQuestionIds = requiredQuestionIds.filter(
      (id) => !answeredQuestionIds.has(id),
    );

    if (missingQuestionIds.length > 0) {
      throw new BadRequestException({
        message: 'Please answer all questions before submitting',
        missingQuestionIds,
      });
    }

    const pointsByQuestionId = new Map(
      session.answers.map((answer) => [
        answer.questionId,
        answer.pointsAwarded,
      ]),
    );

    const sectionScores = session.template.sections.map((section) => {
      const score = section.questions.reduce((sum, question) => {
        return sum + (pointsByQuestionId.get(question.id) ?? 0);
      }, 0);

      return {
        sectionId: section.id,
        sectionCode: section.code,
        title: section.title,
        score,
        maxScore: section.maxScore,
      };
    });

    const totalScore = sectionScores.reduce(
      (sum, section) => sum + section.score,
      0,
    );
    const tier = this.resolveTier(totalScore);

    const result = await this.prisma.$transaction(async (tx) => {
      await tx.auditSession.update({
        where: { id: sessionId },
        data: {
          status: SessionStatus.completed,
          completedAt: new Date(),
        },
      });

      return tx.auditResult.upsert({
        where: { sessionId },
        update: {
          totalScore,
          maxScore: session.template.maxScore,
          tier: tier.tier,
          message: tier.message,
          sectionScores: sectionScores,
          locked: true,
          calculatedAt: new Date(),
        },
        create: {
          sessionId,
          totalScore,
          maxScore: session.template.maxScore,
          tier: tier.tier,
          message: tier.message,
          sectionScores: sectionScores,
          locked: true,
        },
      });
    });

    return {
      sessionId,
      locked: result.locked,
      totalScore: result.totalScore,
      maxScore: result.maxScore,
      tier: result.tier,
      message: result.message,
    };
  }

  async saveLead(sessionId: string, input: SaveLeadDto) {
    if (!input.fullName || !input.email) {
      throw new BadRequestException('fullName and email are required');
    }

    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: { result: true },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (!session.result) {
      throw new BadRequestException('Submit audit before saving lead');
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.auditLead.upsert({
        where: { sessionId },
        update: {
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          companyName: input.companyName,
          position: input.position,
        },
        create: {
          sessionId,
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          companyName: input.companyName,
          position: input.position,
        },
      });

      await tx.auditResult.update({
        where: { sessionId },
        data: { locked: false },
      });
    });

    return { sessionId, unlocked: true };
  }

  async getResult(sessionId: string) {
    const result = await this.prisma.auditResult.findUnique({
      where: { sessionId },
    });

    if (!result) {
      throw new NotFoundException('Result not found for this session');
    }

    if (result.locked) {
      return {
        sessionId,
        locked: true,
      };
    }

    return {
      sessionId,
      locked: false,
      totalScore: result.totalScore,
      maxScore: result.maxScore,
      tier: result.tier,
      message: result.message,
      sectionScores: result.sectionScores,
      calculatedAt: result.calculatedAt,
    };
  }

  private resolveTier(totalScore: number): TierDefinition {
    const tier = this.tiers.find(
      (candidate) => totalScore >= candidate.min && totalScore <= candidate.max,
    );

    if (!tier) {
      return {
        min: 0,
        max: 250,
        tier: 'Unclassified',
        message: 'Score outside configured range.',
      };
    }

    return tier;
  }
}
