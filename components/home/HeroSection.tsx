"use client";

import { ArrowDown, MessageCircle, ChevronRight, Star } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "+393428369444";

export default function HeroSection() {
  const { tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);
  const heroStats = tr.stats.items.slice(0, 3);
  const locationShort = tr.contact.info.locationValue.replace(", ", " · ");

  return (
    <section className="relative min-h-screen flex overflow-hidden bg-obsidian">

      {/* ── LEFT PANEL — text content (pure dark, no overlap with photo) ── */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 lg:w-[52%] px-6 sm:px-10 lg:px-16 xl:px-24 pt-32 pb-20 md:pt-28 md:pb-16 bg-obsidian">

        {/* Subtle left accent line */}
        <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-gold" />
          <span className="text-gold text-[11px] font-semibold tracking-[0.2em] uppercase">
            {tr.hero.badge}
          </span>
        </div>

        {/* Question — the hook */}
        <p
          className="text-white/40 text-sm sm:text-base font-light tracking-wide mb-4 italic"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {tr.hero.question}
        </p>

        {/* Main headline */}
        <h1
          className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="text-white">{tr.hero.headline1}</span>
          <br />
          <span className="text-white">{tr.hero.headline2}</span>
          <br />
          <span className="text-gold-shimmer">{tr.hero.headline3}</span>
        </h1>

        {/* Gold divider */}
        <div className="w-12 h-px bg-gold mb-6" />

        {/* Sub */}
        <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-3 max-w-md">
          {tr.hero.sub}
        </p>

        {/* Social proof */}
        <div className="flex items-center gap-2 mb-10">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={11} className="text-gold fill-gold" />
            ))}
          </div>
          <span className="text-white/35 text-xs tracking-wide">
            {tr.hero.socialProof}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold justify-center sm:justify-start text-sm py-4 px-6"
          >
            <MessageCircle size={16} />
            {tr.hero.cta1}
          </a>
          <a
            href="#transformation"
            className="btn-outline-gold justify-center sm:justify-start text-sm py-4 px-6"
          >
            <ChevronRight size={16} />
            {tr.hero.cta2}
          </a>
        </div>

        {/* Scroll hint */}
        <div className="hidden md:flex items-center gap-3 text-white/25 text-[10px] tracking-[0.2em] uppercase">
          <div className="w-px h-8 bg-white/15" />
          <ArrowDown size={11} />
          <span>{tr.hero.scrollLabel}</span>
        </div>
      </div>

      {/* ── RIGHT PANEL — photo only, no text ── */}
      <div className="hidden md:block md:w-1/2 lg:w-[48%] relative flex-shrink-0">
        {/* Photo */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundPosition: "top center",
          }}
        />
        {/* Left edge fade — blends into dark panel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,1) 0%, rgba(10,10,10,0.1) 18%, transparent 40%)",
          }}
        />
        {/* Bottom fade into page */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 100%)",
          }}
        />
        {/* Stats card — bottom right */}
        <div className="absolute bottom-10 right-6 xl:right-10 z-10">
          <div className="border border-white/10 bg-black/60 backdrop-blur-md p-5 w-52">
            <div className="w-6 h-px bg-gold mb-4" />
            <div className="space-y-4">
              {heroStats.map((s) => (
                <div key={s.value} className="flex items-baseline gap-3">
                  <span
                    className="text-2xl font-bold text-gold leading-none"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.value}
                  </span>
                  <span className="text-white/45 text-xs leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="gold-divider mt-4" />
            <p className="text-white/20 text-[9px] tracking-widest uppercase mt-2">
              {locationShort}
            </p>
          </div>
        </div>
      </div>

      {/* ── MOBILE — photo as background with heavy bottom overlay ── */}
      <div
        className="absolute inset-0 md:hidden bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundPosition: "top center",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.75) 40%, rgba(10,10,10,0.97) 75%, rgba(10,10,10,1) 100%)",
        }}
      />
    </section>
  );
}
