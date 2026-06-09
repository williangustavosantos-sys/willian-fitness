"use client";

import { Star } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

export default function TestimonialsSection() {
  const { tr } = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label reveal mb-4">{tr.testimonials.label}</div>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.testimonials.headline}
          </h2>
          <p className="text-white/50 reveal reveal-delay-2">{tr.testimonials.sub}</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {tr.testimonials.items.map((t, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} bg-obsidian p-8 card-hover group`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={12} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Result badge */}
              <div className="inline-block bg-gold/10 border border-gold/20 text-gold text-xs font-bold tracking-widest uppercase px-3 py-1.5 mb-5">
                {t.result}
              </div>

              {/* Text */}
              <p className="text-white/60 text-sm leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/5 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/20 border border-gold/30 flex items-center justify-center rounded-full">
                  <span className="text-gold font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
