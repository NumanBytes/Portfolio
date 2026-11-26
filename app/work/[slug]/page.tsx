import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { bookingUrl } from "@/lib/links";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { GitHubIcon } from "@/components/ui/icons";
import { ArrowOut, ExternalLink, button } from "@/components/ui/link";
import { BulletList, TagList } from "@/components/ui/lists";
import { Eyebrow } from "@/components/ui/section";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

async function getStudy({ params }: Props) {
  const { slug } = await params;
  return caseStudies.find((c) => c.slug === slug);
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const study = await getStudy(props);
  if (!study) return {};
  return {
    title: `${study.name} case study`,
    description: study.tagline,
    alternates: { canonical: `/work/${study.slug}/` },
  };
}

export default async function CaseStudyPage(props: Props) {
  const study = await getStudy(props);
  if (!study) notFound();

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between rounded-full border border-line bg-bg/70 px-3 pl-5 backdrop-blur-xl">
          <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
            <ArrowLeft className="size-4" /> Back to portfolio
          </Link>
          <ThemeToggle />
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-4 pt-36 pb-16 sm:px-6 sm:pt-44">
        <Eyebrow label="Case study" className="enter" />
        <h1 className="enter mt-4 text-5xl font-semibold tracking-tighter [--i:1] sm:text-6xl">{study.name}</h1>
        <p className="enter mt-5 text-xl leading-relaxed text-pretty text-muted [--i:2]">{study.tagline}</p>

        <dl className="enter mt-8 grid gap-4 text-sm [--i:3] sm:grid-cols-[auto_1fr] sm:gap-x-8">
          <dt className="text-subtle">Role</dt>
          <dd>{study.role}</dd>
          <dt className="text-subtle">Stack</dt>
          <dd>
            <TagList items={study.stack} />
          </dd>
        </dl>

        <div className="enter mt-8 flex flex-wrap gap-3 [--i:3]">
          {study.links.map((l, i) => (
            <ExternalLink
              key={l.href}
              href={l.href}
              data-umami-event={`case-study:${l.label.toLowerCase()}`}
              className={button(i === 0 ? "solid" : "outline")}
            >
              {l.label === "Source" && <GitHubIcon className="size-4" />}
              {l.label}
              <ArrowOut />
            </ExternalLink>
          ))}
        </div>

        <dl className="enter mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line [--i:4] sm:grid-cols-4">
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
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-pretty text-muted">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {s.bullets && <BulletList items={s.bullets} className="mt-5 space-y-3 text-base text-fg" />}
            </section>
          ))}
        </div>

        <aside className="spotlight card reveal mt-20 rounded-3xl p-8 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Want something like this built?</h2>
          <p className="mt-3 text-muted">Tell me what you&apos;re building.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ExternalLink href={bookingUrl} data-umami-event="case-study:book-call" className={button("accent")}>
              Book a free call
            </ExternalLink>
            <Link href="/#contact" className={button()}>
              Send an enquiry
            </Link>
          </div>
        </aside>
      </main>
    </>
  );
}
