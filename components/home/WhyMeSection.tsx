"use client";

import Link from "next/link";
import { Check, Quote } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

export default function WhyMeSection() {
  const { tr } = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-obsidian-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="section-label reveal mb-4">{tr.whyMe.label}</div>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 reveal reveal-delay-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {tr.whyMe.headline}
            </h2>
            <p className="text-white/50 mb-10 reveal reveal-delay-2">
              {tr.whyMe.sub}
            </p>

            {/* Quote */}
            <div className="border-l-2 border-gold pl-6 mb-10 reveal reveal-delay-3">
              <Quote size={20} className="text-gold mb-3 opacity-60" />
              <p
                className="text-white/70 text-lg italic leading-relaxed font-display"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {tr.whyMe.quote}
              </p>
              <p className="text-gold text-sm mt-3 font-semibold tracking-wide">
                — Willian Gustavo
              </p>
            </div>

            <Link href="/contact" className="btn-gold reveal reveal-delay-4">
              {tr.whyMe.cta}
            </Link>
          </div>

          {/* Right — checklist */}
          <div>
            <ul className="space-y-0 divide-y divide-white/5">
              {tr.whyMe.items.map((item, i) => (
                <li
                  key={i}
                  className={`reveal reveal-delay-${(i % 4) + 1} flex items-start gap-4 py-4 group`}
                >
                  <div className="w-6 h-6 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-200">
                    <Check size={12} className="text-gold" />
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors duration-200 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
