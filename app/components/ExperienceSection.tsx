import { Code2 } from "lucide-react";
import { education, experience } from "../data/portfolio";

export default function ExperienceSection() {
  return (
    <section className="section-wrap experience-section" id="experience">
      <div className="section-heading">
        <div>
          <div className="section-kicker">04 / THE JOURNEY SO FAR</div>
          <h2>Experience that compounds<span>.</span></h2>
        </div>
      </div>

      <div className="timeline">
        {experience.map(({ date, role, company, description, technologies }, index) => (
          <article className="timeline-item" key={company}>
            <div className="timeline-date">{date}</div>
            <div className="timeline-marker" aria-hidden="true"><span /></div>
            <div className="timeline-copy">
              <div className="timeline-top">
                <h3>{role}</h3>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="company">{company}</p>
              <p className="timeline-description">{description}</p>
              <div className="tag-list">
                {technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="education-card">
        <div className="education-icon"><Code2 aria-hidden="true" size={22} /></div>
        <div>
          <span className="section-kicker">EDUCATION</span>
          <h3>{education.degree}</h3>
          <p>{education.institution}</p>
        </div>
        <strong>{education.result} <small>/ 10 CGPA</small></strong>
      </div>
    </section>
  );
}
