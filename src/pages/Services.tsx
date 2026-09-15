import { useRef } from 'react'
import Seo from '@/components/Seo'
import AnimatedCounter from '@/components/AnimatedCounter'
import MagneticButton from '@/components/MagneticButton'
import { useScrollReveals } from '@/hooks/useScrollReveals'

const services = [
  {
    slug: 'web-development',
    number: '01',
    title: 'Web Development',
    description:
      'We build fast, scalable and accessible web experiences — from high-converting websites to complex web applications and custom digital platforms.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'REST APIs', 'SQL'],
    capabilities: [
      'Web Applications',
      'Marketing Websites',
      'Custom Platforms',
      'Frontend Engineering',
      'Backend Integration',
    ],
    useCases: [
      'SaaS Platforms',
      'Business Portals',
      'Customer Platforms',
      'Marketing Websites',
    ],
    visual: 'web',
  },
  {
    slug: 'mobile-app-development',
    number: '02',
    title: 'Mobile App Development',
    description:
      'We build reliable mobile experiences for iOS and Android, designed for performance, usability and long-term maintainability.',
    technologies: ['React Native', 'Flutter', 'Firebase', 'TypeScript', 'REST APIs'],
    capabilities: [
      'iOS & Android Apps',
      'Cross-platform Apps',
      'API Integration',
      'App Architecture',
      'App Testing',
    ],
    useCases: [
      'Consumer Apps',
      'Field Service Apps',
      'Business Apps',
      'Customer Platforms',
    ],
    visual: 'mobile',
  },
  {
    slug: 'saas-custom-software',
    number: '03',
    title: 'SaaS & Custom Software',
    description:
      'From MVP to scalable SaaS products, we design and engineer custom software around real business workflows.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'APIs'],
    capabilities: [
      'SaaS Platforms',
      'Admin Panels',
      'Custom Dashboards',
      'Role-based Systems',
      'Workflow Automation',
    ],
    useCases: [
      'SaaS Products',
      'ERP Systems',
      'Internal Tools',
      'Business Platforms',
    ],
    visual: 'saas',
  },
  {
    slug: 'ecommerce-development',
    number: '04',
    title: 'E-Commerce Development',
    description:
      'We build conversion-focused commerce experiences with scalable catalogs, secure integrations and flexible payment workflows.',
    technologies: [
      'Shopify',
      'WooCommerce',
      'React',
      'Node.js',
      'Payment APIs',
    ],
    capabilities: [
      'Store Development',
      'Custom Commerce',
      'Payment Integration',
      'Product Catalogs',
      'Order Management',
    ],
    useCases: [
      'D2C Brands',
      'Marketplaces',
      'Subscription Commerce',
      'Retail Businesses',
    ],
    visual: 'commerce',
  },
  {
    slug: 'ui-ux-product-design',
    number: '05',
    title: 'UI/UX & Product Design',
    description:
      'We turn complex ideas into clear, intuitive product experiences — from early concepts and wireframes to production-ready interfaces.',
    technologies: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    capabilities: [
      'Product Strategy',
      'Wireframes',
      'UI Design',
      'Design Systems',
      'Interactive Prototypes',
    ],
    useCases: [
      'SaaS Products',
      'Mobile Apps',
      'Dashboards',
      'Customer Platforms',
    ],
    visual: 'design',
  },
  {
    slug: 'qa-test-automation',
    number: '06',
    title: 'QA & Test Automation',
    description:
      'We test beyond happy paths — finding functional, API, performance and regression issues before they reach production.',
    technologies: ['Cypress', 'Postman', 'JMeter', 'Newman'],
    capabilities: [
      'Functional Testing',
      'API Testing',
      'Automation Testing',
      'Regression Testing',
      'Performance Testing',
    ],
    useCases: [
      'SaaS Products',
      'Web Applications',
      'APIs',
      'Mobile Platforms',
    ],
    visual: 'qa',
  },
  {
    slug: 'api-backend-engineering',
    number: '07',
    title: 'API & Backend Engineering',
    description:
      'We engineer secure, scalable backend systems and APIs that keep products reliable, connected and ready to grow.',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'REST', 'Cloud'],
    capabilities: [
      'REST APIs',
      'Backend Systems',
      'Database Architecture',
      'Third-party Integrations',
      'Authentication',
    ],
    useCases: [
      'SaaS Platforms',
      'Mobile Backends',
      'Payment Systems',
      'Business APIs',
    ],
    visual: 'backend',
  },
  {
    slug: 'blockchain-web3',
    number: '08',
    title: 'Blockchain & Web3',
    description:
      'We build and test blockchain-powered products, from smart-contract integrations and wallets to Web3 applications and decentralized platforms.',
    technologies: ['Ethereum', 'EVM', 'Solidity', 'Web3.js', 'IPFS'],
    capabilities: [
      'Smart Contract Integration',
      'Web3 Applications',
      'Wallet Integration',
      'Blockchain APIs',
      'Web3 Testing',
    ],
    useCases: [
      'dApps',
      'Web3 Platforms',
      'Token-based Products',
      'Wallet Integrations',
      'Blockchain Applications',
    ],
    visual: 'blockchain',
  },
  {
    slug: 'ai-business-automation',
    number: '09',
    title: 'AI & Business Automation',
    description:
      'We integrate AI and automation into real business workflows to reduce repetitive work, improve decision-making and create smarter digital products.',
    technologies: ['OpenAI APIs', 'AI APIs', 'Python', 'Node.js', 'Automation'],
    capabilities: [
      'AI Integrations',
      'AI Assistants',
      'Workflow Automation',
      'Business Intelligence',
      'API Automation',
    ],
    useCases: [
      'AI Assistants',
      'Customer Support',
      'Internal Automation',
      'Business Workflows',
    ],
    visual: 'ai',
  },
]

function VisualGraphic({ type }: { type: string }) {
  return (
    <div
      className={`visual-graphic visual-${type}`}
      aria-hidden="true"
    >
      {type === 'web' && (
        <img
          className="web-development-reference"
          src="/web-development-reference.svg"
          alt=""
        />
      )}

      {type === 'mobile' && (
        <img
          className="mobile-two-screens-reference"
          src="/mobile-two-screens.svg"
          alt=""
        />
      )}

      {type === 'saas' && (
        <img
          className="saas-dashboard-reference"
          src="/saas-dashboard-reference.svg"
          alt=""
        />
      )}

      {type === 'commerce' && (
        <img
          className="ecommerce-development-reference"
          src="/ecommerce-development-reference.svg"
          alt=""
        />
      )}

      {type === 'design' && (
        <img
          className="ui-ux-product-design-reference"
          src="/ui-ux-product-design-reference.svg"
          alt=""
        />
      )}

      {type === 'qa' && (
        <div className="visual-qa">
          <div className="terminal-top">
            <span />
            <span />
            <span />
          </div>

          <div className="terminal-body">
            <div className="line">
              <strong>TEST RUNNING...</strong>
            </div>

            <div className="line small">
              48 / 48 TESTS PASSED
            </div>

            <div className="line small">
              API RESPONSE • 200 OK
            </div>

            <div className="line small">
              REGRESSION • PASSED
            </div>

            <div className="line small">
              PERFORMANCE • STABLE
            </div>

            <div className="progress-bar">
              <span />
            </div>

            <div className="terminal-footer">
              BUILD → TEST → BREAK → FIX → SHIP
            </div>
          </div>
        </div>
      )}

      {type === 'backend' && (
        <img
          className="api-backend-engineering-reference"
          src="/api-backend-engineering-reference.svg"
          alt=""
        />
      )}

      {type === 'blockchain' && (
        <img
          className="blockchain-web3-reference"
          src="/blockchain-web3-reference.svg"
          alt=""
        />
      )}

      {type === 'ai' && (
        <img
          className="ai-business-automation-reference"
          src="/ai-business-automation-reference.svg"
          alt=""
        />
      )}
    </div>
  )
}

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
              SERVICES
              <br />
              <span className="text-lime">WE DELIVER</span>
            </h1>

            <p>
              From product strategy and design to engineering, testing and
              automation — we build digital products that move business.
            </p>

            <div className="hero-stats-row">
              <div className="hero-stat compact">
                <AnimatedCounter
                  value={15}
                  label="Projects Delivered"
                />
              </div>

              <div className="hero-stat compact">
                <AnimatedCounter
                  value={100}
                  suffix="%"
                  label="Client Satisfaction"
                />
              </div>

              <div className="hero-stat compact">
                <AnimatedCounter
                  value={6}
                  label="Global Clients"
                />
              </div>

              <div className="hero-stat compact">
                <AnimatedCounter
                  value={7}
                  label="Core Capability"
                />
              </div>
            </div>
          </div>

          <div className="services-hero-visual">
            <img
              src="/steps.png"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="services-list tight">
        <div className="container">
          {services.map((service) => (
            <article
              className="service-detail reveal"
              id={service.slug}
              key={service.slug}
            >
              <div className="service-number">
                <span>{service.number}</span>
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-details-grid">
                  <div>
                    <div className="service-block-title">
                      CAPABILITIES
                    </div>

                    <ul className="service-list">
                      {service.capabilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="service-block-title">
                      TECHNOLOGIES
                    </div>

                    <div className="service-tags">
                      {service.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="service-block-title">
                      TYPICAL USE CASES
                    </div>

                    <ul className="service-list">
                      {service.useCases.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="service-action">
                  <MagneticButton
                    to="/contact"
                    variant="secondary"
                  >
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
        <div
          className="services-final-backdrop"
          aria-hidden="true"
        />

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
            <MagneticButton
              to="/contact"
              variant="primary"
            >
              START A PROJECT →
            </MagneticButton>

            <MagneticButton
              to="/work"
              variant="secondary"
            >
              VIEW OUR WORK
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}