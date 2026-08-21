import { useRef } from 'react'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import AnimatedCounter from '@/components/AnimatedCounter'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import {
  Flag,
  Pencil,
  Rocket,
  ShieldCheck,
  Trophy,
  UsersRound,
} from 'lucide-react'
import '../styles/about.css'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo
        title="About Software Garage | Digital Technology Studio"
        description="Software Garage is a digital technology studio combining engineering, design, quality and innovation to build products for ambitious businesses."
      />

      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <div className="eyebrow">WE BUILD DIGITAL SOLUTIONS</div>
            <h1>NOT JUST ANOTHER<br />SOFTWARE COMPANY.</h1>
            <p>
              Software Garage is a digital technology studio combining engineering, design, quality and innovation
              to turn ambitious ideas into reliable digital products.
            </p>

            <div className="about-hero-actions">
              <a href="/contact" className="about-button about-button-primary">LET&apos;S START A PROJECT <span>→</span></a>
              <a href="/contact" className="about-button about-button-secondary">TALK TO THE GARAGE <span>→</span></a>
            </div>
          </div>

          <div className="about-hero-mark" aria-hidden="true">
            <div className="about-mark-glow" />
            <div className="about-mark-shape"><span>G</span></div>
          </div>
        </div>
      </section>

      <section className="about-stats-section">
        <div className="container">
          <div className="about-stats-grid">
            <div className="about-stat reveal">
              <div className="about-stat-icon"><Rocket size={20} /></div>
              <div><AnimatedCounter value={15} label="Projects Delivered" /></div>
            </div>
            <div className="about-stat reveal">
              <div className="about-stat-icon"><UsersRound size={20} /></div>
              <div><AnimatedCounter value={6} label="Years Experience" /></div>
            </div>
            <div className="about-stat about-stat-copy reveal">
              <div className="about-stat-icon"><Trophy size={38} /></div>
              <p><strong>Delivering value through innovation and excellence.</strong><span>We build software that drives results.</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-process-section">
        <div className="container">
          <div className="eyebrow">OUR PROCESS</div>
          <h2 className="about-process-title reveal">
            <span>IDEA</span><i>→</i><span>DESIGN</span><i>→</i><span>BUILD</span><i>→</i><span>TEST</span><i>→</i><span>LAUNCH</span><i>→</i><span>SCALE.</span>
          </h2>
          <p className="about-process-description">
            A streamlined process that turns an idea into a powerful, scalable digital product.<br />
            We follow industry best practices, agile methodology, and a design-first mindset<br />
            at every stage to deliver client delight.
          </p>

          <div className="about-journey reveal">
            {[
              ['STAGE 01', 'Idea', Flag],
              ['STAGE 02', 'Design', Pencil],
              ['STAGE 03', 'Build', null],
              ['STAGE 04', 'Test', ShieldCheck],
              ['STAGE 05', 'Launch', Rocket],
              ['STAGE 06', 'Scale', Trophy],
            ].map(([stage, title, Icon], index) => (
              <div className="about-journey-step" key={stage as string}>
                <small>{stage as string}</small>
                <strong>{title as string}</strong>
                {Icon ? <Icon size={24} strokeWidth={1.5} /> : <span className="about-code-icon">&lt;/&gt;</span>}
                {index < 5 && <i>→</i>}
              </div>
            ))}
          </div>

          <div className="about-principles">
            {[
              ['01', 'Build with Purpose', 'We build solutions that solve real problems and drive meaningful impact.', Flag],
              ['02', 'Design with Intent', 'Thoughtful design that enhances usability and creates better experiences.', Pencil],
              ['03', 'Test without Compromise', 'Quality is built in. We test rigorously to deliver bug-free, high-performance products.', ShieldCheck],
              ['04', 'Ship with Confidence', 'We ensure smooth launches and continuous support to help you scale.', Rocket],
            ].map(([number, title, description, Icon]) => (
              <article className="about-principle reveal" key={number as string}>
                <div className="about-principle-icon"><Icon size={19} /></div>
                <h3>{title as string}</h3>
                <p>{description as string}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
