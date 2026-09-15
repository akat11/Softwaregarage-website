import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import HeroGlow from '@/components/HeroGlow'
import AINetwork from '@/three/AINetwork'
import Marquee from '@/components/Marquee'
import SectionHeading from '@/components/SectionHeading'
import AnimatedCounter from '@/components/AnimatedCounter'
import MagneticButton from '@/components/MagneticButton'
import CTASection from '@/components/CTASection'
import SelectedWork from '@/components/SelectedWork'
import TestConsole from '@/components/TestConsole'
import ProcessTimeline from '@/components/ProcessTimeline'
import { services } from '@/data/services'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const capabilityMarquee = ['WEB DEVELOPMENT', 'MOBILE APPS', 'SAAS', 'AI', 'QA AUTOMATION', 'E-COMMERCE', 'UI/UX', 'DIGITAL PRODUCTS']
const stackMarquee = ['REACT', 'NEXT.JS', 'NODE.JS', 'TYPESCRIPT', 'PYTHON', 'FLUTTER', 'AWS', 'DOCKER']
const industryMarquee = ['SAAS', 'FINTECH', 'E-COMMERCE', 'EDUCATION', 'HEALTHCARE', 'LOGISTICS', 'GAMING', 'WEB3', 'REAL ESTATE', 'AUTOMATION']

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  useScrollReveals(containerRef)

  // Hero text-split reveal — scoped separately since it plays on load, not on scroll.
  useGSAP(
    () => {
      if (reducedMotion) return
      gsap.to('.hero h1 .line span', { y: '0%', duration: 1, ease: 'power4.out', stagger: 0.12, delay: 0.3 })
      gsap.fromTo('.hero .eyebrow', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.1 })
      gsap.fromTo(
        '.hero-copy, .hero-ctas',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.9, delay: 1.0, stagger: 0.15 }
      )
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  )

  return (
    <div ref={containerRef}>
      <Seo
        title="Software Garage | Global Digital Product & Technology Studio"
        description="Software Garage builds, tests and transforms digital products through web development, mobile apps, SaaS, UI/UX, QA automation, AI and modern technology solutions."
      />

      {/* HERO */}
      <section className="hero" id="home">
        <div className="home-hero-art" aria-hidden="true">
          <img src="/herosection.jpeg" alt="" />
        </div>
        <HeroGlow />
        <div className="hero-inner">
          <div className="eyebrow">DIGITAL PRODUCTS. REAL IMPACT. <span className="hero-eyebrow-dot"></span></div>
          <h1>
            <span className="line"><span>WE BUILD DIGITAL</span></span>
            <span className="line"><span>PRODUCTS THAT</span></span>
            <span className="line"><span className="text-lime">DRIVE BUSINESS</span></span>
            <span className="line"><span className="text-lime">FORWARD.</span></span>
          </h1>
          <p className="hero-copy">
            From powerful web platforms to scalable mobile apps,<br />
            we design, build and deliver digital solutions that<br />
            create impact and accelerate growth.
          </p>
          <div className="hero-ctas">
            <MagneticButton to="/work" variant="primary">VIEW ALL PROJECTS →</MagneticButton>
          </div>
        </div>
        <div className="hero-proof">
          <AnimatedCounter value={15} label="PROJECTS DELIVERED" />
          <AnimatedCounter value={6} label="GLOBAL CLIENTS" />
        </div>
        <div className="scroll-hint"><div className="bar" />SCROLL</div>
      </section>

      <Marquee items={capabilityMarquee} />
      <Marquee items={stackMarquee} reverse duration={26} />

      {/* INTRO / JOURNEY */}
      <section id="intro">
        <div className="container">
          <SectionHeading
            eyebrow="01 / THE GARAGE"
            title="NOT JUST ANOTHER SOFTWARE COMPANY."
            description="We combine product thinking, engineering, design and quality engineering to turn ambitious ideas into reliable digital products."
          />
          <div className="journey">
            <div className="journey-step">STAGE 01<b>Idea</b></div>
            <div className="journey-step">STAGE 02<b>Design</b></div>
            <div className="journey-step">STAGE 03<b>Build</b></div>
            <div className="journey-step">STAGE 04<b>Test</b></div>
            <div className="journey-step">STAGE 05<b>Launch</b></div>
            <div className="journey-step">STAGE 06<b>Scale</b></div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats-grid">
            <AnimatedCounter value={15} label="Projects Delivered" />
            <AnimatedCounter value={6} label="Global Projects" />
            <AnimatedCounter value={7} label="Core Capabilities" />
            <AnimatedCounter value={100} suffix="%" label="Product Focus" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="container">
          <SectionHeading
            eyebrow="02 / CAPABILITIES"
            title="WHAT WE BUILD"
            description="Full-stack product engineering — from first sketch to production traffic."
          />
          <div className="service-list">
            {services.map((s, i) => (
              <Link key={s.slug} to={`/services#${s.slug}`} className="service-row" data-cursor="expand">
                <div className="num">0{i + 1}</div>
                <h3>{s.title}</h3>
                <div className="desc">{s.shortDesc}</div>
                <div className="arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORK — premium pinned showcase, Home-only (see SelectedWork.tsx) */}
      <SelectedWork />

      {/* INDUSTRIES */}
      <section id="industries">
        <div className="container">
          <SectionHeading
            eyebrow="04 / INDUSTRIES"
            title="BUILT ACROSS DOMAINS"
            description="Product and engineering depth across the sectors ambitious teams operate in."
          />
        </div>
        <Marquee items={industryMarquee} duration={44} />
      </section>

      {/* WHY */}
      <section id="why">
        <div className="container">
          <SectionHeading
            eyebrow="05 / WHY THE GARAGE"
            title="WHY THE GARAGE?"
            description="Great products aren't built by ticking boxes. They're built by people who experiment, challenge assumptions and care about the final experience."
          />
          <div className="principles">
            <div className="principle">
              <div className="pnum">01</div>
              <div>
                <h3>Build with Purpose</h3>
                <p className="ptext">We start from the real business problem, not just the brief.</p>
              </div>
            </div>
            <div className="principle">
              <div className="pnum">02</div>
              <div>
                <h3>Design with Intent</h3>
                <p className="ptext">Every interface decision serves clarity, not decoration.</p>
              </div>
            </div>
            <div className="principle">
              <div className="pnum">03</div>
              <div>
                <h3>Test without Compromise</h3>
                <p className="ptext">Quality engineering runs alongside development, not after it.</p>
              </div>
            </div>
            <div className="principle">
              <div className="pnum">04</div>
              <div>
                <h3>Ship with Confidence</h3>
                <p className="ptext">Nothing goes live until it has been tried, broken and fixed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QA */}
      <section id="qa">
        <div className="container">
          <SectionHeading
            eyebrow="06 / QUALITY ENGINEERING"
            title={<>WE DON&apos;T JUST BUILD IT.<br />WE TRY TO BREAK IT.</>}
            description="Functional, regression, API, performance, cross-browser, mobile and automation testing built into every release."
          />
          <div className="qa-flow">
            <div className="qa-node bug">BUG FOUND</div>
            <div className="qa-node">ANALYZE</div>
            <div className="qa-node">FIX</div>
            <div className="qa-node">RETEST</div>
            <div className="qa-node pass">PASS</div>
          </div>
          <TestConsole />
        </div>
      </section>

      {/* AI */}
      <section id="ai">
        <div className="container">
          <SectionHeading eyebrow="07 / INTELLIGENT SYSTEMS" title="BUILDING FOR THE INTELLIGENT WEB." />
          <div className="ai-grid">
            <div className="ai-list">
              <div>AI-Powered Applications</div>
              <div>AI Integrations</div>
              <div>AI Assistants</div>
              <div>Business Automation</div>
              <div>Intelligent Workflows</div>
              <div>AI-Assisted Testing</div>
            </div>
            <AINetwork />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <SectionHeading eyebrow="08 / PROCESS" title="HOW WE WORK" />
          <ProcessTimeline />
        </div>
      </section>

      <CTASection 
        eyebrow="MAKE AN IMPACT"
        title={<>LET'S BUILD SOMETHING<br /><span className="text-lime">EXTRAORDINARY</span> TOGETHER.</>}
        description="From idea to impact — we build digital products that drive growth, engage users and create lasting value."
        showSecondaryButton={false}
        visualType="rocket"
      />
    </div>
  )
}
