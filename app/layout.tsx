
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "./components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://atelierdu15eme.fr'),
  title: {
    default: "L'Atelier du 15ème – Opticien lunetier créateur à Paris 15",
    template: "%s | L'Atelier du 15ème",
  },
  description:
    "L'Atelier du 15ème - Opticien lunetier créateur à Paris 15ème arrondissement. Lunettes de vue, solaires, lentilles de contact, verres progressifs. 138 Bd de Grenelle, 75015 Paris. Conseils personnalisés, Made in France.",
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
    "opticien paris",
    "optique paris",
    "opticien 15ème arrondissement",
    "opticien paris 15ème arrondissement",
    "lunettes paris 15",
    "opticien grenelle",
    "opticien boulevard grenelle",
    "opticien 138 boulevard grenelle",
    "opticien paris 75015",
    "magasin lunettes paris 15ème",
    "opticien paris centre",
    "opticien paris 15ème arrondissement",
    "lunettes vue paris 15",
    "lunettes soleil paris 15",
    "verres progressifs paris 15",
    "lentilles contact paris 15",
    "opticien paris 15ème arrondissement",
    "atelier du 15ème opticien",
    "atelier du 15ème paris",
    "atelier du 15ème lunettes",
    "opticien créateur paris 15",
    "lunetier paris 15",
    "opticien paris 15ème arrondissement",
    "magasin optique paris 15",
    "opticien paris 15ème arrondissement",
    "opticien paris 15ème arrondissement",
    "opticien paris 15ème arrondissement",
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: "L'Atelier du 15ème",
    title: "L'Atelier du 15ème – Opticien lunetier créateur à Paris 15ème arrondissement",
    description:
      "L'Atelier du 15ème - Opticien lunetier créateur à Paris 15ème arrondissement. Lunettes de vue, solaires, lentilles de contact, verres progressifs. 138 Bd de Grenelle, 75015 Paris.",
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
    title: "L'Atelier du 15ème – Opticien lunetier créateur à Paris 15ème arrondissement",
    description:
      "L'Atelier du 15ème - Opticien lunetier créateur à Paris 15ème arrondissement. Lunettes de vue, solaires, lentilles de contact, verres progressifs. 138 Bd de Grenelle, 75015 Paris.",
    images: ['/images/atelier-15eme-storefront.jpg'],
  },
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': 'https://atelierdu15eme.fr',
    },
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atelierdu15eme.fr';
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Optician", "Store"],
    "name": "L'Atelier du 15ème",
    "alternateName": ["Atelier du 15ème", "Opticien Paris 15", "Opticien 15ème arrondissement"],
    "description": "L'Atelier du 15ème - Opticien lunetier créateur à Paris 15ème arrondissement. Lunettes de vue, solaires, lentilles de contact, verres progressifs. 138 Bd de Grenelle, 75015 Paris. Conseils personnalisés, Made in France.",
    "url": "https://atelierdu15eme.fr/",
    "mainEntityOfPage": "https://atelierdu15eme.fr/",
    "telephone": "+33 1 45 75 29 47",
    "email": "atelierdu15eme@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "138 Bd de Grenelle",
      "addressLocality": "Paris",
      "addressRegion": "Île-de-France",
      "postalCode": "75015",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "48.8571",
      "longitude": "2.2934"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Paris",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "15ème arrondissement"
        }
      }
    ],
    "image": [
      `${siteUrl}/images/atelier-15eme-storefront.jpg`
    ],
    "logo": `${siteUrl}/images/logo atelier du 15ème.webp`,
    "sameAs": [
      "https://www.instagram.com/atelier_du_15eme/"
    ],
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "10:00", "closes": "13:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday"], "opens": "14:00", "closes": "19:00" }
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
    "currenciesAccepted": "EUR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services optiques",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lunettes de vue",
            "description": "Lunettes de vue personnalisées"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lunettes de soleil",
            "description": "Lunettes de soleil avec protection UV"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Lentilles de contact",
            "description": "Lentilles de contact confortables"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Verres progressifs",
            "description": "Verres progressifs de qualité"
          }
        }
      ]
    },
    "keywords": "opticien paris 15, opticien 15ème arrondissement, lunettes paris 15, opticien grenelle, opticien boulevard grenelle, atelier du 15ème, opticien créateur paris, lunetier paris 15, magasin lunettes paris 15ème, opticien paris 75015"
  };
  return (
    <html lang="fr">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="nCvxACMAXGqsJXcTf1QtM6fSaNusyZCtJyRRpqULy-c" />
                {/* Force canonical domain - MULTIPLE CANONICAL TAGS */}
                <link rel="canonical" href="https://atelierdu15eme.fr/" />
                <link rel="canonical" href="https://atelierdu15eme.fr" />
                <meta property="og:url" content="https://atelierdu15eme.fr/" />
                <meta name="twitter:url" content="https://atelierdu15eme.fr/" />
                {/* Prevent old domain indexing */}
                <meta name="robots" content="noindex, nofollow" data-domain="fastidious-fox-d409c6.netlify.app" />
        {/* Prevent indexing of old subdomain */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Cookiebot: bloque les scripts jusqu'au consentement (auto) */}
        {process.env.NEXT_PUBLIC_COOKIEBOT_ID && (
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={process.env.NEXT_PUBLIC_COOKIEBOT_ID}
            data-blockingmode="auto"
            type="text/javascript"
          />
        )}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              id="gcm-default"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('consent', 'default', {
                    ad_storage: 'denied',
                    analytics_storage: 'denied',
                    functionality_storage: 'denied',
                    personalization_storage: 'denied',
                    security_storage: 'granted'
                  });
                `,
              }}
            />
            <script
              type="text/plain"
              data-cookieconsent="statistics"
              data-src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              id="gtag-init"
              type="text/plain"
              data-cookieconsent="statistics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);} 
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
                `,
              }}
            />
            <script
              id="cookiebot-gcm-sync"
              dangerouslySetInnerHTML={{
                __html: `
                  function updateGcmFromCookiebot() {
                    if (!window.Cookiebot || typeof gtag !== 'function') return;
                    gtag('consent', 'update', {
                      ad_storage: Cookiebot.consent.marketing ? 'granted' : 'denied',
                      analytics_storage: Cookiebot.consent.statistics ? 'granted' : 'denied',
                      functionality_storage: Cookiebot.consent.preferences ? 'granted' : 'denied',
                      personalization_storage: 'denied',
                      security_storage: 'granted'
                    });
                  }
                  window.addEventListener('CookiebotOnAccept', updateGcmFromCookiebot);
                  window.addEventListener('CookiebotOnDecline', updateGcmFromCookiebot);
                `,
              }}
            />
            <AnalyticsTracker />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
