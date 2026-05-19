"use client";

import { useTheme } from "@/lib/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      style={{
        fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
        fontSize: 11,
        color: "var(--c-fg-dim)",
        background: "transparent",
        border: "1px solid var(--c-line)",
        borderRadius: 5,
        padding: "2px 8px",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        transition: "border-color 0.15s, color 0.15s",
        lineHeight: 1.6,
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "var(--c-accent)";
        el.style.color = "var(--c-accent)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "var(--c-line)";
        el.style.color = "var(--c-fg-dim)";
      }}
    >
      {isDark ? "◐ dark" : "◑ light"}
    </button>
  );
}
