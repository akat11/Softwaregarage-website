import { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Applies a standard scroll-reveal to every `.reveal` and common repeating
 * card/row selectors inside the given container ref. Scoped with useGSAP,
 * so all tweens + ScrollTriggers created here are automatically reverted
 * (killed) when the component unmounts — this is what prevents duplicate
 * ScrollTriggers from piling up across route changes.
 */
export function useScrollReveals(containerRef: RefObject<HTMLElement>) {
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const root = containerRef.current
      if (!root || reducedMotion) return

      // Note: .process-item is intentionally excluded — ProcessTimeline owns
      // its own scroll-driven active/done opacity state, and a second GSAP
      // tween writing inline opacity here would fight it via style specificity.
      const targets = root.querySelectorAll(
        '.reveal, .journey-step, .principle, .service-row, .service-detail, .work-item, .qa-node, .stat, .industry-row, .case-section'
      )

      targets.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            // Once the reveal finishes, drop the inline transform GSAP leaves
            // behind — otherwise it out-specifies CSS :hover transforms (e.g.
            // .principle's hover lift) permanently after the first reveal.
            clearProps: 'transform',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  )
}
