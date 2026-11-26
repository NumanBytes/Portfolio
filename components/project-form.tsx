"use client";

import { Send } from "lucide-react";
import { useState } from "react";
import { budgets, projectTypes, site, whatsappLink } from "@/lib/data";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./icons";

// The site is static, so the form writes the message for the visitor and opens their
// mail app (or WhatsApp) with everything filled in. Nothing is stored or sent by the site itself.
export function ProjectForm() {
  const [type, setType] = useState<string>(projectTypes[0]);
  const [budget, setBudget] = useState<string>("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const timeline = String(data.get("timeline") ?? "").trim();
    const details = [`Looking for: ${type}`];
    if (budget) details.push(`Budget: ${budget}`);
    if (timeline) details.push(`Timeline: ${timeline}`);
    const body = ["Hi Numan,", "", String(data.get("message") ?? "").trim(), "", `— ${name}`, "", ...details].join(
      "\n",
    );
    const subject = `${type} — ${name}`;
    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    if (submitter?.getAttribute("value") === "whatsapp") {
      window.open(whatsappLink(body), "_blank", "noopener");
      return;
    }
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <fieldset>
        <legend className="mb-3 text-sm text-muted">What can I help with?</legend>
        <Chips options={projectTypes} value={type} onChange={setType} name="type" />
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" name="name" autoComplete="name" required />
        <Field label="Timeline" name="timeline" placeholder="e.g. 4–6 weeks, ASAP" />
      </div>

      <fieldset>
        <legend className="mb-3 text-sm text-muted">
          Budget <span className="text-subtle">(optional)</span>
        </legend>
        <Chips options={budgets} value={budget} onChange={setBudget} name="budget" />
      </fieldset>

      <label className="block">
        <span className="mb-2 block text-sm text-muted">Tell me a bit about it</span>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="What are you building, who is it for, and what does success look like?"
          className="w-full resize-y rounded-xl border border-line-strong bg-bg px-4 py-3 text-sm outline-none transition placeholder:text-subtle focus:border-accent"
        />
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          value="email"
          data-umami-event="enquiry:email"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-fg transition hover:brightness-110"
        >
          Send by email
          <Send className="size-4 transition group-hover:translate-x-0.5" />
        </button>
        <button
          type="submit"
          value="whatsapp"
          data-umami-event="enquiry:whatsapp"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-5 font-medium transition hover:border-[#25D366] hover:text-[#25D366]"
        >
          <WhatsAppIcon className="size-4" />
          Send on WhatsApp
        </button>
        <p className="w-full text-xs text-subtle">Opens your email app or WhatsApp with this filled in.</p>
      </div>
    </form>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      <input
        {...props}
        className="h-11 w-full rounded-xl border border-line-strong bg-bg px-4 text-sm outline-none transition placeholder:text-subtle focus:border-accent"
      />
    </label>
  );
}

function Chips({
  options,
  value,
  onChange,
  name,
}: {
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <label
          key={o}
          className={cn(
            "cursor-pointer rounded-full border px-3.5 py-1.5 text-sm transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent",
            value === o ? "border-accent bg-accent-soft text-accent" : "border-line-strong text-muted hover:text-fg",
          )}
        >
          <input
            type="radio"
            name={name}
            value={o}
            checked={value === o}
            onChange={() => onChange(o)}
            className="sr-only"
          />
          {o}
        </label>
      ))}
    </div>
  );
}
