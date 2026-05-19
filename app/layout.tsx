import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yosef Ashenafi — Senior Software Engineer",
  description:
    "Tech lead and full-stack engineer based in Addis Ababa. Backends, web apps, and mobile — for teams shipping real products.",
  openGraph: {
    title: "Yosef Ashenafi — Senior Software Engineer",
    description:
      "Tech lead and full-stack engineer based in Addis Ababa. Backends, web apps, and mobile — for teams shipping real products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
