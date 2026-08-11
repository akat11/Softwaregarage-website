import Seo from '@/components/Seo'
import MagneticButton from '@/components/MagneticButton'

export default function NotFound() {
  return (
    <div className="not-found">
      <Seo title="Page Not Found | Software Garage" description="This page doesn't exist." />
      <div className="eyebrow" style={{ justifyContent: 'center' }}>404</div>
      <h1>LOST IN<br />THE GARAGE.</h1>
      <p style={{ color: 'var(--text-dim)', maxWidth: '400px', margin: '20px 0 34px' }}>
        The page you're looking for doesn't exist or has moved.
      </p>
      <MagneticButton to="/" variant="primary">BACK TO HOME →</MagneticButton>
    </div>
  )
}
