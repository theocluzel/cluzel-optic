import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://fastidious-fox-d409c6.netlify.app'),
  title: {
    default: "L'Atelier du 15ème – Opticien lunetier créateur à Paris 15",
    template: "%s | L'Atelier du 15ème",
  },
  description:
    "Opticien lunetier créateur à Paris 15. Lunettes de vue, solaires, lentilles de contact, verres progressifs, conseils personnalisés. Made in France.",
  keywords: [
    "opticien Paris 15",
    "opticien lunetier",
    "lunettes de vue",
    "lunettes de soleil",
    "lentilles de contact",
    "verres progressifs",
    "atelier du 15ème",
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: "L'Atelier du 15ème",
    title: "L'Atelier du 15ème – Opticien lunetier créateur à Paris 15",
    description:
      "Opticien lunetier créateur à Paris 15. Lunettes de vue, solaires, lentilles de contact, verres progressifs, conseils personnalisés.",
    url: '/',
    images: [
      {
        url: '/images/atelier-15eme-storefront.jpg',
        width: 1200,
        height: 630,
        alt: "Devanture L'Atelier du 15ème",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "L'Atelier du 15ème – Opticien lunetier créateur à Paris 15",
    description:
      "Opticien lunetier créateur à Paris 15. Lunettes de vue, solaires, lentilles de contact, verres progressifs, conseils personnalisés.",
    images: ['/images/atelier-15eme-storefront.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png?v=2', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png?v=2', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png?v=2', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico?v=2', sizes: '48x48' },
    ],
    apple: [{ url: '/apple-touch-icon.png?v=2', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'mask-icon', url: '/icon.svg?v=2', color: '#111827' },
    ],
  },
};

// Désactive la revalidation ISR globale (les routes dynamiques peuvent surcharger)
export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
