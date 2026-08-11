import { useRef } from 'react'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import { industries } from '@/data/industries'
import { useScrollReveals } from '@/hooks/useScrollReveals'

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo
        title="Industries We Build For | Software Garage"
        description="Software Garage builds digital products across SaaS, FinTech, e-commerce, education, healthcare, logistics, gaming, Web3, real estate and business automation."
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">DOMAINS</div>
          <h1>BUILT ACROSS DOMAINS</h1>
          <p>Product and engineering depth across the sectors ambitious teams operate in.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container">
          <div className="industry-list">
            {industries.map((ind) => (
              <div className="industry-row" key={ind.slug}>
                <h3>{ind.name}</h3>
                <div className="idesc">
                  {ind.description}
                  <br />
                  <span style={{ color: 'var(--cyan)' }}>{ind.solutions.join(' · ')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
