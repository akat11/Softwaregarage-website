export interface ProcessStep {
  step: string
  title: string
  category: string
  description: string
  outputs: string[]
  icon?: string
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    category: 'RESEARCH & INSIGHT',
    description:
      'Understand the business, users, market and technical constraints before we build.',
    outputs: ['Research', 'Requirements', 'User Flows'],
    icon: 'search',
  },
  {
    step: '02',
    title: 'Define',
    category: 'STRATEGY & PLANNING',
    description:
      'Turn the problem into a clear product strategy, scope and execution roadmap.',
    outputs: ['Product Scope', 'Roadmap', 'Architecture'],
    icon: 'target',
  },
  {
    step: '03',
    title: 'Design',
    category: 'EXPERIENCE & INTERFACE',
    description:
      'Create intuitive user experiences and interfaces designed around real user behavior.',
    outputs: ['Wireframes', 'UI System', 'Prototype'],
    icon: 'design',
  },
  {
    step: '04',
    title: 'Develop',
    category: 'ENGINEERING & BUILD',
    description:
      'Build scalable, secure and production-ready software using the right technology stack.',
    outputs: ['Frontend', 'Backend', 'APIs', 'Integrations'],
    icon: 'code',
  },
  {
    step: '05',
    title: 'Test',
    category: 'QUALITY & ASSURANCE',
    description:
      'Validate functionality, performance, security and reliability before release.',
    outputs: ['Functional', 'API', 'Automation', 'Performance'],
    icon: 'check',
  },
  {
    step: '06',
    title: 'Launch',
    category: 'DEPLOY & DELIVER',
    description:
      'Move from validated product to production with controlled deployment and support.',
    outputs: ['Deployment', 'Monitoring', 'Release'],
    icon: 'rocket',
  },
  {
    step: '07',
    title: 'Scale',
    category: 'GROWTH & OPTIMIZATION',
    description:
      'Improve, measure and evolve the product as users, data and business requirements grow.',
    outputs: ['Analytics', 'Optimization', 'New Features'],
    icon: 'growth',
  },
]
