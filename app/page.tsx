import { existsSync } from "node:fs";
import { join } from "node:path";
import { Nav } from "@/components/nav";
import { site } from "@/lib/data";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { ExperienceSection } from "@/components/experience";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

// Until the resume PDF is copied into public/, point the Resume button at LinkedIn
// instead of a 404.
const resumeHref = existsSync(join(process.cwd(), "public", site.resume))
  ? site.resume
  : site.socials.linkedin;

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Nav resumeHref={resumeHref} />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Work />
        <Testimonials />
        <ExperienceSection />
        <Skills />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
