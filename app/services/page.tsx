"use client";

import Link from "next/link";
import {
  Dumbbell, Globe, Briefcase, Flame, Building2, Lightbulb,
  MessageCircle, Check, ArrowRight,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "+393428369444";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell, Globe, Briefcase, Flame, Building2, Lightbulb,
};

const serviceDetails = [
  {
    icon: "Dumbbell",
    image: "/images/training.jpg",
    benefits: {
      pt: [
        "Avaliação física completa",
        "Programa 100% personalizado",
        "Progressão inteligente",
        "Técnica apurada",
        "Resultados mensuráveis",
      ],
      en: [
        "Full physical assessment",
        "100% personalized program",
        "Intelligent progression",
        "Refined technique",
        "Measurable results",
      ],
      it: [
        "Valutazione fisica completa",
        "Programma 100% personalizzato",
        "Progressione intelligente",
        "Tecnica accurata",
        "Risultati misurabili",
      ],
    },
  },
  {
    icon: "Globe",
    image: "/images/action.jpg",
    benefits: {
      pt: [
        "Plano de treino personalizado",
        "Suporte via WhatsApp",
        "Check-ins semanais",
        "Ajustes mensais",
        "Disponível globalmente",
      ],
      en: [
        "Custom workout plan",
        "WhatsApp support",
        "Weekly check-ins",
        "Monthly adjustments",
        "Globally available",
      ],
      it: [
        "Piano di allenamento personalizzato",
        "Supporto via WhatsApp",
        "Check-in settimanali",
        "Aggiornamenti mensili",
        "Disponibile globalmente",
      ],
    },
  },
  {
    icon: "Briefcase",
    image: "/images/hero.jpg",
    benefits: {
      pt: [
        "Treinos adaptados à agenda executiva",
        "Foco em energia e produtividade",
        "Estratégia anti-estresse",
        "Flexibilidade máxima",
        "Resultado garantido",
      ],
      en: [
        "Schedule-adapted workouts",
        "Energy and productivity focus",
        "Anti-stress strategy",
        "Maximum flexibility",
        "Guaranteed results",
      ],
      it: [
        "Allenamenti adattati all'agenda executive",
        "Focus su energia e produttività",
        "Strategia anti-stress",
        "Massima flessibilità",
        "Risultato garantito",
      ],
    },
  },
  {
    icon: "Flame",
    image: "/images/about.jpg",
    benefits: {
      pt: [
        "Protocolo de recomposição corporal",
        "Emagrecimento ou ganho de massa",
        "Acompanhamento de evolução",
        "Suporte nutricional estratégico",
        "Transformação real e sustentável",
      ],
      en: [
        "Body recomposition protocol",
        "Fat loss or muscle gain",
        "Progress tracking",
        "Strategic nutritional support",
        "Real, sustainable transformation",
      ],
      it: [
        "Protocollo di ricomposizione corporea",
        "Dimagrimento o aumento massa muscolare",
        "Monitoraggio dell'evoluzione",
        "Supporto nutrizionale strategico",
        "Trasformazione reale e sostenibile",
      ],
    },
  },
  {
    icon: "Building2",
    image: "/images/training.jpg",
    benefits: {
      pt: [
        "Programas para equipes",
        "Workshops de saúde",
        "Melhoria de produtividade",
        "Redução de absenteísmo",
        "Cultura de bem-estar",
      ],
      en: [
        "Team programs",
        "Health workshops",
        "Productivity improvement",
        "Reduced absenteeism",
        "Wellness culture",
      ],
      it: [
        "Programmi per team",
        "Workshop sulla salute",
        "Miglioramento della produttività",
        "Riduzione dell'assenteismo",
        "Cultura del benessere",
      ],
    },
  },
  {
    icon: "Lightbulb",
    image: "/images/profile.jpg",
    benefits: {
      pt: [
        "Diagnóstico de operações",
        "Planejamento estratégico",
        "Análise de programas",
        "Desenvolvimento de equipes",
        "Visão de mercado europeu",
      ],
      en: [
        "Operations diagnosis",
        "Strategic planning",
        "Program analysis",
        "Team development",
        "European market insight",
      ],
      it: [
        "Diagnosi operativa",
        "Pianificazione strategica",
        "Analisi dei programmi",
        "Sviluppo dei team",
        "Visione del mercato europeo",
      ],
    },
  },
];

const serviceInterestCopy = {
  pt: "Olá Willian! Tenho interesse no serviço:",
  en: "Hi Willian! I am interested in this service:",
  it: "Ciao Willian! Sono interessato a questo servizio:",
};

export default function ServicesPage() {
  const { locale, tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-obsidian overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50/40 to-obsidian" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <img
            src="/images/logo.png"
            alt="Willian Gustavo"
            className="h-20 md:h-24 w-auto object-contain mx-auto mb-6"
          />
          <div className="section-label mb-4">{tr.servicesPage.label}</div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.servicesPage.headline}
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">{tr.servicesPage.sub}</p>
        </div>
      </section>

      {/* Service cards — alternating layout */}
      <div className="bg-obsidian">
        {tr.services.items.map((s, i) => {
          const Icon = iconMap[s.icon] ?? Dumbbell;
          const detail = serviceDetails[i];
          const isEven = i % 2 === 0;

          return (
            <section
              key={i}
              className={`py-20 lg:py-28 ${isEven ? "bg-obsidian" : "bg-obsidian-50"}`}
            >
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <div className={`reveal ${isEven ? "order-1" : "order-1 lg:order-2"}`}>
                  <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
                    <img
                      src={detail.image}
                      alt={s.title}
                      className="w-full h-full object-cover opacity-70"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                    {/* Service number */}
                    <div className="absolute top-4 left-4 border border-gold/40 px-3 py-1.5 text-gold text-xs font-bold tracking-widest uppercase">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                  <div className="flex items-center gap-3 mb-5 reveal">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <span className="text-gold text-xs tracking-widest uppercase font-semibold">
                      {s.tags.join(" · ")}
                    </span>
                  </div>
                  <h2
                    className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 reveal reveal-delay-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.title}
                  </h2>
                  <p className="text-white/60 leading-relaxed mb-7 reveal reveal-delay-2">
                    {s.desc}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {detail.benefits[locale].map((b, j) => (
                      <li key={j} className={`reveal reveal-delay-${j + 2} flex items-start gap-3`}>
                        <Check size={13} className="text-gold shrink-0 mt-0.5" />
                        <span className="text-white/60 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                      `${serviceInterestCopy[locale]} ${s.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold reveal reveal-delay-5"
                  >
                    <MessageCircle size={16} />
                    {tr.nav.cta}
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-gold text-center px-6">
        <h3
          className="font-display text-3xl md:text-4xl font-semibold text-obsidian mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {tr.ctaSection.headline}
        </h3>
        <p className="text-obsidian/60 mb-8">{tr.ctaSection.sub}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-obsidian text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-obsidian-50 transition-all"
          >
            <MessageCircle size={16} />
            {tr.ctaSection.cta1}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-obsidian text-obsidian px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-obsidian hover:text-white transition-all"
          >
            {tr.hero.cta2}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
