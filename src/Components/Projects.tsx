interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="projects" id="projects">
      <div className="section-header reveal">
        <span className="section-number">04 — Projects</span>
        <h2>Selected work</h2>
      </div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a
            key={p.url}
            className={`project-card reveal reveal-delay-${i % 4}`}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-title">{p.title}</div>
            <div className="project-cat">{p.category}</div>
            <div className="project-link">Visit project ↗</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
