"use client";

import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "393428369444";
const EMAIL = "Profwillgustavo@gmail.com";
const INSTAGRAM = "https://www.instagram.com/willian.personaltrainer/";

const copy = {
  pt: { tagline: "Treino de verdade para a vida real.", nav: "Explore", contact: "Contato", links: [["Conteúdo", "/#conteudo"], ["Consultoria", "/#consultoria"], ["Método", "/#metodo"], ["Sobre", "/#sobre"], ["Parcerias", "/#parcerias"]], location: "Milão, Itália · atendimento online", rights: "Todos os direitos reservados." },
  en: { tagline: "Real training for real life.", nav: "Explore", contact: "Contact", links: [["Content", "/#conteudo"], ["Coaching", "/#consultoria"], ["Method", "/#metodo"], ["About", "/#sobre"], ["Partnerships", "/#parcerias"]], location: "Milan, Italy · online coaching", rights: "All rights reserved." },
  it: { tagline: "Allenamento vero per la vita reale.", nav: "Esplora", contact: "Contatti", links: [["Contenuti", "/#conteudo"], ["Consulenza", "/#consultoria"], ["Metodo", "/#metodo"], ["Chi sono", "/#sobre"], ["Partnership", "/#parcerias"]], location: "Milano, Italia · consulenza online", rights: "Tutti i diritti riservati." },
} as const;

export default function Footer() {
  const { locale } = useLocale();
  const c = copy[locale] ?? copy.pt;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#060811] px-5 pb-8 pt-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-[1.2fr_.7fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center">
            <img src="/images/willian-logo.png" alt="Willian Personal Trainer" className="h-16 w-auto object-contain sm:h-20" />
          </Link>
          <p className="mt-6 max-w-sm text-lg font-bold text-white/60">{c.tagline}</p>
          <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-white/35"><MapPin size={15} className="text-[#ff593d]" /> {c.location}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[.18em] text-white/35">{c.nav}</h3>
          <nav className="mt-5 flex flex-col gap-3">
            {c.links.map(([label, href]) => <Link key={href} href={href} className="group flex w-fit items-center gap-2 text-sm font-bold text-white/60 transition-colors hover:text-[#b8ff31]">{label}<ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" /></Link>)}
          </nav>
        </div>
        <div>
          <h3 className="text-[10px] font-black uppercase tracking-[.18em] text-white/35">{c.contact}</h3>
          <div className="mt-5 flex flex-col gap-3">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-white/60 transition-colors hover:text-[#b8ff31]"><MessageCircle size={17} /> +39 342 836 9444</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all text-sm font-bold text-white/60 transition-colors hover:text-[#b8ff31]"><Mail size={17} /> {EMAIL}</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold text-white/60 transition-colors hover:text-[#b8ff31]"><Camera size={17} /> @willian.personaltrainer</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-2 border-t border-white/10 pt-7 text-[10px] font-semibold uppercase tracking-[.1em] text-white/25 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Willian Gustavo dos Santos.</p>
        <p>{c.rights}</p>
      </div>
    </footer>
  );
}
