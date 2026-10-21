export function SectionHeading({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <header className="reveal mb-12 max-w-2xl md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/50" />
        <span>{label}</span>
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-pretty text-lg text-muted">{intro}</p>}
    </header>
  );
}
