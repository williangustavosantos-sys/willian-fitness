export type Locale = "pt" | "en" | "it";

export const defaultLocale: Locale = "pt";

export const localeNames: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
  it: "IT",
};

export const translations = {
  pt: {
    // Nav
    nav: {
      home: "Início",
      about: "Sobre",
      services: "Serviços",
      contact: "Contato",
      cta: "Falar com Willian",
    },
    // Hero
    hero: {
      badge: "Personal Trainer · Milano, Itália",
      question: "Pronto para a maior transformação da sua vida?",
      headline1: "Seu corpo tem",
      headline2: "potencial.",
      headline3: "Falta o método certo.",
      sub: "Profissional brasileiro de fitness baseado em Milão. 9+ anos transformando corpos e vidas com método, ciência e acompanhamento premium.",
      cta1: "Quero minha transformação",
      cta2: "Como funciona",
      scrollLabel: "Ver resultados reais",
      socialProof: "Mais de 500 clientes transformados em todo o mundo",
    },
    // Stats
    stats: {
      title: "Números que falam por si",
      items: [
        { value: "9+", label: "Anos de experiência" },
        { value: "500+", label: "Clientes transformados" },
        { value: "3", label: "Continentes atendidos" },
        { value: "∞", label: "Compromisso com resultado" },
      ],
    },
    // About teaser
    aboutTeaser: {
      label: "Sobre Willian",
      headline: "De São Paulo a Milão — uma trajetória de excelência",
      p1: "Formado em Educação Física com mais de 9 anos de experiência no mercado fitness, Willian Gustavo dos Santos construiu sua carreira nas maiores redes de academias do Brasil antes de levar sua expertise para a Europa.",
      p2: "Mais do que treinos, Willian entrega uma experiência premium de transformação. Seu método combina ciência do exercício, coaching de performance e acompanhamento individualizado — para resultados que duram.",
      cta: "Conheça minha história",
      credentials: [
        "Formação universitária em Educação Física",
        "Ex-gestor de academias premium",
        "Experiência com clientes executivos",
        "Método testado em centenas de transformações",
      ],
    },
    // Services
    services: {
      label: "Serviços",
      headline: "Soluções premium para cada objetivo",
      sub: "Cada serviço é desenhado para gerar resultados reais, com acompanhamento profissional e método comprovado.",
      items: [
        {
          icon: "Dumbbell",
          title: "Personal Training em Milão",
          desc: "Sessões individuais em Milão, com programa 100% personalizado para seu corpo, rotina e objetivos.",
          tags: ["Presencial", "Personalizado", "Milão"],
        },
        {
          icon: "Globe",
          title: "Coaching Online Internacional",
          desc: "Treinos, nutrição e acompanhamento para clientes em qualquer parte do mundo. Resultado onde você estiver.",
          tags: ["Online", "Global", "Flexível"],
        },
        {
          icon: "Briefcase",
          title: "Executive Fitness Coaching",
          desc: "Programa desenhado para executivos e líderes. Alta performance física para sustentar alta performance profissional.",
          tags: ["Executivos", "Performance", "Premium"],
        },
        {
          icon: "Flame",
          title: "Transformação Corporal",
          desc: "Programa intensivo de recomposição corporal. Emagrecimento, definição ou ganho de massa — com método e resultado.",
          tags: ["Transformação", "Resultados", "Método"],
        },
        {
          icon: "Building2",
          title: "Corporate Wellness",
          desc: "Programas de saúde e bem-estar para equipes e empresas. Melhore a produtividade e o bem-estar do seu time.",
          tags: ["Empresas", "Equipes", "Bem-estar"],
        },
        {
          icon: "Lightbulb",
          title: "Consultoria Fitness",
          desc: "Avaliação, planejamento e orientação estratégica para academias, empresas ou projetos no setor fitness.",
          tags: ["Consultoria", "Estratégia", "Fitness"],
        },
      ],
      cta: "Ver todos os serviços",
    },
    // Method
    method: {
      label: "O Método",
      headline: "Cada detalhe. Cada etapa. Resultado garantido.",
      sub: "Um processo estruturado que transforma não apenas o corpo, mas o estilo de vida completo.",
      steps: [
        {
          num: "01",
          title: "Avaliação Inicial",
          desc: "Análise completa do seu corpo, histórico, rotina, objetivos e limitações. Ponto de partida para um plano real.",
        },
        {
          num: "02",
          title: "Plano Personalizado",
          desc: "Criação de um programa 100% específico para você — treino, estratégia e metas definidas com precisão.",
        },
        {
          num: "03",
          title: "Treinamento Estratégico",
          desc: "Sessões de alta qualidade com progressão inteligente, técnica apurada e foco total no seu desenvolvimento.",
        },
        {
          num: "04",
          title: "Acompanhamento Constante",
          desc: "Suporte contínuo, feedback regular e comunicação direta. Você nunca estará sozinho no processo.",
        },
        {
          num: "05",
          title: "Ajustes Progressivos",
          desc: "O plano evolui junto com você. Adaptações baseadas em dados reais para manter o progresso constante.",
        },
        {
          num: "06",
          title: "Resultado Sustentável",
          desc: "O foco é construir um novo estilo de vida — não uma solução temporária. Resultado que você mantém para sempre.",
        },
      ],
    },
    // Why Me
    whyMe: {
      label: "Diferenciais",
      headline: "Por que clientes escolhem Willian?",
      sub: "Contratar Willian não é contratar um treino. É investir em uma experiência profissional premium, com visão de alto nível e comprometimento real com seu resultado.",
      items: [
        "Formação universitária de 4 anos em Educação Física",
        "Mais de 9 anos de experiência no fitness",
        "Energia e motivação brasileira",
        "Visão internacional — experiência no Brasil e na Europa",
        "Experiência em gestão de academias e equipes",
        "Histórico com clientes premium e executivos",
        "Método personalizado com progressão científica",
        "Foco em resultado real e mensurável",
        "Atendimento em Milão e online para qualquer país",
        "Suporte em português, inglês e italiano",
      ],
      quote:
        "Minha missão é simples: transformar sua vida através do movimento, da disciplina e da evolução constante.",
      cta: "Começar minha transformação",
    },
    // Testimonials
    testimonials: {
      label: "Resultados",
      headline: "Histórias de transformação real",
      sub: "Resultados alcançados por clientes que confiaram no método e no processo.",
      items: [
        {
          name: "Marco T.",
          role: "Executivo, Milão",
          text: "Em 4 meses com o Willian, perdi 12kg e ganhei mais energia do que tinha aos 30 anos. O acompanhamento dele é diferente de qualquer personal que já tive.",
          result: "-12kg em 4 meses",
        },
        {
          name: "Fernanda R.",
          role: "Empresária, São Paulo → Milão",
          text: "Encontrar o Willian foi um divisor de águas. Profissional sério, método claro e resultado real. Recomendo sem hesitar.",
          result: "Recomposição corporal completa",
        },
        {
          name: "Alessandro B.",
          role: "Advogado, Roma",
          text: "Treino online com Willian há 6 meses. A organização, o profissionalismo e o comprometimento dele são impressionantes. Melhor investimento que fiz na minha saúde.",
          result: "+8kg massa muscular",
        },
      ],
    },
    // CTA Section
    ctaSection: {
      headline: "Pronto para sua transformação?",
      sub: "Entre em contato agora e descubra como posso ajudar você a alcançar seus objetivos.",
      cta1: "Falar no WhatsApp",
      cta2: "Enviar E-mail",
    },
    // Contact page
    contact: {
      label: "Contato",
      headline: "Vamos construir sua melhor versão.",
      sub: "Envie uma mensagem agora. Atendo em português, inglês e italiano.",
      form: {
        name: "Seu nome",
        email: "Seu e-mail",
        phone: "WhatsApp / Telefone",
        service: "Serviço de interesse",
        message: "Sua mensagem",
        send: "Enviar mensagem",
        sending: "Enviando...",
        success: "Mensagem enviada! Retornarei em breve.",
        error: "Erro ao enviar. Tente pelo WhatsApp.",
        whatsappIntro: "Novo contato do site",
        messagePlaceholder: "Conte-me sobre seus objetivos...",
        services: [
          "Personal Training em Milão",
          "Coaching Online",
          "Executive Fitness",
          "Transformação Corporal",
          "Corporate Wellness",
          "Consultoria Fitness",
        ],
      },
      info: {
        whatsapp: "WhatsApp",
        email: "E-mail",
        location: "Localização",
        locationValue: "Milão, Itália",
        languages: "Atendimento em",
        languagesValue: "Português · English · Italiano",
      },
      urgency: "Vagas limitadas — entre em contato hoje",
    },
    // About page
    about: {
      label: "Sobre",
      headline: "Willian Gustavo dos Santos",
      role: "Fitness Professional · Performance Coach · Wellness Consultant",
      bio: [
        "Sou Willian Gustavo dos Santos, profissional brasileiro de fitness e performance baseado em Milão, Itália. Minha trajetória no mundo fitness começou há mais de 9 anos, com uma formação universitária de 4 anos em Educação Física — a base científica e técnica que sustenta tudo que faço.",
        "Construí minha carreira trabalhando nas maiores redes de academias do Brasil, onde passei por todas as etapas: de personal trainer a gestor de academias, liderando equipes e desenvolvendo programas para centenas de clientes. Essa experiência me deu uma visão única do fitness — não apenas como atividade física, mas como negócio, cultura e estilo de vida.",
        "A mudança para a Europa representou um salto na minha visão internacional. Em Milão, trabalho com uma clientela diversa e exigente — executivos, profissionais de alto nível e pessoas que buscam resultados reais com acompanhamento premium.",
        "Meu método é fundamentado em ciência, personalização e progressão inteligente. Cada cliente recebe um programa único, desenvolvido com base em avaliação completa, objetivos claros e acompanhamento constante. O resultado não é apenas estético — é uma transformação completa de energia, saúde e estilo de vida.",
      ],
      mission: {
        label: "Missão",
        text: "Ajudar pessoas a alcançarem seu máximo potencial físico e desenvolverem um estilo de vida de alta performance — com método, ciência e paixão genuína pela transformação humana.",
      },
      vision: {
        label: "Visão",
        text: "Ser referência internacional em fitness e performance coaching, unindo a energia e determinação brasileira com a sofisticação e exigência do mercado europeu.",
      },
      values: {
        label: "Valores",
        items: [
          "Excelência técnica",
          "Comprometimento total",
          "Resultado mensurável",
          "Honestidade",
          "Evolução constante",
          "Respeito à individualidade",
        ],
      },
      credentials: {
        label: "Formação & Experiência",
        items: [
          {
            title: "Bacharel em Educação Física",
            detail: "Formação universitária de 4 anos",
          },
          {
            title: "9+ Anos de Mercado Fitness",
            detail: "Experiência em grandes redes no Brasil",
          },
          {
            title: "Gestão de Academias",
            detail: "Liderança de equipes e operações fitness",
          },
          {
            title: "Clientes Premium",
            detail: "Executivos, empresários e atletas",
          },
          {
            title: "Experiência Internacional",
            detail: "Brasil e Europa — Milão, Itália",
          },
          {
            title: "Coaching de Performance",
            detail: "Programas de alto desempenho físico",
          },
        ],
      },
      cta: "Começar minha transformação",
    },
    // Services page
    servicesPage: {
      label: "Serviços",
      headline: "Soluções premium de fitness e performance",
      sub: "Cada serviço é desenhado para quem leva os resultados a sério.",
    },
    // Footer
    footer: {
      tagline: "Fitness Professional · Performance Coach · Wellness Consultant",
      location: "Baseado em Milão, Itália",
      links: {
        title: "Links",
        items: ["Início", "Sobre", "Serviços", "Contato"],
      },
      services: {
        title: "Serviços",
        items: [
          "Personal Training",
          "Coaching Online",
          "Executive Fitness",
          "Corporate Wellness",
        ],
      },
      contact: {
        title: "Contato",
      },
      rights: "Todos os direitos reservados.",
    },
    // WhatsApp
    whatsapp: {
      tooltip: "Falar no WhatsApp",
      defaultMsg:
        "Olá Willian! Gostaria de saber mais sobre seus serviços de personal training.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      contact: "Contact",
      cta: "Talk to Willian",
    },
    hero: {
      badge: "Personal Trainer · Milan, Italy",
      question: "Ready for the biggest transformation of your life?",
      headline1: "Your body has",
      headline2: "potential.",
      headline3: "You just need the right method.",
      sub: "Brazilian fitness professional based in Milan. 9+ years transforming bodies and lives with method, science and premium coaching.",
      cta1: "Start my transformation",
      cta2: "How it works",
      scrollLabel: "See real results",
      socialProof: "500+ clients transformed worldwide",
    },
    stats: {
      title: "Numbers that speak for themselves",
      items: [
        { value: "9+", label: "Years of experience" },
        { value: "500+", label: "Clients transformed" },
        { value: "3", label: "Continents served" },
        { value: "∞", label: "Commitment to results" },
      ],
    },
    aboutTeaser: {
      label: "About Willian",
      headline: "From São Paulo to Milan — a journey of excellence",
      p1: "Holding a university degree in Physical Education and with over 9 years of experience in the fitness industry, Willian Gustavo dos Santos built his career across Brazil's largest gym chains before bringing his expertise to Europe.",
      p2: "More than workouts, Willian delivers a premium transformation experience. His method combines exercise science, performance coaching, and individualized attention — for results that last.",
      cta: "Learn my story",
      credentials: [
        "University degree in Physical Education",
        "Former premium gym manager",
        "Experience with executive clients",
        "Method proven across hundreds of transformations",
      ],
    },
    services: {
      label: "Services",
      headline: "Premium solutions for every goal",
      sub: "Each service is designed to deliver real results with professional guidance and a proven method.",
      items: [
        {
          icon: "Dumbbell",
          title: "Personal Training in Milan",
          desc: "One-on-one sessions in Milan, with a 100% personalized program for your body, routine and goals.",
          tags: ["In-person", "Personalized", "Milan"],
        },
        {
          icon: "Globe",
          title: "International Online Coaching",
          desc: "Training, nutrition and follow-up for clients anywhere in the world. Results wherever you are.",
          tags: ["Online", "Global", "Flexible"],
        },
        {
          icon: "Briefcase",
          title: "Executive Fitness Coaching",
          desc: "Program designed for executives and leaders. Physical high performance to sustain professional high performance.",
          tags: ["Executives", "Performance", "Premium"],
        },
        {
          icon: "Flame",
          title: "Body Transformation",
          desc: "Intensive body recomposition program. Fat loss, definition or muscle gain — with method and results.",
          tags: ["Transformation", "Results", "Method"],
        },
        {
          icon: "Building2",
          title: "Corporate Wellness",
          desc: "Health and well-being programs for teams and companies. Boost your team's productivity and well-being.",
          tags: ["Companies", "Teams", "Well-being"],
        },
        {
          icon: "Lightbulb",
          title: "Fitness Consulting",
          desc: "Assessment, planning and strategic guidance for gyms, companies or projects in the fitness sector.",
          tags: ["Consulting", "Strategy", "Fitness"],
        },
      ],
      cta: "View all services",
    },
    method: {
      label: "The Method",
      headline: "Every detail. Every step. Guaranteed results.",
      sub: "A structured process that transforms not just the body, but the complete lifestyle.",
      steps: [
        {
          num: "01",
          title: "Initial Assessment",
          desc: "Complete analysis of your body, history, routine, goals and limitations. The starting point for a real plan.",
        },
        {
          num: "02",
          title: "Personalized Plan",
          desc: "Creation of a 100% specific program for you — training, strategy and precisely defined goals.",
        },
        {
          num: "03",
          title: "Strategic Training",
          desc: "High-quality sessions with intelligent progression, refined technique and total focus on your development.",
        },
        {
          num: "04",
          title: "Constant Follow-up",
          desc: "Continuous support, regular feedback and direct communication. You will never be alone in the process.",
        },
        {
          num: "05",
          title: "Progressive Adjustments",
          desc: "The plan evolves with you. Real data-based adaptations to keep progress constant.",
        },
        {
          num: "06",
          title: "Sustainable Results",
          desc: "The focus is on building a new lifestyle — not a temporary fix. Results you keep forever.",
        },
      ],
    },
    whyMe: {
      label: "Why Willian",
      headline: "Why clients choose Willian?",
      sub: "Hiring Willian is not buying a workout. It's investing in a premium professional experience, with high-level vision and real commitment to your results.",
      items: [
        "4-year university degree in Physical Education",
        "Over 9 years of experience in fitness",
        "Brazilian energy and motivation",
        "International vision — experience in Brazil and Europe",
        "Experience managing gyms and leading teams",
        "Track record with premium and executive clients",
        "Personalized method with scientific progression",
        "Focus on real, measurable results",
        "Available in Milan and online worldwide",
        "Support in Portuguese, English and Italian",
      ],
      quote:
        "My mission is simple: transform your life through movement, discipline and constant evolution.",
      cta: "Start my transformation",
    },
    testimonials: {
      label: "Results",
      headline: "Real transformation stories",
      sub: "Results achieved by clients who trusted the method and the process.",
      items: [
        {
          name: "Marco T.",
          role: "Executive, Milan",
          text: "In 4 months with Willian, I lost 12kg and gained more energy than I had at 30. His coaching is unlike any personal trainer I've ever had.",
          result: "-12kg in 4 months",
        },
        {
          name: "Fernanda R.",
          role: "Entrepreneur, São Paulo → Milan",
          text: "Finding Willian was a game changer. A serious professional, clear method and real results. I recommend without hesitation.",
          result: "Complete body recomposition",
        },
        {
          name: "Alessandro B.",
          role: "Lawyer, Rome",
          text: "I've been training online with Willian for 6 months. His organization, professionalism and commitment are impressive. Best investment I made in my health.",
          result: "+8kg lean muscle",
        },
      ],
    },
    ctaSection: {
      headline: "Ready for your transformation?",
      sub: "Get in touch now and discover how I can help you achieve your goals.",
      cta1: "WhatsApp Now",
      cta2: "Send Email",
    },
    contact: {
      label: "Contact",
      headline: "Let's build your best self.",
      sub: "Send a message now. I respond in Portuguese, English and Italian.",
      form: {
        name: "Your name",
        email: "Your email",
        phone: "WhatsApp / Phone",
        service: "Service of interest",
        message: "Your message",
        send: "Send message",
        sending: "Sending...",
        success: "Message sent! I'll get back to you soon.",
        error: "Send error. Try WhatsApp.",
        whatsappIntro: "New website contact",
        messagePlaceholder: "Tell me about your goals...",
        services: [
          "Personal Training in Milan",
          "Online Coaching",
          "Executive Fitness",
          "Body Transformation",
          "Corporate Wellness",
          "Fitness Consulting",
        ],
      },
      info: {
        whatsapp: "WhatsApp",
        email: "Email",
        location: "Location",
        locationValue: "Milan, Italy",
        languages: "Available in",
        languagesValue: "Português · English · Italiano",
      },
      urgency: "Limited spots — get in touch today",
    },
    about: {
      label: "About",
      headline: "Willian Gustavo dos Santos",
      role: "Fitness Professional · Performance Coach · Wellness Consultant",
      bio: [
        "I'm Willian Gustavo dos Santos, a Brazilian fitness and performance professional based in Milan, Italy. My journey in the fitness world began over 9 years ago, with a 4-year university degree in Physical Education — the scientific and technical foundation behind everything I do.",
        "I built my career working at Brazil's largest gym chains, progressing through every stage: from personal trainer to gym manager, leading teams and developing programs for hundreds of clients. This experience gave me a unique view of fitness — not just as physical activity, but as a business, culture and lifestyle.",
        "The move to Europe represented a leap in my international vision. In Milan, I work with a diverse and demanding clientele — executives, high-level professionals and people who seek real results with premium support.",
        "My method is grounded in science, personalization and intelligent progression. Each client receives a unique program, developed based on a full assessment, clear goals and constant follow-up. The result is not just aesthetic — it's a complete transformation of energy, health and lifestyle.",
      ],
      mission: {
        label: "Mission",
        text: "To help people reach their full physical potential and develop a high-performance lifestyle — with method, science and genuine passion for human transformation.",
      },
      vision: {
        label: "Vision",
        text: "To be an international reference in fitness and performance coaching, uniting Brazilian energy and determination with the sophistication and standards of the European market.",
      },
      values: {
        label: "Values",
        items: [
          "Technical excellence",
          "Total commitment",
          "Measurable results",
          "Honesty",
          "Constant evolution",
          "Respect for individuality",
        ],
      },
      credentials: {
        label: "Education & Experience",
        items: [
          {
            title: "Bachelor's in Physical Education",
            detail: "4-year university degree",
          },
          {
            title: "9+ Years in Fitness",
            detail: "Experience at major chains in Brazil",
          },
          {
            title: "Gym Management",
            detail: "Leadership of teams and fitness operations",
          },
          {
            title: "Premium Clients",
            detail: "Executives, entrepreneurs and athletes",
          },
          {
            title: "International Experience",
            detail: "Brazil and Europe — Milan, Italy",
          },
          {
            title: "Performance Coaching",
            detail: "High-performance physical programs",
          },
        ],
      },
      cta: "Start my transformation",
    },
    servicesPage: {
      label: "Services",
      headline: "Premium fitness and performance solutions",
      sub: "Each service is designed for those who take results seriously.",
    },
    footer: {
      tagline: "Fitness Professional · Performance Coach · Wellness Consultant",
      location: "Based in Milan, Italy",
      links: {
        title: "Links",
        items: ["Home", "About", "Services", "Contact"],
      },
      services: {
        title: "Services",
        items: [
          "Personal Training",
          "Online Coaching",
          "Executive Fitness",
          "Corporate Wellness",
        ],
      },
      contact: {
        title: "Contact",
      },
      rights: "All rights reserved.",
    },
    whatsapp: {
      tooltip: "Chat on WhatsApp",
      defaultMsg:
        "Hello Willian! I'd like to know more about your personal training services.",
    },
  },

  it: {
    nav: {
      home: "Home",
      about: "Chi sono",
      services: "Servizi",
      contact: "Contatti",
      cta: "Parla con Willian",
    },
    hero: {
      badge: "Personal Trainer · Milano, Italia",
      question: "Pronto per la più grande trasformazione della tua vita?",
      headline1: "Il tuo corpo ha",
      headline2: "potenziale.",
      headline3: "Manca solo il metodo giusto.",
      sub: "Professionista brasiliano del fitness a Milano. 9+ anni a trasformare corpi e vite con metodo, scienza e coaching premium.",
      cta1: "Voglio la mia trasformazione",
      cta2: "Come funziona",
      scrollLabel: "Vedi risultati reali",
      socialProof: "500+ clienti trasformati in tutto il mondo",
    },
    stats: {
      title: "Numeri che parlano da soli",
      items: [
        { value: "9+", label: "Anni di esperienza" },
        { value: "500+", label: "Clienti trasformati" },
        { value: "3", label: "Continenti serviti" },
        { value: "∞", label: "Impegno per i risultati" },
      ],
    },
    aboutTeaser: {
      label: "Chi è Willian",
      headline: "Da San Paolo a Milano — un percorso di eccellenza",
      p1: "Laureato in Scienze Motorie con oltre 9 anni di esperienza nel settore fitness, Willian Gustavo dos Santos ha costruito la sua carriera nelle maggiori catene di palestre brasiliane prima di portare la sua expertise in Europa.",
      p2: "Più che semplici allenamenti, Willian offre un'esperienza premium di trasformazione. Il suo metodo combina scienza dell'esercizio, coaching della performance e attenzione individualizzata — per risultati duraturi.",
      cta: "Scopri la mia storia",
      credentials: [
        "Laurea universitaria in Scienze Motorie",
        "Ex manager di palestre premium",
        "Esperienza con clienti executive",
        "Metodo collaudato su centinaia di trasformazioni",
      ],
    },
    services: {
      label: "Servizi",
      headline: "Soluzioni premium per ogni obiettivo",
      sub: "Ogni servizio è progettato per ottenere risultati reali con guida professionale e un metodo collaudato.",
      items: [
        {
          icon: "Dumbbell",
          title: "Personal Training a Milano",
          desc: "Sessioni individuali a Milano, con un programma 100% personalizzato per il tuo corpo, la tua routine e i tuoi obiettivi.",
          tags: ["In presenza", "Personalizzato", "Milano"],
        },
        {
          icon: "Globe",
          title: "Coaching Online Internazionale",
          desc: "Allenamento, nutrizione e follow-up per clienti in qualsiasi parte del mondo. Risultati ovunque tu sia.",
          tags: ["Online", "Globale", "Flessibile"],
        },
        {
          icon: "Briefcase",
          title: "Executive Fitness Coaching",
          desc: "Programma progettato per dirigenti e leader. Alta performance fisica per sostenere l'alta performance professionale.",
          tags: ["Dirigenti", "Performance", "Premium"],
        },
        {
          icon: "Flame",
          title: "Trasformazione Corporea",
          desc: "Programma intensivo di ricomposizione corporea. Dimagrimento, definizione o aumento muscolare — con metodo e risultati.",
          tags: ["Trasformazione", "Risultati", "Metodo"],
        },
        {
          icon: "Building2",
          title: "Corporate Wellness",
          desc: "Programmi di salute e benessere per team e aziende. Migliora la produttività e il benessere del tuo team.",
          tags: ["Aziende", "Team", "Benessere"],
        },
        {
          icon: "Lightbulb",
          title: "Consulenza Fitness",
          desc: "Valutazione, pianificazione e orientamento strategico per palestre, aziende o progetti nel settore fitness.",
          tags: ["Consulenza", "Strategia", "Fitness"],
        },
      ],
      cta: "Vedi tutti i servizi",
    },
    method: {
      label: "Il Metodo",
      headline: "Ogni dettaglio. Ogni passo. Risultato garantito.",
      sub: "Un processo strutturato che trasforma non solo il corpo, ma lo stile di vita completo.",
      steps: [
        {
          num: "01",
          title: "Valutazione Iniziale",
          desc: "Analisi completa del tuo corpo, storia, routine, obiettivi e limitazioni. Il punto di partenza per un piano reale.",
        },
        {
          num: "02",
          title: "Piano Personalizzato",
          desc: "Creazione di un programma 100% specifico per te — allenamento, strategia e obiettivi definiti con precisione.",
        },
        {
          num: "03",
          title: "Allenamento Strategico",
          desc: "Sessioni di alta qualità con progressione intelligente, tecnica raffinata e focus totale sul tuo sviluppo.",
        },
        {
          num: "04",
          title: "Monitoraggio Costante",
          desc: "Supporto continuo, feedback regolare e comunicazione diretta. Non sarai mai solo nel processo.",
        },
        {
          num: "05",
          title: "Aggiustamenti Progressivi",
          desc: "Il piano si evolve con te. Adattamenti basati su dati reali per mantenere costante il progresso.",
        },
        {
          num: "06",
          title: "Risultati Sostenibili",
          desc: "L'obiettivo è costruire un nuovo stile di vita — non una soluzione temporanea. Risultati che mantieni per sempre.",
        },
      ],
    },
    whyMe: {
      label: "I Differenziali",
      headline: "Perché i clienti scelgono Willian?",
      sub: "Assumere Willian non significa comprare un allenamento. È investire in un'esperienza professionale premium, con visione di alto livello e vero impegno per i tuoi risultati.",
      items: [
        "Laurea universitaria quadriennale in Scienze Motorie",
        "Oltre 9 anni di esperienza nel fitness",
        "Energia e motivazione brasiliana",
        "Visione internazionale — esperienza in Brasile ed Europa",
        "Esperienza nella gestione di palestre e team",
        "Track record con clienti premium ed executive",
        "Metodo personalizzato con progressione scientifica",
        "Focus su risultati reali e misurabili",
        "Disponibile a Milano e online in tutto il mondo",
        "Supporto in portoghese, inglese e italiano",
      ],
      quote:
        "La mia missione è semplice: trasformare la tua vita attraverso il movimento, la disciplina e l'evoluzione costante.",
      cta: "Inizia la mia trasformazione",
    },
    testimonials: {
      label: "Risultati",
      headline: "Storie di trasformazione reale",
      sub: "Risultati raggiunti da clienti che hanno creduto nel metodo e nel processo.",
      items: [
        {
          name: "Marco T.",
          role: "Manager, Milano",
          text: "In 4 mesi con Willian ho perso 12kg e guadagnato più energia di quanta ne avessi a 30 anni. Il suo approccio è diverso da qualsiasi personal trainer che abbia mai avuto.",
          result: "-12kg in 4 mesi",
        },
        {
          name: "Fernanda R.",
          role: "Imprenditrice, San Paolo → Milano",
          text: "Trovare Willian è stato un punto di svolta. Professionista serio, metodo chiaro e risultati reali. Lo consiglio senza esitazione.",
          result: "Ricomposizione corporea completa",
        },
        {
          name: "Alessandro B.",
          role: "Avvocato, Roma",
          text: "Mi alleno online con Willian da 6 mesi. La sua organizzazione, professionalità e impegno sono impressionanti. Il miglior investimento che abbia fatto per la mia salute.",
          result: "+8kg massa muscolare",
        },
      ],
    },
    ctaSection: {
      headline: "Pronto per la tua trasformazione?",
      sub: "Contattami ora e scopri come posso aiutarti a raggiungere i tuoi obiettivi.",
      cta1: "WhatsApp Ora",
      cta2: "Invia Email",
    },
    contact: {
      label: "Contatti",
      headline: "Costruiamo insieme la tua versione migliore.",
      sub: "Invia un messaggio ora. Rispondo in portoghese, inglese e italiano.",
      form: {
        name: "Il tuo nome",
        email: "La tua email",
        phone: "WhatsApp / Telefono",
        service: "Servizio di interesse",
        message: "Il tuo messaggio",
        send: "Invia messaggio",
        sending: "Invio in corso...",
        success: "Messaggio inviato! Ti risponderò presto.",
        error: "Errore nell'invio. Prova via WhatsApp.",
        whatsappIntro: "Nuovo contatto dal sito",
        messagePlaceholder: "Raccontami i tuoi obiettivi...",
        services: [
          "Personal Training a Milano",
          "Coaching Online",
          "Executive Fitness",
          "Trasformazione Corporea",
          "Corporate Wellness",
          "Consulenza Fitness",
        ],
      },
      info: {
        whatsapp: "WhatsApp",
        email: "Email",
        location: "Posizione",
        locationValue: "Milano, Italia",
        languages: "Disponibile in",
        languagesValue: "Português · English · Italiano",
      },
      urgency: "Posti limitati — contattami oggi",
    },
    about: {
      label: "Chi sono",
      headline: "Willian Gustavo dos Santos",
      role: "Fitness Professional · Performance Coach · Wellness Consultant",
      bio: [
        "Sono Willian Gustavo dos Santos, professionista brasiliano del fitness e della performance basato a Milano, Italia. Il mio percorso nel mondo del fitness è iniziato oltre 9 anni fa, con una laurea quadriennale in Scienze Motorie — la base scientifica e tecnica di tutto ciò che faccio.",
        "Ho costruito la mia carriera lavorando nelle maggiori catene di palestre brasiliane, progredendo attraverso ogni fase: da personal trainer a manager di palestre, guidando team e sviluppando programmi per centinaia di clienti. Questa esperienza mi ha dato una visione unica del fitness — non solo come attività fisica, ma come business, cultura e stile di vita.",
        "Il trasferimento in Europa ha rappresentato un salto nella mia visione internazionale. A Milano, lavoro con una clientela diversificata e esigente — dirigenti, professionisti di alto livello e persone che cercano risultati reali con supporto premium.",
        "Il mio metodo si basa su scienza, personalizzazione e progressione intelligente. Ogni cliente riceve un programma unico, sviluppato sulla base di una valutazione completa, obiettivi chiari e monitoraggio costante. Il risultato non è solo estetico — è una trasformazione completa di energia, salute e stile di vita.",
      ],
      mission: {
        label: "Missione",
        text: "Aiutare le persone a raggiungere il loro massimo potenziale fisico e sviluppare uno stile di vita ad alta performance — con metodo, scienza e genuina passione per la trasformazione umana.",
      },
      vision: {
        label: "Visione",
        text: "Essere un riferimento internazionale nel fitness e nel coaching della performance, unendo l'energia e la determinazione brasiliana con la sofisticazione e gli standard del mercato europeo.",
      },
      values: {
        label: "Valori",
        items: [
          "Eccellenza tecnica",
          "Impegno totale",
          "Risultati misurabili",
          "Onestà",
          "Evoluzione costante",
          "Rispetto per l'individualità",
        ],
      },
      credentials: {
        label: "Formazione & Esperienza",
        items: [
          {
            title: "Laurea in Scienze Motorie",
            detail: "Corso universitario quadriennale",
          },
          {
            title: "9+ Anni nel Fitness",
            detail: "Esperienza nelle maggiori catene brasiliane",
          },
          {
            title: "Gestione Palestre",
            detail: "Leadership di team e operazioni fitness",
          },
          {
            title: "Clienti Premium",
            detail: "Dirigenti, imprenditori e atleti",
          },
          {
            title: "Esperienza Internazionale",
            detail: "Brasile ed Europa — Milano, Italia",
          },
          {
            title: "Coaching della Performance",
            detail: "Programmi di alta performance fisica",
          },
        ],
      },
      cta: "Inizia la mia trasformazione",
    },
    servicesPage: {
      label: "Servizi",
      headline: "Soluzioni premium di fitness e performance",
      sub: "Ogni servizio è progettato per chi prende i risultati sul serio.",
    },
    footer: {
      tagline: "Fitness Professional · Performance Coach · Wellness Consultant",
      location: "Basato a Milano, Italia",
      links: {
        title: "Link",
        items: ["Home", "Chi sono", "Servizi", "Contatti"],
      },
      services: {
        title: "Servizi",
        items: [
          "Personal Training",
          "Coaching Online",
          "Executive Fitness",
          "Corporate Wellness",
        ],
      },
      contact: {
        title: "Contatti",
      },
      rights: "Tutti i diritti riservati.",
    },
    whatsapp: {
      tooltip: "Chatta su WhatsApp",
      defaultMsg:
        "Ciao Willian! Vorrei saperne di più sui tuoi servizi di personal training.",
    },
  },
};

export type TranslationKey = typeof translations.pt;
export function t(locale: Locale): TranslationKey {
  return translations[locale] ?? translations.pt;
}
