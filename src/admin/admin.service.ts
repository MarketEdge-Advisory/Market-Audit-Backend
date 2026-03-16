import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // ── All leads with their result ──────────────────────────────────────────────
  async getAllLeads() {
    const leads = await this.prisma.auditLead.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        session: {
          include: {
            result: true,
          },
        },
      },
    });

    return leads.map((lead) => ({
      sessionId: lead.sessionId,
      fullName: lead.fullName,
      email: lead.email,
      phone: lead.phone,
      companyName: lead.companyName,
      position: lead.position,
      createdAt: lead.createdAt,
      result: lead.session.result
        ? {
            tier: lead.session.result.tier,
            totalScore: lead.session.result.totalScore,
            maxScore: lead.session.result.maxScore,
            message: lead.session.result.message,
            sectionScores: lead.session.result.sectionScores,
            calculatedAt: lead.session.result.calculatedAt,
          }
        : null,
    }));
  }

  // ── Single session with full detail ─────────────────────────────────────────
  async getSessionDetail(sessionId: string) {
    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
      include: {
        lead: true,
        result: true,
        answers: {
          include: {
            question: true,
            option: true,
          },
        },
      },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    return {
      sessionId: session.id,
      status: session.status,
      startedAt: session.startedAt,
      completedAt: session.completedAt,
      lead: session.lead ?? null,
      result: session.result ?? null,
      answers: session.answers.map((a) => ({
        question: a.question.text,
        answer: a.option.label,
        pointsAwarded: a.pointsAwarded,
      })),
    };
  }

  // ── Delete a session and all related data ────────────────────────────────────
  async deleteSession(sessionId: string) {
    const session = await this.prisma.auditSession.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    // Prisma cascades will handle answers, result, lead
    await this.prisma.auditSession.delete({
      where: { id: sessionId },
    });

    return { sessionId, deleted: true };
  }

  // ── Export all leads as CSV ──────────────────────────────────────────────────
  async exportLeadsCsv(): Promise<string> {
    const leads = await this.getAllLeads();

    const headers = [
      'Session ID',
      'Full Name',
      'Email',
      'Phone',
      'Company',
      'Position',
      'Tier',
      'Total Score',
      'Max Score',
      'Submitted At',
    ];

    const escape = (val: unknown) => {
      const str = val == null ? '' : String(val);
      return `"${str.replace(/"/g, '""')}"`;
    };

    const rows = leads.map((lead) => [
      escape(lead.sessionId),
      escape(lead.fullName),
      escape(lead.email),
      escape(lead.phone),
      escape(lead.companyName),
      escape(lead.position),
      escape(lead.result?.tier ?? ''),
      escape(lead.result?.totalScore ?? ''),
      escape(lead.result?.maxScore ?? ''),
      escape(lead.createdAt),
    ]);

    return [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
  }
}
