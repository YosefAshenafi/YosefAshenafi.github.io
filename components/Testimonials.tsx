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
                {t.linkedin ? (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: F.sans,
                      fontSize: 14,
                      fontWeight: 600,
                      color: C.fg,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = C.accent; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = C.fg; }}
                  >
                    {t.name}
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6 }}>
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                ) : (
                  <div style={{ fontFamily: F.sans, fontSize: 14, fontWeight: 600, color: C.fg }}>
                    {t.name}
                  </div>
                )}
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
