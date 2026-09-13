export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image">
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">{project.meta}</div>
        <h3 className="project-card__title">{project.title}</h3>
        <div className="project-card__role">{project.role}</div>
        <p className="project-card__summary">{project.summary}</p>

        <div className="tech-tags" aria-label="Technologies">
          {project.technologies.map((technology) => (
            <span className="tech-tag" key={technology}>{technology}</span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            className="project-card__link"
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel || 'View project'} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
