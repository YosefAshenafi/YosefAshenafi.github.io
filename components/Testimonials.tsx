import type { Testimonial } from "@/data/portfolio";
import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

interface Props {
  testimonials: Testimonial[];
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function Testimonials({ testimonials }: Props) {
  return (
    <section className="section-pad" style={{ borderBottom: `1px solid ${C.lineSoft}` }}>
      <SectionLabel n="06" label="kind words" />

      <div className="grid-2" style={{ gap: 32 }}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            style={{
              padding: 32,
              background: C.bgRaised,
              border: `1px solid ${C.line}`,
              borderRadius: 12,
            }}
          >
            <div
              style={{
                fontFamily: F.mono,
                fontSize: 32,
                color: C.accent,
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              &quot;
            </div>

            <p
              style={{
                fontFamily: F.sans,
                fontSize: 15.5,
                lineHeight: 1.65,
                color: C.fg,
                marginBottom: 28,
              }}
            >
              {t.quote}
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  background: `linear-gradient(135deg, ${C.accent}, ${C.blue})`,
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: F.mono,
                  fontWeight: 700,
                  color: C.bg,
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                {initials(t.name)}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: F.sans,
                    fontSize: 14,
                    fontWeight: 600,
                    color: C.fg,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: F.mono,
                    fontSize: 11.5,
                    color: C.fgMuted,
                    marginTop: 2,
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
