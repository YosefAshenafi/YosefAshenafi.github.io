import type { Work } from "@/data/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

// ── Mock UI helpers ────────────────────────────────────────────────────────

function BrowserMock({ url, children, bg = C.bgInset }: { url: string; children: React.ReactNode; bg?: string }) {
  return (
    <div style={{ background: bg, borderRadius: 8, overflow: "hidden", border: `1px solid ${C.line}` }}>
      <div
        style={{
          padding: "7px 10px",
          background: C.bgRaised,
          borderBottom: `1px solid ${C.line}`,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ display: "flex", gap: 4 }}>
          {(["#ff5f56", "#ffbd2e", "#27c93f"] as const).map((c) => (
            <span key={c} style={{ width: 7, height: 7, borderRadius: 999, background: c, display: "inline-block" }} />
          ))}
        </span>
        <span
          style={{
            flex: 1,
            height: 16,
            background: C.bgInset,
            borderRadius: 4,
            fontSize: 10,
            color: C.fgDim,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: F.mono,
          }}
        >
          {url}
        </span>
        <span style={{ width: 32 }} />
      </div>
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}

function PhoneMock({ children, bg = "#0a0d10" }: { children: React.ReactNode; bg?: string }) {
  return (
    <div
      style={{
        width: 108,
        height: 216,
        borderRadius: 18,
        background: "#000",
        border: `1px solid ${C.line}`,
        padding: 3,
        position: "relative",
        boxShadow: "0 8px 28px rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 6,
          left: "50%",
          transform: "translateX(-50%)",
          width: 38,
          height: 10,
          background: "#000",
          borderRadius: 999,
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 15,
          background: bg,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// ── Per-project mocks ──────────────────────────────────────────────────────

function MockPairgapWeb() {
  return (
    <BrowserMock url="pairgap.com" bg="#0d1117">
      <div style={{ padding: "16px 14px", height: 240, position: "relative", overflow: "hidden", fontFamily: F.sans }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontWeight: 700, color: "#fafafa", fontSize: 11, letterSpacing: "-0.02em" }}>◇ Pairgap</span>
          <span style={{ display: "flex", gap: 8, fontSize: 8, color: "#8a8f97" }}>
            <span>Product</span><span>Waitlist</span><span>Blog</span>
          </span>
        </div>
        <div style={{ fontSize: 22, fontWeight: 600, color: "#fafafa", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
          Own a home,<br />together.
        </div>
        <div style={{ fontSize: 9, color: "#8a8f97", marginTop: 6, maxWidth: 190 }}>
          Co-buying &amp; joint ownership for first-time buyers and investors.
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 5 }}>
          <span style={{ padding: "4px 10px", background: "#fafafa", color: "#0d1117", borderRadius: 4, fontSize: 8, fontWeight: 600 }}>Join waitlist</span>
          <span style={{ padding: "4px 10px", border: "1px solid #2a2f37", color: "#fafafa", borderRadius: 4, fontSize: 8 }}>Learn more →</span>
        </div>
        <div style={{ position: "absolute", right: -20, bottom: -20, width: 80, height: 80, background: "linear-gradient(135deg,#7dd3a8 0%,transparent 70%)", borderRadius: 999, opacity: 0.15, filter: "blur(6px)" }} />
      </div>
    </BrowserMock>
  );
}

function MockPairgapIOS() {
  return (
    <div style={{ height: 240, display: "flex", alignItems: "center", justifyContent: "center", background: "repeating-linear-gradient(135deg,#0a0c0f 0 2px,#0b0d10 2px 12px)" }}>
      <PhoneMock bg="#0d1117">
        <div style={{ padding: "30px 12px 12px", height: "100%", color: "#fafafa", fontFamily: F.sans }}>
          <div style={{ fontSize: 7, color: "#8a8f97", marginBottom: 6 }}>WELCOME, MIKE</div>
          <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.1 }}>Hello, Mike Nash!</div>
          <div style={{ fontSize: 7, color: "#8a8f97", marginTop: 2 }}>Your waitlist status</div>
          <div style={{ marginTop: 10, padding: 8, background: "#1a2028", borderRadius: 7, border: "1px solid #232a33" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 7, color: "#8a8f97" }}>
              <span>PROGRESS</span><span style={{ color: "#7dd3a8" }}>72%</span>
            </div>
            <div style={{ marginTop: 5, height: 3, background: "#0d1117", borderRadius: 999, overflow: "hidden" }}>
              <div style={{ width: "72%", height: "100%", background: "#7dd3a8" }} />
            </div>
            <div style={{ marginTop: 6, fontSize: 7, fontWeight: 600 }}>Understand what you can afford</div>
          </div>
          <div style={{ marginTop: 6, padding: 7, background: "#1a2028", borderRadius: 6, fontSize: 7 }}><span style={{ color: "#7dd3a8" }}>○</span> Get buying power</div>
          <div style={{ marginTop: 5, padding: 7, background: "#1a2028", borderRadius: 6, fontSize: 7 }}><span style={{ color: "#7dd3a8" }}>○</span> Match a co-buyer</div>
        </div>
      </PhoneMock>
    </div>
  );
}

function MockPairgapAndroid() {
  return (
    <div style={{ height: 240, display: "flex", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle at 30% 40%,#0a0c0f 0%,#0b0d10 70%)" }}>
      <PhoneMock bg="#1a1530">
        <div style={{ padding: "26px 10px 10px", height: "100%", color: "#fafafa", fontFamily: F.sans }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1, color: "#e0d4ff" }}>Build Wealth<br />Today</div>
          <div style={{ marginTop: 8, padding: "4px 9px", background: "#7dd3a8", color: "#0a0a0a", borderRadius: 999, fontSize: 7, fontWeight: 600, display: "inline-block" }}>▶ Join Pairgap</div>
          <div style={{ marginTop: 10, padding: 7, background: "rgba(255,255,255,0.08)", borderRadius: 5, display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 16, height: 16, borderRadius: 4, background: "#7dd3a8", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#0a0a0a", fontSize: 8, fontWeight: 700 }}>$</span>
            <div><div style={{ fontSize: 6, color: "#bdb0d8" }}>CHECK YOUR</div><div style={{ fontSize: 7, fontWeight: 600 }}>Buying power</div></div>
          </div>
          <div style={{ marginTop: 5, padding: 7, background: "rgba(255,255,255,0.08)", borderRadius: 5, display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ width: 16, height: 16, borderRadius: 4, background: "#d97a8c", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#0a0a0a", fontSize: 8, fontWeight: 700 }}>★</span>
            <div><div style={{ fontSize: 6, color: "#bdb0d8" }}>WHAT&apos;S YOUR</div><div style={{ fontSize: 7, fontWeight: 600 }}>Real-estate type</div></div>
          </div>
        </div>
      </PhoneMock>
    </div>
  );
}

function MockQelem() {
  const tiles = [
    { name: "Biology", bg: "#1f5f3a", icon: "🌱" },
    { name: "Chemistry", bg: "#2a4d7a", icon: "⚗" },
    { name: "Maths", bg: "#7a3a52", icon: "π" },
    { name: "Physics", bg: "#3a2f6a", icon: "⚛" },
    { name: "Amharic", bg: "#7a5a2f", icon: "ሀ" },
    { name: "English", bg: "#4a5f7a", icon: "A" },
    { name: "Civics", bg: "#5a7a3a", icon: "⚖" },
    { name: "History", bg: "#7a4a2f", icon: "☉" },
  ];
  return (
    <BrowserMock url="qelem.com" bg="#0d1117">
      <div style={{ padding: 14, height: 240, color: "#fafafa", fontFamily: F.sans }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, gap: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>My Courses</div>
          <span style={{ padding: "3px 8px", borderRadius: 999, background: "#1a2028", fontSize: 8, color: "#8a8f97", fontFamily: F.mono }}>⌕ search</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 6 }}>
          {tiles.map((t) => (
            <div
              key={t.name}
              style={{ aspectRatio: "1/1", borderRadius: 6, background: t.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
            >
              <span style={{ fontSize: 14, lineHeight: 1 }}>{t.icon}</span>
              <span style={{ fontSize: 7, marginTop: 3, fontWeight: 600 }}>{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserMock>
  );
}

function MockBawsHuman() {
  return (
    <BrowserMock url="app.bawshuman.com" bg="#0d1117">
      <div style={{ padding: 14, height: 240, color: "#fafafa", fontFamily: F.sans }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
          <div>
            <div style={{ fontSize: 8, color: "#8a8f97" }}>WEEKLY OVERVIEW</div>
            <div style={{ fontSize: 11, fontWeight: 600 }}>Client Progress</div>
          </div>
          <span style={{ padding: "3px 8px", border: "1px solid #232a33", borderRadius: 4, fontSize: 8, color: "#7dd3a8" }}>● Active</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 10 }}>
          {[{ l: "Sessions", v: "24", c: "#7dd3a8" }, { l: "Avg HR", v: "138", c: "#86a8e0" }, { l: "kCal", v: "12.4k", c: "#e8c468" }].map((s) => (
            <div key={s.l} style={{ padding: "8px 10px", background: "#1a2028", borderRadius: 6 }}>
              <div style={{ fontSize: 8, color: "#8a8f97" }}>{s.l}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: s.c, letterSpacing: "-0.02em" }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ height: 70, padding: "0 4px" }}>
          <svg viewBox="0 0 200 60" style={{ width: "100%", height: "100%" }} preserveAspectRatio="none">
            <defs>
              <linearGradient id="bh-g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#7dd3a8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7dd3a8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,45 L25,35 L50,40 L75,28 L100,32 L125,18 L150,22 L175,12 L200,16 L200,60 L0,60 Z" fill="url(#bh-g)" />
            <path d="M0,45 L25,35 L50,40 L75,28 L100,32 L125,18 L150,22 L175,12 L200,16" stroke="#7dd3a8" strokeWidth="1.5" fill="none" />
            {[0,25,50,75,100,125,150,175,200].map((x, i) => (
              <circle key={i} cx={x} cy={[45,35,40,28,32,18,22,12,16][i]} r="1.5" fill="#7dd3a8" />
            ))}
          </svg>
        </div>
      </div>
    </BrowserMock>
  );
}

function MockZippyApp() {
  const rows = [
    { n: "Sarah K.", r: "Barista", t: "2h ago", s: "new", c: "#7dd3a8" },
    { n: "Marcus T.", r: "Line cook", t: "4h ago", s: "shortlist", c: "#e8c468" },
    { n: "Elena R.", r: "Server", t: "1d ago", s: "interview", c: "#86a8e0" },
    { n: "Devon P.", r: "Barback", t: "1d ago", s: "new", c: "#7dd3a8" },
    { n: "Aisha M.", r: "Host", t: "2d ago", s: "reviewed", c: "#8a8f97" },
  ];
  return (
    <BrowserMock url="zippyapp.com" bg="#0d1117">
      <div style={{ padding: 14, height: 240, color: "#fafafa", fontFamily: F.sans }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>Applicants <span style={{ color: "#8a8f97", fontWeight: 400 }}>· 142</span></div>
          <div style={{ display: "flex", gap: 4 }}>
            <span style={{ padding: "2px 7px", background: "#fafafa", color: "#0d1117", borderRadius: 4, fontSize: 8, fontWeight: 600 }}>All</span>
            <span style={{ padding: "2px 7px", border: "1px solid #232a33", borderRadius: 4, fontSize: 8, color: "#8a8f97" }}>New</span>
            <span style={{ padding: "2px 7px", border: "1px solid #232a33", borderRadius: 4, fontSize: 8, color: "#8a8f97" }}>Reviewed</span>
          </div>
        </div>
        {rows.map((p, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "5px 8px",
              marginBottom: 3,
              background: i === 0 ? "rgba(125,211,168,0.06)" : "transparent",
              border: i === 0 ? "1px solid rgba(125,211,168,0.2)" : "1px solid transparent",
              borderRadius: 4,
            }}
          >
            <span style={{ width: 16, height: 16, borderRadius: 999, background: "#1a2028", fontSize: 7, fontWeight: 700, color: "#fafafa", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
              {p.n[0]}
            </span>
            <span style={{ fontSize: 9, fontWeight: 600, flex: 1 }}>{p.n}</span>
            <span style={{ fontSize: 8, color: "#8a8f97", flex: 1 }}>{p.r}</span>
            <span style={{ padding: "1px 6px", borderRadius: 999, fontSize: 7, color: p.c, border: `1px solid ${p.c}40` }}>{p.s}</span>
            <span style={{ fontSize: 7, color: "#5b6068", width: 30, textAlign: "right" }}>{p.t}</span>
          </div>
        ))}
      </div>
    </BrowserMock>
  );
}

const MOCKS: Record<string, React.ComponentType> = {
  "pairgap-web": MockPairgapWeb,
  "pairgap-ios": MockPairgapIOS,
  "pairgap-android": MockPairgapAndroid,
  qelem: MockQelem,
  bawshuman: MockBawsHuman,
  talentral: MockZippyApp,
};

// ── Main component ─────────────────────────────────────────────────────────

interface Props {
  works: Work[];
}

export default function Works({ works }: Props) {
  return (
    <section
      id="work"
      className="section-pad"
      style={{ borderBottom: `1px solid ${C.lineSoft}` }}
    >
      <SectionLabel n="02" label="selected work" />

      <div className="works-header-row">
        <h2
          style={{
            fontFamily: F.sans,
            fontSize: 42,
            fontWeight: 600,
            color: C.fg,
            letterSpacing: "-0.03em",
          }}
        >
          Recent ships.
        </h2>
        <span style={{ fontFamily: F.mono, fontSize: 13, color: C.fgMuted }}>
          {works.length} entries · 2021 - 2026
        </span>
      </div>

      <div className="grid-2">
        {works.map((w) => {
          const Preview = MOCKS[w.id];
          return (
            <a
              key={w.id}
              href="#"
              style={{
                display: "block",
                background: C.bgRaised,
                border: `1px solid ${C.line}`,
                borderRadius: 14,
                padding: 14,
                color: C.fg,
              }}
            >
              <div style={{ borderRadius: 10, overflow: "hidden", border: `1px solid ${C.line}` }}>
                {Preview ? (
                  <Preview />
                ) : (
                  <div style={{ height: 240, background: C.bgInset }} />
                )}
              </div>

              <div style={{ padding: "18px 8px 6px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: F.mono,
                      fontSize: 10.5,
                      color: C.accent,
                      padding: "2px 8px",
                      background: `${C.accent}15`,
                      border: `1px solid ${C.accentDim}`,
                      borderRadius: 999,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {w.tag}
                  </span>
                  <span style={{ fontFamily: F.mono, fontSize: 11, color: C.fgDim }}>·</span>
                  <span style={{ fontFamily: F.mono, fontSize: 11, color: C.fgMuted }}>{w.year}</span>
                  <span style={{ fontFamily: F.mono, fontSize: 11, color: C.fgDim }}>·</span>
                  <span style={{ fontFamily: F.mono, fontSize: 11, color: C.fgMuted }}>{w.role}</span>
                </div>

                <h3
                  style={{
                    fontFamily: F.sans,
                    fontSize: 20,
                    fontWeight: 600,
                    color: C.fg,
                    marginBottom: 8,
                    letterSpacing: "-0.015em",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  {w.title}
                  <span style={{ color: C.fgDim, fontSize: 14 }}>↗</span>
                </h3>

                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: 14,
                    color: C.fgMuted,
                    lineHeight: 1.55,
                    marginBottom: 14,
                  }}
                >
                  {w.blurb}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    paddingTop: 14,
                    borderTop: `1px solid ${C.lineSoft}`,
                  }}
                >
                  {w.stack.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: F.mono,
                        fontSize: 10.5,
                        color: C.fgMuted,
                        padding: "2px 7px",
                        border: `1px solid ${C.line}`,
                        borderRadius: 4,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
