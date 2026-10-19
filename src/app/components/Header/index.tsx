"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { profile } from "@/data";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const onHero = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || open
          ? "border-b border-line bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="shell">
        <div className="flex h-[4.5rem] items-center justify-between gap-4">
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3"
            aria-label="Yosef Ashenafi — home"
            onClick={() => setOpen(false)}
          >
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl font-display text-lg font-bold ${
                onHero
                  ? "bg-ink text-paper dark:bg-white dark:text-[#202624]"
                  : "bg-ink text-paper"
              }`}
            >
              Y
            </span>
            <span className="min-w-0 leading-tight">
              <span
                className={`block truncate font-display text-[15px] font-semibold tracking-tight ${
                  onHero ? "text-ink dark:text-white" : "text-ink"
                }`}
              >
                Yosef Ashenafi
              </span>
              <span
                className={`block text-[10px] font-semibold uppercase tracking-[0.16em] ${
                  onHero ? "text-ink-muted dark:text-white/65" : "text-ink-muted"
                }`}
              >
                {profile.role}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navItems.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    onHero
                      ? isActive
                        ? "text-ink dark:text-white"
                        : "text-ink-muted hover:text-ink dark:text-white/70 dark:hover:text-white"
                      : isActive
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              Let&apos;s talk
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
                onHero
                  ? "border-ink/15 text-ink dark:border-white/25 dark:text-white"
                  : "border-ink/15 text-ink"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? (
                <CloseIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 bg-paper lg:hidden ${
          open ? "border-t border-line" : "hidden"
        }`}
      >
        <nav className="shell flex h-full flex-col overflow-y-auto py-2" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center border-b border-line text-base font-medium text-ink last:border-0"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary my-4 sm:hidden"
          >
            Let&apos;s talk
          </a>
        </nav>
      </div>
    </header>
  );
}
