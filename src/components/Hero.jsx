import Reveal from './Reveal.jsx';
import TypewriterText from './TypewriterText.jsx';

export default function Hero({ data }) {
  return (
    <Reveal as="section" id="home" className="portfolio-section hero">
      <div className="container hero__grid">
        <div className="hero__content">
          {data.availability && (
            <div className="availability-badge">
              <span className="availability-badge__dot" aria-hidden="true" />
              {data.availability}
            </div>
          )}

          <div className="section-kicker">// {data.kicker}</div>
          <h1 className="hero__title">
          <TypewriterText
            texts={[
              "Hi, I'm Uttam Karmakar",
              'a Drupal Backend Developer.',
            ]}
          />
        </h1>
          <p className="hero__intro">{data.intro}</p>

          <div className="hero__actions">
            <a className="button button--primary" href={data.primaryCta.href}>
              {data.primaryCta.label} <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--secondary" href={data.secondaryCta.href}>
              {data.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img src={data.image} alt={data.imageAlt} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}
