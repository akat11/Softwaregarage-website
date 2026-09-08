import { Link } from 'react-router-dom'

const companyLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/work' },
]

const resourceLinks = [
  { label: 'Process', to: '/process' },
  { label: 'Industries', to: '/industries' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'softwaregarage2025@gmail.com', href: 'mailto:softwaregarage2025@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand-wrap">
          <h2 className="footer-brand">
            SOFTWARE <span>GARAGE</span>
          </h2>

          <div className="footer-motto">
            BUILT TO SOLVE. DESIGNED TO SCALE.
            <span className="motto-line" aria-hidden="true" />
          </div>

        </div>

        <div className="footer-menu-grid">
          <div className="footer-menu-block">
            <div className="footer-menu-label">
              <span className="footer-menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6.5C4 5.67 4.67 5 5.5 5H11L13 7H18.5C19.33 7 20 7.67 20 8.5V17.5C20 18.33 19.33 19 18.5 19H5.5C4.67 19 4 18.33 4 17.5V6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              COMPANY
            </div>
            <nav className="footer-links" aria-label="Company navigation">
              {companyLinks.map((item) => (
                <Link key={item.label} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-menu-block">
            <div className="footer-menu-label">
              <span className="footer-menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7.5H17M7 12H17M7 16.5H13.5M5 4.5H19C19.83 4.5 20.5 5.17 20.5 6V18C20.5 18.83 19.83 19.5 19 19.5H5C4.17 19.5 3.5 18.83 3.5 18V6C3.5 5.17 4.17 4.5 5 4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              RESOURCES
            </div>
            <nav className="footer-links" aria-label="Resources navigation">
              {resourceLinks.map((item) =>
                item.to ? (
                  <Link key={item.label} to={item.to}>
                    {item.label}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ),
              )}
            </nav>
          </div>

          <div className="footer-menu-block">
            <div className="footer-menu-label">
              <span className="footer-menu-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 15.5L10.5 11L13.5 14L18 9.5M18 9.5H14.5M18 9.5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.5 18.5H18.5C19.33 18.5 20 17.83 20 17V7C20 6.17 19.33 5.5 18.5 5.5H5.5C4.67 5.5 4 6.17 4 7V17C4 17.83 4.67 18.5 5.5 18.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                </svg>
              </span>
              SOCIAL
            </div>
            <nav className="footer-links" aria-label="Social navigation">
              {socialLinks.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer noopener">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="footer-divider" aria-hidden="true" />

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2026 Software Garage. All rights reserved.
        </div>

        <div className="footer-built-with" aria-label="Built with love for a better tomorrow">
          Built with <span aria-hidden="true">♥</span> for a better tomorrow.
        </div>

        <Link to="/contact" className="footer-cta" aria-label="Contact us" />
      </div>
    </footer>
  )
}
