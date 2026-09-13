import ProjectCard from './ProjectCard.jsx';
import Reveal from './Reveal.jsx';

export default function Projects({ data, projects }) {
  return (
    <Reveal as="section" id="projects" className="portfolio-section projects-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-kicker">// {data.kicker}</div>
          <h2>{data.heading}</h2>
          <p>{data.intro}</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="projects-grid__item" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
