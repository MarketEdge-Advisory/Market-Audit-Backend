import { Module } from '@nestjs/common';
import { AuditController } from './audit.controller';
import { AuditService } from './audit.service';
import { EmailModule } from '../email/email.module';
import { LogsModule } from '../logs/logs.module';

@Module({
  imports: [EmailModule, LogsModule],
  controllers: [AuditController],
  providers: [AuditService],
})
export class AuditModule {}