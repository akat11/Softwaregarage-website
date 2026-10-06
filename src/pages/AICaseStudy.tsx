import { useEffect, useState, useRef } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Clock,
  Activity,
  FileCheck,
  Calendar,
  Users,
  Sliders,
  Briefcase,
  GraduationCap,
  HeartPulse,
  BookOpen,
  FileQuestion,
  ListChecks,
  PenTool,
  ShieldAlert,
  Cpu,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  BarChart3,
  Bot,
} from 'lucide-react'
import MagneticButton from '@/components/MagneticButton'
import Seo from '@/components/Seo'
import { getAiCaseStudyMeta } from '@/data/seo'
import { aiCaseStudiesData, type CaseStudyData } from '@/data/aiCaseStudies'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import CaseStudyInteractiveDemo from '@/components/case-study/CaseStudyInteractiveDemo'
import '@/styles/ai-case-study.css'

export default function AICaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  const [activeSection, setActiveSection] = useState<string>('challenge')
  const [scrollPercent, setScrollPercent] = useState<number>(0)

  const data: CaseStudyData | undefined = slug ? aiCaseStudiesData[slug] : undefined

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100)))
      }

      const sections = ['challenge', 'solution', 'workflow', 'capabilities', 'impact']
      const scrollPosition = window.scrollY + 180

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!data) {
    return <Navigate to="/404" replace />
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const navOffset = window.innerWidth <= 768 ? 96 : 130
      const y = el.getBoundingClientRect().top + window.scrollY - navOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Handwritten note text per project
  const handwrittenHeroNotes: Record<string, string> = {
    'schoolspine-ai': 'From a topic to a complete assessment in seconds',
    'ai-payroll-automation': 'From raw time logs to verified salary in minutes',
    'ai-hospital-roster': 'From complex shift rules to balanced rosters in seconds',
  }

  return (
    <div ref={containerRef} className="cs-page">
      <Seo
        meta={
          getAiCaseStudyMeta(data.slug) ?? {
            path: data.route,
            title: data.seo.title,
            description: data.seo.description,
            keywords: data.seo.keywords,
            crumb: data.metadata.domain,
            type: 'article',
          }
        }
      />

      {/* Sticky Sub-Navigation */}
      <div className="cs-sticky-nav-wrap">
        <div className="container cs-sticky-nav">
          <div className="cs-nav-left">
            <Link to="/ai-lab" className="cs-nav-back">
              <ArrowLeft size={13} />
              <span>All Case Studies</span>
            </Link>
            <span className="cs-badge-category">{data.tag}</span>
          </div>

          <nav className="cs-nav-links" aria-label="Case Study Sections">
            <button
              type="button"
              className={`cs-nav-link ${activeSection === 'challenge' ? 'active' : ''}`}
              onClick={() => scrollToSection('challenge')}
            >
              Challenge
            </button>
            <button
              type="button"
              className={`cs-nav-link ${activeSection === 'solution' ? 'active' : ''}`}
              onClick={() => scrollToSection('solution')}
            >
              Solution
            </button>
            <button
              type="button"
              className={`cs-nav-link ${activeSection === 'workflow' ? 'active' : ''}`}
              onClick={() => scrollToSection('workflow')}
            >
              Workflow
            </button>
            <button
              type="button"
              className={`cs-nav-link ${activeSection === 'capabilities' ? 'active' : ''}`}
              onClick={() => scrollToSection('capabilities')}
            >
              Capabilities
            </button>
            <button
              type="button"
              className={`cs-nav-link ${activeSection === 'impact' ? 'active' : ''}`}
              onClick={() => scrollToSection('impact')}
            >
              Impact
            </button>
          </nav>
        </div>

        <div className="cs-scroll-track" aria-hidden="true">
          <div className="cs-scroll-bar" style={{ width: `${scrollPercent}%` }} />
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="cs-hero">
        <div className="container cs-hero-grid">
          {/* Hero Left */}
          <div className="cs-hero-left">
            <div className="cs-hero-eyebrow-row reveal">
              <span className="cs-pill-badge">{data.eyebrow}</span>
              <span className="cs-handwritten-note">
                {handwrittenHeroNotes[data.slug] ?? 'Intelligence layer for production'}
              </span>
            </div>

            <h1 className="reveal">
              {data.headline}
              <span className="cs-hero-highlight">{data.headlineHighlight}</span>
            </h1>

            <p className="cs-hero-desc reveal">{data.description}</p>

            {/* Metadata Pills */}
            <div className="cs-hero-meta-row reveal">
              <div className="cs-meta-pill">
                <div className="cs-meta-icon">
                  <Briefcase size={16} />
                </div>
                <div className="cs-meta-col">
                  <span>DOMAIN</span>
                  <span>{data.metadata.domain}</span>
                </div>
              </div>

              <div className="cs-meta-pill">
                <div className="cs-meta-icon">
                  <Cpu size={16} />
                </div>
                <div className="cs-meta-col">
                  <span>AI TYPE</span>
                  <span>{data.metadata.aiType}</span>
                </div>
              </div>

              <div className="cs-meta-pill">
                <div className="cs-meta-icon">
                  <Sparkles size={16} />
                </div>
                <div className="cs-meta-col">
                  <span>{data.metadata.statusOrProductLabel}</span>
                  <span>{data.metadata.statusOrProduct}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right: 3D Perspective SaaS Mockup Window */}
          <div className="cs-hero-mockup-wrapper reveal">
            <div className="cs-hero-mockup-3d">
              {/* Window Bar */}
              <div className="cs-window-topbar">
                <div className="cs-window-controls">
                  <span className="cs-control-dot red" />
                  <span className="cs-control-dot yellow" />
                  <span className="cs-control-dot green" />
                </div>
                <div className="cs-window-title">
                  {data.slug === 'schoolspine-ai' && 'SchoolSpine AI · Assessment Suite'}
                  {data.slug === 'ai-payroll-automation' && 'Payroll Control Center · Live Pipeline'}
                  {data.slug === 'ai-hospital-roster' && 'AI Hospital Roster · Acute Care Engine'}
                </div>
                <div className="cs-window-live-pill">
                  <span className="cs-pulse-dot" />
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* 3-Column SaaS Application Layout */}
              <div className="cs-app-layout">
                {/* 1. App Sidebar */}
                <div className="cs-app-sidebar">
                  <div className="cs-sidebar-brand">
                    {data.slug === 'schoolspine-ai' && <GraduationCap size={18} />}
                    {data.slug === 'ai-payroll-automation' && <Briefcase size={18} />}
                    {data.slug === 'ai-hospital-roster' && <HeartPulse size={18} />}
                  </div>

                  {data.slug === 'schoolspine-ai' && (
                    <>
                      <div className="cs-sidebar-item">
                        <BarChart3 size={14} />
                        <span>Dash</span>
                      </div>
                      <div className="cs-sidebar-item">
                        <BookOpen size={14} />
                        <span>Class</span>
                      </div>
                      <div className="cs-sidebar-item active">
                        <Sparkles size={14} />
                        <span>Assess</span>
                      </div>
                      <div className="cs-sidebar-item">
                        <Users size={14} />
                        <span>Student</span>
                      </div>
                    </>
                  )}

                  {data.slug === 'ai-payroll-automation' && (
                    <>
                      <div className="cs-sidebar-item">
                        <BarChart3 size={14} />
                        <span>Dash</span>
                      </div>
                      <div className="cs-sidebar-item">
                        <Clock size={14} />
                        <span>Punch</span>
                      </div>
                      <div className="cs-sidebar-item active">
                        <Cpu size={14} />
                        <span>Engine</span>
                      </div>
                      <div className="cs-sidebar-item">
                        <FileCheck size={14} />
                        <span>Audit</span>
                      </div>
                    </>
                  )}

                  {data.slug === 'ai-hospital-roster' && (
                    <>
                      <div className="cs-sidebar-item">
                        <BarChart3 size={14} />
                        <span>Dash</span>
                      </div>
                      <div className="cs-sidebar-item">
                        <Users size={14} />
                        <span>Staff</span>
                      </div>
                      <div className="cs-sidebar-item active">
                        <Activity size={14} />
                        <span>Roster</span>
                      </div>
                      <div className="cs-sidebar-item">
                        <ShieldAlert size={14} />
                        <span>Rules</span>
                      </div>
                    </>
                  )}
                </div>

                {/* 2. App Center Config Form */}
                <div className="cs-app-center">
                  <div className="cs-app-heading">
                    {data.slug === 'schoolspine-ai' && <span>AI Assessment Builder</span>}
                    {data.slug === 'ai-payroll-automation' && <span>Payroll Control Center</span>}
                    {data.slug === 'ai-hospital-roster' && <span>AI Roster Agent</span>}
                  </div>

                  {data.slug === 'schoolspine-ai' && (
                    <>
                      <div className="cs-form-group">
                        <span className="cs-form-label">Class</span>
                        <div className="cs-form-input-box">
                          <span>Grade 8</span>
                          <span style={{ fontSize: '10px', color: 'var(--cs-text-dim)' }}>▾</span>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Subject & Topic</span>
                        <div className="cs-form-input-box">
                          <span>Science · Force & Pressure</span>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Difficulty</span>
                        <div className="cs-form-pills">
                          <div className="cs-pill-choice">Easy</div>
                          <div className="cs-pill-choice active">Medium</div>
                          <div className="cs-pill-choice">Hard</div>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Questions & Type</span>
                        <div className="cs-form-input-box">
                          <span>20 Questions · Mixed</span>
                        </div>
                      </div>

                      <button type="button" className="cs-btn-generate-main">
                        <Sparkles size={12} />
                        <span>Generate Assessment</span>
                      </button>
                    </>
                  )}

                  {data.slug === 'ai-payroll-automation' && (
                    <>
                      <div className="cs-form-group">
                        <span className="cs-form-label">Billing Cycle</span>
                        <div className="cs-form-input-box">
                          <span>October 2026 (Monthly)</span>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Total Employees</span>
                        <div className="cs-form-input-box">
                          <span>248 Enrolled Staff</span>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Engine Mode</span>
                        <div className="cs-form-pills">
                          <div className="cs-pill-choice">Standard</div>
                          <div className="cs-pill-choice active">Strict Audit</div>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Reconciliation Stream</span>
                        <div className="cs-form-input-box">
                          <span>Biometrics + Approved Leaves</span>
                        </div>
                      </div>

                      <button type="button" className="cs-btn-generate-main">
                        <Cpu size={12} />
                        <span>Run Payroll Engine</span>
                      </button>
                    </>
                  )}

                  {data.slug === 'ai-hospital-roster' && (
                    <>
                      <div className="cs-form-group">
                        <span className="cs-form-label">Department</span>
                        <div className="cs-form-input-box">
                          <span>Emergency Department</span>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Rotation Cycle</span>
                        <div className="cs-form-input-box">
                          <span>7 Days · 32 Staff</span>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Shift Coverage</span>
                        <div className="cs-form-pills">
                          <div className="cs-pill-choice active">Morning</div>
                          <div className="cs-pill-choice active">Evening</div>
                          <div className="cs-pill-choice active">Night</div>
                        </div>
                      </div>

                      <div className="cs-form-group">
                        <span className="cs-form-label">Constraint Engine</span>
                        <div className="cs-form-input-box">
                          <span>11h Rest Interval Enforced</span>
                        </div>
                      </div>

                      <button type="button" className="cs-btn-generate-main">
                        <Activity size={12} />
                        <span>Solve Constraints</span>
                      </button>
                    </>
                  )}
                </div>

                {/* 3. App Right Assistant Panel */}
                <div className="cs-app-assistant">
                  <div className="cs-assistant-header">
                    <Sparkles size={12} style={{ color: 'var(--cs-lime)' }} />
                    <span>AI Assistant</span>
                  </div>

                  <div className="cs-step-checklist">
                    {data.slug === 'schoolspine-ai' && (
                      <>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Parsing Syllabus</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Bloom's Taxonomy Map</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Distractor Balancing</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Answer Key Verifier</span>
                        </div>
                      </>
                    )}

                    {data.slug === 'ai-payroll-automation' && (
                      <>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Biometrics Sync</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Leave Records Mapped</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Half-Day Detected</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Exception Flags Set</span>
                        </div>
                      </>
                    )}

                    {data.slug === 'ai-hospital-roster' && (
                      <>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>11h Rest Validated</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Max 3 Night Shifts</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Specialist Ratio Met</span>
                        </div>
                        <div className="cs-check-item done">
                          <span className="dot">✓</span>
                          <span>Fatigue Risk: 0</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="cs-ai-orb-box">
                    <div className="cs-ai-orb" />
                    <div className="cs-ai-orb-text">
                      Neural solver active
                      <br />
                      Latency: 142ms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 1: THE PROBLEM */}
      <section id="challenge" className="cs-section">
        <div className="container">
          {/* Split Top: Text + 3D Luminous Graphic */}
          <div className="cs-problem-split">
            <div>
              <div className="cs-section-head-top">
                <span className="cs-pill-badge">{data.problem.eyebrow}</span>
              </div>
              <h2 className="reveal">{data.problem.headline}</h2>
              <p className="cs-section-body reveal">{data.problem.body}</p>
            </div>

            {/* 3D Luminous Tech Book / Circuit Graphic */}
            <div className="cs-problem-visual-wrap reveal">
              <svg className="cs-circuit-svg" viewBox="0 0 400 240" fill="none">
                <circle cx="200" cy="120" r="85" stroke="rgba(183, 255, 0, 0.15)" strokeWidth="1" />
                <circle
                  cx="200"
                  cy="120"
                  r="60"
                  stroke="rgba(183, 255, 0, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <circle cx="200" cy="120" r="105" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                <path d="M40 120 H140" stroke="rgba(183, 255, 0, 0.3)" strokeWidth="1" />
                <path d="M260 120 H360" stroke="rgba(183, 255, 0, 0.3)" strokeWidth="1" />
                <circle cx="60" cy="120" r="4" fill="#b7ff00" />
                <circle cx="340" cy="120" r="4" fill="#b7ff00" />
              </svg>

              <div className="cs-tech-symbol-hub">
                <div className="cs-center-cube">
                  {data.slug === 'schoolspine-ai' && <BookOpen size={34} />}
                  {data.slug === 'ai-payroll-automation' && <Clock size={34} />}
                  {data.slug === 'ai-hospital-roster' && <HeartPulse size={34} />}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Problem Cards */}
          <div className="cs-grid-problem">
            {data.problem.cards.map((c) => {
              const Icon = c.icon || AlertCircle
              return (
                <article className="cs-card-premium reveal" key={c.title}>
                  <div className="cs-card-icon-box">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: THE AI SOLUTION / INTELLIGENCE LAYER */}
      <section id="solution" className="cs-section">
        <div className="container cs-solution-split">
          {/* Left Text */}
          <div>
            <div className="cs-section-head-top">
              <span className="cs-pill-badge">THE AI SOLUTION</span>
            </div>
            <h2 className="reveal">
              {data.intelligenceLayer.headline}
              <span className="cs-statement-highlight">
                {data.intelligenceLayer.highlightStatement}
              </span>
            </h2>
            <p className="cs-section-body reveal">{data.intelligenceLayer.body}</p>
          </div>

          {/* Right: Architecture Node Graph */}
          <div className="cs-solution-graph-wrap reveal">
            {/* Top Inputs */}
            <div className="cs-node-inputs-row">
              {data.slug === 'schoolspine-ai' && (
                <>
                  <span className="cs-node-input-pill">Class: Grade 8</span>
                  <span className="cs-node-input-pill">Subject: Science</span>
                  <span className="cs-node-input-pill">Topic: Force & Pressure</span>
                  <span className="cs-node-input-pill">Difficulty: Medium</span>
                  <span className="cs-node-input-pill">Type: Mixed</span>
                </>
              )}
              {data.slug === 'ai-payroll-automation' && (
                <>
                  <span className="cs-node-input-pill">Attendance Punch</span>
                  <span className="cs-node-input-pill">Approved Leaves</span>
                  <span className="cs-node-input-pill">Working Calendar</span>
                  <span className="cs-node-input-pill">Salary Rules</span>
                </>
              )}
              {data.slug === 'ai-hospital-roster' && (
                <>
                  <span className="cs-node-input-pill">Hospital Rules</span>
                  <span className="cs-node-input-pill">Staff Matrix</span>
                  <span className="cs-node-input-pill">Shift Demand</span>
                  <span className="cs-node-input-pill">Leave Requests</span>
                </>
              )}
            </div>

            {/* Central Engine Hub */}
            <div className="cs-graph-hub-box">
              <span style={{ color: 'var(--cs-lime)', fontSize: '18px' }}>↓</span>
              <div className="cs-hub-badge">
                <Sparkles size={16} />
                <span>
                  {data.slug === 'schoolspine-ai' && 'SchoolSpine AI'}
                  {data.slug === 'ai-payroll-automation' && 'AI Payroll Engine'}
                  {data.slug === 'ai-hospital-roster' && 'AI Roster Agent'}
                </span>
              </div>
              <span style={{ color: 'var(--cs-lime)', fontSize: '18px' }}>↓</span>
            </div>

            {/* Output Circular Nodes */}
            <div className="cs-node-outputs-row">
              {data.slug === 'schoolspine-ai' && (
                <>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><FileQuestion size={18} /></div>
                    <span className="cs-circle-label">Questions</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><ListChecks size={18} /></div>
                    <span className="cs-circle-label">MCQs</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><PenTool size={18} /></div>
                    <span className="cs-circle-label">Assignments</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><BookOpen size={18} /></div>
                    <span className="cs-circle-label">Question Papers</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><CheckCircle2 size={18} /></div>
                    <span className="cs-circle-label">Answer Keys</span>
                  </div>
                </>
              )}

              {data.slug === 'ai-payroll-automation' && (
                <>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><Clock size={18} /></div>
                    <span className="cs-circle-label">Work Days</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><Sliders size={18} /></div>
                    <span className="cs-circle-label">Half-Days</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><Briefcase size={18} /></div>
                    <span className="cs-circle-label">Gross Salary</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><AlertCircle size={18} /></div>
                    <span className="cs-circle-label">Exceptions</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><CheckCircle2 size={18} /></div>
                    <span className="cs-circle-label">Pay Slips</span>
                  </div>
                </>
              )}

              {data.slug === 'ai-hospital-roster' && (
                <>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><Calendar size={18} /></div>
                    <span className="cs-circle-label">Rotations</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><Clock size={18} /></div>
                    <span className="cs-circle-label">11h Rest</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><Users size={18} /></div>
                    <span className="cs-circle-label">Nurse Cover</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><ShieldAlert size={18} /></div>
                    <span className="cs-circle-label">No Clashes</span>
                  </div>
                  <div className="cs-node-output-circle">
                    <div className="cs-circle-icon"><CheckCircle2 size={18} /></div>
                    <span className="cs-circle-label">Ready Shifts</span>
                  </div>
                </>
              )}
            </div>

            {/* Bottom Review Node */}
            <div className="cs-review-pill-bottom">
              <div className="cs-review-pill">
                <ShieldCheck size={14} />
                <span>
                  {data.slug === 'schoolspine-ai' && 'Teacher Review'}
                  {data.slug === 'ai-payroll-automation' && 'Human Review'}
                  {data.slug === 'ai-hospital-roster' && 'Admin Review'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: HOW IT WORKS */}
      <section id="workflow" className="cs-section">
        <div className="container">
          <div className="cs-section-head-top">
            <span className="cs-pill-badge">HOW IT WORKS</span>
          </div>
          <h2 className="reveal">{data.howItWorks.headline}</h2>

          <div className="cs-timeline-connected">
            {data.howItWorks.steps.map((st) => (
              <div className="cs-timeline-step-card reveal" key={st.step}>
                <div className="cs-step-header">
                  <div className="cs-step-badge-node">{st.step}</div>
                  <h3 className="cs-step-title">{st.title}</h3>
                </div>
                <p className="cs-step-desc">{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: AI CAPABILITIES */}
      <section id="capabilities" className="cs-section">
        <div className="container">
          <div className="cs-section-head-top">
            <span className="cs-pill-badge">AI CAPABILITIES</span>
            <span className="cs-handwritten-note">
              Multiple content types. One intelligent assistant.
            </span>
          </div>
          <h2 className="reveal">{data.capabilities.headline}</h2>

          <div className="cs-capabilities-grid">
            {data.capabilities.cards.map((cap) => {
              const Icon = cap.icon || CheckCircle2
              return (
                <article className="cs-cap-card reveal" key={cap.title}>
                  <div className="cs-cap-top">
                    <div className="cs-cap-icon-box">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <ArrowUpRight size={16} className="cs-cap-arrow" />
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 5: AI IN ACTION / LARGE PRODUCT UI SHOWCASE */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-section-head-top">
            <span className="cs-pill-badge">AI IN ACTION</span>
            <span className="cs-handwritten-note">Review. Edit. Approve. You stay in control.</span>
          </div>
          <h2 className="reveal">{data.productShowcase.headline}</h2>
          <p className="cs-section-body reveal">{data.productShowcase.subtitle}</p>

          <CaseStudyInteractiveDemo slug={data.slug} />
        </div>
      </section>

      {/* SECTION 6: HUMAN + AI */}
      <section className="cs-section">
        <div className="container cs-human-split">
          {/* Left Text */}
          <div>
            <div className="cs-section-head-top">
              <span className="cs-pill-badge">HUMAN + AI</span>
            </div>
            <h2 className="reveal">
              {data.humanAi.headline}
              <span className="cs-statement-highlight">{data.humanAi.highlightLine}</span>
            </h2>
            <p className="cs-section-body reveal">{data.humanAi.body}</p>
          </div>

          {/* Right: 4-Step Collaborative Icon Flow */}
          <div className="cs-human-flow-row reveal">
            <div className="cs-human-flow-item">
              <div className="cs-human-icon-node">
                <Bot size={22} />
              </div>
              <span className="cs-human-step-label">
                {data.slug === 'schoolspine-ai' ? 'AI Generates' : 'AI Processes'}
              </span>
            </div>

            <span className="cs-human-flow-arrow">→</span>

            <div className="cs-human-flow-item">
              <div className="cs-human-icon-node">
                <FileCheck size={22} />
              </div>
              <span className="cs-human-step-label">
                {data.slug === 'schoolspine-ai' ? 'Teacher Reviews' : 'Flags Exceptions'}
              </span>
            </div>

            <span className="cs-human-flow-arrow">→</span>

            <div className="cs-human-flow-item">
              <div className="cs-human-icon-node">
                <Sliders size={22} />
              </div>
              <span className="cs-human-step-label">
                {data.slug === 'schoolspine-ai' ? 'Teacher Refines' : 'Human Review'}
              </span>
            </div>

            <span className="cs-human-flow-arrow">→</span>

            <div className="cs-human-flow-item">
              <div className="cs-human-icon-node" style={{ background: 'rgba(183, 255, 0, 0.15)', borderColor: 'var(--cs-lime)' }}>
                <CheckCircle2 size={22} />
              </div>
              <span className="cs-human-step-label" style={{ color: 'var(--cs-lime)' }}>
                {data.slug === 'schoolspine-ai' ? 'School Uses' : 'Approves Output'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: IMPACT */}
      <section id="impact" className="cs-section">
        <div className="container">
          <div className="cs-section-head-top">
            <span className="cs-pill-badge">IMPACT</span>
          </div>
          <h2 className="reveal">{data.impact.headline}</h2>

          <div className="cs-grid-4-col">
            {data.impact.cards.map((c) => {
              const Icon = c.icon || Activity
              return (
                <article className="cs-card-premium reveal" key={c.title}>
                  <div className="cs-card-icon-box">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 8: FUTURE DIRECTION */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-section-head-top">
            <span className="cs-pill-badge">FUTURE DIRECTION</span>
          </div>
          <h2 className="reveal">{data.future.headline}</h2>
          {data.future.body && <p className="cs-section-body reveal">{data.future.body}</p>}

          <div className="cs-grid-4-col">
            {data.future.cards.map((fc) => {
              const Icon = fc.icon || Sparkles
              return (
                <article className="cs-card-premium reveal" key={fc.title}>
                  <div className="cs-card-icon-box">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3>{fc.title}</h3>
                  <p>{fc.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA (CINEMATIC BOX WITH HOLOGRAPHIC CUBE) */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-cta-box-cinema reveal">
            <div className="cs-cta-split">
              {/* Left 3D Hologram Cube Wireframe */}
              <div className="cs-cta-holo-cube">
                <div className="cs-holo-wireframe">
                  <div className="cs-holo-core" />
                </div>
              </div>

              {/* Right CTA Text & Actions */}
              <div className="cs-cta-content">
                <span className="cs-cta-eyebrow">LET'S BUILD TOGETHER</span>
                <h2>{data.finalCta.headline}</h2>

                <p className="cs-cta-subtext">
                  We don't start with AI. We start with the problem. Then we engineer the
                  intelligence around it.
                </p>

                <div className="cs-cta-btn-row">
                  <MagneticButton>
                    <Link to={data.finalCta.primaryBtn.to} className="cs-btn-cta-lime">
                      <span>{data.finalCta.primaryBtn.label}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </MagneticButton>

                  <MagneticButton>
                    <Link to={data.finalCta.secondaryBtn.to} className="cs-btn-cta-dark">
                      <span>{data.finalCta.secondaryBtn.label}</span>
                    </Link>
                  </MagneticButton>
                </div>

                <div className="cs-cta-handwritten">
                  <span>Your workflow. Our AI expertise. Real impact.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: RELATED CASE STUDIES */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-section-head-top">
            <span className="cs-pill-badge">RELATED CASE STUDIES</span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                className="cs-btn-subtle"
                style={{ padding: '6px 10px', borderRadius: '50%' }}
                aria-label="Previous"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                className="cs-btn-subtle"
                style={{ padding: '6px 10px', borderRadius: '50%' }}
                aria-label="Next"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
          <h2 className="reveal">Related AI Case Studies</h2>

          <div className="cs-related-split-grid">
            {data.relatedSlugs.map((relSlug) => {
              const relData = aiCaseStudiesData[relSlug]
              if (!relData) return null
              return (
                <Link
                  key={relSlug}
                  to={relData.route}
                  className="cs-rel-card-wide reveal"
                >
                  <div className="cs-rel-info">
                    <span className="cs-pill-badge" style={{ alignSelf: 'flex-start' }}>
                      {relData.tag}
                    </span>
                    <h3>{relData.headline}</h3>
                    <p>{relData.description}</p>
                    <div className="cs-rel-link-text">
                      <span>View Case Study</span>
                      <ArrowRight size={13} />
                    </div>
                  </div>

                  <div className="cs-rel-preview-side">
                    <div className="cs-mini-dashboard-preview">
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '9px', fontFamily: 'var(--cs-mono)', color: 'var(--cs-lime)' }}>
                          {relSlug === 'schoolspine-ai' && 'SchoolSpine Builder'}
                          {relSlug === 'ai-payroll-automation' && 'Payroll Control Center'}
                          {relSlug === 'ai-hospital-roster' && 'Hospital Roster Engine'}
                        </span>
                        <span className="cs-pulse-dot" />
                      </div>
                      <div style={{ height: '2px', background: 'rgba(183, 255, 0, 0.2)', width: '60%' }} />
                      <div style={{ height: '35px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--cs-border)' }} />
                      <div style={{ height: '35px', borderRadius: '4px', background: 'rgba(183, 255, 0, 0.05)', border: '1px solid var(--cs-border-lime)' }} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
