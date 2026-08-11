import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '@/data/navigation'

interface Props {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: Props) {
  // Lock body scroll while open; always restore on unmount/close.
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prevOverflow
      }
    }
  }, [open])

  return (
    <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={onClose}
          tabIndex={open ? 0 : -1}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
