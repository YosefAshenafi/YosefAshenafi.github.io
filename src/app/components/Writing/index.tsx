import { TelegramIcon } from "@/components/Icons";
import { profile } from "@/data";
import SectionHeading from "../SectionHeading";

export default function Writing() {
  return (
    <section id="writing" className="section bg-cream">
      <div className="shell">
        <SectionHeading
          eyebrow={
            <>
              <TelegramIcon className="h-7 w-7 shrink-0 text-[#2AABEE]" aria-hidden="true" />
              Community
            </>
          }
          title="Building in public"
        >
          JossyBuilds is the Telegram community where a build is shared while it is still in progress. The same work goes out on LinkedIn, GitHub, and TikTok, which is how it reaches and influences the people who follow it.
        </SectionHeading>

        <div className="mt-10 max-w-md rounded-[1.25rem] border border-line bg-paper p-5 sm:p-6">
          <p className="flex h-7 items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
            <TelegramIcon className="h-7 w-7 shrink-0 text-[#2AABEE]" aria-hidden="true" />
            Telegram
          </p>
          <p className="mt-4 font-display text-3xl font-semibold leading-none text-ink">JossyBuilds</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">
            The community. Builds, tester calls, and the notes behind a ship.
          </p>
          <a href={profile.telegram} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
            Join the community
          </a>
        </div>
      </div>
    </section>
  );
}
