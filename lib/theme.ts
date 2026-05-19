// Design tokens — all values are CSS custom-property references.
// Actual colour values live in globals.css as :root (dark) and [data-theme="light"].

export const C = {
  bg:          "var(--c-bg)",
  bgRaised:    "var(--c-bg-raised)",
  bgInset:     "var(--c-bg-inset)",
  line:        "var(--c-line)",
  lineSoft:    "var(--c-line-soft)",
  fg:          "var(--c-fg)",
  fgMuted:     "var(--c-fg-muted)",
  fgDim:       "var(--c-fg-dim)",
  accent:      "var(--c-accent)",
  accentDim:   "var(--c-accent-dim)",
  // replaces `${C.accent}12` / `${C.accent}18` hex-alpha patterns (~8% tint)
  accentFaint: "var(--c-accent-a08)",
  // replaces `${C.accent}80` hex-alpha pattern (~50% tint)
  accentMid:   "var(--c-accent-a50)",
  warn:        "var(--c-warn)",
  pink:        "var(--c-pink)",
  blue:        "var(--c-blue)",
  purple:      "var(--c-purple)",
} as const;

export const F = {
  sans: "var(--font-sans), -apple-system, system-ui, sans-serif",
  mono: "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;
