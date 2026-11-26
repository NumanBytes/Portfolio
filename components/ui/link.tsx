import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  accent: "bg-accent text-accent-fg hover:brightness-110",
  solid: "bg-fg text-bg hover:opacity-85",
  outline: "border border-line-strong hover:bg-line",
};
const sizes = { md: "h-10 px-4 text-sm", lg: "h-12 px-6" };

/** Classes for a pill-shaped link that looks like a button. */
export function button(variant: keyof typeof variants = "outline", size: keyof typeof sizes = "md") {
  return cn("group inline-flex items-center gap-2 rounded-full font-medium transition", variants[variant], sizes[size]);
}

/** A link that opens in a new tab. */
export function ExternalLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

/** The ↗ arrow on outgoing links; nudges up-right when its `group` parent is hovered. */
export function ArrowOut({ className }: { className?: string }) {
  return (
    <ArrowUpRight
      className={cn("size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5", className)}
    />
  );
}
