export interface FocusArea {
  n: string;
  title: string;
  blurb: string;
  stack: string[];
}

export interface Work {
  id: string;
  title: string;
  tag: string;
  kind: "web" | "mobile";
  year: string;
  role: string;
  blurb: string;
  stack: string[];
  link: string;
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  location: string;
  blurb: string;
  current?: boolean;
}

export interface Education {
  period: string;
  title: string;
  school: string;
}

export interface Post {
  date: string;
  tag: string;
  title: string;
  blurb: string;
  readTime: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Portfolio {
  name: string;
  shortName: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  emailAlt: string;
  phone: string;
  address: string;
  available: boolean;
  tagline: string;
  clients: string[];
  focus: FocusArea[];
  works: Work[];
  experience: Experience[];
  education: Education[];
  skills: Record<string, string[]>;
  posts: Post[];
  testimonials: Testimonial[];
  telegram: string;
}

const portfolio: Portfolio = {
  name: "Yosef Ashenafi",
  shortName: "Yosef",
  initials: "YA",
  role: "Senior Software Engineer",
  location: "Addis Ababa, Ethiopia",
  email: "yosefashenafi7@gmail.com",
  emailAlt: "jossyfreelancer@gmail.com",
  phone: "+251 910 810 689",
  address: "Mickyland Street, Addis Ababa, Ethiopia",
  available: true,
  tagline:
    "I design and build production systems across backends, web apps, and mobile for teams shipping real products to real users.",

  clients: ["Eaglepoint AI", "BawsHuman", "ZippyApp", "Qelem", "CloudX", "SiCS"],

  focus: [
    {
      n: "01",
      title: "Backend & APIs",
      blurb:
        "Designing REST and GraphQL services in C#/.NET, Django, and Node, with attention to schema, auth, and the boring parts that decide whether a system survives growth.",
      stack: ["C# / .NET", "Django", "Node", "PostgreSQL", "Redis"],
    },
    {
      n: "02",
      title: "Full-Stack Web",
      blurb:
        "End-to-end web apps with React, Next.js, and Tailwind. Marketing sites, dashboards, internal tools, built to load fast and stay maintainable.",
      stack: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      n: "03",
      title: "Mobile (iOS / Android)",
      blurb:
        "Cross-platform delivery with React Native and Flutter, plus native bridges when the product demands it. Shipped to App Store and Google Play.",
      stack: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      n: "04",
      title: "Architecture & Tech Lead",
      blurb:
        "I lead small teams through scoping, technical design, and delivery, translating product asks into systems engineers can actually build and operate.",
      stack: ["System design", "Code review", "Mentorship"],
    },
  ],

  works: [
    {
      id: "pairgap-web",
      title: "Pairgap: Marketing Site",
      tag: "Web",
      kind: "web",
      year: "2026",
      role: "Full-stack",
      blurb:
        "Public marketing site for Pairgap.com, co-buying and joint ownership for first-time buyers. Waitlist, co-buyer calculator, prenup builder, blog, events.",
      stack: ["Next.js", "TypeScript", "Tailwind", "Sanity"],
      link: "pairgap.com",
    },
    {
      id: "pairgap-ios",
      title: "Pairgap: iOS App",
      tag: "iOS",
      kind: "mobile",
      year: "2026",
      role: "Mobile lead",
      blurb:
        "Welcome + waitlist status, progress toward access, and a clear path into buying power and co-buying.",
      stack: ["Swift", "SwiftUI"],
      link: "App Store",
    },
    {
      id: "pairgap-android",
      title: "Pairgap: Android App",
      tag: "Android",
      kind: "mobile",
      year: "2026",
      role: "Mobile lead",
      blurb:
        "Home experience with buying power and real-estate personality entry points, distinct from the iOS waitlist screen.",
      stack: ["Kotlin", "Jetpack Compose"],
      link: "Google Play",
    },
    {
      id: "qelem",
      title: "Qelem: K-12 EdTech",
      tag: "Web · UI/UX",
      kind: "web",
      year: "2024",
      role: "Designer + Engineer",
      blurb:
        "End-to-end educational web app for Ethiopia: KG-12 curriculum textbooks, practice MCQs, flashcards, homework, progress reports, English/Amharic UI.",
      stack: ["React", "Django", "PostgreSQL", "Chapa"],
      link: "qelem.com",
    },
    {
      id: "bawshuman",
      title: "BawsHuman: Health Platform",
      tag: "Web",
      kind: "web",
      year: "2023",
      role: "Senior Engineer",
      blurb:
        "Health & fitness platform, practitioner dashboards, client tracking, plan management. Long tenure across multiple iterations of the product.",
      stack: ["React", "Node", "PostgreSQL"],
      link: "-",
    },
    {
      id: "talentral",
      title: "ZippyApp: Hiring Platform",
      tag: "Web · Mobile",
      kind: "web",
      year: "2021",
      role: "Senior Engineer",
      blurb:
        "Hourly-workforce hiring platform with employer dashboards and applicant flows.",
      stack: ["React", "Node", "MongoDB"],
      link: "zippyapp.com",
    },
  ],

  experience: [
    {
      period: "Feb 2017 - Present",
      title: "Tech Lead & Senior Software Developer",
      company: "SiCS IT Outsourcing",
      location: "Addis Ababa · Hybrid",
      blurb: "Leading delivery on outsourced engagements; architecture, code review, mentorship.",
      current: true,
    },
    {
      period: "Jan 2026 - Mar 2026",
      title: "Full Stack Engineer",
      company: "Whales Technology · Pairgap",
      location: "UAE · Remote",
      blurb: "Building marketing site and mobile apps for the Pairgap wealth-tech product.",
    },
    {
      period: "Jan 2021 - Jan 2026",
      title: "Senior Software Engineer",
      company: "BawsHuman",
      location: "United States · Remote",
      blurb: "Health & fitness platform, long-tenure senior IC across web and APIs.",
    },
    {
      period: "Apr 2019 - Dec 2021",
      title: "Senior Software Engineer",
      company: "Talentral / ZippyApp",
      location: "United States · Remote",
      blurb: "Hiring platform for hourly workforce, full-stack across React and Node.",
    },
    {
      period: "Aug 2016 - Sep 2017",
      title: "Offshore Developer",
      company: "CloudX Inc.",
      location: "United States · Remote",
      blurb: "Early offshore engagement, full-stack delivery for U.S. clients.",
    },
  ],

  education: [
    { period: "2019 - 2021", title: "M.A., Intercultural & Multicultural Studies", school: "Ethiopian Full Gospel Theological Seminary" },
    { period: "2014 - 2017", title: "M.Sc., Computer & Information Sciences", school: "Addis Ababa University" },
    { period: "2010 - 2013", title: "B.Sc., Computer Science", school: "Addis Ababa University" },
    { period: "Jul 2024", title: "AI Career Essentials", school: "ALX Africa" },
    { period: "Sep 2021", title: "Silver Award, National Coding Week", school: "Codility" },
  ],

  skills: {
    Languages: ["C#", "JavaScript", "TypeScript", "Python", "Dart", "SQL"],
    Frontend: ["React", "Next.js", "React Native", "Tailwind CSS", "Flutter"],
    Backend: [".NET", "Django", "Node.js", "Express", "GraphQL"],
    Data: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
    "Infra & Tools": ["Docker", "AWS", "GitHub Actions", "Vercel", "Chapa"],
  },

  posts: [
    {
      date: "Apr 18, 2025",
      tag: "Journey",
      title: "Why I Started Building in Public",
      blurb: "After years of shipping products for other people, I decided to document my own process: the decisions, the dead ends, and the small wins. This is why.",
      readTime: "5 min",
    },
    {
      date: "Feb 3, 2025",
      tag: "Mobile",
      title: "From Figma to App Store in 6 Weeks: Lessons from Pairgap iOS",
      blurb: "What it actually takes to go from a design handoff to a live native app: SwiftUI quirks, App Store review, and the things no tutorial covers.",
      readTime: "8 min",
    },
    {
      date: "Nov 14, 2024",
      tag: "Backend",
      title: "The Boring Decisions That Decide Whether Your API Survives",
      blurb: "Schema design, pagination contracts, auth boundaries, the choices that feel dull in week one and become load-bearing in year two.",
      readTime: "7 min",
    },
  ],

  telegram: "t.me/jossybuildschat",

  testimonials: [
    {
      quote:
        "Yosef brings both technical excellence and a collaborative spirit to every project. His ability to architect elegant solutions while keeping the code maintainable made him an invaluable team member. I was particularly impressed by his dedication to mentoring others and sharing knowledge across the team.",
      name: "Dagnachew Tsegaye",
      role: "Senior Software Engineer · Microsoft",
    },
    {
      quote:
        "We've joined hands on a couple of projects for a little more than two years, and Yosef is one of the best people I've had as a team member. I highly recommend his expertise to any person looking for a software engineer.",
      name: "Zekarias Negash Demma",
      role: "Senior Software Engineer · Microsoft",
    },
  ],
};

export default portfolio;
