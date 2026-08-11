import { useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import MagneticButton from '@/components/MagneticButton'
import { getProjectBySlug, projects, type Project } from '@/data/projects'
import { useScrollReveals } from '@/hooks/useScrollReveals'

const sections: Array<{ key: keyof Project; num: string; label: string }> = [
  { key: 'overview', num: '01', label: 'Overview' },
  { key: 'challenge', num: '02', label: 'Challenge' },
  { key: 'approach', num: '03', label: 'Approach' },
  { key: 'design', num: '04', label: 'Design' },
  { key: 'development', num: '05', label: 'Development' },
  { key: 'testing', num: '06', label: 'Testing' },
  { key: 'outcome', num: '07', label: 'Outcome' },
]

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  const project = slug ? getProjectBySlug(slug) : undefined
  if (!project) return <Navigate to="/404" replace />

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <div ref={containerRef}>
      <Seo
        title={`${project.name} | Software Garage Case Study`}
        description={project.description}
      />

      <section className="case-hero">
        <div className="container">
          <div className="eyebrow">{project.category.toUpperCase()}</div>
          <h1 style={{ fontSize: 'clamp(36px,6.5vw,84px)', marginTop: '18px' }}>{project.name}</h1>
          <p style={{ maxWidth: '520px', color: 'var(--text-dim)', marginTop: '20px' }}>{project.description}</p>
          {project.isPlaceholder && (
            <div className="placeholder-note">PLACEHOLDER CONTENT — replace with verified project detail</div>
          )}
          <div className="case-meta-row">
            <div>Type<strong>{project.type}</strong></div>
            <div>Category<strong>{project.category}</strong></div>
            <div>Technology<strong>{project.technology.join(', ')}</strong></div>
          </div>
        </div>
      </section>

      <div className="container">
        {sections.map((s) => (
          <div className="case-section reveal" key={s.num}>
            <div>
              <div className="snum">{s.num}</div>
              <h3>{s.label}</h3>
            </div>
            <p>{String(project[s.key])}</p>
          </div>
        ))}
      </div>

      <section className="tight">
        <div className="container" style={{ borderTop: '1px solid var(--line)', paddingTop: '50px' }}>
          <div className="eyebrow">NEXT PROJECT</div>
          <MagneticButton to={`/work/${next.slug}`} variant="secondary" cursorLabel="VIEW PROJECT →">
            {next.name} →
          </MagneticButton>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
