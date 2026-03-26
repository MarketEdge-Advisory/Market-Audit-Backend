import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

type OptionSeed = {
  label: string;
  points: number;
};

type QuestionSeed = {
  code: string;
  text: string;
  options: OptionSeed[];
};

type SectionSeed = {
  code: string;
  title: string;
  maxScore: number;
  questions: QuestionSeed[];
};

const sections: SectionSeed[] = [
  {
    code: 'SECTION_1',
    title: 'Strategic Leadership & Planning',
    maxScore: 50,
    questions: [
      {
        code: 'Q1',
        text: 'Who currently sets your overall marketing strategy?',
        options: [
          { label: 'We have a CMO or VP Marketing', points: 10 },
          { label: 'Our Marketing Manager handles strategy', points: 5 },
          { label: 'The CEO/Founder sets direction', points: 3 },
          { label: "We don't really have a formal strategy", points: 0 },
        ],
      },
      {
        code: 'Q2',
        text: 'Can you clearly connect your current marketing activities to revenue goals?',
        options: [
          { label: 'Yes, we have clear attribution', points: 10 },
          { label: 'Somewhat, we track some connections', points: 5 },
          { label: "No, we can't make those connections", points: 0 },
        ],
      },
      {
        code: 'Q3',
        text: 'How often do you conduct strategic marketing reviews with leadership?',
        options: [
          { label: 'Monthly or more', points: 10 },
          { label: 'Quarterly', points: 7 },
          { label: 'Annually or when something goes wrong', points: 3 },
          { label: 'Never/rarely', points: 0 },
        ],
      },
      {
        code: 'Q4',
        text: 'Do you have documented ideal customer profiles and a clear positioning strategy?',
        options: [
          { label: 'Yes, documented and regularly updated', points: 10 },
          { label: "We have something, but it's outdated", points: 5 },
          { label: 'We know our customers but nothing is documented', points: 2 },
          { label: "No, we're figuring it out as we go", points: 0 },
        ],
      },
      {
        code: 'Q5',
        text: 'Rate this statement: Our marketing budget is allocated based on data-driven ROI analysis.',
        options: [
          { label: 'Strongly Agree', points: 10 },
          { label: 'Somewhat Agree', points: 6 },
          { label: 'Neutral', points: 3 },
          { label: 'Disagree', points: 0 },
        ],
      },
    ],
  },
  {
    code: 'SECTION_2',
    title: 'Digital Presence & Brand',
    maxScore: 50,
    questions: [
      {
        code: 'Q6',
        text: 'When was your website last redesigned or significantly updated?',
        options: [
          { label: 'Within the last 12 months', points: 10 },
          { label: '1-2 years ago', points: 6 },
          { label: '2-3 years ago', points: 3 },
          { label: "3+ years ago or I'm not sure", points: 0 },
        ],
      },
      {
        code: 'Q7',
        text: 'Does your website clearly communicate your value proposition within 5 seconds of landing?',
        options: [
          { label: "Yes, it's crystal clear", points: 10 },
          { label: 'Somewhat clear', points: 5 },
          { label: 'No, visitors are often confused', points: 0 },
        ],
      },
      {
        code: 'Q8',
        text: 'Is your website optimized for mobile and does it load quickly (under 3 seconds)?',
        options: [
          { label: 'Yes, fully optimized', points: 10 },
          { label: 'Mostly optimized', points: 6 },
          { label: "No or I'm not sure", points: 0 },
        ],
      },
      {
        code: 'Q9',
        text: 'Do you have conversion tracking and analytics properly set up on your website?',
        options: [
          { label: 'Yes, we track everything', points: 10 },
          { label: 'Basic tracking only', points: 5 },
          { label: 'No or very limited tracking', points: 0 },
        ],
      },
      {
        code: 'Q10',
        text: 'How would you rate your brand consistency across all touchpoints (website, social, materials)?',
        options: [
          { label: 'Very consistent, we have brand guidelines we follow', points: 10 },
          { label: 'Somewhat consistent', points: 5 },
          { label: 'Inconsistent, things look different everywhere', points: 0 },
        ],
      },
    ],
  },
  {
    code: 'SECTION_3',
    title: 'Content & Messaging',
    maxScore: 50,
    questions: [
      {
        code: 'Q11',
        text: 'How frequently do you publish fresh, original content (blog, video, resources)?',
        options: [
          { label: 'Weekly or more', points: 10 },
          { label: 'Monthly', points: 6 },
          { label: 'Occasionally/when we have time', points: 2 },
          { label: 'Rarely or never', points: 0 },
        ],
      },
      {
        code: 'Q12',
        text: "Do you have a documented content strategy aligned with your buyer's journey?",
        options: [
          { label: 'Yes, fully documented and followed', points: 10 },
          { label: 'We have some plans but not formal', points: 5 },
          { label: 'No, we create content ad-hoc', points: 0 },
        ],
      },
      {
        code: 'Q13',
        text: 'Is your messaging differentiated from competitors?',
        options: [
          { label: 'Yes, we have clear differentiation', points: 10 },
          { label: 'Somewhat different', points: 5 },
          { label: 'No, we sound like everyone else', points: 0 },
        ],
      },
      {
        code: 'Q14',
        text: 'Do you repurpose content across multiple channels effectively?',
        options: [
          { label: 'Yes, we have a system for this', points: 10 },
          { label: 'Sometimes', points: 5 },
          { label: 'No, content lives in one place', points: 0 },
        ],
      },
      {
        code: 'Q15',
        text: 'Rate this statement: Our content generates qualified leads consistently.',
        options: [
          { label: 'Strongly Agree', points: 10 },
          { label: 'Somewhat Agree', points: 6 },
          { label: 'Neutral', points: 3 },
          { label: 'Disagree', points: 0 },
        ],
      },
    ],
  },
  {
    code: 'SECTION_4',
    title: 'Social Media & Community',
    maxScore: 50,
    questions: [
      {
        code: 'Q16',
        text: 'How active is your company on social media?',
        options: [
          { label: 'Daily posting with engagement', points: 10 },
          { label: 'Weekly posting', points: 6 },
          { label: 'Sporadic posting', points: 2 },
          { label: 'Rarely or never', points: 0 },
        ],
      },
      {
        code: 'Q17',
        text: 'Do you have a social media content calendar and strategy?',
        options: [
          { label: 'Yes, planned 30+ days ahead', points: 10 },
          { label: 'Yes, but only 1-2 weeks ahead', points: 6 },
          { label: 'No, we post when we think of something', points: 0 },
        ],
      },
      {
        code: 'Q18',
        text: 'Are you actively monitoring and responding to comments/messages?',
        options: [
          { label: 'Yes, within hours', points: 10 },
          { label: 'Yes, but it takes 1-2 days', points: 5 },
          { label: 'Rarely or inconsistently', points: 0 },
        ],
      },
      {
        code: 'Q19',
        text: 'Do you track social media performance metrics and ROI?',
        options: [
          { label: 'Yes, comprehensive tracking', points: 10 },
          { label: 'Basic metrics only', points: 5 },
          { label: 'No or very limited', points: 0 },
        ],
      },
      {
        code: 'Q20',
        text: 'Rate this statement: Our social media drives meaningful business results.',
        options: [
          { label: 'Strongly Agree', points: 10 },
          { label: 'Somewhat Agree', points: 6 },
          { label: 'Neutral', points: 3 },
          { label: 'Disagree', points: 0 },
        ],
      },
    ],
  },
  {
    code: 'SECTION_5',
    title: 'Paid Advertising & Performance',
    maxScore: 50,
    questions: [
      {
        code: 'Q21',
        text: 'Are you currently running paid advertising campaigns?',
        options: [
          { label: 'Yes, actively across multiple channels', points: 10 },
          { label: 'Yes, on 1-2 channels', points: 6 },
          { label: 'Tried it before but stopped', points: 3 },
          { label: 'No, never', points: 0 },
        ],
      },
      {
        code: 'Q22',
        text: 'Do you know your Customer Acquisition Cost (CAC) from paid channels?',
        options: [
          { label: 'Yes, we track it precisely', points: 10 },
          { label: 'We have a rough idea', points: 5 },
          { label: "No, we don't track this", points: 0 },
        ],
      },
      {
        code: 'Q23',
        text: 'Are your ads regularly optimized based on performance data?',
        options: [
          { label: 'Yes, ongoing optimization', points: 10 },
          { label: 'Occasionally reviewed', points: 5 },
          { label: 'Set and forget approach', points: 0 },
          { label: 'N/A - not running ads', points: 5 },
        ],
      },
      {
        code: 'Q24',
        text: 'Do you have proper conversion tracking and pixels set up?',
        options: [
          { label: 'Yes, comprehensive tracking', points: 10 },
          { label: 'Basic tracking', points: 5 },
          { label: 'No or not sure', points: 0 },
          { label: 'N/A - not running ads', points: 5 },
        ],
      },
      {
        code: 'Q25',
        text: "What's your paid advertising ROI?",
        options: [
          { label: 'Positive and profitable', points: 10 },
          { label: 'Breaking even', points: 5 },
          { label: 'Losing money', points: 0 },
          { label: "Don't know/not tracking", points: 0 },
          { label: 'N/A - not running ads', points: 5 },
        ],
      },
    ],
  },
];

// ─── Admin seed config ─────────────────────────────────────
const TEMPLATE_VERSION = 1;
const TEMPLATE_NAME = 'Marketing Audit';
const TEMPLATE_MAX_SCORE = sections.reduce(
  (total, section) => total + section.maxScore,
  0,
);

const ADMIN_EMAIL =
  process.env.SEED_ADMIN_EMAIL?.trim() ||
  process.env.ADMIN_EMAIL?.trim() ||
  'agency@marketedgeadvisory.com';

const adminPasswordFromEnv =
  process.env.SEED_ADMIN_PASSWORD?.trim() ||
  process.env.ADMIN_PASSWORD?.trim();

const ADMIN_PASSWORD = adminPasswordFromEnv || 'changeme123';
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

function buildTemplateCreateData() {
  return {
    name: TEMPLATE_NAME,
    version: TEMPLATE_VERSION,
    isActive: true,
    maxScore: TEMPLATE_MAX_SCORE,
    sections: {
      create: sections.map((section, sectionIndex) => ({
        code: section.code,
        title: section.title,
        maxScore: section.maxScore,
        sortOrder: sectionIndex + 1,
        questions: {
          create: section.questions.map((question, questionIndex) => ({
            code: question.code,
            text: question.text,
            sortOrder: questionIndex + 1,
            options: {
              create: question.options.map((option, optionIndex) => ({
                label: option.label,
                points: option.points,
                sortOrder: optionIndex + 1,
              })),
            },
          })),
        },
      })),
    },
  };
}

async function seedAdmin() {
  const existing = await prisma.adminUser.findUnique({
    where: { email: ADMIN_EMAIL },
    select: { id: true },
  });

  if (!existing && IS_PRODUCTION && !adminPasswordFromEnv) {
    throw new Error(
      'ADMIN_PASSWORD or SEED_ADMIN_PASSWORD must be set before seeding a new admin in production.',
    );
  }

  const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 12);

  await prisma.adminUser.upsert({
    where: { email: ADMIN_EMAIL },
    update: {},
    create: {
      email: ADMIN_EMAIL,
      hashedPassword,
    },
  });

  if (existing) {
    console.log(`Admin user already exists, leaving unchanged -> ${ADMIN_EMAIL}`);
    return;
  }

  console.log(`Seeded admin user -> ${ADMIN_EMAIL}`);
}

async function seedTemplate() {
  const existing = await prisma.auditTemplate.findUnique({
    where: { version: TEMPLATE_VERSION },
    select: { id: true },
  });

  await prisma.auditTemplate.upsert({
    where: { version: TEMPLATE_VERSION },
    update: {},
    create: buildTemplateCreateData(),
  });

  if (existing) {
    console.log(
      `Audit template v${TEMPLATE_VERSION} already exists, leaving unchanged. Bump the version to publish a new template.`,
    );
    return;
  }

  console.log(`Seeded ${TEMPLATE_NAME} template v${TEMPLATE_VERSION}`);
}

async function main() {
  await seedTemplate();
  await seedAdmin();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
