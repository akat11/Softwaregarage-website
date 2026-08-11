import type { ReactNode } from 'react'
import MagneticButton from './MagneticButton'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Props {
  eyebrow?: string
  title?: ReactNode
  description?: string
  className?: string
}

export default function CTASection({
  eyebrow = 'START A PROJECT',
  title = "HAVE AN IDEA?\nLET'S BUILD IT.",
  description = "Tell us what you're building. We'll help turn the idea into a product people can use, trust and remember.",
  className,
}: Props) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className={`final-cta${className ? ` ${className}` : ''}`} id="contact-cta">
      <div className={`portal-glow${reducedMotion ? '' : ' breathe'}`} aria-hidden="true" />
      <div className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</div>
      <h2 style={{ whiteSpace: 'pre-line' }}>{title}</h2>
      <p>{description}</p>
      <div className="hero-ctas">
        <MagneticButton to="/contact" variant="primary" cursorLabel="LET'S TALK">
          START A PROJECT →
        </MagneticButton>
        <MagneticButton to="/contact" variant="secondary">
          TALK TO THE GARAGE →
        </MagneticButton>
      </div>
    </section>
  )
}
