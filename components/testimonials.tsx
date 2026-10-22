import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "./section-heading";

// Hidden until real quotes are added to lib/data.ts.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 md:py-32">
      <SectionHeading index="" label="Kind words" title="What people say." />
      <ul className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t) => (
          <li key={t.name} className="reveal rounded-2xl border border-line bg-elevated p-6">
            <Quote className="size-5 text-accent" />
            <blockquote className="mt-4 text-pretty leading-relaxed">{t.quote}</blockquote>
            <p className="mt-5 text-sm font-medium">{t.name}</p>
            <p className="text-sm text-subtle">{t.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
