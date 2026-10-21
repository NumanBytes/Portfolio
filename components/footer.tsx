import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-5xl flex-col gap-2 px-4 pt-4 pb-12 font-mono text-xs text-subtle sm:flex-row sm:justify-between sm:px-6">
      <p>
        © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind, self-hosted on AWS.
      </p>
      <a href="#top" className="transition hover:text-fg">
        Back to top ↑
      </a>
    </footer>
  );
}
