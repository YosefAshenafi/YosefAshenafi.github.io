import { DownloadIcon } from "@/components/Icons";
import { education, experiences, profile, stack } from "@/data";
import SectionHeading from "../SectionHeading";
import { ToolLogo } from "./toolLogos";

const university = education.filter((item) => item.org === "Addis Ababa University");
const credentials = education.filter((item) => item.mark && item.org !== "Addis Ababa University");
const otherStudy = education.filter((item) => !item.mark);

export default function Resume() {
  return (
    <section id="resume" className="section bg-paper">
      <div className="shell">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[minmax(0,1fr)_40rem] xl:gap-16">
          <div className="reveal">
            <SectionHeading eyebrow="Experience" title="Where I've worked" />

            <ol className="mt-10 space-y-6 border-l border-line pl-6">
              {experiences.map((item) => (
                <li key={`${item.org}-${item.period}`} className="relative">
                  <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-brand bg-paper" />
                  <p className="text-xs font-semibold uppercase tracking-label text-brand">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[1.35rem] border border-line bg-cream p-5 sm:p-6">
              <p className="eyebrow">Skills</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
                Tools I reach for
              </h2>

              <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {stack.map((group) => (
                  <li
                    key={group.name}
                    className={`border-t border-line pt-2.5 ${group.name === "Platforms & tools" ? "sm:col-span-2" : ""}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-label text-ink-faint">
                      {group.name}
                    </p>
                    <ul className="mt-2.5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper px-2.5 py-1 text-[13px] font-medium leading-none text-ink-soft"
                        >
                          <ToolLogo name={item} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-col gap-4 border-t border-line pt-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-lg font-semibold text-ink">Want the longer version?</p>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-ink-muted">
                    Dates, scope, and the detail behind these roles are in the CV.
                  </p>
                </div>
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary shrink-0"
                >
                  <DownloadIcon className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-line pt-14 sm:mt-20 sm:pt-16">
          <SectionHeading eyebrow="Education" title="Where I studied">
            M.Sc. and B.Sc. in computing, an ALX Africa certificate, and a Codility silver award.
          </SectionHeading>

          <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-2">
            <article className="flex flex-col gap-6 rounded-[1.35rem] border border-line bg-cream p-6 sm:flex-row sm:items-center sm:p-8">
              <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full bg-white p-1 shadow-sm sm:h-36 sm:w-36 sm:p-1.5">
                <img
                  src="/education/aau.png"
                  alt=""
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-label text-brand">
                  Addis Ababa University
                </p>
                <ul className="mt-4 space-y-4">
                  {university.map((item) => (
                    <li key={item.title}>
                      <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-ink-soft">{item.period}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <div className="grid gap-4">
              {credentials.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-1 flex-col justify-center rounded-[1.35rem] border border-line bg-cream p-6"
                >
                  <div className="inline-flex h-11 items-center self-start rounded-lg bg-white px-3">
                    <img
                      src={item.mark}
                      alt=""
                      className="h-7 w-auto max-w-[9rem] object-contain object-left"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {item.org} · {item.period}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {otherStudy.length > 0 ? (
            <ul className="mt-4 grid gap-4">
              {otherStudy.map((item) => (
                <li
                  key={item.title}
                  className="rounded-[1.35rem] border border-line bg-cream px-6 py-5"
                >
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-soft">
                    {item.org} · {item.period}
                  </p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
