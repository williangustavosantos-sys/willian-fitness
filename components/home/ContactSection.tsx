"use client";

import { MessageCircle, Mail, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "+393428369444";
const EMAIL = "profwillgustavo@gmail.com";

export default function ContactSection() {
  const { tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);

  return (
    <section className="py-24 lg:py-32 bg-obsidian-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="section-label reveal mb-4">{tr.contact.label}</div>
        <h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-4 reveal reveal-delay-1"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {tr.contact.headline}
        </h2>
        <p className="text-white/50 text-lg mb-12 reveal reveal-delay-2">
          {tr.contact.sub}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 reveal reveal-delay-3">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle size={18} />
            {tr.ctaSection.cta1}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="btn-outline-gold"
          >
            <Mail size={18} />
            {tr.ctaSection.cta2}
          </a>
          <a
            href="/contact"
            className="btn-white"
          >
            {tr.contact.form.send}
            <ArrowRight size={16} />
          </a>
        </div>

        <p className="text-gold/70 text-xs tracking-widest uppercase font-semibold reveal reveal-delay-4">
          {tr.contact.urgency}
        </p>
      </div>
    </section>
  );
}
