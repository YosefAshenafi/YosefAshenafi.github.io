import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: ReactNode;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const light = tone === "light";

  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      <p className={`eyebrow ${align === "center" ? "eyebrow-center" : ""} ${light ? "text-brand-glow before:bg-brand-glow/70 after:bg-brand-glow/70" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-balance sm:text-5xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {children ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            light ? "text-cream/70" : "text-ink-muted"
          }`}
        >
          {children}
        </p>
      ) : null}
    </div>
  );
}
