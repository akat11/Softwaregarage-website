import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import AILab from './pages/AILab'
import Work from './pages/Work'
import CaseStudy from './pages/CaseStudy'
import Industries from './pages/Industries'
import About from './pages/About'
import Process from './pages/Process'
import Contact from './pages/Contact'
import AICaseStudy from './pages/AICaseStudy'
import NotFound from './pages/NotFound'

export { allRoutes, headTags, jsonLd, pageMeta, SITE_URL, type PageMeta } from './data/seo'
export { projects } from './data/projects'

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <Navbar menuOpen={false} onBurgerClick={() => {}} />
      <main className="page-fade-enter page-fade-enter-active">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ai-lab" element={<AILab />} />
          <Route path="/ai-case-studies/:slug" element={<AICaseStudy />} />
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
    </StaticRouter>
  )
}
