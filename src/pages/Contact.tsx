import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import {
  Building2,
  Clock3,
  Code2,
  FileText,
  Headphones,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  WalletCards,
  Zap,
} from 'lucide-react'
import Seo from '@/components/Seo'
import MagneticButton from '@/components/MagneticButton'
import { useScrollReveals } from '@/hooks/useScrollReveals'
import '@/styles/contact.css'

interface FormState {
  firstName: string
  lastName: string
  mobile: string
  company: string
  email: string
  projectType: string
  budget: string
  description: string
}

const initialState: FormState = {
  firstName: '',
  lastName: '',
  mobile: '',
  company: '',
  email: '',
  projectType: '',
  budget: '',
  description: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const NAME_RE = /^[A-Za-z]+(?:[ '\u002D][A-Za-z]+)*$/
const MOBILE_RE = /^\+?[0-9][0-9\s().-]{7,19}$/

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL =
       'https://script.google.com/macros/s/AKfycbwf3nffH2Nvm53tTeLdjphHh3EGelqoCEdn-8AwyRc2P9A0pEcBXsLbny8eEUVfor0/exec'
const CONTACT_EMAIL = 'softwaregarage2025@gmail.com'

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)

  useScrollReveals(containerRef)

  const [form, setForm] = useState<FormState>(initialState)

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({})

  const [status, setStatus] = useState<Status>('idle')

  const [honeypot, setHoneypot] = useState('')

  const setField =
    (field: keyof FormState) =>
    (
      e: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      let value = e.target.value

      if (field === 'firstName' || field === 'lastName') {
        value = value.replace(/[^A-Za-z '\u002D]/g, '')
      } else if (field === 'mobile') {
        value = value.replace(/[^0-9+().\s-]/g, '')
      }

      setForm((currentForm) => ({
        ...currentForm,
        [field]: value,
      }))

      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: undefined,
      }))

      if (status === 'error') {
        setStatus('idle')
      }
    }

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {}

    const firstName = form.firstName.trim()
    const lastName = form.lastName.trim()
    const mobile = form.mobile.trim()
    const email = form.email.trim()
    const company = form.company.trim()
    const projectType = form.projectType.trim()
    const budget = form.budget.trim()
    const description = form.description.trim()

    if (!firstName) {
      next.firstName = 'First name is required.'
    } else if (!NAME_RE.test(firstName)) {
      next.firstName = 'Use letters only.'
    } else if (firstName.length > 100) {
      next.firstName = 'First name is too long.'
    }

    if (!lastName) {
      next.lastName = 'Last name is required.'
    } else if (!NAME_RE.test(lastName)) {
      next.lastName = 'Use letters only.'
    } else if (lastName.length > 100) {
      next.lastName = 'Last name is too long.'
    }

    if (!mobile) {
      next.mobile = 'Mobile number is required.'
    } else if (!MOBILE_RE.test(mobile)) {
      next.mobile = 'Enter a valid mobile number.'
    }

    if (!email) {
      next.email = 'Email is required.'
    } else if (!EMAIL_RE.test(email)) {
      next.email = 'Enter a valid email address.'
    } else if (email.length > 200) {
      next.email = 'Email is too long.'
    }

    if (!company) {
      // Company is optional, so no error here.
    } else if (company.length > 200) {
      next.company = 'Company name is too long.'
    }

    if (!projectType) {
      next.projectType = 'Select a project type.'
    }

    if (!budget) {
      next.budget = 'Select a budget range.'
    }

    if (!description) {
      next.description = 'Tell us a little about the project.'
    } else if (description.length > 5000) {
      next.description = 'Project description is too long.'
    }

    setErrors(next)

    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Prevent double submission
    if (status === 'submitting') {
      return
    }

    // Validate form
    if (!validate()) {
      return
    }

    // Honeypot spam protection
    if (honeypot.trim()) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      /*
       * Google Apps Script receives this as normal form data.
       * We intentionally do NOT send application/json because
       * that can trigger a CORS preflight from a static website.
       */

      const body = new URLSearchParams()

      body.append('firstName', form.firstName.trim())
      body.append('lastName', form.lastName.trim())
      body.append('mobile', form.mobile.trim())
      body.append('email', form.email.trim())
      body.append('company', form.company.trim())
      body.append('projectType', form.projectType.trim())
      body.append('budget', form.budget.trim())
      body.append('description', form.description.trim())
      body.append('honeypot', honeypot.trim())

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: body,
        mode: 'no-cors',
      })

      /*
       * With no-cors, the browser cannot read the response body
       * from Google Apps Script.
       *
       * If fetch completes without throwing a network error,
       * we consider the submission sent successfully.
       */

      setStatus('success')

      setForm(initialState)

      setHoneypot('')

      setErrors({})
    } catch (error) {
      console.error('Contact form submission failed:', error)

      setStatus('error')
    }
  }

  return (
    <div ref={containerRef}>
      <Seo
        title="Contact Software Garage | Start Your Digital Project"
        description="Tell Software Garage what you're building. Start a conversation about your web, mobile, SaaS or AI product."
      />

      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div className="contact-hero-copy">
            <div className="contact-kicker">
              <Sparkles size={12} /> START A PROJECT
            </div>

            <h1>
              LET&apos;S BUILD
              <br />
              SOMETHING
              <br />
              <span>WORTH TALKING</span>
              <br />
              ABOUT<span className="contact-dot">.</span>
            </h1>

            <p>
              Great ideas deserve the right team.
              <br />
              Tell us about your project and let&apos;s bring it to life.
            </p>

            <div className="contact-promises">
              <div>
                <span>
                  <Zap size={23} />
                </span>

                <b>Quick Response</b>

                <small>
                  We typically reply
                  <br />
                  within 24 hours.
                </small>
              </div>

              <div>
                <span>
                  <ShieldCheck size={17} />
                </span>

                <b>Secure &amp; Confidential</b>

                <small>
                  Your information is
                  <br />
                  100% safe with us.
                </small>
              </div>

              <div>
                <span>
                  <UsersRound size={17} />
                </span>

                <b>No Obligations</b>

                <small>
                  Share your idea.
                  <br />
                  Zero pressure.
                </small>
              </div>
            </div>
          </div>

          <div className="contact-hero-art" aria-hidden="true">
            <img
              className="contact-reference-image"
              src="/contact-envelope.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <form
            className="contact-panel project-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="panel-heading">
              <div>
                <h2>TELL US ABOUT YOUR PROJECT</h2>
                <span />
              </div>
            </div>

            <div className="form-row">
              <div className={`form-field${errors.firstName ? ' error' : ''}`}>
                <label htmlFor="firstName">
                  <UserRound size={14} /> First Name
                </label>

                <input
                  id="firstName"
                  type="text"
                  value={form.firstName}
                  onChange={setField('firstName')}
                  maxLength={100}
                  required
                />

                <small>Enter your first name</small>

                {errors.firstName && (
                  <span className="field-error">{errors.firstName}</span>
                )}
              </div>

              <div className={`form-field${errors.lastName ? ' error' : ''}`}>
                <label htmlFor="lastName">
                  <UserRound size={14} /> Last Name
                </label>

                <input
                  id="lastName"
                  type="text"
                  value={form.lastName}
                  onChange={setField('lastName')}
                  maxLength={100}
                  required
                />

                <small>Enter your last name</small>

                {errors.lastName && (
                  <span className="field-error">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="form-row">
              <div className={`form-field${errors.mobile ? ' error' : ''}`}>
                <label htmlFor="mobile">
                  <Phone size={14} /> Mobile Number
                </label>

                <input
                  id="mobile"
                  type="tel"
                  inputMode="tel"
                  value={form.mobile}
                  onChange={setField('mobile')}
                  maxLength={20}
                  required
                />

                <small>Enter your mobile number</small>

                {errors.mobile && (
                  <span className="field-error">{errors.mobile}</span>
                )}
              </div>

              <div className={`form-field${errors.email ? ' error' : ''}`}>
                <label htmlFor="email">
                  <Mail size={14} /> Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={setField('email')}
                  maxLength={200}
                  required
                />

                <small>name@example.com</small>

                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </div>
            </div>

            <div className={`form-field${errors.company ? ' error' : ''}`}>
              <label htmlFor="company">
                <Building2 size={14} /> Company / Organization
              </label>

              <input
                id="company"
                type="text"
                value={form.company}
                onChange={setField('company')}
                maxLength={200}
              />

              <small>Your company name</small>

              {errors.company && (
                <span className="field-error">{errors.company}</span>
              )}
            </div>

            <div className="form-row">
              <div
                className={`form-field${
                  errors.projectType ? ' error' : ''
                }`}
              >
                <label htmlFor="projectType">
                  <Code2 size={14} /> Project Type
                </label>

                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={setField('projectType')}
                  required
                >
                  <option value="">Select one</option>
                  <option value="Website">Website</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="SaaS Platform">SaaS Platform</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="AI / Automation">AI / Automation</option>
                  <option value="Other">Other</option>
                </select>

                <small>Select one</small>

                {errors.projectType && (
                  <span className="field-error">
                    {errors.projectType}
                  </span>
                )}
              </div>

              <div className={`form-field${errors.budget ? ' error' : ''}`}>
                <label htmlFor="budget">
                  <WalletCards size={14} /> Budget Range
                </label>

                <select
                  id="budget"
                  value={form.budget}
                  onChange={setField('budget')}
                  required
                >
                  <option value="">Select a range</option>
                  <option value="Under $5k">Under $5k</option>
                  <option value="$5k–$15k">$5k–$15k</option>
                  <option value="$15k–$40k">$15k–$40k</option>
                  <option value="$40k+">$40k+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>

                <small>Select a range</small>

                {errors.budget && (
                  <span className="field-error">
                    {errors.budget}
                  </span>
                )}
              </div>
            </div>

            <div
              className={`form-field${
                errors.description ? ' error' : ''
              }`}
            >
              <label htmlFor="description">
                <FileText size={14} /> Project Description
              </label>

              <textarea
                id="description"
                value={form.description}
                onChange={setField('description')}
                maxLength={5000}
                required
              />

              <small>
                Tell us about your project, goals, features,
                <br />
                timeline, or anything you think is important.
              </small>

              {errors.description && (
                <span className="field-error">
                  {errors.description}
                </span>
              )}
            </div>

            <div className="form-submit-row">
              <MagneticButton
                type="submit"
                variant="primary"
                disabled={status === 'submitting'}
              >
                <Send size={14} />

                {status === 'submitting'
                  ? 'SUBMITTING...'
                  : 'SEND PROJECT BRIEF'}
              </MagneticButton>

              <span>
                <LockKeyhole size={14} /> We respect your privacy.
                <br />
                Your details are safe with us.
              </span>
            </div>

            {/* Hidden honeypot field for basic spam protection */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-9999px',
                width: '1px',
                height: '1px',
                opacity: 0,
              }}
            />

            {status === 'success' && (
              <div className="form-status success" role="status">
                Thank you! Your project details have been submitted
                successfully.
              </div>
            )}

            {status === 'error' && (
              <div className="form-status error" role="alert">
                Unable to submit your project brief. Please try
                again.
              </div>
            )}

            <p className="form-note">
              Your project brief will be stored in Google Sheets.
            </p>
          </form>

          <div className="contact-panel direct-panel">
            <div className="panel-heading">
              <div>
                <h2>GET IN TOUCH DIRECTLY</h2>
                <span />
              </div>
            </div>

            <p className="direct-intro">
              Prefer email? Reach us directly at
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </p>

            <div className="direct-list">
              <ContactDetail
                icon={<Mail size={16} />}
                title="Email Us"
                value={CONTACT_EMAIL}
              />

              <ContactDetail
                icon={<Phone size={16} />}
                title="Call Us"
                value="+91 8416973088"
              />

              <ContactDetail
                icon={<MapPin size={16} />}
                title="Location"
                value="Kanpur, Uttar Pradesh, India"
              />

              <ContactDetail
                icon={<Clock3 size={16} />}
                title="Working Hours"
                value="Mon - Fri : 10AM - 6PM"
              />
            </div>

            <div className="stay-connected">
              <b>STAY CONNECTED</b>

              <p>
                Follow us to see our latest work,
                <br />
                insights and behind-the-scenes.
              </p>

              <div className="social-icons">
                <a
                  href="https://www.linkedin.com/company/thesoftwaregarage"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                >
                  <span className="brand-mark linkedin-mark">
                    in
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/the_software_garage/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                >
                  <span className="brand-mark instagram-mark">
                    ◎
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container contact-services">
          <div>
            <Rocket size={18} />
            <b>We Build</b>
            <small>
              Powerful digital products
              <br />
              that scale.
            </small>
          </div>

          <div>
            <Code2 size={18} />
            <b>We Develop</b>
            <small>
              Clean, efficient &amp; future-
              <br />
              ready solutions.
            </small>
          </div>

          <div>
            <ShieldCheck size={18} />
            <b>We Test</b>
            <small>
              Quality-first approach for bug-free
              <br />
              performance.
            </small>
          </div>

          <div>
            <Headphones size={18} />
            <b>We Support</b>
            <small>
              Ongoing support to keep
              <br />
              your business moving.
            </small>
          </div>
        </div>
      </section>
    </div>
  )
}

function ContactDetail({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode
  title: string
  value: string
}) {
  return (
    <div className="direct-detail">
      <span>{icon}</span>

      <div>
        <b>{title}</b>
        <small>{value}</small>
      </div>
    </div>
  )
}