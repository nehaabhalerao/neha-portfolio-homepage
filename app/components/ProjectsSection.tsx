import ProjectsShowcase from "./ProjectsShowcase";

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="work">
      <div className="section-wrap">
        <div className="section-heading work-heading">
          <div>
            <div className="section-kicker">03 / SELECTED WORK</div>
            <h2>Made with intent<span>.</span></h2>
          </div>
          <p>A mix of hands-on projects and relevant professional engineering experience.</p>
        </div>
        <ProjectsShowcase />
        <p className="project-note">
          Professional work is summarized at a high level; confidential code and internal details are not included.
        </p>
      </div>
    </section>
  );
}
