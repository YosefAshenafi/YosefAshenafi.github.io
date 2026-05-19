import SectionLabel from "@/components/SectionLabel";
import { C, F } from "@/lib/theme";

interface Props {
  skills: Record<string, string[]>;
}

export default function Skills({ skills }: Props) {
  return (
    <section className="section-pad" style={{ borderBottom: `1px solid ${C.lineSoft}` }}>
      <SectionLabel n="04" label="stack" />

      <div className="grid-skills">
        <h2
          style={{
            fontFamily: F.sans,
            fontSize: 42,
            fontWeight: 600,
            color: C.fg,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Tools I reach
          <br />
          for, by default.
        </h2>

        <div
          style={{
            background: C.bgInset,
            border: `1px solid ${C.line}`,
            borderRadius: 12,
            padding: "28px 32px",
            fontFamily: F.mono,
            fontSize: 14,
            lineHeight: 1.95,
          }}
        >
          <span style={{ color: C.fgDim, display: "block", marginBottom: 14 }}>
            // stack.yaml
          </span>
          {Object.entries(skills).map(([group, items]) => {
            const key = group.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z_]/g, "");
            return (
              <div key={group} style={{ marginBottom: 12 }}>
                <span style={{ color: C.pink }}>{key}</span>
                <span style={{ color: C.fgDim }}>:</span>
                <span style={{ marginLeft: 12 }}>
                  [
                  {items.map((s, i) => (
                    <span key={s}>
                      <span style={{ color: C.warn }}>&quot;{s}&quot;</span>
                      {i < items.length - 1 && (
                        <span style={{ color: C.fgDim }}>, </span>
                      )}
                    </span>
                  ))}
                  ]
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
