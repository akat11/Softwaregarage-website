import { useEffect, useRef } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Seo from '@/components/Seo'
import CTASection from '@/components/CTASection'
import MagneticButton from '@/components/MagneticButton'
import { getProjectBySlug, projects } from '@/data/projects'
import { useScrollReveals } from '@/hooks/useScrollReveals'

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveals(containerRef)

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(currentIndex + 1) % projects.length]

  return (
    <div ref={containerRef}>
      <Seo
        title={`${project.name} | Software Garage Case Study`}
        description={project.description}
      />

      <section className="case-hero">
        <div className="container case-hero-grid">
          <div className="case-hero-content">
            <button
              className="back-btn"
              onClick={() => navigate('/work')}
              aria-label="Back to projects"
            >
              ← BACK
            </button>

            <div
              className="eyebrow"
              style={{ marginTop: '20px' }}
            >
              {project.category.toUpperCase()}
            </div>

            <h1
              style={{
                fontSize: 'clamp(36px,5vw,64px)',
                marginTop: '18px',
                marginBottom: '16px',
              }}
            >
              {project.name}
            </h1>

            <p
              style={{
                maxWidth: '420px',
                color: 'var(--text-dim)',
                marginTop: '20px',
                fontSize: '15px',
                lineHeight: '1.6',
              }}
            >
              {project.description}
            </p>
          </div>

          <div className="case-hero-image">
            {project.image ? (
              <img
                className="case-study-image"
                src={project.image}
                alt={`${project.name} project showcase`}
              />
            ) : (
              <div className="case-image-placeholder">
                Project Showcase Image
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <div className="container">
        <div
          className="case-overview-section"
          style={{
            paddingTop: '60px',
            paddingBottom: '60px',
            borderTop: '1px solid var(--line)',
          }}
        >
          <div className="eyebrow">OVERVIEW</div>

          <p
            style={{
              marginTop: '20px',
              color: 'var(--text-dim)',
              fontSize: '15px',
              lineHeight: '1.7',
              maxWidth: '760px',
            }}
          >
            {String(project.overview)}
          </p>
        </div>
      </div>

      {/* Key Features */}
      {project.keyFeatures && project.keyFeatures.length > 0 && (
        <div className="container">
          <div
            className="case-features-section"
            style={{
              paddingTop: '60px',
              paddingBottom: '60px',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div className="eyebrow">KEY FEATURES</div>

            <div
              className="features-grid"
              style={{
                marginTop: '40px',
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '40px',
              }}
            >
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="feature-item"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        background: 'var(--lime)',
                        borderRadius: '50%',
                      }}
                    />

                    <h4
                      style={{
                        margin: 0,
                        fontSize: '16px',
                        fontWeight: 600,
                        color: 'var(--text)',
                      }}
                    >
                      {feature.title}
                    </h4>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      color: 'var(--text-dim)',
                      fontSize: '14px',
                      lineHeight: '1.6',
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Platforms */}
      {project.platforms && project.platforms.length > 0 && (
        <div className="container">
          <div
            className="case-platforms-section"
            style={{
              paddingTop: '60px',
              paddingBottom: '60px',
              borderTop: '1px solid var(--line)',
            }}
          >
            <div className="eyebrow">PLATFORM</div>

            <div
              className="platforms-grid"
              style={{
                marginTop: '40px',
                display: 'flex',
                gap: '60px',
                flexWrap: 'wrap',
              }}
            >
              {project.platforms.map((platform, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(183,255,0,0.1)',
                      border:
                        '1px solid rgba(183,255,0,0.2)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--lime)',
                      fontSize: '24px',
                    }}
                  >
                    {platform === 'Web App' && '🌐'}
                    {platform === 'Android App' && '🤖'}
                    {platform === 'iOS App' && '🍎'}
                  </div>

                  <span
                    style={{
                      color: 'var(--text-dim)',
                      fontSize: '14px',
                      fontWeight: 500,
                    }}
                  >
                    {platform}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Technology Stack */}
      {project.technology &&
        project.technology.length > 0 && (
          <div className="container">
            <div
              className="case-tech-section"
              style={{
                paddingTop: '60px',
                paddingBottom: '60px',
                borderTop: '1px solid var(--line)',
              }}
            >
              <div className="eyebrow">
                TECHNOLOGY STACK
              </div>

              <div
                className="tech-grid"
                style={{
                  marginTop: '40px',
                  display: 'flex',
                  gap: '24px',
                  flexWrap: 'wrap',
                }}
              >
                {project.technology.map((tech, idx) => (
                  <div
                    key={idx}
                    style={{
                      background:
                        'rgba(255,255,255,0.04)',
                      border:
                        '1px solid rgba(255,255,255,0.08)',
                      padding: '12px 20px',
                      borderRadius: '8px',
                      color: 'var(--text-dim)',
                      fontSize: '14px',
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      {/* Next Project */}
      <section className="tight">
        <div
          className="container"
          style={{
            borderTop: '1px solid var(--line)',
            paddingTop: '50px',
          }}
        >
          <div className="next-project-row">
            <div className="eyebrow">NEXT PROJECT</div>

            <MagneticButton
              to={`/work/${next.slug}`}
              variant="secondary"
              cursorLabel="VIEW PROJECT →"
            >
              {next.name} →
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        eyebrow="MAKE AN IMPACT"
        title={
          <>
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="text-lime">
              EXTRAORDINARY
            </span>{' '}
            TOGETHER.
          </>
        }
        description="From idea to impact — we build digital products that drive growth, engage users and create lasting value."
        showSecondaryButton={false}
        visualType="rocket"
      />
    </div>
  )
}