import { ReactNode, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

interface Props {
  to?: string
  href?: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  cursorLabel?: string
}

export default function MagneticButton({
  to,
  href,
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  disabled,
  cursorLabel,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const reducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const el = ref.current

      if (!el || reducedMotion) return

      const xTo = gsap.quickTo(el, 'x', {
        duration: 0.4,
        ease: 'power3',
      })

      const yTo = gsap.quickTo(el, 'y', {
        duration: 0.4,
        ease: 'power3',
      })

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()

        const relX =
          e.clientX - (rect.left + rect.width / 2)

        const relY =
          e.clientY - (rect.top + rect.height / 2)

        xTo(relX * 0.3)
        yTo(relY * 0.3)
      }

      const onLeave = () => {
        xTo(0)
        yTo(0)
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)

      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    },
    {
      dependencies: [reducedMotion],
    }
  )

  const className =
    variant === 'primary'
      ? 'btn-primary'
      : 'btn-secondary'

  const cursorProps = {
    'data-cursor': 'expand',
    'data-cursor-label': cursorLabel,
  }

  if (to) {
    return (
      <Link
        to={to}
        ref={(node) => {
          ref.current = node
        }}
        className={className}
        {...cursorProps}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        ref={(node) => {
          ref.current = node
        }}
        className={className}
        {...cursorProps}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={(node) => {
        ref.current = node
      }}
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...cursorProps}
    >
      {children}
    </button>
  )
}