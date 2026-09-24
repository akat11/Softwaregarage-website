// Single source of truth for SEO. Used at runtime by <Seo /> and at build time
// by scripts/vite-plugin-seo.ts (which prerenders per-route <head> tags and
// writes sitemap.xml / robots.txt). Keep imports relative — no '@/' alias —
// because the Vite config loads this file outside the app bundle.
import { projects, type Project } from './projects'
import { services } from './services'

// Change this when the site moves to its own domain. No trailing slash.
export const SITE_URL = 'https://softwaregarage.netlify.app'

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
}

export const pageMeta = {
  home: {
    path: '/',
    title: 'Software Garage | Web, Mobile, SaaS & AI Development Studio',
    description:
      'Software Garage builds, tests and scales digital products — web and mobile apps, SaaS, Web3, e-commerce, UI/UX, QA automation and AI solutions for businesses worldwide.',
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
    priority: 1,
    changefreq: 'weekly',
  },
  services: {
    path: '/services',
    title: 'Software Development Services | Software Garage',
    description:
      'Web development, mobile apps, SaaS, Web3, e-commerce, UI/UX design, QA automation, API engineering and AI automation — end-to-end product engineering from Software Garage.',
    keywords: services.map((s) => s.title),
    crumb: 'Services',
    priority: 0.9,
    changefreq: 'monthly',
  },
  work: {
    path: '/work',
    title: 'Our Work & Case Studies | Software Garage',
    description:
      'Explore Software Garage case studies — school management, SaaS, Web3 launchpads, e-commerce, marketplaces and payment QA delivered across web and mobile.',
    crumb: 'Work',
    schemaType: 'CollectionPage',
    priority: 0.9,
    changefreq: 'monthly',
  },
  industries: {
    path: '/industries',
    title: 'Industries We Build For | Software Garage',
    description:
      'Digital products for SaaS, FinTech, e-commerce, education, healthcare, logistics, gaming, Web3, real estate and business automation — built by Software Garage.',
    crumb: 'Industries',
    priority: 0.8,
    changefreq: 'monthly',
  },
  about: {
    path: '/about',
    title: 'About Us | Software Garage Digital Technology Studio',
    description:
      'Meet Software Garage — a product-first technology studio that designs, engineers and tests high-impact digital products for ambitious businesses around the world.',
    crumb: 'About',
    schemaType: 'AboutPage',
    priority: 0.7,
    changefreq: 'yearly',
  },
  process: {
    path: '/process',
    title: 'Our Product Development Process | Software Garage',
    description:
      'Discovery, design, development, testing and launch — a structured product engineering process that reduces risk, moves faster and ships with confidence.',
    crumb: 'Process',
    priority: 0.7,
    changefreq: 'yearly',
  },
  contact: {
    path: '/contact',
    title: 'Contact Us | Start Your Project with Software Garage',
    description:
      "Tell us what you're building. Get in touch with Software Garage about your web, mobile, SaaS, Web3 or AI product — let's build it together.",
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

function trimDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return clean.slice(0, clean.lastIndexOf(' ', max - 1)).replace(/[,.;:\s]+$/, '') + '…'
}

export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl
  return SITE_URL + (pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`)
}

const caseStudyCache = new Map<string, PageMeta>()

export function caseStudyMeta(project: Project): PageMeta {
  const cached = caseStudyCache.get(project.slug)
  if (cached) return cached
  const meta: PageMeta = {
    path: `/work/${project.slug}`,
    title: `${project.name} — ${project.type} Case Study | Software Garage`,
    description: trimDescription(project.description),
    keywords: [project.name, project.type, ...project.technology],
    image: project.image,
    imageAlt: `${project.name} — ${project.type} by Software Garage`,
    type: 'article',
    crumb: project.name,
    priority: 0.6,
    changefreq: 'yearly',
  }
  caseStudyCache.set(project.slug, meta)
  return meta
}

/** Every indexable route, used for prerendering and the sitemap. */
export function allRoutes(): PageMeta[] {
  const pages = Object.values(pageMeta).filter((p: PageMeta) => !p.noindex)
  return [...pages, ...projects.map(caseStudyMeta)]
}

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`

/** schema.org JSON-LD graph for a page. */
export function jsonLd(meta: PageMeta, project?: Project): object {
  const url = absoluteUrl(meta.path)
  const graph: object[] = [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      legalName: SITE.legalName,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: SITE.logo, width: 512, height: 512 },
      image: SITE.ogImage,
      description: SITE.description,
      email: SITE.email,
      sameAs: SITE.sameAs,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
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
      primaryImageOfPage: absoluteUrl(meta.image ?? SITE.ogImage),
      inLanguage: 'en',
    },
  ]

  if (meta.crumb) {
    const items = [{ name: 'Home', path: '/' }]
    if (project) items.push({ name: 'Work', path: '/work' })
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

  if (meta.path === '/services') {
    graph.push({
      '@type': 'ItemList',
      name: 'Software Garage Services',
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
      name: 'Software Garage Case Studies',
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
  const robots = meta.noindex
    ? 'noindex, follow'
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
    m('property', 'og:image:alt', imageAlt),
    m('name', 'twitter:card', 'summary_large_image'),
    m('name', 'twitter:title', meta.title),
    m('name', 'twitter:description', meta.description),
    m('name', 'twitter:image', image),
    m('name', 'twitter:image:alt', imageAlt),
  ]
  if (!meta.image) {
    tags.push(m('property', 'og:image:width', '1200'), m('property', 'og:image:height', '630'))
  }
  if (meta.keywords?.length) tags.push(m('name', 'keywords', meta.keywords.join(', ')))
  return tags
}
