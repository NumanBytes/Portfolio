import { CalendarDays, Mail } from "lucide-react";
import { site } from "@/lib/data";
import { bookingUrl, whatsappLink } from "@/lib/links";
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ExternalLink } from "@/components/ui/link";
import { LocalTime } from "@/components/ui/local-time";
import { Eyebrow, Section } from "@/components/ui/section";
import { ContactForm } from "./contact-form";

const channels = [
  { label: "WhatsApp", value: site.whatsappDisplay, href: whatsappLink(), Icon: WhatsAppIcon },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/numan-razzaq", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", value: "NumanBytes", href: site.socials.github, Icon: GitHubIcon },
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="spotlight card reveal relative isolate overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 md:py-20">
        <div aria-hidden className="glow absolute -right-40 -bottom-60 -z-10 size-[40rem]" />
        <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />

        <Eyebrow index="07" label="Contact" className="mb-4" />
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Got an idea? Let&apos;s build it together.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-pretty text-muted">Projects or full-time roles. I reply within a day.</p>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ContactForm />

          <aside className="space-y-6">
            <ExternalLink
              href={bookingUrl}
              data-umami-event="contact:book-call"
              className="spotlight flex items-center gap-4 rounded-2xl border border-accent/40 bg-accent-soft p-5 transition hover:border-accent"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-fg">
                <CalendarDays className="size-5" />
              </span>
              <span>
                <span className="block font-medium">Book a free 20-minute call</span>
                <span className="block text-sm text-muted">Talk through what you need.</span>
              </span>
            </ExternalLink>

            <div className="spotlight rounded-2xl border border-line bg-bg p-5">
              <p className="flex items-center gap-2 text-sm">
                <span className="pulse-dot relative size-2 rounded-full bg-accent" />
                {site.availability}
              </p>
              <p className="mt-2 font-mono text-xs text-subtle">
                It&apos;s <LocalTime /> in Lahore right now
              </p>
            </div>

            <ul className="overflow-hidden rounded-2xl border border-line">
              {channels.map((c) => (
                <Channel key={c.label} {...c} />
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </Section>
  );
}

function Channel({
  label,
  value,
  href,
  Icon,
}: {
  label: string;
  value: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  const Anchor = href.startsWith("http") ? ExternalLink : "a";
  return (
    <li className="border-b border-line last:border-0">
      <Anchor href={href} className="spotlight group flex items-center gap-4 bg-bg/40 p-4 transition hover:bg-bg">
        <Icon className="size-5 text-muted transition group-hover:text-accent" />
        <span className="min-w-0">
          <span className="block text-xs text-subtle">{label}</span>
          <span className="block truncate text-sm">{value}</span>
        </span>
      </Anchor>
    </li>
  );
}
