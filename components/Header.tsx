"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";
import { Locale, localeNames } from "@/lib/i18n";

const WHATSAPP = "393428369444";

const copy = {
  pt: { links: [["Conteúdo", "/#conteudo"], ["Consultoria", "/#consultoria"], ["Método", "/#metodo"], ["Sobre", "/#sobre"], ["Parcerias", "/#parcerias"]], cta: "Vamos conversar" },
  en: { links: [["Content", "/#conteudo"], ["Coaching", "/#consultoria"], ["Method", "/#metodo"], ["About", "/#sobre"], ["Partnerships", "/#parcerias"]], cta: "Let’s talk" },
  it: { links: [["Contenuti", "/#conteudo"], ["Consulenza", "/#consultoria"], ["Metodo", "/#metodo"], ["Chi sono", "/#sobre"], ["Partnership", "/#parcerias"]], cta: "Parliamone" },
} as const;

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const c = copy[locale] ?? copy.pt;
  const message = encodeURIComponent(
    locale === "pt" ? "Olá, Willian! Vi seu site e quero saber mais." : locale === "it" ? "Ciao Willian! Ho visto il tuo sito e vorrei saperne di più." : "Hi Willian! I saw your website and would like to know more."
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#080b16]/90 py-2 shadow-xl backdrop-blur-xl" : "bg-transparent py-4"}`}>
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12 xl:px-20">
          <Link href="/" className="flex items-center text-white" aria-label="Willian Gustavo — início">
            <img
              src="/images/willian-logo.png"
              alt="Willian Personal Trainer"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {c.links.map(([label, href]) => (
              <Link key={href} href={href} className="text-[11px] font-black uppercase tracking-[.13em] text-white/60 transition-colors hover:text-[#b8ff31]">{label}</Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex rounded-full border border-white/15 bg-white/[.04] p-1">
              {(Object.keys(localeNames) as Locale[]).map((item) => (
                <button key={item} onClick={() => setLocale(item)} className={`rounded-full px-2.5 py-1.5 text-[9px] font-black transition-colors ${locale === item ? "bg-white text-[#080b16]" : "text-white/45 hover:text-white"}`} aria-label={`Mudar idioma para ${localeNames[item]}`}>
                  {localeNames[item]}
                </button>
              ))}
            </div>
            <a href={`https://wa.me/${WHATSAPP}?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#b8ff31] px-5 py-3 text-[11px] font-black uppercase tracking-[.08em] text-[#080b16] transition-transform hover:-translate-y-0.5">
              <MessageCircle size={16} /> {c.cta}
            </a>
          </div>

          <button onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[.05] text-white md:hidden" aria-label="Abrir menu" aria-expanded={menuOpen}>
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] bg-[#080b16] px-5 py-5 transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center text-white">
            <img src="/images/willian-logo.png" alt="Willian Personal Trainer" className="h-11 w-auto object-contain" />
          </Link>
          <button onClick={() => setMenuOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white" aria-label="Fechar menu"><X size={22} /></button>
        </div>
        <nav className="mt-14 flex flex-col">
          {c.links.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="group flex items-center justify-between border-b border-white/10 py-5 text-white">
              <span className="display-title text-4xl uppercase">{label}</span>
              <span className="text-xs font-black text-[#b8ff31]">0{index + 1}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex rounded-full border border-white/15 p-1">
            {(Object.keys(localeNames) as Locale[]).map((item) => (
              <button key={item} onClick={() => setLocale(item)} className={`rounded-full px-4 py-2 text-[10px] font-black ${locale === item ? "bg-white text-[#080b16]" : "text-white/45"}`}>{localeNames[item]}</button>
            ))}
          </div>
          <a href={`https://wa.me/${WHATSAPP}?text=${message}`} target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-[#b8ff31] text-[#080b16]" aria-label={c.cta}><MessageCircle size={21} /></a>
        </div>
      </div>
    </>
  );
}
