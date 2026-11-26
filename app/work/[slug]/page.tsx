import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { bookingLink, caseStudies } from "@/lib/data";
import { GitHubIcon } from "@/components/icons";
import { PointerField } from "@/components/pointer-field";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Footer } from "@/components/footer";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) return {};
  return {
    title: `${study.name} case study`,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}/` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PointerField />
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-line bg-bg/70 px-3 pl-5 backdrop-blur-xl">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pt-36 pb-16 sm:px-6 sm:pt-44">
        <p className="enter font-mono text-xs uppercase tracking-[0.2em] text-accent">Case study</p>
        <h1 className="enter mt-4 text-5xl font-semibold tracking-tighter sm:text-6xl" style={{ "--i": 1 } as React.CSSProperties}>
          {study.name}
        </h1>
        <p className="enter mt-5 text-pretty text-xl leading-relaxed text-muted" style={{ "--i": 2 } as React.CSSProperties}>
          {study.tagline}
        </p>

        <dl className="enter mt-8 grid gap-4 text-sm sm:grid-cols-[auto_1fr] sm:gap-x-8" style={{ "--i": 3 } as React.CSSProperties}>
          <dt className="text-subtle">Role</dt>
          <dd>{study.role}</dd>
          <dt className="text-subtle">Stack</dt>
          <dd className="flex flex-wrap gap-2">
            {study.stack.map((t) => (
              <span key={t} className="chip rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                {t}
              </span>
            ))}
          </dd>
        </dl>

        <div className="enter mt-8 flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
          {study.links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event={`case-study:${l.label.toLowerCase()}`}
              className={
                "group inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-medium transition " +
                (i === 0 ? "bg-fg text-bg hover:opacity-85" : "border border-line-strong hover:bg-line")
              }
            >
              {l.label === "Source" && <GitHubIcon className="size-4" />}
              {l.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </div>

        <dl className="enter mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4" style={{ "--i": 4 } as React.CSSProperties}>
          {study.metrics.map((m) => (
            <div key={m.label} className="spotlight flex flex-col-reverse justify-end gap-1 bg-elevated p-5">
              <dt className="text-sm text-muted">{m.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight text-accent sm:text-3xl">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 space-y-14">
          {study.sections.map((s, i) => (
            <section key={s.heading} className="reveal">
              <h2 className="flex items-baseline gap-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                {s.heading}
              </h2>
              <div className="mt-4 space-y-4 text-pretty text-lg leading-relaxed text-muted">
                {s.body.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-5 space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <aside className="spotlight reveal mt-20 rounded-3xl border border-line bg-elevated p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Want something like this built?</h2>
          <p className="mt-3 text-muted">
            I take products from idea to production, end to end. Tell me what you&apos;re building.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={bookingLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="case-study:book-call"
              className="inline-flex h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-accent-fg transition hover:brightness-110"
            >
              Book a free call
            </a>
            <Link
              href="/#contact"
              className="inline-flex h-11 items-center rounded-full border border-line-strong px-5 text-sm font-medium transition hover:bg-line"
            >
              Send an enquiry
            </Link>
          </div>
        </aside>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

