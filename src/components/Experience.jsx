import Reveal from './Reveal.jsx';
import ExperienceItem from './ExperienceItem.jsx';

export default function Experience({
  data,
  experiences,
}) {
  return (
    <Reveal
      as="section"
      id="experience"
      className="portfolio-section experience-section"
    >
      <div className="container">

        <div className="section-heading">

          {data.kicker && (
            <div className="section-kicker">
              // {data.kicker}
            </div>
          )}

          {data.heading && (
            <h2>
              {data.heading}
            </h2>
          )}

          {data.intro && (
            <p>
              {data.intro}
            </p>
          )}

        </div>

        <div className="experience-list">

          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.company}
              experience={experience}
            />
          ))}

        </div>

      </div>
    </Reveal>
  );
}