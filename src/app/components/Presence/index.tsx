import { GitHubIcon } from "@/components/Icons";
import { profile } from "@/data";
import { loadGithub, type ContributionDay } from "@/lib/github";
import SectionHeading from "../SectionHeading";

type Day = ContributionDay;

// GitHub's dark contribution graph, without the neon top step that glows at this size.
const LEVELS = ["#151b23", "#0e4429", "#006d32", "#26a641", "#2ea043"];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function monthMarks(rows: Day[][]) {
  const width = Math.max(...rows.map((weekdays) => weekdays.length));
  const marks: { col: number; label: string }[] = [];
  let last = "";
  for (let col = 0; col < width; col += 1) {
    const day = rows.map((weekdays) => weekdays[col]).find(Boolean);
    if (!day) continue;
    const label = MONTHS[Number(day.date.slice(5, 7)) - 1];
    if (label !== last) {
      marks.push({ col, label });
      last = label;
    }
  }
  return { width, marks };
}

export default async function Presence() {
  let data: Awaited<ReturnType<typeof loadGithub>> | null = null;
  try {
    data = await loadGithub();
  } catch {
    data = null;
  }

  const joined = new Date(data?.joined ?? profile.githubJoined);
  const joinedLabel = joined.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  const rows = data?.rows ?? [];
  const grid = rows.length ? monthMarks(rows) : null;
  const dayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  return (
    <section id="github" className="section bg-cream">
      <div className="shell">
        <SectionHeading
          eyebrow={
            <>
              <GitHubIcon className="h-7 w-7 shrink-0 text-white" aria-hidden="true" />
              GitHub
            </>
          }
          title={`On GitHub since ${joinedLabel}`}
        >
          {data?.total
            ? `${data.total}+ contributions in the last year${data.repos ? `, across ${data.repos}+ public repositories` : ""}.`
            : "A public record of commits, reviews, and repositories since the account was opened."}
        </SectionHeading>

          {grid ? (
            <div className="mt-8 flex min-w-0 flex-col rounded-[1.25rem] border border-line bg-paper p-5 sm:p-6">
              <div className="min-w-0 overflow-x-auto pb-2">
                <div className="w-full" style={{ minWidth: `calc(1.75rem + ${grid.width * 14}px)` }}>
                  <div
                    className="grid h-4 w-full items-end text-[10px] leading-none text-ink-faint"
                    style={{ gridTemplateColumns: `1.75rem repeat(${grid.width}, minmax(10px, 1fr))`, columnGap: 3 }}
                    aria-hidden="true"
                  >
                    <span />
                    {Array.from({ length: grid.width }, (_, col) => {
                      const mark = grid.marks.find((item) => item.col === col);
                      return (
                        <span key={col} className="relative">
                          {mark ? <span className="absolute bottom-0 left-0 whitespace-nowrap">{mark.label}</span> : null}
                        </span>
                      );
                    })}
                  </div>
                  <div
                    className="mt-1 grid w-full gap-[3px]"
                    style={{ gridTemplateColumns: `1.75rem repeat(${grid.width}, minmax(10px, 1fr))` }}
                    role="img"
                    aria-label={`${data?.total ? `${data.total}+` : "Recent"} GitHub contributions in the last year`}
                  >
                    {dayLabels.map((label, weekday) => (
                      <span
                        key={label || `day-${weekday}`}
                        className="flex items-center text-[10px] leading-none text-ink-faint"
                        style={{ gridColumn: 1, gridRow: weekday + 1 }}
                        aria-hidden="true"
                      >
                        {label}
                      </span>
                    ))}
                    {rows.map((weekdays, weekday) =>
                      Array.from({ length: grid.width }, (_, col) => {
                        const day = weekdays[col];
                        return (
                          <span
                            key={day?.date ?? `empty-${weekday}-${col}`}
                            title={day?.label || undefined}
                            className="aspect-square w-full rounded-[2px]"
                            style={{
                              gridColumn: col + 2,
                              gridRow: weekday + 1,
                              backgroundColor: day ? (LEVELS[day.level] ?? LEVELS[0]) : "transparent",
                            }}
                          />
                        );
                      }),
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex h-12 items-center justify-between gap-4 text-xs text-ink-faint">
                <a href={profile.github} target="_blank" rel="noreferrer" className="font-medium text-brand hover:text-brand-dark">
                  View profile
                </a>
                <p className="flex items-center gap-1.5" aria-hidden="true">
                  Less
                  {LEVELS.map((level) => (
                    <span
                      key={level}
                      className="h-[10px] w-[10px] rounded-[2px]"
                      style={{ backgroundColor: level }}
                    />
                  ))}
                  More
                </p>
              </div>
            </div>
          ) : (
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline mt-8 self-start">
              View GitHub profile
            </a>
          )}
      </div>
    </section>
  );
}
