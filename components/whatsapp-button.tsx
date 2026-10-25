import { whatsappLink } from "@/lib/data";
import { WhatsAppIcon } from "./icons";

// Always-visible chat button in the corner: the quickest way for a client to reach out.
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed right-4 bottom-4 z-40 flex h-14 items-center rounded-full bg-[#25D366] px-4 text-white shadow-lg shadow-black/25 transition hover:brightness-105 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-6" />
      <span className="hidden max-w-0 overflow-hidden text-sm font-medium whitespace-nowrap transition-all duration-300 group-hover:ml-2 group-hover:max-w-40 sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
