"use client";

import { useState } from "react";
import {
  MessageCircle, Mail, MapPin, Globe, Send, Check,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "393428369444";
const EMAIL = "Profwillgustavo@gmail.com";

export default function ContactPage() {
  const { tr } = useLocale();
  const waMsg = encodeURIComponent(tr.whatsapp.defaultMsg);
  const f = tr.contact.form;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build a WhatsApp message from form data and open WhatsApp
    const msg = `${f.whatsappIntro}:\n\n${f.name}: ${formData.name}\n${f.email}: ${formData.email}\n${f.phone}: ${formData.phone}\n${f.service}: ${formData.service}\n${f.message}: ${formData.message}`;
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setStatus("success");
      window.open(waUrl, "_blank");
    }, 800);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: f ? tr.contact.info.whatsapp : "WhatsApp",
      value: "+39 342 836 9444",
      href: `https://wa.me/${WHATSAPP}?text=${waMsg}`,
    },
    {
      icon: Mail,
      label: tr.contact.info.email,
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: MapPin,
      label: tr.contact.info.location,
      value: tr.contact.info.locationValue,
      href: "https://maps.google.com/?q=Milan+Italy",
    },
    {
      icon: Globe,
      label: tr.contact.info.languages,
      value: tr.contact.info.languagesValue,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-obsidian overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-50/40 to-obsidian" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <img
            src="/images/willian-logo.png"
            alt="Willian Gustavo"
            className="h-20 md:h-24 w-auto object-contain mx-auto mb-6"
          />
          <div className="section-label mb-4">{tr.contact.label}</div>
          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {tr.contact.headline}
          </h1>
          <p className="text-white/50 max-w-xl mx-auto mb-4">{tr.contact.sub}</p>
          <p className="text-gold text-xs tracking-widest uppercase font-semibold">
            {tr.contact.urgency}
          </p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-16 lg:py-24 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Direct CTA */}
            <div className="border border-gold/20 p-6 mb-8">
              <h3
                className="font-display text-lg font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {tr.ctaSection.headline}
              </h3>
              <p className="text-white/50 text-sm mb-5">{tr.ctaSection.sub}</p>
              <a
                href={`https://wa.me/${WHATSAPP}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center mb-3"
              >
                <MessageCircle size={16} />
                {tr.ctaSection.cta1}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="btn-outline-gold w-full justify-center"
              >
                <Mail size={16} />
                {tr.ctaSection.cta2}
              </a>
            </div>

            {/* Contact info */}
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1} flex items-start gap-4 p-4 border border-white/5 ${
                    c.href ? "hover:border-gold/20 transition-colors duration-200 cursor-pointer" : ""
                  }`}
                >
                  <div className="w-9 h-9 border border-gold/30 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-white text-sm font-medium">{c.value}</div>
                  </div>
                </div>
              );

              return c.href ? (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <div key={i}>{inner}</div>
              );
            })}
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="border border-white/5 p-8 reveal">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check size={28} className="text-gold" />
                  </div>
                  <h3
                    className="font-display text-2xl font-semibold text-white mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {f.success}
                  </h3>
                  <p className="text-white/50 text-sm">
                    Willian · {tr.contact.info.locationValue}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                        {f.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-obsidian-50 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="Willian Gustavo"
                      />
                    </div>
                    <div>
                      <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                        {f.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-obsidian-50 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                      {f.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-obsidian-50 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                      placeholder="+39 000 000 0000"
                    />
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                      {f.service}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-obsidian-50 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors"
                    >
                      <option value="" className="bg-obsidian">—</option>
                      {f.services.map((s) => (
                        <option key={s} value={s} className="bg-obsidian">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/40 text-xs tracking-wider uppercase mb-2">
                      {f.message} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-obsidian-50 border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder={f.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                    {status === "sending" ? f.sending : f.send}
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    {tr.contact.info.locationValue} · Profwillgustavo@gmail.com
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
