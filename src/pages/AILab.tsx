import { useRef, type CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'
import Seo from '@/components/Seo'
import { pageMeta } from '@/data/seo'
import {
  type HeroCardPos,
  aiCaseStudies,
  aiHeroCards,
  aiIndustries,
  aiProcess,
  aiSolutions,
  aiTesting,
  aiValueSteps,
} from '@/data/aiLab'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import '../styles/ai-lab.css'

function cardVars(pos: HeroCardPos) {
  return {
    '--d-top': pos.top,
    '--d-left': pos.left ?? 'auto',
    '--d-right': pos.right ?? 'auto',
    '--m-top': pos.mTop,
    '--m-left': pos.mLeft ?? 'auto',
    '--m-right': pos.mRight ?? 'auto',
  } as CSSProperties
}

export default function AILab() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef} className="ai-lab">
      <Seo meta={pageMeta.aiLab} />

      <section className="ai-hero">
        <div className="container ai-hero-grid">
          <div className="ai-hero-copy">
            <div className="ai-eyebrow">
              <span className="ai-eyebrow-dot" />
              AI LAB
            </div>

            <h1>
              BUILD WITH <span className="text-lime">AI.</span>
              <br />
              AUTOMATE WHAT <span className="text-lime">MATTERS.</span>
            </h1>

            <p>
              We design and develop intelligent applications, AI agents and
              automated workflows that solve real business problems and create
              measurable impact.
            </p>

            <div className="ai-hero-ctas">
              <MagneticButton to="/contact" variant="primary">
                Explore AI Solutions <ArrowRight size={16} />
              </MagneticButton>
              <MagneticButton to="/contact" variant="secondary">
                Talk to an AI Expert
              </MagneticButton>
            </div>
          </div>

          <div className="ai-hero-visual">
            <img src="/journey-ai.png" alt="Futuristic AI interface with a human-like face and floating dashboards" />
            {aiHeroCards.map(({ title, sub, icon: Icon, pos }) => (
              <div className="ai-float-card" style={cardVars(pos)} key={title}>
                <span className="ai-float-icon">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <b>{title}</b>
                  <small>{sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="ai-section container">
        <div className="ai-section-head">
          <div>
            <div className="ai-eyebrow small">OUR AI SOLUTIONS</div>
            <h2>What We Build</h2>
            <p>From AI agents to custom AI solutions, we build practical AI systems that integrate with your business and deliver measurable value.</p>
          </div>
        </div>
        <div className="ai-card-grid four">
          {aiSolutions.map(({ title, text, icon: Icon }, i) => (
            <article className="ai-card reveal" key={title}>
              <div className="ai-card-top">
                <span className="ai-card-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <span className="ai-card-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="ai-card-arrow" aria-hidden="true">→</span>
            </article>
          ))}
        </div>
      </section>


      <section className="ai-section container">
        <div className="ai-section-head">
          <div>
            <div className="ai-eyebrow small">FROM IDEA TO IMPACT</div>
            <h2>How AI Creates Value</h2>
            <p>We combine AI, automation and your business data to build systems that understand, decide and take action.</p>
          </div>
        </div>
        <div className="ai-flow">
          {aiValueSteps.map(({ title, text, icon: Icon }, i) => (
            <div className="ai-flow-item reveal" key={title}>
              <article className="ai-flow-card">
                <span className="ai-card-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
              {i < aiValueSteps.length - 1 && <span className="ai-flow-arrow" aria-hidden="true">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="ai-section container">
        <div className="ai-section-head">
          <div>
            <div className="ai-eyebrow small">INDUSTRIES WE SERVE</div>
            <h2>AI Solutions for Every Industry</h2>
            <p>We build AI-powered solutions tailored to industry-specific challenges and opportunities.</p>
          </div>
        </div>
        <div className="ai-card-grid four">
          {aiIndustries.map(({ title, text, icon: Icon }) => (
            <article className="ai-card reveal" key={title}>
              <span className="ai-card-icon">
                <Icon size={20} strokeWidth={1.6} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-section container">
        <div className="ai-section-head">
          <div>
            <div className="ai-eyebrow small">INDUSTRIES. REAL RESULTS.</div>
            <h2>Featured AI Case Studies</h2>
          </div>
        </div>
        <div className="ai-card-grid three">
          {aiCaseStudies.map(({ title, tag, text, icon: Icon }) => (
            <article className="ai-case reveal" key={title}>
              <div className="ai-case-visual">
                <Icon size={44} strokeWidth={1.3} />
              </div>
              <div className="ai-case-body">
                <div className="ai-case-head">
                  <h3>{title}</h3>
                  <span className="ai-case-tag">{tag}</span>
                </div>
                <p>{text}</p>
                <span className="ai-demo-link">View Case Study <ArrowRight size={14} /></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-section container ai-testing">
        <div className="ai-testing-copy">
          <div className="ai-eyebrow small">BUILT. TESTED. RELIABLE.</div>
          <h2>We Don&apos;t Just Build AI. We Test It.</h2>
          <p>Our QA and testing expertise ensures AI applications are accurate, secure, scalable and reliable in real-world scenarios.</p>
          <div className="ai-card-grid two">
            {aiTesting.map(({ title, text, icon: Icon }) => (
              <article className="ai-card compact reveal" key={title}>
                <span className="ai-card-icon">
                  <Icon size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="ai-testing-visual">
          <img src="/qa-testing-visual.png" alt="AI testing dashboard with passing test results" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="ai-section container">
        <div className="ai-section-head">
          <div>
            <div className="ai-eyebrow small">A CLEAR AND COLLABORATIVE PROCESS</div>
            <h2>Our AI Development Process</h2>
          </div>
        </div>
        <ol className="ai-process">
          {aiProcess.map(({ title, text, icon: Icon }, i) => (
            <li className="ai-process-step reveal" key={title}>
              <span className="ai-process-icon">
                <Icon size={22} strokeWidth={1.6} />
              </span>
              <span className="ai-process-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="ai-final container">
        <div className="ai-final-card">
          <div className="ai-eyebrow small">LET&apos;S BUILD TOGETHER</div>
          <h2>
            Ready to Build Something
            <br />
            <span className="text-lime">Intelligent?</span>
          </h2>
          <p>Let&apos;s discuss how AI can help you automate, scale and create real business impact.</p>
          <div className="ai-hero-ctas">
            <MagneticButton to="/contact" variant="primary">
              Start an AI Project <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton to="/contact" variant="secondary">
              Schedule a Call
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  )
}
