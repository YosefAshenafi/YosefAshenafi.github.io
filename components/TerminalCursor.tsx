"use client";

import { useEffect, useRef, useState } from "react";
import { C, F } from "@/lib/theme";

export default function TerminalCursor() {
  const [pos, setPos] = useState({ x: -80, y: -80 });
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);
  const rawPos = useRef({ x: -80, y: -80 });

  useEffect(() => {
    // Don't render on touch-only devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e: MouseEvent) => {
      rawPos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target as Element;
      const clickable = target.closest("a, button, [role='button'], input, textarea, select, label");
      setIsPointer(!!clickable);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPos({ x: rawPos.current.x, y: rawPos.current.y });
      });
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 99999,
        pointerEvents: "none",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        display: visible ? "flex" : "none",
        alignItems: "center",
        gap: 1,
        fontFamily: F.mono,
        fontSize: 13,
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      {/* Prompt prefix — only when not over a clickable */}
      {!isPointer && (
        <span
          style={{
            color: C.accent,
            opacity: 0.7,
            transform: "translate(-100%, -50%)",
            position: "absolute",
            whiteSpace: "nowrap",
            fontSize: 11,
          }}
        >
          $
        </span>
      )}

      {/* The blinking block */}
      <span
        className={isPointer ? "cursor-block cursor-pointer-mode" : "cursor-block"}
        style={{
          display: "inline-block",
          width: isPointer ? 10 : 8,
          height: isPointer ? 18 : 16,
          background: C.accent,
          transform: "translate(-4px, -50%)",
          borderRadius: 1,
        }}
      />
    </div>
  );
}
