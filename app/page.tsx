import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Mail,
  Sparkles,
  Terminal,
  Workflow,
} from "lucide-react";
import SiteHeader from "./components/SiteHeader";
import UniverseBackground from "./components/UniverseBackground";

const skills = [
  { title: "Backend & APIs", items: "Python · FastAPI · Node.js · REST APIs", icon: Braces },
  { title: "Data & Databases", items: "PostgreSQL · DuckDB · SQL · Redis · PGVector", icon: Database },
  { title: "Frontend", items: "Next.js · React.js · JavaScript", icon: Code2 },
  { title: "Generative AI", items: "LLMs · RAG · LangChain · AutoGen · Azure OpenAI · Prompt engineering", icon: BrainCircuit },
  { title: "Testing & Quality", items: "API testing · PyTest · Selenium · Postman", icon: Check },
  { title: "Engineering", items: "Git · Agile/Scrum · Debugging · CI/CD familiarity", icon: Workflow },
];

const projects = [
  {
    number: "01",
    type: "MACHINE LEARNING · AUDIO",
    title: "Bird Audio Detection",
    description:
      "Built an audio-classification system to identify bird species from recordings using MFCC features, spectrograms, and deep-learning models.",
    stack: ["Python", "TensorFlow", "Librosa", "Flask"],
    mark: "♪",
    tone: "project-lime",
  },
  {
    number: "02",
    type: "FRONTEND · WEB",
    title: "Come n Shine Website",
    description:
      "Developed a responsive React application with reusable components and responsive layouts across devices and browsers.",
    stack: ["React.js", "JavaScript", "Responsive UI"],
    mark: "↗",
    tone: "project-lilac",
  },
  {
    number: "03",
    type: "GENERATIVE AI · PROFESSIONAL EXPERIENCE",
    title: "Enterprise GenAI & RAG Workflows",
    description:
      "At Allianz Technology, contributed to a GenAI-powered SDLC platform and chatbot workflows involving document processing, prompt management, retrieval, and hybrid search.",
    stack: ["Python", "FastAPI", "RAG", "LangChain", "PGVector"],
    mark: "✳",
    tone: "project-peach",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <UniverseBackground />
      <div className="site-shell">
        <SiteHeader />
        <main id="main-content">
          <section className="hero section-wrap" id="home">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" /> SOFTWARE DEVELOPER <span className="eyebrow-divider">/</span> INDIA</div>
              <h1>Neha<br /><span className="hero-surname">Bhalerao.</span><em>Software developer exploring the space between backend, full-stack &amp; GenAI.</em></h1>
              <p className="hero-description">
                I build reliable software across backend systems, full-stack
                features, and Generative AI—turning complex problems into useful,
                thoughtful products.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17} /></a>
                <a className="text-link" href="mailto:bhaleraoneha56@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
              </div>
              <div className="hero-footnote">
                <span>PYTHON</span><span className="tiny-cross">✳</span><span>BACKEND</span><span className="tiny-cross">✳</span><span>GENAI</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-spark spark-one">✳</div>
          <div className="art-spark spark-two">✦</div>
          <div className="planet" />
          <div className="code-card">
            <div className="code-top">
              <div className="window-dots"><i /><i /><i /></div>
              <span>neha.py</span>
              <Terminal size={15} />
            </div>
            <div className="code-body">
              <p><span className="line-no">01</span><span className="code-purple">class</span> <span className="code-green">Developer</span>:</p>
              <p><span className="line-no">02</span>&nbsp;&nbsp;focus = [</p>
              <p><span className="line-no">03</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-yellow">&quot;backend&quot;</span>,</p>
              <p><span className="line-no">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-yellow">&quot;AI workflows&quot;</span>,</p>
              <p><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-yellow">&quot;good software&quot;</span></p>
              <p><span className="line-no">06</span>&nbsp;&nbsp;]</p>
              <p className="code-gap"><span className="line-no">07</span><span className="code-purple">def</span> <span className="code-blue">keep_learning</span>():</p>
              <p><span className="line-no">08</span>&nbsp;&nbsp;<span className="code-purple">return</span> <span className="code-yellow">&quot;always&quot;</span></p>
            </div>
            <div className="code-bottom"><span className="pulse-dot" /> AVAILABLE FOR WHAT&apos;S NEXT</div>
          </div>
          <div className="floating-chip chip-ai"><BrainCircuit size={16} /> Generative AI</div>
          <div className="floating-chip chip-api"><Braces size={16} /> APIs that scale</div>
          <div className="art-caption">CURIOUS BY DEFAULT <span>↗</span></div>
            </div>
            <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
          </section>

          <section className="intro-band" id="about">
        <div className="section-wrap intro-inner">
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="intro-content">
            <h2>Curiosity is my starting point.<br /><span>Engineering is how I explore it.</span></h2>
            <p>
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
          </section>

          <section className="section-wrap skills-section" id="skills">
        <div className="section-heading">
          <div><div className="section-kicker">02 / MY TOOLKIT</div><h2>Tools of the trade<span>.</span></h2></div>
          <p>Practical tools I use to build, connect, test, and improve software.</p>
        </div>
        <div className="skills-grid">
          {skills.map(({ title, items, icon: Icon }, index) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top"><span>0{index + 1}</span><Icon size={20} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{items}</p>
            </article>
          ))}
        </div>
          </section>

          <section className="work-section" id="work">
        <div className="section-wrap">
          <div className="section-heading work-heading">
            <div><div className="section-kicker">03 / SELECTED WORK</div><h2>Made with intent<span>.</span></h2></div>
            <p>A mix of hands-on projects and relevant professional engineering experience.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.number}>
                <div className="project-meta"><span>{project.number} / CASE STUDY</span><Sparkles size={16} /></div>
                <div className="project-illustration"><span>{project.mark}</span><div className="illustration-ring ring-a" /><div className="illustration-ring ring-b" /></div>
                <div className="project-copy">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-note">Professional work is summarized at a high level; confidential code and internal details are not included.</p>
        </div>
          </section>

          <section className="section-wrap experience-section" id="experience">
        <div className="section-heading">
          <div><div className="section-kicker">04 / THE JOURNEY SO FAR</div><h2>Experience that compounds<span>.</span></h2></div>
        </div>
        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">JAN 2026 — PRESENT</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-copy">
              <div className="timeline-top"><h3>SDE 1</h3><span>01</span></div>
              <p className="company">Tech Brains Solutions, Inc.</p>
              <p>Developing REST APIs and backend services, integrating PostgreSQL and DuckDB, building full-stack features with Next.js and React, and testing and debugging application workflows.</p>
              <div className="tag-list"><span>Node.js</span><span>Python</span><span>FastAPI</span><span>Next.js</span><span>SQL</span></div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">JAN 2025 — DEC 2025</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-copy">
              <div className="timeline-top"><h3>Trainee</h3><span>02</span></div>
              <p className="company">Allianz Technology</p>
              <p>Contributed to a GenAI-powered SDLC platform and an enterprise chatbot, supporting document processing, prompt management, RAG pipelines, and hybrid search.</p>
              <div className="tag-list"><span>Azure OpenAI</span><span>LangChain</span><span>AutoGen</span><span>PGVector</span></div>
            </div>
          </article>
          <article className="timeline-item">
            <div className="timeline-date">JAN 2024 — SEP 2024</div>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-copy">
              <div className="timeline-top"><h3>Automation Tester Intern</h3><span>03</span></div>
              <p className="company">Cyber Success, Pune</p>
              <p>Gained hands-on experience in manual and automation testing, functional and regression testing, defect reporting, and Agile processes.</p>
              <div className="tag-list"><span>Selenium</span><span>PyTest</span><span>Java</span><span>TestNG</span></div>
            </div>
          </article>
        </div>
        <div className="education-card">
          <div className="education-icon"><Code2 size={22} /></div>
          <div><span className="section-kicker">EDUCATION</span><h3>B.Tech in Computer Science and Engineering</h3><p>Government College of Engineering, Yavatmal · 2021–2024</p></div>
          <strong>8.86 <small>/ 10 CGPA</small></strong>
        </div>
          </section>

          <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="section-kicker">05 / YOUR TURN</div>
          <h2>Have a good problem?<br /><em>Let&apos;s solve it.</em></h2>
          <p>Open to connecting with teams building thoughtful software, useful AI tools, and reliable products.</p>
          <a className="button button-lime" href="mailto:bhaleraoneha56@gmail.com">Say hello <ArrowRight size={17} /></a>
          <div className="contact-email"><Mail size={15} /> bhaleraoneha56@gmail.com</div>
          <div className="contact-decoration">NB<span>.</span></div>
        </div>
          </section>

          <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">NB<span>.</span></a>
        <p>Designed with curiosity. Built with care.</p>
        <div className="footer-links">
          <a href="mailto:bhaleraoneha56@gmail.com" aria-label="Email Neha"><Mail size={17} /></a>
          <a href="#work" aria-label="Projects"><Code2 size={17} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
        </div>
        <span className="copyright">© 2026 NEHA BHALERAO</span>
          </footer>
        </main>
      </div>
    </>
  );
}
