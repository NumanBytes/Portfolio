import { cn } from "@/lib/utils";

/** Page section with the shared width, gutters and vertical rhythm. */
export function Section({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={cn("mx-auto max-w-5xl px-4 py-14 sm:px-6 md:py-20", className)}>
      {children}
    </section>
  );
}

/** The small "01 —— LABEL" line above a section title. */
export function Eyebrow({ index, label, className }: { index?: string; label: string; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent", className)}>
      {index && (
        <>
          <span>{index}</span>
          <span className="h-px w-8 bg-accent/50" />
        </>
      )}
      <span>{label}</span>
    </p>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  intro,
}: {
  index?: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="reveal mb-10 max-w-2xl md:mb-12">
      <Eyebrow index={index} label={label} className="mb-4" />
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-pretty text-lg text-muted">{intro}</p>}
    </header>
  );
}
