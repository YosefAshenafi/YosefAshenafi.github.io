import { CodeIcon, PenIcon, RocketIcon, SearchIcon } from "@/components/Icons";
import { process } from "@/data";
import SectionHeading from "../SectionHeading";

const icons = [SearchIcon, PenIcon, CodeIcon, RocketIcon];

export default function Process() {
  return (
    <section id="process" className="section bg-cream">
      <div className="shell">
        <SectionHeading eyebrow="My process" title="How I work" align="center">
          Scoping, design, delivery, and review — the loop on the engagements
          I lead.
        </SectionHeading>

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-7 hidden border-t border-dashed border-ink/15 lg:block"
            aria-hidden="true"
          />
          {process.map((step, index) => {
            const Icon = icons[index];
            return (
              <li
                key={step.number}
                className="reveal relative"
                style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}
              >
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-line bg-paper text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-label text-brand">
                  {step.number}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
