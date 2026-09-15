import { Link } from 'react-router-dom'
import SectionHeading from '@/components/SectionHeading'
import { projects } from '@/data/projects'

const showcaseProjects = [
  {
    ...projects[0],
    image: projects[0].image ?? 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...projects[1],
    image: projects[1].image ?? 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    ...projects[2],
    image: projects[2].image ?? 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
]

/**
 * Home-page-only "Selected Work" teaser. Deliberately NOT shared with /work
 * so that page keeps its current editorial list untouched.
 */
export default function SelectedWork() {
  return (
    <section id="work">
      <div className="container">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="SELECTED WORK"
          description="A sample of products we've shipped for clients across industries."
        />
      </div>

      <div className="showcase-wrapper">
        <div className="showcase-track">
          {showcaseProjects.map((p) => (
            <Link
              key={p.slug}
              to={`/work/${p.slug}`}
              className="showcase-panel"
              data-cursor="expand"
              data-cursor-label="VIEW PROJECT →"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(5,6,6,0.1), rgba(5,6,6,0.72)), url(${p.image})` }}
            >
              <div className="showcase-panel-inner">
                <span className="showcase-label">{p.category.split('•')[0].trim()}</span>
                <h3>{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="showcase-cta">
          <Link to="/work" className="btn-primary">
            VIEW WORK <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
