import { MessageCircle } from "lucide-react";

import { trackWhatsappClick } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/contact";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      onClick={() => trackWhatsappClick("floating_button")}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 transition hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="hidden font-display text-sm uppercase tracking-widest md:inline">Chat WhatsApp</span>
    </a>
  );
}
