import { Controller, Delete, Get, Param, Query, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { QueryLeadsDto } from './dto/query-leads.dto';

@Controller('admin')
@UseGuards(JwtAuthGuard) // all routes in this controller require a valid JWT
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // GET /admin/leads
  // Returns all leads with their audit results
  @Get('leads')
  getAllLeads(@Query() query: QueryLeadsDto) {
    return this.adminService.getAllLeads(query);
  }

  // GET /admin/leads/export
  // Downloads a CSV of all leads
  // Must be declared BEFORE :sessionId to avoid route conflict
  @Get('leads/export')
  async exportLeads(@Query() query: QueryLeadsDto, @Res() res: Response) {
    const csv = await this.adminService.exportLeadsCsv(query);
    const filename = `leads-${new Date().toISOString().split('T')[0]}.csv`;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.send(csv);
  }

  // GET /admin/leads/:sessionId
  // Returns full detail for a single session including all answers
  @Get('leads/:sessionId')
  getSessionDetail(@Param('sessionId') sessionId: string) {
    return this.adminService.getSessionDetail(sessionId);
  }

  // DELETE /admin/sessions/:sessionId
  // Deletes a session and all related data
  @Delete('sessions/:sessionId')
  deleteSession(@Param('sessionId') sessionId: string) {
    return this.adminService.deleteSession(sessionId);
  }
}
