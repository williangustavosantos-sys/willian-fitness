import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Willian Fitness",
  description: "Privacy Policy del sito Willian Fitness.",
};

export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-[#111827] px-4 pb-24 pt-32 text-[#F8FAFC] sm:px-6 lg:px-12">
      <article className="mx-auto max-w-4xl">
        <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#B794F6]">Legal</p>
        <h1 className="mt-4 text-4xl font-black uppercase sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#CBD5E1]/70">Ultimo aggiornamento: 22 settembre 2026</p>
        <div className="mt-10 space-y-8 leading-7 text-[#CBD5E1]">
          <section>
            <h2 className="text-xl font-black text-white">1. Titolare del trattamento</h2>
            <p className="mt-2">Per le finalità di questo sito, il titolare del trattamento è Willian Gustavo dos Santos. Contatto: Profwillgustavo@gmail.com.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">2. Dati trattati</h2>
            <p className="mt-2">Il sito può trattare dati tecnici necessari al funzionamento e dati che scegli di comunicare volontariamente tramite email, WhatsApp o altri canali di contatto. Non viene richiesta la creazione di un account per consultare il sito.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">3. Finalità</h2>
            <p className="mt-2">I dati sono utilizzati per rispondere alle richieste, fornire informazioni sui servizi di Personal Training e coaching, gestire rapporti professionali e mantenere la sicurezza e il corretto funzionamento del sito.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">4. Integrazioni social</h2>
            <p className="mt-2">Quando vengono utilizzate integrazioni con piattaforme social, incluso TikTok, l'accesso avviene solo dopo autorizzazione esplicita dell'utente e nei limiti delle autorizzazioni concesse. Ogni creator collega e autorizza il proprio account. Le integrazioni non vengono utilizzate per accedere ad account non autorizzati o per automatizzare interazioni non richieste. L'autorizzazione può essere revocata attraverso le impostazioni del servizio collegato.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">5. Fornitori esterni</h2>
            <p className="mt-2">Il sito può utilizzare servizi di hosting e collegamenti a piattaforme terze, tra cui Vercel, WhatsApp, Instagram e TikTok. Quando interagisci con tali servizi si applicano anche le rispettive informative privacy.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">6. Conservazione</h2>
            <p className="mt-2">I dati vengono conservati solo per il tempo necessario alla finalità per cui sono stati raccolti, salvo obblighi legali o necessità di tutela di diritti.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">7. Diritti</h2>
            <p className="mt-2">Se applicabile ai sensi del GDPR, puoi chiedere accesso, rettifica, cancellazione, limitazione, portabilità o opposizione al trattamento e puoi revocare il consenso quando il trattamento si basa sul consenso. Puoi inoltre proporre reclamo all'autorità di controllo competente.</p>
          </section>
          <section>
            <h2 className="text-xl font-black text-white">8. Contatti</h2>
            <p className="mt-2">Per richieste relative alla privacy: <a className="underline hover:text-[#C8FF3D]" href="mailto:Profwillgustavo@gmail.com">Profwillgustavo@gmail.com</a>.</p>
          </section>
        </div>
        <Link href="/" className="mt-12 inline-flex text-sm font-bold text-[#C8FF3D]">Torna al sito</Link>
      </article>
    </section>
  );
}
