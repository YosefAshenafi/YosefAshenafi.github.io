import TerminalDemo from "@/components/TerminalDemo";
import { C, F } from "@/lib/theme";

interface Props {
  email: string;
  clients: string[];
  available: boolean;
}

export default function Hero({ clients, available }: Props) {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{ borderBottom: `1px solid ${C.lineSoft}` }}
    >
      <div className="hero-grid">
        {/* Left — headline + CTAs */}
        <div>
          {available && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "5px 12px 5px 8px",
                border: `1px solid ${C.line}`,
                borderRadius: 999,
                background: C.bgRaised,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  width: 14,
                  height: 14,
                  borderRadius: 999,
                  background: C.accent,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{ width: 5, height: 5, borderRadius: 999, background: C.bg, display: "block" }}
                />
              </span>
              <span style={{ fontFamily: F.mono, fontSize: 11.5, color: C.fgMuted }}>
                available · Q3 2026
              </span>
            </div>
          )}

          <h1
            className="hero-headline"
            style={{ fontFamily: F.sans, color: C.fg }}
          >
            Senior software
            <br />
            engineer
            <span style={{ color: C.accent, fontStyle: "italic", fontWeight: 500 }}> shipping</span>
            <br />
            <span style={{ color: C.fgDim }}>real products.</span>
          </h1>

          <div
            style={{
              marginTop: 36,
              display: "flex",
              gap: 10,
              fontFamily: F.mono,
              fontSize: 13,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#work"
              style={{
                padding: "12px 18px",
                background: C.accent,
                color: C.bg,
                borderRadius: 8,
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              view work <span style={{ opacity: 0.6 }}>→</span>
            </a>
            <a
              href="#contact"
              style={{
                padding: "12px 18px",
                color: C.fg,
                borderRadius: 8,
                border: `1px solid ${C.line}`,
              }}
            >
              get in touch
            </a>
            <a
              href="#"
              style={{
                padding: "12px 18px",
                color: C.fgMuted,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              resume.pdf <span style={{ color: C.fgDim }}>↗</span>
            </a>
          </div>
        </div>

        {/* Right — terminal card */}
        <div
          style={{
            background: C.bgRaised,
            border: `1px solid ${C.line}`,
            borderRadius: 12,
            fontFamily: F.mono,
            fontSize: 13,
            lineHeight: 1.8,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: 340,
          }}
        >
          <div
            style={{
              padding: "9px 14px",
              borderBottom: `1px solid ${C.line}`,
              color: C.fgMuted,
              fontSize: 11.5,
              display: "flex",
              alignItems: "center",
              gap: 10,
              flexShrink: 0,
            }}
          >
            <span style={{ display: "flex", gap: 6 }}>
              {(["#ff5f56", "#ffbd2e", "#27c93f"] as const).map((bg) => (
                <span key={bg} style={{ width: 9, height: 9, borderRadius: 999, background: bg, display: "inline-block" }} />
              ))}
            </span>
            <span style={{ marginLeft: 4 }}>~/portfolio · zsh</span>
          </div>

          <div style={{ padding: "24px 24px", flex: 1 }}>
            <TerminalDemo />
          </div>
        </div>
      </div>

      {/* Client strip */}
      <div
        className="client-strip"
        style={{ borderTop: `1px solid ${C.lineSoft}` }}
      >
        <span
          style={{
            fontFamily: F.mono,
            fontSize: 11,
            color: C.fgDim,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          // selected clients &amp; teams
        </span>
        <div
          className="client-list"
          style={{ fontFamily: F.sans, color: C.fgMuted }}
        >
          {clients.flatMap((c, i) => [
            <span key={c}>{c}</span>,
            i < clients.length - 1
              ? <span key={`sep-${i}`} style={{ color: C.fgDim }}>·</span>
              : null,
          ])}
        </div>
      </div>
    </section>
  );
}
