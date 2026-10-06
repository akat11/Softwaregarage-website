import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  GraduationCap,
  HeartPulse,
  Clock,
  Layers,
  Sparkles,
  Sliders,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Calendar,
  BookOpen,
  FileQuestion,
  ListChecks,
  PenTool,
  Users,
  CalendarDays,
  ShieldAlert,
  Activity,
  Workflow,
  Cpu,
  Brain,
  Zap,
} from 'lucide-react'

export interface CaseStudyStep {
  step: string
  title: string
  description: string
}

export interface CaseStudyCard {
  title: string
  description: string
  icon?: LucideIcon
}

export interface CaseStudyData {
  slug: string
  route: string
  tag: string
  eyebrow: string
  headline: string
  headlineHighlight: string
  description: string
  metadata: {
    domain: string
    aiType: string
    statusOrProductLabel: 'STATUS' | 'PRODUCT'
    statusOrProduct: string
  }
  heroPipeline: string[]
  problem: {
    eyebrow: string
    headline: string
    body: string
    cards: CaseStudyCard[]
  }
  intelligenceLayer: {
    headline: string
    highlightStatement: string
    body: string
    architectureFlow: string[]
  }
  howItWorks: {
    headline: string
    steps: CaseStudyStep[]
  }
  capabilities: {
    headline: string
    cards: CaseStudyCard[]
  }
  productShowcase: {
    headline: string
    subtitle: string
  }
  humanAi: {
    headline: string
    highlightLine: string
    body: string
    flow: string[]
  }
  impact: {
    headline: string
    cards: CaseStudyCard[]
  }
  future: {
    headline: string
    body?: string
    cards: CaseStudyCard[]
  }
  finalCta: {
    headline: string
    highlightLine?: string
    primaryBtn: { label: string; to: string }
    secondaryBtn: { label: string; to: string }
  }
  relatedSlugs: string[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const aiCaseStudiesData: Record<string, CaseStudyData> = {
  'ai-payroll-automation': {
    slug: 'ai-payroll-automation',
    route: '/ai-case-studies/ai-payroll-automation',
    tag: 'BUSINESS',
    eyebrow: 'AI CASE STUDY · BUSINESS AUTOMATION',
    headline: "Payroll Shouldn't Begin With a Spreadsheet.",
    headlineHighlight: 'It Should Begin With Intelligence.',
    description:
      'Payroll teams spend hours turning attendance, leave and working-day data into calculations that are still vulnerable to manual errors. We designed an AI-assisted payroll workflow that transforms fragmented workforce data into a structured, reviewable payroll process.',
    metadata: {
      domain: 'Business Operations',
      aiType: 'Workflow Intelligence',
      statusOrProductLabel: 'STATUS',
      statusOrProduct: 'AI Product / Automation',
    },
    heroPipeline: [
      'Attendance Data',
      'Leave Records',
      'Working Days',
      'AI Payroll Engine',
      'Salary Calculation',
      'Human Review',
      'Payroll Ready',
    ],
    problem: {
      eyebrow: 'THE PROBLEM',
      headline: 'Payroll is a calculation problem disguised as a data problem.',
      body: "Attendance lives in one place. Leave records live somewhere else. Half-days need adjustment. Working days change. Salary rules vary. The real challenge isn't calculating salary. It's making sure every piece of information reaches the calculation correctly.",
      cards: [
        {
          title: 'Attendance Fragmentation',
          description:
            'Attendance data must be converted into meaningful working-day information before payroll can begin.',
          icon: Clock,
        },
        {
          title: 'Leave Adjustments',
          description:
            'Approved leaves, unpaid leaves and other exceptions can directly affect payroll calculations.',
          icon: Calendar,
        },
        {
          title: 'Half-Day Complexity',
          description:
            'Small attendance variations can create disproportionate manual effort during monthly processing.',
          icon: Sliders,
        },
        {
          title: 'Repetitive Verification',
          description:
            'Payroll teams repeatedly check the same data points before approving calculations.',
          icon: FileCheck,
        },
      ],
    },
    intelligenceLayer: {
      headline: "We didn't build another calculator.",
      highlightStatement: 'We built a workflow that understands the calculation.',
      body: 'The AI layer sits directly between raw workforce telemetry and financial processing rules. Rather than expecting human operators to manually reconcile punch logs, discrepancy flags, and compliance clauses across disconnected software, the intelligence layer unifies these signals and validates every parameter prior to computation.',
      architectureFlow: [
        'Attendance',
        'Leave Data',
        'Workforce Context',
        'AI PAYROLL ENGINE',
        'Review',
        'Payroll Ready',
      ],
    },
    howItWorks: {
      headline: 'From workforce activity to payroll-ready output.',
      steps: [
        {
          step: '01',
          title: 'Collect',
          description: 'Bring attendance, leave and working-day information into one workflow.',
        },
        {
          step: '02',
          title: 'Understand',
          description: 'The system interprets workforce data according to configured payroll rules.',
        },
        {
          step: '03',
          title: 'Calculate',
          description: 'Generate salary-related calculations from processed information.',
        },
        {
          step: '04',
          title: 'Detect',
          description: 'Surface exceptions and incomplete information for human review.',
        },
        {
          step: '05',
          title: 'Approve',
          description: 'Payroll teams review the generated results before final processing.',
        },
      ],
    },
    capabilities: {
      headline: 'Intelligence where payroll teams actually need it.',
      cards: [
        {
          title: 'Attendance Intelligence',
          description:
            'Convert attendance records into payroll-relevant working-day information.',
          icon: Clock,
        },
        {
          title: 'Leave Intelligence',
          description:
            'Account for leave records while processing employee payroll data.',
          icon: Calendar,
        },
        {
          title: 'Half-Day Detection',
          description: 'Identify and process partial attendance scenarios.',
          icon: Sliders,
        },
        {
          title: 'Salary Calculation',
          description:
            'Apply configured salary rules to processed workforce information.',
          icon: Briefcase,
        },
        {
          title: 'Exception Detection',
          description:
            'Surface records that require human attention instead of silently processing them.',
          icon: AlertCircle,
        },
        {
          title: 'Payroll Preparation',
          description:
            'Transform processed data into structured payroll-ready output.',
          icon: CheckCircle2,
        },
      ],
    },
    productShowcase: {
      headline: 'One workflow. Every payroll signal.',
      subtitle:
        'A unified control center translating biometric time logs, leave balances, and salary policies into review-ready pay cycles.',
    },
    humanAi: {
      headline: "Automation doesn't remove control.",
      highlightLine: 'It removes unnecessary effort.',
      body: 'Payroll remains a human-approved process. AI handles repetitive processing and surfaces exceptions. Humans retain the final decision.',
      flow: ['AI', 'PROCESS', 'FLAG', 'HUMAN REVIEW', 'APPROVE'],
    },
    impact: {
      headline: 'Less reconciliation. More confidence.',
      cards: [
        {
          title: 'Less Manual Processing',
          description: 'Reduce repetitive payroll preparation work.',
          icon: Zap,
        },
        {
          title: 'Structured Workflows',
          description:
            'Move payroll processing from scattered data to a defined workflow.',
          icon: Workflow,
        },
        {
          title: 'Exception Visibility',
          description:
            'Highlight records that need attention instead of hiding them inside spreadsheets.',
          icon: AlertCircle,
        },
        {
          title: 'Scalable Automation',
          description:
            'Build a payroll workflow that can evolve with the organization.',
          icon: Cpu,
        },
      ],
    },
    future: {
      headline: 'Payroll automation is only the beginning.',
      body: 'The intelligence layer can expand into workforce analytics, anomaly detection, forecasting and operational automation.',
      cards: [
        {
          title: 'Workforce Analytics',
          description:
            'Deep visibility into department overtime patterns, absenteeism clusters, and operational throughput.',
          icon: Brain,
        },
        {
          title: 'Anomaly Detection',
          description:
            'Machine learning models monitoring abnormal biometric clock-ins, ghost shifts, and contract discrepancies.',
          icon: AlertCircle,
        },
        {
          title: 'Cashflow Forecasting',
          description:
            'Predictive payroll obligations factoring seasonal overtime, variable bonuses, and statutory changes.',
          icon: Briefcase,
        },
        {
          title: 'Operational Automation',
          description:
            'Direct programmatic handoffs to statutory compliance filing and core banking disbursements.',
          icon: Zap,
        },
      ],
    },
    finalCta: {
      headline: 'What if your payroll team stopped calculating and started reviewing?',
      primaryBtn: { label: 'Build an AI Workflow →', to: '/contact' },
      secondaryBtn: { label: 'Talk to Software Garage →', to: '/contact' },
    },
    relatedSlugs: ['schoolspine-ai', 'ai-hospital-roster'],
    seo: {
      title: 'AI Payroll Automation Case Study | Software Garage',
      description:
        'How Software Garage engineers AI-assisted payroll workflows that process attendance, leave, half-days and salary calculations with less manual effort.',
      keywords: [
        'AI Payroll Automation',
        'payroll AI',
        'workforce intelligence',
        'automated salary calculation',
        'attendance automation',
      ],
    },
  },

  'schoolspine-ai': {
    slug: 'schoolspine-ai',
    route: '/ai-case-studies/schoolspine-ai',
    tag: 'EDUCATION',
    eyebrow: 'AI CASE STUDY · EDUCATION',
    headline: 'Teachers Should Create Learning.',
    headlineHighlight: 'Not Spend Hours Creating Questions.',
    description:
      'SchoolSpine AI brings intelligence directly into academic workflows — helping teachers generate assessments, questions, assignments and answer keys while keeping educators firmly in control.',
    metadata: {
      domain: 'Education',
      aiType: 'Academic Intelligence',
      statusOrProductLabel: 'PRODUCT',
      statusOrProduct: 'SchoolSpine',
    },
    heroPipeline: [
      'Class & Subject',
      'Topic Definition',
      'Cognitive Level',
      'SchoolSpine AI',
      'Question & Key Draft',
      'Teacher Review',
      'Published Assessment',
    ],
    problem: {
      eyebrow: 'THE PROBLEM',
      headline: "Teachers don't need more tools. They need more time.",
      body: 'Creating quality academic content is important work. But preparing question papers, generating variations, creating assignments and preparing answer keys repeatedly consumes the same resource every teacher has too little of: Time.',
      cards: [
        {
          title: 'Repetitive Creation',
          description:
            'Teachers repeatedly create similar academic content across classes and subjects.',
          icon: Clock,
        },
        {
          title: 'Difficulty Balancing',
          description:
            'Questions need to match the expected academic level and Bloom’s taxonomy benchmarks.',
          icon: Sliders,
        },
        {
          title: 'Manual Preparation',
          description:
            'Question papers, MCQs, assignments and answer keys require significant preparation.',
          icon: PenTool,
        },
      ],
    },
    intelligenceLayer: {
      headline: 'Turn a teaching requirement into ready-to-review academic content.',
      highlightStatement: 'AI generates. The teacher decides.',
      body: 'SchoolSpine AI parses curriculum standards, class levels, and specific learning objectives to synthesize pedagogical assessments. The model ensures balanced distractors in MCQs, verified answer keys, and clear grading criteria—without ever bypassing teacher moderation.',
      architectureFlow: [
        'CLASS + SUBJECT + TOPIC + DIFFICULTY + QUESTION TYPE',
        'SCHOOLSPINE AI',
        'QUESTIONS, MCQs, ASSIGNMENTS, QUESTION PAPERS, ANSWER KEYS',
        'TEACHER REVIEW',
      ],
    },
    howItWorks: {
      headline: 'From curriculum parameters to ready-to-publish assessments.',
      steps: [
        {
          step: '01',
          title: 'Define',
          description: 'Teacher selects class, subject and topic.',
        },
        {
          step: '02',
          title: 'Configure',
          description: 'Choose difficulty, question type and quantity.',
        },
        {
          step: '03',
          title: 'Generate',
          description: 'SchoolSpine AI creates structured academic content.',
        },
        {
          step: '04',
          title: 'Review',
          description: 'Teacher reviews, edits or regenerates content.',
        },
        {
          step: '05',
          title: 'Publish',
          description: 'Approved content moves into the academic workflow.',
        },
      ],
    },
    capabilities: {
      headline: 'From blank page to structured academic content.',
      cards: [
        {
          title: 'Question Generation',
          description:
            'Generate topic-specific questions based on academic context.',
          icon: FileQuestion,
        },
        {
          title: 'MCQ Generation',
          description:
            'Create multiple-choice questions with structured options and distractors.',
          icon: ListChecks,
        },
        {
          title: 'Difficulty Intelligence',
          description:
            'Generate content according to Easy, Medium or Hard requirements.',
          icon: Sliders,
        },
        {
          title: 'Question Paper Generation',
          description: 'Assemble questions into structured assessments.',
          icon: BookOpen,
        },
        {
          title: 'Assignment Generation',
          description: 'Create assignment content around selected topics.',
          icon: PenTool,
        },
        {
          title: 'Answer Key Generation',
          description: 'Generate supporting answer keys for teacher review.',
          icon: CheckCircle2,
        },
      ],
    },
    productShowcase: {
      headline: 'Watch a lesson requirement become an assessment.',
      subtitle:
        'Interactive preview of the SchoolSpine AI assessment builder generating curriculum-aligned questions with instant educator review actions.',
    },
    humanAi: {
      headline: 'The teacher stays in the classroom.',
      highlightLine: 'AI stays in the workflow.',
      body: "SchoolSpine AI isn't designed to replace teacher expertise. It handles the repetitive first draft so teachers can focus on context, quality, students and learning outcomes.",
      flow: ['AI GENERATES', 'TEACHER REVIEWS', 'TEACHER REFINES', 'SCHOOL USES'],
    },
    impact: {
      headline: 'More teaching. Less preparation.',
      cards: [
        {
          title: 'Faster Content Creation',
          description: 'Start from a requirement instead of a blank page.',
          icon: Zap,
        },
        {
          title: 'Flexible Assessments',
          description:
            'Create content across subjects, topics and difficulty levels.',
          icon: Layers,
        },
        {
          title: 'Teacher Control',
          description: 'Review and modify every generated output.',
          icon: CheckCircle2,
        },
        {
          title: 'Scalable Intelligence',
          description: 'Extend AI assistance across more academic workflows.',
          icon: Cpu,
        },
      ],
    },
    future: {
      headline: 'Assessment generation is only the beginning.',
      body: 'Our academic intelligence architecture is built to support broader educational capabilities across institutional operations.',
      cards: [
        {
          title: 'Personalized Learning',
          description:
            'Adaptive question banks tailored to individual student mastery curves and cognitive pace.',
          icon: GraduationCap,
        },
        {
          title: 'Performance Insights',
          description:
            'Diagnostic class-level heatmaps identifying curriculum topics requiring revision.',
          icon: Brain,
        },
        {
          title: 'AI Academic Assistant',
          description:
            'Interactive conversational assistant for drafting differentiated lesson plans and lab manuals.',
          icon: Sparkles,
        },
        {
          title: 'Smart Recommendations',
          description:
            'Automated remediation question sets triggered by assessment performance markers.',
          icon: BookOpen,
        },
      ],
    },
    finalCta: {
      headline: 'What should your school system be able to understand next?',
      primaryBtn: { label: 'Build AI for Education →', to: '/contact' },
      secondaryBtn: { label: 'Talk to Software Garage →', to: '/contact' },
    },
    relatedSlugs: ['ai-payroll-automation', 'ai-hospital-roster'],
    seo: {
      title: 'SchoolSpine AI Case Study | Software Garage',
      description:
        'Explore how SchoolSpine AI empowers teachers with automated question generation, assessment structuring and answer keys while maintaining human control.',
      keywords: [
        'SchoolSpine AI',
        'AI for education',
        'assessment generation AI',
        'question paper builder',
        'teacher copilot',
      ],
    },
  },

  'ai-hospital-roster': {
    slug: 'ai-hospital-roster',
    route: '/ai-case-studies/ai-hospital-roster',
    tag: 'HEALTHCARE',
    eyebrow: 'AI CASE STUDY · HEALTHCARE OPERATIONS',
    headline: 'Hospital Staffing Is Not a Calendar Problem.',
    headlineHighlight: "It's a Constraint Problem.",
    description:
      'Hospitals operate with constantly changing staff availability, shift requirements, leave schedules and rotation rules. We are designing an AI-powered roster agent that turns those constraints into structured, reviewable staff schedules.',
    metadata: {
      domain: 'Healthcare Operations',
      aiType: 'AI Agent / Scheduling Intelligence',
      statusOrProductLabel: 'STATUS',
      statusOrProduct: 'AI Product',
    },
    heroPipeline: [
      'Hospital Rules',
      'Staff Availability',
      'Shift Matrix',
      'Constraint Solver Agent',
      'Conflict Validation',
      'Admin Review',
      'Optimized Roster',
    ],
    problem: {
      eyebrow: 'THE PROBLEM',
      headline: 'Every hospital has rules. None of them are exactly the same.',
      body: 'A roster that works for one hospital may fail completely in another. Some teams rotate weekly. Others work in 10-day, 15-day or monthly cycles. Staff availability changes. Leave changes. Shift coverage changes. The scheduling engine needs to understand the rules before it can generate the schedule.',
      cards: [
        {
          title: 'Rotation Rules',
          description: 'Weekly, 10-day, 15-day or monthly cycles.',
          icon: CalendarDays,
        },
        {
          title: 'Staff Availability',
          description: 'Who can work and when.',
          icon: Users,
        },
        {
          title: 'Shift Coverage',
          description: 'Morning, evening and night requirements.',
          icon: Clock,
        },
        {
          title: 'Leave',
          description:
            'Approved leave must be considered before assigning shifts.',
          icon: Calendar,
        },
        {
          title: 'Department Requirements',
          description:
            'Different departments may have different staffing needs.',
          icon: Activity,
        },
        {
          title: 'Conflicts',
          description:
            'Potential scheduling conflicts need to be identified before approval.',
          icon: ShieldAlert,
        },
      ],
    },
    intelligenceLayer: {
      headline: 'Give the AI the rules. Let it solve the schedule.',
      highlightStatement: 'The agent evaluates constraints before producing a roster for human review.',
      body: "The agent doesn't simply fill empty cells. It evaluates staffing requirements, rotation rules, availability and exceptions before producing a roster for human review.",
      architectureFlow: [
        'HOSPITAL RULES',
        'STAFF DATA',
        'SHIFT REQUIREMENTS',
        'AVAILABILITY',
        'LEAVE',
        'AI ROSTER AGENT',
        'PROPOSED ROSTER',
        'HUMAN REVIEW',
      ],
    },
    howItWorks: {
      headline: 'From complex operational constraints to balanced schedules.',
      steps: [
        {
          step: '01',
          title: 'Understand',
          description: "Learn the hospital's roster rules and staffing requirements.",
        },
        {
          step: '02',
          title: 'Ingest',
          description: 'Process staff, shift, availability and leave information.',
        },
        {
          step: '03',
          title: 'Reason',
          description: 'Evaluate the constraints that affect scheduling.',
        },
        {
          step: '04',
          title: 'Generate',
          description: 'Produce a proposed roster.',
        },
        {
          step: '05',
          title: 'Validate',
          description: 'Surface conflicts, gaps or exceptions.',
        },
        {
          step: '06',
          title: 'Approve',
          description: 'Human administrators review and approve the final roster.',
        },
      ],
    },
    capabilities: {
      headline: 'Scheduling intelligence built around real constraints.',
      cards: [
        {
          title: 'Rotation Intelligence',
          description:
            'Adapt to hospital-specific rotation cycles instead of forcing one scheduling pattern.',
          icon: CalendarDays,
        },
        {
          title: 'Coverage Intelligence',
          description:
            'Consider required staffing levels across shifts and departments.',
          icon: Users,
        },
        {
          title: 'Availability Awareness',
          description:
            'Take staff availability and leave information into account.',
          icon: Clock,
        },
        {
          title: 'Conflict Detection',
          description:
            'Surface potential clashes before a roster is finalized.',
          icon: AlertCircle,
        },
        {
          title: 'Constraint-Based Scheduling',
          description:
            'Generate schedules around multiple operational requirements.',
          icon: Workflow,
        },
        {
          title: 'Roster Adaptation',
          description:
            'Recalculate schedules when staffing conditions change.',
          icon: Zap,
        },
      ],
    },
    productShowcase: {
      headline: 'From constraints to a working roster.',
      subtitle:
        'Live hospital roster control center verifying shift intervals, mandatory rest periods, and emergency department coverage.',
    },
    humanAi: {
      headline: 'AI proposes. Humans approve.',
      highlightLine: 'Designed to support administrators — not silently decide on their behalf.',
      body: "Hospital staffing decisions carry operational consequences. That's why the AI agent is designed to support administrators — not silently make decisions on their behalf.",
      flow: ['AI REASONS', 'AI PROPOSES', 'ADMIN REVIEWS', 'ADMIN APPROVES', 'ROSTER GOES LIVE'],
    },
    impact: {
      headline: 'Turn roster planning from manual coordination into intelligent operations.',
      cards: [
        {
          title: 'Less Manual Scheduling',
          description: 'Reduce repetitive roster preparation work.',
          icon: Zap,
        },
        {
          title: 'Faster Adaptation',
          description:
            'Respond to staffing changes without rebuilding schedules from scratch.',
          icon: Workflow,
        },
        {
          title: 'Better Visibility',
          description:
            'Make constraints and potential conflicts easier to identify.',
          icon: Activity,
        },
        {
          title: 'Operational Scalability',
          description:
            'Support increasingly complex staffing requirements with an intelligent scheduling layer.',
          icon: Cpu,
        },
      ],
    },
    future: {
      headline: 'A roster agent can become an operations agent.',
      body: 'Future operational evolutions of the scheduling intelligence layer for acute healthcare settings.',
      cards: [
        {
          title: 'Leave Intelligence',
          description:
            'Predictive leave impact modeling and automatic relief pool allocation.',
          icon: Calendar,
        },
        {
          title: 'Shift Forecasting',
          description:
            'Historical emergency admission modeling to anticipate high-stress shifts.',
          icon: Activity,
        },
        {
          title: 'Staffing Demand Prediction',
          description:
            'Real-time bed occupancy feedback to adjust nursing ratios automatically.',
          icon: Users,
        },
        {
          title: 'Workforce Analytics',
          description:
            'Fatigue tracking and mandatory recovery window compliance across critical care teams.',
          icon: HeartPulse,
        },
        {
          title: 'Operational Alerts',
          description:
            'Instant multi-channel alerts for critical shift vacancies and skill-mix deficits.',
          icon: ShieldAlert,
        },
      ],
    },
    finalCta: {
      headline: 'Have a workflow with too many rules?',
      highlightLine: "That's exactly where AI becomes interesting.",
      primaryBtn: { label: 'Build Your AI Agent →', to: '/contact' },
      secondaryBtn: { label: 'Talk to Our AI Team →', to: '/contact' },
    },
    relatedSlugs: ['ai-payroll-automation', 'schoolspine-ai'],
    seo: {
      title: 'AI Hospital Roster Case Study | Software Garage',
      description:
        'Discover how Software Garage engineers an AI roster agent that solves hospital shift constraints, rotation cycles, and leave requests into reviewable schedules.',
      keywords: [
        'AI Hospital Roster',
        'healthcare AI scheduling',
        'roster agent',
        'nurse shift scheduling AI',
        'constraint based roster',
      ],
    },
  },
}
