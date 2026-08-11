import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            SOFTWARE <span>GARAGE</span>
          </div>
          <div className="footer-tag">BUILD. TEST. TRANSFORM.</div>
          <div className="footer-detail">BUILT • TESTED • SHIPPED</div>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <Link to="/process">Process</Link>
            <Link to="/work">Case Studies</Link>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Social</h4>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener">Instagram</a>
            <a href="https://github.com" target="_blank" rel="noreferrer noopener">GitHub</a>
            <a href="https://dribbble.com" target="_blank" rel="noreferrer noopener">Dribbble</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} SOFTWARE GARAGE. ALL RIGHTS RESERVED.</span>
        <span>SEE YOU INSIDE. ●</span>
      </div>
    </footer>
  )
}
