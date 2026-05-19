"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { Work } from "@/data/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

// ── Helpers ────────────────────────────────────────────────────────────────

function resolveLink(link: string): { href: string; label: string } | null {
  if (!link || link === "-") return null;
  if (link.startsWith("http://") || link.startsWith("https://")) {
    const label = link.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return { href: link, label };
  }
  return { href: `https://${link}`, label: link };
}

// ── Small device frames (card) ─────────────────────────────────────────────

function BrowserFrameSmall({ url, src, alt }: { url: string; src: string; alt: string }) {
  return (
    <div style={{ background: C.bgInset }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 6, padding: "5px 9px",
        background: "#0f1216", borderBottom: `1px solid ${C.line}`,
      }}>
        <span style={{ display: "flex", gap: 3, flexShrink: 0 }}>
          {(["#ff5f56", "#ffbd2e", "#27c93f"] as const).map((c) => (
            <span key={c} style={{ width: 6, height: 6, borderRadius: 999, background: c, display: "inline-block" }} />
          ))}
        </span>
        <span style={{
          flex: 1, background: "#080a0d", borderRadius: 3, height: 13,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: F.mono, fontSize: 8.5, color: C.fgDim,
          overflow: "hidden", whiteSpace: "nowrap", paddingInline: 6,
        }}>
          {url !== "-" ? url : alt.toLowerCase().replace(/\s+/g, "")}
        </span>
        <span style={{ width: 20, flexShrink: 0 }} />
      </div>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "#060809" }}>
        <Image src={src} alt={alt} fill
          style={{ objectFit: "contain", objectPosition: "top center" }}
          sizes="380px" />
        <div className="work-frame-overlay" />
      </div>
    </div>
  );
}

function PhoneFrameSmall({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 0 16px", background: "#080a0d" }}>
      <div style={{
        width: 96, borderRadius: 22, background: "#050508",
        border: `1.5px solid #252b36`, padding: 3, position: "relative",
        boxShadow: "0 12px 36px rgba(0,0,0,0.7), inset 0 0 0 0.5px rgba(255,255,255,0.04)",
        flexShrink: 0,
      }}>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)", width: 26, height: 7, background: "#000", borderRadius: 999, zIndex: 2 }} />
        <div style={{ borderRadius: 19, overflow: "hidden", height: 206, position: "relative", background: "#000" }}>
          <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top center" }} sizes="96px" />
          <div className="work-frame-overlay" />
        </div>
        <div style={{ height: 3, marginTop: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 28, height: 2.5, background: "#2a2f3a", borderRadius: 999 }} />
        </div>
      </div>
    </div>
  );
}

// ── Large device frames (modal) ────────────────────────────────────────────

function BrowserFrameLarge({ url, src, alt }: { url: string; src: string; alt: string }) {
  return (
    <div style={{ width: "100%", border: `1px solid ${C.line}`, borderRadius: 10, overflow: "hidden", background: C.bgInset }}>
      <div style={{
        display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
        background: "#0f1216", borderBottom: `1px solid ${C.line}`,
      }}>
        <span style={{ display: "flex", gap: 5, flexShrink: 0 }}>
          {(["#ff5f56", "#ffbd2e", "#27c93f"] as const).map((c) => (
            <span key={c} style={{ width: 9, height: 9, borderRadius: 999, background: c, display: "inline-block" }} />
          ))}
        </span>
        <span style={{
          flex: 1, background: "#080a0d", borderRadius: 4, height: 18,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: F.mono, fontSize: 10.5, color: C.fgMuted,
          paddingInline: 10,
        }}>
          {url !== "-" ? url : alt.toLowerCase().replace(/\s+/g, "")}
        </span>
        <span style={{ width: 32 }} />
      </div>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", background: "#060809" }}>
        <Image src={src} alt={alt} fill
          style={{ objectFit: "contain", objectPosition: "top center" }}
          sizes="(max-width: 820px) 96vw, 820px" priority />
      </div>
    </div>
  );
}

function PhoneFrameLarge({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{
        width: 210, borderRadius: 40, background: "#050508",
        border: `2.5px solid #252b36`, padding: "4px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.85), inset 0 0 0 0.5px rgba(255,255,255,0.05)",
        position: "relative",
      }}>
        {/* Side buttons */}
        <div style={{ position: "absolute", left: -3.5, top: 88, width: 2.5, height: 30, background: "#1a1f2a", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: -3.5, top: 128, width: 2.5, height: 48, background: "#1a1f2a", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: -3.5, top: 186, width: 2.5, height: 48, background: "#1a1f2a", borderRadius: 2 }} />
        <div style={{ position: "absolute", right: -3.5, top: 148, width: 2.5, height: 66, background: "#1a1f2a", borderRadius: 2 }} />
        {/* Dynamic island */}
        <div style={{ position: "absolute", top: 15, left: "50%", transform: "translateX(-50%)", width: 52, height: 13, background: "#000", borderRadius: 999, zIndex: 2 }} />
        {/* Screen */}
        <div style={{ borderRadius: 36, overflow: "hidden", height: 450, position: "relative", background: "#000" }}>
          <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top center" }} sizes="210px" priority />
        </div>
        {/* Home indicator */}
        <div style={{ height: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 56, height: 3.5, background: "#2a2f3a", borderRadius: 999 }} />
        </div>
      </div>
    </div>
  );
}

// ── Work Modal ─────────────────────────────────────────────────────────────

function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  const isMobile = work.kind === "mobile";
  const link = resolveLink(work.link);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,0.8)", backdropFilter: "blur(10px)",
        padding: "20px", animation: "fadeIn 0.18s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="work-modal-inner"
        style={{ animation: "scaleIn 0.2s ease" }}
      >
        {/* Terminal title bar */}
        <div style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "9px 16px", borderBottom: `1px solid ${C.line}`,
          background: "#0a0c0f", flexShrink: 0,
        }}>
          <span style={{ display: "flex", gap: 6 }}>
            {([["#ff5f56", onClose], ["#ffbd2e", null], ["#27c93f", null]] as const).map(([bg, fn]) => (
              <span
                key={bg}
                onClick={fn ?? undefined}
                style={{
                  width: 10, height: 10, borderRadius: 999, background: bg,
                  display: "inline-block", cursor: fn ? "pointer" : "default",
                }}
              />
            ))}
          </span>
          <span style={{ fontFamily: F.mono, fontSize: 11.5, color: C.fgMuted, marginLeft: 4 }}>
            {work.id}.tsx
          </span>
          <span style={{ flex: 1 }} />
          <span style={{
            fontFamily: F.mono, fontSize: 10, color: C.accent,
            padding: "2px 8px", background: C.accentFaint,
            border: `1px solid ${C.accentDim}`, borderRadius: 999,
            textTransform: "uppercase", letterSpacing: "0.06em",
          }}>
            {work.tag}
          </span>
        </div>

        {/* Body */}
        <div className="work-modal-body">
          {/* Top — device frame */}
          <div className="work-modal-device">
            {work.image && (
              isMobile
                ? <PhoneFrameLarge src={work.image} alt={work.title} />
                : <BrowserFrameLarge url={work.link} src={work.image} alt={work.title} />
            )}
          </div>

          {/* Bottom — details (two columns) */}
          <div className="work-modal-details">
            {/* Left col: title + blurb + stack */}
            <div className="work-modal-details-left">
              <h2 style={{
                fontFamily: F.sans, fontSize: 22, fontWeight: 700,
                color: C.fg, letterSpacing: "-0.02em", marginBottom: 10, lineHeight: 1.15,
              }}>
                {work.title}
              </h2>

              <p style={{
                fontFamily: F.sans, fontSize: 13.5, color: C.fgMuted,
                lineHeight: 1.65, marginBottom: 16,
              }}>
                {work.blurb}
              </p>

              <div>
                <div style={{ fontFamily: F.mono, fontSize: 10, color: C.fgDim, marginBottom: 7, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  // stack
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {work.stack.map((s) => (
                    <span key={s} style={{
                      fontFamily: F.mono, fontSize: 11, color: C.fgMuted,
                      padding: "3px 8px", border: `1px solid ${C.line}`,
                      borderRadius: 5, background: C.bgRaised,
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col: meta + CTAs */}
            <div className="work-modal-details-right">
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {[work.year, work.role, work.tag].map((m) => (
                  <span key={m} style={{
                    fontFamily: F.mono, fontSize: 10.5, color: C.fgMuted,
                    padding: "3px 9px", border: `1px solid ${C.line}`,
                    borderRadius: 999, background: C.bgRaised,
                    textAlign: "center", whiteSpace: "nowrap",
                  }}>
                    {m}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
                {link ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7,
                      padding: "10px 14px", background: C.accent, color: C.bg,
                      borderRadius: 8, fontFamily: F.mono, fontSize: 11.5, fontWeight: 600,
                      textDecoration: "none", transition: "opacity 0.15s", textAlign: "center",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  >
                    ↗ {link.label}
                  </a>
                ) : (
                  <span style={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
                    padding: "10px 14px", background: C.bgRaised, color: C.fgDim,
                    borderRadius: 8, fontFamily: F.mono, fontSize: 11, border: `1px solid ${C.line}`,
                    textAlign: "center",
                  }}>
                    🔒 private
                  </span>
                )}
                <button
                  onClick={onClose}
                  style={{
                    padding: "9px 14px", background: "transparent",
                    color: C.fgDim, border: `1px solid ${C.line}`,
                    borderRadius: 8, fontFamily: F.mono, fontSize: 11, cursor: "pointer",
                    transition: "color 0.15s, border-color 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = C.fgMuted;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = C.fgDim;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color = C.fgDim;
                    (e.currentTarget as HTMLButtonElement).style.borderColor = C.line;
                  }}
                >
                  esc · close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Filter logic ────────────────────────────────────────────────────────────

type Filter = "all" | "web" | "mobile" | "dashboard" | "fintech";
const FILTERS: { key: Filter; label: string }[] = [
  { key: "all",       label: "all"       },
  { key: "web",       label: "web"       },
  { key: "mobile",    label: "mobile"    },
  { key: "dashboard", label: "dashboard" },
  { key: "fintech",   label: "fintech"   },
];

function getCategories(w: Work): Filter[] {
  const cats: Filter[] = [w.kind === "mobile" ? "mobile" : "web"];
  const t = w.tag.toLowerCase();
  if (t.includes("dashboard") || t.includes("enterprise") || t.includes("gov")) cats.push("dashboard");
  if (t.includes("fintech")) cats.push("fintech");
  return cats;
}

// ── Main component ──────────────────────────────────────────────────────────

export default function Works({ works }: { works: Work[] }) {
  const [active, setActive] = useState<Filter>("all");
  const [selected, setSelected] = useState<Work | null>(null);

  const filtered = active === "all" ? works : works.filter((w) => getCategories(w).includes(active));
  const countFor = (f: Filter) => f === "all" ? works.length : works.filter((w) => getCategories(w).includes(f)).length;
  const closeModal = useCallback(() => setSelected(null), []);
  const filterList = FILTERS;

  return (
    <section
      id="work"
      className="section-pad"
      style={{ borderBottom: `1px solid ${C.lineSoft}` }}
    >
      <SectionLabel n="02" label="selected work" />

      <div className="works-header-row">
        <h2 style={{ fontFamily: F.sans, fontSize: 42, fontWeight: 600, color: C.fg, letterSpacing: "-0.03em" }}>
          Recent ships.
        </h2>
        <span style={{ fontFamily: F.mono, fontSize: 13, color: C.fgMuted }}>
          {filtered.length}/{works.length}
        </span>
      </div>

      {/* Terminal filter bar */}
      <div className="works-filter-bar">
        <span style={{ display: "flex", alignItems: "center", fontFamily: F.mono, fontSize: 11.5, flexShrink: 0 }}>
          <span style={{ color: C.accent }}>yosef</span>
          <span style={{ color: C.fgDim }}>@portfolio</span>
          <span style={{ color: C.fgDim }}>:~/work$ </span>
          <span style={{ color: C.fg, marginLeft: 4 }}>ls</span>
        </span>
        <div className="works-filter-pills">
          {filterList.map(({ key, label }) => (
            <button key={key} onClick={() => setActive(key)} className={`works-filter-btn${active === key ? " active" : ""}`}>
              {label}
              <span style={{ color: active === key ? C.accentMid : C.fgDim, marginLeft: 3 }}>
                ({countFor(key)})
              </span>
            </button>
          ))}
        </div>
        <span style={{
          display: "inline-block", width: 7, height: 13, flexShrink: 0,
          background: C.accent, animation: "blink 1s steps(1) infinite",
        }} />
      </div>

      {/* Masonry grid */}
      <div className="works-masonry">
        {filtered.map((w) => (
          <div
            key={w.id}
            className="work-card"
            onClick={() => setSelected(w)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setSelected(w); }}
            style={{ cursor: "pointer" }}
          >
            <div className="work-device-wrap">
              {w.image && (
                w.kind === "mobile"
                  ? <PhoneFrameSmall src={w.image} alt={w.title} />
                  : <BrowserFrameSmall url={w.link} src={w.image} alt={w.title} />
              )}
              <div className="work-overlay">
                <span className="work-view-chip">view ↗</span>
              </div>
            </div>

            <div style={{ padding: "13px 15px 13px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7, flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: F.mono, fontSize: 9.5, color: C.accent,
                  padding: "2px 7px", background: C.accentFaint,
                  border: `1px solid ${C.accentDim}`, borderRadius: 999,
                  textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap",
                }}>
                  {w.tag}
                </span>
                <span style={{ fontFamily: F.mono, fontSize: 10, color: C.fgDim }}>·</span>
                <span style={{ fontFamily: F.mono, fontSize: 10.5, color: C.fgMuted }}>{w.year}</span>
                <span style={{ fontFamily: F.mono, fontSize: 10, color: C.fgDim }}>·</span>
                <span style={{ fontFamily: F.mono, fontSize: 10.5, color: C.fgMuted }}>{w.role}</span>
              </div>

              <h3 style={{
                fontFamily: F.sans, fontSize: 15, fontWeight: 600,
                color: C.fg, marginBottom: 5, letterSpacing: "-0.015em",
                display: "flex", alignItems: "center", gap: 6,
              }}>
                {w.title}
                <span className="work-arrow" style={{ color: C.fgDim, fontSize: 11, display: "inline-block", transition: "color 0.2s, transform 0.2s" }}>↗</span>
              </h3>

              <p style={{ fontFamily: F.sans, fontSize: 12.5, color: C.fgMuted, lineHeight: 1.55, marginBottom: 11 }}>
                {w.blurb}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 4, paddingTop: 9, borderTop: `1px solid ${C.lineSoft}` }}>
                {w.stack.map((s) => (
                  <span key={s} style={{
                    fontFamily: F.mono, fontSize: 9.5, color: C.fgDim,
                    padding: "2px 6px", border: `1px solid ${C.line}`, borderRadius: 4,
                  }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && <WorkModal work={selected} onClose={closeModal} />}
    </section>
  );
}
