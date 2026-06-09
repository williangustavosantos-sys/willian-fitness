"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "+393428369444";

export default function WhatsAppButton() {
  const { tr } = useLocale();
  const [hovered, setHovered] = useState(false);
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);

  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      aria-label={tr.whatsapp.tooltip}
    >
      {/* Tooltip */}
      <span
        className={`bg-obsidian-50 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-sm whitespace-nowrap transition-all duration-300 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        {tr.whatsapp.tooltip}
      </span>

      {/* Button */}
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-black/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#25D366]/30">
        <MessageCircle size={26} className="text-white" fill="white" />
      </div>

      {/* Pulse ring */}
      <span className="absolute right-0 bottom-0 w-14 h-14 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}
