import { useEffect, useRef } from 'react'
import Seo from '@/components/Seo'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
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
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const ctx = canvas.getContext('2d')

    if (!ctx) return

    let animationFrame = 0
    let width = 0
    let height = 0
    let running = true

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1

      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)

      canvas.width = width * dpr
      canvas.height = height * dpr

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (time: number) => {
      if (!running) return

      const t = reducedMotion ? 0 : time * 0.0007

      ctx.clearRect(0, 0, width, height)

      const rows = width < 700 ? 15 : 23
      const cols = width < 700 ? 24 : 38

      const left = width * 0.03
      const right = width * 1.02
      const horizon = height * 0.22
      const bottom = height * 0.9

      const points: { x: number; y: number }[][] = []

      for (let row = 0; row < rows; row += 1) {
        const depth = row / (rows - 1)

        const y = horizon + depth * (bottom - horizon)

        const rowPoints: { x: number; y: number }[] = []

        for (let col = 0; col < cols; col += 1) {
          const xProgress = col / (cols - 1)

          const x = left + xProgress * (right - left)
          const firstPeak = Math.exp(-Math.pow((xProgress - 0.32) / 0.18, 2))
          const secondPeak = Math.exp(-Math.pow((xProgress - 0.73) / 0.2, 2))
          const ridge = firstPeak * 0.82 + secondPeak * 1.05
          const ripple = Math.sin(xProgress * 18 + t * 1.4) * 5
          const mountainHeight = ridge * height * 0.42 + ripple
          const animatedHeight = mountainHeight * (1 - depth * 0.72)

          rowPoints.push({
            x,
            y: y - animatedHeight,
          })
        }

        points.push(rowPoints)
      }

      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Horizontal wave lines
      points.forEach((row, rowIndex) => {
        const depth = rowIndex / Math.max(rows - 1, 1)

        ctx.beginPath()

        row.forEach((point, index) => {
          if (index === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            const previous = row[index - 1]

            const midX = (previous.x + point.x) / 2
            const midY = (previous.y + point.y) / 2

            ctx.quadraticCurveTo(
              previous.x,
              previous.y,
              midX,
              midY,
            )
          }
        })

        ctx.strokeStyle = `rgba(183,255,0,${0.24 - depth * 0.1})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      // Vertical lines
      for (let col = 0; col < cols; col += 1) {
        ctx.beginPath()

        points.forEach((row, rowIndex) => {
          const point = row[col]

          if (rowIndex === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            const previous = points[rowIndex - 1][col]

            const midX = (previous.x + point.x) / 2
            const midY = (previous.y + point.y) / 2

            ctx.quadraticCurveTo(
              previous.x,
              previous.y,
              midX,
              midY,
            )
          }
        })

        ctx.strokeStyle = `rgba(183,255,0,${0.15 - (col / cols) * 0.05})`
        ctx.lineWidth = 0.8
        ctx.stroke()
      }

      // Glowing markers over the mountain ridge
      const glowingPoints = [
        [0.18, 0.38, 3],
        [0.33, 0.12, 4],
        [0.52, 0.34, 3],
        [0.73, 0.08, 5],
        [0.91, 0.4, 3],
      ]

      glowingPoints.forEach(([x, y, size], index) => {
        const px = width * x
        const py = height * y + Math.sin(t * 2 + index) * 5
        const pulse = size + Math.sin(t * 4 + index) * 1.2

        ctx.save()

        ctx.fillStyle = 'rgba(183,255,0,0.95)'
        ctx.shadowColor = 'rgba(183,255,0,0.8)'
        ctx.shadowBlur = 16

        ctx.beginPath()
        ctx.rect(px - pulse, py - pulse, pulse * 2, pulse * 2)
        ctx.fill()

        ctx.restore()
      })

      if (!reducedMotion) {
        animationFrame = requestAnimationFrame(draw)
      }
    }

    resize()
    draw(performance.now())

    window.addEventListener('resize', resize)

    return () => {
      running = false
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [reducedMotion])

  return (
    <div className="process-hero-visual" aria-hidden="true">
      <img className="process-hero-reference" src="/process-hero-reference.svg" alt="" />
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
      <Seo
        title="Our Process | Software Garage"
        description="A structured product engineering process built to reduce uncertainty, move faster and ship with confidence."
      />

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

      {/* CTA */}
      <section className="process-final-cta reveal">
        <div className="process-cta-grid" />

        <div className="container">
          <div className="process-cta-inner">
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
              >
                START A PROJECT
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="process-button process-button-secondary"
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
