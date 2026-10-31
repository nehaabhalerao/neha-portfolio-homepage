import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Braces, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "../../data/portfolio";

type ProjectPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find(({ slug }) => slug === params.slug);
  return {
    title: project ? `${project.title} | Neha Bhalerao` : "Project | Neha Bhalerao",
    description: project?.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(({ slug }) => slug === params.slug);
  if (!project) {
    notFound();
  }

  return (
    <main className="project-detail-page">
      <div className="project-detail-wrap">
        <Link className="project-back-link" href="/#work">
          <ArrowLeft aria-hidden="true" size={16} /> Back to selected work
        </Link>

        <header className="project-detail-header">
          <p className="project-detail-kicker">{project.number} / {project.type}</p>
          <h1>{project.title}</h1>
        </header>

        <div className="project-detail-information">
          <section className="project-detail-panel">
            <div className="project-detail-panel-heading">
              <Braces aria-hidden="true" size={19} />
              <h2>Project overview</h2>
            </div>
            <p>{project.description}</p>
          </section>
          <section className="project-detail-panel">
            <div className="project-detail-panel-heading">
              <Layers3 aria-hidden="true" size={19} />
              <h2>Technologies used</h2>
            </div>
            <div className="project-tech-list">
              {project.technologies.map((technology) => (
                <span className="project-tech" key={technology}>{technology}</span>
              ))}
            </div>
          </section>
        </div>

        <Link className="project-details-link project-detail-return" href="/#work">
          Return to projects <ArrowUpRight aria-hidden="true" size={16} />
        </Link>
      </div>
    </main>
  );
}
