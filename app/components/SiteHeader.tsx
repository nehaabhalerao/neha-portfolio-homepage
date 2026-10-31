"use client";

import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "https://github.com/nehaabhalerao", label: "GitHub", external: true },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        const currentSection = visibleSections[0]?.target.id;
        if (currentSection) {
          setActiveSection(currentSection);
        }
      },
      { rootMargin: "-25% 0px -65% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="wordmark" href="#home" aria-label="Neha Bhalerao home" onClick={closeMenu}>
        NB<span>.</span>
      </a>
      <nav
        className={`desktop-nav${isMenuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map(({ href, label, external }) => (
          <a
            href={href}
            key={href}
            onClick={closeMenu}
            className={!external && activeSection === href.slice(1) ? "is-active" : undefined}
            aria-current={!external && activeSection === href.slice(1) ? "location" : undefined}
            rel={external ? "noreferrer" : undefined}
            target={external ? "_blank" : undefined}
          >
            {label}
          </a>
        ))}
        <a className="mobile-nav-contact" href="mailto:bhaleraoneha56@gmail.com" onClick={closeMenu}>
          Get in touch <ArrowUpRight size={15} />
        </a>
      </nav>
      <div className="header-actions">
        <a className="header-cta" href="mailto:bhaleraoneha56@gmail.com">
          Let&apos;s talk <ArrowUpRight size={15} />
        </a>
        <button
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          aria-pressed={theme === "light"}
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          {theme === "dark" ? <Sun aria-hidden="true" size={17} /> : <Moon aria-hidden="true" size={17} />}
          <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        className="menu-toggle"
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        type="button"
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
