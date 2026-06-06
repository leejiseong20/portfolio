"use client";

import { useState } from "react";
import { CONTACT, PROFILE } from "../lib/data";
import { useReveal } from "../lib/hooks";

export default function Contact() {
  const [ref, shown] = useReveal({ threshold: 0.25 });
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = CONTACT.email;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="contact" ref={ref as React.RefObject<HTMLElement>}>
      <div className={`contact__inner${shown ? " is-in" : ""}`}>
        <div className="section-label section-label--light">
          <span className="section-label__idx">04</span> 연락처
        </div>
        <h2 className="contact__title">
          함께 좋은 시스템을<br />만들어요.
        </h2>

        <button className="contact__email" onClick={copy}>
          <span className="contact__email-text">{CONTACT.email}</span>
          <span className="contact__email-action">{copied ? "복사됨 ✓" : "복사하기"}</span>
        </button>

        <ul className="contact__links">
          {CONTACT.links.map((l, i) => (
            <li key={i}>
              <a href={l.href} className="contact__link" target="_blank" rel="noreferrer">
                <span className="contact__link-label">{l.label}</span>
                <span className="contact__link-handle">{l.handle}</span>
                <span className="contact__link-arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="footer">
        <span>© 2026 {PROFILE.name}</span>
        <span className="footer__made">Designed &amp; built with care</span>
      </footer>
    </section>
  );
}
