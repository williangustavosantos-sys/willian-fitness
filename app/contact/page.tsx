import Link from "next/link";

export const metadata = {
  title: "Contatti | Willian Fitness",
  description: "Contatta Willian per Personal Training a Milano o coaching online.",
};

const WHATSAPP = "393428369444";
const EMAIL = "Profwillgustavo@gmail.com";
const INSTAGRAM = "https://www.instagram.com/willian.personaltrainer/";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#111827] px-4 pb-24 pt-32 text-[#F8FAFC] sm:px-6 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Contatti</p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-[.95] sm:text-6xl">Parliamo del tuo obiettivo.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[#CBD5E1]">
          Per Personal Training a Milano, coaching online o collaborazioni professionali puoi contattarmi direttamente.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#334155] bg-[#1B2535] p-5 font-bold hover:border-[#C8FF3D]">WhatsApp</a>
          <a href={`mailto:${EMAIL}`} className="rounded-2xl border border-[#334155] bg-[#1B2535] p-5 font-bold hover:border-[#C8FF3D]">Email</a>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="rounded-2xl border border-[#334155] bg-[#1B2535] p-5 font-bold hover:border-[#C8FF3D]">Instagram</a>
        </div>
        <p className="mt-10 text-sm text-[#CBD5E1]/70">
          Per informazioni sul trattamento dei dati consulta la <Link className="underline hover:text-[#C8FF3D]" href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
    </section>
  );
}
