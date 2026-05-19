import { C, F } from "@/lib/theme";

export default function Footer() {
  return (
    <footer
      className="footer-bar"
      style={{
        borderTop: `1px solid ${C.line}`,
        fontFamily: F.mono,
        color: C.fgDim,
        background: C.bgRaised,
      }}
    >
      <span>© 2026 yosef ashenafi · built with care in addis ababa</span>
      <div style={{ display: "flex", gap: 18, alignItems: "center" }}>
        <span>v3.0.1</span>
        <span style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: 999,
              background: C.accent,
              marginRight: 6,
              display: "inline-block",
              boxShadow: `0 0 8px ${C.accent}`,
            }}
          />
          all systems operational
        </span>
      </div>
    </footer>
  );
}
