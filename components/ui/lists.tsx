import { cn } from "@/lib/utils";

/** Bullet list with small accent dots. */
export function BulletList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("space-y-2.5 text-sm leading-relaxed text-muted", className)}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Row of technology tags. */
export function TagList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="chip rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
          {t}
        </li>
      ))}
    </ul>
  );
}
