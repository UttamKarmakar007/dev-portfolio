export default function SkillGroup({ group }) {
  return (
    <article className="skill-group">
      <h3 className="skill-group__title">{group.title}</h3>
      <p className="skill-group__description">{group.description}</p>
      <div className="skill-group__items">
        {group.skills.map((skill) => (
          <span className="skill-pill" key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}
