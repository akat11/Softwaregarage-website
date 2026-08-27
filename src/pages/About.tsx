import { useRef } from 'react'
import { ArrowUpRight, CheckCircle2, ClipboardList, Code2, FlaskConical, Lightbulb, Rocket, ShieldCheck, Target, UsersRound, UserRound, BarChart3, Globe2, Search, Trophy, Clock3, BadgeCheck, Scaling, Headset } from 'lucide-react'
import Seo from '@/components/Seo'
import AnimatedCounter from '@/components/AnimatedCounter'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import '../styles/about.css'

const stats = [{ icon: Rocket, value: 15, suffix: '+', label: 'Projects Delivered' }, { icon: UserRound, value: 6, suffix: '+', label: 'Global Clients' }, { icon: Trophy, value: 100, suffix: '%', label: 'Client Satisfaction' }, { icon: Globe2, value: 10, suffix: '+', label: 'Industries Served' }]
const values = [{ icon: Lightbulb, title: 'Innovation', text: 'We embrace new ideas and emerging technologies to deliver smart, future-ready solutions.' }, { icon: ShieldCheck, title: 'Quality', text: 'We follow best practices and pay attention to every detail to ensure high-quality results.' }, { icon: UsersRound, title: 'Transparency', text: 'We believe in clear communication, honesty, and keeping our clients in the loop at every step.' }, { icon: Target, title: 'Results', text: 'We focus on outcomes that matter — driving growth, engagement, and real business impact.' }]
const process = [{ icon: Search, title: 'Discover', text: 'We understand your goals, challenges and audience.' }, { icon: ClipboardList, title: 'Plan', text: 'We create a strategic roadmap tailored to your needs.' }, { icon: Code2, title: 'Design & Build', text: 'We design and develop powerful, scalable and user-friendly solutions.' }, { icon: FlaskConical, title: 'Test', text: 'We test rigorously to ensure performance, security and reliability.' }, { icon: Rocket, title: 'Launch', text: 'We deploy your solution with precision for a seamless launch.' }, { icon: BarChart3, title: 'Grow', text: 'We support and scale your product as your business grows.' }]
const commitments = [{ icon: Clock3, title: 'On-Time', text: 'Delivery' }, { icon: BadgeCheck, title: 'Quality', text: 'Assured' }, { icon: Scaling, title: 'Scalable', text: 'Solutions' }, { icon: Headset, title: 'Dedicated', text: 'Support' }]

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)
  return <div ref={containerRef} className="about-reference">
    <Seo title="About Software Garage | Digital Technology Studio" description="Software Garage is a digital technology studio that builds high-impact digital solutions." />
    <section className="about-ref-wrap"><div className="container about-ref-container">
      <header className="about-ref-hero"><div><div className="eyebrow">ABOUT US</div><h1>WE BUILD<br />DIGITAL SOLUTIONS<br /><span>THAT DRIVE REAL IMPACT.</span></h1><p>At Software Garage, we combine strategy, design, and technology to craft digital experiences that help businesses grow, scale and lead in a fast-changing digital world.</p></div><div className="about-office"><img src="/about-hero-office.png" alt="Software Garage team in a studio meeting" /></div></header>
      <div className="about-ref-stats">{stats.map(({ icon: Icon, value, suffix, label }) => <div key={label}><span><Icon size={24} /></span><AnimatedCounter value={value} suffix={suffix} label={label} /></div>)}</div>
      <div className="about-ref-grid"><div className="about-who"><h2>WHO <span>WE ARE</span></h2><p>We are a team of creative thinkers, designers, developers, and problem solvers who turn ideas into powerful digital products.</p><p>From startups to established enterprises, we partner with businesses of all sizes to turn their vision into scalable, future-ready solutions.</p><b><span className="about-target-icon"><Target size={42} /><ArrowUpRight size={20} /></span> WE DON'T JUST BUILD WEBSITES OR APPS.<br /><span>WE BUILD </span><em>SOLUTIONS </em><span>THAT</span><em> SOLVE REAL BUSINESS PROBLEMS.</em></b></div><div className="about-values"><h2>OUR <span>VALUES</span></h2>{values.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={46} strokeWidth={1.55} /><div><b>{title}</b><p>{text}</p></div></article>)}</div></div>
      <section className="about-ref-process"><h2>OUR <span>PROCESS</span></h2><p>A proven process that ensures clarity, quality and successful delivery.</p><div>{process.map(({ icon: Icon, title, text }, index) => <article key={title}><span><Icon size={34} strokeWidth={1.65} /></span><i>{String(index + 1).padStart(2, '0')}</i><b>{title}</b><p>{text}</p></article>)}</div></section>
      <section className="about-bottom"><article className="about-why"><h2>WHY CHOOSE <span>SOFTWARE GARAGE?</span></h2><div><img src="/industry-sg-hero.png" alt="SG cube" /><ul><li><CheckCircle2 /><div><b>Business-Focused Approach</b><small>We align technology with your business goals.</small></div></li><li><CheckCircle2 /><div><b>End-to-End Expertise</b><small>Strategy, design, development, testing and support — all under one roof.</small></div></li><li><CheckCircle2 /><div><b>Agile & Transparent</b><small>Flexible process, clear communication and complete transparency.</small></div></li><li><CheckCircle2 /><div><b>Future-Ready Solutions</b><small>We build scalable, secure and innovative solutions that grow with your business.</small></div></li></ul></div></article><article className="about-mission"><h2>OUR <span>MISSION</span></h2><img className="mission-art" src="/mission-mountain.png" alt="Mountain peak with a flag" /><p>To help businesses unlock their full potential through innovative digital solutions that <em>create value, build trust and drive growth.</em></p></article><article className="about-vision"><h2>OUR <span>VISION</span></h2><img className="vision-art" src="/vision-eye.png" alt="Glowing eye illustration" /><p>To be a digital solutions company recognized for innovation, <em>reliability</em> and delivering <em>impact that lasts.</em></p></article></section>
    </div></section>

    <section className="about-final-cta">
      <div className="about-final-cta-content">
        <h2>LET&apos;S BUILD<br />SOMETHING GREAT<br /><span>TOGETHER.</span></h2>
        <div className="about-final-cta-copy">
          <p>Have an idea or a project in mind?<br />Let&apos;s turn it into a powerful digital product<br />people love to use.</p>
          <div className="about-final-cta-actions">
            <a className="about-cta-primary" href="/contact">START A PROJECT <ArrowUpRight size={18} /></a>
            <a className="about-cta-secondary" href="/contact">TALK TO THE GARAGE <ArrowUpRight size={18} /></a>
          </div>
        </div>
        <div className="about-final-cta-commitments">
          {commitments.map(({ icon: Icon, title, text }) => <div key={title}>
            <Icon size={40} strokeWidth={1.35} />
            <span>{title}<br />{text}</span>
          </div>)}
        </div>
      </div>
    </section>
  </div>
}
