import { Module } from '@nestjs/common';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LogsController],
  providers:   [LogsService,  PrismaService],
  exports:     [LogsService,], // other services can inject this to write logs
})
export class LogsModule {}