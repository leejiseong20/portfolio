"use client";

import { PROFILE, STATS } from "../lib/data";
import { useReveal, useScrollProgress } from "../lib/hooks";

export default function About() {
  const [ref, p] = useScrollProgress();
  const words = PROFILE.statement.split(" ");

  const lit = (i: number) => {
    const span = 0.55;
    const start = 0.12;
    const per = span / words.length;
    const local = (p - start - i * per) / (per * 2.2);
    return Math.max(0.16, Math.min(1, local));
  };

  return (
    <section id="about" className="about" ref={ref as React.RefObject<HTMLElement>}>
      <div className="about__inner">
        <div className="section-label">
          <span className="section-label__idx">01</span> 소개
        </div>
        <p className="about__statement">
          {words.map((w, i) => (
            <span key={i} className="about__word" style={{ opacity: lit(i) }}>
              {w}{" "}
            </span>
          ))}
        </p>
        <div className="about__meta">
          <div className="about__meta-item">
            <span className="about__meta-k">Based in</span>
            <span className="about__meta-v">{PROFILE.location}</span>
          </div>
          <div className="about__meta-item">
            <span className="about__meta-k">Role</span>
            <span className="about__meta-v">{PROFILE.experience}</span>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

function Stats() {
  const [ref, shown] = useReveal({ threshold: 0.3 });
  return (
    <div className={`stats${shown ? " is-in" : ""}`} ref={ref as React.RefObject<HTMLDivElement>}>
      {STATS.map((s, i) => (
        <div className="stat" key={i} style={{ transitionDelay: `${i * 90}ms` }}>
          <div className="stat__value">{s.value}</div>
          <div className="stat__label">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
