import { useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart3,
  Bot,
  Building2,
  CloudCog,
  Gamepad2,
  GraduationCap,
  HeartPulse,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Target,
  Trophy,
  Truck,
  UsersRound,
} from 'lucide-react'
import Seo from '@/components/Seo'
import { pageMeta } from '@/data/seo'
import CTASection from '@/components/CTASection'
import Testimonials from '@/components/Testimonials'
import { industries } from '@/data/industries'
import { useScrollReveals } from '@/hooks/useScrollReveals'

const icons = [
  CloudCog,
  Building2,
  Bot,
  ShoppingCart,
  GraduationCap,
  HeartPulse,
  Truck,
  Gamepad2,
  Building2,
  CloudCog,
]

const descriptions = [
  'Scalable SaaS platforms built for performance, reliability and long-term multi-tenant growth.',
  'Secure and compliant fintech solutions that power modern financial transactions and reporting.',
  'Decentralized applications, token launchpads, and audited Web3 platforms for the decentralized web.',
  'Conversion-focused headless e-commerce experiences that accelerate online retail sales and loyalty.',
  'Engaging EdTech platforms, automated school administration, and AI teacher copilots that simplify education.',
  'HIPAA-ready healthcare applications and constraint-solving roster agents that improve patient care.',
  'Smart logistics solutions that optimize route operations, dispatching, and real-time fleet visibility.',
  'Immersive gaming interfaces and high-concurrency payment gateway integrations built for engagement.',
  'Digital marketplace platforms that connect, simplify, and accelerate commercial real estate and business sales.',
  'Workflow automation and autonomous AI agents that eliminate operational bottlenecks and boost productivity.',
]

const useCases = [
  'Dashboards, Multi-tenancy, CRM, Analytics, Collaboration Tools',
  'Digital Banking, Payments, Wallets, Lending, Transaction QA',
  'DeFi, DApps, Token Launchpads, Smart Contracts, Web3 Wallets',
  'Online Stores, Headless Commerce, Subscription Platforms, Marketplaces',
  'LMS, School Management, Question Paper Generators, Student Portals',
  'Telehealth, Clinical Roster Agents, Patient Portals, Appointment Scheduling',
  'Route Optimization, Fleet Tracking, Warehouse Management, Supply Chain',
  'Game Platforms, Payment Gateways, Leaderboards, In-game Economy',
  'Business Broker Listings, Franchise Directories, Search & Filters',
  'AI Payroll Automation, Biometric Reconciliation, Reporting Copilots',
]

const proof = [
  {
    value: '15+',
    label: 'Projects Delivered',
    icon: Rocket,
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    icon: Trophy,
  },
]

const advantages = [
  {
    icon: Target,
    title: 'Industry Expertise',
    text: 'Deep understanding of specific industry challenges, regulatory requirements, and technical opportunities.',
  },
  {
    icon: ShieldCheck,
    title: 'Tailored Solutions',
    text: 'Custom-built software architectures aligned directly with your business goals and end-user workflows.',
  },
  {
    icon: BarChart3,
    title: 'Measurable Impact',
    text: 'We deliver production-ready software solutions that drive operational growth, efficiency, and revenue.',
  },
  {
    icon: UsersRound,
    title: 'End-to-end Partner',
    text: 'From technical discovery to continuous scaling and QA automation, we are with you at every stage.',
  },
]

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveals(containerRef)

  return (
    <div ref={containerRef} className="industries-page">
      <Seo meta={pageMeta.industries} />

      <section className="industries-showcase">
        <div className="container industries-showcase-inner">
          <div className="industries-top">
            <div className="industries-intro">
              <div className="eyebrow">OUR INDUSTRIES</div>

              <h1>
                BUILT ACROSS
                <br />
                <span>DOMAINS.</span>
              </h1>

              <p>
                We design, engineer and scale mission-critical digital products
                for industries that shape the modern economy.
              </p>
            </div>

            <div className="domain-orbit">
              <img
                className="industry-hero-image"
                src="/industry-sg-hero.webp"
                alt="Software Garage neon SG cube industry engineering visual"
              />
            </div>
          </div>

          <div className="industry-proof reveal">
            {proof.map(({ icon: Icon, value, label }) => (
              <div className="industry-proof-item" key={label}>
                <span className="proof-icon">
                  <Icon size={20} strokeWidth={1.5} />
                </span>

                <strong>{value}</strong>
                <small>{label}</small>
              </div>
            ))}
          </div>

          <div className="industry-matrix">
            {industries.map((industry, index) => {
              const Icon = icons[index]

              return (
                <article
                  className="industry-row"
                  key={industry.slug}
                  id={industry.slug}
                >
                  <span className="industry-icon">
                    <Icon size={21} strokeWidth={1.45} />
                  </span>

                  <h2>{industry.name}</h2>

                  <p>{descriptions[index]}</p>

                  <div className="industry-usecase">
                    <b>USE CASES</b>
                    <span>{useCases[index]}</span>
                  </div>

                  {industry.caseStudyLink && (
                    <div style={{ marginTop: '16px' }}>
                      <Link
                        to={industry.caseStudyLink.url}
                        style={{
                          color: 'var(--lime)',
                          fontSize: '13px',
                          fontWeight: 600,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                        data-cursor="expand"
                      >
                        FEATURED WORK: {industry.caseStudyLink.label} →
                      </Link>
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          <div className="industry-advantages reveal">
            {advantages.map(({ icon: Icon, title, text }) => (
              <div
                className="industry-advantage"
                key={title}
              >
                <Icon size={54} strokeWidth={1.55} />

                <div>
                  <b>{title}</b>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection
        className="industries-cta"
        eyebrow="START A PROJECT"
        title={
          <>
            HAVE AN IDEA?
            <br />
            <span>LET&apos;S BUILD IT.</span>
          </>
        }
        description="Tell us about your industry requirements and we'll help architect a scalable, reliable product people can use and trust."
        secondaryLabel="TALK TO THE GARAGE"
      />
    </div>
  )
}
