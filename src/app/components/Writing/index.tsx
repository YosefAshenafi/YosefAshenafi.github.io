import { ArrowUpRight } from "@/components/Icons";
import { profile, writing } from "@/data";
import SectionHeading from "../SectionHeading";

export default function Writing() {
  return (
    <section id="writing" className="section bg-cream">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Build log" title="Building in public">
            Architecture calls, UI decisions, failed experiments, and what
            finally shipped. The notes live on Telegram.
          </SectionHeading>
          <a
            href={profile.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline shrink-0 self-start sm:self-auto"
          >
            @{profile.telegram.split("/").pop()}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <ol className="mt-12 divide-y divide-line border-y border-line">
          {writing.map((post) => (
            <li key={post.title}>
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 py-6 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-8"
              >
                <p className="text-sm text-ink-muted">{post.date}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-label text-brand">
                    {post.tag} · {post.readTime}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    Read on Telegram
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
