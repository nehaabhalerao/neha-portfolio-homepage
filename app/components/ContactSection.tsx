"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

const emailAddress = "bhaleraoneha56@gmail.com";
const resumeViewUrl = "https://drive.google.com/file/d/1RfyC00lkgoOSlP7xLiOTh4FT5Ux2gkRO/view?usp=sharing";
const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=1RfyC00lkgoOSlP7xLiOTh4FT5Ux2gkRO";

const profiles = [
  { label: "GitHub", username: "nehaabhalerao", href: "https://github.com/nehaabhalerao", icon: Github },
  { label: "LinkedIn", username: "Neha Bhalerao", href: "https://www.linkedin.com/in/neha-bhalerao-081619213/", icon: Linkedin },
  { label: "LeetCode", username: "neha_bhalerao", href: "https://leetcode.com/u/neha_bhalerao/", icon: Code2 },
];

export default function ContactSection() {
  const [copyStatus, setCopyStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopyStatus("Email copied to clipboard.");
    } catch {
      setCopyStatus("Could not copy automatically. Please select the email address.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-layout">
        <div className="contact-copy">
          <div className="section-kicker">05 / YOUR TURN</div>
          <h2>Have a good problem?<br /><em>Let&apos;s solve it.</em></h2>
          <p>
            Open to connecting with teams building thoughtful software, useful AI tools, and reliable products.
          </p>
          <a className="button button-lime" href={`mailto:${emailAddress}`}>
            Say hello <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>

        <div className="contact-panel">
          <div className="contact-panel-orbit contact-panel-orbit-one" aria-hidden="true" />
          <div className="contact-panel-orbit contact-panel-orbit-two" aria-hidden="true" />
          <div className="contact-panel-heading">
            <span className="contact-panel-mark"><Mail aria-hidden="true" size={18} /></span>
            <div>
              <span className="contact-panel-kicker">DIRECT CONTACT</span>
              <h3>Let&apos;s connect</h3>
            </div>
            <span className="contact-availability"><i /> OPEN</span>
          </div>

          <div className="contact-email-card">
            <span className="contact-card-label">EMAIL</span>
            <span className="contact-email-address">{emailAddress}</span>
            <div className="contact-email-actions">
              <a className="contact-email-link" href={`mailto:${emailAddress}`}>
                Send an email <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <button
                aria-label="Copy email address"
                className="contact-copy-button"
                onClick={copyEmail}
                type="button"
              >
                {copyStatus === "Email copied to clipboard." ? (
                  <Check aria-hidden="true" size={15} />
                ) : (
                  <Copy aria-hidden="true" size={15} />
                )}
                {copyStatus === "Email copied to clipboard." ? "Copied" : "Copy"}
              </button>
            </div>
            <span className="contact-copy-status" aria-live="polite">{copyStatus}</span>
          </div>

          <div className="contact-resume-card">
            <span className="contact-resume-icon"><FileText aria-hidden="true" size={20} /></span>
            <div className="contact-resume-copy">
              <h4>My Resume</h4>
              <p>Software Developer | Python | Backend | GenAI</p>
            </div>
            <div className="contact-resume-actions">
              <a
                aria-label="View resume in a new tab"
                href={resumeViewUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Resume <ArrowUpRight aria-hidden="true" size={14} />
              </a>
              <a
                aria-label="Download resume from Google Drive in a new tab"
                href={resumeDownloadUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                Download Resume <ArrowUpRight aria-hidden="true" size={14} />
              </a>
            </div>
          </div>

          <div className="contact-profile-list" aria-label="Professional profiles">
            {profiles.map(({ label, username, href, icon: Icon }) => (
              <a
                className="contact-profile-card"
                href={href}
                key={label}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className={`contact-profile-icon contact-profile-icon-${label.toLowerCase()}`}>
                  <Icon aria-hidden="true" size={19} />
                </span>
                <span className="contact-profile-copy">
                  <span className="contact-card-label">{label}</span>
                  <strong>{username}</strong>
                </span>
                <ArrowUpRight aria-hidden="true" className="contact-profile-arrow" size={17} />
              </a>
            ))}
          </div>

          <div className="contact-panel-footer"><span /> Thoughtful software starts with a conversation.</div>
        </div>
      </div>
    </section>
  );
}
