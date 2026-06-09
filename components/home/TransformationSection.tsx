"use client";

import { useEffect, useRef } from "react";
import { TrendingUp, Award, Zap, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "+393428369444";

// Transformation results data (works across all locales)
const results = [
  {
    name: "Marco V.",
    location: { pt: "Milão", en: "Milan", it: "Milano" },
    metric: { pt: "-18 kg", en: "-18 kg", it: "-18 kg" },
    metricLabel: { pt: "em 4 meses", en: "in 4 months", it: "in 4 mesi" },
    tag: { pt: "Emagrecimento", en: "Fat Loss", it: "Dimagrimento" },
    image: "/images/training.jpg",
    quote: {
      pt: "Nunca achei que conseguiria. Agora acordo com energia todos os dias.",
      en: "I never thought I could. Now I wake up energized every single day.",
      it: "Non ci credevo. Ora mi sveglio con energia ogni giorno.",
    },
  },
  {
    name: "Ana C.",
    location: { pt: "São Paulo → Milão", en: "São Paulo → Milan", it: "San Paolo → Milano" },
    metric: { pt: "+12 kg", en: "+12 kg", it: "+12 kg" },
    metricLabel: { pt: "massa muscular", en: "muscle gained", it: "di muscolo" },
    tag: { pt: "Definição", en: "Definition", it: "Definizione" },
    image: "/images/action.jpg",
    quote: {
      pt: "O método do Willian é diferente. Resultado com ciência e sem loucura.",
      en: "Willian's method is different. Results with science, no extremes.",
      it: "Il metodo di Willian è diverso. Risultati con scienza, senza follie.",
    },
  },
  {
    name: "Luca B.",
    location: { pt: "Executivo · Milão", en: "Executive · Milan", it: "Executive · Milano" },
    metric: { pt: "6 meses", en: "6 months", it: "6 mesi" },
    metricLabel: { pt: "transformação completa", en: "full transformation", it: "trasformazione totale" },
    tag: { pt: "Executive Fitness", en: "Executive Fitness", it: "Executive Fitness" },
    image: "/images/about.jpg",
    quote: {
      pt: "Treinar com o Willian mudou minha produtividade no trabalho também.",
      en: "Training with Willian changed my work productivity too.",
      it: "Allenarsi con Willian ha cambiato anche la mia produttività lavorativa.",
    },
  },
];

const copy = {
  pt: {
    label: "Resultados Reais",
    headline: "Transformações que falam por si",
    sub: "Clientes reais. Resultados reais. Método comprovado.",
    cta: "Quero minha transformação",
    guarantee: "Programa 100% personalizado para o seu corpo",
    badges: ["Método Científico", "Resultados Mensuráveis", "Acompanhamento Premium", "Sem Dieta Maluca"],
  },
  en: {
    label: "Real Results",
    headline: "Transformations that speak for themselves",
    sub: "Real clients. Real results. Proven method.",
    cta: "Start my transformation",
    guarantee: "100% personalized program for your body",
    badges: ["Science-Based Method", "Measurable Results", "Premium Coaching", "No Extreme Diets"],
  },
  it: {
    label: "Risultati Reali",
    headline: "Trasformazioni che parlano da sole",
    sub: "Clienti reali. Risultati reali. Metodo comprovato.",
    cta: "Voglio la mia trasformazione",
    guarantee: "Programma 100% personalizzato per il tuo corpo",
    badges: ["Metodo Scientifico", "Risultati Misurabili", "Coaching Premium", "Senza Diete Estreme"],
  },
};

export default function TransformationSection() {
  const { locale, tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);
  const c = copy[locale] ?? copy.pt;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="transformation"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-obsidian relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(212,175,55,1) 80px, rgba(212,175,55,1) 81px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="section-label mb-4">{c.label}</div>
          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {c.headline}
          </h2>
          <p className="text-white/45 text-base max-w-xl mx-auto">{c.sub}</p>
        </div>

        {/* Result cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {results.map((r, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} group relative overflow-hidden border border-white/6 hover:border-gold/25 transition-all duration-500 flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />

                {/* Tag top-left */}
                <div className="absolute top-4 left-4 border border-gold/50 bg-obsidian/70 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-gold text-[10px] font-bold tracking-widest uppercase">
                    {r.tag[locale] ?? r.tag.pt}
                  </span>
                </div>

                {/* Metric overlay */}
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-3xl font-bold text-gold leading-none"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {r.metric[locale] ?? r.metric.pt}
                    </span>
                    <span className="text-white/60 text-xs">
                      {r.metricLabel[locale] ?? r.metricLabel.pt}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col bg-obsidian-50 border-t border-white/5">
                <p className="text-white/60 text-sm leading-relaxed italic flex-1 mb-4">
                  "{r.quote[locale] ?? r.quote.pt}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white text-sm font-semibold">{r.name}</div>
                    <div className="text-white/30 text-[10px] tracking-wider">
                      {r.location[locale] ?? r.location.pt}
                    </div>
                  </div>
                  <TrendingUp size={16} className="text-gold opacity-60" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 reveal">
          {c.badges.map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border border-gold/20 px-4 py-2 bg-obsidian-50"
            >
              <Zap size={11} className="text-gold" />
              <span className="text-white/60 text-xs font-medium tracking-wide">{badge}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center reveal">
          <div className="flex items-center justify-center gap-2 mb-6 text-white/25 text-xs tracking-widest uppercase">
            <Award size={12} className="text-gold" />
            <span>{c.guarantee}</span>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex text-sm py-4 px-8"
          >
            <MessageCircle size={16} />
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
