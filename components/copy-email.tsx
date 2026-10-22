"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { site } from "@/lib/data";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 max-w-full items-center gap-2 rounded-full border border-line-strong px-5 font-mono text-sm text-muted transition hover:border-accent hover:text-fg"
    >
      {copied ? <Check className="size-4 text-accent" /> : <Copy className="size-4" />}
      <span aria-live="polite" className="truncate">{copied ? "Copied to clipboard" : site.email}</span>
    </button>
  );
}
