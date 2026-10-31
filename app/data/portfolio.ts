export type SkillCategory = {
  title: string;
  icon: "backend" | "data" | "frontend" | "ai" | "testing" | "engineering";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend & APIs",
    icon: "backend",
    skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Data & Databases",
    icon: "data",
    skills: ["PostgreSQL", "DuckDB", "SQL", "Redis", "PGVector"],
  },
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["Next.js", "React.js", "JavaScript"],
  },
  {
    title: "Generative AI",
    icon: "ai",
    skills: ["LLMs", "RAG", "LangChain", "AutoGen", "Azure OpenAI", "Prompt engineering"],
  },
  {
    title: "Testing & Quality",
    icon: "testing",
    skills: ["API testing", "PyTest", "Selenium", "Postman"],
  },
  {
    title: "Engineering",
    icon: "engineering",
    skills: ["Git", "Agile/Scrum", "Debugging", "CI/CD familiarity"],
  },
];

export type PortfolioProject = {
  number: string;
  slug: string;
  category: string;
  type: string;
  title: string;
  description: string;
  technologies: string[];
  mark: string;
  visual: "audio" | "web" | "ai";
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    slug: "bird-audio-detection",
    category: "Machine Learning",
    type: "MACHINE LEARNING · AUDIO",
    title: "Bird Audio Detection",
    description:
      "Built an audio-classification system to identify bird species from recordings using MFCC features, spectrograms, and deep-learning models.",
    technologies: ["Python", "TensorFlow", "Librosa", "Flask"],
    mark: "♪",
    visual: "audio",
  },
  {
    number: "02",
    slug: "come-n-shine-website",
    category: "Frontend",
    type: "FRONTEND · WEB",
    title: "Come n Shine Website",
    description:
      "Developed a responsive React application with reusable components and responsive layouts across devices and browsers.",
    technologies: ["React.js", "JavaScript", "Responsive UI"],
    mark: "↗",
    visual: "web",
  },
  {
    number: "03",
    slug: "enterprise-genai-rag-workflows",
    category: "Generative AI",
    type: "GENERATIVE AI · PROFESSIONAL EXPERIENCE",
    title: "Enterprise GenAI & RAG Workflows",
    description:
      "At Allianz Technology, contributed to a GenAI-powered SDLC platform and chatbot workflows involving document processing, prompt management, retrieval, and hybrid search.",
    technologies: ["Python", "FastAPI", "RAG", "LangChain", "PGVector"],
    mark: "✳",
    visual: "ai",
  },
];

export const experience = [
  {
    date: "JAN 2026 — PRESENT",
    role: "SDE 1",
    company: "Tech Brains Solutions, Inc.",
    description:
      "Developing REST APIs and backend services, integrating PostgreSQL and DuckDB, building full-stack features with Next.js and React, and testing and debugging application workflows.",
    technologies: ["Node.js", "Python", "FastAPI", "Next.js", "SQL"],
  },
  {
    date: "JAN 2025 — DEC 2025",
    role: "Trainee",
    company: "Allianz Technology",
    description:
      "Contributed to a GenAI-powered SDLC platform and an enterprise chatbot, supporting document processing, prompt management, RAG pipelines, and hybrid search.",
    technologies: ["Azure OpenAI", "LangChain", "AutoGen", "PGVector"],
  },
  {
    date: "JAN 2024 — SEP 2024",
    role: "Automation Tester Intern",
    company: "Cyber Success, Pune",
    description:
      "Gained hands-on experience in manual and automation testing, functional and regression testing, defect reporting, and Agile processes.",
    technologies: ["Selenium", "PyTest", "Java", "TestNG"],
  },
];

export const education = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Government College of Engineering, Yavatmal · 2021–2024",
  result: "8.86",
};
