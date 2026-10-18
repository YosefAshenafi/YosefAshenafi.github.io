"use client";

import { useEffect, useRef } from "react";

const spots = ["spot-a", "spot-b", "spot-c"];

export default function FollowingLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const sections = [...document.querySelectorAll<HTMLElement>("#main section")];
    if (!sections.length) return;

    sections.forEach((section) => {
      if (getComputedStyle(section).position === "static") {
        section.style.position = "relative";
      }
      [...section.children].forEach((child) => {
        if (!(child instanceof HTMLElement) || child === light) return;
        const pos = getComputedStyle(child).position;
        if (pos === "absolute" || pos === "fixed") return;
        if (!child.style.position) child.style.position = "relative";
        if (!child.style.zIndex) child.style.zIndex = "1";
      });
    });

    let current: HTMLElement | null = null;
    const place = (section: HTMLElement) => {
      if (current === section) return;
      current = section;
      const index = sections.indexOf(section);
      light.dataset.spot = spots[index % spots.length];
      section.appendChild(light);
    };

    const pick = () => {
      const mark = window.innerHeight * 0.42;
      const active =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= mark && rect.bottom >= mark;
        }) ?? sections[0];
      place(active);
    };

    pick();
    window.addEventListener("scroll", pick, { passive: true });
    window.addEventListener("resize", pick);

    return () => {
      window.removeEventListener("scroll", pick);
      window.removeEventListener("resize", pick);
    };
  }, []);

  return <div ref={lightRef} className="following-light" data-spot="spot-a" aria-hidden="true" />;
}
