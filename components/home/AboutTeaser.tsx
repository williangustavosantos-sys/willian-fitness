"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

export default function AboutTeaser() {
  const { tr } = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
            {/* Main image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-50 to-obsidian-100 border border-white/5">
              <img
                src="/images/about.jpg"
                alt="Willian Gustavo - Personal Trainer Milano"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-gold" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-gold/50" />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-obsidian/90 backdrop-blur border border-white/10 p-4">
              <div className="text-gold text-xs tracking-widest uppercase mb-1">
                {tr.contact.info.locationValue}
              </div>
              <div className="text-white text-sm font-semibold">Personal Trainer</div>
              <div className="text-white/40 text-xs">{tr.about.role}</div>
            </div>
          </div>
        </div>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <div className="section-label reveal mb-4">{tr.aboutTeaser.label}</div>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6 reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.aboutTeaser.headline}
          </h2>
          <div className="gold-divider mb-6 reveal reveal-delay-2" />
          <p className="text-white/60 leading-relaxed mb-4 reveal reveal-delay-2">
            {tr.aboutTeaser.p1}
          </p>
          <p className="text-white/60 leading-relaxed mb-8 reveal reveal-delay-3">
            {tr.aboutTeaser.p2}
          </p>

          {/* Credentials */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {tr.aboutTeaser.credentials.map((c, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 reveal reveal-delay-${i + 2}`}
              >
                <Check size={14} className="text-gold shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">{c}</span>
              </li>
            ))}
          </ul>

          <Link href="/about" className="btn-gold reveal reveal-delay-5">
            {tr.aboutTeaser.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
