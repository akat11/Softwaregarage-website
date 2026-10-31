import fs from 'node:fs'
import path from 'node:path'

async function main() {
  const outDir = path.resolve('dist')
  const distIndexPath = path.join(outDir, 'index.html')
  if (!fs.existsSync(distIndexPath)) {
    console.error('dist/index.html not found! Make sure client build ran first.')
    process.exit(1)
  }
  const distIndex = fs.readFileSync(distIndexPath, 'utf8')
  const rootIndex = fs.readFileSync('index.html', 'utf8')

  // Extract production hashed asset tags emitted by Vite into dist/index.html
  const scriptMatch = distIndex.match(/<script type="module" crossorigin src="\/assets\/.*?\.js"><\/script>/)
  const cssMatch = distIndex.match(/<link rel="stylesheet" crossorigin href="\/assets\/.*?\.css">/)

  const scriptTag = scriptMatch ? scriptMatch[0] : ''
  const cssTag = cssMatch ? cssMatch[0] : ''

  // Build a clean base template from root index.html with assets injected
  const baseTemplate = rootIndex.replace('</head>', `  ${scriptTag}\n  ${cssTag}\n</head>`)

  // Import the SSR bundle
  const ssrBundlePath = path.resolve('dist-ssr/entry-server.js')
  if (!fs.existsSync(ssrBundlePath)) {
    console.error('dist-ssr/entry-server.js not found!')
    process.exit(1)
  }
  const { render, allRoutes, headTags, jsonLd, pageMeta, SITE_URL, projects } = await import(
    `file://${ssrBundlePath}`
  )

  function escapeAttr(value) {
    return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }

  function renderHead(meta) {
    const project = projects?.find((p) => `/work/${p.slug}` === meta.path)
    const tags = headTags(meta).map(({ tag, attrs }) => {
      const attrStr = Object.entries(attrs)
        .map(([k, v]) => `${k}="${escapeAttr(v)}"`)
        .join(' ')
      return `<${tag} ${attrStr} data-seo />`
    })
    const ld = JSON.stringify(jsonLd(meta, project)).replace(/</g, '\\u003c')
    return [
      `<title>${escapeAttr(meta.title)}</title>`,
      ...tags,
      `<script type="application/ld+json" data-seo>${ld}</script>`,
    ].join('\n    ')
  }

  function routeFile(routePath) {
    return routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
  }

  const write = (file, content) => {
    const target = path.join(outDir, file)
    fs.mkdirSync(path.dirname(target), { recursive: true })
    fs.writeFileSync(target, content, 'utf8')
  }

  const routes = allRoutes()
  console.log(`[prerender] Starting full SSR HTML prerendering for ${routes.length} routes...`)

  for (const route of routes) {
    let appHtml = ''
    try {
      appHtml = render(route.path)
    } catch (err) {
      console.warn(`[prerender] Error rendering ${route.path}:`, err)
    }

    let html = baseTemplate.replace('<!--seo-->', renderHead(route))

    if (appHtml) {
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
    }

    write(routeFile(route.path), html)
    if (route.path !== '/') {
      write(`${route.path.slice(1)}/index.html`, html)
    }
    console.log(`  ✓ Prerendered ${route.path} (${appHtml.length} bytes HTML)`)
  }

  // 404.html (Strictly noindexed for soft-404 prevention)
  let notFoundAppHtml = ''
  try {
    notFoundAppHtml = render('/404')
  } catch {}
  let notFoundHtml = baseTemplate.replace('<!--seo-->', renderHead(pageMeta.notFound))
  if (notFoundAppHtml) {
    notFoundHtml = notFoundHtml.replace('<div id="root"></div>', `<div id="root">${notFoundAppHtml}</div>`)
  }
  write('404.html', notFoundHtml)
  console.log('  ✓ Prerendered 404.html (with noindex, nofollow)')

  // Sitemap.xml
  const lastmod = new Date().toISOString().slice(0, 10)
  const sitemapUrls = routes
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

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`
  write('sitemap.xml', sitemapXml)
  fs.writeFileSync('public/sitemap.xml', sitemapXml, 'utf8')
  console.log('  ✓ Generated dist/sitemap.xml and public/sitemap.xml')

  // Robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\nDisallow: /404\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
  write('robots.txt', robotsTxt)
  fs.writeFileSync('public/robots.txt', robotsTxt, 'utf8')
  console.log('  ✓ Generated dist/robots.txt and public/robots.txt')

  // Remove dist-ssr
  try {
    fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true })
    console.log('  ✓ Cleaned up dist-ssr temporary directory')
  } catch {}

  console.log(`[prerender] Successfully completed! All ${routes.length} pages have full semantic HTML ready for Googlebot.`)
}

main().catch((err) => {
  console.error('[prerender] Fatal error:', err)
  process.exit(1)
})
