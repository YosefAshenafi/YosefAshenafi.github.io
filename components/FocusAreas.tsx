import type { FocusArea } from "@/data/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

interface Props {
  focus: FocusArea[];
}

export default function FocusAreas({ focus }: Props) {
  return (
    <section
      id="about"
      className="section-pad"
      style={{ borderBottom: `1px solid ${C.lineSoft}` }}
    >
      <SectionLabel n="01" label="focus areas" />

      <div className="grid-focus-layout">
        <div>
          <h2
            style={{
              fontFamily: F.sans,
              fontSize: 42,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: C.fg,
              fontWeight: 600,
            }}
          >
            What I do,
            <br />
            <span style={{ color: C.fgDim }}>and the stack</span>
            <br />
            <span style={{ color: C.accent, fontStyle: "italic" }}>I do it with.</span>
          </h2>
          <p
            style={{
              color: C.fgMuted,
              fontFamily: F.sans,
              fontSize: 15,
              lineHeight: 1.6,
              marginTop: 24,
              maxWidth: 320,
            }}
          >
            Four overlapping practices. I usually own one or two on a given engagement, with hands on the rest.
          </p>
        </div>

        <div
          className="grid-focus-cards"
          style={{
            background: C.line,
            border: `1px solid ${C.line}`,
            borderRadius: 12,
            overflow: "hidden",
          }}
        >
          {focus.map((f) => (
            <div key={f.n} className="focus-card">
              <div
                style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 14 }}
              >
                <span className="focus-card-num" style={{ fontFamily: F.mono, fontSize: 12, color: C.accent, transition: "color 0.22s, text-shadow 0.22s" }}>
                  {`{${f.n}}`}
                </span>
                <h3
                  style={{
                    fontFamily: F.sans,
                    fontSize: 22,
                    fontWeight: 600,
                    color: C.fg,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: F.sans,
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: C.fgMuted,
                  marginBottom: 20,
                }}
              >
                {f.blurb}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {f.stack.map((s) => (
                  <span
                    key={s}
                    className="focus-card-pill"
                    style={{
                      fontFamily: F.mono,
                      fontSize: 11.5,
                      color: C.fgMuted,
                      padding: "4px 9px",
                      background: C.bgRaised,
                      border: `1px solid ${C.line}`,
                      borderRadius: 5,
                      transition: "border-color 0.22s, color 0.22s",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
