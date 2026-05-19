import type { Experience, Education } from "@/data/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

interface Props {
  experience: Experience[];
  education: Education[];
}

export default function Career({ experience, education }: Props) {
  return (
    <section className="section-pad" style={{ borderBottom: `1px solid ${C.lineSoft}` }}>
      <SectionLabel n="03" label="career.log" />

      <div className="grid-career">
        {/* Experience */}
        <div>
          <h3
            style={{
              fontFamily: F.mono,
              fontSize: 13,
              color: C.fgMuted,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 28,
            }}
          >
            ── experience
          </h3>

          <div style={{ borderLeft: `1px solid ${C.line}`, paddingLeft: 28 }}>
            {experience.map((e, i) => (
              <div
                key={i}
                style={{
                  marginBottom: i < experience.length - 1 ? 36 : 0,
                  position: "relative",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: -34,
                    top: 6,
                    width: 9,
                    height: 9,
                    borderRadius: 999,
                    background: e.current ? C.accent : C.fgDim,
                    boxShadow: e.current ? `0 0 12px ${C.accent}` : "none",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 12,
                    color: e.current ? C.accent : C.fgMuted,
                    marginBottom: 6,
                  }}
                >
                  {e.period}
                  {e.current && (
                    <span style={{ color: C.accent, marginLeft: 6 }}>● current</span>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: F.sans,
                    fontSize: 18,
                    fontWeight: 600,
                    color: C.fg,
                    marginBottom: 2,
                  }}
                >
                  {e.title}
                </div>
                <div
                  style={{
                    fontFamily: F.sans,
                    fontSize: 14,
                    color: C.fgMuted,
                    marginBottom: 8,
                  }}
                >
                  {e.company}{" "}
                  <span style={{ color: C.fgDim }}>·</span>{" "}
                  {e.location}
                </div>
                <div
                  style={{
                    fontFamily: F.sans,
                    fontSize: 13.5,
                    color: C.fgDim,
                    lineHeight: 1.55,
                    maxWidth: 460,
                  }}
                >
                  {e.blurb}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3
            style={{
              fontFamily: F.mono,
              fontSize: 13,
              color: C.fgMuted,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 28,
            }}
          >
            ── education
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {education.map((e, i) => (
              <div
                key={i}
                style={{
                  padding: "18px 20px",
                  background: C.bgRaised,
                  border: `1px solid ${C.line}`,
                  borderRadius: 10,
                }}
              >
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 11.5,
                    color: C.accent,
                    marginBottom: 6,
                  }}
                >
                  {e.period}
                </div>
                <div
                  style={{
                    fontFamily: F.sans,
                    fontSize: 15,
                    fontWeight: 600,
                    color: C.fg,
                    lineHeight: 1.35,
                  }}
                >
                  {e.title}
                </div>
                <div
                  style={{ fontFamily: F.sans, fontSize: 13, color: C.fgMuted, marginTop: 4 }}
                >
                  {e.school}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            style={{
              display: "block",
              marginTop: 22,
              padding: "14px 18px",
              background: C.bg,
              border: `1px solid ${C.line}`,
              borderRadius: 10,
              color: C.fg,
              fontFamily: F.mono,
              fontSize: 13,
            }}
          >
            <span style={{ color: C.accent }}>$</span> open resume.pdf{" "}
            <span style={{ color: C.fgDim, marginLeft: 8 }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
