"use client";

import Link from "next/link";
import { ArrowUpRight, Camera, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "393428369444";
const EMAIL = "Profwillgustavo@gmail.com";
const INSTAGRAM = "https://www.instagram.com/willian.personaltrainer/";

const copy = {
  it: { tagline: "Allenamento costruito per la vita reale.", nav: "Esplora", contact: "Contatti", links: [["Soluzioni", "/#soluzioni"], ["Programmi", "/#programmi"], ["Storie reali", "/#storie"], ["Instagram", "/#instagram"], ["FAQ", "/#faq"]], location: "Milano, Italia · programmi online", rights: "Tutti i diritti riservati." },
  en: { tagline: "Training built around real life.", nav: "Explore", contact: "Contact", links: [["Solutions", "/#soluzioni"], ["Programs", "/#programmi"], ["Real stories", "/#storie"], ["Instagram", "/#instagram"], ["FAQ", "/#faq"]], location: "Milan, Italy · online programs", rights: "All rights reserved." },
  pt: { tagline: "Treino construído para a vida real.", nav: "Explore", contact: "Contato", links: [["Soluções", "/#soluzioni"], ["Programas", "/#programmi"], ["Histórias reais", "/#storie"], ["Instagram", "/#instagram"], ["FAQ", "/#faq"]], location: "Milão, Itália · programas online", rights: "Todos os direitos reservados." },
} as const;

export default function Footer() {
  const { locale } = useLocale();
  const c = copy[locale] ?? copy.it;

  return (
    <footer className="border-t border-[#334155] bg-[#111827] px-4 pb-8 pt-16 text-white sm:px-6 lg:px-12">
      <div className="mx-auto grid max-w-[82rem] gap-12 lg:grid-cols-[1.2fr_.7fr_1fr]">
        <div>
          <Link href="/" className="inline-flex"><img src="/images/willian-logo.png" alt="Willian Personal Trainer" className="h-14 w-auto" /></Link>
          <p className="mt-6 max-w-sm text-lg text-[#CBD5E1]">{c.tagline}</p>
          <p className="mt-5 flex items-center gap-2 text-xs text-[#CBD5E1]/60"><MapPin size={15} className="text-[#B794F6]" /> {c.location}</p>
        </div>
        <div>
          <h3 className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#B794F6]">{c.nav}</h3>
          <nav className="mt-5 flex flex-col gap-3">{c.links.map(([label, href]) => <Link key={href} href={href} className="group flex w-fit items-center gap-2 text-sm font-semibold text-[#CBD5E1] transition-colors hover:text-[#C8FF3D]">{label}<ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" /></Link>)}</nav>
        </div>
        <div>
          <h3 className="text-[10px] font-extrabold uppercase tracking-[.16em] text-[#B794F6]">{c.contact}</h3>
          <div className="mt-5 flex flex-col gap-3">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold text-[#CBD5E1] hover:text-[#C8FF3D]"><MessageCircle size={17} /> +39 342 836 9444</a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 break-all text-sm font-semibold text-[#CBD5E1] hover:text-[#C8FF3D]"><Mail size={17} /> {EMAIL}</a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-semibold text-[#CBD5E1] hover:text-[#C8FF3D]"><Camera size={17} /> @willian.personaltrainer</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[82rem] flex-col gap-2 border-t border-[#334155] pt-7 text-[10px] uppercase tracking-[.08em] text-[#CBD5E1]/45 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Willian Gustavo dos Santos.</p><p>{c.rights}</p></div>
    </footer>
  );
}
