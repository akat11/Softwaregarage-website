import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import Seo from '@/components/Seo'
import MagneticButton from '@/components/MagneticButton'
import { useScrollReveals } from '@/hooks/useScrollReveals'

interface FormState {
  name: string
  company: string
  email: string
  projectType: string
  budget: string
  description: string
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// No backend/email service is connected yet. On successful validation this
// opens the visitor's email client with a pre-filled draft addressed to the
// studio inbox, so the form is genuinely functional today. Swap the body of
// handleSubmit for a real POST to your backend/email-service endpoint (e.g.
// a serverless function, Formspree, or your CRM API) when one exists —
// the validation, loading and status-state logic below does not need to change.
const CONTACT_EMAIL = 'hello@softwaregarage.example'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  useScrollReveals(containerRef)

  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const setField = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!EMAIL_RE.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.projectType) next.projectType = 'Select a project type.'
    if (!form.budget) next.budget = 'Select a budget range.'
    if (!form.description.trim()) next.description = 'Tell us a little about the project.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('submitting')
    try {
      // TODO: replace with a real backend call, e.g.:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })
      const subject = encodeURIComponent(`New project brief: ${form.company || form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nProject type: ${form.projectType}\nBudget: ${form.budget}\n\nDescription:\n${form.description}`
      )
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      <Seo
        title="Contact Software Garage | Start Your Digital Project"
        description="Tell Software Garage what you're building. Start a conversation about your web, mobile, SaaS or AI product."
      />

      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">START A PROJECT</div>
          <h1>LET&apos;S BUILD SOMETHING<br />WORTH TALKING ABOUT.</h1>
          <p>Usually, the first conversation starts with an idea.</p>
        </div>
      </section>

      <section className="tight">
        <div className="container contact-grid">
          <form onSubmit={handleSubmit} noValidate>
            <div className={`form-field${errors.name ? ' error' : ''}`}>
              <label htmlFor="name">Name</label>
              <input id="name" type="text" value={form.name} onChange={setField('name')} required />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="company">Company</label>
              <input id="company" type="text" value={form.company} onChange={setField('company')} />
            </div>

            <div className={`form-field${errors.email ? ' error' : ''}`}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={setField('email')} required />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className={`form-field${errors.projectType ? ' error' : ''}`}>
              <label htmlFor="projectType">Project Type</label>
              <select id="projectType" value={form.projectType} onChange={setField('projectType')} required>
                <option value="">Select one</option>
                <option value="Website">Website</option>
                <option value="Web Application">Web Application</option>
                <option value="Mobile App">Mobile App</option>
                <option value="SaaS Platform">SaaS Platform</option>
                <option value="E-commerce">E-commerce</option>
                <option value="AI / Automation">AI / Automation</option>
                <option value="Other">Other</option>
              </select>
              {errors.projectType && <span className="field-error">{errors.projectType}</span>}
            </div>

            <div className={`form-field${errors.budget ? ' error' : ''}`}>
              <label htmlFor="budget">Budget Range</label>
              <select id="budget" value={form.budget} onChange={setField('budget')} required>
                <option value="">Select a range</option>
                <option value="Under $5k">Under $5k</option>
                <option value="$5k–$15k">$5k–$15k</option>
                <option value="$15k–$40k">$15k–$40k</option>
                <option value="$40k+">$40k+</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
              {errors.budget && <span className="field-error">{errors.budget}</span>}
            </div>

            <div className={`form-field${errors.description ? ' error' : ''}`}>
              <label htmlFor="description">Project Description</label>
              <textarea id="description" value={form.description} onChange={setField('description')} required />
              {errors.description && <span className="field-error">{errors.description}</span>}
            </div>

            <MagneticButton type="submit" variant="primary" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'PREPARING...' : 'SEND PROJECT BRIEF →'}
            </MagneticButton>

            {status === 'success' && (
              <div className="form-status success" role="status">
                Your email client should now be open with the brief pre-filled — send it over whenever you&apos;re ready.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status error" role="alert">
                Something went wrong preparing your message. You can reach us directly at {CONTACT_EMAIL}.
              </div>
            )}

            <p className="form-note">
              This form doesn&apos;t yet post to a backend — submitting opens a pre-filled email to {CONTACT_EMAIL}.
              Connect a backend or email service to deliver briefs directly.
            </p>
          </form>

          <div>
            <div className="eyebrow">DIRECT</div>
            <p style={{ marginTop: '16px', color: 'var(--text-dim)', lineHeight: 1.7, maxWidth: '360px' }}>
              Prefer email? Reach us directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--lime)' }}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
