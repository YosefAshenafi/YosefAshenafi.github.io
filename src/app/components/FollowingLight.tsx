"use client";

import { useEffect, useRef } from "react";

export default function FollowingLight() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    if (!light) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    document.querySelectorAll<HTMLElement>("#main section, footer").forEach((region) => {
      [...region.children].forEach((child) => {
        if (!(child instanceof HTMLElement) || child === light) return;
        const pos = getComputedStyle(child).position;
        if (pos === "absolute" || pos === "fixed") return;
        if (!child.style.position) child.style.position = "relative";
        if (!child.style.zIndex) child.style.zIndex = "1";
      });
    });

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let x = window.innerWidth * 0.32;
    let y = window.innerHeight * 0.38;
    let targetX = x;
    let targetY = y;
    let frame = 0;

    const paint = () => {
      light.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const tick = () => {
      const ease = reduce.matches ? 1 : 0.18;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      paint();
      if (Math.abs(targetX - x) < 0.4 && Math.abs(targetY - y) < 0.4) {
        x = targetX;
        y = targetY;
        paint();
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    const follow = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      targetX = event.clientX;
      targetY = event.clientY;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(tick);
    };

    paint();
    window.addEventListener("pointermove", follow, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", follow);
    };
  }, []);

  return <div ref={lightRef} className="following-light" aria-hidden="true" />;
}
