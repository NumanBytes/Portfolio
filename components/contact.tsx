import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { CopyEmail } from "./copy-email";
import { GitHubIcon, LinkedInIcon } from "./icons";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/numan-razzaq", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "NumanBytes", href: site.socials.github, Icon: GitHubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <div className="reveal relative isolate overflow-hidden rounded-[2rem] border border-line bg-elevated px-6 py-16 sm:px-12 md:py-24">
        <div aria-hidden className="glow absolute -right-40 -bottom-60 -z-10 size-[40rem]" />
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />

        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span>05</span>
          <span className="h-px w-8 bg-accent/50" />
          <span>Contact</span>
        </p>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Have a role or a product in mind? Let&apos;s talk.
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-lg text-muted">
          I&apos;m open to frontend and full-stack roles — remote, or on-site in Lahore — and happy to chat
          about interesting freelance work. I usually reply within a day.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}?subject=Hello%20Numan`}
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-fg transition hover:brightness-110"
          >
            Send an email
            <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <CopyEmail />
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {channels.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full items-center gap-4 bg-elevated p-5 transition hover:bg-bg"
              >
                <Icon className="size-5 text-muted transition group-hover:text-accent" />
                <span className="min-w-0">
                  <span className="block text-xs text-subtle">{label}</span>
                  <span className="block truncate text-sm">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
