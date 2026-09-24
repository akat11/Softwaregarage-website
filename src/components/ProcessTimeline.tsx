import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { processSteps } from '@/data/process'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export default function ProcessTimeline() {
  const listRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const list = listRef.current
      const bar = progressRef.current
      if (!list || !bar) return

      const items = Array.from(list.querySelectorAll<HTMLElement>('.process-item'))

      if (reducedMotion) {
        // Static, fully-visible fallback — no scroll-driven state.
        bar.style.height = '100%'
        items.forEach((el) => el.classList.add('is-active'))
        return
      }

      const st = ScrollTrigger.create({
        trigger: list,
        start: 'top 65%',
        end: 'bottom 65%',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress
          bar.style.height = `${progress * 100}%`
          const activeIndex = Math.min(items.length - 1, Math.floor(progress * items.length))
          items.forEach((el, i) => {
            el.classList.toggle('is-active', i === activeIndex)
            el.classList.toggle('is-done', i < activeIndex)
          })
        },
      })

      return () => st.kill()
    },
    { scope: listRef, dependencies: [reducedMotion] }
  )

  return (
    <div className="process-list" ref={listRef}>
      <div className="process-track" aria-hidden="true" />
      <div className="process-progress" ref={progressRef} aria-hidden="true" />
      {processSteps.map((p) => (
        <div className="process-item" key={p.step}>
          <div className="pn">{p.step}</div>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  )
}
