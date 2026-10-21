// Everything the site says about Numan lives here. Edit this file to update the
// portfolio; the components only lay it out.

export const site = {
  name: "Numan Razzaq",
  role: "Software Engineer",
  tagline: "Full-stack engineer who sweats the frontend.",
  // Used for canonical URLs, Open Graph and the sitemap. Override at build time with
  // NEXT_PUBLIC_SITE_URL when the domain changes.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://numan-razzaq.duckdns.org",
  description:
    "Numan Razzaq is a software engineer in Lahore building production banking portals, " +
    "SDKs and AI-powered products with React, TypeScript, Next.js, NestJS and GraphQL.",
  location: "Lahore, Pakistan",
  timeZone: "Asia/Karachi",
  email: "numaan.razaq@gmail.com",
  // Drop the latest resume PDF at public/Numan_Razzaq_Resume.pdf before building.
  resume: "/Numan_Razzaq_Resume.pdf",
  availability: "Open to frontend & full-stack roles",
  socials: {
    github: "https://github.com/NumanBytes",
    linkedin: "https://linkedin.com/in/numan-razzaq",
  },
} as const;

export const stats = [
  { value: "2+", label: "years shipping production software" },
  { value: "3", label: "live banking portals delivered" },
  { value: "65%", label: "max bundle size cut after React 18 upgrade" },
  { value: "5", label: "React apps upgraded & lazy-loaded" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer at CloudCard Inc., where I build the web portals and embeddable SDKs that banks and their business partners use to move money: payment batches, transfers, fees, card controls and account management.",
    "I started on the frontend and still care most about what users touch — fast loads, clear states, accessible components. But I own features end to end now: writing GraphQL queries and mutations in our Ruby service, wiring them through Apollo Client, and shipping the screens in React or Angular.",
    "Outside work I build my own products. Shortlist, an AI job-application platform, runs in production on AWS; Manzil, a developer growth platform, is in progress. Both are where I practise the backend, infrastructure and AI work I want to do more of.",
  ],
  principles: [
    {
      title: "Ship, then sharpen",
      body: "Small, reviewable changes that reach production early, then iterate with real usage.",
    },
    {
      title: "Performance is a feature",
      body: "Lazy loading, lean bundles and measured upgrades — not micro-optimisation for its own sake.",
    },
    {
      title: "AI-accelerated, human-reviewed",
      body: "I use Claude Code and Cursor daily to move faster, and I read every line before it ships.",
    },
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: { area: string; text: string }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "CloudCard Inc.",
    role: "Software Engineer",
    period: "May 2024 — Present",
    location: "Lahore · Full-time",
    summary:
      "Fintech platform powering card and payment products for banks in the US and India.",
    highlights: [
      {
        area: "Banking portals",
        text: "Delivered modules across 3 production web portals used by banks and their business partners, including a payment batch system (incoming/outgoing payments, transfers, fees) and account and fund management.",
      },
      {
        area: "Mobile banking SDK",
        text: "Built card features for an embeddable web/mobile banking SDK — multiple cards, freeze/block, transfers, statements — plus an app that shows users their card details.",
      },
      {
        area: "Full-stack delivery",
        text: "Owned features from API to UI: GraphQL queries and mutations in the core Ruby service, integrated via Apollo Client, and new screens in Angular apps.",
      },
      {
        area: "Performance",
        text: "Upgraded 5 React apps (web and mobile) to React 18 and introduced lazy loading, cutting production bundle sizes by up to 65%; resolved SonarQube issues to raise code quality.",
      },
      {
        area: "AI-assisted delivery",
        text: "Used AI coding agents (Cursor, Claude Code) to accelerate implementation, debugging and refactoring — delivering features ahead of estimates while reviewing every change.",
      },
    ],
    stack: ["React", "TypeScript", "Angular", "GraphQL", "Apollo Client", "Ruby", "Material UI", "SonarQube"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "Jul 2023 — May 2024",
    location: "Remote",
    summary: "Websites and web apps for small businesses and individual clients.",
    highlights: [
      {
        area: "Client work",
        text: "Delivered responsive, accessible websites and web apps, and built REST APIs connecting them to their back ends.",
      },
    ],
    stack: ["JavaScript", "React", "Node.js", "Express", "REST APIs"],
  },
];

export type Project = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string }[];
  status?: "Live" | "In development";
  pipeline?: string[];
};

export const featuredProjects: Project[] = [
  {
    slug: "shortlist",
    name: "Shortlist",
    kicker: "AI job application platform",
    description:
      "Finds jobs worth your time, tailors a truthful resume for each, and notifies you — you make the final click.",
    points: [
      "Multi-source discovery pipeline: ATS job boards, job APIs and email alerts, run nightly by a BullMQ worker.",
      "Rule-based pre-filter screens every job before any LLM call, keeping Claude API costs low.",
      "NestJS API with JWT access/refresh tokens and Vitest tests; React + Vite PWA front end.",
      "Dockerized with Postgres, Redis and Caddy (automatic HTTPS) on AWS EC2, with nightly off-site backups.",
    ],
    stack: ["NestJS", "React", "Vite", "PostgreSQL", "Prisma", "Redis", "Claude API", "Docker", "AWS EC2"],
    links: [
      { label: "Live app", href: "https://numan-shortlist.duckdns.org" },
      { label: "Source", href: "https://github.com/NumanBytes/shortlist" },
    ],
    status: "Live",
    pipeline: ["Job sources", "Rule pre-filter", "Claude scoring", "Tailored resume", "Notify"],
  },
  {
    slug: "manzil",
    name: "Manzil",
    kicker: "Developer growth platform",
    description:
      "Generates personalised learning roadmaps for developers with the Claude API, based on where they are and where they want to go.",
    points: [
      "Next.js App Router with TypeScript end to end.",
      "PostgreSQL + Prisma data model for goals, skills and roadmap progress.",
      "Claude API for roadmap generation, with structured output the UI can render and track.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Claude API"],
    links: [{ label: "Source", href: "https://github.com/NumanBytes/manzil" }],
    status: "In development",
  },
];

export const moreProjects: Project[] = [
  {
    slug: "auth-system",
    name: "Full-stack authentication system",
    kicker: "Security",
    description:
      "Registration with email verification, TOTP two-factor auth with QR setup, and secure password reset links.",
    points: [],
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "JWT"],
    links: [{ label: "Source", href: "https://github.com/NumanBytes/auth-system" }],
  },
  {
    slug: "store-admin",
    name: "Store admin dashboard",
    kicker: "E-commerce",
    description:
      "Product, category, customer and order management with payment gateway integration and sales reporting.",
    points: [],
    stack: ["React", "Express", "MongoDB", "REST"],
    links: [{ label: "Source", href: "https://github.com/muneeb787/store-admin-dashboard" }],
  },
  {
    slug: "shopping-store",
    name: "Shopping store app",
    kicker: "E-commerce",
    description: "Responsive storefront with filtering, cart, checkout, accounts and order history.",
    points: [],
    stack: ["React", "Node.js", "REST"],
    links: [{ label: "Source", href: "https://github.com/NumanBytes/Ecommerce_Store_App" }],
  },
  {
    slug: "fyp",
    name: "E-commerce platform (final year project)",
    kicker: "Full stack",
    description: "Django back end with product inventory, auth and order processing behind a separate front end.",
    points: [],
    stack: ["Django", "Python", "SQL"],
    links: [{ label: "Source", href: "https://github.com/NumanBytes/Project-code" }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "TypeScript", "Next.js", "JavaScript", "Angular", "Redux Toolkit", "Apollo Client", "Vite", "Web accessibility"],
  },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "Ruby", "JWT auth"] },
  { group: "Data", items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma", "Redis"] },
  { group: "Cloud & DevOps", items: ["AWS EC2", "Docker", "Caddy", "Nginx", "Linux", "Vercel", "CI/CD"] },
  { group: "UI", items: ["Tailwind CSS", "Material UI", "Ant Design", "SASS", "Figma"] },
  { group: "AI workflow", items: ["Claude Code", "Cursor", "Claude API", "Prompt engineering"] },
  { group: "Quality", items: ["Vitest", "SonarQube", "Git", "GitHub Actions", "Postman"] },
];

export const education = {
  degree: "BS Information Technology",
  school: "University of the Punjab (PUCIT), Lahore",
  period: "2019 — 2023",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
