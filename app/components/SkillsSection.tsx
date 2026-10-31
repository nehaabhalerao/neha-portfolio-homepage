"use client";

import { useState } from "react";
import { BrainCircuit, Braces, Check, Code2, Database, Workflow } from "lucide-react";
import { skillCategories } from "../data/portfolio";

const categoryIcons = {
  backend: Braces,
  data: Database,
  frontend: Code2,
  ai: BrainCircuit,
  testing: Check,
  engineering: Workflow,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const selected = skillCategories[activeCategory];
  const SelectedIcon = categoryIcons[selected.icon];

  return (
    <section className="skills-section section-wrap" id="skills">
      <div className="section-heading">
        <div>
          <div className="section-kicker">02 / MY TOOLKIT</div>
          <h2>Tools of the trade<span>.</span></h2>
        </div>
        <p>Practical tools I use to build, connect, test, and improve software.</p>
      </div>

      <div className="skill-explorer">
        <div className="skill-category-list" role="group" aria-label="Skill categories">
          {skillCategories.map(({ title, icon: iconName }, index) => {
            const Icon = categoryIcons[iconName];
            const isActive = activeCategory === index;

            return (
              <button
                aria-pressed={isActive}
                className={`skill-category${isActive ? " is-active" : ""}`}
                key={title}
                onClick={() => setActiveCategory(index)}
                type="button"
              >
                <span className="skill-category-icon"><Icon aria-hidden="true" size={18} /></span>
                <span className="skill-category-label">{title}</span>
                <span className="skill-category-count">{String(index + 1).padStart(2, "0")}</span>
              </button>
            );
          })}
        </div>

        <div className="skill-detail" key={selected.title}>
          <div className="skill-detail-heading">
            <span className="skill-detail-icon"><SelectedIcon aria-hidden="true" size={21} /></span>
            <div>
              <span className="skill-detail-eyebrow">SELECTED DISCIPLINE</span>
              <h3>{selected.title}</h3>
            </div>
            <span className="skill-detail-index">{String(activeCategory + 1).padStart(2, "0")} / 06</span>
          </div>
          <div className="skill-chip-list" aria-live="polite">
            {selected.skills.map((skill) => (
              <span className="skill-chip" key={skill}>
                <span aria-hidden="true" />
                {skill}
              </span>
            ))}
          </div>
          <p className="skill-detail-footnote">TOOLS &amp; TECHNOLOGIES</p>
        </div>
      </div>
    </section>
  );
}
