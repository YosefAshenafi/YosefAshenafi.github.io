import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";
import { profile } from "@/data";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
];

const resources = [
  { label: "Experience", href: "#resume" },
  { label: "Kind words", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
  { label: "Download CV", href: profile.cvUrl, external: true },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-on-band/10 bg-band text-on-band">
      <div className="shell py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-on-band font-display text-lg font-bold text-band">
                Y
              </span>
              <span>
                <span className="block font-display text-base font-semibold">
                  Yosef Ashenafi
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-on-band/70">
                  {profile.role}
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-on-band/80">
              {profile.intro}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-on-band/25 text-on-band transition-colors hover:bg-on-band hover:text-band"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-on-band/25 text-on-band transition-colors hover:bg-on-band hover:text-band"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-11 w-11 place-items-center rounded-full border border-on-band/25 text-on-band transition-colors hover:bg-on-band hover:text-band"
              >
                <MailIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-[10px] font-semibold uppercase tracking-label text-on-band/70">
              Navigation
            </h2>
            <ul className="mt-4 space-y-1">
              {navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-sm text-on-band/85 transition-colors hover:text-on-band"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h2 className="text-[10px] font-semibold uppercase tracking-label text-on-band/70">
              Resources
            </h2>
            <ul className="mt-4 space-y-1">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex min-h-11 items-center text-sm text-on-band/85 transition-colors hover:text-on-band"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-label text-on-band/70">
              Studio
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-on-band/85">
              <li>{profile.location}</li>
              <li>
                <a className="hover:text-on-band" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a className="hover:text-on-band" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-on-band/10 pt-6 text-xs text-on-band/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>Designed and built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
