import Image from "next/image";
import { ArrowRight, DownloadIcon } from "@/components/Icons";
import { profile, stats } from "@/data";

export default function Hero() {
  return (
    <section id="home" className="hero-stage relative min-h-svh overflow-hidden">
      <div className="hero-glow" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="shell relative grid min-h-svh items-center gap-8 pt-28 sm:pt-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.9fr)] lg:items-center lg:gap-6 lg:pb-0">
          <div className="flex flex-col pb-8 lg:py-16">
            <p className="animate-rise text-sm font-medium text-ink/75 dark:text-white/75">
              Hi, I&apos;m {profile.name.split(" ")[0]}.
            </p>
            <h1
              className="mt-3 animate-rise font-display text-[2.65rem] font-semibold leading-[1.02] tracking-tight text-balance text-ink min-[420px]:text-5xl sm:text-6xl lg:text-[4.15rem] dark:text-white"
              style={{ animationDelay: "80ms" }}
            >
              Senior software engineer shipping <span className="hero-mark">real products</span>.
            </h1>
            <p
              className="mt-6 max-w-xl animate-rise text-pretty text-base leading-relaxed text-ink/75 sm:text-lg dark:text-white/75"
              style={{ animationDelay: "160ms" }}
            >
              {profile.intro}
            </p>

            <div
              className="mt-8 flex animate-rise flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={{ animationDelay: "240ms" }}
            >
              <a href="#work" className="btn-primary">
                View my work
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </div>

            <dl
              className="mt-12 grid max-w-lg animate-rise grid-cols-3 gap-4 border-t border-ink/15 pt-8 dark:border-white/15 sm:mt-14 sm:pt-10"
              style={{ animationDelay: "340ms" }}
            >
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label}>
                  <dt className="tabular font-display text-3xl font-semibold text-ink dark:text-white sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-ink/65 dark:text-white/65 sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative h-[30rem] w-full sm:h-[36rem] lg:min-h-[calc(100svh-8rem)]">
            <div className="hero-figure absolute inset-0">
              <Image
                src={profile.portraitLight}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 640px"
                className="animate-portrait-in object-contain object-bottom motion-reduce:animate-none dark:hidden lg:hidden"
              />
              <Image
                src={profile.portrait}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 640px"
                className="hidden animate-portrait-in object-contain object-bottom motion-reduce:animate-none dark:block lg:dark:hidden"
              />
            </div>
          </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-10 top-24 hidden w-[min(36vw,32rem)] animate-portrait-in motion-reduce:animate-none lg:right-16 lg:block xl:right-24">
        <div className="hero-figure absolute inset-0">
        <Image
          src={profile.portraitLight}
          alt="Portrait of Yosef Ashenafi"
          fill
          priority
          sizes="640px"
          className="object-contain object-bottom dark:hidden"
        />
        <Image
          src={profile.portrait}
          alt=""
          fill
          priority
          sizes="640px"
          className="hidden object-contain object-top dark:block"
        />
        </div>
      </div>
    </section>
  );
}
