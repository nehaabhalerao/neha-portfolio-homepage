"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Neha Bhalerao home" onClick={closeMenu}>
        NB<span>.</span>
      </a>
      <nav
        className={`desktop-nav${isMenuOpen ? " is-open" : ""}`}
        id="primary-navigation"
        aria-label="Main navigation"
      >
        {links.map(({ href, label }) => (
          <a href={href} key={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <a className="mobile-nav-contact" href="mailto:bhaleraoneha56@gmail.com" onClick={closeMenu}>
          Get in touch <ArrowUpRight size={15} />
        </a>
      </nav>
      <a className="header-cta" href="mailto:bhaleraoneha56@gmail.com">
        Let&apos;s talk <ArrowUpRight size={15} />
      </a>
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
