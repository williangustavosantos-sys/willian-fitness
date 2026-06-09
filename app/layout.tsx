import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Willian Gustavo | Personal Trainer Milano | Fitness Coach",
  description:
    "Profissional brasileiro de fitness baseado em Milão, Itália. Personal Training, Performance Coaching & Wellness Consulting. 9+ anos de experiência.",
  keywords: [
    "Personal Trainer Milan",
    "Personal Trainer Milano",
    "Personal Trainer em Milão",
    "Brazilian Personal Trainer Italy",
    "Online Fitness Coach",
    "Fitness Coach Milan",
    "Executive Fitness Coach Milan",
    "Personal Trainer Brasileiro na Itália",
    "Consultoria Fitness Online",
    "Willian Gustavo personal trainer",
  ],
  openGraph: {
    title: "Willian Gustavo | Personal Trainer Milano",
    description:
      "Fitness Professional, Performance Coach & Wellness Consultant based in Milan, Italy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-obsidian text-white font-sans antialiased">
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <RevealOnScroll />
        </LocaleProvider>
      </body>
    </html>
  );
}
