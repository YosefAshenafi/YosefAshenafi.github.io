import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        band: "rgb(var(--band) / <alpha-value>)",
        "on-band": "rgb(var(--on-band) / <alpha-value>)",
        "on-brand": "rgb(var(--on-brand) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
          faint: "rgb(var(--ink-faint) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          fill: "rgb(var(--brand-fill) / <alpha-value>)",
          dark: "rgb(var(--brand-dark) / <alpha-value>)",
          tint: "rgb(var(--brand-tint) / <alpha-value>)",
          glow: "rgb(var(--brand-glow) / <alpha-value>)",
        },
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Roboto", "system-ui", "sans-serif"],
        display: ["var(--font-roboto)", "Roboto", "system-ui", "sans-serif"],
      },
      fontWeight: {
        semibold: "700",
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        label: "0.18em",
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(13,15,14,0.04), 0 12px 32px -12px rgba(13,15,14,0.12)",
        lift: "0 2px 4px rgba(13,15,14,0.05), 0 24px 48px -20px rgba(13,15,14,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "portrait-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "glow-soft": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        float: "float 6s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "portrait-in": "portrait-in 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "spin-slow": "spin-slow 90s linear infinite",
        "float-soft": "float-soft 7s ease-in-out infinite",
        "glow-soft": "glow-soft 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
