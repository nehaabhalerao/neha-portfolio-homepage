import {
  ArrowUpRight,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Braces,
    label: "Backend & Full Stack",
    detail: "REST APIs · Backend services · Full-stack features",
  },
  {
    icon: BrainCircuit,
    label: "Generative AI",
    detail: "LLMs · RAG · AI-powered automation",
  },
  {
    icon: Workflow,
    label: "Engineering",
    detail: "Database integration · Testing · CI/CD familiarity",
  },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-wrap">
        <div className="section-kicker about-section-kicker">01 / A LITTLE ABOUT ME</div>
        <div className="about-layout">
          <aside className="developer-identity" aria-label="Developer identity and technologies">
            <div className="identity-orbit identity-orbit-outer" aria-hidden="true" />
            <div className="identity-orbit identity-orbit-inner" aria-hidden="true" />
            <div className="identity-monogram">NB<span>.</span></div>
            <div className="identity-caption"><span /> SOFTWARE / SYSTEMS / AI</div>
            <div className="identity-terminal">
              <div className="identity-terminal-top">
                <span className="identity-terminal-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>developer.profile</span>
                <Code2 aria-hidden="true" size={14} />
              </div>
              <div className="identity-terminal-body">
                <p><span>01</span> <b>focus</b> = [</p>
                <p><span>02</span> &nbsp; &quot;backend&quot;,</p>
                <p><span>03</span> &nbsp; &quot;full-stack&quot;,</p>
                <p><span>04</span> &nbsp; &quot;GenAI&quot;</p>
                <p><span>05</span> ]</p>
              </div>
            </div>
            <div className="identity-tech identity-tech-python"><Braces aria-hidden="true" size={14} /> Python</div>
            <div className="identity-tech identity-tech-api"><Database aria-hidden="true" size={14} /> PostgreSQL</div>
            <div className="identity-tech identity-tech-ai"><BrainCircuit aria-hidden="true" size={14} /> RAG / LLMs</div>
          </aside>

          <div className="about-content">
            <p className="about-overline">SOFTWARE DEVELOPER · BACKEND · GENAI</p>
            <h2>
              Curiosity is my starting point.
              <span> Engineering is how I explore it.</span>
            </h2>
            <p className="about-introduction">
              With 1+ year of professional software development experience, I build
              REST APIs, backend services, database-driven applications, and
              full-stack features. My earlier work with enterprise GenAI introduced
              me to LLMs, retrieval-augmented generation, and AI-powered automation.
            </p>
            <div className="about-stats">
              <div><strong>1+</strong><span>YEAR IN SOFTWARE</span></div>
              <div><strong>AI +</strong><span>BACKEND FOCUS</span></div>
              <div><strong>8.86</strong><span>B.TECH CGPA / 10</span></div>
            </div>
          </div>
        </div>

        <div className="about-capabilities" aria-label="Areas of experience">
          {capabilities.map(({ icon: Icon, label, detail }, index) => (
            <article className="about-capability" key={label}>
              <span className="about-capability-index">0{index + 1}</span>
              <span className="about-capability-icon"><Icon aria-hidden="true" size={20} strokeWidth={1.7} /></span>
              <div>
                <h3>{label}</h3>
                <p>{detail}</p>
              </div>
              <ArrowUpRight aria-hidden="true" className="about-capability-arrow" size={17} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
