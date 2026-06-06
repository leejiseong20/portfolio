"use client";

import { SKILL_GROUPS } from "../lib/data";
import { useReveal } from "../lib/hooks";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label">
        <span className="section-label__idx">02</span> 기술 스택
      </div>
      <h2 className="section-title">
        신뢰할 수 있는 시스템을 위한<br />
        <span className="section-title__muted">검증된 도구들</span>
      </h2>
      <div className="skills__grid">
        {SKILL_GROUPS.map((g, i) => (
          <SkillCard key={i} group={g} index={i} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ group, index }: { group: typeof SKILL_GROUPS[0]; index: number }) {
  const [ref, shown] = useReveal({ threshold: 0.25 });
  return (
    <div
      className={`skill-card${shown ? " is-in" : ""}`}
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="skill-card__head">
        <span className="skill-card__title">{group.title}</span>
        <span className="skill-card__label">{group.label}</span>
      </div>
      <ul className="skill-card__list">
        {group.items.map((it, i) => (
          <li className="skill-pill" key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
