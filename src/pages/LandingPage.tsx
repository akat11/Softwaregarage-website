import { useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react'
import CountUpStat from '@/components/CountUpStat'
import MagneticButton from '@/components/MagneticButton'
import Seo from '@/components/Seo'
import { landingPages, type LandingPageData } from '@/data/landingPages'
import { getLandingPageMeta } from '@/data/seo'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import '@/styles/landing.css'

interface Props {
  slug: string
}

export default function LandingPage({ slug }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useScrollReveals(containerRef)

  const data: LandingPageData | undefined = landingPages[slug]
  if (!data) {
    return <Navigate to="/404" replace />
  }

  const meta = getLandingPageMeta(slug)

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index))
  }

  return (
    <div ref={containerRef} className="landing-page-wrapper">
      {meta && <Seo meta={meta} />}

      {/* Hero Section */}
      <section className="svc-hero landing-hero">
        <div className="container svc-hero-grid">
          <div className="svc-hero-copy">
            <div className="svc-eyebrow">
              <span className="svc-eyebrow-dot" />
              {data.eyebrow}
            </div>

            <h1>
              {data.h1Main}
              <br />
              <span className="text-lime">{data.h1Highlight}</span>
              {data.h1Suffix && (
                <>
                  <br />
                  {data.h1Suffix}
                </>
              )}
            </h1>

            <p>{data.heroSubtitle}</p>

            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <MagneticButton to="/contact" variant="primary">
                START A PROJECT →
              </MagneticButton>
              <Link to="/ai-lab" className="landing-ghost-btn">
                EXPLORE AI LAB <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          <div className="svc-scene">
            <img
              src={data.heroVisual}
              alt={data.heroVisualAlt}
              width="1649"
              height="954"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Hero Stats */}
        <div className="container">
          <div className="svc-hero-stats">
            {data.stats.map((stat) => (
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

      {/* Value Proposition */}
      <section className="landing-value-prop reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">{data.valueProp.eyebrow}</div>
            <h2>{data.valueProp.title}</h2>
            <p>{data.valueProp.description}</p>
          </div>

          <div className="landing-cards-grid">
            {data.valueProp.cards.map((card, idx) => (
              <div className="landing-card" key={idx}>
                <div className="landing-card-tag">{card.tag}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="landing-capabilities reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">ENGINEERING CAPABILITIES</div>
            <h2>What We Build &amp; Deliver</h2>
            <p>Production-hardened solutions tailored to your operational specifications.</p>
          </div>

          <div className="landing-capabilities-grid">
            {data.capabilities.map((cap, idx) => (
              <div className="landing-capability-card" key={idx}>
                <div className="capability-header">
                  <div className="capability-num">0{idx + 1}</div>
                  <h3>{cap.title}</h3>
                </div>
                <p>{cap.description}</p>
                <ul className="capability-points">
                  {cap.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} className="text-lime flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="capability-tags">
                  {cap.tags.map((tag) => (
                    <span className="tech-badge" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="landing-tech-stack reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">MODERN ARCHITECTURE</div>
            <h2>Technology Stack &amp; Tools</h2>
            <p>We work with modern, battle-tested technologies that ensure performance, security, and scalability.</p>
          </div>

          <div className="landing-tech-grid">
            {data.techStack.map((stack, idx) => (
              <div className="landing-tech-card" key={idx}>
                <h4>{stack.category}</h4>
                <div className="tech-pills">
                  {stack.technologies.map((t) => (
                    <span className="tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="landing-process reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">OUR METHODOLOGY</div>
            <h2>How We Deliver Production Software</h2>
            <p>From initial discovery to zero-downtime deployment, our process is transparent, structured, and agile.</p>
          </div>

          <div className="landing-process-steps">
            {data.process.map((step, idx) => (
              <div className="landing-process-step" key={idx}>
                <div className="process-step-indicator">
                  <span className="process-step-num">{step.step}</span>
                  {idx < data.process.length - 1 && <span className="process-step-line" />}
                </div>
                <div className="process-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="landing-usecases reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">APPLICATIONS</div>
            <h2>Real-World Industry Use Cases</h2>
            <p>See how our engineering capabilities translate into high-impact operational solutions.</p>
          </div>

          <div className="landing-cards-grid">
            {data.useCases.map((uc, idx) => (
              <div className="landing-card" key={idx}>
                <div className="landing-card-tag">{uc.tag}</div>
                <h3>{uc.title}</h3>
                <p>{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Real Projects / Case Studies */}
      <section className="landing-projects reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">PROVEN WORK</div>
            <h2>Related Case Studies &amp; Projects</h2>
            <p>Explore real products and workflows engineered by the Software Garage team.</p>
          </div>

          <div className="landing-projects-grid">
            {data.relatedProjects.map((proj, idx) => (
              <Link to={proj.to} className="landing-project-card" key={idx}>
                <div className="project-card-tag">{proj.tag}</div>
                <h3>{proj.name}</h3>
                <p>{proj.description}</p>
                <div className="project-card-arrow">
                  View Case Study <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contextual Internal Links */}
      <section className="landing-related-services reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">EXPLORE MORE</div>
            <h2>Related Solutions &amp; Services</h2>
          </div>

          <div className="related-services-grid">
            {data.relatedServices.map((rel, idx) => (
              <Link to={rel.to} className="related-service-link" key={idx}>
                <div className="related-service-top">
                  <span className="related-service-title">{rel.label}</span>
                  <ArrowRight size={14} className="related-service-arrow" />
                </div>
                <p>{rel.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Schema Support */}
      <section className="landing-faqs reveal">
        <div className="container">
          <div className="landing-section-header">
            <div className="eyebrow">FREQUENTLY ASKED QUESTIONS</div>
            <h2>Common Technical Questions Answered</h2>
            <p>Everything you need to know about our technology, process, security, and engagement models.</p>
          </div>

          <div className="landing-faq-list">
            {data.faqs.map((faq, idx) => (
              <div
                className={`landing-faq-item ${openFaq === idx ? 'open' : ''}`}
                key={idx}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  className="faq-question-btn"
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={18} className={`faq-icon ${openFaq === idx ? 'rotate' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div id={`faq-answer-${idx}`} className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="services-final-cta reveal">
        <div className="services-final-backdrop" aria-hidden="true" />
        <div className="container services-final-copy">
          <div className="services-final-heading">
            <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
            <h2>
              LET&apos;S <span>BUILD IT.</span>
            </h2>
          </div>

          <div className="services-final-middle">
            <p>
              From technical architecture to production deployment, our engineering team is ready
              to build your high-performance solution.
            </p>
          </div>

          <div className="services-final-action">
            <MagneticButton to="/contact" variant="primary">
              TALK TO OUR ENGINEERS →
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
