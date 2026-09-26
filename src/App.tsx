import { lazy, Suspense, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'
import { useLenis } from '@/hooks/useLenis'
import { useScrollToTop } from '@/hooks/useScrollToTop'

// Lazy-loaded per route: each page (and anything only it imports, like
// Home's three.js scene) ships as its own chunk instead of one bundle every
// route has to download up front.
const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const Work = lazy(() => import('@/pages/Work'))
const CaseStudy = lazy(() => import('@/pages/CaseStudy'))
const Industries = lazy(() => import('@/pages/Industries'))
const About = lazy(() => import('@/pages/About'))
const Process = lazy(() => import('@/pages/Process'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useLenis()
  useScrollToTop()

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Navbar menuOpen={menuOpen} onBurgerClick={() => setMenuOpen((v) => !v)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* key={pathname} remounts the page on route change, which is what lets
          each page's own useGSAP/useScrollReveals cleanly re-run and tear
          down (no stale ScrollTriggers surviving a navigation). testing */}
      <main key={location.pathname} className="page-fade-enter page-fade-enter-active">
        <Suspense fallback={null}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}
