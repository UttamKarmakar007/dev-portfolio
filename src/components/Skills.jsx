import SkillGroup from './SkillGroup.jsx';
import Reveal from './Reveal.jsx';

export default function Skills({ data, groups }) {
  return (
    <Reveal as="section" id="skills" className="portfolio-section skills-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">// {data.kicker}</div>
          <h2>{data.heading}</h2>
          <p>{data.intro}</p>
        </div>

        <div className="skill-groups">
          {groups.map((group) => (
            <div className="skill-groups__item" key={group.title}>
              <SkillGroup group={group} />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
