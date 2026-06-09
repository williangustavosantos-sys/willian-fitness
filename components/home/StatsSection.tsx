"use client";

import { useLocale } from "@/lib/LocaleContext";

export default function StatsSection() {
  const { tr } = useLocale();

  return (
    <section className="bg-obsidian-50 border-y border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/30 text-xs tracking-widest uppercase mb-10">
          {tr.stats.title}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
          {tr.stats.items.map((s, i) => (
            <div
              key={i}
              className="reveal bg-obsidian-50 p-8 text-center flex flex-col items-center gap-2"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <span
                className="text-4xl md:text-5xl font-bold text-gold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {s.value}
              </span>
              <span className="text-white/40 text-xs tracking-wider uppercase leading-tight text-center">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
