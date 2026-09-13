import Reveal from './Reveal.jsx';

export default function Contact({ data }) {
  return (
    <Reveal as="section" id="contact" className="portfolio-section contact-section">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-panel__intro">
            <div className="section-kicker">// {data.kicker}</div>
            <h2>{data.heading}</h2>
            <p>{data.intro}</p>
          </div>

          <div className="contact-panel__details">
            {data.email && (
              <a className="contact-item" href={`mailto:${data.email}`}>
                <span className="contact-item__label">Email</span>
                <span>{data.email}</span>
              </a>
            )}

            {data.phone && (
              <a className="contact-item" href={`tel:${data.phone.replace(/\s+/g, '')}`}>
                <span className="contact-item__label">Phone</span>
                <span>{data.phone}</span>
              </a>
            )}

            {data.location && (
              <div className="contact-item">
                <span className="contact-item__label">Location</span>
                <span>{data.location}</span>
              </div>
            )}
          </div>

          <div className="social-links">
            {data.socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
