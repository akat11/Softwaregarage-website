import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import { projects } from '@/data/projects'
import { useScrollReveals } from '@/hooks/useScrollReveals'

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  return (
    <div ref={containerRef}>
      <Seo
        title="Digital Product Portfolio | Software Garage"
        description="Selected work from Software Garage — editorial portfolio of product-first work in web, mobile, commerce and blockchain."
      />

      <section className="page-hero work-hero">
        <div className="container">
          <div className="eyebrow">PORTFOLIO</div>
          <h1>
            OUR<br />
            <span className="title-highlight">FEATURED WORK.</span>
          </h1>
          <p>
            A collection of impactful products we&apos;ve built
            <br />
            for clients across industries.
          </p>
        </div>
        <div className="work-hero-wireframe" aria-hidden="true" />
      </section>

      <section className="tight">
        <div className="container">
          <div className="work-list">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="work-item reveal"
                data-cursor="expand"
                data-cursor-label="VIEW PROJECT →"
              >
                <div className="wnum">
                  0{index + 1}
                  <span className="wnum-dot" />
                </div>
                <div className="work-item-content">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="work-action">
                  <span className="work-action-link">VIEW PROJECT ↗</span>
                  <span className="work-plus">+</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        className="work-cta"
        eyebrow="HAVE A PROJECT IN MIND?"
        title={
          <>
            LET&apos;S TURN YOUR<br />
            <span className="title-highlight">IDEA</span> INTO <span className="title-highlight">REALITY.</span>
          </>
        }
        description="Share your idea with us and we&apos;ll help you build a product people can love, trust and remember."
      />
    </div>
  )
}
