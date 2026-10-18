import { CheckIcon, serviceIcons, type ServiceIconName } from "@/components/Icons";
import { services } from "@/data";
import SectionHeading from "../SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section bg-paper">
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="What I do" title="Services">
            Four overlapping practices. I usually own one or two on a given
            engagement, with hands on the rest.
          </SectionHeading>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as ServiceIconName];
            return (
              <article
                key={service.title}
                className="reveal border-t border-line pt-6"
                style={{ ["--reveal-delay" as string]: `${index * 40}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-tint text-brand">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </span>
                  <span className="tabular text-xs font-semibold tracking-label text-ink-faint">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-ink-soft">
                      <CheckIcon className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
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
