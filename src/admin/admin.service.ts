import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { QueryLeadsDto } from './dto/query-leads.dto';

const leadInclude = {
  session: {
    include: {
      result: true,
    },
  },
} satisfies Prisma.AuditLeadInclude;

type LeadWithSessionResult = Prisma.AuditLeadGetPayload<{
  include: typeof leadInclude;
}>;

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // ── All leads with their result ──────────────────────────────────────────────
  async getAllLeads(query: QueryLeadsDto) {
    const { page = 1, limit = 20 } = query;

    const [leads, total] = await this.prisma.$transaction([
      this.prisma.auditLead.findMany({
        orderBy: { createdAt: 'desc' },
        include: leadInclude,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.auditLead.count(),
    ]);

    return {
      data: leads.map((lead) => this.mapLead(lead)),
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private mapLead(lead: LeadWithSessionResult) {
    return {
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
    };
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
    const leads = await this.prisma.auditLead.findMany({
      orderBy: { createdAt: 'desc' },
      include: leadInclude,
    });
    const mappedLeads = leads.map((lead) => this.mapLead(lead));

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

    const rows = mappedLeads.map((lead) => [
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

