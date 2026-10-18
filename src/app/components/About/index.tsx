import Image from "next/image";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import { profile } from "@/data";
import SectionHeading from "../SectionHeading";

const info = [
  { icon: MapPinIcon, label: "Location", value: profile.location },
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  { icon: GlobeIcon, label: "Languages", value: profile.languages },
];

export default function About() {
  return (
    <section id="about" className="section bg-cream">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#d6ecde] shadow-soft dark:bg-[#2a302c]">
              <Image
                src={profile.portraitLight}
                alt="Portrait of Yosef Ashenafi"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-contain object-bottom dark:hidden"
              />
              <Image
                src={profile.portrait}
                alt=""
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="hidden object-contain object-bottom dark:block"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-line bg-paper/95 p-4 shadow-soft backdrop-blur sm:right-auto sm:max-w-[16rem] sm:p-5">
              <p className="tabular font-display text-4xl font-semibold text-ink">20+</p>
              <p className="mt-1 text-sm leading-snug text-ink-muted">
                Products shipped across web, mobile, and dashboards.
              </p>
            </div>
          </div>

          <div className="reveal">
            <SectionHeading eyebrow="About me" title="Building solutions that make an impact">
              {profile.about}
            </SectionHeading>

            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {info.map((item) => {
                const Icon = item.icon;
                const value = item.href ? (
                  <a href={item.href} className="font-medium text-ink underline-offset-4 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <span className="font-medium text-ink">{item.value}</span>
                );

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-paper p-4"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-tint text-brand">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-label text-ink-faint">
                        {item.label}
                      </dt>
                      <dd className="mt-1 break-words text-sm">{value}</dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
