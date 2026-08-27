import { useRef } from 'react'
import { Award, BarChart3, Bot, Building2, CloudCog, Gamepad2, GraduationCap, HeartPulse, Rocket, ShieldCheck, ShoppingCart, Target, Trophy, Truck, UsersRound, WalletCards } from 'lucide-react'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import { industries } from '@/data/industries'
import { useScrollReveals } from '@/hooks/useScrollReveals'

const icons = [CloudCog, Building2, Bot, ShoppingCart, GraduationCap, HeartPulse, Truck, Gamepad2, Building2, CloudCog]
const descriptions = ['Scalable SaaS platforms built for performance, reliability and long-term growth.','Secure and compliant fintech solutions that power modern financial experiences.','Decentralized applications and platforms for the next generation of the internet.','Conversion-focused e-commerce experiences that drive sales and customer loyalty.','Engaging digital platforms that empower learners and simplify education.','HIPAA-ready solutions that improve patient care and operational efficiency.','Smart logistics solutions that optimize operations and real-time visibility.','Immersive gaming and interactive experiences that engage and retain players.','Digital solutions that connect, simplify and accelerate real estate journeys.','Workflow automation and custom tools that streamline operations and boost productivity.']
const useCases = ['Dashboards, CRM, Analytics, Collaboration Tools','Digital Banking, Payments, Wallets, Lending, Trading Platforms','DeFi, DApps, NFT Marketplaces, Wallets, DAO Platforms','Online Stores, Marketplaces, Subscription Platforms, D2C Brands','LMS, Online Courses, Student Portals, Assessment Systems','Telehealth, Patient Portals, EHR, Appointment Scheduling','Route Optimization, Fleet Tracking, Warehouse Management, Supply Chain','Game Platforms, Multiplayer Systems, Leaderboards, In-game Economy','Property Listings, CRM, Virtual Tours, Lease Management','ERP, Workflow Automation, Reporting Tools, Internal Dashboards']
const proof = [{ value: '15+', label: 'Projects Delivered', icon: Rocket },{ value: '100%', label: 'Client Satisfaction', icon: Trophy }]
const advantages = [{ icon: Target, title: 'Industry Expertise', text: 'Deep understanding of specific industry challenges and opportunities.' },{ icon: ShieldCheck, title: 'Tailored Solutions', text: 'Custom-built solutions aligned with your business goals and users.' },{ icon: BarChart3, title: 'Measurable Impact', text: 'We deliver solutions that drive growth, efficiency and real results.' },{ icon: UsersRound, title: 'End-to-end Partner', text: 'From strategy to support, we’re with you at every step.' }]

export default function Industries() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef} className="industries-page">
      <Seo title="Industries We Build For | Software Garage" description="Software Garage builds digital products across SaaS, FinTech, e-commerce, education, healthcare, logistics, gaming, Web3, real estate and business automation." />
      <section className="industries-showcase">
        <div className="container industries-showcase-inner">
          <div className="industries-top">
            <div className="industries-intro"><div className="eyebrow">OUR INDUSTRIES</div><h1>BUILT ACROSS<br /><span>DOMAINS.</span></h1><p>We design, build and scale digital products for industries that shape the future.</p></div>
            <div className="domain-orbit"><img className="industry-hero-image" src="/industry-sg-hero.png" alt="Software Garage neon SG cube" /></div>
          </div>
          <div className="industry-proof reveal">
            {proof.map(({ icon: Icon, value, label }) => <div className="industry-proof-item" key={label}><span className="proof-icon"><Icon size={20} strokeWidth={1.5} /></span><strong>{value}</strong><small>{label}</small></div>)}
          </div>
          <div className="industry-matrix">
            {industries.map((industry, index) => { const Icon = icons[index]; return <article className="industry-row" key={industry.slug}><span className="industry-icon"><Icon size={21} strokeWidth={1.45} /></span><h2>{industry.name}</h2><p>{descriptions[index]}</p><div className="industry-usecase"><b>USE CASES</b><span>{useCases[index]}</span></div></article> })}
          </div>
          <div className="industry-advantages reveal">
            {advantages.map(({ icon: Icon, title, text }) => <div className="industry-advantage" key={title}><Icon size={54} strokeWidth={1.55} /><div><b>{title}</b><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>
      <CTASection
        className="industries-cta"
        eyebrow="START A PROJECT"
        title={<>HAVE AN IDEA?<br /><span>LET&apos;S BUILD IT.</span></>}
        description="Tell us about your idea and we'll help turn it into a solid product people can use, trust and remember."
        secondaryLabel="TALK TO THE GARAGE"
      />
    </div>
  )
}
