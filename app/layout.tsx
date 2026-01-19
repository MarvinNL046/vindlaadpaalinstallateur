import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import GoogleConsent from "@/components/GoogleConsent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClientShellTop, ClientShellBottom } from "@/components/ClientShell";
import LeaderboardAd from "@/components/ads/LeaderboardAd";

// AdSense Publisher ID
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-XXXXXXXXXXXXXXXX";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

// PWA Viewport configuration
export const viewport: Viewport = {
  themeColor: "#16A34A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vindlaadpaalinstallateur.nl"),
  title: "VindLaadpaalInstallateur.nl - Vind een Laadpaal Installateur bij jou in de Buurt",
  description: "Vind gecertificeerde laadpaal installateurs in heel Nederland. Vergelijk thuisladers, zakelijke laadpalen en krijg gratis offertes. Alfen, EVBox, Wallbox, Tesla en meer.",
  keywords: "laadpaal installateur, laadpaal installeren, thuislader, elektrische auto opladen, laadpaal thuis, zakelijke laadpaal, EV lader, slim laden, laadstation, Nederland",
  authors: [{ name: "VindLaadpaalInstallateur.nl" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Laadpaal Installateur",
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.vindlaadpaalinstallateur.nl",
    title: "VindLaadpaalInstallateur.nl - Vind een Laadpaal Installateur bij jou in de Buurt",
    description: "Vind gecertificeerde laadpaal installateurs in heel Nederland. Vergelijk thuisladers en zakelijke laadpalen.",
    siteName: "VindLaadpaalInstallateur.nl",
  },
  twitter: {
    card: "summary_large_image",
    title: "VindLaadpaalInstallateur.nl - Laadpaal Installateurs in Nederland",
    description: "Vind gecertificeerde laadpaal installateurs in heel Nederland. Vergelijk thuisladers en zakelijke laadpalen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.vindlaadpaalinstallateur.nl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        {/* PWA Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

        {/* Google AdSense - Deferred loading for better performance */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ClientShellTop />
        <GoogleConsent />
        <Header />

        <main className="min-h-screen">
          {children}
        </main>

        {/* Pre-footer ad */}
        <LeaderboardAd className="mt-12" />

        <Footer />

        {/* Non-critical UI elements - lazy loaded */}
        <ClientShellBottom />
        <Analytics />
      </body>
    </html>
  );
}
