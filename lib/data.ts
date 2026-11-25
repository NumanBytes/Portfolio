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
    "Numan Razzaq is a software engineer in Lahore who builds web apps, dashboards, SaaS " +
    "products and AI features with React, TypeScript, Next.js and Node.js.",
  location: "Lahore, Pakistan",
  timeZone: "Asia/Karachi",
  email: "numaan.razaq@gmail.com",
  // International format without "+" or spaces, as wa.me expects.
  whatsapp: "923260806324",
  whatsappDisplay: "+92 326 0806324",
  // The Resume button downloads this file; replace public/Numan_Razzaq_Resume.pdf to update it.
  resume: "/Numan_Razzaq_Resume.pdf",
  availability: "Taking on new projects & roles",
  socials: {
    github: "https://github.com/NumanBytes",
    linkedin: "https://linkedin.com/in/numan-razzaq",
  },
} as const;

// Lines the hero headline types out one after another, then loops.
export const heroLines = [
  "Hi, my name is Numan.",
  "I'm a software engineer.",
  "I build SaaS & web apps.",
  "I turn ideas into products.",
  "Let's build yours next.",
];

export const stats = [
  { value: "3+", label: "years of experience" },
  { value: "10+", label: "apps & portals in production" },
  { value: "300K", label: "end users on apps I've built" },
  { value: "24h", label: "reply time, every message" },
];

export const about = {
  paragraphs: [
    "I'm a software engineer who builds web apps people actually enjoy using — fast, clear and reliable. For more than three years I've shipped products for companies and clients, from first idea to live in production.",
    "I started on the frontend and still care most about what users touch. But I work end to end: the API, the database, the screens and the server it all runs on.",
    "I think like a freelancer: I listen to what you need, turn it into a clear plan, and keep you in the loop until it's live. You get one person who plans, builds and deploys — no hand-offs, no surprises.",
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
  highlights: { area: string; text: string }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "CloudCard Inc.",
    role: "Software Engineer",
    period: "May 2024 — Present",
    location: "Full-time",
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
    period: "Jul 2023 — May 2024",
    location: "Remote",
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

export type ClientProject = {
  name: string;
  audience: string;
  description: string;
  points: string[];
  stack: string[];
  // Sandbox demo link; the button only appears once this is filled in.
  demo?: string;
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
    },
  ] satisfies ClientProject[] as ClientProject[],
};

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

export function whatsappLink(text = "Hi Numan, I found your portfolio and would like to talk about a project.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
