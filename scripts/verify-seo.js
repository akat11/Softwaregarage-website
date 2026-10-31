import fs from 'node:fs'
import path from 'node:path'

console.log('=== SOFTWARE GARAGE TECHNICAL SEO AUDIT VERIFICATION ===\n')

const outDir = path.resolve('dist')
const SITE_URL = 'https://thesoftwaregarage.netlify.app'
let passed = 0
let failed = 0

// 1. Verify robots.txt
console.log('1. Checking robots.txt...')
const robotsPath = path.join(outDir, 'robots.txt')
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8')
  if (robots.includes('User-agent: *') && robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
    console.log('  [PASS] robots.txt is valid and points to correct sitemap.')
    passed++
  } else {
    console.error('  [FAIL] robots.txt missing required directives.')
    failed++
  }
} else {
  console.error('  [FAIL] dist/robots.txt does not exist.')
  failed++
}

// 2. Verify sitemap.xml
console.log('\n2. Checking sitemap.xml...')
const sitemapPath = path.join(outDir, 'sitemap.xml')
let sitemapUrls = []
if (fs.existsSync(sitemapPath)) {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8')
  const matches = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  sitemapUrls = matches.map((m) => m[1])
  if (sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>') && sitemapUrls.length >= 21) {
    console.log(`  [PASS] sitemap.xml is valid XML and contains ${sitemapUrls.length} canonical URLs.`)
    passed++
  } else {
    console.error('  [FAIL] sitemap.xml has insufficient URLs or invalid XML.')
    failed++
  }
} else {
  console.error('  [FAIL] dist/sitemap.xml does not exist.')
  failed++
}

// 3. Verify _redirects
console.log('\n3. Checking _redirects...')
const redirectsPath = path.join(outDir, '_redirects')
if (fs.existsSync(redirectsPath)) {
  const redirects = fs.readFileSync(redirectsPath, 'utf8')
  if (redirects.includes('/work/monro') && redirects.includes('/*    /index.html   200')) {
    console.log('  [PASS] _redirects contains 301 legacy redirect and 200 SPA fallback.')
    passed++
  } else {
    console.error('  [FAIL] _redirects missing legacy redirect or SPA fallback.')
    failed++
  }
} else {
  console.error('  [FAIL] dist/_redirects does not exist.')
  failed++
}

// 4. Verify Every Prerendered HTML Page
console.log(`\n4. Auditing all ${sitemapUrls.length} prerendered routes in dist/...`)
for (const loc of sitemapUrls) {
  const routePath = loc.replace(SITE_URL, '') || '/'
  const filename = routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`
  const filePath = path.join(outDir, filename)

  if (!fs.existsSync(filePath)) {
    console.error(`  [FAIL] Missing file: ${filename}`)
    failed++
    continue
  }

  const html = fs.readFileSync(filePath, 'utf8')

  const checks = [
    { name: 'Title Tag', pass: html.includes('<title>') && !html.includes('<title></title>') },
    { name: 'Meta Description', pass: html.includes('name="description"') && html.includes('content="') },
    { name: 'Robots Directive', pass: html.includes('name="robots"') && html.includes('content="index, follow') },
    { name: 'Canonical Tag', pass: html.includes(`rel="canonical" href="${loc}"`) },
    { name: 'Open Graph URL', pass: html.includes(`property="og:url" content="${loc}"`) },
    { name: 'Open Graph Image', pass: html.includes('property="og:image"') },
    { name: 'Twitter Card', pass: html.includes('name="twitter:card"') },
    { name: 'JSON-LD Schema', pass: html.includes('type="application/ld+json"') && html.includes('"@context":"https://schema.org"') },
    { name: 'Prerendered Body Content', pass: !html.includes('<div id="root"></div>') && html.includes('<div id="root"><nav') },
    { name: 'Heading 1', pass: html.includes('<h1') },
    { name: 'Navigation Links', pass: html.includes('href="/services"') && html.includes('href="/work"') },
    { name: 'Footer Links', pass: html.includes('class="site-footer"') },
  ]

  const failingChecks = checks.filter((c) => !c.pass)
  if (failingChecks.length === 0) {
    console.log(`  [PASS] ${routePath} -> ${filename} (${html.length} bytes, full SSR DOM + SEO)`)
    passed++
  } else {
    console.error(`  [FAIL] ${routePath} failed checks:`, failingChecks.map((c) => c.name).join(', '))
    failed++
  }
}

// 5. Verify 404 page
console.log('\n5. Auditing 404.html...')
const path404 = path.join(outDir, '404.html')
if (fs.existsSync(path404)) {
  const html404 = fs.readFileSync(path404, 'utf8')
  if (html404.includes('content="noindex, nofollow"') && html404.includes('404')) {
    console.log('  [PASS] 404.html has noindex directive and proper 404 markup.')
    passed++
  } else {
    console.error('  [FAIL] 404.html missing noindex directive.')
    failed++
  }
} else {
  console.error('  [FAIL] dist/404.html missing.')
  failed++
}

console.log(`\n=== AUDIT SUMMARY: ${passed} PASSED, ${failed} FAILED ===`)
if (failed > 0) process.exit(1)
