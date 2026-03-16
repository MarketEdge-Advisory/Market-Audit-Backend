# MarketEdge Advisory — Backend

NestJS REST API for the MarketEdge Marketing Audit platform. Handles audit sessions, scoring, lead capture, email delivery, and admin access.

---

## Tech Stack

- **Framework**: NestJS 11
- **Language**: TypeScript
- **Database**: PostgreSQL (via Prisma ORM)
- **Email**: Resend
- **Auth**: JWT (Passport.js)
- **Validation**: class-validator + class-transformer

---

## Project Structure

```
src/
├── admin/
│   ├── admin.controller.ts   # Protected admin endpoints
│   ├── admin.module.ts
│   └── admin.service.ts      # Data queries + CSV export
│
├── audit/
│   ├── dto/
│   │   ├── save-answer.dto.ts
│   │   ├── save-lead.dto.ts   # All 5 fields required
│   │   └── start-audit.dto.ts
│   ├── audit.controller.ts
│   ├── audit.module.ts
│   └── audit.service.ts      # Core audit logic + scoring
│
├── auth/
│   ├── dto/
│   │   └── login.dto.ts
│   ├── guards/
│   │   └── jwt-auth.guard.ts
│   ├── strategies/
│   │   └── jwt.strategy.ts
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   └── auth.service.ts       # Validates credentials from .env
│
├── email/
│   ├── email.module.ts
│   └── email.service.ts      # Resend client + HTML email templates
│
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── app.module.ts             # Imports all modules
└── main.ts                   # Bootstrap + CORS + ValidationPipe

prisma/
├── schema.prisma
└── seed.ts                   # Seeds the audit template

scripts/
└── generate-secret.ts        # Auto-generates JWT_SECRET in .env
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/marketedge_db"

# Resend email service
RESEND_API_KEY=""

# Admin credentials (used for /auth/login)
ADMIN_EMAIL="hammed@marketedgeadvisory.com"
ADMIN_PASSWORD="your_strong_password"

# JWT — leave empty, auto-generated on first start
JWT_SECRET=""
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Install required auth packages
npm install @nestjs/jwt @nestjs/passport passport passport-jwt
npm install -D @types/passport-jwt

# Install Resend
npm install resend

# Apply database migrations
npx prisma migrate dev

# Seed the audit template
npm run seed

# Start development server (also auto-generates JWT_SECRET if empty)
npm run start:dev
```

The server runs on `http://localhost:3000` by default.

---

## API Endpoints

### Public — Audit

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/audit/template` | Get the active audit template with all sections, questions, and options |
| `POST` | `/audit/start` | Create a new audit session |
| `POST` | `/audit/:sessionId/answer` | Save or update a single answer |
| `POST` | `/audit/:sessionId/submit` | Score the session and lock the result |
| `POST` | `/audit/:sessionId/lead` | Save contact info and unlock the result |
| `GET` | `/audit/:sessionId/result` | Get the result (locked or unlocked) |
| `POST` | `/audit/:sessionId/request-call` | Send strategy call emails to client + company |

### Auth

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/auth/login` | Login with email + password, returns JWT |

### Admin (JWT required)

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/admin/leads` | All leads with their results |
| `GET` | `/admin/leads/export` | Download leads as CSV |
| `GET` | `/admin/leads/:sessionId` | Single session with full answers |
| `DELETE` | `/admin/sessions/:sessionId` | Delete a session and all related data |

---

## Audit Flow

```
POST /audit/start
      ↓
POST /audit/:id/answer  (×25 — one per question)
      ↓
POST /audit/:id/submit  → scores session, locks result
      ↓
POST /audit/:id/lead    → saves contact info, unlocks result, sends results email
      ↓
GET  /audit/:id/result  → returns full result to frontend
      ↓
POST /audit/:id/request-call  → sends strategy call emails, opens calendar
```

---

## Scoring

Scores are calculated in `submitAudit()`:

- Each answer carries a `pointsAwarded` value from the selected option
- Section scores are summed per section
- Total score = sum of all section scores (max 250)
- Tier is resolved by range:

| Score Range | Tier |
|-------------|------|
| 0 – 99 | Foundational |
| 100 – 159 | Growth |
| 160 – 209 | Advanced |
| 210 – 250 | Marketing Leader |

---

## Email Service

Two emails are sent at two points in the flow:

**After `saveLead`** (`sendResultsEmail`):
- Client receives: full results report with section breakdown, recommendation, and "Schedule a Strategy Call" button
- Company receives: lead notification with contact details and section scores

**After `requestCall`** (`sendCallRequestEmail`):
- Client receives: booking confirmation with full results and "Book your slot" button
- Company receives: call request notification with lead details

Email is non-blocking — failures are logged but do not break the API response.

### Resend setup

1. Sign up at resend.com
2. Add your API key to `.env` as `RESEND_API_KEY`
3. Verify your domain (`marketedgeadvisory.com`) in the Resend dashboard
4. Until domain is verified, use `onboarding@resend.dev` as `FROM_EMAIL` in `email.service.ts`

---

## Auth

Admin login uses credentials stored in `.env` — no database table needed for a single-admin setup.

```
POST /auth/login
{ "email": "hammed@marketedgeadvisory.com", "password": "..." }
→ { "access_token": "eyJ..." }
```

The token expires after **8 hours**. All `/admin/*` routes require `Authorization: Bearer <token>`.

---

## Database

Schema is in `prisma/schema.prisma`. Key models:

| Model | Purpose |
|-------|---------|
| `AuditTemplate` | The questionnaire template (versioned) |
| `AuditSection` | 5 sections per template |
| `AuditQuestion` | 25 questions total |
| `AuditOption` | 3–5 options per question with point values |
| `AuditSession` | One per user visit, tracks progress |
| `AuditAnswer` | One per question answered |
| `AuditResult` | Computed score + tier, locked until lead is saved |
| `AuditLead` | Contact info submitted on the contact form |

### Useful commands

```bash
# Open Prisma Studio (visual DB browser)
npx prisma studio

# Create a new migration after schema changes
npx prisma migrate dev --name your-migration-name

# Apply migrations in production
npx prisma migrate deploy

# Re-seed the audit template
npm run seed
```

---

## Scripts

```bash
npm run start:dev     # Start with hot reload (also runs generate-secret.ts)
npm run start:prod    # Start production build
npm run build         # Build + run migrations + seed
npm run seed          # Seed audit template
npx prisma studio     # Open DB browser at localhost:5555
```