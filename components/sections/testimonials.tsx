import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Section, SectionHeading } from "@/components/ui/section";

// Hidden until real quotes are added to lib/data.ts.
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section id="testimonials">
      <SectionHeading label="Kind words" title="What people say." />
      <ul className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t) => (
          <li key={t.name} className="spotlight card reveal rounded-2xl p-6">
            <Quote className="size-5 text-accent" />
            <blockquote className="mt-4 leading-relaxed text-pretty">{t.quote}</blockquote>
            <p className="mt-5 text-sm font-medium">{t.name}</p>
            <p className="text-sm text-subtle">{t.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
