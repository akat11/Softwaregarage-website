export interface LandingPageData {
  slug: string
  path: string
  metaKey: string
  eyebrow: string
  h1Main: string
  h1Highlight: string
  h1Suffix?: string
  heroSubtitle: string
  heroVisual: string
  heroVisualAlt: string
  stats: Array<{ value: number; suffix: string; label: string }>
  valueProp: {
    eyebrow: string
    title: string
    description: string
    cards: Array<{ title: string; description: string; tag: string }>
  }
  capabilities: Array<{
    title: string
    description: string
    points: string[]
    tags: string[]
  }>
  techStack: Array<{
    category: string
    technologies: string[]
  }>
  process: Array<{
    step: string
    title: string
    description: string
  }>
  useCases: Array<{
    title: string
    description: string
    tag: string
  }>
  relatedProjects: Array<{
    name: string
    tag: string
    description: string
    to: string
    image?: string
  }>
  relatedServices: Array<{
    label: string
    to: string
    description: string
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const landingPages: Record<string, LandingPageData> = {
  'ai-development-company': {
    slug: 'ai-development-company',
    path: '/ai-development-company',
    metaKey: 'aiDevCompany',
    eyebrow: 'ENGINEERING × INTELLIGENCE × PRODUCTION',
    h1Main: 'Custom AI Development',
    h1Highlight: 'Engineered for Scale',
    h1Suffix: '& Production Resilience',
    heroSubtitle:
      'We architect, build and deploy production-ready AI solutions — from autonomous agentic workflows and retrieval-augmented generation (RAG) to deep LLM integrations that automate complex business operations.',
    heroVisual: '/journey-ai.png',
    heroVisualAlt: 'Software Garage AI development and neural automation systems',
    stats: [
      { value: 15, suffix: '+', label: 'Systems Engineered' },
      { value: 99, suffix: '%', label: 'Workflow Precision' },
      { value: 100, suffix: '%', label: 'Custom Architecture' },
      { value: 24, suffix: '/7', label: 'Automated Operations' },
    ],
    valueProp: {
      eyebrow: 'WHY CHOOSE SOFTWARE GARAGE',
      title: 'AI Grounded in Systems Architecture, Not Hype',
      description:
        'Most AI initiatives stall as fragile prototypes. We engineer enterprise-grade AI applications with deterministic boundaries, human-in-the-loop safeguards, structured schemas, and continuous latency monitoring.',
      cards: [
        {
          title: 'Deterministic Orchestration',
          description:
            'State-machine validation and strict Pydantic/Zod structured outputs ensure model inferences adhere to business rules without unpredictable hallucinations.',
          tag: 'ARCHITECTURE',
        },
        {
          title: 'Enterprise RAG Pipelines',
          description:
            'Hybrid dense-sparse vector search with contextual reranking and chunk metadata preserves organizational knowledge without data leakage.',
          tag: 'DATA RETRIEVAL',
        },
        {
          title: 'Production Guardrails',
          description:
            'Automated evaluation suites, prompt injection mitigation, and audit trails ensure your AI systems comply with data privacy standards.',
          tag: 'SECURITY & QA',
        },
      ],
    },
    capabilities: [
      {
        title: 'Autonomous AI Agents & Workflows',
        description:
          'Multi-agent architectures capable of goal decomposition, state evaluation, tool calling, and executing multi-step business operations autonomously.',
        points: [
          'Stateful agent execution graphs (LangGraph, temporal state machines)',
          'Autonomous tool-calling and API execution',
          'Human-in-the-loop review checkpoints',
          'Self-correcting error handling loops',
        ],
        tags: ['LangChain', 'LangGraph', 'Python', 'FastAPI'],
      },
      {
        title: 'Retrieval-Augmented Generation (RAG)',
        description:
          'Connect foundational models to your internal documents, database schemas, and operational records for grounded, hallucination-resistant answers.',
        points: [
          'Hybrid search combining BM25 and vector embeddings',
          'Cross-encoder reranking algorithms',
          'Dynamic chunking based on document semantics',
          'Fine-grained tenant access control',
        ],
        tags: ['Pinecone', 'Qdrant', 'pgvector', 'OpenAI'],
      },
      {
        title: 'Custom Copilots & SaaS AI Features',
        description:
          'Embed intelligent copilots directly into web applications, SaaS platforms, and internal tools with streaming interfaces and sub-second response times.',
        points: [
          'Server-Sent Events (SSE) streaming UI components',
          'Context-window optimization and token caching',
          'Domain-adapted prompt templates and system prompts',
          'Role-based permissions and audit logging',
        ],
        tags: ['React', 'TypeScript', 'Node.js', 'Next.js'],
      },
      {
        title: 'Document & Operational Intelligence',
        description:
          'Convert messy PDFs, invoices, medical records, and complex spreadsheets into validated structured JSON data ready for core transactional databases.',
        points: [
          'Vision-LLM multimodal extraction pipelines',
          'Automated data reconciliation against ERP/CRM',
          'Confidence-score-based human routing',
          'Asynchronous queue processing at scale',
        ],
        tags: ['Google Gemini', 'Claude 3.5', 'OCR', 'RabbitMQ'],
      },
    ],
    techStack: [
      { category: 'Foundation Models', technologies: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Gemini 1.5 Pro', 'Llama 3'] },
      { category: 'Frameworks & Orchestration', technologies: ['LangChain', 'LangGraph', 'LlamaIndex', 'n8n'] },
      { category: 'Vector & Data Storage', technologies: ['Pinecone', 'pgvector', 'Qdrant', 'PostgreSQL', 'Redis'] },
      { category: 'Backend & APIs', technologies: ['Python', 'FastAPI', 'Node.js', 'TypeScript', 'Docker'] },
    ],
    process: [
      { step: '01', title: 'Technical Feasibility & Data Discovery', description: 'We evaluate your business workflows, model cost profiles, privacy constraints, and ground-truth data requirements.' },
      { step: '02', title: 'Architecture & Boundary Design', description: 'We blueprint model routing, schema validation, fallback logic, and human approval checkpoints.' },
      { step: '03', title: 'Pipeline & Agent Engineering', description: 'We develop test-driven ingestion pipelines, prompt evaluations, agent loops, and streaming API endpoints.' },
      { step: '04', title: 'Validation & Guardrail Testing', description: 'Stress-testing against adversarial edge cases, latency budgets, and continuous automated evals.' },
      { step: '05', title: 'Deployment & Telemetry Observability', description: 'Deploying containerized infrastructure with real-time token tracking, trace logs, and latency monitoring.' },
    ],
    useCases: [
      { title: 'Automated Payroll & Attendance Reconciliation', description: 'Reconciling timesheet exceptions, leave requests, and salary calculation pipelines with zero manual spreadsheets.', tag: 'HR TECH' },
      { title: 'Clinical Shift & Hospital Roster Optimization', description: 'Solving complex multi-tier staff availability, fatigue rules, and department scheduling via AI agents.', tag: 'HEALTHCARE' },
      { title: 'Curriculum & Assessment Generation Copilots', description: 'Empowering teachers to generate Bloom-aligned questions, rubrics, and answer keys in seconds.', tag: 'EDTECH' },
      { title: 'Customer Support Triaging & Self-Resolution', description: 'Resolving multi-step support queries autonomously with direct transactional API execution.', tag: 'SUPPORT' },
    ],
    relatedProjects: [
      { name: 'AI Payroll Automation', tag: 'BUSINESS AUTOMATION', description: 'AI-assisted payroll workflows that reconcile attendance, leave, and salary calculations.', to: '/ai-case-studies/ai-payroll-automation' },
      { name: 'SchoolSpine AI', tag: 'EDTECH COPILOT', description: 'Curriculum-aligned academic assessment and assignment generation engine for educators.', to: '/ai-case-studies/schoolspine-ai' },
      { name: 'AI Hospital Roster', tag: 'HEALTHCARE AGENT', description: 'Autonomous clinical scheduling agent resolving complex shifts and staff fatigue constraints.', to: '/ai-case-studies/ai-hospital-roster' },
    ],
    relatedServices: [
      { label: 'AI Agent Development', to: '/ai-agent-development', description: 'Deep dive into autonomous multi-agent systems and reasoning tools.' },
      { label: 'SaaS Development', to: '/saas-development', description: 'Modern cloud web applications with built-in AI capabilities.' },
      { label: 'AI Lab Overview', to: '/ai-lab', description: 'Explore our interactive laboratory and live case studies.' },
    ],
    faqs: [
      { question: 'What models and providers do you work with?', answer: 'We are model-agnostic. We evaluate OpenAI, Anthropic Claude, Google Gemini, and open-source models like Llama 3 based on latency, token costs, licensing, and privacy constraints.' },
      { question: 'How do you prevent hallucinations in business applications?', answer: 'We implement strict structural validation (Zod/Pydantic schemas), contextual RAG grounding, two-pass verification prompts, and deterministic fallback logic that stops bad outputs from reaching end users.' },
      { question: 'Can our data remain private and compliant?', answer: 'Yes. We architect solutions using zero-retention enterprise APIs, dedicated private cloud deployments on AWS/GCP, or self-hosted open-weight models within your own VPC.' },
      { question: 'What is the typical timeline for an AI production system?', answer: 'A focused Proof-of-Concept or workflow agent typically ships within 2 to 4 weeks. A full enterprise application with complex integrations and evaluations typically spans 6 to 12 weeks.' },
    ],
  },

  'ai-agent-development': {
    slug: 'ai-agent-development',
    path: '/ai-agent-development',
    metaKey: 'aiAgentDev',
    eyebrow: 'AUTONOMOUS × REASONING × EXECUTION',
    h1Main: 'Autonomous AI Agent Development',
    h1Highlight: 'That Performs Real Work',
    h1Suffix: '& Executes Critical Tasks',
    heroSubtitle:
      'We build autonomous AI agents engineered to solve multi-step problems, coordinate with other agents, call external APIs, and execute mission-critical operations with deterministic precision.',
    heroVisual: '/ai-agent-visual.png',
    heroVisualAlt: 'Autonomous AI agents collaborating on complex technical workflows',
    stats: [
      { value: 10, suffix: '+', label: 'Custom Agents Built' },
      { value: 100, suffix: '%', label: 'Tool-Calling Accuracy' },
      { value: 0, suffix: 's', label: 'Unchecked Hallucinations' },
      { value: 99, suffix: '%', label: 'Execution Reliability' },
    ],
    valueProp: {
      eyebrow: 'NEXT-GENERATION AUTOMATION',
      title: 'Beyond Chatbots: Agents That Reason and Act',
      description:
        'Traditional chatbots only generate text. Software Garage AI agents decompose complex objectives into actionable sub-tasks, retrieve missing data, call tools, inspect responses, and iterate until the goal is solved.',
      cards: [
        {
          title: 'Goal Decomposition',
          description:
            'Agents dynamically create execution plans, break complex briefs into sequential steps, and monitor progress against completion criteria.',
          tag: 'PLANNING',
        },
        {
          title: 'Deterministic Tool Calling',
          description:
            'Typed schemas allow agents to query relational databases, invoke REST endpoints, generate files, and trigger downstream webhooks safely.',
          tag: 'INTEGRATIONS',
        },
        {
          title: 'Stateful Memory Graphs',
          description:
            'Short-term conversational context and long-term vectorized episodic memory allow agents to remember past interactions and user preferences.',
          tag: 'MEMORY',
        },
      ],
    },
    capabilities: [
      {
        title: 'Multi-Agent Collaborative Systems',
        description:
          'Teams of specialized agents (planner, researcher, writer, validator) that collaborate, critique each other, and verify outputs before delivery.',
        points: [
          'Hierarchical supervisor and worker topologies',
          'Role-specialized prompt configurations',
          'Consensus mechanisms and critique loops',
          'Dynamic delegation based on agent capability',
        ],
        tags: ['LangGraph', 'CrewAI', 'Python', 'FastAPI'],
      },
      {
        title: 'Domain Scheduling & Resource Allocation Agents',
        description:
          'Algorithmic constraint satisfaction agents designed for complex operational environments like hospitals, logistics fleets, and schools.',
        points: [
          'Hard and soft constraint satisfaction engines',
          'Dynamic conflict resolution algorithms',
          'Emergency coverage and substitution logic',
          'Real-time schedule modification triggers',
        ],
        tags: ['Constraint Solvers', 'Node.js', 'PostgreSQL'],
      },
      {
        title: 'Business Workflow Automation Agents',
        description:
          'Agents that sit between your core software platforms (ERP, CRM, email, accounting) to process invoices, reconcile records, and answer client inquiries.',
        points: [
          'Webhook and polling event-driven triggers',
          'Multi-system sync with bi-directional validation',
          'Automated exception notification to team members',
          'Full audit logs for compliance review',
        ],
        tags: ['n8n', 'Zapier APIs', 'REST', 'Webhooks'],
      },
      {
        title: 'Interactive Copilots with Human Review',
        description:
          'In-app assistant interfaces where the agent drafts actions and prepares artifacts, allowing human supervisors to inspect and approve with one click.',
        points: [
          'Interactive UI cards for proposed agent actions',
          'Single-click approve, modify, or reject workflows',
          'Live progress indicators and step visualization',
          'Undo and rollback mechanisms',
        ],
        tags: ['React', 'TypeScript', 'WebSockets', 'Tailwind'],
      },
    ],
    techStack: [
      { category: 'Agent Architectures', technologies: ['LangGraph', 'LangChain', 'CrewAI', 'Custom Finite State Machines'] },
      { category: 'Reasoning Models', technologies: ['Claude 3.5 Sonnet', 'GPT-4o', 'Gemini 1.5 Pro', 'DeepSeek'] },
      { category: 'Tool Execution', technologies: ['Function Calling', 'OpenAPI / Swagger', 'SQL Query Tooling', 'Headless Browser (Puppeteer)'] },
      { category: 'Observability & Tracing', technologies: ['LangSmith', 'OpenTelemetry', 'Winston', 'Prometheus'] },
    ],
    process: [
      { step: '01', title: 'Task Boundary Mapping', description: 'We define the exact actions, APIs, data permissions, and hard guardrails the agent will operate within.' },
      { step: '02', title: 'Tool Schema Architecture', description: 'We build strict JSON schemas for every tool the agent can call, including input sanitization and mock testing.' },
      { step: '03', title: 'Graph & State Machine Setup', description: 'We construct cyclical execution graphs with explicit termination criteria and error-recovery nodes.' },
      { step: '04', title: 'Adversarial Benchmarking', description: 'We evaluate agent behavior against tricky scenarios, infinite loops, bad tool outputs, and prompt tampering.' },
      { step: '05', title: 'Production Deployment & Tracing', description: 'Live deployment with full session replay, step-by-step latency tracking, and cost telemetry.' },
    ],
    useCases: [
      { title: 'Hospital Shift Scheduling Agent', description: 'Autonomously generating clinical rosters balancing nurse availability, shift limits, and departmental coverage.', tag: 'HEALTHCARE' },
      { title: 'Payroll Validation Agent', description: 'Checking biometric logs against leave policies, calculating deductions, and generating payroll draft summaries.', tag: 'FINTECH' },
      { title: 'Academic Assessment Copilot', description: 'Generating balanced exams and marking schemes matched against school syllabi and Bloom taxonomy levels.', tag: 'EDUCATION' },
      { title: 'Automated CRM Lead Qualification', description: 'Researching incoming prospects, verifying fit, drafting personalized responses, and booking meetings.', tag: 'SALES OPS' },
    ],
    relatedProjects: [
      { name: 'AI Hospital Roster', tag: 'HEALTHCARE AGENT', description: 'Constraint-based autonomous agent creating hospital staff rosters.', to: '/ai-case-studies/ai-hospital-roster' },
      { name: 'AI Payroll Automation', tag: 'BUSINESS INTELLIGENCE', description: 'Autonomous timesheet and salary reconciliation system.', to: '/ai-case-studies/ai-payroll-automation' },
      { name: 'SchoolSpine AI', tag: 'ACADEMIC COPILOT', description: 'Educational workflow agent for teacher test generation.', to: '/ai-case-studies/schoolspine-ai' },
    ],
    relatedServices: [
      { label: 'AI Development Company', to: '/ai-development-company', description: 'Full-spectrum enterprise AI engineering and RAG architecture.' },
      { label: 'SaaS Development', to: '/saas-development', description: 'Modern cloud web applications with built-in AI capabilities.' },
      { label: 'AI Lab', to: '/ai-lab', description: 'Explore all AI prototypes, architectures, and research.' },
    ],
    faqs: [
      { question: 'What is the difference between an AI model and an AI agent?', answer: 'A model (like GPT-4o or Claude 3.5) produces text in response to a single prompt. An agent uses the model as a reasoning engine to inspect a problem, plan actions, use tools (APIs, databases, web search), read responses, and iterate until a goal is achieved.' },
      { question: 'How do you keep agents from making unintended changes?', answer: 'We configure strict permission scoping, read-only operational defaults, confirmation dialogs for destructive actions, and human-in-the-loop review nodes for any transactional event.' },
      { question: 'Can AI agents integrate with legacy software?', answer: 'Yes. We build custom API wrappers, database connections, or secure webhook endpoints that bridge modern agent frameworks with existing legacy systems.' },
      { question: 'How do you monitor and debug agent decisions?', answer: 'We record full trace logs for every intermediate thought, tool invocation, and API response using observability tools like LangSmith and OpenTelemetry.' },
    ],
  },

  'healthcare-software-development': {
    slug: 'healthcare-software-development',
    path: '/healthcare-software-development',
    metaKey: 'healthcareDev',
    eyebrow: 'HEALTHCARE × SECURITY × COMPLIANCE',
    h1Main: 'Healthcare Software Development',
    h1Highlight: 'Secure, Compliant',
    h1Suffix: '& Engineered for Clinical Workflows',
    heroSubtitle:
      'We engineer custom healthcare software and clinical intelligence systems: medical roster agents, HIPAA-compliant patient management platforms, and telemetry dashboards built for patient care.',
    heroVisual: '/saas-dashboard-visual.png',
    heroVisualAlt: 'Healthcare software architecture and clinical management dashboard',
    stats: [
      { value: 100, suffix: '%', label: 'HIPAA & Privacy Focused' },
      { value: 0, suffix: 's', label: 'Unverified Access' },
      { value: 99, suffix: '%', label: 'System Uptime' },
      { value: 24, suffix: '/7', label: 'Mission-Critical Availability' },
    ],
    valueProp: {
      eyebrow: 'CLINICAL GRADE ENGINEERING',
      title: 'Digital Systems That Support Medical Teams',
      description:
        'Healthcare software cannot tolerate downtime, data leakage, or clunky user interfaces. We design medical applications that reduce administrative fatigue, protect sensitive patient health information (PHI), and ensure clinical continuity.',
      cards: [
        {
          title: 'HIPAA-Ready Architecture',
          description:
            'End-to-end encryption in transit and at rest, role-based access control (RBAC), and immutable audit logs designed for regulatory compliance.',
          tag: 'COMPLIANCE',
        },
        {
          title: 'Autonomous Scheduling',
          description:
            'Constraint-satisfaction AI scheduling engines that solve complex shifts, emergency call rotations, and fatigue limits across clinical departments.',
          tag: 'AI AGENTS',
        },
        {
          title: 'Zero-Distraction UI/UX',
          description:
            'Clear typography, rapid data entry, and high-contrast layouts designed specifically for busy physicians, nurses, and hospital administrators.',
          tag: 'CLINICAL DESIGN',
        },
      ],
    },
    capabilities: [
      {
        title: 'Clinical Staff Rostering & Scheduling Systems',
        description:
          'Intelligent roster systems that replace manual spreadsheets with constraint-satisfaction algorithms, honoring nurse preferences, shift caps, and clinical skill mixes.',
        points: [
          'Department-specific shift balancing algorithms',
          'Emergency shift coverage and on-call swap workflows',
          'Fatigue and maximum continuous duty rule compliance',
          'Instant mobile notifications for roster releases',
        ],
        tags: ['AI Scheduling', 'PostgreSQL', 'React', 'Node.js'],
      },
      {
        title: 'Patient Management & Clinic Portals',
        description:
          'Modern patient onboarding, appointment booking, digital intake forms, and records management portals that streamline front-desk operations.',
        points: [
          'Self-service appointment scheduling and calendar sync',
          'Secure digital intake forms with signature capture',
          'Automated SMS/Email appointment reminders',
          'Telehealth consultation integration',
        ],
        tags: ['TypeScript', 'Tailwind', 'REST APIs', 'AWS'],
      },
      {
        title: 'Medical Records & Telemetry Dashboards',
        description:
          'Real-time dashboards for monitoring patient status, clinical key performance indicators, equipment availability, and bed occupancy.',
        points: [
          'Real-time WebSocket data updates for patient monitoring',
          'Visual bed and ward occupancy management',
          'Exportable audit reports for compliance reviews',
          'Multi-facility organizational rollups',
        ],
        tags: ['WebSockets', 'Recharts', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'Healthcare AI & Automated Documentation',
        description:
          'Speech-to-text clinical note transcription, discharge summary drafting, and ICD/CPT coding assistance copilots with physician verification.',
        points: [
          'HIPAA-compliant LLM transcription pipelines',
          'Automated extraction of vitals, medications, and allergies',
          'Mandatory doctor review and one-click approval',
          'FHIR/HL7 standard data compatibility',
        ],
        tags: ['Claude 3.5', 'OpenAI', 'Python', 'FastAPI'],
      },
    ],
    techStack: [
      { category: 'Frontend Tech', technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts'] },
      { category: 'Backend & Cloud', technologies: ['Node.js', 'Express', 'Python', 'FastAPI', 'AWS HIPAA-Eligible Services'] },
      { category: 'Databases & Security', technologies: ['PostgreSQL (Encrypted)', 'Redis', 'TLS 1.3', 'AES-256 GCM'] },
      { category: 'Clinical Standards', technologies: ['FHIR Guidelines', 'HL7 Protocols', 'ICD-10 Mapping', 'Audit Loggers'] },
    ],
    process: [
      { step: '01', title: 'Clinical Discovery & Compliance Review', description: 'We map out doctor/nurse workflows, departmental constraints, data flows, and required regulatory boundaries.' },
      { step: '02', title: 'Data Security & Architecture Blueprint', description: 'We design encrypted storage schemas, role-based permission matrices, and zero-trust API layers.' },
      { step: '03', title: 'User-Centric Prototyping', description: 'Testing user flows with clinical personnel to ensure minimal friction during high-stress operational hours.' },
      { step: '04', title: 'Engineering & Rigorous QA Testing', description: 'Full unit, integration, and security penetration testing with simulated hospital workloads.' },
      { step: '05', title: 'Deployment, Training & Monitoring', description: 'Zero-downtime deployment on HIPAA-eligible cloud infrastructure with automated monitoring.' },
    ],
    useCases: [
      { title: 'Hospital Emergency Department Roster', description: 'Autonomous scheduling balancing trauma physician availability, overnight shifts, and fatigue caps.', tag: 'ACUTE CARE' },
      { title: 'Multi-Specialty Clinic Patient Portal', description: 'Online booking, automated reminders, and digital health history collection for outpatient clinics.', tag: 'OUTPATIENT' },
      { title: 'Telehealth Consultation Platform', description: 'Encrypted video visits, prescription drafting, and session notes for remote care providers.', tag: 'TELEMEDICINE' },
      { title: 'Laboratory Results & Pathology Tracker', description: 'Secure distribution of lab results with automated doctor notifications for critical values.', tag: 'DIAGNOSTICS' },
    ],
    relatedProjects: [
      { name: 'AI Hospital Roster', tag: 'HEALTHCARE CASE STUDY', description: 'Constraint-based autonomous agent creating hospital staff rosters.', to: '/ai-case-studies/ai-hospital-roster' },
      { name: 'WorkNest Platform', tag: 'OPERATIONS', description: 'Staff communication and task orchestration platform.', to: '/work/worknest' },
      { name: 'Industries Overview', tag: 'CROSS-INDUSTRY', description: 'See how we build solutions across healthcare, education, and SaaS.', to: '/industries' },
    ],
    relatedServices: [
      { label: 'AI Agent Development', to: '/ai-agent-development', description: 'Autonomous scheduling and clinical workflow agents.' },
      { label: 'SaaS Development', to: '/saas-development', description: 'Secure multi-tenant healthcare SaaS applications.' },
      { label: 'Software Testing Services', to: '/software-testing-services', description: 'Rigorous QA and compliance testing for medical software.' },
    ],
    faqs: [
      { question: 'How do you ensure healthcare applications comply with HIPAA and data privacy laws?', answer: 'We implement AES-256 encryption at rest, TLS 1.3 in transit, strict RBAC, comprehensive immutable access logs, session timeouts, and deploy exclusively on HIPAA-eligible cloud infrastructure.' },
      { question: 'Can your software integrate with existing hospital EHR/EMR systems?', answer: 'Yes. We build modern interfaces and middleware that connect to existing hospital systems using standard FHIR, HL7, and RESTful APIs.' },
      { question: 'How does the AI Hospital Roster handle sudden staff sick leave?', answer: 'The agent evaluates available on-call staff, checks fatigue caps and qualification match, and generates replacement recommendations in seconds for charge nurse approval.' },
      { question: 'Do you offer ongoing maintenance and support for healthcare systems?', answer: 'Yes. We provide continuous monitoring, security patching, cloud optimization, and dedicated SLA support to ensure 24/7 reliability.' },
    ],
  },

  'edtech-development': {
    slug: 'edtech-development',
    path: '/edtech-development',
    metaKey: 'edtechDev',
    eyebrow: 'EDUCATION × EDTECH × LEARNING',
    h1Main: 'EdTech Software Development',
    h1Highlight: 'Empowering Educators',
    h1Suffix: '& Engaging Students',
    heroSubtitle:
      'We build comprehensive school management platforms, digital learning environments, and AI assessment generators that modernize administration and elevate the classroom experience.',
    heroVisual: '/schoolspine.webp',
    heroVisualAlt: 'EdTech software platform and digital school management interface',
    stats: [
      { value: 100, suffix: 'k+', label: 'Students Supported' },
      { value: 80, suffix: '%', label: 'Faster Assessment Creation' },
      { value: 13, suffix: '+', label: 'School Admin Modules' },
      { value: 100, suffix: '%', label: 'Curriculum Aligned' },
    ],
    valueProp: {
      eyebrow: 'MODERN EDUCATION PLATFORMS',
      title: 'Built for Administrators, Teachers, Students & Parents',
      description:
        'Educational software must cater to diverse users: busy school principals, teachers under time pressure, non-technical parents, and engaged students. We build intuitive, fast, and multi-role educational software.',
      cards: [
        {
          title: 'All-In-One School Management',
          description:
            'From admissions and fee invoicing to attendance, timetabling, and examinations, unified into one coherent web and mobile platform.',
          tag: 'ADMINISTRATION',
        },
        {
          title: 'AI Assessment Copilots',
          description:
            'Generative AI workflows that turn curriculum requirements into Bloom-aligned question papers, homework, and grading keys in seconds.',
          tag: 'AI TEACHER TOOLS',
        },
        {
          title: 'Multi-Role Mobile Apps',
          description:
            'Dedicated role-specific portals and native apps for teachers, students, parents, and administrative staff.',
          tag: 'CROSS-PLATFORM',
        },
      ],
    },
    capabilities: [
      {
        title: 'Comprehensive School Management Systems (SMS)',
        description:
          'End-to-end administration software covering the entire student lifecycle, financial bookkeeping, employee payroll, and transport tracking.',
        points: [
          'Student admissions, roll calls, and academic transcripts',
          'Automated fee generation, receipts, and payment gateway integration',
          'Teacher timetables, substitute management, and staff leave',
          'Transport bus routing, stops, and inventory control',
        ],
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      },
      {
        title: 'AI Assessment & Exam Generation Tools',
        description:
          'Intelligent teacher copilots that generate high-quality question papers, homework assignments, and answer rubrics aligned with target curricula.',
        points: [
          'Bloom’s Taxonomy difficulty distribution controls',
          'Multiple choice, short answer, and analytical questions',
          'Automated answer key generation with marking rationales',
          'One-click export to printable PDF and Word formats',
        ],
        tags: ['Claude 3.5', 'OpenAI', 'Python', 'LangChain'],
      },
      {
        title: 'Parent-Teacher Communication & Portals',
        description:
          'Direct messaging, digital report cards, emergency broadcast announcements, and attendance notifications delivered to parents via app and SMS.',
        points: [
          'Real-time absence and late arrival alerts',
          'Interactive gradebooks and term report card downloads',
          'Calendar of school events, holidays, and exam schedules',
          'Instant push notifications for urgent circulars',
        ],
        tags: ['React Native', 'Firebase', 'WebSockets', 'Twilio'],
      },
      {
        title: 'Learning Management Systems (LMS)',
        description:
          'Online course delivery platforms featuring video lectures, interactive quizzes, homework submission dropboxes, and automated grading.',
        points: [
          'SCORM and modern digital curriculum compatibility',
          'Video streaming with progress and completion tracking',
          'Student engagement analytics and drop-off reports',
          'Gamified badges, points, and certificates',
        ],
        tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tailwind'],
      },
    ],
    techStack: [
      { category: 'Web & Mobile', technologies: ['React', 'TypeScript', 'React Native', 'Tailwind CSS', 'Vite'] },
      { category: 'Backend & Cloud', technologies: ['Node.js', 'Express.js', 'Python', 'AWS', 'Docker'] },
      { category: 'Databases & Realtime', technologies: ['PostgreSQL', 'Redis', 'WebSockets', 'Firebase'] },
      { category: 'AI & Document Tech', technologies: ['Claude 3.5', 'GPT-4o', 'PDFKit', 'HTML-to-PDF Engines'] },
    ],
    process: [
      { step: '01', title: 'Academic Stakeholder Discovery', description: 'Interviews with principals, teachers, and registrars to map administrative friction and syllabus standards.' },
      { step: '02', title: 'Role-Based System Architecture', description: 'Designing permission hierarchies across Super-Admin, Principal, Teachers, Parents, and Students.' },
      { step: '03', title: 'Iterative Feature Development', description: 'Sprints delivering student records, attendance, fee collection, and examination grading.' },
      { step: '04', title: 'Teacher Workflow User Testing', description: 'Testing the user experience with educators to guarantee assessment creation takes under two minutes.' },
      { step: '05', title: 'School Onboarding & Data Migration', description: 'Seamless migration from Excel spreadsheets into the new database with zero record loss.' },
    ],
    useCases: [
      { title: 'K-12 School Management System', description: 'Digitizing 2,000+ student records, daily attendance, fee collection, and parent messaging for private schools.', tag: 'K-12 SCHOOLS' },
      { title: 'AI Exam Generator for Higher Ed', description: 'Enabling professors to produce customized test papers with automatic answer rubrics and difficulty weighting.', tag: 'COLLEGES' },
      { title: 'Tutoring Center & Coaching App', description: 'Student batch allocation, study material sharing, mock test scoring, and payment tracking.', tag: 'TUTORING' },
      { title: 'Corporate Training LMS', description: 'Employee onboarding modules with video lessons, compliance quizzes, and certificate generation.', tag: 'ENTERPRISE' },
    ],
    relatedProjects: [
      { name: 'SchoolSpine Management', tag: 'EDTECH PLATFORM', description: 'Comprehensive school management platform on Web, Android, and iOS.', to: '/work/schoolspine' },
      { name: 'SchoolSpine AI Copilot', tag: 'AI CASE STUDY', description: 'Curriculum-aligned academic assessment and assignment generation engine.', to: '/ai-case-studies/schoolspine-ai' },
      { name: 'SCP School Platform', tag: 'EDUCATION', description: 'Institutional education portal for student and staff administration.', to: '/work/scpschool' },
    ],
    relatedServices: [
      { label: 'AI Agent Development', to: '/ai-agent-development', description: 'Teacher copilots and automated grading systems.' },
      { label: 'SaaS Development', to: '/saas-development', description: 'Scalable multi-school SaaS architectures.' },
      { label: 'Industries Overview', to: '/industries', description: 'Explore our cross-industry digital solutions.' },
    ],
    faqs: [
      { question: 'Can SchoolSpine be customized for different educational boards (CBSE, ICSE, IB, State)?', answer: 'Yes. The grading frameworks, report cards, exam structures, and subject taxonomies are fully configurable to match any international or regional syllabus.' },
      { question: 'How secure is student and financial data in your EdTech platforms?', answer: 'We utilize encrypted databases (AES-256), strict role-based access controls, automatic daily backups, and compliant session handling to ensure complete privacy.' },
      { question: 'Can the platform handle schools with multiple branches?', answer: 'Yes. We architect multi-campus management so head office administrators can view aggregated metrics while individual branches manage their day-to-day operations.' },
      { question: 'How easy is it to migrate our existing data from spreadsheets?', answer: 'We build automated CSV/Excel import tools with data validation to cleanly import student lists, parent contacts, teacher profiles, and historic records.' },
    ],
  },

  'ecommerce-development': {
    slug: 'ecommerce-development',
    path: '/ecommerce-development',
    metaKey: 'ecommerceDev',
    eyebrow: 'COMMERCE × PERFORMANCE × CONVERSION',
    h1Main: 'E-Commerce Development Company',
    h1Highlight: 'High-Converting',
    h1Suffix: '& Scalable Online Stores',
    heroSubtitle:
      'We engineer high-speed, custom e-commerce experiences: headless storefronts, multi-vendor marketplaces, dynamic product configurators, and friction-free checkouts built to convert.',
    heroVisual: '/ecommerce-development-visual.png',
    heroVisualAlt: 'Modern headless e-commerce store and multi-vendor marketplace interface',
    stats: [
      { value: 10, suffix: '+', label: 'E-Commerce Stores Built' },
      { value: 100, suffix: '%', label: 'Mobile Optimized' },
      { value: 0, suffix: 's', label: 'Payment Gateway Glitches' },
      { value: 99, suffix: '%', label: 'Store Uptime' },
    ],
    valueProp: {
      eyebrow: 'CONVERSION-FOCUSED COMMERCE',
      title: 'Fast Checkout, Beautiful Design & Bulletproof Scale',
      description:
        'Every second of page latency costs retail sales. We build e-commerce platforms engineered for instantaneous page transitions, high-volume checkout rushes, and streamlined inventory sync.',
      cards: [
        {
          title: 'Sub-Second Page Loads',
          description:
            'Headless storefront architecture with optimized images, edge CDN caching, and modern frameworks that eliminate store lag.',
          tag: 'PERFORMANCE',
        },
        {
          title: 'Frictionless Checkout',
          description:
            'One-page checkouts, localized payment methods (Apple Pay, Google Pay, UPI, Stripe), and clear address autocomplete to maximize conversions.',
          tag: 'CHECKOUT UX',
        },
        {
          title: 'Real-Time Inventory Sync',
          description:
            'Automated stock synchronization across multiple channels, warehouse management systems (WMS), and supplier feeds.',
          tag: 'INTEGRATIONS',
        },
      ],
    },
    capabilities: [
      {
        title: 'Custom Multi-Vendor Marketplaces',
        description:
          'Scalable marketplace platforms where multiple independent vendors can list products, track orders, manage payouts, and fulfill customer requests.',
        points: [
          'Separate vendor dashboards with commission tracking',
          'Automated split payouts and marketplace fee calculations',
          'Unified customer shopping cart across multiple sellers',
          'Vendor rating and product review verification engines',
        ],
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe Connect'],
      },
      {
        title: 'Headless Storefronts & Custom Shopify Apps',
        description:
          'Decoupled frontend storefronts powered by Next.js or React, integrated with Shopify, Medusa, or custom backends for unlimited design freedom.',
        points: [
          'Ultra-fast product filtering and dynamic facet search',
          'Rich brand storytelling and custom product configurators',
          'Omnichannel mobile web experience',
          'SEO-optimized product catalog schema markup',
        ],
        tags: ['Shopify Storefront API', 'Medusa.js', 'Next.js', 'Tailwind'],
      },
      {
        title: 'Omnichannel B2B Wholesale Portals',
        description:
          'B2B portals featuring customer-specific tiered pricing, volume discounts, bulk quick-order forms, credit limits, and invoice billing.',
        points: [
          'Company account hierarchies with purchase approvals',
          'Custom negotiated price books per wholesale client',
          'Reorder with one click from past invoice history',
          'ERP integration with NetSuite, SAP, and QuickBooks',
        ],
        tags: ['TypeScript', 'GraphQL', 'PostgreSQL', 'Docker'],
      },
      {
        title: 'AI Product Search & Recommendation Engines',
        description:
          'Intelligent search bars that understand typos and natural language queries, paired with personalized product recommendations that lift average order value (AOV).',
        points: [
          'Vector-based semantic search for product attributes',
          'Frequently bought together smart recommendation blocks',
          'Dynamic upsells and cross-sells at cart checkout',
          'Automated cart abandonment email triggers',
        ],
        tags: ['Algolia', 'Pinecone', 'Python', 'Redis'],
      },
    ],
    techStack: [
      { category: 'Frontend & UI', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Commerce Engines', technologies: ['Shopify Plus', 'Medusa.js', 'Custom Node.js Architecture', 'WooCommerce'] },
      { category: 'Payments & Gateways', technologies: ['Stripe', 'PayPal', 'Razorpay', 'Apple Pay', 'Google Pay'] },
      { category: 'Search & Data', technologies: ['Algolia', 'Meilisearch', 'PostgreSQL', 'Redis'] },
    ],
    process: [
      { step: '01', title: 'Product Catalog & UX Strategy', description: 'Analyzing your inventory structure, buyer psychology, checkout friction points, and average order value targets.' },
      { step: '02', title: 'Storefront UI/UX Architecture', description: 'Designing interactive wireframes for product listings, variant selectors, mini-carts, and high-conversion checkouts.' },
      { step: '03', title: 'Full-Stack Development & Integrations', description: 'Connecting payment gateways, shipping rate calculators, tax engines, and automated order notifications.' },
      { step: '04', title: 'Load & Checkout Stress Testing', description: 'Simulating concurrent traffic surges, edge-case payment declines, and inventory race conditions.' },
      { step: '05', title: 'Launch & Analytics Telemetry', description: 'Zero-downtime deployment with conversion funnel tracking and real-time order monitoring.' },
    ],
    useCases: [
      { title: 'Cross-Border Marketplace Platform', description: 'Connecting international suppliers to domestic consumers with automatic currency and tax conversion.', tag: 'MARKETPLACE' },
      { title: 'DTC Brand Headless Storefront', description: 'High-speed headless storefront delivering instant page loads and cinematic product storytelling.', tag: 'DIRECT TO CONSUMER' },
      { title: 'Food & Gourmet Delivery Ordering', description: 'Real-time restaurant menu selection, delivery tracking, and automated kitchen printer integrations.', tag: 'FOOD COMMERCE' },
      { title: 'B2B Wholesale Ordering System', description: 'Bulk ordering portal with customer tier pricing, credit line terms, and automated invoice PDF generation.', tag: 'B2B' },
    ],
    relatedProjects: [
      { name: 'IndoUsCart Marketplace', tag: 'E-COMMERCE', description: 'Multi-vendor marketplace platform with localized payment and delivery integrations.', to: '/work/indouscart' },
      { name: 'Ajmeri Darbar Commerce', tag: 'FOOD COMMERCE', description: 'Online ordering platform with instant checkout and order dispatch.', to: '/work/ajmeridarbar' },
      { name: 'TDX Launchpad', tag: 'DIGITAL COMMERCE', description: 'Tokenized asset marketplace and automated transaction engine.', to: '/work/tdx-launchpad' },
    ],
    relatedServices: [
      { label: 'SaaS Development', to: '/saas-development', description: 'Scalable subscription platforms and web applications.' },
      { label: 'QA Automation Services', to: '/qa-automation-services', description: 'Automated testing for payment gateways and shopping carts.' },
      { label: 'Work Portfolio', to: '/work', description: 'Browse all completed commercial web and mobile products.' },
    ],
    faqs: [
      { question: 'What e-commerce platforms do you specialize in?', answer: 'We build custom full-stack e-commerce platforms (React, Node.js, Medusa.js) as well as headless Shopify Plus solutions, depending on your brand requirements and catalog scale.' },
      { question: 'How do you ensure checkout security and PCI compliance?', answer: 'We integrate certified payment processors (Stripe, PayPal, Razorpay) via tokenized iframes and APIs so sensitive card details never touch your application servers.' },
      { question: 'Can the store handle flash sales and heavy traffic spikes?', answer: 'Yes. Our architectures leverage edge CDN caching, decoupled databases, and stateless API containers engineered to absorb tens of thousands of concurrent shoppers.' },
      { question: 'Do you build native mobile shopping apps as well?', answer: 'Yes. We develop React Native cross-platform apps for iOS and Android that sync in real time with your central e-commerce database.' },
    ],
  },

  'saas-development': {
    slug: 'saas-development',
    path: '/saas-development',
    metaKey: 'saasDev',
    eyebrow: 'SAAS × CLOUD ARCHITECTURE × SCALE',
    h1Main: 'SaaS Development Company',
    h1Highlight: 'Engineered for Recurring Revenue',
    h1Suffix: '& Multi-Tenant Scale',
    heroSubtitle:
      'We design, architect, and engineer scalable Software-as-a-Service (SaaS) web applications: multi-tenant infrastructure, subscription billing, automated onboarding, and enterprise-grade security.',
    heroVisual: '/saas-dashboard-visual.png',
    heroVisualAlt: 'Multi-tenant SaaS dashboard architecture with real-time operational metrics',
    stats: [
      { value: 12, suffix: '+', label: 'SaaS Platforms Launched' },
      { value: 99, suffix: '.9%', label: 'Cloud Uptime' },
      { value: 100, suffix: '%', label: 'Multi-Tenant Isolation' },
      { value: 100, suffix: 'ms', label: 'Target API Latency' },
    ],
    valueProp: {
      eyebrow: 'ENTERPRISE SAAS ARCHITECTURE',
      title: 'From Minimum Viable Product to Enterprise Platform',
      description:
        'Building a successful SaaS requires more than pretty dashboards. We engineer resilient multi-tenant databases, seamless self-service billing, permission hierarchies, and clean APIs built to scale with your user base.',
      cards: [
        {
          title: 'Secure Multi-Tenancy',
          description:
            'Tenant-scoped database schemas, row-level security (RLS), and partitioned caches that guarantee zero data bleeding across corporate accounts.',
          tag: 'DATA ISOLATION',
        },
        {
          title: 'Subscription & Metered Billing',
          description:
            'Turnkey integration with Stripe Billing, paddle, or Chargebee for monthly/annual plans, usage metering, seat management, and self-serve upgrades.',
          tag: 'MONETIZATION',
        },
        {
          title: 'Role-Based Access (RBAC)',
          description:
            'Fine-grained permissions, team workspaces, invite links, single sign-on (SSO), and activity audit logs for enterprise readiness.',
          tag: 'ACCESS CONTROL',
        },
      ],
    },
    capabilities: [
      {
        title: 'Full-Cycle SaaS MVP Development',
        description:
          'Rapidly turn validated product ideas into production-ready SaaS applications in 6 to 10 weeks, complete with auth, billing, and core features.',
        points: [
          'Complete user authentication (Email, Google, GitHub, SSO)',
          'Automated onboarding checklists and product walkthroughs',
          'Self-serve Stripe billing portal and invoice history',
          'Responsive web app optimized for desktop and mobile',
        ],
        tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      },
      {
        title: 'Multi-Tenant Architecture & Cloud Scaling',
        description:
          'Containerized infrastructure designed for horizontal autoscaling, database read-replicas, and background job queues.',
        points: [
          'PostgreSQL Row-Level Security (RLS) tenant isolation',
          'Redis pub/sub and distributed caching layers',
          'Background worker queues (BullMQ, Celery) for heavy tasks',
          'Dockerized microservices deployed on AWS or GCP',
        ],
        tags: ['AWS', 'Docker', 'PostgreSQL', 'Redis'],
      },
      {
        title: 'AI-Powered SaaS Enhancements',
        description:
          'Supercharge your SaaS product with embedded AI features: natural language reporting, automated classification, and personalized copilots.',
        points: [
          'Semantic search and contextual AI assistants',
          'Automated data extraction and report generation',
          'Predictive analytics and anomaly detection',
          'Streaming AI response components with token controls',
        ],
        tags: ['OpenAI', 'Claude 3.5', 'LangChain', 'FastAPI'],
      },
      {
        title: 'Public Developer APIs & Webhook Infrastructure',
        description:
          'Empower your customers to connect their tools to your platform with well-documented REST/GraphQL APIs, API key managers, and reliable webhooks.',
        points: [
          'API key generation with rate limiting and scoping',
          'Reliable webhook dispatch engine with automatic retry backoff',
          'Interactive OpenAPI / Swagger documentation',
          'Developer sandboxes and test environments',
        ],
        tags: ['OpenAPI', 'Webhooks', 'Redis', 'Express'],
      },
    ],
    techStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Recharts'] },
      { category: 'Backend Frameworks', technologies: ['Node.js', 'Express', 'NestJS', 'Python', 'FastAPI'] },
      { category: 'Databases & Queues', technologies: ['PostgreSQL', 'Prisma / Drizzle', 'Redis', 'BullMQ'] },
      { category: 'Cloud & DevOps', technologies: ['AWS ECS / EC2', 'Docker', 'GitHub Actions', 'Cloudflare'] },
    ],
    process: [
      { step: '01', title: 'Product Architecture & Tenant Modeling', description: 'Defining tenant data separation, permission matrices, pricing tiers, and critical user flows.' },
      { step: '02', title: 'System Blueprint & Database Design', description: 'Architecting clean relational models, indexes, API contracts, and secure authentication flows.' },
      { step: '03', title: 'Full-Stack Agile Development', description: 'Two-week sprint cycles delivering verifiable, production-ready modules with continuous team demos.' },
      { step: '04', title: 'Load & Multi-Tenant Security Audits', description: 'Testing database isolation under concurrency, billing lifecycle edge cases, and penetration tests.' },
      { step: '05', title: 'Production Launch & Telemetry', description: 'Automated CI/CD deployment with error reporting (Sentry), uptime alerts, and user telemetry.' },
    ],
    useCases: [
      { title: 'Operations Management SaaS (Azibiz)', description: 'Multi-branch operations, inventory tracking, invoice generation, and revenue reporting.', tag: 'BUSINESS OPS' },
      { title: 'Workplace Communication Platform (WorkNest)', description: 'Team task allocation, shifts, announcements, and team communication software.', tag: 'PRODUCTIVITY' },
      { title: 'AI-Assisted Payroll SaaS', description: 'Automated salary calculations, biometric timesheet reconciliation, and compliance reporting.', tag: 'FINTECH' },
      { title: 'EdTech School Administration SaaS (SchoolSpine)', description: 'Institutional student tracking, exams, parent communication, and fee billing platform.', tag: 'EDTECH' },
    ],
    relatedProjects: [
      { name: 'Azibiz SaaS', tag: 'OPERATIONS SAAS', description: 'Comprehensive business management and financial bookkeeping platform.', to: '/work/azibiz' },
      { name: 'WorkNest Platform', tag: 'COLLABORATION', description: 'Real-time internal operations and workforce coordination tool.', to: '/work/worknest' },
      { name: 'AI Payroll Automation', tag: 'FINTECH SAAS', description: 'AI-driven payroll and attendance reconciliation system.', to: '/ai-case-studies/ai-payroll-automation' },
    ],
    relatedServices: [
      { label: 'AI Development Company', to: '/ai-development-company', description: 'Integrate intelligent LLM agents directly into your SaaS product.' },
      { label: 'QA Automation Services', to: '/qa-automation-services', description: 'Continuous regression testing for multi-tenant software.' },
      { label: 'Engineering Process', to: '/process', description: 'Our proven 5-stage sprint methodology from concept to deployment.' },
    ],
    faqs: [
      { question: 'How do you handle multi-tenant data privacy?', answer: 'We enforce tenant isolation at the database layer using PostgreSQL Row-Level Security (RLS) or dedicated schemas, ensuring tenants can never query data outside their organizational scope.' },
      { question: 'Can you migrate our existing single-tenant software to multi-tenant SaaS?', answer: 'Yes. We analyze your schema, extract hardcoded dependencies, build tenant-aware middleware, and run zero-downtime database migrations.' },
      { question: 'How does billing integration work with Stripe?', answer: 'We implement Stripe Checkout and Customer Portal with webhook listening, handling tier upgrades, downgrades, cancellations, prorations, and failed payment recovery automatically.' },
      { question: 'Do we own the full source code and intellectual property?', answer: 'Yes. 100% of the code, infrastructure configurations, and IP belong entirely to you upon project completion.' },
    ],
  },

  'software-testing-services': {
    slug: 'software-testing-services',
    path: '/software-testing-services',
    metaKey: 'softwareTesting',
    eyebrow: 'QUALITY ASSURANCE × RELIABILITY × SECURITY',
    h1Main: 'Software Testing Services',
    h1Highlight: 'Thorough, Methodical',
    h1Suffix: '& Engineered for Zero Regressions',
    heroSubtitle:
      'We deliver end-to-end software testing services: manual functional QA, cross-browser verification, API validation, security audits, and performance benchmarking for mission-critical software.',
    heroVisual: '/qa-testing-visual.png',
    heroVisualAlt: 'Software testing and quality assurance verification matrix',
    stats: [
      { value: 100, suffix: '%', label: 'Critical Path Coverage' },
      { value: 0, suffix: 's', label: 'Unverified Releases' },
      { value: 15, suffix: '+', label: 'Platforms Verified' },
      { value: 99, suffix: '%', label: 'Regression Prevention' },
    ],
    valueProp: {
      eyebrow: 'PRECISION QUALITY ASSURANCE',
      title: 'Protect Your Brand, Users, and Revenue From Bugs',
      description:
        'Software bugs lead to lost revenue, frustrated users, and damaged reputations. Our QA engineers test applications with rigorous discipline, catching edge cases and breaking bugs before your users ever see them.',
      cards: [
        {
          title: 'Comprehensive Functional QA',
          description:
            'Testing every button, input, edge case, and user scenario against strict acceptance criteria to guarantee flawless operational logic.',
          tag: 'FUNCTIONAL TESTING',
        },
        {
          title: 'Cross-Device & Browser Compatibility',
          description:
            'Rigorous verification across desktop browsers (Chrome, Safari, Firefox, Edge) and real mobile viewports (iOS, Android, tablets).',
          tag: 'CROSS-PLATFORM',
        },
        {
          title: 'API & Data Contract Testing',
          description:
            'Deep validation of API request payloads, response schemas, error codes, and database state integrity under unexpected inputs.',
          tag: 'API VALIDATION',
        },
      ],
    },
    capabilities: [
      {
        title: 'Manual Exploratory & Scenario Testing',
        description:
          'Experienced QA engineers test your application like real human users, discovering subtle UX flaws, visual misalignments, and logical edge cases.',
        points: [
          'User story validation against product acceptance criteria',
          'Negative testing with invalid, boundary, and unexpected inputs',
          'Visual layout checks across multiple device resolutions',
          'Detailed bug reports with reproduction steps, logs, and video captures',
        ],
        tags: ['Manual QA', 'TestRail', 'Jira', 'Chrome DevTools'],
      },
      {
        title: 'API & Integration Testing',
        description:
          'Validate all backend endpoints for payload compliance, authentication security, response status codes, and database state correctness.',
        points: [
          'REST and GraphQL schema verification',
          'Token authentication, authorization, and expiry testing',
          'Rate limiting and input fuzzing audits',
          'Database state verification post-transaction',
        ],
        tags: ['Postman', 'Insomnia', 'REST APIs', 'Swagger'],
      },
      {
        title: 'Performance, Stress & Load Testing',
        description:
          'Benchmark your application under real-world traffic surges to identify memory leaks, database bottlenecks, and slow API endpoints.',
        points: [
          'Simulated concurrent user surges and spike tests',
          'Database query execution time profiling',
          'Core Web Vitals and frontend rendering performance audits',
          'Actionable optimization recommendations for engineering teams',
        ],
        tags: ['k6', 'Lighthouse', 'Apache JMeter', 'New Relic'],
      },
      {
        title: 'Mobile App Testing (iOS & Android)',
        description:
          'Thorough quality assurance on physical mobile devices, testing app lifecycles, permissions, background states, and intermittent connectivity.',
        points: [
          'Testing across major iPhone and Android screen resolutions',
          'Device rotation, push notifications, and background resumes',
          'Offline mode and low-bandwidth network throttling',
          'App store pre-submission guidelines verification',
        ],
        tags: ['iOS TestFlight', 'Android APK', 'Charles Proxy'],
      },
    ],
    techStack: [
      { category: 'Test Management', technologies: ['TestRail', 'Jira', 'Linear', 'ClickUp'] },
      { category: 'API & Security Tools', technologies: ['Postman', 'OWASP ZAP', 'Burp Suite', 'Swagger UI'] },
      { category: 'Performance & Benchmarking', technologies: ['k6', 'Lighthouse', 'Chrome DevTools Profiler', 'JMeter'] },
      { category: 'Environment Emulation', technologies: ['BrowserStack', 'iOS Simulator', 'Android Studio Emulator'] },
    ],
    process: [
      { step: '01', title: 'Test Strategy & Requirement Audit', description: 'Reviewing specifications, user personas, risk areas, and defining clear pass/fail criteria.' },
      { step: '02', title: 'Test Plan & Test Case Authoring', description: 'Writing detailed, repeatable test cases covering happy paths, negative scenarios, and edge conditions.' },
      { step: '03', title: 'Execution & Real-Time Defect Reporting', description: 'Executing test runs and logging high-priority bugs with video evidence and network logs.' },
      { step: '04', title: 'Regression & Verification Passes', description: 'Retesting bug fixes and verifying that existing functionality remains unaffected.' },
      { step: '05', title: 'Release Sign-Off & Quality Summary', description: 'Delivering an executive test summary report with test coverage and release readiness status.' },
    ],
    useCases: [
      { title: 'Pre-Launch SaaS Release Testing', description: 'Full exploratory and functional QA before public product launches to guarantee first-day stability.', tag: 'SAAS LAUNCH' },
      { title: 'FinTech Payment Flow Verification', description: 'Testing checkout edge cases, payment failures, webhooks, and ledger accuracy.', tag: 'FINTECH' },
      { title: 'Healthcare System Verification', description: 'Testing patient record privacy, clinical shift calculations, and role-based access security.', tag: 'HEALTHCARE' },
      { title: 'E-Commerce Black Friday Stress Testing', description: 'Load testing storefront catalogs and cart checkouts to prepare for major promotional traffic.', tag: 'RETAIL' },
    ],
    relatedProjects: [
      { name: 'Monro Casino Platform', tag: 'HIGH-CONCURRENCY QA', description: 'Real-time state validation and stress testing for web gaming platform.', to: '/work/monro-casino' },
      { name: 'Patang Casino Platform', tag: 'REGRESSION TESTING', description: 'Comprehensive regression testing and cross-browser quality assurance.', to: '/work/patang-casino' },
      { name: 'SchoolSpine Platform', tag: 'MULTI-ROLE QA', description: 'Testing 13+ administrative roles and cross-device mobile applications.', to: '/work/schoolspine' },
    ],
    relatedServices: [
      { label: 'QA Automation Services', to: '/qa-automation-services', description: 'Automate your test cases with Playwright, Cypress, and CI/CD pipelines.' },
      { label: 'Services Overview', to: '/services', description: 'Explore our complete suite of product engineering capabilities.' },
      { label: 'Our Engineering Process', to: '/process', description: 'How quality assurance is baked into every phase of our development lifecycle.' },
    ],
    faqs: [
      { question: 'When should our company engage software testing services?', answer: 'Testing is most effective when integrated continuously during development, before major product launches, prior to funding demonstrations, or when user-reported bugs begin accumulating.' },
      { question: 'What does a Software Garage bug report include?', answer: 'Every bug report includes severity rating, concise summary, exact reproduction steps, expected vs actual behavior, environment details (OS/browser), network logs, and screen recordings.' },
      { question: 'Can your QA engineers embed within our existing engineering sprints?', answer: 'Yes. We seamlessly integrate into your Slack, Jira, or Linear workspaces, participating in sprint planning and validating pull requests alongside your developers.' },
      { question: 'What is the difference between software testing and QA automation?', answer: 'Manual testing excels at exploratory discovery, visual inspection, and subjective user experience. QA automation writes code to automatically re-run repetitive test suites on every pull request.' },
    ],
  },

  'qa-automation-services': {
    slug: 'qa-automation-services',
    path: '/qa-automation-services',
    metaKey: 'qaAutomation',
    eyebrow: 'AUTOMATION × CONTINUOUS INTEGRATION × SPEED',
    h1Main: 'QA Automation Services',
    h1Highlight: 'Ship Fast With Confidence',
    h1Suffix: '& Zero Broken Builds',
    heroSubtitle:
      'We architect robust, resilient automated testing suites: end-to-end tests with Playwright and Cypress, API regression pipelines, and seamless CI/CD test gates that prevent broken code from shipping.',
    heroVisual: '/qa-testing-visual.png',
    heroVisualAlt: 'Automated test suite execution and continuous CI/CD verification pipeline',
    stats: [
      { value: 80, suffix: '%', label: 'Faster Release Cycles' },
      { value: 95, suffix: '%', label: 'Automated Test Coverage' },
      { value: 0, suffix: 'm', label: 'Manual Regression Time' },
      { value: 100, suffix: '%', label: 'CI/CD Pipeline Integrated' },
    ],
    valueProp: {
      eyebrow: 'CONTINUOUS TEST AUTOMATION',
      title: 'Automate Repetitive Testing, Release Every Day',
      description:
        'Manual regression testing takes days and slows down engineering velocity. We build modern automated test frameworks that run on every pull request, giving your team instant feedback in minutes.',
      cards: [
        {
          title: 'Resilient End-to-End Tests',
          description:
            'Playwright and Cypress test suites built with Page Object Models (POM), auto-waiting, and robust locators that eliminate flaky test failures.',
          tag: 'E2E AUTOMATION',
        },
        {
          title: 'CI/CD Test Gate Integration',
          description:
            'Automated test runs embedded into GitHub Actions or GitLab CI, blocking broken pull requests from merging into production.',
          tag: 'DEVOPS PIPELINE',
        },
        {
          title: 'Headless API Test Suites',
          description:
            'Blazing-fast automated API testing validating thousands of endpoints, payloads, and response status codes in seconds.',
          tag: 'API REGRESSION',
        },
      ],
    },
    capabilities: [
      {
        title: 'Playwright & Cypress End-to-End (E2E) Suites',
        description:
          'Automate full user journeys—from signup and checkout to complex multi-step workflows—running across Chromium, WebKit, and Firefox.',
        points: [
          'Maintainable Page Object Model (POM) architecture',
          'Parallel test execution across multi-core cloud runners',
          'Visual regression snapshot testing for layout integrity',
          'Automatic trace capture, video, and screenshot artifact generation',
        ],
        tags: ['Playwright', 'Cypress', 'TypeScript', 'Node.js'],
      },
      {
        title: 'Automated API & Integration Pipelines',
        description:
          'Super-fast headless API tests running against staging databases, verifying data contracts, JWT auth tokens, and response schemas.',
        points: [
          'JSON Schema validation using Zod or Ajv',
          'Automated mock servers and database state seeding',
          'Performance response time assertions on critical routes',
          'Coverage reports generated on every pull request',
        ],
        tags: ['Supertest', 'Playwright API', 'Postman Newman', 'Jest'],
      },
      {
        title: 'CI/CD Integration & Test Pipeline Orchestration',
        description:
          'Turn automated tests into active quality gates in your development workflow, running on every commit, pull request, and release branch.',
        points: [
          'GitHub Actions, GitLab CI, and Bitbucket Pipelines setup',
          'Parallel sharded test execution to minimize build time',
          'Slack and Discord notifications for test failure alerts',
          'Automated deployment rollbacks on test failure',
        ],
        tags: ['GitHub Actions', 'Docker', 'Slack Webhooks', 'Bash'],
      },
      {
        title: 'Component & Unit Test Framework Setup',
        description:
          'Set up fast developer feedback loops with unit and component testing libraries so developers catch regressions right in their IDEs.',
        points: [
          'Vitest and Jest unit test suite architecture',
          'React Testing Library integration for UI components',
          'Coverage thresholds enforced in git pre-commit hooks',
          'Fast execution with sub-second reload times',
        ],
        tags: ['Vitest', 'React Testing Library', 'Husky', 'ESLint'],
      },
    ],
    techStack: [
      { category: 'E2E Frameworks', technologies: ['Playwright', 'Cypress', 'TypeScript', 'Selenium'] },
      { category: 'Unit & Component', technologies: ['Vitest', 'Jest', 'React Testing Library', 'Mock Service Worker (MSW)'] },
      { category: 'CI/CD & Runners', technologies: ['GitHub Actions', 'Docker', 'GitLab CI', 'AWS CodeBuild'] },
      { category: 'Reporting & Artifacts', technologies: ['Allure Reports', 'Playwright HTML Report', 'S3 Artifact Storage'] },
    ],
    process: [
      { step: '01', title: 'Automation Feasibility & Scope', description: 'Identifying high-value critical user paths, fragile features, and repetitive manual regression bottlenecks.' },
      { step: '02', title: 'Framework Architecture & Standards', description: 'Setting up a clean TypeScript test repository with Page Object Models, fixture helpers, and environment configs.' },
      { step: '03', title: 'Test Scripting & Critical Path Coverage', description: 'Automating high-priority customer flows with resilient locators and zero hardcoded sleeps.' },
      { step: '04', title: 'CI/CD Pipeline Integration', description: 'Configuring parallel test workflows that run automatically on PR creation with rich error reporting.' },
      { step: '05', title: 'Handover, Training & Maintenance', description: 'Documenting test authorship guidelines, training your developers, or providing ongoing suite maintenance.' },
    ],
    useCases: [
      { title: 'SaaS Continuous Release Protection', description: 'Automated 15-minute regression suite running on every pull request before merging to main.', tag: 'SAAS CI/CD' },
      { title: 'E-Commerce Checkout Protection', description: 'Automating multi-step cart, coupon code, and payment gateway flows on staging before daily releases.', tag: 'ECOMMERCE' },
      { title: 'EdTech Multi-Role User Flows', description: 'Testing school admin, teacher, and student permission boundaries automatically.', tag: 'EDTECH' },
      { title: 'API Contract Testing for Microservices', description: 'Ensuring zero breaking schema changes between backend services and frontend applications.', tag: 'BACKEND' },
    ],
    relatedProjects: [
      { name: 'TDX Launchpad Platform', tag: 'AUTOMATED TESTING', description: 'Automated validation for financial transactions and wallet interactions.', to: '/work/tdx-launchpad' },
      { name: 'SchoolSpine Application', tag: 'COMPREHENSIVE QA', description: 'Automated and functional test suites for 13+ administrative school modules.', to: '/work/schoolspine' },
      { name: 'Software Testing Services', tag: 'MANUAL QA', description: 'Exploratory testing and human quality assurance services.', to: '/software-testing-services' },
    ],
    relatedServices: [
      { label: 'Software Testing Services', to: '/software-testing-services', description: 'Manual exploratory, security, and device compatibility testing.' },
      { label: 'SaaS Development', to: '/saas-development', description: 'Full-stack cloud applications engineered with test-driven discipline.' },
      { label: 'Engineering Process', to: '/process', description: 'See how quality assurance integrates with our sprint lifecycle.' },
    ],
    faqs: [
      { question: 'Why choose Playwright over Selenium or Cypress?', answer: 'Playwright offers native multi-tab and multi-user context support, built-in auto-waiting, lightning-fast execution across Chromium/Firefox/WebKit, and virtually zero flaky test behavior.' },
      { question: 'How do you prevent automated tests from being flaky?', answer: 'We avoid arbitrary timeouts/sleeps, use role-based and user-facing locators, isolate test data with dynamic database seeding, and run tests in clean browser contexts.' },
      { question: 'Can automated tests run against our staging environments without polluting data?', answer: 'Yes. We build test fixtures that dynamically create isolated temporary accounts, execute tests, and cleanly tear down records afterward.' },
      { question: 'How long does it take to set up an automated testing framework?', answer: 'A foundational Playwright framework with CI/CD integration and coverage of your top 5 critical user flows is typically operational within 1 to 2 weeks.' },
    ],
  },
}
