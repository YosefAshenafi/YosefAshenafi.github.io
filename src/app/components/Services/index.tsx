import { serviceIcons, type ServiceIconName } from "@/components/Icons";
import { services } from "@/data";
import SectionHeading from "../SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section bg-paper">
      <div className="shell">
        <SectionHeading eyebrow="What I do" title="Services">
          Four overlapping practices. I usually own one or two on a given
          engagement, with hands on the rest.
        </SectionHeading>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as ServiceIconName];
            return (
              <article
                key={service.title}
                className="reveal flex flex-col rounded-[1.35rem] border border-line bg-cream p-6 transition-colors duration-300 hover:border-brand/40 sm:p-8"
                style={{ ["--reveal-delay" as string]: `${index * 40}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-line bg-paper text-brand">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </span>
                  <span className="tabular text-xs font-semibold tracking-label text-ink-faint">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
                  {service.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="rounded-full border border-line bg-paper px-3 py-1 text-xs font-medium text-ink-soft"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
