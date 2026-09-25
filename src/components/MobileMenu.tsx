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
      <nav className="mobile-menu-links">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            style={{ transitionDelay: open ? `${index * 0.05 + 0.1}s` : '0s' }}
          >
            <span className="mobile-menu-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="mobile-menu-label">{item.label}</span>
            <span className="mobile-menu-arrow" aria-hidden="true">
              →
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="mobile-menu-footer">
        <NavLink to="/contact" className="mobile-menu-cta" onClick={onClose} tabIndex={open ? 0 : -1}>
          LET&apos;S BUILD →
        </NavLink>
      </div>
    </div>
  )
}
