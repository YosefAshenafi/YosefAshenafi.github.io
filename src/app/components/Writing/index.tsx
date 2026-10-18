import { LinkedInIcon, TelegramIcon } from "@/components/Icons";
import { profile } from "@/data";
import SectionHeading from "../SectionHeading";

const channels = [
  {
    name: "Telegram",
    icon: TelegramIcon,
    color: "text-[#2AABEE]",
    figure: "JossyBuilds",
    detail: "The community. Builds, tester calls, and the notes behind a ship.",
    href: profile.telegram,
    action: "Join the community",
  },
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    color: "text-[#0A66C2]",
    figure: `${profile.linkedinConnections.toLocaleString("en-US")}+`,
    detail: "A network kept over many years. The public work is what they see.",
    href: profile.linkedin,
    action: "View LinkedIn",
  },
];

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

        <ul className="mt-10 grid items-stretch gap-4 sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <li key={channel.name} className="flex flex-col rounded-[1.25rem] border border-line bg-paper p-5 sm:p-6">
                <p className="flex h-7 items-center gap-2.5 text-xs font-medium uppercase tracking-[0.16em] text-ink-faint">
                  <Icon className={`h-7 w-7 shrink-0 ${channel.color}`} aria-hidden="true" />
                  {channel.name}
                </p>
                <p className="tabular mt-4 font-display text-3xl font-semibold leading-none text-ink">{channel.figure}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{channel.detail}</p>
                <a href={channel.href} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 self-start">
                  {channel.action}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
