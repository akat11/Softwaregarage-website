import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

// Illustrative only — see the on-screen note. Not live metrics or company claims.
const readouts = [
  { label: 'Tests Run', value: '48' },
  { label: 'Passed', value: '48' },
  { label: 'API Response', value: '200 OK' },
  { label: 'Performance', value: '1,240 req/s' },
  { label: 'Critical Bugs', value: '00' },
  { label: 'Regression', value: 'Passed' },
]

const chain = ['BUILD', '→', 'TEST', '→', 'BREAK', '→', 'FIX', '→', 'SHIP']

export default function TestConsole() {
  const rootRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const root = rootRef.current
      const bar = barRef.current
      if (!root || !bar) return

      if (reducedMotion) {
        gsap.set(bar, { width: '100%' })
        gsap.set('.console-line, .console-chain span', { opacity: 1, y: 0 })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: root, start: 'top 75%', once: true },
      })
      tl.to(bar, { width: '100%', duration: 1.3, ease: 'power2.inOut' })
        .from('.console-line', { opacity: 0, y: 10, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, '-=0.6')
        .from('.console-chain span', { opacity: 0.2, duration: 0.35, stagger: 0.2, ease: 'power1.out' }, '-=0.2')

      return () => {
        tl.scrollTrigger?.kill()
        tl.kill()
      }
    },
    { scope: rootRef, dependencies: [reducedMotion] }
  )

  return (
    <div className="test-console" ref={rootRef}>
      <div className="console-head">
        <span className="console-dot" aria-hidden="true" />
        TEST RUNNING...
      </div>
      <div className="console-progress">
        <div className="console-progress-bar" ref={barRef} />
      </div>
      <div className="console-grid">
        {readouts.map((r) => (
          <div className="console-line" key={r.label}>
            <span>{r.label}</span>
            <b>{r.value}</b>
          </div>
        ))}
      </div>
      <div className="console-chain">
        {chain.map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <p className="console-note">Illustrative UI demonstration — not live metrics or reported results.</p>
    </div>
  )
}
