"use client";

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueTitle from '../components/BlueTitle';
import PageTransitionGlasses from '../components/PageTransitionGlasses';

export default function APropos() {
  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="À propos" subtitle="L'Atelier du 15ème" />

          {/* Intro visuelle */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold wood-text drop-shadow">Rencontrez Hanna, Notre Experte en Optique</h2>
              <p className="text-neutral-300">
                Nous sommes fier de vous présenter notre conseillère Hanna, une experte en optique dévouée à offrir des conseils personnalisés
                pour répondre à vos besoins visuels uniques. Avec son expertise et son attention aux détails, Hanna est là pour vous guider dans le
                choix des lunettes parfaites pour votre style et votre confort.
              </p>
            </div>
          </section>

          {/* Histoire du magasin */}
          <section className="container mx-auto px-4 mt-16">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 wood-bg shadow-xl">
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-black mb-4">Histoire du magasin</h3>
                <p className="text-black mb-2">L'Atelier du 15ème a ouvert ses portes en 2019.</p>
                <p className="text-black mb-2">Depuis nos débuts, nous avons à cœur d'offrir un accompagnement attentif, des conseils honnêtes et un suivi durable pour chaque client.</p>
                <p className="text-black mb-2">Nous travaillons avec des marques créatrices et privilégions les fabrications françaises lorsque cela est possible, pour conjuguer qualité, esthétisme et confort.</p>
                <p className="text-black">Notre savoir‑faire couvre l'examen de vue, l'ajustage précis des montures, le choix des verres (dont progressifs) et l'entretien/réparation pour prolonger la vie de vos lunettes.</p>
              </div>
            </div>
          </section>

          {/* Excellence et produits */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-3xl mx-auto">
              <div className="bg-neutral-900 rounded-xl border border-neutral-800 p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-3">Notre engagement</h4>
                <p className="text-neutral-300">
                  Nous proposons des produits fabriqués en France de haute qualité, des lentilles progressives pour une vision nette à toutes les distances
                  et des conseils d'experts pour garantir votre satisfaction visuelle.
                </p>
              </div>
            </div>
          </section>

          {/* Visite et conclusion */}
          <section className="container mx-auto px-4 mt-16 mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-semibold wood-text drop-shadow mb-4">Visitez Notre Boutique à Paris 15ème</h3>
              <p className="text-neutral-300 mb-6">
                Découvrez l'expérience exceptionnelle d'optique que nous offrons chez L'Atelier du 15ème.
                Rencontrez Hanna, explorez nos produits de qualité et trouvez les lunettes parfaites pour vous.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/#collections" className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="absolute inset-0 origin-left scale-x-0 wood-bg transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="relative group-hover:text-black">Nos collections</span>
                </a>
                <a href="mailto:atelierdu15eme@gmail.com" className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="absolute inset-0 opacity-0 wood-bg transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="relative group-hover:text-white">Contactez-nous</span>
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

