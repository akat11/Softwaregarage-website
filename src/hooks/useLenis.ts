import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocation } from 'react-router-dom'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Drives Lenis smooth scrolling off the GSAP ticker so Lenis and
 * ScrollTrigger stay perfectly in sync (the standard integration pattern
 * recommended by both libraries' docs). Fully torn down on unmount so no
 * stray rAF loop or ScrollTrigger listener survives route changes.
 */
export function useLenis() {
  const reducedMotion = usePrefersReducedMotion()
  const lenisRef = useRef<Lenis | null>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const tick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(tick)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [reducedMotion])

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [pathname])
}
