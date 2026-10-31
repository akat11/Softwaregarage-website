export interface Industry {
  slug: string
  name: string
  description: string
  solutions: string[]
  caseStudyLink?: { label: string; url: string }
}

export const industries: Industry[] = [
  {
    slug: 'saas',
    name: 'SaaS & Enterprise Cloud',
    description: 'Multi-tenant platforms, subscription billing, and role-based operational tooling.',
    solutions: ['Platform architecture', 'Admin tooling', 'Billing integration'],
    caseStudyLink: { label: 'WorkNest Platform', url: '/work/worknest' },
  },
  {
    slug: 'fintech',
    name: 'FinTech & Payments',
    description: 'Secure, compliant financial product interfaces, automated ledgers, and transaction engines.',
    solutions: ['Secure data handling', 'Payment integration', 'Dashboarding'],
    caseStudyLink: { label: 'Patang Casino Transaction QA', url: '/work/patang-casino' },
  },
  {
    slug: 'web3',
    name: 'Web3 & Blockchain',
    description: 'Decentralized platforms, token launchpads, and audited smart contract integrations.',
    solutions: ['Wallet integration', 'On-chain UX', 'Launchpad platforms'],
    caseStudyLink: { label: 'TDX Launchpad', url: '/work/tdx-launchpad' },
  },
  {
    slug: 'ecommerce',
    name: 'E-Commerce & Retail',
    description: 'Conversion-engineered headless commerce storefronts, high-throughput catalog systems, and checkout pipelines.',
    solutions: ['Headless commerce', 'Checkout optimization', 'Catalog systems'],
    caseStudyLink: { label: 'IndousCart Marketplace', url: '/work/indouscart' },
  },
  {
    slug: 'education',
    name: 'Education & EdTech Development',
    description: 'Institutional school management platforms, AI assessment generation, teacher copilots, and digital learning ecosystems.',
    solutions: ['Admin systems', 'Learning platforms', 'Attendance & records'],
    caseStudyLink: { label: 'SchoolSpine AI Assessment Copilot', url: '/ai-case-studies/schoolspine-ai' },
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & HealthTech Development',
    description: 'Constraint-based clinical roster agents, patient communication systems, and healthcare operational workflows.',
    solutions: ['Scheduling systems', 'Patient portals', 'Record management'],
    caseStudyLink: { label: 'AI Hospital Roster Agent', url: '/ai-case-studies/ai-hospital-roster' },
  },
  {
    slug: 'logistics',
    name: 'Logistics & Supply Chain',
    description: 'Real-time fleet tracking, dispatch automation, and warehouse operational tooling.',
    solutions: ['Dispatch systems', 'Tracking dashboards', 'Route tooling'],
  },
  {
    slug: 'gaming',
    name: 'Gaming & Interactive Entertainment',
    description: 'Real-time gaming applications, high-concurrency payment integrations, and immersive user experiences.',
    solutions: ['Gaming interfaces', 'Payment integration', 'Real-time interaction'],
    caseStudyLink: { label: 'Monro Casino Payment Experience', url: '/work/monro-casino' },
  },
  {
    slug: 'real-estate',
    name: 'Real Estate & Property Platforms',
    description: 'Property listing marketplaces, virtual discovery tours, and broker management dashboards.',
    solutions: ['Listing platforms', 'Search & filters', 'Management dashboards'],
    caseStudyLink: { label: 'Azibiz Marketplace', url: '/work/azibiz' },
  },
  {
    slug: 'business-automation',
    name: 'AI & Business Automation',
    description: 'Autonomous intelligence pipelines, automated payroll reconciliation, and custom enterprise copilots.',
    solutions: ['Workflow automation', 'Internal tools', 'Process dashboards'],
    caseStudyLink: { label: 'AI Payroll Automation', url: '/ai-case-studies/ai-payroll-automation' },
  },
]
