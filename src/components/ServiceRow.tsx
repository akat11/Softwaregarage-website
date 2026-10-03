import MagneticButton from '@/components/MagneticButton'
import type { ServiceItem } from '@/data/servicesPage'

interface Props {
  service: ServiceItem
}

export default function ServiceRow({ service }: Props) {
  return (
    <article className="service-detail reveal" id={service.slug}>
      <div className="service-number">
        <span>{service.number}</span>
      </div>

      <div className="service-content">
        <div className="service-category">{service.category}</div>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <div className="service-details-grid">
          <div>
            <div className="service-block-title">CAPABILITIES</div>
            <ul className="service-list">
              {service.capabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <div className="service-block-title">TECHNOLOGIES</div>
            <div className="service-tags">
              {service.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="service-block-title">TYPICAL USE CASES</div>
            <ul className="service-list">
              {service.useCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="service-action">
          <MagneticButton to="/contact" variant="secondary">
            {service.cta} →
          </MagneticButton>
        </div>
      </div>

      <div className="service-visual">
        <div className="visual-graphic">
          <img
            className="service-image"
            src={service.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </article>
  )
}
