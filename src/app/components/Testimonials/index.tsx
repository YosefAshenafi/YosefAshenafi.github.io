import { QuoteIcon } from "@/components/Icons";
import { testimonials } from "@/data";
import SectionHeading from "../SectionHeading";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-paper">
      <div className="shell">
        <SectionHeading eyebrow="Clients say" title="Kind words" align="center" />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure
              key={item.id}
              className="reveal flex flex-col rounded-[1.75rem] border border-line bg-cream p-6 sm:p-8"
              style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}
            >
              <QuoteIcon className="h-8 w-8 text-brand/25" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 font-display text-xl font-medium leading-snug text-ink sm:text-[1.35rem]">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-tint text-xs font-semibold text-brand">
                  {item.name
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold text-ink underline-offset-4 hover:underline"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="block text-sm font-semibold text-ink">{item.name}</span>
                  )}
                  <span className="block text-xs text-ink-muted">
                    {item.position}, {item.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
