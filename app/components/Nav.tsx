"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../lib/data";

export default function Nav() {
  const [active, setActive] = useState("hero");
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > lastY.current && y > 320);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`nav${solid ? " nav--solid" : ""}${hidden ? " nav--hidden" : ""}`}>
      <div className="nav__inner">
        <span className="nav__brand" onClick={go("hero")}>
          이지성<span className="nav__brand-dot">.</span>
        </span>
        <nav className="nav__links">
          {NAV_ITEMS.map((n) => (
            <span
              key={n.id}
              className={`nav__link${active === n.id ? " is-active" : ""}`}
              onClick={go(n.id)}
            >
              {n.label}
            </span>
          ))}
        </nav>
        <span className="nav__cta" onClick={go("contact")}>
          연락하기
        </span>
      </div>
    </header>
  );
}
