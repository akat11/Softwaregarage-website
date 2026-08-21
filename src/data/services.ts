export interface Service {
  slug: string
  title: string
  shortDesc: string
  longDesc: string
  capabilities: string[]
  stack: string[]
  useCases: string[]
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDesc: 'High-performance marketing sites, web apps and platforms.',
    longDesc:
      'We design and engineer fast, accessible, production-grade websites and web applications — from premium marketing sites to complex multi-role platforms.',
    capabilities: ['Marketing sites', 'Web applications', 'Admin dashboards', 'Performance optimization'],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    useCases: ['Corporate & product websites', 'Internal tools', 'Customer portals'],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'Native-feel iOS & Android apps built with React Native / Flutter.',
    longDesc:
      'We build cross-platform mobile applications that feel native, ship fast, and are architected for long-term maintainability.',
    capabilities: ['iOS & Android', 'Push notifications', 'Offline-first architecture', 'App store deployment'],
    stack: ['React Native', 'Flutter', 'TypeScript', 'Firebase'],
    useCases: ['Consumer apps', 'Field-service tools', 'On-demand platforms'],
  },
  {
    slug: 'web3-blockchain-development',
    title: 'Web3 & Blockchain Development',
    shortDesc: 'Secure blockchain products, smart contracts and decentralized experiences built for real-world adoption.',
    longDesc:
      'We engineer production-ready Web3 platforms that make complex blockchain technology useful, secure and easy to trust — from smart contract systems to wallet-connected products and decentralized applications.',
    capabilities: ['Smart contracts', 'dApps & Web3 platforms', 'Wallet integrations', 'Token and on-chain systems'],
    stack: ['Solidity', 'EVM', 'wagmi', 'Node.js', 'IPFS'],
    useCases: ['DeFi products', 'Digital ownership platforms', 'On-chain business systems'],
  },
  {
    slug: 'saas-custom-software',
    title: 'SaaS & Custom Software',
    shortDesc: 'Multi-tenant platforms, admin systems, internal tools.',
    longDesc:
      'From MVP to scale, we architect and build SaaS products — multi-tenant data models, billing, roles and permissions, and admin tooling.',
    capabilities: ['Multi-tenancy', 'Role-based access', 'Billing integration', 'Admin panels'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    useCases: ['B2B SaaS platforms', 'Business management systems', 'Internal operations tools'],
  },
  {
    slug: 'ecommerce-development',
    title: 'E-Commerce Development',
    shortDesc: 'Storefronts, checkout, catalog and payment systems.',
    longDesc:
      'We build conversion-focused storefronts and headless commerce platforms with reliable checkout, catalog and payment integrations.',
    capabilities: ['Headless commerce', 'Checkout & payments', 'Catalog management', 'Performance & SEO'],
    stack: ['Next.js', 'Shopify/Custom', 'Stripe', 'PostgreSQL'],
    useCases: ['DTC storefronts', 'Marketplaces', 'Subscription commerce'],
  },
  {
    slug: 'ui-ux-product-design',
    title: 'UI/UX & Product Design',
    shortDesc: 'Design systems, prototypes and interaction design.',
    longDesc:
      'We design premium, usable interfaces — from information architecture and wireframes to fully interactive Figma prototypes and design systems.',
    capabilities: ['Design systems', 'Interactive prototypes', 'User flows', 'Responsive layouts'],
    stack: ['Figma', 'Design tokens', 'Component libraries'],
    useCases: ['Product redesigns', 'New product design', 'Design system creation'],
  },
  {
    slug: 'qa-test-automation',
    title: 'QA & Test Automation',
    shortDesc: 'Functional, regression, API and performance testing.',
    longDesc:
      'We treat quality as a first-class engineering discipline — building automated test suites alongside the product, not after it.',
    capabilities: ['Functional testing', 'Regression suites', 'API testing', 'Performance testing'],
    stack: ['Cypress', 'Selenium', 'Postman', 'JMeter'],
    useCases: ['Pre-release regression', 'CI/CD test pipelines', 'Load & performance validation'],
  },
  {
    slug: 'api-backend-engineering',
    title: 'API & Backend Engineering',
    shortDesc: 'Scalable services, databases and integrations.',
    longDesc:
      'We architect backend systems and APIs designed for scale, security and long-term maintainability, integrated cleanly with your frontend and third parties.',
    capabilities: ['REST & GraphQL APIs', 'Database architecture', 'Third-party integrations', 'Cloud deployment'],
    stack: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
    useCases: ['Platform backends', 'Integration layers', 'Data pipelines'],
  },
  {
    slug: 'ai-business-automation',
    title: 'AI & Business Automation',
    shortDesc: 'AI-powered features, assistants and workflow automation.',
    longDesc:
      'We integrate AI where it genuinely improves the product — assistants, intelligent workflows and automation that reduce manual work.',
    capabilities: ['AI-powered features', 'AI assistants', 'Workflow automation', 'AI-assisted testing'],
    stack: ['OpenAI/Claude APIs', 'Python', 'Automation pipelines'],
    useCases: ['Internal automation', 'AI-assisted product features', 'Customer-facing assistants'],
  },
]
