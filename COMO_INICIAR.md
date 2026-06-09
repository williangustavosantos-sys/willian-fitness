# Willian Gustavo — Site Premium

## ▶ Como iniciar o projeto

### 1. Abrir o Terminal na pasta do projeto

```
cd "PERSONAL TRAINER WILLIAN/willian-fitness"
```

### 2. Instalar dependências (apenas na primeira vez)

```
npm install
```

### 3. Rodar em modo desenvolvimento (visualizar no navegador)

```
npm run dev
```

Depois abra: **http://localhost:3000**

### 4. Gerar versão de produção

```
npm run build
npm start
```

---

## 📁 Estrutura do projeto

```
willian-fitness/
├── app/
│   ├── page.tsx          ← Página Home
│   ├── about/page.tsx    ← Página Sobre
│   ├── services/page.tsx ← Página Serviços
│   ├── contact/page.tsx  ← Página Contato
│   ├── layout.tsx        ← Layout global (Header, Footer, WhatsApp)
│   └── globals.css       ← Estilos globais + variáveis de cor
│
├── components/
│   ├── Header.tsx        ← Navegação + seletor de idioma
│   ├── Footer.tsx        ← Rodapé + CTA
│   ├── WhatsAppButton.tsx← Botão flutuante WhatsApp
│   ├── RevealOnScroll.tsx← Animações ao rolar
│   └── home/             ← Seções da Home
│
├── lib/
│   ├── i18n.ts           ← Todas as traduções (PT/EN/IT)
│   └── LocaleContext.tsx ← Contexto de idioma
│
└── next.config.js
```

## 🎨 Personalizar

- **Foto de perfil**: Substitua as URLs de imagem do Unsplash por fotos reais suas
- **Traduções**: Edite `lib/i18n.ts` para ajustar qualquer texto
- **Cores**: Edite as variáveis em `app/globals.css` e `tailwind.config.ts`
- **Contato**: WhatsApp e e-mail estão definidos no topo de cada componente como constantes

## 🚀 Deploy (Vercel — grátis)

1. Crie uma conta em vercel.com
2. Conecte o projeto ao GitHub
3. Deploy automático a cada commit

---

Desenvolvido para **Willian Gustavo dos Santos** — Fitness Professional · Milano, Italia
