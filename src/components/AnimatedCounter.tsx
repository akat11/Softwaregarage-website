import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  value: number
  suffix?: string
  label: string
}

export default function AnimatedCounter({ value, suffix = '+', label }: Props) {
  const numRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = numRef.current
    if (!el) return

    const counter = { v: 0 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          v: value,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = Math.floor(counter.v) + suffix
          },
        })
      },
    })

    return () => st.kill()
  }, { scope: numRef, dependencies: [value, suffix] })

  return (
    <div className="stat">
      <div className="num" ref={numRef}>0</div>
      <div className="lbl">{label}</div>
    </div>
  )
}
