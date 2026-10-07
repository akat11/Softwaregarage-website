// Single source of truth for SEO. Used at runtime by <Seo /> and at build time
// by scripts/vite-plugin-seo.ts (which prerenders per-route <head> tags and
// writes sitemap.xml / robots.txt). Keep imports relative — no '@/' alias —
// because the Vite config loads this file outside the app bundle.
import { projects, type Project } from './projects'
import { services } from './services'
import { landingPages } from './landingPages'

// Production domain confirmed: https://thesoftwaregarage.netlify.app. No trailing slash.
export const SITE_URL = 'https://thesoftwaregarage.netlify.app'

export const SITE = {
  name: 'Software Garage',
  legalName: 'The Software Garage',
  url: SITE_URL,
  locale: 'en_US',
  email: 'softwaregarage2025@gmail.com',
  logo: `${SITE_URL}/icon-512.png`,
  ogImage: `${SITE_URL}/og-image.jpg`,
  ogImageAlt: 'Software Garage — Global Digital Product & Technology Studio',
  themeColor: '#050505',
  sameAs: [
    'https://www.linkedin.com/company/thesoftwaregarage',
    'https://www.instagram.com/the_software_garage/',
  ],
  description:
    'Software Garage is a global digital product and technology studio building web apps, mobile apps, SaaS, Web3, e-commerce, UI/UX, QA automation and AI solutions.',
}

export interface PageMeta {
  path: string
  title: string
  description: string
  keywords?: string[]
  image?: string
  imageAlt?: string
  type?: 'website' | 'article'
  noindex?: boolean
  /** Breadcrumb label; omitted for the home page. */
  crumb?: string
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage'
  priority?: number
  changefreq?: 'weekly' | 'monthly' | 'yearly'
  serviceType?: string
  faqs?: Array<{ question: string; answer: string }>
}

export const pageMeta = {
  home: {
    path: '/',
    title: 'Software Garage | AI & Web3 Product Engineering Studio',
    description:
      'We build AI-powered products, intelligent agents, Web3 & blockchain solutions, SaaS platforms, and scalable digital experiences for ambitious businesses.',
    keywords: [
      'software development company',
      'web development company',
      'mobile app development',
      'SaaS development',
      'custom software development',
      'UI UX design agency',
      'QA automation testing services',
      'AI automation solutions',
      'blockchain development',
      'e-commerce development',
    ],
    image: '/og-image.jpg',
    imageAlt: 'Software Garage — Global Digital Product & Technology Studio',
    priority: 1,
    changefreq: 'weekly',
  },
  aiLab: {
    path: '/ai-lab',
    title: 'AI Lab — Custom AI Agents & Workflow Automation | Software Garage',
    description:
      'Explore Software Garage AI Lab: production-ready AI scheduling agents, payroll intelligence workflows, automated assessment generators, and custom copilots.',
    keywords: [
      'AI solutions',
      'AI agents',
      'AI automation',
      'RAG systems',
      'AI development company',
      'workflow automation',
      'AI scheduling agent',
      'AI payroll workflow',
    ],
    image: '/journey-ai.png',
    imageAlt: 'Software Garage AI Lab neural intelligence and autonomous workflows',
    crumb: 'AI Lab',
    priority: 0.9,
    changefreq: 'monthly',
  },
  services: {
    path: '/services',
    title: 'Software Development & AI Engineering Services | Software Garage',
    description:
      'End-to-end product engineering services: AI automation, full-stack web development, mobile applications, SaaS architecture, QA automation, and Web3 solutions.',
    keywords: services.map((s) => s.title),
    image: '/services-hero-scene.png',
    imageAlt: 'Software Garage digital engineering and AI services overview',
    crumb: 'Services',
    priority: 0.9,
    changefreq: 'monthly',
  },
  work: {
    path: '/work',
    title: 'Featured Digital Products & Case Studies | Software Garage',
    description:
      'Explore our portfolio of delivered web apps, mobile solutions, SaaS platforms, Web3 launchpads, and QA automation systems across multiple global industries.',
    image: '/work-hero.webp',
    imageAlt: 'Software Garage selected digital work and portfolio showcase',
    crumb: 'Work',
    schemaType: 'CollectionPage',
    priority: 0.9,
    changefreq: 'monthly',
  },
  industries: {
    path: '/industries',
    title: 'Industry Solutions — SaaS, FinTech, Healthcare & EdTech | Software Garage',
    description:
      'Specialized digital solutions engineered for Education, Healthcare, Gaming, E-Commerce, Web3, Logistics, and Enterprise operations worldwide.',
    image: '/industries.webp',
    imageAlt: 'Industries engineered by Software Garage',
    crumb: 'Industries',
    priority: 0.8,
    changefreq: 'monthly',
  },
  about: {
    path: '/about',
    title: 'About Software Garage — Digital Product & Technology Studio',
    description:
      'Meet Software Garage: a product-first engineering studio combining elite design, scalable architecture, and intelligent automation for ambitious businesses.',
    image: '/about-hero-office.webp',
    imageAlt: 'Software Garage studio team and engineering culture',
    crumb: 'About',
    schemaType: 'AboutPage',
    priority: 0.7,
    changefreq: 'yearly',
  },
  process: {
    path: '/process',
    title: 'Product Engineering Process — Discovery to Deployment | Software Garage',
    description:
      'Our battle-tested 5-phase engineering methodology: Strategy Discovery, UI/UX Architecture, Agile Development, QA Automation, and Scalable Deployment.',
    image: '/process.webp',
    imageAlt: 'Software Garage structured product development process',
    crumb: 'Process',
    priority: 0.7,
    changefreq: 'yearly',
  },
  contact: {
    path: '/contact',
    title: 'Contact Software Garage — Start Your Product Engineering Project',
    description:
      'Discuss your upcoming web, mobile, SaaS, or AI automation project with Software Garage engineers. Get in touch for architectural consultation and quotes.',
    image: '/contact-hero-art-new.webp',
    imageAlt: 'Contact Software Garage engineering team',
    crumb: 'Contact',
    schemaType: 'ContactPage',
    priority: 0.8,
    changefreq: 'yearly',
  },
  notFound: {
    path: '/404',
    title: 'Page Not Found | Software Garage',
    description: "The page you're looking for doesn't exist or has moved.",
    noindex: true,
  },
} satisfies Record<string, PageMeta>

function trimDescription(text: string, max = 155): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return clean.slice(0, clean.lastIndexOf(' ', max - 1)).replace(/[,.;:\s]+$/, '') + '…'
}

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl
  if (pathOrUrl === '/') return `${SITE_URL}/`
  return SITE_URL + (pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`)
}

function getMimeType(url: string): string {
  const clean = url.toLowerCase().split('?')[0]
  if (clean.endsWith('.png')) return 'image/png'
  if (clean.endsWith('.webp')) return 'image/webp'
  if (clean.endsWith('.svg')) return 'image/svg+xml'
  return 'image/jpeg'
}

const caseStudyCache = new Map<string, PageMeta>()

export function caseStudyMeta(project: Project): PageMeta {
  const cached = caseStudyCache.get(project.slug)
  if (cached) return cached
  const meta: PageMeta = {
    path: `/work/${project.slug}`,
    title: `${project.name} — ${project.type} Case Study | Software Garage`,
    description: trimDescription(project.description, 155),
    keywords: [project.name, project.type, ...project.technology],
    image: project.image ? absoluteUrl(project.image) : SITE.ogImage,
    imageAlt: `${project.name} — ${project.type} Case Study by Software Garage`,
    type: 'article',
    crumb: project.name,
    priority: 0.7,
    changefreq: 'monthly',
  }
  caseStudyCache.set(project.slug, meta)
  return meta
}

export const aiCaseStudyMetas: PageMeta[] = [
  {
    path: '/ai-case-studies/ai-payroll-automation',
    title: 'AI Payroll Automation Case Study | Software Garage',
    description:
      'How Software Garage built an AI payroll intelligence system that automates attendance reconciliation, leave tracking, half-days, and salary calculations.',
    keywords: [
      'AI Payroll Automation',
      'payroll AI workflow',
      'workforce intelligence',
      'automated salary calculation',
      'attendance automation',
      'HR tech AI',
    ],
    image: '/saas-dashboard-visual.png',
    imageAlt: 'AI Payroll Automation dashboard and verification pipeline',
    crumb: 'AI Payroll Automation',
    type: 'article',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/ai-case-studies/schoolspine-ai',
    title: 'SchoolSpine AI Case Study — Academic Assessment Copilot | Software Garage',
    description:
      'Discover how SchoolSpine AI empowers educators with automated assessment generation, Bloom taxonomy mapping, and answer key generation with human-in-the-loop control.',
    keywords: [
      'SchoolSpine AI',
      'AI for education',
      'assessment generation AI',
      'question paper builder',
      'teacher copilot',
      'EdTech AI solution',
    ],
    image: '/schoolspine.webp',
    imageAlt: 'SchoolSpine AI academic assessment generator and teacher copilot',
    crumb: 'SchoolSpine AI',
    type: 'article',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/ai-case-studies/ai-hospital-roster',
    title: 'AI Hospital Roster Case Study — Healthcare Scheduling Agent | Software Garage',
    description:
      'How Software Garage engineered an autonomous clinical roster agent that solves hospital shift constraints, rotation fatigue, and emergency relief coverage.',
    keywords: [
      'AI Hospital Roster',
      'healthcare AI scheduling',
      'clinical roster agent',
      'nurse shift scheduling AI',
      'constraint satisfaction AI',
      'medical staff scheduling',
    ],
    image: '/journey-ai.png',
    imageAlt: 'AI Hospital Roster scheduling agent and clinical coverage matrix',
    crumb: 'AI Hospital Roster',
    type: 'article',
    priority: 0.8,
    changefreq: 'monthly',
  },
]

export function getAiCaseStudyMeta(slug: string): PageMeta | undefined {
  return aiCaseStudyMetas.find((m) => m.path === `/ai-case-studies/${slug}`)
}

export const landingPageMetas: PageMeta[] = [
  {
    path: '/ai-development-company',
    title: 'AI Development Company — Custom AI Agents & LLM Solutions | Software Garage',
    description:
      'Software Garage is an AI development company engineering custom autonomous AI agents, enterprise LLM workflows, RAG systems, and intelligent automation.',
    keywords: [
      'AI development company',
      'custom AI development',
      'AI agent development',
      'enterprise LLM solutions',
      'RAG architecture',
      'AI workflow automation',
    ],
    image: '/journey-ai.png',
    imageAlt: 'Software Garage AI development and neural automation systems',
    crumb: 'AI Development Company',
    serviceType: 'Artificial Intelligence Development',
    priority: 0.9,
    changefreq: 'weekly',
    faqs: landingPages['ai-development-company']?.faqs,
  },
  {
    path: '/ai-agent-development',
    title: 'AI Agent Development Company — Autonomous Agents & Copilots | Software Garage',
    description:
      'Build production-ready autonomous AI agents with Software Garage. Multi-agent orchestration, tool-calling copilots, reasoning workflows, and custom domain agents.',
    keywords: [
      'AI agent development',
      'autonomous AI agents',
      'AI copilot development',
      'multi-agent systems',
      'tool calling AI',
      'workflow automation agents',
    ],
    image: '/ai-agent-visual.png',
    imageAlt: 'Autonomous AI agents collaborating on complex technical workflows',
    crumb: 'AI Agent Development',
    serviceType: 'AI Agent Engineering',
    priority: 0.9,
    changefreq: 'weekly',
    faqs: landingPages['ai-agent-development']?.faqs,
  },
  {
    path: '/healthcare-software-development',
    title: 'Healthcare Software Development Company — Clinical AI & Medical Tech | Software Garage',
    description:
      'Custom healthcare software development: HIPAA-compliant clinical systems, autonomous medical staff roster agents, patient portals, and telemetry dashboards.',
    keywords: [
      'healthcare software development',
      'medical software development',
      'HIPAA compliant software',
      'clinical scheduling AI',
      'healthtech platform development',
    ],
    image: '/saas-dashboard-visual.png',
    imageAlt: 'Healthcare software architecture and clinical management dashboard',
    crumb: 'Healthcare Software Development',
    serviceType: 'Healthcare Software Development',
    priority: 0.85,
    changefreq: 'monthly',
    faqs: landingPages['healthcare-software-development']?.faqs,
  },
  {
    path: '/edtech-development',
    title: 'EdTech Software Development Company — Learning Platforms & AI Copilots | Software Garage',
    description:
      'Engineering next-generation educational software: school management systems, AI assessment generation, adaptive learning pathways, and teacher copilots.',
    keywords: [
      'EdTech software development',
      'education software company',
      'LMS development',
      'school management platform',
      'AI for education',
      'teacher copilot',
    ],
    image: '/schoolspine.webp',
    imageAlt: 'EdTech software platform and digital school management interface',
    crumb: 'EdTech Development',
    serviceType: 'Educational Technology Development',
    priority: 0.85,
    changefreq: 'monthly',
    faqs: landingPages['edtech-development']?.faqs,
  },
  {
    path: '/ecommerce-development',
    title: 'E-Commerce Development Company — Headless Commerce & Marketplaces | Software Garage',
    description:
      'Scalable e-commerce development: headless Shopify, custom multi-vendor marketplaces, high-conversion checkout flows, and real-time inventory management.',
    keywords: [
      'ecommerce development company',
      'headless ecommerce',
      'custom online store development',
      'multi vendor marketplace',
      'checkout optimization',
    ],
    image: '/ecommerce-development-visual.png',
    imageAlt: 'Modern headless e-commerce store and multi-vendor marketplace interface',
    crumb: 'E-Commerce Development',
    serviceType: 'E-Commerce Platform Development',
    priority: 0.85,
    changefreq: 'monthly',
    faqs: landingPages['ecommerce-development']?.faqs,
  },
  {
    path: '/saas-development',
    title: 'SaaS Development Company — Cloud Architecture & Web Applications | Software Garage',
    description:
      'End-to-end SaaS application development: multi-tenant architecture, subscription billing, automated onboarding, high-throughput APIs, and AI integrations.',
    keywords: [
      'SaaS development company',
      'custom SaaS development',
      'cloud software engineering',
      'multi tenant architecture',
      'SaaS MVP development',
    ],
    image: '/saas-dashboard-visual.png',
    imageAlt: 'Multi-tenant SaaS dashboard architecture with real-time operational metrics',
    crumb: 'SaaS Development',
    serviceType: 'SaaS Application Engineering',
    priority: 0.85,
    changefreq: 'monthly',
    faqs: landingPages['saas-development']?.faqs,
  },
  {
    path: '/software-testing-services',
    title: 'Software Testing Services — Manual, Security & Performance QA | Software Garage',
    description:
      'Comprehensive software testing services: end-to-end functional QA, cross-browser compatibility, API regression verification, and performance stress testing.',
    keywords: [
      'software testing services',
      'QA testing company',
      'manual software testing',
      'regression testing',
      'functional QA services',
      'API testing',
    ],
    image: '/qa-testing-visual.png',
    imageAlt: 'Software testing and quality assurance verification matrix',
    crumb: 'Software Testing Services',
    serviceType: 'Software Testing & QA Services',
    priority: 0.85,
    changefreq: 'monthly',
    faqs: landingPages['software-testing-services']?.faqs,
  },
  {
    path: '/qa-automation-services',
    title: 'QA Automation Services — Playwright, Cypress & CI/CD Testing | Software Garage',
    description:
      'Enterprise QA automation services: robust test suites with Playwright and Cypress, automated regression pipelines, continuous CI/CD verification, and load testing.',
    keywords: [
      'QA automation services',
      'automated testing company',
      'Playwright automation',
      'Cypress test suites',
      'CI CD test automation',
      'regression automation',
    ],
    image: '/qa-testing-visual.png',
    imageAlt: 'Automated test suite execution and continuous CI/CD verification pipeline',
    crumb: 'QA Automation Services',
    serviceType: 'Quality Assurance Automation',
    priority: 0.85,
    changefreq: 'monthly',
    faqs: landingPages['qa-automation-services']?.faqs,
  },
]

export function getLandingPageMeta(slugOrPath: string): PageMeta | undefined {
  const normalized = slugOrPath.startsWith('/') ? slugOrPath : `/${slugOrPath}`
  return landingPageMetas.find((m) => m.path === normalized)
}

/** Every indexable route, used for prerendering and the sitemap. */
export function allRoutes(): PageMeta[] {
  const pages = Object.values(pageMeta).filter((p: PageMeta) => !p.noindex)
  return [...pages, ...projects.map(caseStudyMeta), ...aiCaseStudyMetas, ...landingPageMetas]
}

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

/** schema.org JSON-LD graph for a page. */
export function jsonLd(meta: PageMeta, project?: Project): object {
  const url = absoluteUrl(meta.path)
  const imageUrl = absoluteUrl(meta.image ?? SITE.ogImage)

  const graph: object[] = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: SITE.logo,
        width: 512,
        height: 512,
      },
      image: SITE.ogImage,
      description: SITE.description,
      email: SITE.email,
      sameAs: SITE.sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales & technical support',
        email: SITE.email,
        availableLanguage: ['English'],
      },
      knowsAbout: services.map((s) => s.title),
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.description,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en',
    },
    {
      '@type': meta.schemaType ?? 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      primaryImageOfPage: imageUrl,
      inLanguage: 'en',
    },
  ]

  // Breadcrumbs hierarchy
  if (meta.path.startsWith('/ai-case-studies/')) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: absoluteUrl('/'),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AI Lab',
          item: absoluteUrl('/ai-lab'),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: meta.crumb ?? meta.title,
          item: url,
        },
      ],
    })

    // Technical Case Study & Software Application Schema
    graph.push({
      '@type': 'TechArticle',
      '@id': `${url}#article`,
      headline: meta.title,
      description: meta.description,
      url,
      image: imageUrl,
      inLanguage: 'en',
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      about: {
        '@type': 'SoftwareApplication',
        name: meta.crumb ?? meta.title,
        applicationCategory: meta.path.includes('payroll')
          ? 'BusinessApplication'
          : meta.path.includes('hospital')
          ? 'HealthApplication'
          : 'EducationalApplication',
        operatingSystem: 'Web-based',
        description: meta.description,
        creator: { '@id': ORG_ID },
      },
    })
  } else if (meta.crumb) {
    const items = [{ name: 'Home', path: '/' }]
    if (project) items.push({ name: 'Work', path: '/work' })
    else if (meta.serviceType) items.push({ name: 'Services', path: '/services' })
    items.push({ name: meta.crumb, path: meta.path })
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    })
  }

  if (meta.serviceType) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: meta.title,
      serviceType: meta.serviceType,
      description: meta.description,
      provider: { '@id': ORG_ID },
      areaServed: 'Worldwide',
    })
  }

  if (meta.faqs && meta.faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: meta.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    })
  }

  if (meta.path === '/services') {
    graph.push({
      '@type': 'ItemList',
      name: 'Software Garage Engineering & AI Services',
      itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'Service',
          name: s.title,
          description: s.shortDesc,
          provider: { '@id': ORG_ID },
          areaServed: 'Worldwide',
        },
      })),
    })
  }

  if (meta.path === '/work') {
    graph.push({
      '@type': 'ItemList',
      name: 'Software Garage Case Studies & Delivered Systems',
      itemListElement: projects.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: absoluteUrl(`/work/${p.slug}`),
        name: p.name,
      })),
    })
  }

  if (project) {
    graph.push({
      '@type': 'CreativeWork',
      '@id': `${url}#project`,
      name: project.name,
      headline: `${project.name} — ${project.type}`,
      description: trimDescription(project.description, 300),
      genre: project.type,
      keywords: project.technology.join(', '),
      image: project.image ? absoluteUrl(project.image) : SITE.ogImage,
      creator: { '@id': ORG_ID },
      url,
    })
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export interface HeadTag {
  tag: 'meta' | 'link'
  attrs: Record<string, string>
}

/** Every per-page <head> tag, apart from <title> and JSON-LD. */
export function headTags(meta: PageMeta): HeadTag[] {
  const url = absoluteUrl(meta.path)
  const image = absoluteUrl(meta.image ?? SITE.ogImage)
  const imageAlt = meta.imageAlt ?? SITE.ogImageAlt
  const mimeType = getMimeType(image)
  const robots = meta.noindex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
  const m = (key: 'name' | 'property', value: string, content: string): HeadTag => ({
    tag: 'meta',
    attrs: { [key]: value, content },
  })

  const tags: HeadTag[] = [
    m('name', 'description', meta.description),
    m('name', 'robots', robots),
    { tag: 'link', attrs: { rel: 'canonical', href: url } },
    m('property', 'og:type', meta.type ?? 'website'),
    m('property', 'og:site_name', SITE.name),
    m('property', 'og:locale', SITE.locale),
    m('property', 'og:url', url),
    m('property', 'og:title', meta.title),
    m('property', 'og:description', meta.description),
    m('property', 'og:image', image),
    m('property', 'og:image:secure_url', image),
    m('property', 'og:image:type', mimeType),
    m('property', 'og:image:width', '1200'),
    m('property', 'og:image:height', '630'),
    m('property', 'og:image:alt', imageAlt),
    m('name', 'twitter:card', 'summary_large_image'),
    m('name', 'twitter:title', meta.title),
    m('name', 'twitter:description', meta.description),
    m('name', 'twitter:image', image),
    m('name', 'twitter:image:alt', imageAlt),
  ]

  if (meta.keywords?.length) tags.push(m('name', 'keywords', meta.keywords.join(', ')))
  return tags
}
