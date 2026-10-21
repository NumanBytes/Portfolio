"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function Nav({ resumeHref }: { resumeHref: string }) {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the link of whichever section crosses the middle of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const { href } of nav) {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border px-3 pl-5 transition-all duration-300",
          scrolled || open
            ? "border-line bg-bg/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-transparent",
        )}
      >
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid size-7 place-items-center rounded-lg bg-accent font-mono text-xs font-bold text-accent-fg">
            NR
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition",
                  active === item.href ? "bg-line text-fg" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener"
            className="ml-1 hidden h-9 items-center rounded-full bg-fg px-4 text-sm font-medium text-bg transition hover:opacity-85 sm:inline-flex"
          >
            Resume
          </a>
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-muted hover:bg-line hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-bg p-3 shadow-2xl shadow-black/20 md:hidden"
        >
          <ul className="grid">
            {[...nav, { href: resumeHref, label: "Resume" }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-lg text-muted transition hover:bg-line hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
