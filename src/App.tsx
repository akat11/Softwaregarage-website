import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import MobileMenu from '@/components/MobileMenu'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import ScrollProgress from '@/components/ScrollProgress'
import { useLenis } from '@/hooks/useLenis'
import { useScrollToTop } from '@/hooks/useScrollToTop'

import Home from '@/pages/Home'
import Services from '@/pages/Services'
import Work from '@/pages/Work'
import CaseStudy from '@/pages/CaseStudy'
import Industries from '@/pages/Industries'
import About from '@/pages/About'
import Process from '@/pages/Process'
import Contact from '@/pages/Contact'
import NotFound from '@/pages/NotFound'

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
          down (no stale ScrollTriggers surviving a navigation). */}
      <main key={location.pathname} className="page-fade-enter page-fade-enter-active">
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
      </main>

      <Footer />
    </>
  )
}
