import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { LeadDateFilter, QueryLeadsDto } from './dto/query-leads.dto';

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

type DateRange = {
  gte?: Date;
  lt?: Date;
};

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  // ── All leads with their result ──────────────────────────────────────────────
  async getAllLeads(query: QueryLeadsDto) {
    const { page = 1, limit = 20, filter = LeadDateFilter.THIS_YEAR } = query;
    const where = this.buildLeadWhere(query);

    const [leads, total] = await this.prisma.$transaction([
      this.prisma.auditLead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        include: leadInclude,
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.auditLead.count({ where }),
    ]);

    return {
      data: leads.map((lead) => this.mapLead(lead)),
      meta: {
        total,
        page,
        limit,
        filter,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  private buildLeadWhere(query: QueryLeadsDto): Prisma.AuditLeadWhereInput {
    const createdAt = this.resolveLeadDateRange(query);
    return createdAt ? { createdAt } : {};
  }

  private resolveLeadDateRange(query: QueryLeadsDto): DateRange | undefined {
    const filter = query.filter ?? LeadDateFilter.THIS_YEAR;
    const now = new Date();

    switch (filter) {
      case LeadDateFilter.ALL_TIME:
        return undefined;
      case LeadDateFilter.YESTERDAY: {
        const start = this.startOfUtcDay(now);
        start.setUTCDate(start.getUTCDate() - 1);
        return { gte: start, lt: this.addUtcDays(start, 1) };
      }
      case LeadDateFilter.THIS_WEEK: {
        const start = this.startOfUtcWeek(now);
        return { gte: start, lt: this.addUtcDays(start, 7) };
      }
      case LeadDateFilter.LAST_WEEK: {
        const end = this.startOfUtcWeek(now);
        return { gte: this.addUtcDays(end, -7), lt: end };
      }
      case LeadDateFilter.THIS_MONTH: {
        const start = this.startOfUtcMonth(now);
        return { gte: start, lt: this.addUtcMonths(start, 1) };
      }
      case LeadDateFilter.LAST_MONTH: {
        const end = this.startOfUtcMonth(now);
        return { gte: this.addUtcMonths(end, -1), lt: end };
      }
      case LeadDateFilter.THIS_YEAR: {
        const start = this.startOfUtcYear(now);
        return { gte: start, lt: this.addUtcYears(start, 1) };
      }
      case LeadDateFilter.LAST_YEAR: {
        const end = this.startOfUtcYear(now);
        return { gte: this.addUtcYears(end, -1), lt: end };
      }
      case LeadDateFilter.CUSTOM:
        return this.resolveCustomDateRange(query);
      default:
        return undefined;
    }
  }

  private resolveCustomDateRange(query: QueryLeadsDto): DateRange {
    if (!query.startDate || !query.endDate) {
      throw new BadRequestException(
        'startDate and endDate are required when filter=custom.',
      );
    }

    const start = this.parseDateBoundary(query.startDate, 'start');
    const end = this.parseDateBoundary(query.endDate, 'end');

    if (start >= end) {
      throw new BadRequestException(
        'startDate must be earlier than or equal to endDate.',
      );
    }

    return { gte: start, lt: end };
  }

  private parseDateBoundary(value: string, boundary: 'start' | 'end'): Date {
    const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(value);

    if (isDateOnly) {
      const date = new Date(`${value}T00:00:00.000Z`);
      if (Number.isNaN(date.getTime())) {
        throw new BadRequestException(`Invalid date value: ${value}`);
      }
      if (boundary === 'end') {
        date.setUTCDate(date.getUTCDate() + 1);
      }
      return date;
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new BadRequestException(`Invalid date value: ${value}`);
    }

    if (boundary === 'end') {
      date.setUTCMilliseconds(date.getUTCMilliseconds() + 1);
    }

    return date;
  }

  private startOfUtcDay(date: Date): Date {
    return new Date(
      Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
    );
  }

  private startOfUtcWeek(date: Date): Date {
    const start = this.startOfUtcDay(date);
    const day = start.getUTCDay();
    const diff = day === 0 ? -6 : 1 - day;
    start.setUTCDate(start.getUTCDate() + diff);
    return start;
  }

  private startOfUtcMonth(date: Date): Date {
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
  }

  private startOfUtcYear(date: Date): Date {
    return new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  }

  private addUtcDays(date: Date, days: number): Date {
    const next = new Date(date);
    next.setUTCDate(next.getUTCDate() + days);
    return next;
  }

  private addUtcMonths(date: Date, months: number): Date {
    const next = new Date(date);
    next.setUTCMonth(next.getUTCMonth() + months);
    return next;
  }

  private addUtcYears(date: Date, years: number): Date {
    const next = new Date(date);
    next.setUTCFullYear(next.getUTCFullYear() + years);
    return next;
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
  async exportLeadsCsv(query: QueryLeadsDto): Promise<string> {
    const where = this.buildLeadWhere(query);
    const leads = await this.prisma.auditLead.findMany({
      where,
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

