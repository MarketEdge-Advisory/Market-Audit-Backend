# MEA Audit Backend

NestJS + Prisma backend for a marketing audit flow.

## What this includes

- Versioned audit template (sections, questions, options, points)
- Audit session lifecycle: start -> answer -> submit
- Server-side score calculation (section scores + total + tier)
- Lead capture gate before full result unlock
- Seed script with all 25 questions and point mappings

## Environment

Create `.env` from `.env.example` and set your DB connection.

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mea_audit?schema=public"
PORT=3000
```

## Install

```bash
npm install
```

## Prisma setup

```bash
npm run prisma:generate
npm run prisma:migrate -- --name init_audit
npm run db:seed
```

## Run server

```bash
npm run start:dev
```

## API endpoints

- `GET /audit/template`
- `POST /audit/start`
- `POST /audit/:sessionId/answer`
- `POST /audit/:sessionId/submit`
- `POST /audit/:sessionId/lead`
- `GET /audit/:sessionId/result`

## Request examples

Start:

```json
POST /audit/start
{}
```

Save answer:

```json
POST /audit/{sessionId}/answer
{
  "questionId": "<question-id>",
  "optionId": "<option-id>"
}
```

Submit:

```json
POST /audit/{sessionId}/submit
```

Lead capture:

```json
POST /audit/{sessionId}/lead
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+2348000000000",
  "companyName": "Acme Ltd",
  "position": "Marketing Manager"
}
```
