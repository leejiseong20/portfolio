"use client";

import { PROJECTS } from "../lib/data";
import { useReveal, useScrollProgress } from "../lib/hooks";
import type { Motif } from "../lib/data";

function motifSvgContent(type: Motif) {
  const S = "#bdbdb6";
  const w = 2;
  switch (type) {
    case "chat":
      return (
        <>
          <rect x={150} y={96} width={118} height={70} rx={16} fill="none" stroke={S} strokeWidth={w}/>
          <rect x={168} y={118} width={66} height={6} rx={3} fill={S}/>
          <rect x={168} y={134} width={44} height={6} rx={3} fill={S}/>
          <rect x={214} y={128} width={118} height={70} rx={16} fill="none" stroke={S} strokeWidth={w}/>
          <rect x={250} y={150} width={66} height={6} rx={3} fill={S}/>
          <rect x={250} y={166} width={40} height={6} rx={3} fill={S}/>
        </>
      );
    case "commerce":
      return (
        <>
          {Array.from({ length: 6 }).map((_, i) => {
            const c = i % 3, r = Math.floor(i / 3);
            const x = 168 + c * 54, y = 100 + r * 54;
            return (
              <g key={i}>
                <rect x={x} y={y} width={40} height={40} rx={8} fill="none" stroke={S} strokeWidth={w}/>
                <rect x={x+8} y={y+26} width={24} height={5} rx={2.5} fill={S}/>
              </g>
            );
          })}
        </>
      );
    case "logs":
      return (
        <>
          {[120, 84, 150, 66, 132, 98].map((lw, i) => (
            <rect key={i} x={150} y={104 + i * 16} width={lw} height={6} rx={3} fill={S}/>
          ))}
          <rect x={300} y={98} width={2} height={110} fill="#9a9ea6"/>
        </>
      );
    case "url":
      return (
        <>
          <circle cx={176} cy={146} r={26} fill="none" stroke={S} strokeWidth={w}/>
          <circle cx={304} cy={146} r={26} fill="none" stroke={S} strokeWidth={w}/>
          <line x1={202} y1={146} x2={278} y2={146} stroke={S} strokeWidth={w} strokeDasharray="2 8" strokeLinecap="round"/>
          <rect x={160} y={143} width={32} height={6} rx={3} fill={S}/>
          <rect x={288} y={143} width={32} height={6} rx={3} fill={S}/>
        </>
      );
    case "cicd":
    default:
      return (
        <>
          {[120, 200, 280, 360].map((cx) => (
            <circle key={cx} cx={cx} cy={146} r={15} fill="none" stroke={S} strokeWidth={w}/>
          ))}
          <line x1={135} y1={146} x2={185} y2={146} stroke={S} strokeWidth={w}/>
          <line x1={215} y1={146} x2={265} y2={146} stroke={S} strokeWidth={w}/>
          <line x1={295} y1={146} x2={345} y2={146} stroke={S} strokeWidth={w}/>
          <circle cx={280} cy={146} r={5} fill="#16161a"/>
        </>
      );
  }
}

function Placeholder({ num, title, motif }: { num: string; title: string; motif: Motif }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 360"
      className="project__placeholder"
    >
      <defs>
        <pattern id={`stripe-${num}`} width={11} height={11} patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
          <rect width={11} height={11} fill="#efefec"/>
          <line x1={0} y1={0} x2={0} y2={11} stroke="rgba(22,22,25,0.04)" strokeWidth={6}/>
        </pattern>
      </defs>
      <rect width={480} height={360} fill={`url(#stripe-${num})`}/>
      <rect x={0.5} y={0.5} width={479} height={359} fill="none" stroke="rgba(22,22,25,0.08)"/>
      <text x={30} y={44} fontFamily="monospace" fontSize={13} fill="#9a9ea6" letterSpacing={1}>
        {num} / SCREENSHOT
      </text>
      {motifSvgContent(motif)}
      <text x={240} y={254} fontFamily="monospace" fontSize={16} fontWeight={700} fill="#16161a" textAnchor="middle">
        {title}
      </text>
      <text x={240} y={282} fontFamily="monospace" fontSize={12} fill="#9a9ea6" textAnchor="middle">
        ↑ 스크린샷을 추후 교체 예정
      </text>
    </svg>
  );
}

function ProjectRow({ project, flip }: { project: typeof PROJECTS[0]; flip: boolean }) {
  const [ref, shown] = useReveal({ threshold: 0.18 });
  const [pref, p] = useScrollProgress();
  const shift = (p - 0.5) * 36;

  return (
    <article
      className={`project${flip ? " project--flip" : ""}${shown ? " is-in" : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="project__media" ref={pref as React.RefObject<HTMLDivElement>}>
        <div
          className="project__media-frame"
          style={{ transform: `translateY(${shift}px)` }}
        >
          <Placeholder num={project.num} title={project.title} motif={project.motif} />
        </div>
        <span className="project__num">{project.num}</span>
      </div>

      <div className="project__body">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__summary">{project.summary}</p>
        <p className="project__desc">{project.description}</p>
        <div className="project__metrics">
          {project.metrics.map((m, i) => (
            <div className="project__metric" key={i}>
              <span className="project__metric-v">{m.v}</span>
              <span className="project__metric-k">{m.k}</span>
            </div>
          ))}
        </div>
        <ul className="project__tags">
          {project.tags.map((t, i) => (
            <li key={i} className="tag">{t}</li>
          ))}
        </ul>
        {project.link && (
          <a
            className="project__link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.includes("github.com") ? "GitHub 저장소 보기 ↗" : "사이트 보기 ↗"}
          </a>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__head">
        <div className="section-label">
          <span className="section-label__idx">03</span> 프로젝트
        </div>
        <h2 className="section-title">
          만들어 온 것들<span className="section-title__muted">.</span>
        </h2>
      </div>
      <div className="projects__list">
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.num} project={p} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
