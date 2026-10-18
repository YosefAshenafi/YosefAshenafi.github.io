"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import {
  ArrowRight,
  ChevronDownIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";
import { profile } from "@/data";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

const empty: FormData = {
  name: "",
  email: "",
  projectType: "Web application",
  message: "",
};

const projectTypes = [
  "Web application",
  "Marketing site",
  "Mobile app",
  "Performance audit",
  "Not sure yet",
];

const contactInfo = [
  {
    icon: MailIcon,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MailIcon,
    label: "Email (alt)",
    value: profile.emailAlt,
    href: `mailto:${profile.emailAlt}`,
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPinIcon,
    label: "Based",
    value: `${profile.address} · ${profile.timezone}`,
    href: "https://maps.google.com/?q=Mickyland%20Street%2C%20Addis%20Ababa%2C%20Ethiopia",
  },
];

type Errors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): Errors {
  const errors: Errors = {};
  if (data.name.trim().length < 2) errors.name = "Please add your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (data.message.trim().length < 12) {
    errors.message = "Share a sentence or two about the project.";
  }
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const openedAt = useRef(0);

  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  const update = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const honey = String(new FormData(form).get("_honey") ?? "");
    if (honey.trim()) {
      setSent(true);
      return;
    }

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    const firstInvalid = Object.keys(nextErrors)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    if (Date.now() - openedAt.current < 1500) {
      toast.error("Please wait a moment, then send again.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          "Project type": formData.projectType,
          message: formData.message.trim(),
          _subject: `Project inquiry: ${formData.projectType}`,
          _template: "table",
          _replyto: formData.email.trim(),
          _captcha: "false",
          _honey: "",
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: string | boolean } | null;
      const delivered = response.ok && (result?.success === true || result?.success === "true");
      if (!delivered) {
        toast.error(`Couldn't send just now. Email ${profile.email} directly.`);
        setSubmitting(false);
        return;
      }
      setFormData(empty);
      setSent(true);
    } catch {
      toast.error(`Couldn't send just now. Email ${profile.email} directly.`);
      setSubmitting(false);
    }
  };

  const sendAnother = () => {
    setSent(false);
    setSubmitting(false);
  };

  const control =
    "min-h-12 w-full rounded-xl border bg-paper px-4 text-base text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand focus:ring-2 focus:ring-brand/20";

  return (
    <section id="contact" className="bg-band text-on-band">
      <div className="shell py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="eyebrow text-brand-glow before:bg-brand-glow/70">
              Let&apos;s create something
            </p>
            <h2 className="mt-4 max-w-md font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl">
              Have something to ship? Let&apos;s talk.
            </h2>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-on-band/80">
              Currently taking on new engagements: contract, full-time remote,
              or short-term advisory. Mornings in Addis (UTC+3), happy to
              overlap with US or EU teams.
            </p>

            <ul className="mt-10 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-on-band/10 text-brand-glow">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-label text-on-band/65">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block break-words text-sm font-medium text-on-band">
                        {item.value}
                      </span>
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="flex min-h-11 items-center gap-4 rounded-2xl transition-colors hover:text-brand-glow"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex items-center gap-3">
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
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-cream p-5 text-ink shadow-lift sm:p-8">
            {sent ? (
              <div className="flex min-h-[22rem] flex-col items-start justify-center" role="status">
                <p className="text-xs font-semibold uppercase tracking-label text-brand">
                  Message sent
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold text-ink">
                  Thanks — I&apos;ll be in touch.
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
                  Your note is in. If it&apos;s urgent, email {profile.email} directly.
                </p>
                <button type="button" className="btn-outline mt-8" onClick={sendAnother}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="relative">
                <div className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true" inert>
                  <input name="_honey" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-ink-soft">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      onChange={(event) => update("name", event.target.value)}
                      className={`mt-2 ${control} ${errors.name ? "border-danger" : "border-line"}`}
                    />
                    {errors.name ? (
                      <p id="name-error" className="mt-1.5 text-sm text-danger">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-ink-soft">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      onChange={(event) => update("email", event.target.value)}
                      className={`mt-2 ${control} ${errors.email ? "border-danger" : "border-line"}`}
                    />
                    {errors.email ? (
                      <p id="email-error" className="mt-1.5 text-sm text-danger">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="projectType" className="text-sm font-medium text-ink-soft">
                      Project type
                    </label>
                    <div className="relative mt-2">
                      <select
                        id="projectType"
                        name="Project type"
                        value={formData.projectType}
                        onChange={(event) => update("projectType", event.target.value)}
                        className={`${control} appearance-none pr-10 ${errors.projectType ? "border-danger" : "border-line"}`}
                      >
                        {projectTypes.map((type) => (
                          <option key={type}>{type}</option>
                        ))}
                      </select>
                      <ChevronDownIcon
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink-soft">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What are you hoping to build?"
                      value={formData.message}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : "message-help"}
                      onChange={(event) => update("message", event.target.value)}
                      className={`mt-2 ${control} resize-y py-3 ${errors.message ? "border-danger" : "border-line"}`}
                    />
                    {errors.message ? (
                      <p id="message-error" className="mt-1.5 text-sm text-danger">
                        {errors.message}
                      </p>
                    ) : (
                      <p id="message-help" className="mt-1.5 text-sm text-ink-muted">
                        A sentence or two is plenty to start.
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-6 w-full sm:w-auto"
                  disabled={submitting}
                >
                  {submitting ? "Sending…" : "Send message"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
