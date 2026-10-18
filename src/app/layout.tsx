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

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

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
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
