import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import SiteHeader from "./components/SiteHeader";
import UniverseBackground from "./components/UniverseBackground";

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
              <h1>
                <span>Building</span>
                <span className="hero-gradient">intelligent</span>
                <span className="hero-gradient">digital experiences.</span>
              </h1>
              <p className="hero-name">I&apos;m <span>Neha Bhalerao.</span></p>
              <p className="hero-specialty">
                Software developer exploring the space between backend, full-stack &amp; GenAI.
              </p>
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

          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />

          <ContactSection />

          <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">NB<span>.</span></a>
        <p>Designed with curiosity. Built with care.</p>
        <div className="footer-links">
          <a href="mailto:bhaleraoneha56@gmail.com" aria-label="Email Neha"><Mail aria-hidden="true" size={17} /></a>
          <a href="https://github.com/nehaabhalerao" aria-label="GitHub" rel="noopener noreferrer" target="_blank"><Github aria-hidden="true" size={17} /></a>
          <a href="https://www.linkedin.com/in/neha-bhalerao-081619213/" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank"><Linkedin aria-hidden="true" size={17} /></a>
          <a href="https://leetcode.com/u/neha_bhalerao/" aria-label="LeetCode" rel="noopener noreferrer" target="_blank"><Code2 aria-hidden="true" size={17} /></a>
          <a href="#work" aria-label="Projects"><Code2 aria-hidden="true" size={17} /></a>
          <a href="#home" aria-label="Back to top"><ArrowUpRight aria-hidden="true" size={17} /></a>
        </div>
        <span className="copyright">© 2026 NEHA BHALERAO</span>
          </footer>
        </main>
      </div>
    </>
  );
}
