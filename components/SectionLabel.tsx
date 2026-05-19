import { C, F } from "@/lib/theme";

interface Props {
  n: string;
  label: string;
}

export default function SectionLabel({ n, label }: Props) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 28 }}>
      <span style={{ fontFamily: F.mono, fontSize: 12, color: C.accent, letterSpacing: "0.04em" }}>
        // {n}
      </span>
      <span
        style={{
          fontFamily: F.mono,
          fontSize: 12,
          color: C.fgMuted,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <span style={{ flex: 1, height: 1, background: C.line, marginLeft: 8 }} />
    </div>
  );
}
