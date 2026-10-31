import fs from 'node:fs'
import path from 'node:path'
import type { Plugin, ResolvedConfig } from 'vite'
import { allRoutes, headTags, jsonLd, pageMeta, SITE_URL, type PageMeta } from '../src/data/seo'
import { projects } from '../src/data/projects'

const MARKER = '<!--seo-->'

function escapeAttr(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function renderHead(meta: PageMeta): string {
  const project = projects.find((p) => `/work/${p.slug}` === meta.path)
  const tags = headTags(meta).map(({ tag, attrs }) => {
    const attrStr = Object.entries(attrs)
      .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
      .join(' ')
    return `<${tag} ${attrStr} data-seo />`
  })
  // "<" is escaped so no string in the data can close the script early.
  const ld = JSON.stringify(jsonLd(meta, project)).replace(/</g, '\\u003c')
  return [
    `<title>${escapeAttr(meta.title)}</title>`,
    ...tags,
    `<script type="application/ld+json" data-seo>${ld}</script>`,
  ].join('\n    ')
}

function injectHead(html: string, meta: PageMeta): string {
  if (!html.includes(MARKER)) throw new Error(`[seo] ${MARKER} marker missing from index.html`)
  return html.replace(MARKER, renderHead(meta))
}

export { injectHead, renderHead, escapeAttr }

/** `/` → index.html, `/services` → services.html, `/work/x` → work/x.html */
export function routeFile(routePath: string): string {
  return routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
}

export function sitemap(routes: PageMeta[]): string {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = routes
    .map((r) => {
      const loc = SITE_URL + (r.path === '/' ? '/' : r.path)
      return [
        '  <url>',
        `    <loc>${escapeAttr(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : '',
        r.priority !== undefined ? `    <priority>${r.priority.toFixed(1)}</priority>` : '',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

export const robots = `User-agent: *
Allow: /
Disallow: /404

Sitemap: ${SITE_URL}/sitemap.xml
`

/**
 * Dev: fills the <!--seo--> marker with home-page tags.
 * Build: writes route metadata and static assets. Skips when SSR build runs.
 */
export default function seoPlugin(): Plugin {
  let config: ResolvedConfig

  return {
    name: 'software-garage-seo',
    configResolved(resolved) {
      config = resolved
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return config.command === 'serve' ? injectHead(html, pageMeta.home) : html
      },
    },
    closeBundle() {
      if (config.command !== 'build' || config.build.ssr || process.env.PRERENDER_RUNNING === 'true') return
      const outDir = path.resolve(config.root, config.build.outDir)
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) return

      const template = fs.readFileSync(indexFile, 'utf8')
      const routes = allRoutes()

      const write = (file: string, content: string) => {
        const target = path.join(outDir, file)
        fs.mkdirSync(path.dirname(target), { recursive: true })
        fs.writeFileSync(target, content)
      }

      for (const route of routes) {
        const html = injectHead(template, route)
        write(routeFile(route.path), html)
        if (route.path !== '/') {
          write(`${route.path.slice(1)}/index.html`, html)
        }
      }
      write('404.html', injectHead(template, pageMeta.notFound))
      write('sitemap.xml', sitemap(routes))
      write('robots.txt', robots)

      config.logger.info(`[seo] prerendered fallback ${routes.length} routes + 404.html, sitemap.xml, robots.txt`)
    },
  }
}
