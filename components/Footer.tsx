"use client";

import Link from "next/link";
import { MessageCircle, Mail, MapPin, Camera } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "+393428369444";
const EMAIL = "profwillgustavo@gmail.com";

export default function Footer() {
  const { tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);
  const year = new Date().getFullYear();

  const linkHrefs = ["/", "/about", "/services", "/contact"];

  return (
    <footer className="bg-obsidian-100 border-t border-white/5">
      {/* CTA Band */}
      <div className="bg-gold py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src="/images/logo.png"
            alt="Willian Gustavo"
            className="h-16 w-auto object-contain mx-auto mb-4 brightness-0"
          />
          <h3
            className="text-obsidian font-display text-3xl md:text-4xl font-semibold mb-3"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.ctaSection.headline}
          </h3>
          <p className="text-obsidian/70 mb-8 text-sm">{tr.ctaSection.sub}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-obsidian text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all hover:bg-obsidian-50"
            >
              <MessageCircle size={16} />
              {tr.ctaSection.cta1}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-obsidian text-obsidian px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all hover:bg-obsidian hover:text-white"
            >
              <Mail size={16} />
              {tr.ctaSection.cta2}
            </a>
          </div>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <img
            src="/images/logo.png"
            alt="Willian Gustavo Personal Trainer"
            className="h-20 w-auto object-contain mb-3"
          />
          <p className="text-white/40 text-xs tracking-wider uppercase mb-4">
            {tr.footer.tagline}
          </p>
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6">
            <MapPin size={14} className="text-gold shrink-0" />
            {tr.footer.location}
          </div>
          <div className="flex gap-4">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all"
            >
              <Camera size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white/50 text-xs tracking-widest uppercase mb-5 font-semibold">
            {tr.footer.links.title}
          </h4>
          <ul className="flex flex-col gap-3">
            {tr.footer.links.items.map((item, i) => (
              <li key={i}>
                <Link
                  href={linkHrefs[i]}
                  className="text-white/50 hover:text-gold text-sm transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white/50 text-xs tracking-widest uppercase mb-5 font-semibold">
            {tr.footer.contact.title}
          </h4>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold text-sm transition-colors"
              >
                +39 342 836 9444
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="text-white/50 hover:text-gold text-sm transition-colors break-all"
              >
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/40 text-sm">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              {tr.contact.info.locationValue}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            © {year} Willian Gustavo dos Santos. {tr.footer.rights}
          </p>
          <p className="text-white/15 text-xs">
            {tr.contact.info.locationValue}
          </p>
        </div>
      </div>
    </footer>
  );
}
