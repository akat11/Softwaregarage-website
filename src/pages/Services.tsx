import { useRef } from 'react'
import CountUpStat from '@/components/CountUpStat'
import MagneticButton from '@/components/MagneticButton'
import Seo from '@/components/Seo'
import ServiceRow from '@/components/ServiceRow'
import Testimonials from '@/components/Testimonials'
import { pageMeta } from '@/data/seo'
import { servicesPage } from '@/data/servicesPage'
import { useScrollReveals } from '@/hooks/useScrollReveals'

const heroStats = [
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 6, suffix: '+', label: 'Global Clients' },
  { value: 7, suffix: '+', label: 'Core Capability' },
]

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo meta={pageMeta.services} />

      <section className="svc-hero">
        <div className="container svc-hero-grid">
          <div className="svc-hero-copy">
            <div className="svc-eyebrow">
              <span className="svc-eyebrow-dot" />
              TECHNOLOGY × AI × AUTOMATION × GROWTH
            </div>

            <h1>
              AI-Powered
              <br />
              <span className="text-lime">Digital Solutions</span>
              <br />
              for Modern Businesses
            </h1>

            <p>
              From idea to deployment, we build, automate and scale digital
              products with the power of AI, modern technologies and deep
              industry experience.
            </p>
          </div>

          <div className="svc-scene">
            <img
              src="/services-hero-scene.png"
              alt="SG platform connecting AI, web, mobile, e-commerce, SaaS, API, QA and Web3 services"
              width="1649"
              height="954"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="container">
          <div className="svc-hero-stats">
            {heroStats.map((stat) => (
              <div className="svc-hero-stat" key={stat.label}>
                <strong>
                  <CountUpStat value={stat.value} suffix={stat.suffix} />
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-list tight">
        <div className="container">
          {servicesPage.map((service) => (
            <ServiceRow key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <Testimonials />

      <section className="services-final-cta reveal">
        <div className="services-final-backdrop" aria-hidden="true" />

        <div className="container services-final-copy">
          <div className="services-final-heading">
            <div className="eyebrow">HAVE AN IDEA?</div>

            <h2>
              LET&apos;S <span>BUILD IT.</span>
            </h2>
          </div>

          <div className="services-final-middle">
            <p>
              From first sketch to production, we turn ambitious ideas into
              powerful digital products.
            </p>
          </div>

          <div className="hero-ctas">
            <MagneticButton to="/contact" variant="primary">
              START A PROJECT →
            </MagneticButton>

            <MagneticButton to="/work" variant="secondary">
              VIEW OUR WORK
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
