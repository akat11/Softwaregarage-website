import { useRef } from 'react'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import AnimatedCounter from '@/components/AnimatedCounter'
import { useScrollReveals } from '@/hooks/useScrollReveals'

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo
        title="About Software Garage | Digital Technology Studio"
        description="Software Garage is a digital technology studio combining engineering, design, quality and innovation to build products for ambitious businesses."
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">THE STUDIO</div>
          <h1>NOT JUST ANOTHER<br />SOFTWARE COMPANY.</h1>
          <p>
            Software Garage is a digital technology studio combining engineering, design, quality and innovation
            to turn ambitious ideas into reliable digital products.
          </p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="stats-grid">
            <AnimatedCounter value={15} label="Projects Delivered" />
            <AnimatedCounter value={6} label="Global Projects" />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="eyebrow">HOW WE THINK</div>
          <h2 className="reveal" style={{ marginTop: '18px', maxWidth: '820px' }}>
            IDEA → DESIGN → BUILD → TEST → LAUNCH → SCALE.
          </h2>
          <p style={{ maxWidth: '600px', color: 'var(--text-dim)', marginTop: '24px', lineHeight: 1.7 }}>
            Every product we build moves through the same disciplined journey — from understanding the problem, to
            shaping the experience, to shipping technology that holds up under real usage. Quality engineering runs
            alongside development at every stage, not as an afterthought.
          </p>

          <div className="journey" style={{ marginTop: '60px' }}>
            <div className="journey-step">STAGE 01<b>Idea</b></div>
            <div className="journey-step">STAGE 02<b>Design</b></div>
            <div className="journey-step">STAGE 03<b>Build</b></div>
            <div className="journey-step">STAGE 04<b>Test</b></div>
            <div className="journey-step">STAGE 05<b>Launch</b></div>
            <div className="journey-step">STAGE 06<b>Scale</b></div>
          </div>

          <div className="principles" style={{ marginTop: '80px' }}>
            <div className="principle"><div className="pnum">01</div><h3>Build with Purpose</h3></div>
            <div className="principle"><div className="pnum">02</div><h3>Design with Intent</h3></div>
            <div className="principle"><div className="pnum">03</div><h3>Test without Compromise</h3></div>
            <div className="principle"><div className="pnum">04</div><h3>Ship with Confidence</h3></div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
