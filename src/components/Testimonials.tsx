import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials, testimonialStats, clientLogos } from '@/data/testimonials'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const goPrev = () => setActive((i) => (i - 1 + total) % total)
  const goNext = () => setActive((i) => (i + 1) % total)

  const at = (offset: number) => testimonials[(active + offset + total) % total]

  return (
    <section className="testimonials-section reveal">
      <div className="testimonials-bg" aria-hidden="true" />

      <div className="container">
        <div className="testimonials-header">
          <div className="testimonials-intro">
            <div className="eyebrow">TESTIMONIALS</div>

            <h2>
              TRUSTED BY
              <br />
              <span className="text-lime">VISIONARY CLIENTS</span>
            </h2>

            <p>
              From startups to global enterprises, we help businesses turn
              ideas into powerful digital products. Here&apos;s what our
              clients say about working with The Software Garage.
            </p>
          </div>

          <div className="testimonials-stats">
            {testimonialStats.map(({ icon: Icon, value, suffix, label }) => (
              <div className="testimonial-stat" key={label}>
                <span className="testimonial-stat-icon">
                  <Icon size={20} strokeWidth={1.6} />
                </span>
                <strong>
                  {value}
                  {suffix}
                </strong>
                <small>{label}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="testimonial-carousel">
          <button
            type="button"
            className="testimonial-nav prev"
            onClick={goPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="testimonial-track">
            {[-1, 0, 1].map((offset) => {
              const t = at(offset)
              return (
                <article
                  className={
                    offset === 0
                      ? 'testimonial-card active'
                      : 'testimonial-card side'
                  }
                  key={`${t.name}-${offset}`}
                  aria-hidden={offset !== 0}
                >
                  <div className="testimonial-top">
                    <span className="testimonial-avatar">{t.initials}</span>

                    <span className="testimonial-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} fill="currentColor" />
                      ))}
                    </span>
                  </div>

                  <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>

                  <div className="testimonial-person">
                    <b>{t.name}</b>
                    <span>{t.title}</span>
                    <em>
                      <span className="testimonial-flag">{t.flag}</span>
                      {t.country}
                    </em>
                  </div>
                </article>
              )
            })}
          </div>

          <button
            type="button"
            className="testimonial-nav next"
            onClick={goNext}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((t, i) => (
            <button
              type="button"
              key={t.name}
              className={i === active ? 'active' : ''}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="client-logos-strip">
          <span className="client-logos-label">OUR CLIENTS &amp; PARTNERS</span>

          <div className="client-logos-row">
            {clientLogos.map(({ name, icon: Icon }) => (
              <div className="client-logo" key={name}>
                <Icon size={20} strokeWidth={1.6} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
