import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionHeading from '@/components/SectionHeading'
import { projects } from '@/data/projects'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * Home-page-only "Selected Work" showcase. Deliberately NOT shared with
 * /work (see project notes) — that page keeps its current simple editorial
 * list untouched.
 *
 * Desktop (>=900px): pinned section, vertical scroll drives horizontal
 * translation through project panels (gsap.matchMedia, scoped + reverted
 * automatically on unmount/breakpoint change).
 * Mobile / reduced-motion: the exact same markup renders as a normal
 * stacked, vertically-scrolling list — no pin, no hijacked touch scroll.
 *
 * No real project screenshots exist in the repo yet, so each panel uses an
 * abstract, brand-consistent visual (grid pattern + category tag + initials
 * mark) rather than a fabricated screenshot. Swap `.showcase-visual`'s
 * children for a real <img> per project once assets are available.
 */
export default function SelectedWork() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion) return
      const wrapper = wrapperRef.current
      const track = trackRef.current
      if (!wrapper || !track) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 900px)', () => {
        const getDistance = () => track.scrollWidth - wrapper.offsetWidth
        const tween = gsap.to(track, {
          x: () => -Math.max(0, getDistance()),
          ease: 'none',
          scrollTrigger: {
            trigger: wrapper,
            start: 'top top',
            end: () => `+=${Math.max(0, getDistance())}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })

        // gsap.matchMedia expects the cleanup function returned here.
        return () => {
          tween.scrollTrigger?.kill()
          tween.kill()
        }
      })

      return () => mm.revert()
    },
    { scope: wrapperRef, dependencies: [reducedMotion] }
  )

  return (
    <section id="work">
      <div className="container">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="SELECTED WORK"
          description="A sample of products we've shipped for clients across industries."
        />
      </div>

      <div className={`showcase-wrapper${reducedMotion ? ' no-motion' : ''}`} ref={wrapperRef}>
        <div className="showcase-track" ref={trackRef}>
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="showcase-panel"
              data-cursor="expand"
              data-cursor-label="VIEW PROJECT →"
            >
              <div className="showcase-visual" role="img" aria-label={`${p.name} — abstract project visual`}>
                <span className="showcase-visual-tag">{p.category.toUpperCase()}</span>
                <span className="showcase-visual-mark" aria-hidden="true">
                  {p.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div className="showcase-meta">
                <div className="showcase-num">0{i + 1}</div>
                <h3>{p.name}</h3>
                <div className="showcase-type">{p.type}</div>
                <p className="showcase-desc">{p.description}</p>
                <div className="showcase-tags">
                  {p.technology.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="showcase-arrow">VIEW PROJECT →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
