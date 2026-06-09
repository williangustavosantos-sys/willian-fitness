"use client";

import Link from "next/link";
import {
  Dumbbell, Globe, Briefcase, Flame, Building2, Lightbulb, ArrowRight,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Globe,
  Briefcase,
  Flame,
  Building2,
  Lightbulb,
};

export default function ServicesSection() {
  const { tr } = useLocale();

  return (
    <section className="py-24 lg:py-32 bg-obsidian-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label reveal mb-4">{tr.services.label}</div>
          <h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-4 reveal reveal-delay-1"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.services.headline}
          </h2>
          <p className="text-white/50 reveal reveal-delay-2">{tr.services.sub}</p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 mb-12">
          {tr.services.items.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Dumbbell;
            return (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 3) + 1} bg-obsidian-50 p-8 card-hover group cursor-default`}
              >
                <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3
                  className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[10px] font-semibold tracking-widest uppercase text-gold/70 border border-gold/20 px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center reveal">
          <Link href="/services" className="btn-outline-gold">
            {tr.services.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
