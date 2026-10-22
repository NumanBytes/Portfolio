import { Mail } from "lucide-react";
import { site } from "@/lib/data";
import { CopyEmail } from "./copy-email";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { LocalTime } from "./local-time";
import { ProjectForm } from "./project-form";

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/numan-razzaq", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "NumanBytes", href: site.socials.github, Icon: GitHubIcon },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <div className="reveal relative isolate overflow-hidden rounded-[2rem] border border-line bg-elevated px-6 py-14 sm:px-12 md:py-20">
        <div aria-hidden className="glow absolute -right-40 -bottom-60 -z-10 size-[40rem]" />
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />

        <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          <span>07</span>
          <span className="h-px w-8 bg-accent/50" />
          <span>Contact</span>
        </p>
        <h2 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
          Got an idea? Let&apos;s build it together.
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-lg text-muted">
          Tell me about your project, or just say hello — I reply to every message within a day. Hiring for a
          full-time role? I&apos;d love to hear about that too.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ProjectForm />

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-bg p-5">
              <p className="flex items-center gap-2 text-sm">
                <span className="pulse-dot relative size-2 rounded-full bg-accent" />
                {site.availability}
              </p>
              <p className="mt-2 font-mono text-xs text-subtle">
                It&apos;s <LocalTime /> in Lahore right now
              </p>
            </div>

            <ul className="overflow-hidden rounded-2xl border border-line">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label} className="border-b border-line last:border-0">
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 bg-bg/40 p-4 transition hover:bg-bg"
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

            <CopyEmail />
          </aside>
        </div>
      </div>
    </section>
  );
}
