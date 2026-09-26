import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Keeps GSAP's ScrollTrigger in sync with the page's own native scrolling.
 *
 * This used to hand scrolling over to Lenis (a smooth-scroll library) and
 * drive it off the GSAP ticker. Lenis has to intercept and replay touch
 * input to fake momentum scrolling on phones, and that's exactly what kept
 * showing up as broken/unreliable scrolling on real mobile browsers after
 * deploy — desktop devtools' mobile emulation never catches it because it
 * still dispatches mouse/wheel events, not real touch ones. Native scrolling
 * is already smooth on every phone, so there's nothing left for a
 * smooth-scroll library to add on mobile, and removing it outright (rather
 * than trying to detect and skip it on touch) is the only way to be certain
 * it can never again be the cause of a scroll bug on any device.
 */
export function useScrollTriggerSync() {
  useEffect(() => {
    const onScroll = () => ScrollTrigger.update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
