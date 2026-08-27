import { useEffect, useRef } from 'react'
import Seo from '@/components/Seo'
import AnimatedCounter from '@/components/AnimatedCounter'
import MagneticButton from '@/components/MagneticButton'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

const services = [
  {
    slug: 'web-development',
    number: '01',
    title: 'Web Development',
    description:
      'We build fast, scalable and accessible web experiences — from high-converting websites to complex web applications and custom digital platforms.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'SQL'],
    capabilities: ['Web Applications', 'Marketing Websites', 'Custom Platforms', 'Frontend Engineering', 'Backend Integration'],
    useCases: ['SaaS Platforms', 'Business Portals', 'Customer Platforms', 'Marketing Websites'],
    visual: 'web',
  },
  {
    slug: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    description:
      'We build reliable mobile experiences for iOS and Android, designed for performance, usability and long-term maintainability.',
    technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript', 'REST APIs'],
    capabilities: ['iOS & Android Apps', 'Cross-platform Apps', 'API Integration', 'App Architecture', 'App Testing'],
    useCases: ['Consumer Apps', 'Field Service Apps', 'Business Apps', 'Customer Platforms'],
    visual: 'mobile',
  },
  {
    slug: 'saas-custom-software',
    number: '03',
    title: 'SaaS & Custom Software',
    description:
      'From MVP to scalable SaaS products, we design and engineer custom software around real business workflows.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'APIs'],
    capabilities: ['SaaS Platforms', 'Admin Panels', 'Custom Dashboards', 'Role-based Systems', 'Workflow Automation'],
    useCases: ['SaaS Products', 'ERP Systems', 'Internal Tools', 'Business Platforms'],
    visual: 'saas',
  },
  {
    slug: 'ecommerce-development',
    number: '04',
    title: 'E-Commerce Development',
    description:
      'We build conversion-focused commerce experiences with scalable catalogs, secure integrations and flexible payment workflows.',
    technologies: ['Shopify', 'WooCommerce', 'React', 'Node.js', 'Payment APIs'],
    capabilities: ['Store Development', 'Custom Commerce', 'Payment Integration', 'Product Catalogs', 'Order Management'],
    useCases: ['D2C Brands', 'Marketplaces', 'Subscription Commerce', 'Retail Businesses'],
    visual: 'commerce',
  },
  {
    slug: 'ui-ux-product-design',
    number: '05',
    title: 'UI/UX & Product Design',
    description:
      'We turn complex ideas into clear, intuitive product experiences — from early concepts and wireframes to production-ready interfaces.',
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    capabilities: ['Product Strategy', 'Wireframes', 'UI Design', 'Design Systems', 'Interactive Prototypes'],
    useCases: ['SaaS Products', 'Mobile Apps', 'Dashboards', 'Customer Platforms'],
    visual: 'design',
  },
  {
    slug: 'qa-test-automation',
    number: '06',
    title: 'QA & Test Automation',
    description:
      'We test beyond happy paths — finding functional, API, performance and regression issues before they reach production.',
    technologies: ['Cypress', 'Postman', 'JMeter', 'Newman'],
    capabilities: ['Functional Testing', 'API Testing', 'Automation Testing', 'Regression Testing', 'Performance Testing'],
    useCases: ['SaaS Products', 'Web Applications', 'APIs', 'Mobile Platforms'],
    visual: 'qa',
  },
  {
    slug: 'api-backend-engineering',
    number: '07',
    title: 'API & Backend Engineering',
    description:
      'We engineer secure, scalable backend systems and APIs that keep products reliable, connected and ready to grow.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST', 'Cloud'],
    capabilities: ['REST APIs', 'Backend Systems', 'Database Architecture', 'Third-party Integrations', 'Authentication'],
    useCases: ['SaaS Platforms', 'Mobile Backends', 'Payment Systems', 'Business APIs'],
    visual: 'backend',
  },
  {
    slug: 'blockchain-web3',
    number: '08',
    title: 'Blockchain & Web3',
    description:
      'We build and test blockchain-powered products, from smart-contract integrations and wallets to Web3 applications and decentralized platforms.',
    technologies: ['Ethereum', 'EVM', 'Solidity', 'Web3.js', 'IPFS'],
    capabilities: ['Smart Contract Integration', 'Web3 Applications', 'Wallet Integration', 'Blockchain APIs', 'Web3 Testing'],
    useCases: ['dApps', 'Web3 Platforms', 'Token-based Products', 'Wallet Integrations', 'Blockchain Applications'],
    visual: 'blockchain',
  },
  {
    slug: 'ai-business-automation',
    number: '09',
    title: 'AI & Business Automation',
    description:
      'We integrate AI and automation into real business workflows to reduce repetitive work, improve decision-making and create smarter digital products.',
    technologies: ['OpenAI APIs', 'AI APIs', 'Python', 'Node.js', 'Automation'],
    capabilities: ['AI Integrations', 'AI Assistants', 'Workflow Automation', 'Business Intelligence', 'API Automation'],
    useCases: ['AI Assistants', 'Customer Support', 'Internal Automation', 'Business Workflows'],
    visual: 'ai',
  },
]

function VisualGraphic({ type }: { type: string }) {
  return (
    <div className={`visual-graphic visual-${type}`} aria-hidden="true">
      {type === 'web' && (
        <img className="web-development-reference" src="/web-development-reference.svg" alt="" />
      )}
      {type === 'mobile' && (
        <img className="mobile-two-screens-reference" src="/mobile-two-screens.svg" alt="" />
      )}
      {type === 'saas' && (
        <img className="saas-dashboard-reference" src="/saas-dashboard-reference.svg" alt="" />
      )}
      {type === 'commerce' && (
        <img className="ecommerce-development-reference" src="/ecommerce-development-reference.svg" alt="" />
      )}
      {type === 'design' && (
        <img className="ui-ux-product-design-reference" src="/ui-ux-product-design-reference.svg" alt="" />
      )}
      {type === 'qa' && (
        <div className="visual-qa">
          <div className="terminal-top">
            <span />
            <span />
            <span />
          </div>
          <div className="terminal-body">
            <div className="line"><strong>TEST RUNNING...</strong></div>
            <div className="line small">48 / 48 TESTS PASSED</div>
            <div className="line small">API RESPONSE • 200 OK</div>
            <div className="line small">REGRESSION • PASSED</div>
            <div className="line small">PERFORMANCE • STABLE</div>
            <div className="progress-bar"><span /></div>
            <div className="terminal-footer">BUILD → TEST → BREAK → FIX → SHIP</div>
          </div>
        </div>
      )}
      {type === 'backend' && (
        <img className="api-backend-engineering-reference" src="/api-backend-engineering-reference.svg" alt="" />
      )}
      {type === 'blockchain' && (
        <img className="blockchain-web3-reference" src="/blockchain-web3-reference.svg" alt="" />
      )}
      {type === 'ai' && (
        <img className="ai-business-automation-reference" src="/ai-business-automation-reference.svg" alt="" />
      )}
    </div>
  )
}

function ServicesHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let frame = 0
    let width = 0
    let height = 0
    let dpr = window.devicePixelRatio || 1
    let mouseX = 0
    let mouseY = 0
    let running = true

    type NodeType = { x: number; y: number; radius: number; phase: number }
    type ParticleType = { x: number; y: number; size: number; type: 'dot' | 'square' | 'diamond' | 'plus' | 'cross'; opacity: number; speed: number; phase: number }

    const nodes: NodeType[] = []
    const particles: ParticleType[] = []

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const getSurface = (t: number, time: number) => {
      return (
        Math.sin((t + 0.08) * Math.PI * 1.14 + time * 0.16) * 0.38 +
        Math.cos((t - 0.18) * Math.PI * 0.82 + time * 0.28) * 0.28 +
        Math.sin((t + 0.45) * Math.PI * 0.42 + time * 0.12) * 0.12 -
        0.16
      )
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      dpr = window.devicePixelRatio || 1
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'

      nodes.length = 0
      particles.length = 0

      const nodeCount = width < 900 ? 8 : width < 1200 ? 10 : 14
      for (let i = 0; i < nodeCount; i += 1) {
        nodes.push({
          x: lerp(width * 0.42, width * 0.96, Math.random()),
          y: lerp(height * 0.18, height * 0.62, Math.random()),
          radius: lerp(1.5, 3.6, Math.random()),
          phase: Math.random() * Math.PI * 2,
        })
      }

      const particleCount = width < 900 ? 10 : width < 1200 ? 14 : 18
      const particleTypes: ParticleType['type'][] = ['dot', 'square', 'diamond', 'plus', 'cross']
      for (let i = 0; i < particleCount; i += 1) {
        particles.push({
          x: lerp(width * 0.45, width * 0.98, Math.random()),
          y: lerp(height * 0.06, height * 0.42, Math.random()),
          size: lerp(3, 10, Math.random()),
          type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
          opacity: lerp(0.08, 0.24, Math.random()),
          speed: lerp(0.0005, 0.0016, Math.random()),
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawGrid = (time: number) => {
      const rows = width < 800 ? 16 : width < 1200 ? 18 : 22
      const cols = width < 800 ? 18 : width < 1200 ? 22 : 26
      const grid: { x: number; y: number }[][] = []
      const leftEdge = width * 0.42
      const rightEdge = width * 0.98
      const horizon = height * 0.28
      const baseY = height * 0.82

      for (let row = 0; row < rows; row += 1) {
        const depth = row / Math.max(rows - 1, 1)
        const rowWidth = lerp((rightEdge - leftEdge) * 0.48, rightEdge - leftEdge, easeOut(1 - depth))
        const rowLeft = leftEdge - (rowWidth - (rightEdge - leftEdge)) * 0.18 * (1 - depth)
        const rowY = lerp(baseY, horizon, depth) + Math.sin(depth * Math.PI * 1.8 + time * 0.12) * 24 * (1 - depth)
        const rowPoints: { x: number; y: number }[] = []

        for (let col = 0; col < cols; col += 1) {
          const t = col / Math.max(cols - 1, 1)
          const surface = getSurface(t, time)
          const xOffset = Math.sin(t * Math.PI * 1.4 + depth * 1.05 + time * 0.36) * 22 * (1 - depth)
          const x = rowLeft + t * rowWidth + xOffset
          const yOffset = surface * height * 0.08 * (1 - depth) + Math.cos(t * Math.PI * 2.1 + depth * 1.5 + time * 0.5) * 10 * (1 - depth)
          const y = rowY + yOffset
          rowPoints.push({ x, y: clamp(y, 0, height) })
        }
        grid.push(rowPoints)
      }

      const drawLine = (points: { x: number; y: number }[], alpha: number, widthLine: number) => {
        if (points.length < 2) return
        ctx.beginPath()
        ctx.moveTo(points[0].x, points[0].y)
        for (let i = 1; i < points.length; i += 1) {
          const prev = points[i - 1]
          const current = points[i]
          const midX = (prev.x + current.x) / 2
          const midY = (prev.y + current.y) / 2
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY)
        }
        const last = points[points.length - 1]
        ctx.lineTo(last.x, last.y)
        ctx.strokeStyle = `rgba(183,255,0,${alpha})`
        ctx.lineWidth = widthLine
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.stroke()
      }

      for (let row = 0; row < grid.length; row += 1) {
        const depth = row / Math.max(grid.length - 1, 1)
        const alpha = lerp(0.18, 0.08, depth)
        const lineWidth = lerp(1.8, 0.9, depth)
        drawLine(grid[row], alpha, lineWidth)
      }

      for (let col = 0; col < cols; col += 1) {
        const colPoints: { x: number; y: number }[] = []
        for (let row = 0; row < grid.length; row += 1) {
          colPoints.push(grid[row][col])
        }
        const alpha = lerp(0.16, 0.06, col / Math.max(cols - 1, 1))
        drawLine(colPoints, alpha, 0.9)
      }

      ctx.globalAlpha = 1
      nodes.forEach((node, index) => {
        const pulse = Math.sin(time * 1.6 + node.phase) * 0.42 + 0.75
        const glow = clamp(0.12 + pulse * 0.18, 0.12, 0.38)
        const radius = node.radius * (index < 3 ? 1.1 : 1)

        ctx.save()
        ctx.fillStyle = `rgba(183,255,0,${glow})`
        ctx.shadowColor = 'rgba(183,255,0,0.24)'
        ctx.shadowBlur = 10
        ctx.beginPath()
        ctx.arc(node.x, node.y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      particles.forEach((particle) => {
        const phase = particle.phase + time * particle.speed * 16
        const driftX = Math.sin(phase * 0.9) * 10
        const driftY = Math.cos(phase * 0.7) * 4
        const px = particle.x + driftX * 0.08
        const py = particle.y + driftY * 0.03
        const alpha = clamp(particle.opacity * (reducedMotion ? 1 : 0.9 + Math.sin(phase) * 0.04), 0.06, 0.26)

        ctx.save()
        ctx.globalAlpha = alpha
        ctx.strokeStyle = 'rgba(183,255,0,0.28)'
        ctx.fillStyle = 'rgba(183,255,0,0.14)'
        ctx.lineWidth = 1

        if (particle.type === 'dot') {
          ctx.beginPath()
          ctx.arc(px, py, 1.5, 0, Math.PI * 2)
          ctx.fill()
        } else if (particle.type === 'square') {
          const s = particle.size * 0.35
          ctx.strokeRect(px - s, py - s, s * 2, s * 2)
        } else if (particle.type === 'diamond') {
          const s = particle.size * 0.45
          ctx.beginPath()
          ctx.moveTo(px, py - s)
          ctx.lineTo(px + s, py)
          ctx.lineTo(px, py + s)
          ctx.lineTo(px - s, py)
          ctx.closePath()
          ctx.stroke()
        } else if (particle.type === 'plus') {
          const s = particle.size * 0.4
          ctx.beginPath()
          ctx.moveTo(px - s, py)
          ctx.lineTo(px + s, py)
          ctx.moveTo(px, py - s)
          ctx.lineTo(px, py + s)
          ctx.stroke()
        } else {
          const s = particle.size * 0.4
          ctx.beginPath()
          ctx.moveTo(px - s, py - s)
          ctx.lineTo(px + s, py + s)
          ctx.moveTo(px + s, py - s)
          ctx.lineTo(px - s, py + s)
          ctx.stroke()
        }
        ctx.restore()
      })
    }

    const draw = (time: number) => {
      if (!running) return
      const t = reducedMotion ? 0 : time * 0.0012

      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = '#050505'
      ctx.fillRect(0, 0, width, height)

      ctx.save()
      ctx.globalCompositeOperation = 'screen'
      ctx.translate(0, 0)
      drawGrid(t)
      ctx.restore()

      if (!reducedMotion) {
        frame = requestAnimationFrame(draw)
      }
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
    }

    const handleResize = () => {
      resize()
      draw(performance.now())
    }

    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)
    resize()
    draw(performance.now())

    window.addEventListener('resize', handleResize)
    if (!reducedMotion && !isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      running = false
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      if (!reducedMotion && !isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [reducedMotion])

  return <canvas ref={canvasRef} className="services-hero-canvas" aria-hidden="true" />
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo
        title="Software Development & Digital Engineering Services | Software Garage"
        description="From product strategy and design to engineering, testing and automation — we build digital products that move business."
      />

      <section className="services-hero">
        <div className="container services-hero-grid">
          <div className="services-hero-copy">
            <div className="eyebrow">CAPABILITIES</div>
            <h1>
              SERVICES<br />
              <span className="text-lime">WE DELIVER</span>
            </h1>
            <p>From product strategy and design to engineering, testing and automation — we build digital products that move business.</p>
            <div className="hero-stats-row">
              <div className="hero-stat compact">
                <AnimatedCounter value={15} label="Projects Delivered" />
              </div>
              <div className="hero-stat compact">
                <AnimatedCounter value={100} suffix="%" label="Client Satisfaction" />
              </div>
              <div className="hero-stat compact">
                <AnimatedCounter value={6} label="Global Clients" />
              </div>
              <div className="hero-stat compact">
                <AnimatedCounter value={7} label="Core Capability" />
              </div>
            </div>
          </div>
          <div className="services-hero-visual">
            <img src="/services-hero-reference.svg" alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="services-list tight">
        <div className="container">
          {services.map((service) => (
            <article className="service-detail reveal" id={service.slug} key={service.slug}>
              <div className="service-number">
                <span>{service.number}</span>
                {service.badge ? <div className="service-badge">{service.badge}</div> : null}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-details-grid">
                  <div>
                    <div className="service-block-title">CAPABILITIES</div>
                    <ul className="service-list">
                      {service.capabilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="service-block-title">TECHNOLOGIES</div>
                    <div className="service-tags">
                      {service.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="service-block-title">TYPICAL USE CASES</div>
                    <ul className="service-list">
                      {service.useCases.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="service-action">
                  <MagneticButton to="/contact" variant="secondary" cursorLabel="START A PROJECT">
                    START A PROJECT →
                  </MagneticButton>
                </div>
              </div>
              <div className="service-visual">
                <VisualGraphic type={service.visual} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-final-cta reveal">
        <div className="services-final-backdrop" aria-hidden="true" />
        <div className="container services-final-copy">
          <div className="services-final-heading">
            <div className="eyebrow">HAVE AN IDEA?</div>
            <h2>LET&apos;S <span>BUILD IT.</span></h2>
          </div>
          <div className="services-final-middle">
            <p>From first sketch to production, we turn ambitious ideas into powerful digital products.</p>
          </div>
          <div className="hero-ctas">
            <MagneticButton to="/contact" variant="primary" cursorLabel="LET'S TALK">
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
