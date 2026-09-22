import Link from "next/link";

export const metadata = {
  title: "Servizi | Willian Fitness",
  description: "Personal training a Milano e coaching online costruiti intorno alla tua routine.",
};

const services = [
  {
    title: "Personal Training a Milano",
    text: "Sessioni 1:1 con programmazione personalizzata, correzione tecnica e progressione costruita sui tuoi obiettivi.",
  },
  {
    title: "Coaching online",
    text: "Programmazione, monitoraggio e adattamenti da remoto per chi viaggia, lavora molto o vuole allenarsi con maggiore autonomia.",
  },
  {
    title: "Sessioni efficienti",
    text: "Allenamenti da 20, 30 o 45 minuti quando il tempo è limitato, senza sacrificare qualità e struttura.",
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-[#111827] px-4 pb-24 pt-32 text-[#F8FAFC] sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Servizi</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[.95] sm:text-6xl">
          Un programma che segue la tua routine.
        </h1>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#334155] bg-[#1B2535] p-7">
              <h2 className="text-2xl font-black">{item.title}</h2>
              <p className="mt-4 leading-7 text-[#CBD5E1]">{item.text}</p>
            </article>
          ))}
        </div>
        <Link href="/contact" className="mt-10 inline-flex rounded-full bg-[#C8FF3D] px-6 py-3 text-sm font-extrabold text-[#111827]">
          Parla con Willian
        </Link>
      </div>
    </section>
  );
}
