import type { ReactNode } from 'react'
import MagneticButton from './MagneticButton'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Props {
  eyebrow?: string
  title?: ReactNode
  description?: string
  className?: string
  secondaryLabel?: string
  showSecondaryButton?: boolean
  visualType?: 'rocket' | 'lightbulb' | 'art'
}

export default function CTASection({
  eyebrow = 'START A PROJECT',
  title = "HAVE AN IDEA?\nLET'S BUILD IT.",
  description = "Tell us what you're building. We'll help turn the idea into a product people can use, trust and remember.",
  className,
  secondaryLabel = 'TALK TO THE GARAGE',
  showSecondaryButton = true,
  visualType,
}: Props) {
  const reducedMotion = usePrefersReducedMotion()

  return (
   <section
  className={`final-cta${className ? ` ${className}` : ''}${visualType === 'rocket' ? ' with-rocket' : ''}`}
  id="contact-cta"
>
  <div className={`portal-glow${reducedMotion ? '' : ' breathe'}`} aria-hidden="true" />

  {className?.includes('work-cta') && (
    <img
      className="work-cta-art"
      src="/work-cta-art.svg"
      alt=""
      aria-hidden="true"
    />
  )}

  {className?.includes('industries-cta') && (
    <img
      className="industries-cta-art"
      src="/industies.png"
      alt=""
      aria-hidden="true"
    />
  )}

  <div
    className={
      className?.includes('industries-cta')
        ? 'industries-cta-content'
        : undefined
    }
  >
    <div
      className="eyebrow"
      style={{
        justifyContent:
          className?.includes('industries-cta') ||
          className?.includes('work-cta') ||
          visualType === 'rocket'
            ? 'flex-start'
            : 'center',
      }}
    >
      {eyebrow}
    </div>

    <h2 style={{ whiteSpace: 'pre-line' }}>{title}</h2>

    <p>{description}</p>

    <div className="hero-ctas">
      <MagneticButton
        to="/contact"
        variant="primary"
      >
        START A PROJECT →
      </MagneticButton>

      {showSecondaryButton && (
        <MagneticButton to="/contact" variant="secondary">
          {secondaryLabel} →
        </MagneticButton>
      )}
    </div>
  </div>
</section>
  )
}
