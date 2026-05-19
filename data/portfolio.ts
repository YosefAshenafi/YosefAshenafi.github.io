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
  image?: string;
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
  linkedin?: string;
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
      id: "automation",
      title: "Content Automation Pipeline",
      tag: "Automation · AI",
      kind: "web",
      year: "2025",
      role: "Creator",
      blurb: "End-to-end AI content automation: scripting with Claude and ChatGPT, voiceover generation via Google AI Studio and ElevenLabs, image generation with Gemini Nano, image-to-video with Meta AI, and caption editing with Caput.",
      stack: ["Claude", "ChatGPT", "ElevenLabs", "Gemini Nano", "Meta AI", "Caput"],
      link: "-",
    },
    {
      id: "bawshuman",
      title: "BawsHuman: Health Platform",
      tag: "Web",
      kind: "web",
      year: "2023",
      role: "Senior Engineer",
      blurb: "Health & fitness platform with practitioner dashboards, client tracking, session analytics, and plan management. Long tenure across multiple iterations of the product.",
      stack: ["React", "Node", "PostgreSQL"],
      link: "https://bawshuman.com/",
      image: "/portfolio/bawshuman-web.png",
    },
    {
      id: "bawshuman-mobile",
      title: "BawsHuman: Mobile App",
      tag: "Mobile",
      kind: "mobile",
      year: "2023",
      role: "Mobile lead",
      blurb: "Mobile companion for the BawsHuman fitness platform. Custom workouts, programmed plans, exercise explorer, and a full training library — built for athletes and their coaches.",
      stack: ["React Native", "Node.js"],
      link: "https://apps.apple.com/us/app/bawshuman/id6499568476",
      image: "/portfolio/bawshuman-mobile.png",
    },
    {
      id: "talentral",
      title: "ZippyApp: Hiring Platform",
      tag: "Web",
      kind: "web",
      year: "2021",
      role: "Senior Engineer",
      blurb: "The meeting place for hourly job seekers and employers. Fill out one application, apply to as many positions as you'd like — trusted by DQ, Dunkin', and major retail chains.",
      stack: ["React", "Node", "MongoDB"],
      link: "https://zippyapp.com/home",
      image: "/portfolio/zippyapp.png",
    },
    {
      id: "axion",
      title: "Ethio Axion",
      tag: "Web · FinTech",
      kind: "web",
      year: "2023",
      role: "Full-stack",
      blurb: "Ethiopia's first comprehensive stock trading platform. Invest in Ethiopian companies, track Ethio Stock Market movements, and participate in the country's growing economy.",
      stack: ["React", "Django", "PostgreSQL"],
      link: "ethioaxion.com",
      image: "/portfolio/axion.png",
    },
    {
      id: "expensesmart",
      title: "APSmart · ExpenseSmart",
      tag: "Web · Enterprise",
      kind: "web",
      year: "2024",
      role: "Senior Engineer",
      blurb: "Enterprise expense management module inside CloudX's APSmart suite. Category configuration, GL code mapping, per-employee-type allowance limits, and receipt enforcement.",
      stack: ["React", ".NET", "PostgreSQL"],
      link: "https://apsmartnextgen.com/",
      image: "/portfolio/expensesmart.png",
    },
    {
      id: "viptaxi",
      title: "VIP Taxi Dashboard",
      tag: "Web · Dashboard",
      kind: "web",
      year: "2021",
      role: "Full-stack",
      blurb: "Fleet management platform for VIP Taxi. Live vehicle tracking, driver and customer records, route statuses, and annual revenue reporting — all denominated in Birr.",
      stack: ["React", ".NET", "PostgreSQL"],
      link: "http://viptaxi.sicsoutsourcing.com/",
      image: "/portfolio/viptaxi.png",
    },
    {
      id: "kmp",
      title: "African Union KMP",
      tag: "Web · Gov",
      kind: "web",
      year: "2023",
      role: "Full-stack",
      blurb: "Knowledge Management Platform on Gender, Women Peace and Security for the African Union Political Affairs, Peace and Security Department. Resource library, news, and events.",
      stack: ["React", "Django", "PostgreSQL"],
      link: "https://aukmp.sicsoutsourcing.com/",
      image: "/portfolio/kmp.png",
    },
    {
      id: "ddu",
      title: "Dambi Dollo University ERP",
      tag: "Web · Gov",
      kind: "web",
      year: "2022",
      role: "Full-stack",
      blurb: "Enterprise Resource Planning system for Dambi Dollo University. Covers employee records, recruitment, payroll, leave management, attendance, and department administration.",
      stack: ["React", "Django", "PostgreSQL"],
      link: "-",
      image: "/portfolio/ddu.png",
    },
    {
      id: "misseso",
      title: "Misseso",
      tag: "Web · Real Estate",
      kind: "web",
      year: "2022",
      role: "Full-stack",
      blurb: "Real estate listing platform for apartment search and rental. For Sale, monthly and daily rentals, advanced search filters, multi-language support, and thousands of listings.",
      stack: ["React", "Django", "PostgreSQL"],
      link: "https://misesso.com/",
      image: "/portfolio/misseso.png",
    },
    {
      id: "marathon",
      title: "Marathon & Balezaf Breweries",
      tag: "Web · Dashboard",
      kind: "web",
      year: "2022",
      role: "Full-stack",
      blurb: "Outlet management dashboard for Marathon and Balezaf Breweries. Real-time outlet list, status tracking, agent assignment, approval workflows, and field reporting for back-office teams.",
      stack: ["React", ".NET", "PostgreSQL"],
      link: "https://marathon.sicsoutsourcing.com/Main/Login",
      image: "/portfolio/marathon.png",
    },
    {
      id: "awesomebible-web",
      title: "Awesome Bible",
      tag: "Web",
      kind: "web",
      year: "2023",
      role: "Full-stack",
      blurb: "Minimal, fast Bible reference web app for Awe and Reverence Inc. Verse lookup by reference, NASB scripture, shareable permalinks — distraction-free reading and study.",
      stack: ["React", "Node.js"],
      link: "https://awesome.bible/bible",
      image: "/portfolio/awesomebible-web.png",
    },
    {
      id: "awesomebible-mobile",
      title: "Awesome Bible Mobile",
      tag: "Mobile",
      kind: "mobile",
      year: "2023",
      role: "Mobile developer",
      blurb: "Mobile companion to awesome.bible. Full Bible reading by book and chapter, navigation drawer, settings panel, and a dark-first UI — shipped on iOS and Android.",
      stack: ["React Native", "SQLite"],
      link: "https://apps.apple.com/us/app/awesome-bible/id6499567807",
      image: "/portfolio/awesomebible-mobile.png",
    },
    {
      id: "songnote",
      title: "SongNote",
      tag: "Mobile",
      kind: "mobile",
      year: "2025",
      role: "Mobile developer",
      blurb: "Mobile app for recording, organizing, and searching song lyrics and notes. Folder organization, voice recording, Amharic and English support — built for worship musicians.",
      stack: ["React Native", "SQLite"],
      link: "-",
      image: "/portfolio/songnote.png",
    },
    {
      id: "bizzle",
      title: "Bizzle",
      tag: "Mobile · Game",
      kind: "mobile",
      year: "2024",
      role: "Mobile developer",
      blurb: "Puzzle quest game that unlocks sacred stories through levels and challenges. Personal records, progress tracking, and a rich story library — all in a polished dark UI.",
      stack: ["React Native", "Firebase"],
      link: "-",
      image: "/portfolio/bizzle.png",
    },
    {
      id: "contrarian",
      title: "Contrarian MBA",
      tag: "Web",
      kind: "web",
      year: "2022",
      role: "Full-stack",
      blurb: "Curated curriculum platform offering contrarian business education through books by practitioners — covering investing, startups, finance, and economic history.",
      stack: ["React", "Next.js", "Sanity"],
      link: "https://www.contrarian.mba/",
      image: "/portfolio/contrarian.png",
    },
    {
      id: "easygoats",
      title: "EasyGoats",
      tag: "Web",
      kind: "web",
      year: "2022",
      role: "Full-stack",
      blurb: "Agricultural platform connecting goat farmers with markets. Environment, economy, news, rent and shipping sections — bridging livestock producers with buyers and information.",
      stack: ["React", "Django", "PostgreSQL"],
      link: "-",
      image: "/portfolio/easygoats.png",
    },
    {
      id: "hacktoolkit",
      title: "HackToolkit",
      tag: "Web · OSS",
      kind: "web",
      year: "2021",
      role: "Full-stack",
      blurb: "Open-source bootstrap toolkit and community for hackathon participants. Reusable APIs, code templates, and a project gallery — helping builders ship complete apps in 24 hours.",
      stack: ["React", "Node.js", "MongoDB"],
      link: "https://www.hacktoolkit.com/",
      image: "/portfolio/hacktoolkit.png",
    },
  ],

  experience: [
    {
      period: "Apr 2026 - Present",
      title: "AI Systems Training Engineer",
      company: "Eaglepoint AI",
      location: "Hybrid · Full-time",
      blurb: "Designing and refining training data and workflows to improve LLM performance on coding and software development tasks. Generating, evaluating, and debugging AI-produced outputs; building structured datasets including step-by-step reasoning, tool-use trajectories, and real-world development scenarios using Claude and Cursor.",
      current: true,
    },
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

  telegram: "t.me/jossybuilds",

  testimonials: [
    {
      quote:
        "Yosef brings both technical excellence and a collaborative spirit to every project. His ability to architect elegant solutions while keeping the code maintainable made him an invaluable team member. I was particularly impressed by his dedication to mentoring others and sharing knowledge across the team.",
      name: "Dagnachew Tsegaye",
      role: "Senior Software Engineer · Microsoft",
      linkedin: "https://www.linkedin.com/in/dagnachew-tsegaye-32a2ab25/",
    },
    {
      quote:
        "We've joined hands on a couple of projects for a little more than two years, and Yosef is one of the best people I've had as a team member. I highly recommend his expertise to any person looking for a software engineer.",
      name: "Zekarias Negash Demma",
      role: "Senior Software Engineer · Microsoft",
      linkedin: "https://www.linkedin.com/in/zekariasnegash/",
    },
  ],
};

export default portfolio;
