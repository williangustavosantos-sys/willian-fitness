"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronRight,
  CirclePlay,
  Dumbbell,
  Flame,
  Globe2,
  HeartPulse,
  Mail,
  MessageCircle,
  MoveUpRight,
  Play,
  Sparkles,
  Timer,
  Users,
  Zap,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "393428369444";
const EMAIL = "Profwillgustavo@gmail.com";
const INSTAGRAM = "https://www.instagram.com/willian.personaltrainer/";

const copy = {
  pt: {
    eyebrow: "Personal trainer brasileiro em Milão + online",
    headlineA: "TREINO DE",
    headlineB: "VERDADE.",
    headlineC: "PARA A VIDA REAL.",
    heroText:
      "Sem fórmula mágica e sem treino impossível. Eu te ajudo a ganhar força, disposição e confiança com um plano que cabe na sua rotina.",
    consultCta: "Quero minha consultoria",
    seeMethod: "Conhecer o método",
    availability: "Atendimento em português, italiano e inglês",
    heroCard: "COMECE DE ONDE VOCÊ ESTÁ",
    heroCardSub: "O próximo passo pode mudar tudo.",
    stats: [
      ["9+", "anos de experiência"],
      ["500+", "pessoas acompanhadas"],
      ["3", "idiomas no atendimento"],
    ],
    content: {
      label: "Conteúdo que move",
      title: "INFORMAÇÃO SIMPLES. AÇÃO DE VERDADE.",
      text: "Treino, técnica e motivação explicados sem complicação. Conteúdo para você entender o seu corpo e colocar o fitness na vida real.",
      cards: [
        ["TREINO SEM MISTÉRIO", "Execução, erros comuns e exercícios que realmente fazem sentido.", "Técnica"],
        ["DICAS PARA A ROTINA", "Estratégias práticas para treinar mesmo nos dias mais corridos.", "Consistência"],
        ["MENTE EM MOVIMENTO", "Disciplina sem culpa: como construir hábitos que continuam.", "Motivação"],
      ],
      follow: "Novos conteúdos em breve",
      instagramCta: "Seguir no Instagram",
    },
    help: {
      label: "Escolha o seu próximo passo",
      title: "COMO POSSO TE AJUDAR?",
      text: "Você não precisa ter rotina perfeita nem experiência na academia. Precisa de um plano claro e de alguém que acompanhe sua evolução.",
      online: {
        badge: "Mais flexível",
        title: "Consultoria online",
        desc: "Treino personalizado para sua rotina, seu nível e seu objetivo — com acompanhamento próximo, ajustes e suporte direto.",
        bullets: ["Avaliação individual", "Plano de treino personalizado", "Acompanhamento e ajustes", "Treine onde estiver"],
        cta: "Quero saber como funciona",
      },
      inPerson: {
        badge: "Em Milão",
        title: "Personal presencial",
        desc: "Sessões individuais para evoluir com segurança, intensidade certa e atenção total à sua execução.",
        bullets: ["Treino individual", "Correção técnica", "Progressão inteligente", "Motivação ao vivo"],
        cta: "Agendar uma conversa",
      },
      partner: {
        badge: "Marcas & projetos",
        title: "Parcerias que fazem sentido",
        desc: "Conteúdo, campanhas e projetos com marcas que compartilham saúde, movimento e uma comunicação verdadeira.",
        cta: "Propor uma parceria",
      },
    },
    method: {
      label: "Método simples, evolução visível",
      title: "SEU PLANO. SEU RITMO. SUA EVOLUÇÃO.",
      text: "Um processo sem atalhos e sem confusão. Cada etapa existe para fazer você avançar com clareza.",
      steps: [
        ["01", "Conversa", "Entendo sua rotina, seu histórico e o que você quer mudar."],
        ["02", "Plano", "Monto uma estratégia possível, personalizada e objetiva."],
        ["03", "Ação", "Você treina com orientação, técnica e metas claras."],
        ["04", "Evolução", "Acompanhamos o progresso e ajustamos o caminho."],
      ],
    },
    about: {
      label: "Prazer, eu sou o Willian",
      title: "FITNESS PODE SER SÉRIO SEM SER COMPLICADO.",
      p1: "Sou formado em Educação Física e trabalho há mais de 9 anos ajudando pessoas com rotinas, níveis e objetivos diferentes.",
      p2: "Minha missão é traduzir o treino para a vida real: explicar o porquê, adaptar o caminho e mostrar que evolução não é privilégio de atleta — é consequência de constância com direção.",
      chips: ["Ciência sem enrolação", "Energia brasileira", "Acompanhamento humano"],
      cta: "Conheça minha trajetória",
    },
    values: [
      ["Plano possível", "Feito para a sua vida, não para uma rotina imaginária."],
      ["Direção clara", "Você entende o que está fazendo e por que está fazendo."],
      ["Evolução sustentável", "Progresso construído para continuar, sem extremos."],
    ],
    final: {
      eyebrow: "Seu primeiro passo começa aqui",
      titleA: "BORA COLOCAR",
      titleB: "SEU CORPO EM MOVIMENTO?",
      text: "Me conte seu objetivo e sua rotina. Eu te explico o melhor caminho, sem compromisso e sem discurso complicado.",
      primary: "Falar com Willian no WhatsApp",
      partner: "Sou marca e quero conversar",
      note: "Resposta direta do Willian · sem robô",
    },
  },
  en: {
    eyebrow: "Brazilian personal trainer in Milan + online",
    headlineA: "REAL TRAINING.",
    headlineB: "REAL RESULTS.",
    headlineC: "FOR REAL LIFE.",
    heroText: "No magic formula and no impossible workouts. Build strength, energy and confidence with a plan that fits your actual routine.",
    consultCta: "Start online coaching",
    seeMethod: "See the method",
    availability: "Coaching in Portuguese, Italian and English",
    heroCard: "START WHERE YOU ARE",
    heroCardSub: "Your next step can change everything.",
    stats: [["9+", "years of experience"], ["500+", "people coached"], ["3", "coaching languages"]],
    content: {
      label: "Content that moves you",
      title: "SIMPLE INFORMATION. REAL ACTION.",
      text: "Training, technique and motivation without the confusion. Content that helps you understand your body and make fitness part of real life.",
      cards: [["TRAINING MADE CLEAR", "Technique, common mistakes and exercises that make sense.", "Technique"], ["TIPS FOR REAL LIFE", "Practical ways to train even on your busiest days.", "Consistency"], ["MIND IN MOTION", "Discipline without guilt: build habits that last.", "Motivation"]],
      follow: "New content coming soon",
      instagramCta: "Follow on Instagram",
    },
    help: {
      label: "Choose your next step",
      title: "HOW CAN I HELP?",
      text: "You do not need a perfect routine or gym experience. You need a clear plan and someone following your progress.",
      online: { badge: "Most flexible", title: "Online coaching", desc: "A workout plan built around your routine, level and goal — with close follow-up, adjustments and direct support.", bullets: ["Individual assessment", "Personal workout plan", "Follow-up and adjustments", "Train from anywhere"], cta: "See how it works" },
      inPerson: { badge: "In Milan", title: "In-person training", desc: "One-on-one sessions to progress safely, at the right intensity and with full attention to your technique.", bullets: ["One-on-one sessions", "Technique correction", "Smart progression", "Live motivation"], cta: "Book a conversation" },
      partner: { badge: "Brands & projects", title: "Partnerships with purpose", desc: "Content, campaigns and projects for brands that share health, movement and honest communication.", cta: "Propose a partnership" },
    },
    method: { label: "Simple method, visible progress", title: "YOUR PLAN. YOUR PACE. YOUR PROGRESS.", text: "A process without shortcuts or confusion. Every stage exists to help you move forward with clarity.", steps: [["01", "Conversation", "I learn about your routine, history and what you want to change."], ["02", "Plan", "I build a realistic, personal and objective strategy."], ["03", "Action", "You train with guidance, technique and clear targets."], ["04", "Progress", "We track results and adjust the path."]] },
    about: { label: "Hi, I’m Willian", title: "FITNESS CAN BE SERIOUS WITHOUT BEING COMPLICATED.", p1: "I hold a degree in Physical Education and have spent over 9 years helping people with different routines, levels and goals.", p2: "My mission is to translate training into real life: explain why, adapt the path and show that progress is not only for athletes — it comes from consistency with direction.", chips: ["Science made simple", "Brazilian energy", "Human support"], cta: "Meet Willian" },
    values: [["A realistic plan", "Built for your life, not an imaginary routine."], ["Clear direction", "Understand what you are doing and why."], ["Sustainable progress", "Progress designed to last, without extremes."]],
    final: { eyebrow: "Your first step starts here", titleA: "READY TO GET", titleB: "YOUR BODY MOVING?", text: "Tell me about your goal and your routine. I will show you the best path, with no pressure and no complicated talk.", primary: "Message Willian on WhatsApp", partner: "I’m a brand — let’s talk", note: "A direct reply from Willian · no bot" },
  },
  it: {
    eyebrow: "Personal trainer brasiliano a Milano + online",
    headlineA: "ALLENAMENTO VERO.",
    headlineB: "RISULTATI VERI.",
    headlineC: "PER LA VITA REALE.",
    heroText: "Niente formule magiche e niente allenamenti impossibili. Costruisci forza, energia e fiducia con un piano adatto alla tua vera routine.",
    consultCta: "Inizia la consulenza online",
    seeMethod: "Scopri il metodo",
    availability: "Consulenza in portoghese, italiano e inglese",
    heroCard: "INIZIA DA DOVE SEI",
    heroCardSub: "Il prossimo passo può cambiare tutto.",
    stats: [["9+", "anni di esperienza"], ["500+", "persone seguite"], ["3", "lingue disponibili"]],
    content: {
      label: "Contenuti che ti muovono",
      title: "INFORMAZIONI SEMPLICI. AZIONE VERA.",
      text: "Allenamento, tecnica e motivazione senza complicazioni. Contenuti per capire il tuo corpo e portare il fitness nella vita reale.",
      cards: [["ALLENARSI SENZA DUBBI", "Tecnica, errori comuni ed esercizi che hanno davvero senso.", "Tecnica"], ["CONSIGLI PER LA ROUTINE", "Strategie pratiche per allenarti anche nei giorni più pieni.", "Costanza"], ["MENTE IN MOVIMENTO", "Disciplina senza sensi di colpa: crea abitudini che durano.", "Motivazione"]],
      follow: "Nuovi contenuti in arrivo",
      instagramCta: "Seguimi su Instagram",
    },
    help: {
      label: "Scegli il prossimo passo",
      title: "COME POSSO AIUTARTI?",
      text: "Non serve una routine perfetta o esperienza in palestra. Serve un piano chiaro e qualcuno che segua i tuoi progressi.",
      online: { badge: "Più flessibile", title: "Consulenza online", desc: "Un allenamento creato per la tua routine, il tuo livello e il tuo obiettivo — con supporto, verifiche e adattamenti.", bullets: ["Valutazione individuale", "Piano personalizzato", "Supporto e adattamenti", "Allenati ovunque"], cta: "Scopri come funziona" },
      inPerson: { badge: "A Milano", title: "Personal in presenza", desc: "Sessioni individuali per migliorare in sicurezza, con la giusta intensità e attenzione totale alla tecnica.", bullets: ["Sessioni individuali", "Correzione tecnica", "Progressione intelligente", "Motivazione dal vivo"], cta: "Prenota una conversazione" },
      partner: { badge: "Brand & progetti", title: "Partnership che hanno senso", desc: "Contenuti, campagne e progetti con brand che condividono salute, movimento e comunicazione autentica.", cta: "Proponi una partnership" },
    },
    method: { label: "Metodo semplice, progressi visibili", title: "IL TUO PIANO. IL TUO RITMO. LA TUA EVOLUZIONE.", text: "Un processo senza scorciatoie e senza confusione. Ogni fase serve a farti avanzare con chiarezza.", steps: [["01", "Conosciamoci", "Capisco la tua routine, la tua storia e cosa vuoi cambiare."], ["02", "Piano", "Creo una strategia possibile, personale e concreta."], ["03", "Azione", "Ti alleni con guida, tecnica e obiettivi chiari."], ["04", "Evoluzione", "Seguiamo i progressi e adattiamo il percorso."]] },
    about: { label: "Piacere, sono Willian", title: "IL FITNESS PUÒ ESSERE SERIO SENZA ESSERE COMPLICATO.", p1: "Sono laureato in Scienze Motorie e da oltre 9 anni aiuto persone con routine, livelli e obiettivi diversi.", p2: "La mia missione è portare l’allenamento nella vita reale: spiegare il perché, adattare il percorso e dimostrare che l’evoluzione non è solo per gli atleti — nasce dalla costanza con una direzione.", chips: ["Scienza senza complicazioni", "Energia brasiliana", "Supporto umano"], cta: "Scopri la mia storia" },
    values: [["Un piano possibile", "Creato per la tua vita, non per una routine immaginaria."], ["Direzione chiara", "Capisci cosa fai e perché lo fai."], ["Evoluzione sostenibile", "Progressi costruiti per durare, senza estremi."]],
    final: { eyebrow: "Il primo passo inizia qui", titleA: "METTIAMO", titleB: "IL TUO CORPO IN MOVIMENTO?", text: "Raccontami il tuo obiettivo e la tua routine. Ti spiego il percorso migliore, senza impegno e senza discorsi complicati.", primary: "Scrivi a Willian su WhatsApp", partner: "Sono un brand — parliamone", note: "Risposta diretta di Willian · nessun bot" },
  },
} as const;

export default function HomeLanding() {
  const { locale } = useLocale();
  const c = copy[locale] ?? copy.pt;
  const coachingMessage = encodeURIComponent(
    locale === "pt"
      ? "Olá, Willian! Vi seu site e quero entender como funciona a consultoria."
      : locale === "it"
        ? "Ciao Willian! Ho visto il tuo sito e vorrei capire come funziona la consulenza."
        : "Hi Willian! I saw your website and would like to learn about your coaching."
  );
  const partnershipSubject = encodeURIComponent(
    locale === "pt" ? "Proposta de parceria" : locale === "it" ? "Proposta di partnership" : "Partnership proposal"
  );

  return (
    <>
      <section className="hero-new relative min-h-[940px] lg:min-h-[780px] overflow-hidden pt-24">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-orb hero-orb-blue" />
        <div className="hero-orb hero-orb-lime" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1440px] items-center gap-10 px-5 pb-12 pt-12 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:pb-16 lg:pt-8 xl:px-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[11px] font-bold uppercase tracking-[.18em] text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#b8ff31] shadow-[0_0_18px_#b8ff31]" />
              {c.eyebrow}
            </div>

            <h1 className="display-title text-[clamp(4rem,9.5vw,8.8rem)] leading-[.78] tracking-[-.045em] text-white">
              <span className="block">{c.headlineA}</span>
              <span className="block text-stroke-blue">{c.headlineB}</span>
              <span className="mt-2 block text-[#b8ff31]">{c.headlineC}</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-white/65 sm:text-lg lg:text-xl">
              {c.heroText}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${coachingMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric btn-electric-primary"
              >
                <MessageCircle size={19} />
                {c.consultCta}
                <ArrowRight size={18} />
              </a>
              <a href="#metodo" className="btn-electric btn-electric-ghost">
                <CirclePlay size={19} />
                {c.seeMethod}
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-white/45">
              <div className="flex -space-x-2">
                {["PT", "IT", "EN"].map((item) => (
                  <span key={item} className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#080b16] bg-white text-[9px] font-black text-[#080b16]">
                    {item}
                  </span>
                ))}
              </div>
              {c.availability}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[540px] lg:mr-0">
            <div className="hero-photo-frame relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#10162a] p-2">
              <img src="/images/about.jpg" alt="Willian Gustavo, personal trainer" className="h-full w-full rounded-[1.55rem] object-cover object-top" />
              <div className="absolute inset-2 rounded-[1.55rem] bg-gradient-to-t from-[#080b16]/90 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-7 right-7 flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[.2em] text-[#b8ff31]">Willian Gustavo</p>
                  <p className="mt-1 text-sm font-semibold text-white/70">Personal Trainer · Fitness Creator</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 rotate-6 place-items-center rounded-2xl bg-[#ff593d] text-white shadow-[0_12px_40px_rgba(255,89,61,.35)]">
                  <Zap size={24} fill="currentColor" />
                </span>
              </div>
            </div>
            <div className="absolute -left-3 top-[12%] -rotate-6 rounded-2xl bg-[#b8ff31] px-5 py-4 text-[#080b16] shadow-[0_14px_40px_rgba(184,255,49,.18)] sm:-left-12">
              <p className="text-[10px] font-black uppercase tracking-[.14em]">{c.heroCard}</p>
              <p className="mt-1 max-w-[170px] text-xs font-bold opacity-70">{c.heroCardSub}</p>
            </div>
            <div className="absolute -bottom-5 -right-2 grid h-24 w-24 rotate-12 place-items-center rounded-full bg-[#3769ff] text-center text-[11px] font-black uppercase leading-tight text-white shadow-[0_16px_50px_rgba(55,105,255,.38)] sm:-right-8 sm:h-28 sm:w-28">
              <span>
                {locale === "pt" ? <>Mova.<br />Evolua.<br />Repita.</> : locale === "it" ? <>Muoviti.<br />Migliora.<br />Ripeti.</> : <>Move.<br />Improve.<br />Repeat.</>}
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-y border-white/10 bg-white/[0.045] backdrop-blur-md">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-2 py-5 sm:py-7">
            {c.stats.map(([value, label]) => (
              <div key={label} className="px-2 text-center sm:px-6">
                <strong className="display-title block text-2xl text-[#b8ff31] sm:text-4xl">{value}</strong>
                <span className="mt-1 block text-[9px] font-bold uppercase tracking-[.1em] text-white/45 sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="conteudo" className="section-light overflow-hidden py-20 sm:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="kicker-dark"><Sparkles size={15} /> {c.content.label}</p>
              <h2 className="display-title mt-5 max-w-4xl text-[clamp(3.6rem,7vw,7.6rem)] leading-[.82] tracking-[-.04em] text-[#080b16]">{c.content.title}</h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-relaxed text-[#080b16]/60 sm:text-lg">{c.content.text}</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {c.content.cards.map(([title, desc, tag], index) => {
              const icons = [Dumbbell, Timer, HeartPulse];
              const Icon = icons[index];
              return (
                <article key={title} className={`content-card content-card-${index + 1}`}>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/85 px-3 py-1 text-[10px] font-black uppercase tracking-[.15em] text-[#080b16]">{tag}</span>
                    <Icon size={28} strokeWidth={2.4} />
                  </div>
                  <div className="mt-20">
                    <p className="display-title text-4xl leading-[.9]">{title}</p>
                    <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed opacity-70">{desc}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-xs font-black uppercase tracking-[.14em]">
                    <Play size={14} fill="currentColor" /> {c.content.follow}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[1.5rem] bg-[#080b16] p-6 text-white sm:flex-row sm:p-8">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#ff593d]">
                <Camera size={23} />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[.15em] text-white/40">Instagram</p>
                <p className="mt-1 text-base font-extrabold">@willian.personaltrainer</p>
              </div>
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="btn-electric bg-[#b8ff31] text-[#080b16] hover:bg-white">
              <Camera size={18} /> {c.content.instagramCta} <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="consultoria" className="bg-[#080b16] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="kicker-light"><MoveUpRight size={15} /> {c.help.label}</p>
            <h2 className="display-title mt-5 text-[clamp(3.6rem,7vw,7.5rem)] leading-[.82] tracking-[-.04em]">{c.help.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/55 sm:text-lg">{c.help.text}</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {[c.help.online, c.help.inPerson].map((service, index) => (
              <article key={service.title} className={`service-card ${index === 0 ? "service-card-featured" : ""}`}>
                <div className="flex items-center justify-between gap-4">
                  <span className="service-badge">{service.badge}</span>
                  {index === 0 ? <Globe2 size={36} /> : <Dumbbell size={36} />}
                </div>
                <h3 className="display-title mt-9 text-5xl uppercase sm:text-6xl">{service.title}</h3>
                <p className="mt-5 max-w-xl text-base font-medium leading-relaxed opacity-65">{service.desc}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 text-sm font-bold">
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-current/10"><Check size={14} /></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a href={`https://wa.me/${WHATSAPP}?text=${coachingMessage}`} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[.12em] underline decoration-2 underline-offset-8">
                  {service.cta} <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>

          <article id="parcerias" className="partner-strip mt-5 grid items-center gap-8 rounded-[1.75rem] p-7 sm:p-10 lg:grid-cols-[auto_1fr_auto]">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#ff593d] text-white"><BriefcaseBusiness size={30} /></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.18em] text-[#ff593d]">{c.help.partner.badge}</p>
              <h3 className="display-title mt-2 text-4xl text-[#080b16] sm:text-5xl">{c.help.partner.title}</h3>
              <p className="mt-2 max-w-3xl text-sm font-semibold leading-relaxed text-[#080b16]/60">{c.help.partner.desc}</p>
            </div>
            <a href={`mailto:${EMAIL}?subject=${partnershipSubject}`} className="btn-electric bg-[#080b16] text-white hover:bg-[#3769ff]">
              <Mail size={18} /> {c.help.partner.cta} <ArrowRight size={17} />
            </a>
          </article>
        </div>
      </section>

      <section id="metodo" className="relative overflow-hidden bg-[#3769ff] py-20 text-white sm:py-28">
        <div className="method-lines absolute inset-0" />
        <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#b8ff31] px-4 py-2 text-[10px] font-black uppercase tracking-[.16em] text-[#080b16]"><BarChart3 size={15} /> {c.method.label}</p>
              <h2 className="display-title mt-6 max-w-5xl text-[clamp(3.5rem,7vw,7rem)] leading-[.82] tracking-[-.04em]">{c.method.title}</h2>
            </div>
            <p className="max-w-xl text-base font-semibold leading-relaxed text-white/70 sm:text-lg">{c.method.text}</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[1.75rem] bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {c.method.steps.map(([num, title, desc]) => (
              <article key={num} className="group bg-[#315fe8] p-7 transition-colors hover:bg-[#b8ff31] hover:text-[#080b16] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="display-title text-5xl text-[#b8ff31] group-hover:text-[#080b16]">{num}</span>
                  <ChevronRight className="opacity-45 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="display-title mt-10 text-4xl uppercase">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-relaxed opacity-65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="section-light overflow-hidden py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1320px] gap-12 px-5 sm:px-8 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-12">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#080b16]">
              <img src="/images/hero.jpg" alt="Willian Gustavo na academia" className="h-full w-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b16]/65 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 max-w-[250px] rotate-2 rounded-2xl bg-[#ff593d] p-5 text-white shadow-2xl sm:-right-7">
              <BadgeCheck size={24} />
              <p className="mt-3 text-xs font-black uppercase tracking-[.12em]">
                {locale === "pt" ? "Formação em Educação Física + 9 anos de prática" : locale === "it" ? "Laurea in Scienze Motorie + 9 anni di esperienza" : "Physical Education degree + 9 years of experience"}
              </p>
            </div>
          </div>

          <div>
            <p className="kicker-dark"><Users size={15} /> {c.about.label}</p>
            <h2 className="display-title mt-5 max-w-4xl text-[clamp(3.5rem,6.5vw,6.8rem)] leading-[.82] tracking-[-.04em] text-[#080b16]">{c.about.title}</h2>
            <div className="mt-7 space-y-4 text-base font-semibold leading-relaxed text-[#080b16]/60 sm:text-lg">
              <p>{c.about.p1}</p>
              <p>{c.about.p2}</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {c.about.chips.map((chip) => <span key={chip} className="rounded-full border border-[#080b16]/15 bg-white px-4 py-2 text-xs font-black uppercase tracking-[.08em] text-[#080b16]">{chip}</span>)}
            </div>
            <Link href="/about" className="btn-electric mt-8 bg-[#080b16] text-white hover:bg-[#3769ff]">{c.about.cta} <ArrowRight size={18} /></Link>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1320px] gap-4 px-5 sm:px-8 md:grid-cols-3 lg:px-12">
          {c.values.map(([title, desc], index) => {
            const Icon = [Flame, BarChart3, HeartPulse][index];
            return (
              <article key={title} className="rounded-[1.5rem] border border-[#080b16]/10 bg-white p-6 sm:p-8">
                <Icon size={30} className={index === 0 ? "text-[#ff593d]" : index === 1 ? "text-[#3769ff]" : "text-[#75a600]"} />
                <h3 className="display-title mt-6 text-3xl uppercase text-[#080b16]">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#080b16]/55">{desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="final-cta relative overflow-hidden py-24 text-white sm:py-32">
        <div className="hero-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="kicker-light mx-auto"><Zap size={15} fill="currentColor" /> {c.final.eyebrow}</p>
          <h2 className="display-title mt-7 text-[clamp(4rem,9vw,9rem)] leading-[.78] tracking-[-.05em]">
            <span className="block">{c.final.titleA}</span>
            <span className="block text-[#b8ff31]">{c.final.titleB}</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base font-semibold leading-relaxed text-white/60 sm:text-lg">{c.final.text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`https://wa.me/${WHATSAPP}?text=${coachingMessage}`} target="_blank" rel="noopener noreferrer" className="btn-electric btn-electric-primary"><MessageCircle size={19} /> {c.final.primary} <ArrowRight size={18} /></a>
            <a href={`mailto:${EMAIL}?subject=${partnershipSubject}`} className="btn-electric btn-electric-ghost"><BriefcaseBusiness size={18} /> {c.final.partner}</a>
          </div>
          <p className="mt-5 text-[10px] font-bold uppercase tracking-[.15em] text-white/35">{c.final.note}</p>
        </div>
      </section>
    </>
  );
}
