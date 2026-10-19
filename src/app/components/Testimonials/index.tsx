"use client";

import { useRef, useState } from "react";
import { ArrowRight, LinkedInIcon, QuoteIcon } from "@/components/Icons";
import { testimonials } from "@/data";
import SectionHeading from "../SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const dragStart = useRef<number | null>(null);
  const count = testimonials.length;
  const item = testimonials[index];
  const go = (next: number) => setIndex((next + count) % count);

  return (
    <section id="testimonials" className="section bg-paper">
      <div className="shell">
        <SectionHeading eyebrow="Clients say" title="Kind words" align="center" />

        <div
          className="mx-auto mt-12 max-w-3xl"
          role="region"
          aria-roledescription="carousel"
          aria-label="Kind words"
          onPointerDown={(event) => {
            if ((event.target as HTMLElement).closest("a, button")) return;
            dragStart.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (dragStart.current == null) return;
            const delta = event.clientX - dragStart.current;
            dragStart.current = null;
            if (delta > 48) go(index - 1);
            if (delta < -48) go(index + 1);
          }}
          onPointerCancel={() => {
            dragStart.current = null;
          }}
        >
          <figure className="rounded-[1.75rem] border border-line bg-cream p-6 sm:p-10">
            <QuoteIcon className="h-8 w-8 text-brand/25" aria-hidden="true" />
            <blockquote
              key={item.id}
              className="mt-6 min-h-[9.5rem] font-display text-xl font-medium leading-snug text-ink sm:min-h-[8.5rem] sm:text-[1.65rem]"
            >
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-between gap-4 border-t border-line pt-5">
              <span className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint text-xs font-semibold text-brand">
                  {item.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">{item.name}</span>
                  <span className="block truncate text-xs text-ink-muted">
                    {item.position}, {item.company}
                  </span>
                </span>
              </span>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name} on LinkedIn`}
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-[#0A66C2] transition-colors hover:border-[#0A66C2]"
                >
                  <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              ) : null}
            </figcaption>
          </figure>

          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowRight className="h-4 w-4 rotate-180" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((entry, dot) => (
                <button
                  key={entry.id}
                  type="button"
                  aria-label={`Show ${entry.name}`}
                  aria-current={dot === index ? "true" : undefined}
                  onClick={() => go(dot)}
                  className={`h-2 rounded-full transition-all ${
                    dot === index ? "w-6 bg-brand" : "w-2 bg-line"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
