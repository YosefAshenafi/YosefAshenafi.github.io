import {
  BriefcaseIcon,
  CalendarIcon,
  LayersIcon,
  SmileIcon,
} from "@/components/Icons";
import { stats } from "@/data";

const icons = [CalendarIcon, BriefcaseIcon, SmileIcon, LayersIcon];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-band py-14 text-on-band sm:py-16" aria-label="Selected results">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
      </div>
      <div className="shell relative">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <li
                key={stat.label}
                className="reveal lg:border-l lg:border-on-band/15 lg:px-8 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0"
                style={{ ["--reveal-delay" as string]: `${index * 40}ms` }}
              >
                <Icon className="h-5 w-5 text-brand-glow" aria-hidden="true" />
                <p className="tabular mt-3 font-display text-4xl font-semibold sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-on-band/80">{stat.label}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
