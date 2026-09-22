import Link from "next/link";

export const metadata = {
  title: "Termini di servizio | Willian Fitness",
  description: "Termini di servizio del sito Willian Fitness.",
};

export default function TermsPage() {
  return (
    <section className="min-h-screen bg-[#111827] px-4 pb-24 pt-32 text-[#F8FAFC] sm:px-6 lg:px-12">
      <article className="mx-auto max-w-4xl">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Legal</p>
        <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Termini di servizio</h1>
        <p className="mt-4 text-sm text-[#CBD5E1]/70">Ultimo aggiornamento: 22 settembre 2026</p>
        <div className="mt-10 space-y-8 leading-7 text-[#CBD5E1]">
          <section>
            <h2 className="text-xl font-black text-white">1. Oggetto</h2>
            <p className="mt-2">Il sito Willian Fitness presenta servizi di Personal Training a Milano, coaching online e contenuti informativi relativi ad allenamento, fitness e benessere.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">2. Informazioni sul fitness</h2>
            <p className="mt-2">I contenuti del sito hanno finalità informative e non sostituiscono diagnosi, consulenza o trattamento medico. Prima di iniziare un programma di esercizio, soprattutto in presenza di condizioni cliniche, è opportuno rivolgersi a un professionista sanitario qualificato.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">3. Servizi e accordi</h2>
            <p className="mt-2">Durata, frequenza, luogo, prezzo, cancellazioni e altre condizioni dei servizi vengono concordati direttamente con il cliente prima dell'inizio del percorso.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">4. Account e piattaforme di terze parti</h2>
            <p className="mt-2">Eventuali integrazioni con piattaforme social richiedono l'autorizzazione dell'utente e restano soggette anche ai termini e alle regole della piattaforma interessata. Ogni creator autorizza esclusivamente il proprio account e può revocare le autorizzazioni attraverso le impostazioni del relativo servizio.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">5. Proprietà intellettuale</h2>
            <p className="mt-2">Salvo diversa indicazione, testi, marchi, elementi grafici, fotografie e materiali originali presenti sul sito appartengono a Willian Fitness o sono utilizzati con autorizzazione. Non possono essere riutilizzati a fini commerciali senza consenso.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">6. Link esterni</h2>
            <p className="mt-2">Il sito può contenere collegamenti a servizi esterni. Willian Fitness non controlla i contenuti o le pratiche dei siti di terze parti.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">7. Modifiche</h2>
            <p className="mt-2">Questi termini possono essere aggiornati quando cambiano i servizi o gli obblighi applicabili. La data di aggiornamento è indicata in questa pagina.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">8. Contatti</h2>
            <p className="mt-2">Per informazioni: <a className="underline hover:text-[#C8FF3D]" href="mailto:Profwillgustavo@gmail.com">Profwillgustavo@gmail.com</a>.</p>
          </section>
        </div>
        <Link href="/" className="mt-12 inline-flex text-sm font-bold text-[#C8FF3D]">Torna al sito</Link>
      </article>
    </section>
  );
}
