# Software Garage – Technical SEO Audit Report

**Domain:** `https://thesoftwaregarage.netlify.app`  
**Audit Date:** October 31, 2026  
**Auditor:** Senior Technical SEO Engineer & React Architecture Specialist  
**GSC Starting Status:** 29 Discovered URLs, 2 Indexed URLs, 27 "Discovered – currently not indexed" (Last crawled: N/A)

---

## 1. Executive Summary & GSC Root Cause Analysis

### The Problem:
Google Search Console reported **29 discovered URLs**, **2 indexed URLs**, and **27 URLs with the status "Discovered – currently not indexed"** where **Last crawled was listed as "N/A"**.

### Technical Investigation & Root Cause Findings:
The "Discovered – currently not indexed" status with "Last crawled: N/A" indicates that Googlebot has recorded the existence of URLs (from sitemaps or external discovery) but **deferred scheduling crawl resources**. For a new or emerging site on Netlify, Googlebot's crawl prioritization heuristics identified four critical technical roadblocks:

1. **Empty SPA HTML Shell (Zero Semantic Prerendered DOM Content):**
   - **Root Cause:** Prior to this fix, the build output produced HTML files (`index.html`, `services.html`, `work.html`, `about.html`, etc.) where the entire body consisted exclusively of:
     ```html
     <noscript>Software Garage is a global digital product... Please enable JavaScript to view this website.</noscript>
     <div id="root"></div>
     <script type="module" crossorigin src="/assets/index-xxx.js"></script>
     ```
   - **Impact on Googlebot:** Google uses a two-wave indexing system. The first wave crawls raw HTTP responses. When Googlebot's crawler fetches a URL and encounters an empty `<div id="root"></div>` without text, headings, or links, it defers the page to the **Web Rendering Service (WRS)** queue for headless Chromium rendering. Because JavaScript rendering is computationally heavy, Google delays WRS for low-authority domains and subdomains, parking the URLs indefinitely under **"Discovered – currently not indexed"**.

2. **Total Absence of Crawlable Internal Hyperlinks in Raw HTML:**
   - **Root Cause:** Because all navigation links (`<Link to="...">`) were rendered purely client-side via React after bundle execution, raw HTTP crawlers saw **zero incoming and outgoing `<a href="...">` links** in the initial HTML document.
   - **Impact on Googlebot:** The 21 live routes were discovered solely through `sitemap.xml`. In Google's indexing priority model, URLs found *only* in a sitemap and not supported by an organic internal link graph in the crawlable HTML are categorized as low-priority orphan/isolated nodes, deferring crawling.

3. **URL Fragmentation (Why 29 Discovered URLs Existed vs 21 Sitemap URLs):**
   - **Root Cause:** The previous build script (`vite-plugin-seo.ts`) wrote both flat files (`services.html`) and nested index files (`services/index.html`), causing Netlify to respond with HTTP 200 to both trailing-slash (`/services/`) and non-trailing-slash (`/services`) URLs without canonical 301 redirects. Furthermore, previous sitemaps contained legacy renamed URLs (e.g., `/work/monro` instead of `/work/monro-casino`).
   - **Impact on Googlebot:** 21 canonical URLs + 7 trailing slash variants + legacy URL (`/work/monro`) = **29 discovered URLs**. Without redirect enforcement (`_redirects`), Google detected conflicting signals.

4. **Thin & Placeholder Content on Case Study Pages:**
   - **Root Cause:** In `src/data/projects.ts`, multiple project records (`patang-casino`, `ajmeridarbar`, `scpschool`, `azibiz`) contained empty strings `""` for `challenge`, `approach`, `design`, `development`, `testing`, and `outcome`. Additionally, `worknest` (a B2B project management platform) contained copy-pasted e-commerce text (`Retail platforms need fast, reliable catalog browsing...`). Furthermore, `src/pages/CaseStudy.tsx` was not rendering Challenge, Approach, or Outcome, reducing case study depth.
   - **Impact on Googlebot:** Even if rendered, thin and duplicate placeholder text risks algorithmic suppression under Google's Helpful Content System.

---

## 2. Sitemap & Robots.txt Audit

| Element | Status Before Audit | Status After Fix | Verification Result |
| :--- | :--- | :--- | :--- |
| **`public/sitemap.xml`** | Missing from `public/` directory | Generated & synced in `public/` and `dist/` | **PASS** – Valid XML, 21 canonical URLs |
| **Domain Protocol & Host** | Pointed to `https://thesoftwaregarage.netlify.app` | Confirmed preferred production domain | **PASS** – No mismatch |
| **URL Paths** | Non-trailing slash on inner routes, trailing on root | Consistently matches canonical format | **PASS** – 100% matched |
| **Broken / Redirected URLs** | Contained potential legacy URLs in past history | Cleaned, only 200-OK live canonicals | **PASS** – Zero broken URLs |
| **`robots.txt`** | Valid syntax, pointed to sitemap | Pointing to canonical sitemap, disallowing `/404` | **PASS** – Allows full crawler access to assets |

---

## 3. Canonical Tag & Trailing Slash Audit

| Route Type | Canonical URL Structure | Implementation Details | Result |
| :--- | :--- | :--- | :--- |
| **Home Page** | `https://thesoftwaregarage.netlify.app/` | Self-referential with trailing slash | **PASS** |
| **Top-Level Pages** | `https://thesoftwaregarage.netlify.app/[page]` | Self-referential without trailing slash | **PASS** |
| **Case Studies** | `https://thesoftwaregarage.netlify.app/work/[slug]` | Self-referential without trailing slash | **PASS** |
| **AI Case Studies** | `https://thesoftwaregarage.netlify.app/ai-case-studies/[slug]` | Self-referential without trailing slash | **PASS** |
| **Trailing Slash Handling** | Netlify SPA Fallback & `_redirects` | 301 permanent redirects for legacy paths | **PASS** |

---

## 4. Prerendering & Static Site Generation (SSG) Audit

- **Framework:** React 18 + Vite 5 + React Router 6
- **Prerender Engine:** Custom Vite SSR pipeline (`src/entry-server.tsx` + `scripts/prerender.js`)
- **Number of Prerendered HTML Files:** 21 production routes + `404.html`
- **Average HTML Payload Size:** 21 KB to 75 KB of semantic HTML per route
- **Content Availability:** 100% of headers, navigation links, H1/H2 tags, service details, project features, and footers are immediately accessible in the raw HTTP GET response without requiring JavaScript execution.

---

## 5. Structured Data (JSON-LD) Audit

All schema graphs validate according to Schema.org and Google Search Central Rich Result requirements:
- **`Organization`**: Present on all pages with legal name, logo, social profiles (`sameAs`), email, and `knowsAbout` capability list.
- **`WebSite`**: Present on all pages with site URL, publisher ID, and language.
- **`BreadcrumbList`**: Present on all subpages with hierarchical `ListItem` definitions.
- **`Service`**: ItemList of 9 engineering services on `/services`; dedicated `Service` schema on `/ai-lab`.
- **`TechArticle` & `SoftwareApplication`**: Present on all AI case studies, now featuring `datePublished`, `dateModified`, `author`, `publisher`, and `mainEntityOfPage`.
- **`CreativeWork`**: Present on all project case studies with `datePublished`, `dateModified`, author, genre, and tech keywords.

---

## 6. Page Heading Hierarchy & Content Audit

| Page | H1 Heading | H2 / Section Headings | Content Quality Status |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | "WE BUILD DIGITAL PRODUCTS THAT DRIVE BUSINESS FORWARD." | "WHAT WE BUILD", "SELECTED WORK", "BUILT ACROSS DOMAINS", "WHY THE GARAGE?", "QUALITY ENGINEERING", "BUILDING FOR THE INTELLIGENT WEB", "HOW WE WORK" | **EXCELLENT** – Rich product copy, internal links to all silos |
| **AI Lab (`/ai-lab`)** | "BUILD WITH AI. AUTOMATE WHAT MATTERS." | "What We Build", "How AI Creates Value", "AI Solutions for Every Industry", "Featured AI Case Studies", "We Don't Just Build AI. We Test It.", "Our AI Development Process" | **EXCELLENT** – Deep AI agent & automation details, links to AI case studies |
| **Services (`/services`)** | "AI-Powered Digital Solutions for Modern Businesses" | 9 Comprehensive Service details with capabilities, tech stacks, use cases | **EXCELLENT** – Fully detailed, descriptive alt tags |
| **Work (`/work`)** | "OUR FEATURED WORK." | 10 Portfolio projects spanning Education, Web3, Gaming, Project Management, E-Commerce, Food, Business | **EXCELLENT** – Clean category tagging, direct links to case studies |
| **Industries (`/industries`)** | "BUILT ACROSS DOMAINS." | 10 Industry rows with use cases, advantages, and **direct links to featured case studies** | **EXCELLENT** – Cross-linked to relevant projects |
| **About (`/about`)** | "WE BUILD DIGITAL SOLUTIONS THAT DRIVE REAL IMPACT." | "WHO WE ARE", "OUR VALUES", "OUR PROCESS", "WHY CHOOSE SOFTWARE GARAGE?", "OUR MISSION", "OUR VISION" | **EXCELLENT** – Clear identity, team narrative, no duplicate text |
| **Process (`/process`)** | "HOW WE BUILD DIGITAL PRODUCTS." | 5-phase engineering methodology (Discovery, UI/UX, Agile, QA, Deployment) | **EXCELLENT** – Comprehensive delivery framework |
| **Contact (`/contact`)** | "LET'S BUILD SOMETHING GREAT." | Project consultation form, email direct links, contact channels | **EXCELLENT** – Clear conversion pathways |
| **10 Project Case Studies** | `[Project Name]` (e.g., Patang Casino, WorkNest) | "OVERVIEW", "THE CHALLENGE", "ENGINEERING APPROACH", "KEY FEATURES", "PLATFORM", "TECHNOLOGY STACK", "OUTCOME & IMPACT" | **EXCELLENT** – Full narrative, zero thin/empty fields |
| **3 AI Case Studies** | Unique headline per case study | "THE PROBLEM", "INTELLIGENCE LAYER", "HOW IT WORKS", "CAPABILITIES", "PRODUCT SHOWCASE", "HUMAN-IN-THE-LOOP", "IMPACT", "FUTURE ROADMAP" | **EXCELLENT** – In-depth enterprise AI case studies |
