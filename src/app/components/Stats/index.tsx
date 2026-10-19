import {
  BriefcaseIcon,
  CalendarIcon,
  CodeIcon,
  GitHubIcon,
  LayersIcon,
  SmileIcon,
} from "@/components/Icons";
import { stats } from "@/data";
import { loadGithub } from "@/lib/github";
import CountUp from "./CountUp";

const icons = [CalendarIcon, BriefcaseIcon, SmileIcon, LayersIcon];

function splitValue(value: string) {
  const match = value.match(/^(\d[\d,]*)(.*)$/);
  return {
    number: match ? Number(match[1].replace(/,/g, "")) : 0,
    suffix: match?.[2] ?? "",
  };
}

export default async function Stats() {
  let contributions: number | null = null;
  let repos: number | null = null;
  try {
    const github = await loadGithub();
    contributions = github.total ? Number(github.total.replace(/,/g, "")) : null;
    repos = github.repos;
  } catch {
    contributions = null;
    repos = null;
  }

  const items = [
    ...stats.map((stat, index) => ({
      ...splitValue(stat.value),
      label: stat.label,
      Icon: icons[index],
    })),
    ...(contributions
      ? [{ number: contributions, suffix: "+", label: "Contributions this year", Icon: GitHubIcon }]
      : []),
    ...(repos ? [{ number: repos, suffix: "+", label: "Public repositories", Icon: CodeIcon }] : []),
  ];

  return (
    <section className="relative overflow-hidden bg-band py-14 text-on-band sm:py-16" aria-label="Selected results">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-brand/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-brand/20 blur-3xl" />
      </div>
      <div className="shell relative">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:gap-y-12">
          {items.map((stat, index) => (
            <li
              key={stat.label}
              className="reveal sm:border-l sm:border-on-band/15 sm:px-6 sm:[&:nth-child(3n+1)]:border-l-0 sm:[&:nth-child(3n+1)]:pl-0"
              style={{ ["--reveal-delay" as string]: `${index * 40}ms` }}
            >
              <stat.Icon className="h-5 w-5 text-brand-glow" aria-hidden="true" />
              <p className="tabular mt-3 font-display text-4xl font-semibold sm:text-5xl">
                <CountUp value={stat.number} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-on-band/80">{stat.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
