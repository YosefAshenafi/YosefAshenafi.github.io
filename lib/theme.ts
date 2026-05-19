// Design tokens — single source of truth for the portfolio colour palette and typography.
// Fonts are loaded by Next.js (app/layout.tsx) and exposed as CSS custom properties.

export const C = {
  bg: "#0b0d10",
  bgRaised: "#13161b",
  bgInset: "#0a0c0f",
  line: "#1d2128",
  lineSoft: "#161a20",
  fg: "#e6e7e9",
  fgMuted: "#8a8f97",
  fgDim: "#5b6068",
  accent: "#7dd3a8",
  accentDim: "#3a5a48",
  warn: "#e8c468",
  pink: "#d97a8c",
  blue: "#86a8e0",
  purple: "#b59ae0",
} as const;

// Inline-style font stacks that reference the CSS custom properties set by next/font.
export const F = {
  sans: "var(--font-sans), -apple-system, system-ui, sans-serif",
  mono: "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;
