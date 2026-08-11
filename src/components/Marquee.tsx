interface Props {
  items: string[]
  reverse?: boolean
  duration?: number
}

export default function Marquee({ items, reverse, duration = 32 }: Props) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-wrap">
      <div
        className={`marquee${reverse ? ' rev' : ''}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((t, i) => (
          <span key={i}>
            {t} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  )
}
