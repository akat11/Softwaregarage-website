import { useEffect, useRef } from 'react'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * A very subtle radial light that tracks the cursor within the hero.
 * Pure CSS custom-property update on rAF — no layout thrash, no new
 * dependency. Renders nothing on touch devices or when the user prefers
 * reduced motion.
 */
export default function HeroGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return
    if (window.matchMedia('(max-width:900px)').matches) return

    let rafId = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const parent = el.parentElement
        if (!parent) return
        const rect = parent.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        el.style.setProperty('--gx', `${x}%`)
        el.style.setProperty('--gy', `${y}%`)
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [reducedMotion])

  if (reducedMotion) return null
  return <div className="hero-glow" ref={ref} aria-hidden="true" />
}
