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
  { value: "3+", label: "years of experience" },
  { value: "10+", label: "web & mobile apps in production" },
  { value: "300K", label: "end users on apps I've built" },
  { value: "24h", label: "reply time, every message" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack engineer who builds SaaS products and web apps people actually enjoy using — fast, clear and reliable. For more than three years I've shipped software for companies and clients, from first idea to live in production.",
    "I work across the whole stack: the database and API, background jobs and AI features, the screens users touch, and the cloud server it all runs on.",
    "I think like a freelancer: I listen to what you need, turn it into a clear plan, and keep you in the loop until it's live. You get one person who plans, builds and deploys — no hand-offs, no surprises.",
  ],
  principles: [
    {
      title: "Ship, then sharpen",
      body: "Small, reviewable changes that reach production early, then iterate with real usage.",
    },
    {
      title: "Built to grow",
      body: "Clean APIs, solid data models and tests, so your product keeps working as users and features grow.",
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
  highlights: { area: string; text: string }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "CloudCard Inc.",
    role: "Software Engineer",
    period: "2024 — Present",
    highlights: [
      {
        area: "End to end",
        text: "Build features from the API to the UI across several production web apps used every day.",
      },
      {
        area: "Speed & quality",
        text: "Keep apps fast and maintainable: framework upgrades, lazy loading and cleaner code.",
      },
      {
        area: "Teamwork",
        text: "Work closely with product, design, QA and backend teams to ship on schedule.",
      },
      {
        area: "AI-assisted",
        text: "Use AI coding tools daily to deliver faster, while reviewing every change.",
      },
    ],
    stack: ["React", "TypeScript", "Angular", "GraphQL", "Node.js"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2023 — 2024",
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
        "Shared state so every batch detail can be edited across nested screens.",
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
    title: "MVPs & SaaS products",
    body: "Turn an idea into a working product: auth, payments, dashboards and an API, deployed and ready for real users.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
  },
  {
    icon: "layout",
    title: "Dashboards & admin portals",
    body: "Internal tools and customer portals that make complex data simple — built for real teams and their customers.",
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
    body: "Slow or outdated React app? I upgrade, lazy-load and clean it up. Your users will feel the difference.",
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
    body: "I deploy, hand over the code and docs, and fix any bugs free for 1 month after launch. After that, I'm here on a maintenance plan if you want me.",
  },
];

export const promises = [
  "Replies within 24 hours",
  "Works with US, UK & EU time zones",
  "You own 100% of the code",
  "Fixed-scope quotes",
  "1 month of free support after launch",
];

// Kind words from people Numan has worked with. Add real quotes here and the
// "What people say" section appears automatically; it stays hidden while empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const faqs = [
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. I work remotely in English, overlap with US, UK and EU working hours, and communicate over WhatsApp, email, Slack or video calls — whatever suits you.",
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
    a: "You get the full source code, deployment access and documentation, plus 1 month of free support: any bug in what I built gets fixed at no cost.",
  },
  {
    q: "What about support after the first month?",
    a: "Happy to keep helping. Ongoing care (updates, monitoring, small fixes) is available as a monthly maintenance plan, and new features are quoted separately, just like the original project.",
  },
  {
    q: "Are you available for full-time roles too?",
    a: "Yes — I'm open to full-time full-stack and software engineering positions, remote or in Lahore, alongside selected freelance work.",
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
