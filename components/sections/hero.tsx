import { ArrowDownRight, CalendarDays, MapPin } from "lucide-react";
import { heroLines, site, stats } from "@/lib/data";
import { bookingUrl } from "@/lib/links";
import { Typewriter } from "@/components/effects/typewriter";
import { ExternalLink, button } from "@/components/ui/link";
import { LocalTime } from "@/components/ui/local-time";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-10 sm:pt-40 md:pb-14">
      <div aria-hidden className="glow absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="enter flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted [--i:0]">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-accent">
            <span className="pulse-dot relative size-1.5 rounded-full bg-accent" />
            {site.availability}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {site.location} · <LocalTime />
          </span>
        </div>

        <h1 className="enter mt-8 min-h-[2.1em] max-w-4xl text-[2.6rem] leading-[1.05] font-semibold tracking-tighter [--i:1] sm:min-h-[1.1em] sm:text-6xl md:text-7xl">
          {/* Screen readers and search engines get the whole headline at once. */}
          <span className="sr-only">
            Hi, my name is {site.name}. I&apos;m a {site.role.toLowerCase()} who builds SaaS and web apps.
          </span>
          <Typewriter lines={heroLines} />
        </h1>

        <p className="enter mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-muted [--i:2] sm:text-xl">
          Full-stack engineer building SaaS products and the systems behind them. Payments software used by
          300,000 people; AI products I run in production.
        </p>

        <div className="enter mt-10 flex flex-wrap items-center gap-3 [--i:3]">
          <a href="#contact" data-umami-event="hero:start-project" className={button("accent", "lg")}>
            Start a project
            <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <ExternalLink href={bookingUrl} data-umami-event="hero:book-call" className={button("outline", "lg")}>
            <CalendarDays className="size-4" />
            Book a free call
          </ExternalLink>
        </div>

        <dl className="enter mt-14 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line [--i:4]">
          {stats.map((s) => (
            <div key={s.label} className="spotlight flex flex-col-reverse justify-end gap-1 bg-bg p-4 sm:p-6">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value.replace(/\D/g, "")}
                <span className="text-accent">{s.value.replace(/\d/g, "")}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
