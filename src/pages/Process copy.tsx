import { useRef } from 'react'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import { processSteps } from '@/data/process'
import { useScrollReveals } from '@/hooks/useScrollReveals'

function Icon({ name }: { name?: string }) {
  switch (name) {
    case 'search':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      )

    case 'target':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M12 2v4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      )

    case 'design':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M3 21l3-3 7-7 3-3 4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'code':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M8.5 16.5L3 12l5.5-4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 7.5L21 12l-5.5 4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'check':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'rocket':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M14 2s4 0 6 2-2 6-2 6l-6 6s-4 0-6-2 2-6 2-6l6-6z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    case 'growth':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M3 3v18h18"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13l4-4 4 6 4-8"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )

    default:
      return null
  }
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo
        title="Our Process | Software Garage"
        description="From discovery to scale — the seven-stage process Software Garage follows to take a product from idea to impact."
      />

      <section className="page-hero process-hero">
        <div className="container">
          <div className="eyebrow">OUR PROCESS</div>

          <h1>
            FROM IDEA
            <br />
            TO <span className="title-highlight">IMPACT.</span>
          </h1>

          <p className="process-lead">
            A structured product engineering process built to reduce
            uncertainty, move faster, and ship with confidence.
          </p>

          <div className="process-principles">
            <span>STRATEGIC</span>
            <span className="dot">•</span>
            <span>TRANSPARENT</span>
            <span className="dot">•</span>
            <span>RESULTS-DRIVEN</span>
          </div>
        </div>

        <div className="process-hero-wireframe" aria-hidden />
      </section>

      <section className="tight">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">
                HOW WE TURN IDEAS INTO PRODUCTS
              </div>

              <p className="section-intro">
                From the first conversation to production and beyond, every
                project moves through a clear, measurable process.
              </p>
            </div>
          </div>

          <div className="process-timeline">
            <div className="timeline-track" aria-hidden />

            {processSteps.map((step) => (
              <div className="process-row" key={step.step}>
                <div className="row-number">{step.step}</div>

                <div className="row-node">
                  <div className="icon-wrap">
                    <Icon name={step.icon} />
                  </div>
                </div>

                <div className="row-content">
                  <div className="row-title">
                    <h3>{step.title}</h3>
                    <div className="row-category">{step.category}</div>
                  </div>
                </div>

                <div className="row-desc-col">
                  <p className="row-desc-right">{step.description}</p>

                  <div className="outputs-right">
                    <div className="outputs-label">OUTPUTS</div>

                    <div className="outputs-list-right">
                      {step.outputs.map((o) => (
                        <span className="outputs-item" key={o}>
                          <span className="dot-small" />
                          <span className="outputs-text">{o}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="row-action">
                    <span className="row-arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="process-flow">
            <div className="flow-track">
              {processSteps.map((s, i) => (
                <div className="flow-step" key={s.step}>
                  <div className="flow-icon">
                    <Icon name={s.icon} />
                  </div>

                  <div className="flow-label">
                    {s.title.toUpperCase()}
                  </div>

                  {i < processSteps.length - 1 && (
                    <div className="flow-arrow">→</div>
                  )}
                </div>
              ))}
            </div>

            <div className="flow-note">
              One team. One process. One accountable path from concept to
              production.
            </div>
          </div>

          <div className="what-you-get">
            <div className="eyebrow">WHAT YOU GET</div>

            <div className="wyg-grid">
              <div className="wyg-item">
                <div className="wyg-icon">🎯</div>
                <h4>CLEAR DIRECTION</h4>
                <p>
                  Know what we're building, why we're building it and what
                  comes next.
                </p>
              </div>

              <div className="wyg-item">
                <div className="wyg-icon">👁️</div>
                <h4>VISIBLE PROGRESS</h4>
                <p>
                  Regular milestones, transparent communication and
                  measurable deliverables.
                </p>
              </div>

              <div className="wyg-item">
                <div className="wyg-icon">▢</div>
                <h4>PRODUCTION-READY SOFTWARE</h4>
                <p>
                  Not just prototypes — software designed to perform in the
                  real world.
                </p>
              </div>

              <div className="wyg-item">
                <div className="wyg-icon">✔️</div>
                <h4>QUALITY BUILT IN</h4>
                <p>
                  Testing and validation are part of the process, not an
                  afterthought.
                </p>
              </div>

              <div className="wyg-item">
                <div className="wyg-icon">📈</div>
                <h4>LONG-TERM THINKING</h4>
                <p>
                  Architecture and decisions made with future growth in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="YOUR IDEA HAS A NEXT STEP."
        title="READY TO GET STARTED?"
        description={
          "Whether you're starting from a concept,\nrebuilding an existing product, or scaling something already in production — we'll help you figure out what comes next."
        }
      />
    </div>
  )
}