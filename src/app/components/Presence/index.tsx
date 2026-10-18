import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
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
  const columnMajor: (Day | null)[] = [];
  if (grid) {
    for (let col = 0; col < grid.width; col += 1) {
      for (let weekday = 0; weekday < 7; weekday += 1) {
        columnMajor.push(rows[weekday][col] ?? null);
      }
    }
  }

  return (
    <section id="github" className="section bg-cream">
      <div className="shell grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
        <div className="min-w-0">
          <SectionHeading
            eyebrow={
              <>
                <GitHubIcon className="h-7 w-7 text-white" aria-hidden="true" />
                GitHub
              </>
            }
            title={`On GitHub since ${joinedLabel}`}
          >
            {data?.total
              ? `${data.total} contributions in the last year${data.repos ? `, across ${data.repos} public repositories` : ""}.`
              : "A public record of commits, reviews, and repositories since the account was opened."}
          </SectionHeading>

          {grid ? (
            <div className="mt-8 rounded-[1.25rem] border border-line bg-paper p-4 sm:p-5">
              <div className="flex gap-2">
                <div className="mt-5 grid shrink-0 grid-rows-7 gap-[3px] text-[10px] leading-[10px] text-ink-faint" aria-hidden="true">
                  <span />
                  <span>Mon</span>
                  <span />
                  <span>Wed</span>
                  <span />
                  <span>Fri</span>
                  <span />
                </div>
                <div className="min-w-0 flex-1 overflow-x-auto">
                  <div style={{ width: grid.width * 13 }}>
                    <div className="relative mb-1 h-4 text-[10px] text-ink-faint" aria-hidden="true">
                      {grid.marks.map((mark) => (
                        <span key={`${mark.label}-${mark.col}`} className="absolute top-0" style={{ left: mark.col * 13 }}>
                          {mark.label}
                        </span>
                      ))}
                    </div>
                    <div
                      className="grid grid-flow-col grid-rows-7 gap-[3px]"
                      style={{ gridAutoColumns: "10px" }}
                      role="img"
                      aria-label={`${data?.total ?? "Recent"} GitHub contributions in the last year`}
                    >
                      {columnMajor.map((day, index) => (
                        <span
                          key={day?.date ?? `empty-${index}`}
                          title={day?.label || undefined}
                          className={`h-[10px] w-[10px] rounded-[2px] ${day ? LEVELS[day.level] ?? LEVELS[0] : "bg-transparent"}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-ink-faint">
                <a href={profile.github} target="_blank" rel="noreferrer" className="font-medium text-brand hover:text-brand-dark">
                  View profile
                </a>
                <p className="flex items-center gap-1.5" aria-hidden="true">
                  Less
                  {LEVELS.map((level) => (
                    <span key={level} className={`h-[10px] w-[10px] rounded-[2px] ${level}`} />
                  ))}
                  More
                </p>
              </div>
            </div>
          ) : (
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-outline mt-8">
              View GitHub profile
            </a>
          )}
        </div>

        <aside className="rounded-[1.25rem] border border-line bg-paper p-6 sm:p-7">
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
            <LinkedInIcon className="h-7 w-7 text-[#0A66C2]" aria-hidden="true" />
            LinkedIn
          </p>
          <p className="tabular mt-4 font-display text-4xl font-semibold text-ink">
            {profile.linkedinConnections.toLocaleString("en-US")}
          </p>
          <p className="mt-1 text-sm text-ink-muted">connections</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            A network kept over many years. Open to recruiters for on-site, hybrid, and remote work in Ethiopia.
          </p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-primary mt-6">
            View LinkedIn
          </a>
        </aside>
      </div>
    </section>
  );
}
