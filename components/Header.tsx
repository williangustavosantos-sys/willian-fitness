"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";
import { Locale, localeNames } from "@/lib/i18n";

const WHATSAPP = "+393428369444";

export default function Header() {
  const { locale, setLocale, tr } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: tr.nav.home, href: "/" },
    { label: tr.nav.about, href: "/about" },
    { label: tr.nav.services, href: "/services" },
    { label: tr.nav.contact, href: "/contact" },
  ];

  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-obsidian/98 backdrop-blur-md border-b border-white/5 py-1"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

          {/* ── LOGO ── grande e com fundo garantido */}
          <Link href="/" className="flex items-center shrink-0 group">
            {/* Fundo escuro garante o logo dourado sempre visível */}
            <div className="bg-obsidian/80 rounded-sm px-2 py-1">
              <img
                src="/images/logo.png"
                alt="Willian Gustavo Personal Trainer"
                className={`w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                  scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
                }`}
              />
            </div>
          </Link>

          {/* ── NAV DESKTOP ── */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/80 hover:text-white text-xs lg:text-sm tracking-widest uppercase transition-colors duration-200 relative group font-semibold"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* ── DIREITA: idioma + CTA ── */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <div className="flex items-center border border-white/15 overflow-hidden">
              {(Object.keys(localeNames) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-3 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                    locale === l
                      ? "bg-gold text-obsidian"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-3 px-5"
            >
              <MessageCircle size={14} />
              {tr.nav.cta}
            </a>
          </div>

          {/* ── MOBILE: idioma + hamburguer ── */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <div className="flex items-center border border-white/15 overflow-hidden">
              {(Object.keys(localeNames) as Locale[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLocale(l)}
                  className={`px-2 py-1.5 text-[10px] font-bold tracking-wider uppercase transition-all ${
                    locale === l ? "bg-gold text-obsidian" : "text-white/50"
                  }`}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>
            <button
              className="text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── MENU MOBILE ── */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
          <img
            src="/images/logo.png"
            alt="Willian Gustavo"
            className="h-16 w-auto object-contain"
          />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/60 hover:text-white p-1"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-6 gap-0 flex-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-2xl font-display font-semibold tracking-wide border-b border-white/5 py-5 hover:text-gold transition-colors"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-10 pt-6">
          <a
            href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold justify-center w-full text-sm py-4"
            onClick={() => setMenuOpen(false)}
          >
            <MessageCircle size={18} />
            {tr.nav.cta}
          </a>
        </div>
      </div>
    </>
  );
}
