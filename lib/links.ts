import { site } from "./data";

export function whatsappLink(text = "Hi Numan, I found your portfolio and would like to talk about a project.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

// Where "Book a free call" goes: the booking page if set, otherwise WhatsApp.
export const bookingUrl =
  site.booking || whatsappLink("Hi Numan, I'd like to book a free intro call about my project.");
