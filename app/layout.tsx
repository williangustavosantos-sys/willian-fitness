import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/LocaleContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
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
  : new URL("https://willian-fitness.vercel.app");

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Willian Fitness",
  title: "Willian Fitness | Personal Trainer a Milano e online",
  description: "Allenamenti personali a Milano e programmi online costruiti intorno alla tua vita. Parla direttamente con Willian.",
  keywords: ["personal trainer Milano", "allenamento online", "personal trainer brasiliano Milano", "fitness Milano", "Willian Fitness", "Willian personal trainer"],
  icons: {
    icon: "/tiktok-app-icon.png",
    shortcut: "/tiktok-app-icon.png",
    apple: "/tiktok-app-icon.png",
  },
  openGraph: {
    title: "Willian Personal Trainer | Milano e online",
    description: "Il tuo allenamento deve adattarsi alla tua vita, non il contrario.",
    type: "website",
    images: metadataBase
      ? [{ url: "/og.png", width: 1200, height: 630, alt: "Willian Personal Trainer — Milano e online" }]
      : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: "Willian Personal Trainer | Milano e online",
    description: "Il tuo allenamento deve adattarsi alla tua vita, non il contrario.",
    images: metadataBase ? ["/og.png"] : undefined,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable}`}>
      <body>
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
