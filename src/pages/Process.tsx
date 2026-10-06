import { useRef } from 'react'
import Seo from '@/components/Seo'
import { pageMeta } from '@/data/seo'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import Testimonials from '@/components/Testimonials'
import '../styles/process.css'
import {
  Search,
  Target,
  PenTool,
  Code2,
  CircleCheck,
  Rocket,
  BarChart3,
  ArrowRight,
  Eye,
  Cuboid,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    subtitle: 'RESEARCH & INSIGHT',
    description:
      'Understand the business, users, market and technical constraints before we build.',
    outputs: ['Research', 'Requirements', 'User Flows'],
    icon: Search,
  },
  {
    number: '02',
    title: 'Define',
    subtitle: 'STRATEGY & PLANNING',
    description:
      'Turn the problem into a clear product strategy, scope and execution roadmap.',
    outputs: ['Product Scope', 'Roadmap', 'Architecture'],
    icon: Target,
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'EXPERIENCE & INTERFACE',
    description:
      'Create intuitive user experiences and interfaces designed around real user behavior.',
    outputs: ['Wireframes', 'UI System', 'Prototype'],
    icon: PenTool,
  },
  {
    number: '04',
    title: 'Develop',
    subtitle: 'ENGINEERING & BUILD',
    description:
      'Build scalable, secure and production-ready software using the right technology stack.',
    outputs: ['Frontend', 'Backend', 'APIs', 'Integrations'],
    icon: Code2,
  },
  {
    number: '05',
    title: 'Test',
    subtitle: 'QUALITY & ASSURANCE',
    description:
      'Validate functionality, performance, security and reliability before release.',
    outputs: ['Functional', 'API', 'Automation', 'Performance'],
    icon: CircleCheck,
  },
  {
    number: '06',
    title: 'Launch',
    subtitle: 'DEPLOY & DELIVER',
    description:
      'Move from validated product to production with controlled deployment and support.',
    outputs: ['Deployment', 'Monitoring', 'Release'],
    icon: Rocket,
  },
  {
    number: '07',
    title: 'Scale',
    subtitle: 'GROWTH & OPTIMIZATION',
    description:
      'Improve, measure and evolve the product as users, data and business grow.',
    outputs: ['Analytics', 'Optimization', 'New Features'],
    icon: BarChart3,
  },
]

function ProcessHeroVisual() {
  return (
    <div className="process-hero-visual" aria-hidden="true">
      <img
        className="process-hero-reference"
        src="/process.webp"
        alt="Software Garage product engineering process - Strategy, Execution, Impact"
      />
    </div>
  )
}

function StepIcon({
  Icon,
}: {
  Icon: typeof Search
}) {
  return (
    <div className="process-step-icon">
      <Icon size={22} strokeWidth={1.5} />
    </div>
  )
}

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveals(containerRef)

  return (
    <div ref={containerRef} className="process-page">
      <Seo meta={pageMeta.process} />

      {/* HERO */}
      <section className="process-hero">
        <div className="process-particles" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="container process-hero-container">
          <div className="process-hero-content">
            <div className="eyebrow process-reveal">
              OUR PROCESS
            </div>

            <h1 className="process-title">
              <span className="process-title-line">
                FROM IDEA
              </span>

              <span className="process-title-line">
                TO <span className="text-lime">IMPACT.</span>
              </span>
            </h1>

            <p className="process-hero-description">
              A structured product engineering process built to
              reduce uncertainty, move faster, and ship with
              confidence.
            </p>

            <div className="process-hero-keywords">
              <div className="process-hero-keyword">
                <span className="process-hero-keyword-icon">01</span>
                <span className="process-hero-keyword-copy">
                  <strong>STRATEGIC</strong>
                  <em>Purposeful Thinking</em>
                </span>
              </div>

              <i aria-hidden="true" />

              <div className="process-hero-keyword">
                <span className="process-hero-keyword-icon">02</span>
                <span className="process-hero-keyword-copy">
                  <strong>TRANSPARENT</strong>
                  <em>Clear Communication</em>
                </span>
              </div>

              <i aria-hidden="true" />

              <div className="process-hero-keyword">
                <span className="process-hero-keyword-icon">03</span>
                <span className="process-hero-keyword-copy">
                  <strong>RESULTS-DRIVEN</strong>
                  <em>Measurable Impact</em>
                </span>
              </div>
            </div>
          </div>

          <ProcessHeroVisual />
        </div>
      </section>

      {/* INTRO */}
      <section className="process-intro section-space">
        <div className="container">
          <div className="process-section-heading reveal">
            <div className="eyebrow">
              HOW WE TURN IDEAS INTO PRODUCTS
            </div>

            <p>
              From the first conversation to production and
              beyond, every project moves through a clear,
              measurable process.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="process-steps-section">
        <div className="container">
          <div className="process-steps">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  className="process-step reveal"
                  key={step.number}
                  style={{
                    '--step-index': index,
                  } as React.CSSProperties}
                >
                  <div className="process-step-number">
                    {step.number}
                  </div>

                  <div className="process-step-timeline">
                    <div className="process-step-dot" />

                    {index !== processSteps.length - 1 && (
                      <div className="process-step-line">
                        <span />
                      </div>
                    )}
                  </div>

                  <div className="process-step-main">
                    <StepIcon Icon={Icon} />

                    <div className="process-step-title">
                      <h2>{step.title}</h2>

                      <span>{step.subtitle}</span>
                    </div>
                  </div>

                  <div className="process-step-description">
                    {step.description}
                  </div>

                  <div className="process-step-output">
                    <span className="process-output-label">
                      OUTPUTS
                    </span>

                    <div className="process-output-list">
                      {step.outputs.map((output) => (
                        <span key={output}>
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="process-step-arrow">
                    <ArrowRight size={22} />
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section className="process-flow-section reveal">
        <div className="container">
          <div className="process-flow">
            {processSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <div className="process-flow-item" key={step.number}>
                  <div className="process-flow-icon">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <span>{step.title.toUpperCase()}</span>

                  {index !== processSteps.length - 1 && (
                    <div className="process-flow-arrow">
                      →
                    </div>
                  )}
                </div>
              )
            })}

            <div className="process-flow-caption">
              One team.
              <br />
              One process.
              <br />
              One accountable path
              <br />
              from concept to production.
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="process-benefits section-space">
        <div className="container">
          <div className="eyebrow reveal">
            WHAT YOU GET
          </div>

          <div className="process-benefits-grid">
            <div className="process-benefit reveal">
              <div className="process-benefit-icon">
                <Target size={25} />
              </div>

              <h3>CLEAR DIRECTION</h3>

              <p>
                Know what we&apos;re building, why we&apos;re
                building it and what comes next.
              </p>
            </div>

            <div className="process-benefit reveal">
              <div className="process-benefit-icon">
                <Eye size={25} />
              </div>

              <h3>VISIBLE PROGRESS</h3>

              <p>
                Regular milestones, transparent communication
                and measurable deliverables.
              </p>
            </div>

            <div className="process-benefit reveal">
              <div className="process-benefit-icon">
                <Cuboid size={25} />
              </div>

              <h3>PRODUCTION-READY</h3>

              <p>
                Not just prototypes — software designed to
                perform in the real world.
              </p>
            </div>

            <div className="process-benefit reveal">
              <div className="process-benefit-icon">
                <ShieldCheck size={25} />
              </div>

              <h3>QUALITY BUILT IN</h3>

              <p>
                Testing and validation are part of the process,
                not an afterthought.
              </p>
            </div>

            <div className="process-benefit reveal">
              <div className="process-benefit-icon">
                <TrendingUp size={25} />
              </div>

              <h3>LONG-TERM THINKING</h3>

              <p>
                Architecture and decisions made with future
                growth in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="process-final-cta reveal">
        <div className="process-cta-grid" />

        <div className="container">
          <div className="process-cta-inner">
            <img
              className="process-cta-mountain"
              src="/mission-mountain.webp"
              alt=""
              aria-hidden="true"
            />

            <div className="eyebrow">
              YOUR IDEA HAS A NEXT STEP.
            </div>

            <h2>
              READY TO <span>GET STARTED?</span>
            </h2>

            <p>
              Whether you&apos;re starting from a concept,
              rebuilding an existing product, or scaling
              something already in production — we&apos;ll help
              you figure out what comes next.
            </p>

            <div className="process-cta-actions">
              <a
                href="/contact"
                className="process-button process-button-primary"
                data-cursor="expand"
              >
                START A PROJECT
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="process-button process-button-secondary"
                data-cursor="expand"
              >
                TALK TO THE GARAGE
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
