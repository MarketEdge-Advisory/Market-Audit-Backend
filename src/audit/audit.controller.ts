import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuditService } from './audit.service';
import { SaveAnswerDto } from './dto/save-answer.dto';
import { SaveLeadDto } from './dto/save-lead.dto';
import { StartAuditDto } from './dto/start-audit.dto';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Get('template')
  getTemplate() {
    return this.auditService.getTemplate();
  }

  @Post('start')
  start(@Body() body: StartAuditDto) {
    return this.auditService.startAudit(body ?? {});
  }

  @Post(':sessionId/answer')
  saveAnswer(
    @Param('sessionId') sessionId: string,
    @Body() body: SaveAnswerDto,
  ) {
    return this.auditService.saveAnswer(sessionId, body);
  }

  @Post(':sessionId/submit')
  submit(@Param('sessionId') sessionId: string) {
    return this.auditService.submitAudit(sessionId);
  }

  @Post(':sessionId/lead')
  saveLead(@Param('sessionId') sessionId: string, @Body() body: SaveLeadDto) {
    return this.auditService.saveLead(sessionId, body);
  }

  @Get(':sessionId/result')
  getResult(@Param('sessionId') sessionId: string) {
    return this.auditService.getResult(sessionId);
  }

  @Post(':sessionId/request-call')
  async requestCall(@Param('sessionId') sessionId: string) {
    return this.auditService.requestCall(sessionId);
  }
}
