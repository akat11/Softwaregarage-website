import {
  ArrowRight,
  Check,
  Settings,
  ShieldCheck,
  UsersRound,
  Zap,
} from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'

const highlights = [
  { icon: Settings, label: 'Real Business', detail: 'Use Cases' },
  { icon: UsersRound, label: 'Built by', detail: 'Experienced Engineers' },
  { icon: ShieldCheck, label: 'Secure & Scalable', detail: 'Architecture' },
  { icon: Zap, label: 'End-to-End', detail: 'Support' },
]

const assurances = [
  'No generic templates',
  'Custom to your business',
  'From prototype to production',
]

export default function AICaseStudyCTA() {
  return (
    <section className="cs-ai-cta-section" aria-labelledby="cs-ai-cta-title">
      <div className="container">
        <div className="cs-ai-cta">
          <div className="cs-ai-cta-visual">
            <img
              src="/ai-case-study-cta.jpg"
              alt="A custom business dashboard connected to secure, scalable AI tools"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <div className="cs-ai-cta-visual-note" aria-hidden="true">
              <span><Zap size={18} fill="currentColor" /></span>
              <span>
                <strong>Build Custom AI Agents</strong>
                <small>For your real workflows</small>
              </span>
            </div>
          </div>

          <div className="cs-ai-cta-content">
            <div className="cs-ai-cta-eyebrow">
              <span>YOUR AI PARTNER, FROM IDEA TO EXECUTION</span>
            </div>

            <h2 id="cs-ai-cta-title">
              We Build Custom AI Solutions
              <br />
              That <span>Actually Work for Your Business</span>
            </h2>

            <p className="cs-ai-cta-description">
              From AI agents to full product development, we design, build and deploy
              real-world AI solutions tailored to your goals — so you can save time,
              reduce costs and grow faster.
            </p>

            <div className="cs-ai-cta-highlights">
              {highlights.map(({ icon: Icon, label, detail }) => (
                <div className="cs-ai-cta-highlight" key={label}>
                  <Icon size={24} strokeWidth={1.7} aria-hidden="true" />
                  <span>
                    {label}
                    <strong>{detail}</strong>
                  </span>
                </div>
              ))}
            </div>

            <div className="cs-ai-cta-actions">
              <MagneticButton to="/contact" variant="primary" magnetic={false}>
                LET&apos;S BUILD YOUR AI SOLUTION <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton to="/contact" variant="secondary" magnetic={false}>
                SCHEDULE A FREE STRATEGY CALL <ArrowRight size={16} />
              </MagneticButton>
            </div>

            <ul className="cs-ai-cta-assurances">
              {assurances.map((assurance) => (
                <li key={assurance}>
                  <span><Check size={12} strokeWidth={3} /></span>
                  {assurance}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
