import { useEffect, useRef } from 'react'

/**
 * Global custom cursor. Reads [data-cursor] attributes on hovered elements:
 *   data-cursor="expand"          -> big ring
 *   data-cursor-label="VIEW PROJECT" -> shows a label pill next to the cursor
 * Disabled entirely on touch/narrow viewports (matches body.cursor:none media query).
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(max-width:900px)').matches
    if (isTouch) return

    const dot = dotRef.current
    const label = labelRef.current
    if (!dot || !label) return

    let mx = 0, my = 0, cx = 0, cy = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      label.style.left = mx + 'px'
      label.style.top = my - 40 + 'px'

      const target = (e.target as HTMLElement)?.closest?.('[data-cursor], a, button')
      if (target && target.hasAttribute('data-cursor')) {
        dot.classList.add('big')
        const labelText = target.getAttribute('data-cursor-label')
        if (labelText) {
          label.textContent = labelText
          label.style.opacity = '1'
        } else {
          label.style.opacity = '0'
        }
      } else {
        dot.classList.remove('big')
        label.style.opacity = '0'
      }
    }

    const loop = () => {
      cx += (mx - cx) * 0.2
      cy += (my - cy) * 0.2
      dot.style.left = cx + 'px'
      dot.style.top = cy + 'px'
      rafId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div id="cursor" ref={dotRef} />
      <div id="cursor-label" ref={labelRef} />
    </>
  )
}
