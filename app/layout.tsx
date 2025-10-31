import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryProvider } from "@/components/providers/query-provider";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://clubedaoratoria.net.br/';
const siteName = 'Clube da Oratória';
const siteDescription = 'Descubra como desenvolver uma comunicação autêntica, confiante e irresistível. Curso completo que te ajuda a destravar a fala, vencer o medo de se expressar e comunicar com autoridade.';
const siteTitle = 'Clube da Oratória - Transforme sua Comunicação';

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: ["oratória", "comunicação", "falar em público", "curso de oratória", "destravar a fala", "timidez", "everton teles", "comunicação assertiva", "vencer timidez"],
  authors: [{ name: "Everton Teles" }],
  creator: "Everton Teles",
  publisher: "Everton Teles",
  metadataBase: new URL(siteUrl),
  
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Clube da Oratória - Transforme sua Comunicação',
        type: 'image/png',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.png'],
    creator: '@evertonteles',
    site: '@evertonteles',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
  
  manifest: '/manifest.json',
  
  verification: {
    // google: 'seu-codigo-google-aqui', // Adicione quando tiver
    // yandex: 'seu-codigo-yandex-aqui',
  },
  
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <QueryProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
