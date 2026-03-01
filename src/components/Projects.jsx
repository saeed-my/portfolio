import { PROJECTS } from "../data/portfolio";
import "./Projects.css";

function ProjectCard({ project, index }) {
  return (
    <a href={project.link} className="project-card reveal" data-hover>
      <div className="project-left">
        <div>
          <div className="project-num">0{index + 1}</div>
          <h3 className="project-title">{project.title}</h3>
          <span className="project-tag-inline">{project.tag}</span>
        </div>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s} className="stack-pill">{s}</span>
          ))}
        </div>
      </div>

      <div className="project-right">
        <div className="project-right-bg" style={{ background: project.color }} />
        <p className="project-desc">{project.desc}</p>
        <div className="project-link-arrow">↗</div>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ background: "var(--dark2)" }}>
      <div className="section-tag">Selected Work</div>
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <span className="projects-count">{PROJECTS.length} case studies</span>
      </div>
      {PROJECTS.map((project, i) => (
        <ProjectCard key={project.id} project={project} index={i} />
      ))}
    </section>
  );
}
