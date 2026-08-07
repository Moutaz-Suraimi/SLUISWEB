import { MessageCircle } from "lucide-react";

const PHONE = "31684683760";
const WHATSAPP_GREEN = "#25D366";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_12px_32px_-8px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_40px_-8px_rgba(37,211,102,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{ backgroundColor: WHATSAPP_GREEN }}
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" strokeWidth={2} />
      <span className="absolute -top-1 -right-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full bg-[#25D366]" />
      </span>
    </a>
  );
}
