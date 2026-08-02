"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  ChevronRight,
  CircleAlert,
  Clock3,
  ExternalLink,
  MapPin,
  MessageCircle,
  Route,
  TrendingUp,
} from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const WHATSAPP = "393428369444";
const INSTAGRAM = "https://www.instagram.com/willian.personaltrainer/";

const reelIds = ["Dafeuo0SOHU", "DZQqT_1iuNO", "DX7HzZMC2Gc"];
const storyIcons = [CircleAlert, Route, TrendingUp];

const copy = {
  it: {
    hero: {
      context: "Milano · Online · IT / EN / PT",
      reveal: "Scopri la risposta",
      contact: "Parliamone su WhatsApp",
      swipe: "Scegli la domanda che ti rappresenta",
      timer: "Prossima domanda tra",
      questions: [
        ["Pensi di non avere tempo per allenarti?", "Adatto l’allenamento alla tua routine, con sessioni efficaci da 20, 30 o 45 minuti."],
        ["Ti alleni, ma il tuo corpo non cambia?", "Analizzo la tua routine, individuo ciò che sta bloccando i risultati e costruisco un piano davvero personale."],
        ["Sei a Milano per pochi giorni e non sai dove allenarti?", "Organizzo tutto per permetterti di continuare ad allenarti durante il viaggio, senza perdere il ritmo."],
        ["Chi ha detto che allenarsi deve essere noioso?", "Creo allenamenti che hai voglia di ripetere, non soltanto di finire."],
      ],
    },
    solutions: {
      eyebrow: "Soluzioni, non formule",
      title: "Partiamo dal problema. Poi costruiamo la soluzione.",
      intro: "Niente schede standard. Il punto di partenza è la tua vita reale.",
      items: [
        ["Poco tempo", "Sessioni essenziali, durata flessibile e priorità chiare.", "20 · 30 · 45 min"],
        ["Progressi fermi", "Analisi del percorso, correzioni precise e obiettivi misurabili.", "Online o in presenza"],
        ["Routine instabile", "Un piano che si adatta a lavoro, viaggi e giornate imprevedibili.", "Sempre accessibile"],
        ["Allenamento noioso", "Varietà con logica: ogni sessione ha un senso e resta sostenibile.", "Più continuità"],
      ],
    },
    programs: {
      eyebrow: "Programmi",
      title: "Un punto di partenza per ogni momento.",
      note: "I nomi possono evolvere. L’attenzione alla persona no.",
      cta: "Scopri se fa per te",
      items: [
        ["Routine 45", "Per chi ha poco tempo", "Allenamenti da 20, 30 o 45 minuti costruiti intorno alla tua settimana.", ["Piano personale", "Sessioni efficienti", "Verifiche regolari"]],
        ["Progress Online", "Per chi vuole una direzione", "Allenamento e supporto a distanza, ovunque vivi e qualunque sia il tuo livello.", ["Valutazione iniziale", "Supporto diretto", "Aggiornamenti del piano"]],
        ["Milano Personal", "Per chi vuole allenarsi dal vivo", "Sessioni one-to-one a Milano, anche durante un soggiorno breve o un viaggio di lavoro.", ["Luogo organizzato", "Tecnica seguita", "Orari flessibili"]],
      ],
    },
    process: {
      eyebrow: "Come funziona",
      title: "Semplice dall’inizio.",
      steps: [["01", "Parliamo"], ["02", "Pianifichiamo"], ["03", "Inizi"], ["04", "Ti seguo"]],
    },
    about: {
      eyebrow: "Willian, senza il curriculum infinito",
      title: "Competenza quando serve. Presenza sempre.",
      text: "Sono brasiliano, vivo a Milano e lavoro con persone che vogliono sentirsi meglio nel proprio corpo senza trasformare il fitness in un secondo lavoro.",
      facts: ["Professore di Educazione Fisica", "Più di 9 anni di esperienza", "Brasiliano a Milano", "Italiano · English · Português"],
      cta: "Raccontami il tuo obiettivo",
    },
    social: {
      eyebrow: "Dal mio Instagram",
      title: "Allenamento, idee e vita reale.",
      intro: "Contenuti diretti, senza personaggi e senza formule miracolose.",
      cta: "Segui @willian.personaltrainer",
    },
    stories: {
      eyebrow: "Storie reali",
      title: "Ogni persona ha la sua routine. Ogni routine merita un piano diverso.",
      intro: "Non esiste un allenamento perfetto per tutti. Esiste quello giusto per ogni persona.",
      labels: ["La sfida", "La soluzione", "Il risultato"],
      fullStory: "Leggi la storia completa",
      mediaLabels: ["Prima", "Dopo"],
      items: [
        {
          flag: "🇧🇷", name: "Paulo", country: "Brasile", summary: "Un viaggio di lavoro a Milano",
          challenge: "Paulo sarebbe rimasto a Milano soltanto una settimana per lavoro e non voleva interrompere la sua routine di allenamento durante il viaggio.",
          solution: "Abbiamo creato un piano adatto ai giorni disponibili durante il soggiorno. Dopo il rientro in Brasile, abbiamo continuato il percorso online per mantenere la costanza.",
          result: "Anche una volta tornato in Brasile, è riuscito a mantenere la routine e a continuare a progredire senza interrompere il percorso.",
          media: { photo: "", video: "", beforeAfter: [] }, href: "",
        },
        {
          flag: "🇮🇹", name: "Mark", country: "Italia", summary: "Allenarsi era un obbligo",
          challenge: "Mark non amava la palestra: trovava gli allenamenti ripetitivi e monotoni.",
          solution: "Abbiamo scoperto che la musica era una delle sue motivazioni più forti. Ho costruito le sessioni intorno alle sue playlist preferite, rendendole più dinamiche e piacevoli.",
          result: "L’allenamento ha smesso di essere un obbligo ed è entrato naturalmente nella sua routine, aumentando la costanza.",
          media: { photo: "", video: "", beforeAfter: [] }, href: "",
        },
        {
          flag: "🇯🇵", name: "Shen", country: "Giappone", summary: "Poco tempo e dolori muscolari frequenti",
          challenge: "Shen lavorava molte ore al giorno e pensava di non avere tempo per prendersi cura della propria salute. Inoltre, soffriva spesso di dolori muscolari.",
          solution: "Ho iniziato a seguirlo a casa, adattando ogni allenamento al tempo realmente disponibile, senza chiedergli di stravolgere le sue giornate.",
          result: "I dolori muscolari si sono ridotti in modo significativo e il percorso continua ancora oggi, rispettando i suoi ritmi di vita e di lavoro.",
          media: { photo: "", video: "", beforeAfter: [] }, href: "",
        },
      ],
    },
    milan: {
      eyebrow: "Allenarsi a Milano",
      title: "La tua routine non deve fermarsi quando viaggi.",
      text: "Se sei a Milano per lavoro, turismo o per un periodo più lungo, organizzo un’esperienza di allenamento semplice e adatta ai tuoi tempi.",
      groups: ["Viaggiatori", "Professionisti", "Hotel", "Parchi", "Palestre"],
      cta: "Organizza il tuo allenamento a Milano",
    },
    faq: {
      eyebrow: "Domande vere",
      title: "Prima di scrivermi, forse vuoi sapere questo.",
      items: [
        ["Non sono allenato. Posso iniziare comunque?", "Sì. Il livello di partenza serve per scegliere il percorso giusto, non per decidere se sei adatto."],
        ["Quanto deve durare un allenamento?", "Dipende dalla tua settimana. Una sessione ben costruita da 20 o 30 minuti può essere più utile di un’ora improvvisata."],
        ["Posso allenarmi in hotel o al parco?", "Sì. Scelgo spazio e attrezzatura in base a dove sei, senza complicare il viaggio."],
        ["Resto a Milano solo pochi giorni. Ha senso contattarti?", "Sì. Possiamo organizzare anche una singola sessione o un piccolo ciclo durante il soggiorno."],
        ["Segui persone fuori dall’Italia?", "Sì. Il programma online è disponibile in italiano, inglese e portoghese."],
        ["Devo seguire una dieta estrema?", "No. Il mio lavoro parte da allenamento, routine e abitudini sostenibili. Per esigenze nutrizionali cliniche, collaboro nel rispetto delle competenze professionali."],
      ],
    },
    final: {
      eyebrow: "Il passo più semplice",
      title: "Qual è il problema che vuoi risolvere?",
      text: "Scrivimi. Ti rispondo personalmente e capiamo se posso aiutarti.",
      cta: "Parla con Willian",
      note: "Risposta diretta · Nessun bot · Nessun impegno",
    },
  },
  en: {
    hero: {
      context: "Milan · Online · IT / EN / PT",
      reveal: "See the answer",
      contact: "Talk on WhatsApp",
      swipe: "Choose the question that sounds like you",
      timer: "Next question in",
      questions: [
        ["Do you feel like you never have time to train?", "I shape training around your actual schedule, with focused 20, 30 or 45-minute sessions."],
        ["You train, but your body still looks the same?", "I review your routine, find what is holding progress back and build a genuinely personal plan."],
        ["Only in Milan for a few days and unsure where to train?", "I arrange everything so you can keep training while you travel, without losing momentum."],
        ["Who said training has to be boring?", "I build sessions you will want to repeat, not just finish."],
      ],
    },
    solutions: {
      eyebrow: "Solutions, not formulas", title: "We start with the problem. Then build the solution.", intro: "No generic plans. Your real life is the starting point.",
      items: [["Not enough time", "Focused sessions, flexible length and clear priorities.", "20 · 30 · 45 min"], ["Stalled progress", "A close look at your routine, precise adjustments and measurable goals.", "Online or in person"], ["An unpredictable week", "A plan that adapts to work, travel and changing schedules.", "Always accessible"], ["Boring workouts", "Variety with purpose, so each session makes sense and stays sustainable.", "More consistency"]],
    },
    programs: {
      eyebrow: "Programs", title: "A starting point for every moment.", note: "Names may evolve. Personal attention will not.", cta: "See if it fits",
      items: [["Routine 45", "For busy schedules", "20, 30 or 45-minute sessions built around your week.", ["Personal plan", "Focused sessions", "Regular reviews"]], ["Progress Online", "For clear direction", "Training and direct support wherever you live and whatever your level.", ["Initial assessment", "Direct support", "Plan updates"]], ["Milan Personal", "For training in person", "One-to-one sessions in Milan, including short stays and business trips.", ["Location arranged", "Technique coaching", "Flexible times"]]],
    },
    process: { eyebrow: "How it works", title: "Simple from day one.", steps: [["01", "We talk"], ["02", "We plan"], ["03", "You start"], ["04", "I stay close"]] },
    about: { eyebrow: "Willian, without the endless résumé", title: "Expertise when it matters. Support throughout.", text: "I’m Brazilian, based in Milan, and I work with people who want to feel better in their bodies without turning fitness into a second job.", facts: ["Physical Education professional", "Over 9 years of experience", "Brazilian based in Milan", "Italiano · English · Português"], cta: "Tell me your goal" },
    social: { eyebrow: "From my Instagram", title: "Training, ideas and real life.", intro: "Straightforward content, without characters or miracle formulas.", cta: "Follow @willian.personaltrainer" },
    stories: {
      eyebrow: "Real stories", title: "Every person has a routine. Every routine deserves a different plan.", intro: "There is no perfect workout for everyone. There is a right way to train for each person.", labels: ["The challenge", "The solution", "The result"], fullStory: "Read the full story", mediaLabels: ["Before", "After"],
      items: [
        { flag: "🇧🇷", name: "Paulo", country: "Brazil", summary: "A business trip to Milan", challenge: "Paulo was spending just one week in Milan for work and did not want travel to interrupt his training routine.", solution: "We built a plan around the days available during his stay. Once he returned to Brazil, we continued online so he could keep the same consistency.", result: "Back in Brazil, he kept training and continued to make progress without breaking the process.", media: { photo: "", video: "", beforeAfter: [] }, href: "" },
        { flag: "🇮🇹", name: "Mark", country: "Italy", summary: "Training felt like an obligation", challenge: "Mark did not enjoy the gym because workouts felt repetitive and monotonous.", solution: "We discovered that music was one of his strongest motivators. I shaped his sessions around his favourite playlists to make training more dynamic and enjoyable.", result: "Training stopped feeling like a chore and became a natural part of his routine, making it easier to stay consistent.", media: { photo: "", video: "", beforeAfter: [] }, href: "" },
        { flag: "🇯🇵", name: "Shen", country: "Japan", summary: "Very little time and frequent muscle pain", challenge: "Shen worked long hours and believed there was no room in his day to look after his health. He also dealt with frequent muscle pain.", solution: "I began training him at home, adapting every session to the time he genuinely had, without asking him to make drastic changes to his day.", result: "His muscle pain reduced significantly, and we still work together today at a pace that respects his life and workload.", media: { photo: "", video: "", beforeAfter: [] }, href: "" },
      ],
    },
    milan: { eyebrow: "Training in Milan", title: "Your routine does not have to stop when you travel.", text: "If you are in Milan for work, tourism or a longer stay, I arrange a simple training experience built around your time.", groups: ["Travellers", "Professionals", "Hotels", "Parks", "Gyms"], cta: "Arrange your Milan session" },
    faq: { eyebrow: "Real questions", title: "Before you message me, you may want to know this.", items: [["I’m not fit. Can I still start?", "Yes. Your starting level helps shape the right plan; it never decides whether you belong."], ["How long should a workout take?", "It depends on your week. A well-built 20 or 30-minute session can be more useful than an improvised hour."], ["Can I train at a hotel or in a park?", "Yes. I adapt the space and equipment to where you are, without making travel complicated."], ["I’m only in Milan for a few days. Is it worth contacting you?", "Yes. We can arrange a single session or a short series during your stay."], ["Do you coach outside Italy?", "Yes. Online programs are available in Italian, English and Portuguese."], ["Do I need an extreme diet?", "No. My work starts with training, routine and sustainable habits. Clinical nutrition needs are handled with the right qualified professionals."]] },
    final: { eyebrow: "The simplest next step", title: "What problem do you want to solve?", text: "Message me. I will reply personally and we will see if I can help.", cta: "Talk to Willian", note: "Direct reply · No bot · No obligation" },
  },
  pt: {
    hero: {
      context: "Milão · Online · IT / EN / PT", reveal: "Ver a resposta", contact: "Conversar no WhatsApp", swipe: "Escolha a pergunta que mais parece com você", timer: "Próxima pergunta em",
      questions: [["Você acha que não tem tempo para treinar?", "Eu adapto o treino exatamente à sua rotina, com sessões eficientes de 20, 30 ou 45 minutos."], ["Você treina, mas seu corpo continua o mesmo?", "Eu analiso sua rotina, identifico o que está impedindo seus resultados e monto um plano realmente personalizado."], ["Está em Milão por poucos dias e não sabe onde ou com quem treinar?", "Eu organizo tudo para que você continue treinando durante sua viagem sem perder sua rotina."], ["Quem disse que treinar precisa ser chato?", "Meu objetivo é criar treinos que você tenha vontade de repetir, não apenas terminar."]],
    },
    solutions: { eyebrow: "Soluções, não fórmulas", title: "Primeiro, o problema. Depois, a solução.", intro: "Nada de plano genérico. O ponto de partida é a sua vida real.", items: [["Pouco tempo", "Sessões objetivas, duração flexível e prioridades claras.", "20 · 30 · 45 min"], ["Progresso parado", "Análise da rotina, ajustes precisos e objetivos mensuráveis.", "Online ou presencial"], ["Rotina imprevisível", "Um plano que acompanha trabalho, viagens e semanas diferentes.", "Sempre acessível"], ["Treino sem graça", "Variedade com lógica para você querer repetir, não só terminar.", "Mais constância"]] },
    programs: { eyebrow: "Programas", title: "Um ponto de partida para cada momento.", note: "Os nomes podem evoluir. A atenção individual, não.", cta: "Ver se faz sentido", items: [["Rotina 45", "Para quem tem pouco tempo", "Sessões de 20, 30 ou 45 minutos organizadas em torno da sua semana.", ["Plano individual", "Sessões objetivas", "Revisões frequentes"]], ["Progress Online", "Para quem precisa de direção", "Treino e suporte direto onde você estiver e qualquer que seja seu nível.", ["Avaliação inicial", "Suporte direto", "Atualização do plano"]], ["Milano Personal", "Para treinar presencialmente", "Sessões individuais em Milão, inclusive em viagens curtas ou a trabalho.", ["Local organizado", "Correção técnica", "Horários flexíveis"]]] },
    process: { eyebrow: "Como funciona", title: "Simples desde o início.", steps: [["01", "Conversamos"], ["02", "Planejamos"], ["03", "Você começa"], ["04", "Eu acompanho"]] },
    about: { eyebrow: "Willian, sem currículo infinito", title: "Conhecimento quando importa. Presença sempre.", text: "Sou brasileiro, vivo em Milão e trabalho com pessoas que querem se sentir melhor no próprio corpo sem transformar o fitness em um segundo emprego.", facts: ["Professor de Educação Física", "Mais de 9 anos de experiência", "Brasileiro vivendo em Milão", "Italiano · English · Português"], cta: "Conte seu objetivo" },
    social: { eyebrow: "Do meu Instagram", title: "Treino, ideias e vida real.", intro: "Conteúdo direto, sem personagem e sem fórmula milagrosa.", cta: "Seguir @willian.personaltrainer" },
    stories: {
      eyebrow: "Histórias reais", title: "Cada pessoa tem uma rotina. Cada rotina merece um plano diferente.", intro: "Não existe um treino perfeito para todo mundo. Existe o treino certo para cada pessoa.", labels: ["O desafio", "A solução", "O resultado"], fullStory: "Ler a história completa", mediaLabels: ["Antes", "Depois"],
      items: [
        { flag: "🇧🇷", name: "Paulo", country: "Brasil", summary: "Viagem de trabalho para Milão", challenge: "Paulo passaria apenas uma semana em Milão trabalhando e não queria interromper sua rotina de treinos durante a viagem.", solution: "Criamos um plano adaptado aos dias disponíveis durante sua estadia e, após seu retorno ao Brasil, continuamos o acompanhamento online para manter a consistência.", result: "Mesmo voltando ao Brasil, conseguiu manter a rotina de exercícios e continuar evoluindo sem interromper o processo.", media: { photo: "", video: "", beforeAfter: [] }, href: "" },
        { flag: "🇮🇹", name: "Mark", country: "Itália", summary: "Treinar era uma obrigação", challenge: "Mark não gostava de academia porque considerava os treinos repetitivos e monótonos.", solution: "Descobrimos que a música era uma das suas maiores motivações. Adaptamos os treinos utilizando suas playlists favoritas para tornar cada sessão mais dinâmica e prazerosa.", result: "O treino deixou de ser uma obrigação e passou a fazer parte da rotina naturalmente, aumentando sua consistência.", media: { photo: "", video: "", beforeAfter: [] }, href: "" },
        { flag: "🇯🇵", name: "Shen", country: "Japão", summary: "Pouco tempo e dores musculares constantes", challenge: "Shen trabalhava muitas horas por dia e acreditava que não tinha tempo para cuidar da saúde. Além disso, sofria frequentemente com dores musculares.", solution: "Passei a atendê-lo em sua residência, adaptando cada treino ao tempo disponível em sua rotina, sem exigir mudanças radicais no seu dia a dia.", result: "As dores musculares diminuíram significativamente e o acompanhamento continua até hoje, respeitando sua rotina e seu ritmo de trabalho.", media: { photo: "", video: "", beforeAfter: [] }, href: "" },
      ],
    },
    milan: { eyebrow: "Treinar em Milão", title: "Sua rotina não precisa parar quando você viaja.", text: "Se você está em Milão a trabalho, turismo ou por um período maior, eu organizo uma experiência de treino simples e adaptada ao seu tempo.", groups: ["Turistas", "Profissionais", "Hotéis", "Parques", "Academias"], cta: "Organizar meu treino em Milão" },
    faq: { eyebrow: "Perguntas reais", title: "Antes de falar comigo, talvez você queira saber isso.", items: [["Não estou em forma. Posso começar mesmo assim?", "Sim. Seu nível atual serve para definir o caminho, nunca para decidir se você pode começar."], ["Quanto tempo um treino precisa durar?", "Depende da sua semana. Uma sessão bem construída de 20 ou 30 minutos pode ser mais útil do que uma hora improvisada."], ["Posso treinar em hotel ou parque?", "Sim. Eu adapto espaço e equipamento ao lugar onde você está, sem complicar sua viagem."], ["Vou ficar poucos dias em Milão. Vale a pena falar com você?", "Sim. Podemos organizar uma sessão única ou um pequeno ciclo durante sua estadia."], ["Você atende fora da Itália?", "Sim. Os programas online estão disponíveis em italiano, inglês e português."], ["Preciso fazer uma dieta extrema?", "Não. Meu trabalho começa com treino, rotina e hábitos sustentáveis. Necessidades nutricionais clínicas são tratadas com os profissionais habilitados."]] },
    final: { eyebrow: "O próximo passo mais simples", title: "Qual problema você quer resolver?", text: "Me escreva. Eu respondo pessoalmente e vemos se posso ajudar.", cta: "Falar com Willian", note: "Resposta direta · Sem robô · Sem compromisso" },
  },
} as const;

export default function HomeLanding() {
  const { locale } = useLocale();
  const c = copy[locale] ?? copy.it;
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answerVisible, setAnswerVisible] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const heroRef = useRef<HTMLElement>(null);

  const whatsappMessage = encodeURIComponent(
    locale === "it"
      ? "Ciao Willian, ho visto il tuo sito. Vorrei raccontarti il mio obiettivo."
      : locale === "en"
        ? "Hi Willian, I saw your website. I’d like to tell you about my goal."
        : "Olá, Willian. Vi seu site e quero contar meu objetivo."
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${whatsappMessage}`;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 72) setAnswerVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          setActiveQuestion((question) => (question + 1) % c.hero.questions.length);
          setAnswerVisible(false);
          return 5;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [c.hero.questions.length]);

  const chooseQuestion = (index: number) => {
    setActiveQuestion(index);
    setAnswerVisible(false);
    setSecondsLeft(5);
  };

  const moveQuestion = (direction: number) => {
    chooseQuestion((activeQuestion + direction + c.hero.questions.length) % c.hero.questions.length);
  };

  return (
    <>
      <section ref={heroRef} className="cr-hero" aria-labelledby="hero-question">
        <video className="cr-hero-video" autoPlay muted loop playsInline poster="/images/about.jpg" aria-hidden="true">
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="cr-hero-shade" />
        <div className="cr-shell cr-hero-inner">
          <div className="cr-hero-topline">
            <span>{c.hero.context}</span>
            <div className="cr-hero-status">
              <span>{String(activeQuestion + 1).padStart(2, "0")} / 04</span>
              <span className="cr-timer" aria-label={`${c.hero.timer} ${secondsLeft}s`}>
                <Clock3 size={12} aria-hidden="true" />
                <span>{secondsLeft}s</span>
              </span>
            </div>
          </div>

          <figure className="cr-hero-portrait">
            <img src="/images/about.jpg" alt="Willian Personal Trainer" fetchPriority="high" decoding="sync" />
            <figcaption>Willian</figcaption>
          </figure>

          <div className="cr-hero-content">
            <button className="cr-question" onClick={() => setAnswerVisible(true)} aria-expanded={answerVisible}>
              <h1 id="hero-question">{c.hero.questions[activeQuestion][0]}</h1>
            </button>

            <div className={`cr-answer ${answerVisible ? "is-visible" : ""}`} aria-hidden={!answerVisible}>
              <p>{c.hero.questions[activeQuestion][1]}</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cr-button cr-button-primary">
                <MessageCircle size={18} /> {c.hero.contact}
              </a>
            </div>

            {!answerVisible && (
              <button className="cr-reveal" onClick={() => setAnswerVisible(true)}>
                <ArrowDown size={18} /> {c.hero.reveal}
              </button>
            )}
          </div>

          <div className="cr-hero-controls">
            <p>{c.hero.swipe}</p>
            <div className="cr-dots" role="tablist" aria-label={c.hero.swipe}>
              {c.hero.questions.map((question, index) => (
                <button key={question[0]} onClick={() => chooseQuestion(index)} className={index === activeQuestion ? "is-active" : ""} aria-label={`${index + 1}: ${question[0]}`} aria-selected={index === activeQuestion} role="tab" />
              ))}
            </div>
            <div className="cr-arrows">
              <button onClick={() => moveQuestion(-1)} aria-label="Previous question"><ArrowLeft size={18} /></button>
              <button onClick={() => moveQuestion(1)} aria-label="Next question"><ArrowRight size={18} /></button>
            </div>
          </div>
        </div>
      </section>

      <section id="soluzioni" className="cr-section cr-section-main">
        <div className="cr-shell">
          <div className="cr-heading-grid">
            <div><p className="cr-eyebrow">{c.solutions.eyebrow}</p><h2>{c.solutions.title}</h2></div>
            <p className="cr-intro">{c.solutions.intro}</p>
          </div>
          <div className="cr-solution-list">
            {c.solutions.items.map(([title, text, meta], index) => (
              <article key={title} className="cr-solution-row">
                <span className="cr-index">0{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="cr-meta">{meta}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="programmi" className="cr-section cr-section-alt">
        <div className="cr-shell">
          <div className="cr-heading-row">
            <div><p className="cr-eyebrow">{c.programs.eyebrow}</p><h2>{c.programs.title}</h2></div>
            <p className="cr-microcopy">{c.programs.note}</p>
          </div>
          <div className="cr-program-grid">
            {c.programs.items.map(([name, audience, text, points], index) => (
              <article key={name} className={`cr-program ${index === 1 ? "is-featured" : ""}`}>
                <div className="cr-program-number">0{index + 1}</div>
                <p className="cr-program-audience">{audience}</p>
                <h3>{name}</h3>
                <p className="cr-program-text">{text}</p>
                <ul>{points.map((point) => <li key={point}><Check size={15} /> {point}</li>)}</ul>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{c.programs.cta}<ArrowRight size={17} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="come-funziona" className="cr-section cr-section-main">
        <div className="cr-shell">
          <p className="cr-eyebrow">{c.process.eyebrow}</p>
          <h2 className="cr-process-title">{c.process.title}</h2>
          <div className="cr-process">
            {c.process.steps.map(([number, title], index) => (
              <div key={number} className="cr-process-step">
                <span>{number}</span><h3>{title}</h3>{index < c.process.steps.length - 1 && <ChevronRight aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="willian" className="cr-section cr-section-alt">
        <div className="cr-shell cr-about-grid">
          <div className="cr-about-photo"><img src="/images/about.jpg" alt="Willian sorrindo in palestra" /></div>
          <div className="cr-about-copy">
            <p className="cr-eyebrow">{c.about.eyebrow}</p>
            <h2>{c.about.title}</h2>
            <p>{c.about.text}</p>
            <ul>{c.about.facts.map((fact) => <li key={fact}><Check size={16} /> {fact}</li>)}</ul>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cr-text-link">{c.about.cta}<ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section id="instagram" className="cr-section cr-section-main">
        <div className="cr-shell">
          <div className="cr-heading-row">
            <div><p className="cr-eyebrow">{c.social.eyebrow}</p><h2>{c.social.title}</h2></div>
            <p className="cr-intro">{c.social.intro}</p>
          </div>
          <div className="cr-reels">
            {reelIds.map((id, index) => (
              <div className="cr-reel" key={id}>
                <iframe src={`https://www.instagram.com/reel/${id}/embed/`} title={`Instagram Reel ${index + 1} — Willian Personal Trainer`} loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
              </div>
            ))}
          </div>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="cr-button cr-button-secondary"><Camera size={18} /> {c.social.cta}<ExternalLink size={15} /></a>
        </div>
      </section>

      <section id="storie" className="cr-section cr-stories">
        <div className="cr-shell">
          <div className="cr-stories-head">
            <div>
              <p className="cr-eyebrow">{c.stories.eyebrow}</p>
              <h2>{c.stories.title}</h2>
            </div>
            <p className="cr-intro">{c.stories.intro}</p>
          </div>

          <div className="cr-stories-list">
            {c.stories.items.map((story, storyIndex) => {
              const stages = [story.challenge, story.solution, story.result];
              return (
                <article className="cr-story-card" key={story.name}>
                  <header className="cr-story-header">
                    <span className="cr-story-flag" role="img" aria-label={story.country}>{story.flag}</span>
                    <div className="cr-story-person">
                      <p>{story.country}</p>
                      <h3>{story.name}</h3>
                    </div>
                    <p className="cr-story-summary"><span>0{storyIndex + 1}</span>{story.summary}</p>
                  </header>

                  <div className="cr-story-stages">
                    {stages.map((text, stageIndex) => {
                      const Icon = storyIcons[stageIndex];
                      return (
                        <div className={`cr-story-stage ${stageIndex === 2 ? "is-result" : ""}`} key={c.stories.labels[stageIndex]}>
                          <div className="cr-story-stage-label"><Icon size={16} aria-hidden="true" /><h4>{c.stories.labels[stageIndex]}</h4></div>
                          <p>{text}</p>
                        </div>
                      );
                    })}
                  </div>

                  {(story.media.photo || story.media.video || story.media.beforeAfter.length > 0) && (
                    <div className="cr-story-media">
                      {story.media.photo && <img src={story.media.photo} alt={`${story.name} — ${story.summary}`} />}
                      {story.media.video && <video src={story.media.video} controls playsInline />}
                      {story.media.beforeAfter.map((image, index) => <figure key={image}><img src={image} alt={`${c.stories.mediaLabels[index]} — ${story.name}`} /><figcaption>{c.stories.mediaLabels[index]}</figcaption></figure>)}
                    </div>
                  )}
                  {story.href && <a className="cr-text-link" href={story.href}>{c.stories.fullStory}<ArrowRight size={17} /></a>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="milano" className="cr-milan">
        <div className="cr-milan-image" aria-hidden="true"><img src="/images/training.jpg" alt="" /></div>
        <div className="cr-shell cr-milan-inner">
          <div className="cr-milan-card">
            <p className="cr-eyebrow">{c.milan.eyebrow}</p>
            <h2>{c.milan.title}</h2>
            <p>{c.milan.text}</p>
            <div className="cr-milan-tags">{c.milan.groups.map((group) => <span key={group}>{group}</span>)}</div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cr-button cr-button-primary"><MapPin size={18} /> {c.milan.cta}</a>
          </div>
          <div className="cr-coordinate"><MapPin size={15} /> 45.4642° N · 9.1900° E</div>
        </div>
      </section>

      <section id="faq" className="cr-section cr-section-alt">
        <div className="cr-shell cr-faq-grid">
          <div><p className="cr-eyebrow">{c.faq.eyebrow}</p><h2>{c.faq.title}</h2></div>
          <div className="cr-faq-list">
            {c.faq.items.map(([question, answer]) => (
              <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section id="contatto" className="cr-final">
        <div className="cr-shell cr-final-inner">
          <p className="cr-eyebrow">{c.final.eyebrow}</p>
          <h2>{c.final.title}</h2>
          <p>{c.final.text}</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cr-button cr-button-primary"><MessageCircle size={19} /> {c.final.cta}<ArrowRight size={17} /></a>
          <span>{c.final.note}</span>
        </div>
      </section>
    </>
  );
}
