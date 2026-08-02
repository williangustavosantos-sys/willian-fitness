"use client";

import Link from "next/link";
import { Check, Award, ArrowRight, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "393428369444";

export default function AboutPage() {
  const { tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-obsidian overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50/50 to-obsidian" />
        {/* Decorative lines */}
        <div className="absolute top-32 left-0 right-0 flex justify-center gap-px pointer-events-none">
          {Array(7).fill(0).map((_, i) => (
            <div key={i} className="w-px h-32 bg-gradient-to-b from-gold/20 to-transparent" />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <img
            src="/images/willian-logo.png"
            alt="Willian Gustavo"
            className="h-20 md:h-24 w-auto object-contain mx-auto mb-6"
          />
          <div className="section-label mb-4">{tr.about.label}</div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.about.headline}
          </h1>
          <p className="text-gold/80 text-sm tracking-wider uppercase font-semibold">
            {tr.about.role}
          </p>
        </div>
      </section>

      {/* Bio + Image */}
      <section className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* Image */}
          <div className="reveal relative">
            <div className="aspect-[3/4] relative max-w-sm mx-auto">
              <img
                src="/images/profile.jpg"
                alt="Willian Gustavo - Personal Trainer"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 border-b-2 border-r-2 border-gold w-24 h-24" />
              <div className="absolute -top-6 -left-6 border-t-2 border-l-2 border-gold/40 w-16 h-16" />
            </div>
          </div>

          {/* Bio */}
          <div>
            {tr.about.bio.map((para, i) => (
              <p
                key={i}
                className={`text-white/65 leading-relaxed mb-5 reveal reveal-delay-${i + 1}`}
              >
                {para}
              </p>
            ))}

            <div className="gold-divider my-8 reveal" />

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="reveal reveal-delay-2 border border-white/5 p-5">
                <div className="text-gold text-xs tracking-widest uppercase font-semibold mb-2">
                  {tr.about.mission.label}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {tr.about.mission.text}
                </p>
              </div>
              <div className="reveal reveal-delay-3 border border-white/5 p-5">
                <div className="text-gold text-xs tracking-widest uppercase font-semibold mb-2">
                  {tr.about.vision.label}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {tr.about.vision.text}
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="btn-gold reveal reveal-delay-4"
            >
              {tr.about.cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-obsidian-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="section-label reveal mb-4">{tr.about.values.label}</div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {tr.about.values.items.map((v, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} border border-gold/20 px-6 py-3 text-gold text-sm font-semibold tracking-wider uppercase flex items-center gap-2 hover:border-gold hover:bg-gold/5 transition-all duration-200`}
              >
                <Check size={14} />
                {v}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-label reveal mb-4">{tr.about.credentials.label}</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {tr.about.credentials.items.map((c, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-obsidian p-8 flex items-start gap-4 group hover:border-gold/20 border border-transparent transition-all duration-200`}
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-200">
                  <Award size={16} className="text-gold" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1 group-hover:text-gold transition-colors duration-200">
                    {c.title}
                  </div>
                  <div className="text-white/40 text-xs">{c.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold text-center px-6">
        <h3
          className="font-display text-3xl md:text-4xl font-semibold text-obsidian mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {tr.ctaSection.headline}
        </h3>
        <p className="text-obsidian/60 mb-8">{tr.ctaSection.sub}</p>
        <a
          href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-obsidian text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-all hover:bg-obsidian-50"
        >
          <MessageCircle size={16} />
          {tr.ctaSection.cta1}
        </a>
      </section>
    </>
  );
}
