import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials, testimonialStats, clientLogos } from '@/data/testimonials'
import CountUpStat from '@/components/CountUpStat'

function StarRating({ rating }: { rating: number }) {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => {
        const diff = rating - i
        if (diff >= 1) {
          return <Star key={i} size={13} fill="currentColor" />
        }
        if (diff > 0) {
          return (
            <span key={i} className="testimonial-star-half">
              <Star size={13} className="star-outline" />
              <Star size={13} fill="currentColor" className="star-fill" />
            </span>
          )
        }
        return <Star key={i} size={13} className="star-outline" />
      })}
    </>
  )
}

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
                  <CountUpStat value={value} />
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
                      <StarRating rating={t.rating} />
                    </span>
                  </div>

                  <div className="testimonial-quote">
                    {t.quote.split('\n\n').map((paragraph, i, arr) => (
                      <p key={i}>
                        {i === 0 && '“'}
                        {paragraph}
                        {i === arr.length - 1 && '”'}
                      </p>
                    ))}
                  </div>

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
          {[0, 1].map((dot) => {
            const half = Math.ceil(total / 2)
            const dotStart = dot === 0 ? 0 : half
            const isActive = dot === 0 ? active < half : active >= half
            return (
              <button
                type="button"
                key={dot}
                className={isActive ? 'active' : ''}
                onClick={() => setActive(dotStart)}
                aria-label={`Go to testimonial group ${dot + 1}`}
              />
            )
          })}
        </div>

        <div className="client-logos-strip">
          <span className="client-logos-label">OUR CLIENTS &amp; PARTNERS</span>

          <div className="client-logos-viewport">
            <div className="client-logos-track">
              {[...clientLogos, ...clientLogos].map(({ name, icon: Icon }, i) => (
                <div className="client-logo" key={`${name}-${i}`}>
                  <Icon size={24} strokeWidth={1.6} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
