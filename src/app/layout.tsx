import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const themeScript = `(function(){
  var started = Date.now();
  var reduce = false;
  try { localStorage.removeItem("theme"); } catch (e) {}
  try {
    reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {}
  document.documentElement.classList.add("dark");
  document.documentElement.style.colorScheme = "dark";

  var opened = false;
  function finish() {
    if (opened) return;
    opened = true;
    document.documentElement.classList.add("is-ready");
    var boot = document.getElementById("boot");
    if (!boot) return;
    if (reduce) {
      boot.remove();
      return;
    }
    boot.classList.add("boot-out");
    var remove = function () { if (boot.parentNode) boot.remove(); };
    boot.addEventListener("animationend", remove, { once: true });
    window.setTimeout(remove, 800);
  }
  function open() {
    if (reduce) {
      finish();
      return;
    }
    var wait = Math.max(0, 1500 - (Date.now() - started));
    window.setTimeout(finish, wait);
  }
  function arm() {
    if (document.readyState === "complete") open();
    else window.addEventListener("load", open);
    window.setTimeout(open, 2400);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arm);
  else arm();
})();`;

export const metadata: Metadata = {
  title: "Yosef Ashenafi — Senior Software Engineer",
  description:
    "Tech lead and full-stack engineer based in Addis Ababa. Backends, web apps, and mobile — for teams shipping real products.",
  keywords: [
    "Senior Software Engineer",
    "Tech Lead",
    "React",
    "Next.js",
    "Node.js",
    "Django",
    ".NET",
    "Addis Ababa",
  ],
  authors: [{ name: "Yosef Ashenafi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Yosef Ashenafi — Senior Software Engineer",
    description:
      "Tech lead and full-stack engineer based in Addis Ababa. Backends, web apps, and mobile — for teams shipping real products.",
    siteName: "Yosef Ashenafi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yosef Ashenafi — Senior Software Engineer",
    description:
      "Tech lead and full-stack engineer based in Addis Ababa. Backends, web apps, and mobile — for teams shipping real products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} dark`} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <div id="boot" role="status" aria-live="polite" aria-label="Loading">
          <div className="boot-glow" />
          <div className="boot-lockup">
            <span className="boot-mark">Y</span>
            <span className="boot-rule" />
            <span className="boot-name">Yosef Ashenafi</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
