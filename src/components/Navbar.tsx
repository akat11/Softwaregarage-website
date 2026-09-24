import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '@/data/navigation'

interface Props {
  onBurgerClick: () => void
  menuOpen: boolean
}

export default function Navbar({ onBurgerClick, menuOpen }: Props) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="logo" data-cursor="expand">
        SOFTWARE<span>GARAGE</span>
      </Link>

      <div className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            end={item.path === '/'}
            data-cursor="expand"
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <Link to="/contact" className="nav-cta" data-cursor="expand">
        LET&apos;S BUILD →
      </Link>

      <button
        className={`burger${menuOpen ? ' open' : ''}`}
        onClick={onBurgerClick}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
