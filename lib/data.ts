// Everything the site says about Numan lives here. Edit this file to update the
// portfolio; the components only lay it out.

export const site = {
  name: "Numan Razzaq",
  role: "Full-Stack Engineer",
  tagline: "Full-stack engineer building SaaS products end to end.",
  // Used for canonical URLs, Open Graph and the sitemap. Override at build time with
  // NEXT_PUBLIC_SITE_URL when the domain changes.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://numan-razzaq.duckdns.org",
  description:
    "Numan Razzaq is a full-stack engineer in Lahore who builds SaaS products, web and mobile " +
    "apps and AI features with React, Next.js, Node.js, NestJS and PostgreSQL.",
  location: "Lahore, Pakistan",
  timeZone: "Asia/Karachi",
  email: "numaan.razaq@gmail.com",
  // International format without "+" or spaces, as wa.me expects.
  whatsapp: "923260806324",
  whatsappDisplay: "+92 326 0806324",
  // The Resume button downloads this file; replace public/Numan_Razzaq_Resume.pdf to update it.
  resume: "/Numan_Razzaq_Resume.pdf",
  availability: "Taking on new projects & roles",
  // Calendly link for the free intro call, e.g. https://calendly.com/<you>/intro-call.
  // While empty, "Book a free call" opens WhatsApp with a booking message instead.
  booking: "https://calendly.com/numaan-razaq",
  // Umami (cloud.umami.is) website ID. While empty, no analytics script loads.
  umamiWebsiteId: "",
  socials: {
    github: "https://github.com/NumanBytes",
    linkedin: "https://linkedin.com/in/numan-razzaq",
  },
} as const;

// Lines the hero headline types out one after another, then loops.
export const heroLines = [
  "Hi, my name is Numan.",
  "I'm a full-stack engineer.",
  "I build SaaS products.",
  "I turn ideas into products.",
  "Let's build yours next.",
];

export const stats = [
  { value: "3+", label: "years in production" },
  { value: "10+", label: "web & mobile apps shipped" },
  { value: "300K", label: "end users" },
];

export const about = [
  "I build products end to end, from the database to the interface, and keep them running in production.",
  "Day to day that's payments software for banks. On my own time, AI products like Shortlist.",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "CloudCard Inc.",
    role: "Software Engineer",
    period: "2024 — Present",
    highlights: [
      "Features end to end across three production portals and an embeddable card SDK.",
      "GraphQL in the core Ruby service; React and Angular on the front.",
      "Framework upgrades, performance and code quality.",
    ],
    stack: ["React", "TypeScript", "Angular", "GraphQL", "Ruby"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2023 — 2024",
    highlights: ["Websites and web apps for small businesses, from scoping to launch, APIs and hosting included."],
    stack: ["JavaScript", "React", "Node.js", "Express"],
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
  // Slug of a case-study page under /work/, if the project has one.
  caseStudy?: string;
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
    caseStudy: "shortlist",
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

export type ClientProject = {
  name: string;
  audience: string;
  description: string;
  points: string[];
  stack: string[];
  // The live portal. Visitors only see its login page; client data stays private.
  url?: string;
};

// Production portals Numan builds at CloudCard, a card & payments platform.
export const clientWork = {
  intro: "A card & payments platform serving 3 large banks and about 300,000 end users, with thousands of transactions a day.",
  projects: [
    {
      name: "Bank Portal",
      audience: "For banks",
      description: "The back office banks use to run their payments, accounts and funds.",
      points: [
        "Built the payment batch module: inward and outward payments, transfers and fee application.",
        "Individual and business account management.",
      ],
      stack: ["React", "TypeScript", "GraphQL", "Apollo Client"],
      url: "https://digitalbranch-sbx.cloudcardapp.com/login",
    },
    {
      name: "Partner Portal",
      audience: "For business partners",
      description: "Where the banks' business partners manage their accounts, funds and payments.",
      points: [
        "Customer-facing features from the GraphQL API through to the UI.",
        "Account and fund management screens.",
      ],
      stack: ["React", "TypeScript", "GraphQL", "Ruby"],
      url: "https://partner-portal.cloudcardapp.com/",
    },
    {
      name: "Consumer Portal",
      audience: "For cardholders",
      description: "Everyday banking for end users: cards, transfers and statements.",
      points: [
        "Cardholder features: multiple cards, freeze and block, transfers and statements.",
        "The same features shipped as an embeddable web and mobile card SDK.",
        "A new card design for the digital card widget.",
      ],
      stack: ["React", "TypeScript", "Material UI"],
      url: "https://yesbank-sbx.cloudcardapp.com/login",
    },
  ] satisfies ClientProject[] as ClientProject[],
};

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "React Query", "Redux Toolkit", "Apollo Client", "Angular", "Vite", "Accessibility"],
  },
  { group: "Backend", items: ["Node.js", "NestJS", "Express", "GraphQL", "REST APIs", "Zod", "JWT auth", "Ruby"] },
  { group: "AI engineering", items: ["Claude API", "Structured outputs", "MCP", "Prompt engineering", "Claude Code", "Cursor"] },
  { group: "Data & queues", items: ["PostgreSQL", "Prisma", "Redis", "BullMQ", "MongoDB", "MySQL"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "GitHub Actions", "Linux", "Nginx", "Vercel"] },
  { group: "Testing", items: ["Vitest", "Playwright", "ESLint", "SonarQube"] },
  { group: "UI", items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Ant Design", "Figma"] },
];

export const services = [
  {
    icon: "rocket",
    title: "SaaS products & MVPs",
    body: "Auth, billing, dashboards and APIs, deployed and ready for users.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    icon: "layout",
    title: "Web apps & portals",
    body: "Data-heavy dashboards and customer portals.",
    tags: ["React", "TypeScript", "GraphQL"],
  },
  {
    icon: "sparkles",
    title: "AI features",
    body: "Search, summaries, matching and generation, with costs kept in check.",
    tags: ["Claude API", "Structured outputs"],
  },
  {
    icon: "gauge",
    title: "Modernisation",
    body: "Upgrades, performance and clean-up for existing React apps.",
    tags: ["React", "Performance"],
  },
] as const;

export const workProcess = [
  { title: "Intro call", body: "Free, 20 minutes, about what you need." },
  { title: "Scope & quote", body: "Written scope, milestones and a fixed price." },
  { title: "Build", body: "Regular demos on a live preview link." },
  { title: "Launch", body: "You own the code. One month of free support." },
];

// Kind words from people Numan has worked with. Add real quotes here and the
// "What people say" section appears automatically; it stays hidden while empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const faqs = [
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Remotely, in English, with hours that overlap the US, UK and EU.",
  },
  {
    q: "How do you price a project?",
    a: "A fixed price per milestone, agreed before work starts.",
  },
  {
    q: "What happens after launch?",
    a: "You get the code, access and docs, plus a month of free bug fixes. After that, an optional monthly maintenance plan.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "Yes, full-stack and software engineering roles, remote or in Lahore.",
  },
];

export const projectTypes = ["New product / MVP", "Web app or dashboard", "AI feature", "Fix or speed up an app", "Website", "Full-time role"];
export const budgets = ["< $1k", "$1k – $5k", "$5k – $15k", "$15k+", "Not sure yet"];

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function whatsappLink(text = "Hi Numan, I found your portfolio and would like to talk about a project.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Where "Book a free call" goes: the booking page once set, WhatsApp until then.
export function bookingLink() {
  return site.booking || whatsappLink("Hi Numan, I'd like to book a free intro call about my project.");
}

export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  metrics: { value: string; label: string }[];
  sections: { heading: string; body: string[]; bullets?: string[] }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "shortlist",
    name: "Shortlist",
    tagline: "An AI job-search platform that finds roles worth applying to, and writes a truthful resume for each.",
    role: "Solo: product, design, backend, frontend and deployment",
    stack: ["NestJS", "React", "Vite", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Claude API", "Docker", "AWS EC2"],
    links: [
      { label: "Live app", href: "https://numan-shortlist.duckdns.org" },
      { label: "Source", href: "https://github.com/NumanBytes/shortlist" },
    ],
    metrics: [
      { value: "48", label: "job sources watched" },
      { value: "1,000+", label: "postings checked every night" },
      { value: "$0.006", label: "AI cost to score a job" },
      { value: "490+", label: "automated tests in CI" },
    ],
    sections: [
      {
        heading: "The problem",
        body: [
          "Job hunting means checking dozens of boards every day, reading descriptions that mostly don't fit, and rewriting a resume for each one that does.",
          "AI tools can speed that up, but they happily invent experience you don't have, and running every posting through a large model gets expensive fast.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "Shortlist watches 48 job sources, scores each new role against your verified skills, tailors a resume for the good matches, and notifies you. You make the final click.",
        ],
      },
      {
        heading: "Architecture",
        body: [
          "Three processes, each with one job: a React PWA, a NestJS API, and a separate worker that runs on a BullMQ queue in Redis. The API only enqueues work and answers right away, so a slow job board or a 20-second AI call never blocks someone using the app.",
          "PostgreSQL is the single source of truth; Redis holds only the queue, so losing it costs nothing a nightly run can't redo. A heartbeat key in Redis tells the UI when no worker is running, instead of leaving people staring at a spinner.",
        ],
        bullets: [
          "One adapter per hiring platform (Greenhouse, Lever, SmartRecruiters, Workable and more), with de-duplication across sources",
          "Shared Zod schemas, so the API, worker and UI agree on every type",
        ],
      },
      {
        heading: "AI that stays honest and cheap",
        body: [
          "The rule is simple: the model reads, the code decides. Claude extracts a job's requirements; deterministic code scores them against skills you have verified.",
        ],
        bullets: [
          "A rule-based pre-filter drops poor fits before any AI call is made",
          "Every call is budget-guarded and cost-logged, at about $0.006 per scored job",
          "A tailored resume is rejected unless every claim cites verified evidence",
        ],
      },
      {
        heading: "Security and reliability",
        body: ["It handles real accounts and payments, so it's built like it:"],
        bullets: [
          "Hand-built JWT auth with rotating refresh tokens and reuse detection",
          "Redis-backed rate limits on login and other sensitive routes",
          "Encrypted Web Push notifications, and billing webhooks verified by signature and processed exactly once",
          "490+ automated tests run on every change in GitHub Actions",
        ],
      },
      {
        heading: "Shipping it",
        body: [
          "Everything runs on one AWS EC2 server with Docker Compose: Caddy in front with automatic HTTPS, the API, the worker, PostgreSQL and Redis. The database is backed up every night and copied off-site.",
        ],
      },
    ],
  },
];
