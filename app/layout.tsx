import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        url: `${siteUrl}og-image.png`, // Must be an absolute URL
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
    images: [`${siteUrl}og-image.png`], // Must be an absolute URL
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
    <html lang="pt-BR" className="bg-[#0d0d0d]">
      <body className={inter.className}>
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
        >
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1815338769066819');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1815338769066819&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
        
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
