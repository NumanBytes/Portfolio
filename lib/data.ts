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
  availability: "Taking on new projects & roles",
  socials: {
    github: "https://github.com/NumanBytes",
    linkedin: "https://linkedin.com/in/numan-razzaq",
  },
} as const;

export const stats = [
  { value: "3+", label: "years building for clients & teams" },
  { value: "3", label: "live banking portals delivered" },
  { value: "65%", label: "max bundle size cut after React 18 upgrade" },
  { value: "5", label: "React apps upgraded & lazy-loaded" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer at CloudCard Inc., where I build the web portals and embeddable SDKs that banks and their business partners use to move money: payment batches, transfers, fees, card controls and account management.",
    "I started on the frontend and still care most about what users touch — fast loads, clear states, accessible components. But I own features end to end now: writing GraphQL queries and mutations in our Ruby service, wiring them through Apollo Client, and shipping the screens in React or Angular.",
    "Before CloudCard I freelanced, and I still think like one: I talk to the people paying for the work, translate what they need into something I can ship, and keep them in the loop until it's live. Clients get one person who designs the plan, writes the code and deploys it — no hand-offs, no surprises.",
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
    summary: "Websites and web apps for small businesses and individual clients, from first call to launch.",
    highlights: [
      {
        area: "Client work",
        text: "Delivered responsive, accessible websites and web apps, and built REST APIs connecting them to their back ends.",
      },
      {
        area: "End-to-end ownership",
        text: "Scoped each project with the client, shared progress as it was built, and handled hosting and launch — so clients dealt with one person from idea to live site.",
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

export const services = [
  {
    icon: "rocket",
    title: "MVPs & SaaS products",
    body: "Turn an idea into a working product: auth, payments, dashboards and an API, deployed and ready for real users.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    icon: "layout",
    title: "Dashboards & admin portals",
    body: "Internal tools and customer portals that make complex data simple — the kind of thing I build for banks every day.",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    icon: "sparkles",
    title: "AI features that pay for themselves",
    body: "Add Claude-powered search, summaries, matching or content generation — with guardrails that keep API costs predictable.",
    tags: ["Claude API", "Prompt design"],
  },
  {
    icon: "gauge",
    title: "Speed-ups & modernisation",
    body: "Slow or outdated React app? I upgrade, lazy-load and clean it up. I've cut production bundles by up to 65%.",
    tags: ["React 18/19", "Performance"],
  },
  {
    icon: "server",
    title: "Deployment & hosting",
    body: "Docker, AWS and HTTPS set up properly, with backups — so your app stays up and you stay in control of it.",
    tags: ["AWS", "Docker", "CI/CD"],
  },
  {
    icon: "globe",
    title: "Websites that convert",
    body: "Fast, accessible, SEO-friendly marketing sites and landing pages that look great on every screen.",
    tags: ["Next.js", "Tailwind"],
  },
] as const;

export const workProcess = [
  {
    title: "Intro call",
    body: "A free 20–30 minute chat about your goals, users and deadline. You'll leave with honest advice, even if we don't work together.",
  },
  {
    title: "Clear plan & quote",
    body: "A written scope with milestones, timeline and a fixed price or estimate — no vague hourly surprises.",
  },
  {
    title: "Build in the open",
    body: "Regular demos and a live preview link, so you see progress as it happens and can steer early.",
  },
  {
    title: "Launch & support",
    body: "I deploy, hand over the code and docs, and stay around after launch for fixes and next steps.",
  },
];

export const promises = [
  "Replies within 24 hours",
  "Works with US, UK & EU time zones",
  "You own 100% of the code",
  "Fixed-scope quotes",
];

// Kind words from people Numan has worked with. Add real quotes here and the
// "What people say" section appears automatically; it stays hidden while empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const faqs = [
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work remotely in English, overlap with US, UK and EU working hours, and communicate over email, Slack, WhatsApp or video calls — whatever suits you.",
  },
  {
    q: "How do you price a project?",
    a: "Most projects get a fixed price per milestone after the intro call, so you know the cost before work starts. Ongoing work can be billed monthly.",
  },
  {
    q: "I only have an idea, not a design. Is that okay?",
    a: "Absolutely. I'll help you shape the features and flows, use proven UI patterns, and get something in front of users quickly.",
  },
  {
    q: "What happens after launch?",
    a: "You get the full source code, deployment access and documentation. I offer a support period for fixes, and I'm happy to keep building with you.",
  },
  {
    q: "Are you available for full-time roles too?",
    a: "Yes — I'm open to full-time frontend and full-stack positions, remote or in Lahore, alongside selected freelance work.",
  },
];

export const projectTypes = ["New product / MVP", "Web app or dashboard", "AI feature", "Fix or speed up an app", "Website", "Full-time role"];
export const budgets = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k+", "Not sure yet"];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
