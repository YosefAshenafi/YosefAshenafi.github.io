import { GitHubIcon } from "@/components/Icons";
import { profile } from "@/data";
import SectionHeading from "../SectionHeading";

type Day = { date: string; level: number; label: string };

const LEVELS = [
  "bg-line",
  "bg-brand/30",
  "bg-brand/55",
  "bg-brand/80",
  "bg-brand",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

async function loadGithub() {
  const headers = {
    "User-Agent": "yosefashenafi-site",
    Accept: "text/html,application/json",
  };

  const [graphRes, userRes] = await Promise.all([
    fetch("https://github.com/users/YosefAshenafi/contributions", {
      headers: { ...headers, "X-Requested-With": "XMLHttpRequest" },
      next: { revalidate: 60 * 60 * 6 },
    }),
    fetch("https://api.github.com/users/YosefAshenafi", {
      headers: { ...headers, Accept: "application/vnd.github+json" },
      next: { revalidate: 60 * 60 * 6 },
    }),
  ]);

  const html = graphRes.ok ? await graphRes.text() : "";
  const user = userRes.ok ? ((await userRes.json()) as { public_repos?: number; created_at?: string }) : null;

  const totalMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/);
  const cells = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[\s\S]*?data-level="(\d)"[\s\S]*?<tool-tip[^>]*>([^<]*)<\/tool-tip>/g)].map(
    (match) => ({
      date: match[1],
      level: Number(match[2]),
      label: match[3].trim(),
    }),
  );

  const rows: Day[][] = [];
  let row: Day[] = [];
  let previous = "";
  for (const cell of cells) {
    if (previous && cell.date < previous) {
      rows.push(row);
      row = [];
    }
    row.push(cell);
    previous = cell.date;
  }
  if (row.length) rows.push(row);

  return {
    total: totalMatch?.[1] ?? null,
    rows: rows.length === 7 ? rows : [],
    repos: user?.public_repos ?? null,
    joined: user?.created_at ?? profile.githubJoined,
  };
}

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
    <div id="github" className="mt-16">
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
                <div style={{ minWidth: grid.width * 11 }}>
                  <div
                    className="grid h-4 items-end text-[10px] leading-none text-ink-faint"
                    style={{ gridTemplateColumns: `1.75rem repeat(${grid.width}, minmax(8px, 1fr))`, columnGap: 3 }}
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
                    className="mt-1 grid gap-[3px]"
                    style={{ gridTemplateColumns: `1.75rem repeat(${grid.width}, minmax(8px, 1fr))` }}
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
                            className={`aspect-square w-full rounded-[2px] ${day ? LEVELS[day.level] ?? LEVELS[0] : "bg-transparent"}`}
                            style={{ gridColumn: col + 2, gridRow: weekday + 1 }}
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
                    <span key={level} className={`h-2.5 w-2.5 rounded-[2px] ${level}`} />
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
  );
}
