import type { LucideIcon } from 'lucide-react'
import { Briefcase, Users, Laptop, Lightbulb, Globe2, BrainCircuit, Box, UserX } from 'lucide-react'

interface JourneyStep {
  title: string
  text: string
  icon: LucideIcon
  image?: string
}

const steps: JourneyStep[] = [
  {
    title: 'The Layoff',
    text: 'After years of working in the tech industry, a layoff changed everything. It was unexpected, but it became the starting point of a new journey.',
    icon: UserX,
    image: '/journey-layoff.png',
  },
  {
    title: 'Job Hunt & Rejections',
    text: 'For the next two months, we focused on finding another job. Interviews went well and technical rounds were strong, but the final rounds did not work out. It was frustrating, but it taught an important lesson — we needed to create our own opportunities.',
    icon: Briefcase,
    image: '/journey-job-hunt.png',
  },
  {
    title: 'Freelancing as a Start',
    text: 'Instead of waiting, we started freelancing. One project led to another. We worked with clients from different countries, solved real-world business problems and gained experience.',
    icon: Laptop,
    image: '/journey-freelancing.png',
  },
  {
    title: 'The Idea',
    text: 'While working with clients, a bigger idea started taking shape — what if we brought together a team of experienced people and built something of our own?',
    icon: Lightbulb,
    image: '/journey-idea.png',
  },
  {
    title: 'The Software Garage',
    text: 'That idea became The Software Garage — a place where technology, creativity and problem-solving come together to build real solutions for businesses worldwide.',
    icon: Box,
    image: '/journey-software-garage.png',
  },
  {
    title: 'The Hidden Team',
    text: 'Friends and experienced professionals, many working or having worked at top companies, joined the Garage. They contribute part-time while continuing their own careers. Their identities remain private — the work speaks for them.',
    icon: Users,
    image: '/journey-hidden-team.png',
  },
  {
    title: 'Global to Local',
    text: 'We started with global clients and soon expanded to businesses across India. Different industries, challenges and technologies gave us varied experience and helped us grow stronger.',
    icon: Globe2,
    image: '/journey-global.png',
  },
  {
    title: 'The AI Chapter',
    text: 'As technology evolved, new people with AI expertise joined the Garage. Our focus is on AI, automation and intelligent solutions — building what is next for businesses.',
    icon: BrainCircuit,
    image: '/journey-ai.png',
  },
]

export default function OurJourney() {
  return (
    <section className="our-journey">
      <div className="our-journey-inner">
        <div className="our-journey-head">
          <div className="eyebrow">OUR JOURNEY</div>
          <h2>
            FROM A SETBACK
            <br />
            <span>to A DIGITAL GARAGE.</span>
          </h2>
          <p>A journey built on challenges, persistence, great people and the belief that technology can create real change.</p>
        </div>

        <div className="our-journey-banner">
          <img src="/journey-banner.png" alt="" loading="lazy" decoding="async" />
        </div>

        <ol className="journey-timeline">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLeft = index % 2 === 0
            const visual = (
              <div className={step.image ? 'journey-visual has-image' : 'journey-visual'} aria-hidden="true">
                {step.image ? <img src={step.image} alt="" loading="lazy" decoding="async" /> : <Icon size={44} strokeWidth={1.4} />}
              </div>
            )
            const text = (
              <div className="journey-text">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            )
            return (
              <li
                key={step.title}
                className={`journey-item reveal ${isLeft ? 'left' : 'right'}`}
              >
                <span className="journey-marker">{String(index + 1).padStart(2, '0')}</span>

                <article className="journey-card">
                  {isLeft ? (
                    <>
                      {visual}
                      {text}
                    </>
                  ) : (
                    <>
                      {text}
                      {visual}
                    </>
                  )}
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
