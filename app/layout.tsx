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
    "opticien créateur",
    "opticien 15ème",
    "opticien 15e",
    "opticien paris quinzième",
    "atelier du 15eme",
    "atelier du 15e",
    "atelier du 15ème",
    "opticien paris 15ème",
    "opticien paris 15e",
    "magasin de lunettes paris 15",
    "lunettes créateurs paris",
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

// Force le rendu dynamique (évite la mise en cache HTML/CDN)
export const dynamic = 'force-dynamic';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://fastidious-fox-d409c6.netlify.app';
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "L'Atelier du 15ème",
    "description": "Opticien lunetier créateur à Paris 15: lunettes de vue, solaires, lentilles, verres progressifs et conseils personnalisés.",
    "url": siteUrl,
    "telephone": "+33 1 45 75 29 47",
    "email": "atelierdu15eme@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "138 Bd de Grenelle",
      "addressLocality": "Paris",
      "postalCode": "75015",
      "addressCountry": "FR"
    },
    "image": [
      `${siteUrl}/images/atelier-15eme-storefront.jpg`
    ],
    "sameAs": [
      "https://www.instagram.com/atelier_du_15eme/"
    ],
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "13:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "14:00", "closes": "19:00" }
    ],
  };
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
