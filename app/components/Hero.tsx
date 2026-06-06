"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "../lib/data";

const FLOATS = [
  { t: "Spring Boot", x: "12%", y: "26%", d: 18, s: 1 },
  { t: "React", x: "78%", y: "20%", d: 26, s: 0.85 },
  { t: "MySQL", x: "84%", y: "62%", d: 14, s: 1.05 },
  { t: "JWT", x: "8%", y: "68%", d: 22, s: 0.9 },
  { t: "Docker", x: "66%", y: "78%", d: 30, s: 0.8 },
  { t: "AWS EC2", x: "24%", y: "84%", d: 16, s: 0.78 },
];

export default function Hero() {
  const [pt, setPt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setPt({
          x: (e.clientX / window.innerWidth - 0.5) * 2,
          y: (e.clientY / window.innerHeight - 0.5) * 2,
        });
        raf = 0;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero__floats" aria-hidden="true">
        {FLOATS.map((f, i) => (
          <span
            key={i}
            className="hero__float"
            style={{
              left: f.x,
              top: f.y,
              fontSize: `${f.s}rem`,
              transform: `translate(${pt.x * f.d}px, ${pt.y * f.d}px)`,
              animationDelay: `${300 + i * 90}ms`,
            }}
          >
            {f.t}
          </span>
        ))}
      </div>

      <div className="hero__inner">
        <div className="hero__eyebrow">
          <span className="hero__eyebrow-dot" />
          {PROFILE.role}
        </div>

        <h1 className="hero__title">
          {PROFILE.tagline.map((line, li) => (
            <span className="hero__line" key={li}>
              <span
                className="hero__line-in"
                style={{ animationDelay: `${200 + li * 140}ms` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="hero__sub">
          Spring Boot와 React로 서비스를 만드는 개발자, {PROFILE.name}입니다.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary" onClick={go("projects")}>
            프로젝트 보기
          </button>
          <button className="btn btn--ghost" onClick={go("contact")}>
            연락하기
          </button>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  );
}
