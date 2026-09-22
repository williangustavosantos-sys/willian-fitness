import Link from "next/link";

export const metadata = {
  title: "Willian | Willian Fitness",
  description: "Conosci Willian, Personal Trainer a Milano e online.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-[#111827] px-4 pb-24 pt-32 text-[#F8FAFC] sm:px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Willian Fitness</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-[.95] sm:text-6xl">
          Allenamento costruito intorno alla vita reale.
        </h1>
        <div className="mt-10 grid gap-10 text-lg leading-8 text-[#CBD5E1] md:grid-cols-2">
          <div>
            <p>
              Sono Willian, Personal Trainer brasiliano con base a Milano. Il mio lavoro parte da un principio semplice:
              il programma deve adattarsi alla persona, ai suoi orari e ai suoi obiettivi.
            </p>
            <p className="mt-5">
              La mia formazione in Scienze Motorie e l'esperienza nel settore fitness mi permettono di combinare tecnica,
              progressione e praticità, sia nel lavoro individuale a Milano sia nei percorsi online.
            </p>
          </div>
          <div className="rounded-3xl border border-[#334155] bg-[#1B2535] p-7">
            <h2 className="text-2xl font-black">Il metodo</h2>
            <p className="mt-4">
              Sessioni focalizzate, esercizi scelti con criterio, controllo dell'esecuzione e un piano sostenibile.
              Nessun allenamento standard copiato e incollato.
            </p>
            <Link href="/services" className="mt-7 inline-flex rounded-full bg-[#C8FF3D] px-5 py-3 text-sm font-extrabold text-[#111827]">
              Scopri i servizi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
