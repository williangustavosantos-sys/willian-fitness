"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function MethodSection() {
  const { tr } = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="section-label reveal mb-4">{tr.method.label}</div>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.method.headline}
          </h2>
          <p className="text-white/50 reveal reveal-delay-2">{tr.method.sub}</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {tr.method.steps.map((step, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${(i % 3) + 1} relative p-8 border border-white/5 group hover:border-gold/20 transition-all duration-300`}
            >
              {/* Number */}
              <div
                className="text-6xl font-bold text-white/5 group-hover:text-gold/10 transition-colors duration-300 mb-4 leading-none"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {step.num}
              </div>
              {/* Gold accent line */}
              <div className="w-8 h-px bg-gold mb-4" />
              <h3
                className="font-display text-lg font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
