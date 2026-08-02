"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";
import { Locale, localeNames } from "@/lib/i18n";

const WHATSAPP = "393428369444";
const languageOrder: Locale[] = ["it", "en", "pt"];

const copy = {
  it: { links: [["Soluzioni", "/#soluzioni"], ["Programmi", "/#programmi"], ["Come funziona", "/#come-funziona"], ["Willian", "/#willian"], ["Storie", "/#storie"], ["Milano", "/#milano"]], cta: "Parla con Willian", open: "Apri menu", close: "Chiudi menu" },
  en: { links: [["Solutions", "/#soluzioni"], ["Programs", "/#programmi"], ["How it works", "/#come-funziona"], ["Willian", "/#willian"], ["Stories", "/#storie"], ["Milan", "/#milano"]], cta: "Talk to Willian", open: "Open menu", close: "Close menu" },
  pt: { links: [["Soluções", "/#soluzioni"], ["Programas", "/#programmi"], ["Como funciona", "/#come-funziona"], ["Willian", "/#willian"], ["Histórias", "/#storie"], ["Milão", "/#milano"]], cta: "Falar com Willian", open: "Abrir menu", close: "Fechar menu" },
} as const;

export default function Header() {
  const { locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const c = copy[locale] ?? copy.it;
  const message = encodeURIComponent(locale === "it" ? "Ciao Willian, ho visto il tuo sito. Vorrei raccontarti il mio obiettivo." : locale === "en" ? "Hi Willian, I saw your website. I’d like to tell you about my goal." : "Olá, Willian. Vi seu site e quero contar meu objetivo.");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${scrolled ? "border-[#334155] bg-[#111827]/95 backdrop-blur-md" : "border-transparent bg-transparent"}`}>
        <div className="mx-auto flex h-[76px] max-w-[82rem] items-center justify-between gap-5 px-4 sm:px-6 lg:px-12">
          <Link href="/" className="flex items-center" aria-label="Willian Personal Trainer">
            <img src="/images/willian-logo.png" alt="Willian Personal Trainer" className="h-9 w-auto object-contain sm:h-10" />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {c.links.map(([label, href]) => <Link key={href} href={href} className="text-[12px] font-semibold text-[#CBD5E1] transition-colors hover:text-[#F8FAFC]">{label}</Link>)}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex rounded-full border border-[#334155] bg-[#111827]/70 p-1" aria-label="Languages">
              {languageOrder.map((item) => <button key={item} onClick={() => setLocale(item)} className={`rounded-full px-2.5 py-1.5 text-[10px] font-bold transition-colors ${locale === item ? "bg-[#F8FAFC] text-[#111827]" : "text-[#CBD5E1] hover:text-white"}`} aria-label={`Language ${localeNames[item]}`}>{localeNames[item]}</button>)}
            </div>
            <a href={`https://wa.me/${WHATSAPP}?text=${message}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#C8FF3D] px-4 text-[12px] font-extrabold text-[#111827] transition-colors hover:bg-[#B4F52E]"><MessageCircle size={16} /> {c.cta}</a>
          </div>

          <button onClick={() => setMenuOpen(true)} className="grid h-11 w-11 place-items-center rounded-full border border-[#334155] bg-[#111827]/70 text-white md:hidden" aria-label={c.open} aria-expanded={menuOpen}><Menu size={21} /></button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[60] bg-[#111827] px-4 py-4 transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`} aria-hidden={!menuOpen}>
        <div className="flex h-[60px] items-center justify-between">
          <Link href="/" onClick={() => setMenuOpen(false)}><img src="/images/willian-logo.png" alt="Willian Personal Trainer" className="h-9 w-auto" /></Link>
          <button onClick={() => setMenuOpen(false)} className="grid h-11 w-11 place-items-center rounded-full border border-[#334155] text-white" aria-label={c.close}><X size={21} /></button>
        </div>
        <nav className="mt-10 flex flex-col">
          {c.links.map(([label, href], index) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border-b border-[#334155] py-5 text-2xl font-bold text-white"><span>{label}</span><span className="text-[10px] text-[#B794F6]">0{index + 1}</span></Link>)}
        </nav>
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex rounded-full border border-[#334155] p-1">{languageOrder.map((item) => <button key={item} onClick={() => setLocale(item)} className={`rounded-full px-4 py-2 text-[10px] font-bold ${locale === item ? "bg-white text-[#111827]" : "text-[#CBD5E1]"}`} aria-label={`Language ${localeNames[item]}`}>{localeNames[item]}</button>)}</div>
          <a href={`https://wa.me/${WHATSAPP}?text=${message}`} target="_blank" rel="noopener noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-[#C8FF3D] text-[#111827]" aria-label={c.cta}><MessageCircle size={20} /></a>
        </div>
      </div>
    </>
  );
}
