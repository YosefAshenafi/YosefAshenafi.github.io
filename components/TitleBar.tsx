import { C, F } from "@/lib/theme";

export default function TitleBar() {
  return (
    <div
      className="title-bar"
      style={{
        background: C.bgRaised,
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div style={{ display: "flex", gap: 7 }}>
        <span style={{ width: 12, height: 12, borderRadius: 999, background: "#ff5f56", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: 999, background: "#ffbd2e", display: "inline-block" }} />
        <span style={{ width: 12, height: 12, borderRadius: 999, background: "#27c93f", display: "inline-block" }} />
      </div>
      <span style={{ fontFamily: F.mono, fontSize: 12, color: C.fgMuted, flex: 1 }}>
        yosef-ashenafi{" "}
        <span style={{ color: C.fgDim }}>·</span> portfolio.tsx{" "}
        <span style={{ color: C.fgDim }}>·</span> zsh
      </span>
      <span className="tb-label" style={{ fontFamily: F.mono, fontSize: 11, color: C.fgDim }}>UTC+3 · Addis Ababa</span>
    </div>
  );
}
