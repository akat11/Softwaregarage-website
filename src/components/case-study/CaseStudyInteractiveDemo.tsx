import { useState, useEffect, useRef } from 'react'
import {
  Sparkles,
  Check,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  Sliders,
  Activity,
  ChevronLeft,
  ChevronRight,
  Edit2,
  Save,
  X,
  Play,
  RotateCcw,
} from 'lucide-react'
import {
  caseStudyDemoConfigs,
  schoolSpineDemoQuestions,
  payrollDemoEmployees,
  hospitalDemoStaff,
  type QuestionDemoItem,
  type PayrollEmployeeRecord,
  type RosterStaffRecord,
} from '@/data/caseStudyDemos'
import '@/styles/case-study-demo.css'

interface Props {
  slug: string
}

export default function CaseStudyInteractiveDemo({ slug }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const config = caseStudyDemoConfigs[slug] || caseStudyDemoConfigs['schoolspine-ai']

  // Lifecycle states
  const [stage, setStage] = useState<'input' | 'processing' | 'output' | 'approved'>('output')
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [processingProgress, setProcessingProgress] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const hasAutoPlayedRef = useRef(false)
  const hasUserInteractedRef = useRef(false)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Active Tab
  const [activeTab, setActiveTab] = useState(config.tabs[0])

  // --- SCHOOLSPINE STATE ---
  const [questions, setQuestions] = useState<QuestionDemoItem[]>(schoolSpineDemoQuestions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>('Medium')
  const [isEditingQuestion, setIsEditingQuestion] = useState(false)
  const [editedStem, setEditedStem] = useState('')

  // --- PAYROLL STATE ---
  const [employees, setEmployees] = useState<PayrollEmployeeRecord[]>(payrollDemoEmployees)
  const [payrollFilter, setPayrollFilter] = useState<'All' | 'Ready' | 'Review' | 'Exception'>('All')
  const [inspectingEmployee, setInspectingEmployee] = useState<PayrollEmployeeRecord | null>(null)

  // --- HOSPITAL ROSTER STATE ---
  const [staffList, setStaffList] = useState<RosterStaffRecord[]>(hospitalDemoStaff)
  const [shiftFilter, setShiftFilter] = useState<'All' | 'M' | 'E' | 'N' | 'OFF'>('All')
  const [, setInspectingStaff] = useState<RosterStaffRecord | null>(null)
  const [hospitalLeaveSimulated, setHospitalLeaveSimulated] = useState(false)
  const [leaveSolvingState, setLeaveSolvingState] = useState(false)

  // Stop auto-play upon user interaction
  const recordUserInteraction = () => {
    hasUserInteractedRef.current = true
    if (isAutoPlaying) {
      setIsAutoPlaying(false)
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
    }
  }

  // Auto-play observer: Runs ONE demonstration sequence when entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAutoPlayedRef.current && !hasUserInteractedRef.current) {
          hasAutoPlayedRef.current = true
          setIsAutoPlaying(true)

          // Step 1: Pause on input
          autoPlayTimerRef.current = setTimeout(() => {
            if (hasUserInteractedRef.current) return
            startProcessingRun(true)
          }, 800)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      if (autoPlayTimerRef.current) clearTimeout(autoPlayTimerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug])

  // Trigger processing run
  const startProcessingRun = (isAuto = false) => {
    if (!isAuto) recordUserInteraction()
    setStage('processing')
    setActiveStepIndex(0)
    setProcessingProgress(15)

    const stepsCount = config.processingSteps.length
    let currentStep = 0

    const interval = setInterval(() => {
      currentStep += 1
      if (currentStep < stepsCount) {
        setActiveStepIndex(currentStep)
        setProcessingProgress(Math.min(95, Math.round(((currentStep + 1) / stepsCount) * 100)))
      } else {
        clearInterval(interval)
        setProcessingProgress(100)
        setTimeout(() => {
          setStage('output')
          if (isAuto) setIsAutoPlaying(false)
        }, 300)
      }
    }, 380)
  }

  // --- SCHOOLSPINE HANDLERS ---
  const currentQ = questions[currentQuestionIndex] || questions[0]
  const approvedQuestionsCount = questions.filter((q) => q.approved).length

  const handleToggleApproveQuestion = () => {
    recordUserInteraction()
    setQuestions((prev) =>
      prev.map((q, idx) => (idx === currentQuestionIndex ? { ...q, approved: !q.approved } : q))
    )
  }

  const handleRegenerateQuestion = () => {
    recordUserInteraction()
    setStage('processing')
    setActiveStepIndex(3)
    setProcessingProgress(60)
    setTimeout(() => {
      setStage('output')
      // cycle question or adjust stem variation
      setCurrentQuestionIndex((prev) => (prev + 1) % questions.length)
    }, 450)
  }

  const handleSaveQuestionEdit = () => {
    recordUserInteraction()
    if (editedStem.trim()) {
      setQuestions((prev) =>
        prev.map((q, idx) => (idx === currentQuestionIndex ? { ...q, stem: editedStem } : q))
      )
    }
    setIsEditingQuestion(false)
  }

  // --- PAYROLL HANDLERS ---
  const filteredEmployees = employees.filter((emp) => {
    if (payrollFilter === 'All') return true
    return emp.status === payrollFilter
  })

  const handleRegularizeEmployee = (id: string) => {
    recordUserInteraction()
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id
          ? {
              ...emp,
              halfDays: 0,
              workingDays: 24,
              status: 'Ready',
              validationNote: 'Half-day regularized · Manager approval signed',
            }
          : emp
      )
    )
    if (inspectingEmployee && inspectingEmployee.id === id) {
      setInspectingEmployee((prev) =>
        prev
          ? {
              ...prev,
              halfDays: 0,
              workingDays: 24,
              status: 'Ready',
              validationNote: 'Half-day regularized · Manager approval signed',
            }
          : null
      )
    }
  }

  const handleApproveEmployee = (id: string) => {
    recordUserInteraction()
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { ...emp, approved: true } : emp))
    )
    if (inspectingEmployee && inspectingEmployee.id === id) {
      setInspectingEmployee((prev) => (prev ? { ...prev, approved: true } : null))
    }
  }

  const handleApproveBatchPayroll = () => {
    recordUserInteraction()
    setEmployees((prev) => prev.map((emp) => ({ ...emp, approved: true })))
    setStage('approved')
  }

  // --- HOSPITAL ROSTER HANDLERS ---
  const handleTriggerHospitalLeaveSimulation = () => {
    recordUserInteraction()
    setLeaveSolvingState(true)

    setTimeout(() => {
      setLeaveSolvingState(false)
      setHospitalLeaveSimulated((prev) => !prev)

      if (!hospitalLeaveSimulated) {
        // Nurse A gets leave on Wednesday, Nurse D drafts in
        setStaffList((prev) =>
          prev.map((st) => {
            if (st.name === 'Nurse A') {
              return { ...st, shifts: { ...st.shifts, wed: 'LEAVE' } }
            }
            if (st.name === 'Nurse D') {
              return {
                ...st,
                shifts: { ...st.shifts, wed: 'N' },
                leaveStatus: 'Drafted from Relief Pool',
              }
            }
            return st
          })
        )
      } else {
        // reset
        setStaffList(hospitalDemoStaff)
      }
    }, 700)
  }

  return (
    <div
      ref={containerRef}
      className={`demo-component-window${slug === 'ai-payroll-automation' ? ' demo-component-window-payroll' : ''} reveal`}
      onClick={recordUserInteraction}
    >
      {/* 1. Window Chrome Topbar */}
      <div className="demo-window-chrome">
        <div className="demo-chrome-left">
          <div className="demo-window-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="demo-window-title">{config.productTitle}</div>
        </div>

        <div className="demo-chrome-right">
          {isAutoPlaying && (
            <div className="demo-autoplay-notice">
              <Play size={10} style={{ display: 'inline', marginRight: '4px' }} />
              Auto Demonstration · Click to take control
            </div>
          )}
          <div className="demo-live-badge">
            <span className="cs-pulse-dot" />
            <span>LIVE DEMO</span>
          </div>
        </div>
      </div>

      {/* 2. Stepper Pipeline Bar */}
      <div className="demo-stepper-bar">
        <div
          className={`demo-step-indicator ${
            stage === 'input' ? 'active' : 'done'
          }`}
          onClick={() => {
            recordUserInteraction()
            setStage('input')
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="demo-step-num-pill">1</div>
          <span>INPUTS</span>
        </div>

        <span className="demo-step-arrow">→</span>

        <div className={`demo-step-indicator ${stage === 'processing' ? 'active' : ''}`}>
          <div className="demo-step-num-pill">2</div>
          <span>AI PROCESSING</span>
        </div>

        <span className="demo-step-arrow">→</span>

        <div
          className={`demo-step-indicator ${
            stage === 'output' ? 'active' : stage === 'approved' ? 'done' : ''
          }`}
          onClick={() => {
            recordUserInteraction()
            setStage('output')
          }}
          style={{ cursor: 'pointer' }}
        >
          <div className="demo-step-num-pill">3</div>
          <span>OUTPUT & REVIEW</span>
        </div>

        <span className="demo-step-arrow">→</span>

        <div className={`demo-step-indicator ${stage === 'approved' ? 'active done' : ''}`}>
          <div className="demo-step-num-pill">4</div>
          <span>APPROVAL</span>
        </div>
      </div>

      {/* 3. Main Split Content Area */}
      <div className="demo-main-layout">
        {/* Left Pane: Configurator & Parameters */}
        <div className="demo-pane-left">
          <div className="demo-pane-heading">
            <span>CONFIGURATOR</span>
            <span style={{ fontSize: '10px', color: 'var(--cs-text-dim)' }}>
              {stage === 'processing' ? 'LOCKED' : 'READY'}
            </span>
          </div>

          {config.inputs.map((inp) => (
            <div key={inp.label} className="demo-field-box">
              <span className="demo-field-label">{inp.label}</span>
              {inp.type === 'pills' && inp.options ? (
                <div style={{ display: 'flex', gap: '6px' }}>
                  {inp.options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      className={`cs-pill-choice ${selectedDifficulty === opt ? 'active' : ''}`}
                      onClick={() => {
                        recordUserInteraction()
                        setSelectedDifficulty(opt as 'Easy' | 'Medium' | 'Hard')
                      }}
                      style={{ flex: 1, padding: '7px 0', fontSize: '11px' }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="demo-field-input">
                  <span>{inp.value}</span>
                  <span style={{ fontSize: '10px', color: 'var(--cs-text-dim)' }}>▾</span>
                </div>
              )}
            </div>
          ))}

          <button
            type="button"
            className="demo-btn-action-primary"
            onClick={() => startProcessingRun(false)}
            disabled={stage === 'processing'}
          >
            <Sparkles size={13} />
            <span>{config.mainActionLabel}</span>
          </button>

          {/* Metrics summary */}
          <div className="demo-metrics-strip">
            {config.metrics.map((m) => (
              <div key={m.label} className="demo-metric-row">
                <span>{m.label}</span>
                <span
                  style={{
                    color: m.highlight ? 'var(--cs-lime)' : m.warning ? '#f59e0b' : '#ffffff',
                  }}
                >
                  {slug === 'schoolspine-ai' && m.label === 'Approved Questions'
                    ? `${approvedQuestionsCount} / 20`
                    : m.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Generated Workspace */}
        <div className="demo-pane-right">
          {/* Processing State Overlay */}
          {stage === 'processing' && (
            <div className="demo-processing-overlay">
              <div className="demo-processing-radar">
                <div className="demo-radar-circle" />
                <div className="demo-radar-circle" />
                <div className="demo-radar-circle" />
                <Sparkles size={24} style={{ color: 'var(--cs-lime)' }} />
              </div>

              <div className="demo-processing-step-text">
                {config.processingSteps[activeStepIndex] || 'Processing operational parameters...'}
              </div>

              <div className="demo-processing-progress-bar">
                <div
                  className="demo-processing-fill"
                  style={{ width: `${processingProgress}%` }}
                />
              </div>

              <button
                type="button"
                className="demo-processing-cancel-btn"
                onClick={() => {
                  recordUserInteraction()
                  setStage('output')
                }}
              >
                Skip animation →
              </button>
            </div>
          )}

          {/* Top Tabs & Filter Strip */}
          <div className="demo-top-tabs-row">
            <div className="demo-tabs-group">
              {config.tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  className={`demo-tab-pill ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => {
                    recordUserInteraction()
                    setActiveTab(tab)
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter chips depending on case study */}
            {slug === 'ai-payroll-automation' && (
              <div className="demo-filters-group">
                {(['All', 'Ready', 'Review', 'Exception'] as const).map((f) => (
                  <button
                    key={f}
                    type="button"
                    className={`demo-filter-chip ${payrollFilter === f ? 'active' : ''}`}
                    onClick={() => {
                      recordUserInteraction()
                      setPayrollFilter(f)
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            )}

            {slug === 'ai-hospital-roster' && (
              <div className="demo-filters-group">
                {(['All', 'M', 'E', 'N', 'OFF'] as const).map((sf) => (
                  <button
                    key={sf}
                    type="button"
                    className={`demo-filter-chip ${shiftFilter === sf ? 'active' : ''}`}
                    onClick={() => {
                      recordUserInteraction()
                      setShiftFilter(sf)
                    }}
                  >
                    {sf === 'All' ? 'All Shifts' : sf}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ========================================================
              CASE STUDY 1: SCHOOLSPINE OUTPUT VIEW
              ======================================================== */}
          {slug === 'schoolspine-ai' && (
            <div>
              {/* Tab: Questions */}
              {activeTab.includes('Questions') && (
                <div className={`demo-question-card ${currentQ.approved ? 'approved' : ''}`}>
                  <div className="demo-q-meta-row">
                    <span className="cs-pill-badge">
                      QUESTION {currentQ.number} OF {questions.length} · MCQ
                    </span>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="cs-pill-choice active" style={{ padding: '2px 10px' }}>
                        {selectedDifficulty}
                      </span>
                      {currentQ.approved && (
                        <span
                          style={{
                            fontSize: '11px',
                            color: 'var(--cs-lime)',
                            fontFamily: 'var(--cs-mono)',
                          }}
                        >
                          Approved ✓
                        </span>
                      )}
                    </div>
                  </div>

                  {isEditingQuestion ? (
                    <div>
                      <textarea
                        className="demo-q-stem-textarea"
                        value={editedStem}
                        onChange={(e) => setEditedStem(e.target.value)}
                        rows={2}
                      />
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                        <button
                          type="button"
                          className="demo-btn-lime-primary"
                          onClick={handleSaveQuestionEdit}
                        >
                          <Save size={12} /> Save Question
                        </button>
                        <button
                          type="button"
                          className="demo-btn-outline"
                          onClick={() => setIsEditingQuestion(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="demo-q-stem">{currentQ.stem}</div>
                  )}

                  <div className="demo-options-container">
                    {currentQ.options.map((opt) => (
                      <div
                        key={opt.key}
                        className={`demo-option-item ${opt.correct ? 'correct' : ''}`}
                      >
                        <div className="demo-option-key-badge">{opt.key}</div>
                        <span>{opt.text}</span>
                        {opt.correct && (
                          <span style={{ fontSize: '11px', marginLeft: '6px' }}>
                            (Correct Option)
                          </span>
                        )}
                        {opt.note && <span className="demo-option-note">{opt.note}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab: Answer Key */}
              {activeTab === 'Answer Key' && (
                <div className="demo-question-card">
                  <div className="demo-q-meta-row">
                    <span className="cs-pill-badge">DIAGNOSTIC ANSWER KEY & RATIONALE</span>
                    <span style={{ color: 'var(--cs-lime)', fontSize: '11px' }}>
                      Pedagogical Benchmark
                    </span>
                  </div>

                  <div style={{ fontSize: '15px', color: '#ffffff', marginBottom: '14px' }}>
                    <strong>Q{currentQ.number}:</strong> {currentQ.stem}
                  </div>

                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(183, 255, 0, 0.08)',
                      border: '1px solid rgba(183, 255, 0, 0.3)',
                      color: 'var(--cs-lime)',
                      fontSize: '13.5px',
                      marginBottom: '16px',
                    }}
                  >
                    <strong>Correct Answer:</strong>{' '}
                    {currentQ.options.find((o) => o.correct)?.text}
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--cs-text-muted)', lineHeight: '1.6' }}>
                    <strong>Explanation:</strong> {currentQ.answerKeyExplanation}
                  </p>
                </div>
              )}

              {/* Tab: Export */}
              {activeTab === 'Export' && (
                <div className="demo-question-card">
                  <div className="demo-q-meta-row">
                    <span className="cs-pill-badge">EXPORT FORMATTED ASSESSMENT</span>
                    <span style={{ fontSize: '11px', color: 'var(--cs-text-dim)' }}>
                      JSON / LMS Compatible
                    </span>
                  </div>
                  <pre
                    style={{
                      padding: '14px',
                      borderRadius: '8px',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'var(--cs-lime)',
                      fontSize: '11.5px',
                      fontFamily: 'var(--cs-mono)',
                      overflowX: 'auto',
                    }}
                  >
                    {JSON.stringify(
                      {
                        assessment: 'Grade 8 Science',
                        topic: 'Force & Pressure',
                        difficulty: selectedDifficulty,
                        totalQuestions: 20,
                        approvedQuestions: approvedQuestionsCount,
                        questionsSample: questions,
                      },
                      null,
                      2
                    )}
                  </pre>
                </div>
              )}

              {/* SchoolSpine Navigation & Action Controls */}
              <div className="demo-bottom-action-bar">
                <div className="demo-bottom-left">
                  <button
                    type="button"
                    className="demo-btn-outline"
                    disabled={currentQuestionIndex === 0}
                    onClick={() => {
                      recordUserInteraction()
                      setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                    }}
                  >
                    <ChevronLeft size={13} style={{ display: 'inline' }} /> Prev
                  </button>

                  <span
                    style={{
                      fontFamily: 'var(--cs-mono)',
                      fontSize: '12px',
                      color: 'var(--cs-text-muted)',
                    }}
                  >
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>

                  <button
                    type="button"
                    className="demo-btn-outline"
                    disabled={currentQuestionIndex === questions.length - 1}
                    onClick={() => {
                      recordUserInteraction()
                      setCurrentQuestionIndex((prev) => Math.min(questions.length - 1, prev + 1))
                    }}
                  >
                    Next <ChevronRight size={13} style={{ display: 'inline' }} />
                  </button>
                </div>

                <div className="demo-bottom-actions">
                  <button
                    type="button"
                    className="demo-btn-outline"
                    onClick={() => {
                      recordUserInteraction()
                      setEditedStem(currentQ.stem)
                      setIsEditingQuestion(true)
                    }}
                  >
                    <Edit2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Edit
                  </button>

                  <button
                    type="button"
                    className="demo-btn-outline"
                    onClick={handleRegenerateQuestion}
                  >
                    <RefreshCw size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Regenerate
                  </button>

                  <button
                    type="button"
                    className="demo-btn-lime-primary"
                    onClick={handleToggleApproveQuestion}
                  >
                    <Check size={13} />
                    <span>{currentQ.approved ? 'Approved ✓' : 'Approve Question'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              CASE STUDY 2: PAYROLL AUTOMATION OUTPUT VIEW
              ======================================================== */}
          {slug === 'ai-payroll-automation' && (
            <div>
              {/* Detailed Employee Inspection Drawer */}
              {inspectingEmployee && (
                <div className="demo-drawer-panel">
                  <div className="demo-drawer-head">
                    <div>
                      <span style={{ fontWeight: 600, fontSize: '15px', color: '#ffffff' }}>
                        {inspectingEmployee.name}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--cs-text-dim)', marginLeft: '8px' }}>
                        ({inspectingEmployee.role})
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        className={`demo-status-pill ${inspectingEmployee.status.toLowerCase()}`}
                      >
                        {inspectingEmployee.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => setInspectingEmployee(null)}
                        style={{ background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '12.5px', color: 'var(--cs-lime)', marginBottom: '12px' }}>
                    AI Validation: {inspectingEmployee.validationNote}
                  </p>

                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {inspectingEmployee.status !== 'Ready' && (
                      <button
                        type="button"
                        className="demo-btn-lime-primary"
                        onClick={() => handleRegularizeEmployee(inspectingEmployee.id)}
                      >
                        <Sliders size={12} /> Regularize Half-Day & Recalculate
                      </button>
                    )}

                    <button
                      type="button"
                      className="demo-btn-outline"
                      onClick={() => handleApproveEmployee(inspectingEmployee.id)}
                    >
                      <Check size={12} />{' '}
                      {inspectingEmployee.approved ? 'Record Approved ✓' : 'Approve Record'}
                    </button>
                  </div>
                </div>
              )}

              {/* Payroll Employees Table */}
              <div className="demo-table-wrapper">
                <table className="demo-table">
                  <thead>
                    <tr>
                      <th>Employee</th>
                      <th>Working Days</th>
                      <th>Leave</th>
                      <th>Half Days</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmployees.map((emp) => (
                      <tr
                        key={emp.id}
                        onClick={() => {
                          recordUserInteraction()
                          setInspectingEmployee(emp)
                        }}
                      >
                        <td style={{ fontWeight: 600 }}>
                          {emp.name}
                          {emp.approved && (
                            <span style={{ color: 'var(--cs-lime)', fontSize: '11px', marginLeft: '6px' }}>
                              ✓
                            </span>
                          )}
                        </td>
                        <td>{emp.workingDays} / 26</td>
                        <td>{emp.leave}</td>
                        <td>{emp.halfDays}</td>
                        <td>
                          <span className={`demo-status-pill ${emp.status.toLowerCase()}`}>
                            {emp.status}
                          </span>
                        </td>
                        <td>
                          <span style={{ fontSize: '11px', color: 'var(--cs-lime)', fontFamily: 'var(--cs-mono)' }}>
                            Inspect →
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Payroll Mobile Cards Representation */}
              <div className="demo-mobile-payroll-list">
                {filteredEmployees.map((emp) => (
                  <div
                    key={`mob-${emp.id}`}
                    className="demo-mobile-payroll-card"
                    onClick={() => {
                      recordUserInteraction()
                      setInspectingEmployee(emp)
                    }}
                  >
                    <div className="demo-mobile-card-top">
                      <div>
                        <span className="demo-mobile-card-title">
                          {emp.name}
                          {emp.approved && (
                            <span style={{ color: 'var(--cs-lime)', fontSize: '11px', marginLeft: '6px' }}>
                              ✓
                            </span>
                          )}
                        </span>
                        <div className="demo-mobile-card-sub">{emp.role}</div>
                      </div>
                      <span className={`demo-status-pill ${emp.status.toLowerCase()}`}>
                        {emp.status}
                      </span>
                    </div>

                    <div className="demo-mobile-card-stats">
                      <div className="demo-mobile-stat">
                        <span>WORKING DAYS</span>
                        <strong>{emp.workingDays} / 26</strong>
                      </div>
                      <div className="demo-mobile-stat">
                        <span>LEAVE</span>
                        <strong>{emp.leave}</strong>
                      </div>
                      <div className="demo-mobile-stat">
                        <span>HALF DAYS</span>
                        <strong>{emp.halfDays}</strong>
                      </div>
                    </div>

                    <div className="demo-mobile-card-foot">
                      <span>Click to inspect & regularize</span>
                      <span className="demo-mobile-inspect-link">Inspect Record →</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payroll Bottom Action Bar */}
              <div className="demo-bottom-action-bar">
                <div className="demo-bottom-left">
                  <span style={{ fontSize: '12px', color: 'var(--cs-text-dim)', fontFamily: 'var(--cs-mono)' }}>
                    Displaying {filteredEmployees.length} records · Click any row to inspect & regularize
                  </span>
                </div>

                <div className="demo-bottom-actions">
                  <button
                    type="button"
                    className="demo-btn-outline"
                    onClick={() => {
                      recordUserInteraction()
                      setEmployees(payrollDemoEmployees)
                      setStage('output')
                    }}
                  >
                    <RotateCcw size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Reset Data
                  </button>

                  <button
                    type="button"
                    className="demo-btn-lime-primary"
                    onClick={handleApproveBatchPayroll}
                  >
                    <CheckCircle2 size={13} />
                    <span>
                      {stage === 'approved'
                        ? 'Batch Approved ✓'
                        : 'Approve Payroll Batch (231)'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              CASE STUDY 3: HOSPITAL ROSTER OUTPUT VIEW
              ======================================================== */}
          {slug === 'ai-hospital-roster' && (
            <div>
              {/* Dynamic Staff Leave Scenario Banner */}
              <div className="demo-leave-simulation-bar">
                <div className="demo-sim-copy">
                  <AlertTriangle size={16} style={{ color: '#f87171' }} />
                  <span>
                    <strong>SCENARIO SIMULATOR:</strong>{' '}
                    {hospitalLeaveSimulated
                      ? 'Nurse A on Emergency Leave · Nurse D drafted from Relief Pool · Coverage 100%'
                      : 'Simulate Nurse A unexpected leave request for Wednesday night'}
                  </span>
                </div>

                <button
                  type="button"
                  className="demo-sim-btn"
                  onClick={handleTriggerHospitalLeaveSimulation}
                  disabled={leaveSolvingState}
                >
                  <Activity size={12} style={{ display: 'inline', marginRight: '6px' }} />
                  {leaveSolvingState
                    ? 'AI Solver Resolving...'
                    : hospitalLeaveSimulated
                      ? 'Reset Schedule'
                      : 'Simulate Leave Request ⚡'}
                </button>
              </div>

              {/* Hospital Roster Grid */}
              <div className="demo-roster-grid-wrapper">
                <table className="demo-table">
                  <thead>
                    <tr>
                      <th>STAFF</th>
                      <th>MON</th>
                      <th>TUE</th>
                      <th>WED</th>
                      <th>THU</th>
                      <th>FRI</th>
                      <th>SAT</th>
                      <th>SUN</th>
                      <th>REST INTERVAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffList.map((st) => (
                      <tr
                        key={st.id}
                        onClick={() => {
                          recordUserInteraction()
                          setInspectingStaff(st)
                        }}
                      >
                        <td style={{ fontWeight: 600 }}>
                          {st.name}
                          <div style={{ fontSize: '10.5px', color: 'var(--cs-text-dim)' }}>
                            {st.role}
                          </div>
                        </td>
                        {(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const).map((day) => {
                          const shift = st.shifts[day]
                          const matchesFilter = shiftFilter === 'All' || shift === shiftFilter
                          return (
                            <td key={day}>
                              <span
                                className={`demo-shift-badge ${shift.toLowerCase()}`}
                                style={{ opacity: matchesFilter ? 1 : 0.3 }}
                              >
                                {shift}
                              </span>
                            </td>
                          )
                        })}
                        <td>
                          <span style={{ fontSize: '11px', color: 'var(--cs-lime)' }}>
                            {st.restInterval}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Hospital Roster Mobile Cards Representation */}
              <div className="demo-mobile-roster-list">
                {staffList.map((st) => (
                  <div
                    key={`mob-${st.id}`}
                    className="demo-mobile-staff-card"
                    onClick={() => {
                      recordUserInteraction()
                      setInspectingStaff(st)
                    }}
                  >
                    <div className="demo-mobile-card-top">
                      <div>
                        <span className="demo-mobile-card-title">{st.name}</span>
                        <div className="demo-mobile-card-sub">{st.role}</div>
                      </div>
                      <span className="demo-mobile-recovery-pill">{st.restInterval}</span>
                    </div>

                    <div className="demo-mobile-shifts-grid">
                      {(['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const).map((day) => {
                        const shift = st.shifts[day]
                        const matchesFilter = shiftFilter === 'All' || shift === shiftFilter
                        return (
                          <div
                            key={day}
                            className="demo-mobile-day-col"
                            style={{ opacity: matchesFilter ? 1 : 0.35 }}
                          >
                            <span className="demo-mobile-day-label">{day.toUpperCase()}</span>
                            <span className={`demo-shift-badge ${shift.toLowerCase()}`}>
                              {shift}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Roster Bottom Actions */}
              <div className="demo-bottom-action-bar">
                <div className="demo-bottom-left">
                  <span style={{ fontSize: '12px', color: 'var(--cs-text-dim)', fontFamily: 'var(--cs-mono)' }}>
                    M = Morning · E = Evening · N = Night · OFF = Rest · 11h Recovery enforced
                  </span>
                </div>

                <div className="demo-bottom-actions">
                  <button
                    type="button"
                    className="demo-btn-outline"
                    onClick={() => {
                      recordUserInteraction()
                      startProcessingRun(false)
                    }}
                  >
                    <RefreshCw size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    Re-solve Constraints
                  </button>

                  <button
                    type="button"
                    className="demo-btn-lime-primary"
                    onClick={() => {
                      recordUserInteraction()
                      setStage('approved')
                    }}
                  >
                    <CheckCircle2 size={13} />
                    <span>
                      {stage === 'approved' ? 'Roster Approved ✓' : 'Approve Final Roster'}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
