import { faqs } from "@/lib/data";
import { Accordion } from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/ui/section";

export function Faq() {
  return (
    <Section id="faq">
      <div className="spotlight card reveal grid gap-8 rounded-3xl p-6 sm:p-10 md:grid-cols-[1fr_1.6fr] md:gap-14">
        <SectionHeading index="06" label="FAQ" title="Questions you might have." intro="Anything else, just ask." />
        <Accordion items={faqs} />
      </div>
    </Section>
  );
}
