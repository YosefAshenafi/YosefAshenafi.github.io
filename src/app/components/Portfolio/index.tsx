import Image from "next/image";
import { ArrowUpRight } from "@/components/Icons";
import { projects } from "@/data";
import SectionHeading from "../SectionHeading";

function BrowserFrame({
  src,
  alt,
  priority = false,
}: {
  src?: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="rounded-[1.35rem] border border-line bg-cream p-2.5 shadow-soft transition duration-300 group-hover:shadow-lift sm:p-3">
      <div className="mb-2.5 flex items-center gap-1.5 px-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-[#E7C8C4]" />
        <span className="h-2 w-2 rounded-full bg-[#E7DDB8]" />
        <span className="h-2 w-2 rounded-full bg-[#C9DDD2]" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-brand-tint">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
            className="object-contain object-top transition duration-500 group-hover:scale-[1.03]"
          />
        ) : null}
      </div>
    </div>
  );
}

export default function Projects() {
  const spotlight = projects.find((project) => project.featured) ?? projects[0];
  const rest = projects.filter((project) => project.id !== spotlight.id);

  return (
    <section id="work" className="section bg-cream">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Selected work" title="Recent ships">
            20+ products across web, mobile, dashboards, and fintech.
            Open the ones that are public.
          </SectionHeading>
          <a href="#contact" className="btn-outline shrink-0 self-start sm:self-auto">
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <article className="reveal mt-12">
          <a
            href={spotlight.link ?? "#contact"}
            {...(spotlight.link
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="group grid overflow-hidden rounded-[1.75rem] border border-line bg-paper shadow-soft transition duration-300 hover:shadow-lift lg:grid-cols-2"
            aria-label={
              spotlight.link
                ? `View ${spotlight.title}`
                : `Ask about ${spotlight.title}`
            }
          >
            <div className="relative flex min-h-[280px] items-center justify-center bg-brand-tint sm:min-h-[360px] lg:min-h-[520px]">
              {spotlight.image ? (
                spotlight.category.toLowerCase().includes("mobile") ? (
                  <div className="relative my-8 h-[420px] w-[194px] overflow-hidden rounded-[1.6rem] border border-line shadow-lift lg:h-[460px] lg:w-[212px]">
                    <Image
                      src={spotlight.image}
                      alt={`${spotlight.title} product preview`}
                      fill
                      sizes="220px"
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <Image
                    src={spotlight.image}
                    alt={`${spotlight.title} product preview`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain object-top transition duration-500 group-hover:scale-[1.03]"
                  />
                )
              ) : null}
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-2xs font-semibold uppercase tracking-label text-brand">
                {spotlight.category}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {spotlight.title}
              </h3>
              <p className="mt-4 max-w-md text-pretty leading-relaxed text-ink-muted">
                {spotlight.description}
              </p>
              <p className="mt-4 text-sm font-medium text-ink">{spotlight.result}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {spotlight.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-ink-soft"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                {spotlight.link?.includes("play.google.com")
                  ? "View on Google Play"
                  : spotlight.link
                    ? "View project"
                    : "Ask about this work"}
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        </article>

        <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((project, index) => (
            <article
              key={project.id}
              className="reveal"
              style={{ ["--reveal-delay" as string]: `${index * 50}ms` }}
            >
              <a
                href={project.link ?? "#contact"}
                {...(project.link
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group block rounded-3xl focus-visible:outline-none"
                aria-label={
                  project.link ? `View ${project.title}` : `Ask about ${project.title}`
                }
              >
                <BrowserFrame src={project.image} alt="" />
                <div className="mt-5 flex items-start justify-between gap-4 px-1">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-muted">{project.category}</p>
                    <p className="mt-1 text-xs text-ink-faint">{project.result}</p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-paper text-ink transition-colors group-hover:border-brand-fill group-hover:bg-brand-fill group-hover:text-on-brand">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
