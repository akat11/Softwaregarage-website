# Software Garage — Website (v2, Multi-Page)

Production-quality React + TypeScript + Vite build of the Software Garage
site. Same visual/design system as the original single-page prototype, now
rebuilt as a real multi-page app with client-side routing, dynamic data, and
proper component/animation architecture.

## Why this is source code, not a running build

This project was generated in a sandboxed environment with **no network
access**, so `npm install` / `npm run build` could not be executed or
verified here. Every file was written by hand against each library's
documented API (React Router v6, GSAP 3 + `@gsap/react`'s `useGSAP`, Lenis
v1, three.js). Run the commands below locally to install, build, and test it
for real — see the QA checklist at the bottom for what to verify once it's
running.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build (tsc -b && vite build)
npm run preview   # preview the production build locally
npm run lint       # eslint
```

If `npm run build` throws TypeScript errors, they'll point at exact
file/line — most likely causes for a project this size are a version
mismatch in `@types/three` vs `three`, or a react-router-dom version drift.
Pin versions from `package.json` if `npm install` resolves something newer.

## Architecture

```
src/
  main.tsx            # ReactDOM root + BrowserRouter
  App.tsx             # routes, nav/footer chrome, Lenis + scroll-reset wiring
  styles/global.css   # the entire design system (tokens, components, pages)
  data/                # navigation.ts, services.ts, projects.ts, industries.ts, process.ts
  components/          # Navbar, MobileMenu, Footer, Cursor, Marquee, MagneticButton,
                        # AnimatedCounter, ScrollProgress, CTASection, SectionHeading, Seo
  three/                # HeroScene.tsx (garage-door hero), AINetwork.tsx (2D node network)
  hooks/                # useLenis, useScrollToTop, usePrefersReducedMotion, useScrollReveals
  pages/                # Home, Services, Work, CaseStudy, Industries, About, Process, Contact, NotFound
```

**Data-driven, not duplicated.** Services, projects/case-studies, industries
and process steps all live in `src/data/*.ts` and are `.map()`'d into both
the Home page summaries and the dedicated detail pages — so adding a project
or service means editing one data file, not six components.

**One case-study template, six projects.** `/work/:slug` renders
`CaseStudy.tsx`, which looks up the project in `src/data/projects.ts`. Add a
new project object with a new `slug` and the route + page work automatically.
Every project entry currently has `isPlaceholder: true` and clearly
templated Overview/Challenge/Approach/etc. copy — replace this with real
project detail before shipping; nothing here should be presented as a real
metric or claim until you provide it.

**GSAP cleanup, specifically (this was the console-warning issue in your
brief).** Every GSAP usage in this codebase is scoped with `useGSAP` from
`@gsap/react`, which automatically reverts (kills) all tweens and
ScrollTriggers created inside it when the component unmounts. Combined with
`<main key={location.pathname}>` in `App.tsx` — which remounts the page on
every route change — this guarantees a page's animations are fully torn
down before the next page's animations are created. That's what prevents:
duplicate ScrollTriggers stacking up across navigations, animations
targeting elements that no longer exist, and animations still running after
unmount. `React.StrictMode` is left **on** in `main.tsx` on purpose — it
double-invokes effects in development specifically to catch missing cleanup,
and every effect in this codebase (Three.js scenes, Lenis, the cursor, the
magnetic button) returns a real teardown function, so it should survive
StrictMode cleanly. If you still see a GSAP warning after `npm run dev`,
it'll be scoped to one specific animation — check that its target ref/selector
exists at the time the effect runs.

**Three.js disposal.** `HeroScene.tsx` tracks every geometry and material it
creates in a `disposables` array and calls `.dispose()` on all of them, plus
`renderer.dispose()`, in its cleanup function — along with cancelling the
rAF loop and removing the resize/mousemove listeners. `AINetwork.tsx` (the
AI section) intentionally uses plain Canvas 2D instead of Three.js/WebGL —
it's a lightweight node network, and a second WebGL context wasn't worth the
performance cost for that section. A 3D globe (section 17 of the brief) is
not yet built — see "Not yet built" below.

**Reduced motion.** `usePrefersReducedMotion` is checked before mounting the
WebGL hero scene (falls back to a static gradient div), before running the
scroll-reveal animations, and inside the AI network's point-drift loop.

## Not yet built (flagged, not silently skipped)

- **3D interactive globe** (brief section 17) — the Industries/Global section
  currently uses a marquee instead. A real globe is a meaningfully large
  addition (geo-coordinate projection, connection-line arcs); happy to build
  it as a follow-up `three/GlobeScene.tsx` component.
- **Contact form backend** — see the `TODO` in `src/pages/Contact.tsx`. It
  validates properly and currently opens a pre-filled `mailto:` draft on
  submit (a real, working fallback) rather than faking a "message sent"
  state. Swap in a real POST call when you have an endpoint.
- **Case-study content** — every project's Overview/Challenge/Approach/etc.
  is placeholder copy (`isPlaceholder: true` in `src/data/projects.ts`).
- **Real page transition choreography** — routes currently cross-fade via a
  remount + CSS class (`page-fade-enter-active`); this is intentionally
  simple rather than using an animation library not in the dependency list.

## QA checklist (run through this after `npm run build` succeeds)

- [ ] `npm run build` completes with no TypeScript errors
- [ ] Home, Services, Work, all 6 case studies, Industries, About, Process,
      Contact all render
- [ ] Desktop nav highlights the active route
- [ ] Mobile menu opens/closes, locks body scroll, closes after navigating
- [ ] Every CTA (`START A PROJECT`, `EXPLORE OUR WORK`, `LET'S BUILD`,
      `VIEW PROJECT`, footer links) navigates somewhere real
- [ ] Route change resets scroll to top; `/services#web-development`-style
      links scroll to the right anchor
- [ ] Browser console is clean — no GSAP warnings, no React warnings, no 404s
- [ ] Hero 3D scene renders and disposes cleanly (check the console/memory
      tab after navigating away from `/` a few times)
- [ ] Contact form: try submitting empty (see field errors), an invalid
      email, then a valid submission (email client should open)
- [ ] `prefers-reduced-motion: reduce` (OS setting or DevTools rendering
      emulation) disables the hero WebGL scene and scroll reveals
- [ ] Resize down to 375px / 390px / 430px / 768px / 1024px — no horizontal
      overflow anywhere
