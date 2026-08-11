import { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="reveal">{title}</h2>
      </div>
      {description && <p className="reveal">{description}</p>}
    </div>
  )
}
