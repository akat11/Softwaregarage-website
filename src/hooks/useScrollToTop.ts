import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On every route change: if the URL has a hash (e.g. /services#web-development),
 * smoothly scroll to that element once it's mounted. Otherwise reset scroll to
 * the top, so a fresh page never inherits the previous page's scroll position.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick for the new page's DOM (and its ids) to be mounted.
      const id = hash.replace('#', '')
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
}
