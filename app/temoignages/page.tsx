"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueTitle from '../components/BlueTitle';
import PageTransitionGlasses from '../components/PageTransitionGlasses';

export default function Temoignages() {
  // Lien générique Google Maps vers la boutique (peut être remplacé par un lien "write review" direct si dispo)
  const reviewLink = "https://www.google.com/search?sa=X&sca_esv=3bd3a45d31a2d09a&rlz=1C5CHFA_enFR1145FR1145&biw=890&bih=888&tbm=lcl&sxsrf=AE3TifNrxUM9f-GzytJlrJ3dLxIcAWCGsw:1754696315222&q=avis%20sur%20l%27%20atelier%20du%2015eme%20opticien%20et%20lunetier%20paris&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY2NDI3BUJDQ0NjCwszIyPzDYyMrxjNE8syixWKS4sUctQVEktSczJTixRSShUMTVNzUxXyC0oykzNT8xRSSxRySvNSS0CyBYlFmcWLWMnVCQCK-KqajwAAAA&rldimm=13312757571113886227&hl=fr-FR&ved=0CBcQ5foLahcKEwjQse6UsfyOAxUAAAAAHQAAAAAQCg#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSUNkNEltazN3RRAB&lrd=0x47e671256c5c332d:0xb8c06a7a1722a213,3,,,,";

  // Captures d’écran fournies (placer les fichiers dans /public/images)
  const screenshots = [
    "/images/avis 1.png",
    "/images/avis 2.png",
    "/images/avis 3.png",
    "/images/avis 4.png",
  ];

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Témoignages" subtitle="Votre avis compte beaucoup pour nous" />

          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-neutral-300">
                Merci pour vos retours qui nous aident à nous améliorer chaque jour.
              </p>
              <div className="mt-8 flex flex-wrap gap-6 justify-center">
                {screenshots.map((src) => (
                  <div key={src} className="w-full sm:w-[420px] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-lg">
                    {/* On utilise <img> simple pour accepter vos fichiers tels quels */}
                    <img src={src} alt="Capture d’écran d’un avis client" className="w-full h-auto block" />
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <a
                  href={reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 wood-bg transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative group-hover:text-black">Laisser un avis</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
}

