import {
  Project,
  ResumeItem,
  Service,
  StackGroup,
  Stat,
  Testimonial,
} from "@/types";

export const profile = {
  name: "Yosef Ashenafi",
  role: "Senior Software Engineer",
  location: "Addis Ababa, Ethiopia",
  address: "Mickyland Street, Addis Ababa, Ethiopia",
  timezone: "UTC+3",
  email: "yosefashenafi7@gmail.com",
  emailAlt: "jossyfreelancer@gmail.com",
  phone: "+251 910 810 689",
  cvUrl:
    "https://drive.google.com/file/d/1UpRsHoqWxRzBLKLNMrMpDgweGHTMpKGk/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/yosef-ashenafi-1a378684",
  linkedinConnections: 2548,
  github: "https://github.com/YosefAshenafi",
  githubJoined: "2014-05-19",
  telegram: "https://t.me/jossybuilds",
  portrait: "/portfolio/portrait-figure.png",
  portraitLight: "/portfolio/portrait-light.png",
  languages: "English, Amharic",
  intro:
    "Tech lead and full-stack engineer based in Addis Ababa. Backends, web apps, and mobile — for teams shipping real products.",
  about:
    "Four overlapping practices: backends and APIs, full-stack web, mobile, and technical leadership. I usually own one or two on a given engagement, with hands on the rest. Currently taking on contract work, full-time remote roles, and short-term advisory. Mornings in Addis (UTC+3), happy to overlap with US or EU teams.",
};

export const clients = [
  "Eaglepoint AI",
  "BawsHuman",
  "ZippyApp",
  "Qelem",
  "CloudX",
  "SiCS",
];

export const stats: Stat[] = [
  { value: "10+", label: "Years building" },
  { value: "20+", label: "Products shipped" },
  { value: "14+", label: "Web products" },
  { value: "5+", label: "Mobile apps" },
];

export const services: Service[] = [
  {
    icon: "api",
    title: "Backend & APIs",
    description:
      "Designing REST and GraphQL services in C#/.NET, Django, and Node, with attention to schema, auth, and the boring parts that decide whether a system survives growth.",
    points: ["C# / .NET", "Django", "Node", "PostgreSQL", "Redis"],
  },
  {
    icon: "code",
    title: "Full-Stack Web",
    description:
      "End-to-end web apps with React, Next.js, and Tailwind. Marketing sites, dashboards, and internal tools, built to load fast and stay maintainable.",
    points: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: "mobile",
    title: "Mobile",
    description:
      "Cross-platform delivery with React Native and Flutter, plus native bridges when the product demands it. Shipped to the App Store and Google Play.",
    points: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: "layers",
    title: "Architecture & Tech Lead",
    description:
      "I lead small teams through scoping, technical design, and delivery, translating product asks into systems engineers can actually build and operate.",
    points: ["System design", "Code review", "Mentorship"],
  },
];

export const projects: Project[] = [
  {
    id: 19,
    title: "Yaz",
    category: "Mobile",
    description:
      "A calm, private place to save the links you want to come back to. Share from any app, organize with groups and tags, and keep the library on your device. Optional Telegram sync is encrypted before it leaves the phone. The name Yaz is Amharic for “hold it.”",
    image: "/portfolio/yaz.png",
    link: "https://play.google.com/store/apps/details?id=com.yaz.app&hl=en_CA",
    tech: ["Android"],
    result: "2026 · Google Play",
    featured: true,
  },
  {
    id: 2,
    title: "BawsHuman: Health Platform",
    category: "Web",
    description:
      "Health and fitness platform with practitioner dashboards, client tracking, session analytics, and plan management. Long tenure across multiple iterations of the product.",
    image: "/portfolio/bawshuman-web.png",
    link: "https://bawshuman.com/",
    tech: ["React", "Node", "PostgreSQL"],
    result: "2023 · Senior Engineer",
  },
  {
    id: 3,
    title: "BawsHuman",
    category: "Android",
    description:
      "Mobile companion for the BawsHuman fitness platform. Custom workouts, programmed plans, exercise explorer, and a full training library — built for athletes and their coaches.",
    image: "/portfolio/bawshuman-mobile.png",
    link: "https://play.google.com/store/search?q=bawshuman&c=apps&hl=en_CA",
    tech: ["React Native", "Node.js"],
    result: "2023 · Google Play",
  },
  {
    id: 20,
    title: "BawsHuman",
    category: "iOS",
    description:
      "Track workouts, meals, sleep, and progress. Built for athletes, trainers, and coaches.",
    image: "/portfolio/bawshuman-ios.png",
    link: "https://apps.apple.com/us/app/bawshuman/id6499568476",
    tech: ["iOS"],
    result: "2023 · App Store",
  },
  {
    id: 4,
    title: "ZippyApp: Hiring Platform",
    category: "Web",
    description:
      "The meeting place for hourly job seekers and employers. Fill out one application, apply to as many positions as you'd like — trusted by DQ, Dunkin', and major retail chains.",
    image: "/portfolio/zippyapp.png",
    link: "https://zippyapp.com/home",
    tech: ["React", "Node", "MongoDB"],
    result: "2021 · Senior Engineer",
  },
  {
    id: 5,
    title: "Ethio Axion",
    category: "Web · FinTech",
    description:
      "Ethiopia's first comprehensive stock trading platform. Invest in Ethiopian companies, track Ethio Stock Market movements, and participate in the country's growing economy.",
    image: "/portfolio/axion.png",
    link: "https://ethioaxion.com",
    tech: ["React", "Django", "PostgreSQL"],
    result: "2023 · Full-stack",
  },
  {
    id: 6,
    title: "APSmart · ExpenseSmart",
    category: "Web · Enterprise",
    description:
      "Enterprise expense management module inside CloudX's APSmart suite. Category configuration, GL code mapping, per-employee-type allowance limits, and receipt enforcement.",
    image: "/portfolio/expensesmart.png",
    link: "https://apsmartnextgen.com/",
    tech: ["React", ".NET", "PostgreSQL"],
    result: "2024 · Senior Engineer",
  },
  {
    id: 7,
    title: "VIP Taxi Dashboard",
    category: "Web · Dashboard",
    description:
      "Fleet management platform for VIP Taxi. Live vehicle tracking, driver and customer records, route statuses, and annual revenue reporting — all denominated in Birr.",
    image: "/portfolio/viptaxi.png",
    link: "http://viptaxi.sicsoutsourcing.com/",
    tech: ["React", ".NET", "PostgreSQL"],
    result: "2021 · Full-stack",
  },
  {
    id: 8,
    title: "African Union KMP",
    category: "Web · Gov",
    description:
      "Knowledge Management Platform on Gender, Women Peace and Security for the African Union Political Affairs, Peace and Security Department. Resource library, news, and events.",
    image: "/portfolio/kmp.png",
    link: "https://aukmp.sicsoutsourcing.com/",
    tech: ["React", "Django", "PostgreSQL"],
    result: "2023 · Full-stack",
  },
  {
    id: 10,
    title: "Misseso",
    category: "Web · Real Estate",
    description:
      "Real estate listing platform for apartment search and rental. For Sale, monthly and daily rentals, advanced search filters, multi-language support, and thousands of listings.",
    image: "/portfolio/misseso.png",
    link: "https://misesso.com/",
    tech: ["React", "Django", "PostgreSQL"],
    result: "2022 · Full-stack",
  },
  {
    id: 11,
    title: "Marathon & Balezaf Breweries",
    category: "Web · Dashboard",
    description:
      "Outlet management dashboard for Marathon and Balezaf Breweries. Real-time outlet list, status tracking, agent assignment, approval workflows, and field reporting for back-office teams.",
    image: "/portfolio/marathon.png",
    link: "https://marathon.sicsoutsourcing.com/Main/Login",
    tech: ["React", ".NET", "PostgreSQL"],
    result: "2022 · Full-stack",
  },
  {
    id: 12,
    title: "Awesome Bible",
    category: "Web",
    description:
      "Minimal, fast Bible reference web app for Awe and Reverence Inc. Verse lookup by reference, NASB scripture, shareable permalinks — distraction-free reading and study.",
    image: "/portfolio/awesomebible-web.png",
    link: "https://awesome.bible/bible",
    tech: ["React", "Node.js"],
    result: "2023 · Full-stack",
  },
  {
    id: 14,
    title: "Pairgap",
    category: "Android",
    description:
      "Co-buying and investing app. Calculate your buying power and monthly payment, solo or with co-buyers.",
    image: "/portfolio/pairgap.png",
    link: "https://play.google.com/store/search?q=pairgap&c=apps&hl=en_CA",
    tech: ["Android"],
    result: "2026 · Google Play",
  },
  {
    id: 15,
    title: "Pairgap",
    category: "iOS",
    description:
      "Co-buying and property investing app. See your buying power, check your Readiness Score, and build a profile for potential matches.",
    image: "/portfolio/pairgap-ios.png",
    link: "https://apps.apple.com/us/app/pairgap/id6755288619",
    tech: ["iOS"],
    result: "2026 · App Store",
  },
  {
    id: 16,
    title: "Contrarian MBA",
    category: "Web",
    description:
      "Curated curriculum platform offering contrarian business education through books by practitioners — covering investing, startups, finance, and economic history.",
    image: "/portfolio/contrarian.png",
    link: "https://www.contrarian.mba/",
    tech: ["React", "Next.js", "Sanity"],
    result: "2022 · Full-stack",
  },
  {
    id: 18,
    title: "HackToolkit",
    category: "Web · OSS",
    description:
      "Open-source bootstrap toolkit and community for hackathon participants. Reusable APIs, code templates, and a project gallery — helping builders ship complete apps in 24 hours.",
    image: "/portfolio/hacktoolkit.png",
    link: "https://www.hacktoolkit.com/",
    tech: ["React", "Node.js", "MongoDB"],
    result: "2021 · Full-stack",
  },
];

export const experiences: ResumeItem[] = [
  {
    period: "May 2026 — Present",
    title: "Offshore Developer",
    org: "CloudX Inc.",
    location: "United States",
    description:
      "Accounts payable SaaS for clients including Versace, ADTRAN, and Nestlé. Transaction documents, automated data entry, and reporting, in C#, Node.js, and Entity Framework.",
  },
  {
    period: "Apr 2026 — Jun 2026",
    title: "AI Systems Training Engineer",
    org: "Eaglepoint AI",
    description:
      "Three months of code datasets for AI training: step-by-step reasoning, tool use, and real development scenarios, using Claude and Cursor.",
  },
  {
    period: "Jan 2026 — Apr 2026",
    title: "Full Stack Engineer",
    org: "Whales Technology",
    location: "United Arab Emirates",
    description:
      "Four months on Pairgap. Web features, the first production Android and iOS apps through publishing, and a beta waitlist for early users.",
  },
  {
    period: "Dec 2023 — Jan 2026",
    title: "Senior Software Engineer",
    org: "BawsHuman",
    location: "United States",
    description:
      "Web and mobile for athletes, trainers, and clients. Profiles, the exercise library, and trainer–client workout tracking.",
  },
  {
    period: "Feb 2023 — Nov 2023",
    title: "Senior Software Engineer",
    org: "GoodPeople",
    description:
      "Web app in React and Python. Shared design system, APIs, and interfaces built to WCAG 2 with the design team.",
  },
  {
    period: "Nov 2020 — Jan 2023",
    title: "Senior Software Engineer",
    org: "Talentral / ZippyApp",
    location: "United States",
    description:
      "Features and fixes on the hiring platform, including a mobile-responsive admin tool.",
  },
  {
    period: "Aug 2016 — Oct 2020",
    title: "Tech Lead & Senior Software Developer",
    org: "SICS IT Outsourcing",
    location: "Addis Ababa",
    description:
      "Four years with a team of 5–10 across mobile, web, and backend. Enterprise systems, including the African Union knowledge platform, plus ERP work on Odoo and ERPNext.",
  },
  {
    period: "Sep 2013 — Jul 2016",
    title: "Software Engineer",
    org: "Cybersoft Plc",
    location: "Addis Ababa",
    description:
      "From junior engineer to solution line manager for the Transport and Fleet Management System, through delivery and client training.",
  },
];

export const education: ResumeItem[] = [
  {
    period: "2019 — 2021",
    title: "M.A., Intercultural & Multicultural Studies",
    org: "Ethiopian Full Gospel Theological Seminary",
    description: "",
  },
  {
    period: "2014 — 2017",
    title: "M.Sc., Computer & Information Sciences",
    org: "Addis Ababa University",
    description: "",
    mark: "/education/aau.png",
  },
  {
    period: "2010 — 2013",
    title: "B.Sc., Computer Science",
    org: "Addis Ababa University",
    description: "",
    mark: "/education/aau.png",
  },
  {
    period: "Jul 2024",
    title: "AI Career Essentials",
    org: "ALX Africa",
    description: "",
    mark: "/education/alx.svg",
  },
  {
    period: "Sep 2021",
    title: "Silver Award, National Coding Week",
    org: "Codility",
    description: "",
    mark: "/education/codility.svg",
  },
];

export const stack: StackGroup[] = [
  {
    name: "Languages",
    items: ["C#", "JavaScript", "TypeScript", "Python", "Dart", "SQL"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "React Native", "Tailwind CSS", "Flutter"],
  },
  {
    name: "Backend",
    items: [".NET", "Django", "Node.js", "Express", "GraphQL"],
  },
  {
    name: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    name: "Infra & tools",
    items: ["Docker", "AWS", "GitHub Actions", "Vercel", "Chapa"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dagnachew Tsegaye",
    position: "Senior Software Engineer",
    company: "Microsoft",
    url: "https://www.linkedin.com/in/dagnachew-tsegaye-32a2ab25/",
    quote:
      "Yosef brings both technical excellence and a collaborative spirit to every project. His ability to architect elegant solutions while keeping the code maintainable made him an invaluable team member. I was particularly impressed by his dedication to mentoring others and sharing knowledge across the team.",
  },
  {
    id: 2,
    name: "Zekarias Negash Demma",
    position: "Senior Software Engineer",
    company: "Microsoft",
    url: "https://www.linkedin.com/in/zekariasnegash/",
    quote:
      "We've joined hands on a couple of projects for a little more than two years, and Yosef is one of the best people I've had as a team member. I highly recommend his expertise to any person looking for a software engineer.",
  },
];
