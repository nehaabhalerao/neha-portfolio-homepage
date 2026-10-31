"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, AudioLines, BrainCircuit, PanelsTopLeft, Sparkles } from "lucide-react";
import { projects } from "../data/portfolio";

const categories = ["All", "Machine Learning", "Frontend", "Generative AI"];
const visualIcons = {
  audio: AudioLines,
  web: PanelsTopLeft,
  ai: BrainCircuit,
};

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by category">
        {categories.map((category) => (
          <button
            aria-pressed={activeCategory === category}
            className={`project-filter${activeCategory === category ? " is-active" : ""}`}
            key={category}
            onClick={() => setActiveCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid" aria-live="polite">
        {visibleProjects.map((project) => {
          const Icon = visualIcons[project.visual];
          return (
            <article className={`project-card project-card-${project.visual}`} key={project.slug}>
              <div className="project-art">
                <div className="project-art-grid" />
                <div className="project-art-orbit project-art-orbit-one" />
                <div className="project-art-orbit project-art-orbit-two" />
                <div className="project-art-core">
                  <Icon aria-hidden="true" size={43} strokeWidth={1.15} />
                </div>
                <span className="project-art-mark">{project.mark}</span>
                <span className="project-art-index">{project.number} / CASE STUDY</span>
                <Sparkles aria-hidden="true" className="project-art-spark" size={17} />
              </div>
              <div className="project-copy">
                <div className="project-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-list" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <span className="project-tech" key={technology}>{technology}</span>
                  ))}
                </div>
                <Link className="project-details-link" href={`/projects/${project.slug}`}>
                  Project details <ArrowUpRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
