import { profile } from "@/data";

export type ContributionDay = { date: string; level: number; label: string };

export async function loadGithub() {
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

  const rows: ContributionDay[][] = [];
  let row: ContributionDay[] = [];
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
