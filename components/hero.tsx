import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { site, stats } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { LocalTime } from "./local-time";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-20 sm:pt-44 md:pb-28">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="glow absolute -top-40 left-1/2 -z-10 h-[36rem] w-[60rem] -translate-x-1/2" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="enter flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-xs text-muted" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-accent">
            <span className="pulse-dot relative size-1.5 rounded-full bg-accent" />
            {site.availability}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {site.location} · <LocalTime />
          </span>
        </div>

        <h1
          className="enter mt-8 text-balance text-[2.6rem] font-semibold leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          <span className="text-muted">Hi, I&apos;m {site.name.split(" ")[0]}.</span>{" "}
          I build software people trust with{" "}
          <span className="bg-gradient-to-r from-accent to-fg bg-clip-text text-transparent">their money.</span>
        </h1>

        <p
          className="enter mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          {site.role} at CloudCard, shipping banking portals and embeddable SDKs used by banks across the
          US and India — React &amp; TypeScript up front, GraphQL and Node behind. On the side I build and run
          AI products on AWS.
        </p>

        <div className="enter mt-10 flex flex-wrap items-center gap-3" style={{ "--i": 3 } as React.CSSProperties}>
          <a
            href="#work"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-fg transition hover:brightness-110"
          >
            See my work
            <ArrowDownRight className="size-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-6 font-medium transition hover:border-fg/40 hover:bg-line"
          >
            Get in touch
            <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid size-12 place-items-center rounded-full text-muted transition hover:bg-line hover:text-fg"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid size-12 place-items-center rounded-full text-muted transition hover:bg-line hover:text-fg"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>

        <dl
          className="enter mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
          style={{ "--i": 4 } as React.CSSProperties}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end gap-1 bg-bg p-5 sm:p-6">
              <dt className="text-sm text-muted">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {s.value.replace(/[^\d]/g, "")}
                <span className="text-accent">{s.value.replace(/\d/g, "")}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
