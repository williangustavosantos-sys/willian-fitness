import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import RevealOnScroll from "@/components/RevealOnScroll";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;
const metadataBase = deploymentHost
  ? new URL(deploymentHost.startsWith("http") ? deploymentHost : `https://${deploymentHost}`)
  : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: "Willian Gustavo | Treino de verdade para a vida real",
  description: "Personal trainer brasileiro em Milão e consultoria online. Treino personalizado, conteúdo fitness direto e parcerias com propósito.",
  keywords: ["personal trainer Milão", "consultoria online fitness", "treino personalizado", "personal trainer brasileiro", "conteúdo fitness", "Willian Gustavo"],
  openGraph: {
    title: "Willian Gustavo | Treino de verdade para a vida real",
    description: "Consultoria online, personal em Milão e conteúdo fitness sem complicação.",
    type: "website",
    images: metadataBase
      ? [{ url: "/og.png", width: 1731, height: 909, alt: "Willian Gustavo — treino de verdade para a vida real" }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Willian Gustavo | Treino de verdade para a vida real",
    description: "Consultoria online, personal em Milão e conteúdo fitness sem complicação.",
    images: metadataBase ? ["/og.png"] : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" className={`${display.variable} ${body.variable}`}>
      <body>
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
