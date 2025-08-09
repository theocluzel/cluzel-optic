"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueTitle from '../components/BlueTitle';
import PageTransitionGlasses from '../components/PageTransitionGlasses';

export default function RecyclageMedico() {
  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Recyclage MÉDICO" subtitle="Solidarité et seconde vie pour vos montures" />

          {/* Visuel d'en-tête */}
          <section className="container mx-auto px-4 mt-12">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-xl wood-bg">
              {/* On utilise <img> pour accepter le fichier tel quel, quelle que soit son extension */}
              <img src="/images/medico clear.png" alt="MEDICO Lions de France" className="w-full h-auto block" />
            </div>
          </section>

          {/* Texte de présentation */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-neutral-300">
                Nous sommes fier de vous partager notre collaboration avec l'association MEDICO Lions de France. Ce projet
                humanitaire vise à recycler les montures de lunettes pour une noble cause.
              </p>
              <p className="text-neutral-300">
                Médico - Lions Clubs de France aide les populations défavorisées des pays en développement aux niveaux local,
                régional, national et international.
              </p>
              <div className="pt-2">
                <a
                  href="http://medico-lcf.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 wood-bg transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative group-hover:text-black">En savoir plus</span>
                </a>
              </div>
            </div>
          </section>

          {/* Appel à contribution clients */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-4xl mx-auto rounded-2xl border border-neutral-800 wood-bg shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <p className="text-black mb-2">
                  Vous aussi, en tant que client de l'Atelier du 15ème, pouvez contribuer à cette cause en nous rapportant vos
                  anciennes montures de lunettes. Qui seront alors envoyées à l'association.
                </p>
                <p className="text-black">Un carton y est disposé au sein de la boutique.</p>
              </div>
            </div>
          </section>

          {/* Visuels complémentaires */}
          <section className="container mx-auto px-4 mt-12 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-lg">
                <div className="relative w-full aspect-[4/3]">
                  <img src="/images/medico 1.webp" alt="Recyclage MEDICO - visuel 1" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-lg">
                <div className="relative w-full aspect-[4/3]">
                  <img src="/images/medico 2.webp" alt="Recyclage MEDICO - visuel 2" className="absolute inset-0 w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
}

