import type { Post } from "@/data/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

interface Props {
  posts: Post[];
  telegram: string;
}

export default function Writing({ posts, telegram }: Props) {
  return (
    <section
      id="writing"
      className="section-pad"
      style={{ borderBottom: `1px solid ${C.lineSoft}` }}
    >
      <SectionLabel n="05" label="build log" />

      <div className="writing-header-row">
        <h2
          style={{
            fontFamily: F.sans,
            fontSize: 42,
            fontWeight: 600,
            color: C.fg,
            letterSpacing: "-0.03em",
          }}
        >
          Building in public.
        </h2>
        <a
          href={`https://${telegram}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: F.mono, fontSize: 13, color: C.accent }}
        >
          follow the journey ↗
        </a>
      </div>

      {/* Telegram callout */}
      <a
        href={`https://${telegram}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          padding: "22px 28px",
          marginBottom: 28,
          background: `linear-gradient(135deg, ${C.bgRaised} 0%, ${C.bgInset} 100%)`,
          border: `1px solid ${C.accentDim}`,
          borderRadius: 12,
          color: C.fg,
          textDecoration: "none",
        }}
      >
        {/* Telegram icon */}
        <span
          style={{
            width: 44,
            height: 44,
            borderRadius: 12,
            background: "#2AABEE",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 22,
          }}
        >
          ✈
        </span>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: F.sans,
              fontSize: 16,
              fontWeight: 600,
              color: C.fg,
              letterSpacing: "-0.01em",
              marginBottom: 4,
            }}
          >
            @jossybuildschat
          </div>
          <div
            style={{
              fontFamily: F.sans,
              fontSize: 13.5,
              color: C.fgMuted,
              lineHeight: 1.5,
            }}
          >
            I document the full journey of building apps: architecture calls, UI decisions, failed
            experiments, and what finally shipped. Join me on Telegram.
          </div>
        </div>

        <div
          style={{
            fontFamily: F.mono,
            fontSize: 12,
            color: C.accent,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: 7,
              height: 7,
              borderRadius: 999,
              background: C.accent,
              boxShadow: `0 0 8px ${C.accent}`,
            }}
          />
          {telegram}
        </div>
      </a>

      <div className="grid-3">
        {posts.map((p, i) => (
          <a
            key={i}
            href="#"
            style={{
              display: "block",
              padding: 24,
              background: C.bgRaised,
              border: `1px solid ${C.line}`,
              borderRadius: 12,
              color: C.fg,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 18,
                fontFamily: F.mono,
                fontSize: 11.5,
              }}
            >
              <span style={{ color: C.fgDim }}>{p.date}</span>
              <span
                style={{
                  color: C.accent,
                  padding: "2px 8px",
                  background: `${C.accent}12`,
                  borderRadius: 4,
                }}
              >
                #{p.tag}
              </span>
            </div>

            <h3
              style={{
                fontFamily: F.sans,
                fontSize: 19,
                fontWeight: 600,
                color: C.fg,
                marginBottom: 12,
                lineHeight: 1.3,
                letterSpacing: "-0.01em",
              }}
            >
              {p.title}
            </h3>

            <p
              style={{
                fontFamily: F.sans,
                fontSize: 13.5,
                color: C.fgMuted,
                lineHeight: 1.55,
              }}
            >
              {p.blurb}
            </p>

            <div
              style={{
                fontFamily: F.mono,
                fontSize: 11.5,
                color: C.fgDim,
                marginTop: 18,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span style={{ color: C.accent }}>→</span> read · {p.readTime}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
