import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { LogsService } from './logs.service';
import { QueryLogsDto } from './dto/query-logs.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

// query logs is changing

@UseGuards(JwtAuthGuard)
@Controller('admin')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Get('logs')
  findAll(@Query() query: QueryLogsDto) {
    return this.logsService.findAll(query);
  }
}
