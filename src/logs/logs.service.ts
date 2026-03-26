import { Injectable } from '@nestjs/common';
import { QueryLogsDto } from './dto/query-logs.dto';
import { PrismaService } from 'src/prisma/prisma.service';

export type CreateLogInput = {
  adminId?:  string;
  actorType: string;
  action:    string;
  entity:    string;
  entityId:  string;
  before?:   object;
  after?:    object;
  metadata?: object;
};

@Injectable()
export class LogsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateLogInput) {
    return this.prisma.adminAuditLog.create({ data: input });
  }

  async findAll(query: QueryLogsDto) {
    const { entity, entityId, actorType, action, page = 1, limit = 20 } = query;

    const where = {
      ...(entity    && { entity }),
      ...(entityId  && { entityId }),
      ...(actorType && { actorType }),
      ...(action    && { action }),
    };

    const [data, total] = await this.prisma.$transaction([
      this.prisma.adminAuditLog.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip:    (page - 1) * limit,
        take:    limit,
        include: {
          admin: { select: { id: true, email: true } },
        },
      }),
      this.prisma.adminAuditLog.count({ where }),
    ]);

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}