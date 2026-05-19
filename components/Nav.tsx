"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { C, F } from "@/lib/theme";

const NAV_ITEMS = [
  { label: "index", href: "#hero" },
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "writing", href: "#writing" },
  { label: "contact", href: "#contact" },
];

const SECTION_IDS = ["hero", "work", "about", "writing", "contact"];

export default function Nav() {
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          linksRef.current.forEach((l) => {
            const active = l.getAttribute("href") === `#${e.target.id}`;
            l.style.color = active ? C.fg : C.fgMuted;
            l.style.background = active ? C.bgRaised : "transparent";
            l.style.border = active ? `1px solid ${C.line}` : "1px solid transparent";
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Profile modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
            animation: "fadeIn 0.18s ease",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: C.bgRaised,
              border: `1px solid ${C.line}`,
              borderRadius: 20,
              padding: 0,
              overflow: "hidden",
              width: 320,
              boxShadow: `0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px ${C.line}`,
              animation: "scaleIn 0.18s ease",
            }}
          >
            {/* Terminal title bar */}
            <div
              style={{
                padding: "9px 14px",
                borderBottom: `1px solid ${C.line}`,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ display: "flex", gap: 6 }}>
                {(["#ff5f56", "#ffbd2e", "#27c93f"] as const).map((bg) => (
                  <span
                    key={bg}
                    onClick={bg === "#ff5f56" ? () => setModalOpen(false) : undefined}
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: 999,
                      background: bg,
                      display: "inline-block",
                      cursor: bg === "#ff5f56" ? "pointer" : "default",
                    }}
                  />
                ))}
              </span>
              <span style={{ fontFamily: F.mono, fontSize: 11.5, color: C.fgMuted, marginLeft: 4 }}>
                profile.tsx
              </span>
            </div>

            {/* Photo */}
            <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1" }}>
              <Image
                src="/images/profile.png"
                alt="Yosef Ashenafi"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: `linear-gradient(to top, ${C.bgRaised}, transparent)`,
                }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "16px 20px 20px", fontFamily: F.mono }}>
              <div style={{ color: C.fg, fontWeight: 600, fontSize: 15 }}>Yosef Ashenafi</div>
              <div style={{ color: C.fgMuted, fontSize: 12, marginTop: 4 }}>
                Senior Software Engineer
              </div>
              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 11.5,
                  color: C.accent,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: 999,
                    background: C.accent,
                    boxShadow: `0 0 8px ${C.accent}`,
                    display: "inline-block",
                    flexShrink: 0,
                  }}
                />
                available · Q3 2026
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 11.5,
                  color: C.fgDim,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: C.fgDim }}>📍</span>
                addis ababa, et · UTC+3
              </div>
            </div>
          </div>
        </div>
      )}

    <nav
      className="nav-bar"
      style={{ borderBottom: `1px solid ${C.lineSoft}` }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: F.mono, fontSize: 14 }}>
        <div className="avatar-wave-wrap">
          <button
            onClick={() => setModalOpen(true)}
            aria-label="View profile photo"
            className="avatar-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: 10,
              overflow: "hidden",
              border: `1.5px solid ${C.accent}`,
              padding: 0,
              background: "none",
              cursor: "pointer",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
            }}
          >
            <Image
              src="/images/profile.png"
              alt="Yosef Ashenafi"
              width={38}
              height={38}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </button>
        </div>
        <span style={{ color: C.fg, fontWeight: 600 }}>yosef.ashenafi</span>
        <span style={{ color: C.fgDim }}>/</span>
        <span style={{ color: C.fgMuted }}>v3.tsx</span>
      </div>

      <div style={{ flex: 1 }} />

      {/* Links */}
      <div className="nav-links-wrap" style={{ fontFamily: F.mono }}>
        {NAV_ITEMS.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            ref={(el) => { if (el) linksRef.current[i] = el; }}
            style={{
              padding: "6px 12px",
              borderRadius: 6,
              color: i === 0 ? C.fg : C.fgMuted,
              background: i === 0 ? C.bgRaised : "transparent",
              border: i === 0 ? `1px solid ${C.line}` : "1px solid transparent",
              transition: "color 0.15s, background 0.15s",
            }}
          >
            <span style={{ color: C.fgDim }}>~/</span>
            {item.label}
          </a>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* Status */}
      <div className="nav-status-wrap" style={{ fontFamily: F.mono, color: C.fgMuted }}>
        <span
          style={{
            display: "inline-block",
            width: 8,
            height: 8,
            borderRadius: 999,
            background: C.accent,
            marginRight: 8,
            boxShadow: `0 0 12px ${C.accent}`,
          }}
        />
        available for work
      </div>
    </nav>
    </>
  );
}
