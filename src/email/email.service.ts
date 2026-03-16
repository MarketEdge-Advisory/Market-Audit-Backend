import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

interface SectionScore {
  sectionCode: string;
  title: string;
  score: number;
  maxScore: number;
}

interface SendResultsEmailInput {
  clientEmail: string;
  clientName: string;
  sessionId: string;
  tier: string;
  message: string;
  totalScore: number;
  maxScore: number;
  sectionScores: SectionScore[];
}

interface SendCallRequestEmailInput {
  clientEmail: string;
  clientName: string;
  tier: string;
  message: string;
  totalScore: number;
  maxScore: number;
  sectionScores: SectionScore[];
}

const SECTION_EMOJI: Record<string, string> = {
  SECTION_1: '🎯',
  SECTION_2: '🌐',
  SECTION_3: '✍️',
  SECTION_4: '📱',
  SECTION_5: '📊',
};

const TIER_RECOMMENDATION: Record<string, string> = {
  Foundational: `Start by documenting your ideal customer profile and setting clear revenue-linked marketing goals. Build a consistent content and social media cadence before investing in paid channels.`,
  Growth: `You have solid momentum. Focus on tightening attribution, improving content consistency, and testing paid channels with clear CAC targets to scale what's already working.`,
  Advanced: `Your marketing is well-managed. Double down on your strongest channels, invest in brand differentiation, and explore advanced strategies like account-based marketing or retention loops.`,
  'Marketing Leader': `Focus on optimization and scaling what's working. Consider advanced strategies or expansion into new markets.`,
};

// ── Shared HTML builders ──────────────────────────────────────────────────────

function buildSectionRowsHtml(sectionScores: SectionScore[]): string {
  return sectionScores
    .map((s) => {
      const pct = Math.round((s.score / s.maxScore) * 100);
      const color = pct >= 80 ? '#16A34A' : pct >= 50 ? '#A3A000' : '#C0392B';
      const emoji = SECTION_EMOJI[s.sectionCode] ?? '📋';
      return `
        <tr>
          <td style="padding:10px 0;font-size:14px;color:#374151;">${emoji} ${s.title}</td>
          <td style="padding:10px 0;font-size:14px;color:#374151;text-align:right;font-weight:700;">${s.score} / ${s.maxScore}</td>
        </tr>
        <tr>
          <td colspan="2" style="padding-bottom:12px;">
            <div style="background:#F3F4F6;border-radius:999px;height:8px;overflow:hidden;">
              <div style="background:${color};width:${pct}%;height:100%;border-radius:999px;"></div>
            </div>
          </td>
        </tr>
      `;
    })
    .join('');
}

function buildResultsBlock(
  tier: string,
  message: string,
  totalScore: number,
  maxScore: number,
  percentage: number,
  sectionRowsHtml: string,
  recommendation: string,
): string {
  return `
    <div style="background:#F5F0E8;border-radius:12px;padding:28px;text-align:center;margin-bottom:28px;">
      <p style="margin:0 0 4px;font-size:20px;font-weight:800;color:#111827;">${tier} 🏆</p>
      <p style="margin:0 0 20px;font-size:13px;color:#6B7280;">${message}</p>
      <p style="margin:0 0 16px;">
        <span style="font-size:48px;font-weight:800;color:#111827;line-height:1;">${totalScore}</span>
        <span style="font-size:16px;color:#6B7280;margin-left:4px;">out of ${maxScore} (${percentage}%)</span>
      </p>
      <div style="background:#E5E7EB;border-radius:999px;height:10px;overflow:hidden;">
        <div style="background:#16A34A;width:${percentage}%;height:100%;border-radius:999px;"></div>
      </div>
    </div>
    <h2 style="font-size:16px;font-weight:800;color:#111827;margin:0 0 16px;">Section Breakdown</h2>
    <table width="100%" cellpadding="0" cellspacing="0">${sectionRowsHtml}</table>
    <div style="background:#FAFAFA;border:1px solid #E5E7EB;border-radius:12px;padding:24px;margin-top:24px;text-align:center;">
      <h3 style="margin:0 0 8px;font-size:15px;font-weight:800;color:#111827;">Our Recommendation</h3>
      <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.6;">${recommendation}</p>
    </div>
  `;
}

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable()
export class EmailService {
  private readonly resend: Resend;
  private readonly logger = new Logger(EmailService.name);

  private readonly FROM_EMAIL = 'onboarding@resend.dev'; // keep until domain verified
  private readonly COMPANY_EMAIL = 'hammed@marketedgeadvisory.com'; // ← updated
  private readonly COMPANY_NAME = 'MarketEdge Advisory';
  private readonly CALENDAR_LINK =
    'https://calendar.app.google/pxVECnW2yNYbGEdC7';

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  private buildEmailWrapper(headerTitle: string, bodyContent: string): string {
    return `
      <!DOCTYPE html>
      <html>
        <body style="margin:0;padding:0;background:#F9FAFB;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
                <tr>
                  <td style="background:#F5A623;padding:32px 40px;text-align:center;">
                    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800;letter-spacing:-0.3px;">${headerTitle}</h1>
                    <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">${this.COMPANY_NAME}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 40px;">
                    ${bodyContent}
                    <p style="margin:28px 0 0;font-size:13px;color:#9CA3AF;text-align:center;">${this.COMPANY_NAME} · marketedgeadvisory.com</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
      </html>
    `;
  }

  private buildCompanyNotificationHtml(
    headerEmoji: string,
    headerTitle: string,
    subheading: string,
    clientName: string,
    clientEmail: string,
    tier: string,
    totalScore: number,
    maxScore: number,
    percentage: number,
    sectionScores: SectionScore[],
  ): string {
    const rows = sectionScores
      .map(
        (s) =>
          `<tr>
            <td style="padding:4px 0;font-size:13px;color:#374151;">${s.title}</td>
            <td style="padding:4px 0;font-size:13px;color:#374151;text-align:right;">${s.score}/${s.maxScore}</td>
          </tr>`,
      )
      .join('');

    return `
      <!DOCTYPE html>
      <html>
        <body style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background:#F9FAFB;margin:0;padding:40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr><td align="center">
              <table width="480" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
                <tr><td>
                  <h2 style="margin:0 0 4px;font-size:18px;font-weight:800;color:#111827;">${headerEmoji} ${headerTitle}</h2>
                  <p style="margin:0 0 24px;font-size:13px;color:#6B7280;">${subheading}</p>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                    <tr><td style="font-size:13px;color:#6B7280;padding:4px 0;">Name</td><td style="font-size:13px;color:#111827;font-weight:600;text-align:right;">${clientName}</td></tr>
                    <tr><td style="font-size:13px;color:#6B7280;padding:4px 0;">Email</td><td style="font-size:13px;color:#111827;font-weight:600;text-align:right;">${clientEmail}</td></tr>
                    <tr><td style="font-size:13px;color:#6B7280;padding:4px 0;">Tier</td><td style="font-size:13px;color:#111827;font-weight:600;text-align:right;">${tier}</td></tr>
                    <tr><td style="font-size:13px;color:#6B7280;padding:4px 0;">Score</td><td style="font-size:13px;color:#111827;font-weight:600;text-align:right;">${totalScore}/${maxScore} (${percentage}%)</td></tr>
                  </table>
                  <h3 style="margin:0 0 8px;font-size:14px;font-weight:700;color:#111827;">Section Scores</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">${rows}</table>
                  <div style="text-align:center;">
                    <a href="mailto:${clientEmail}" style="display:inline-block;background:#F5A623;color:#fff;font-weight:700;font-size:14px;padding:12px 28px;border-radius:999px;text-decoration:none;">Reply to Lead</a>
                  </div>
                </td></tr>
              </table>
            </td></tr>
          </table>
        </body>
      </html>
    `;
  }

  // ── Sent after saveLead ───────────────────────────────────────────────────────
  async sendResultsEmail(input: SendResultsEmailInput): Promise<void> {
    const {
      clientEmail,
      clientName,
      tier,
      message,
      totalScore,
      maxScore,
      sectionScores,
    } = input;
    const recommendation = TIER_RECOMMENDATION[tier] ?? message;
    const percentage = Math.round((totalScore / maxScore) * 100);
    const sectionRowsHtml = buildSectionRowsHtml(sectionScores);
    const resultsBlock = buildResultsBlock(
      tier,
      message,
      totalScore,
      maxScore,
      percentage,
      sectionRowsHtml,
      recommendation,
    );

    const clientBody = `
      <p style="margin:0 0 24px;font-size:15px;color:#374151;">Hi <strong>${clientName}</strong>, here's your personalized marketing audit report.</p>
      ${resultsBlock}
      <div style="text-align:center;margin-top:28px;">
        <a href="${this.CALENDAR_LINK}" style="display:inline-block;background:#F5A623;color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:999px;text-decoration:none;">
          Schedule a Strategy Call
        </a>
      </div>
    `;

    await Promise.all([
      this.resend.emails.send({
        from: `${this.COMPANY_NAME} <${this.FROM_EMAIL}>`,
        to: clientEmail,
        subject: `Your Marketing Audit Results — ${tier}`,
        html: this.buildEmailWrapper(
          'Your Marketing Audit Results',
          clientBody,
        ),
      }),
      this.resend.emails.send({
        from: `${this.COMPANY_NAME} <${this.FROM_EMAIL}>`,
        to: this.COMPANY_EMAIL,
        subject: `New Audit Lead: ${clientName} — ${tier} (${totalScore}/${maxScore})`,
        html: this.buildCompanyNotificationHtml(
          '🎯',
          'New Audit Completed',
          'A lead just completed the marketing audit.',
          clientName,
          clientEmail,
          tier,
          totalScore,
          maxScore,
          percentage,
          sectionScores,
        ),
      }),
    ]).catch((err) => {
      this.logger.error('Failed to send results email', err);
    });
  }

  // ── Sent when client clicks "Schedule a Strategy Call" ───────────────────────
  async sendCallRequestEmail(input: SendCallRequestEmailInput): Promise<void> {
    const {
      clientEmail,
      clientName,
      tier,
      message,
      totalScore,
      maxScore,
      sectionScores,
    } = input;
    const recommendation = TIER_RECOMMENDATION[tier] ?? message;
    const percentage = Math.round((totalScore / maxScore) * 100);
    const sectionRowsHtml = buildSectionRowsHtml(sectionScores);
    const resultsBlock = buildResultsBlock(
      tier,
      message,
      totalScore,
      maxScore,
      percentage,
      sectionRowsHtml,
      recommendation,
    );

    const clientBody = `
      <p style="margin:0 0 16px;font-size:15px;color:#374151;">Hi <strong>${clientName}</strong>,</p>
      <p style="margin:0 0 24px;font-size:14px;color:#6B7280;line-height:1.6;">
        Thanks for requesting a strategy call! Our team has been notified and will be in touch to confirm your booking.
        Use the button below to pick a time that works for you.
      </p>
      ${resultsBlock}
      <div style="text-align:center;margin-top:28px;">
        <a href="${this.CALENDAR_LINK}" style="display:inline-block;background:#F5A623;color:#fff;font-weight:700;font-size:15px;padding:14px 32px;border-radius:999px;text-decoration:none;">
          Book your slot
        </a>
      </div>
    `;

    await Promise.all([
      this.resend.emails.send({
        from: `${this.COMPANY_NAME} <${this.FROM_EMAIL}>`,
        to: clientEmail,
        subject: `Your strategy call with ${this.COMPANY_NAME} — booking confirmation`,
        html: this.buildEmailWrapper('Strategy Call Requested', clientBody),
      }),
      this.resend.emails.send({
        from: `${this.COMPANY_NAME} <${this.FROM_EMAIL}>`,
        to: this.COMPANY_EMAIL,
        subject: `Strategy call requested: ${clientName} — ${tier} (${totalScore}/${maxScore})`,
        html: this.buildCompanyNotificationHtml(
          '📞',
          'Strategy Call Requested',
          'A lead has clicked "Schedule a Strategy Call".',
          clientName,
          clientEmail,
          tier,
          totalScore,
          maxScore,
          percentage,
          sectionScores,
        ),
      }),
    ]).catch((err) => {
      this.logger.error('Failed to send call request email', err);
    });
  }
}
