"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueTitle from '../components/BlueTitle';
import PageTransitionGlasses from '../components/PageTransitionGlasses';

export default function MonturesBioAcetate() {
  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Montures BIO acétate" subtitle="Élégance, confort et responsabilité" />

          {/* Visuel et introduction */}
          <section className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
                <div className="relative w-full aspect-[4/3] bg-neutral-900">
                  <img src="/images/acetate.webp" alt="Bioacétate" className="absolute inset-0 w-full h-full object-contain" />
                </div>
              </div>
              <p className="text-neutral-300">
                Voici une image représentant le bioacétate, un matériau souvent utilisé dans la fabrication de lunettes écologiques.
              </p>
            </div>
          </section>

          {/* Qu'est-ce que l'acétate ? */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-4xl mx-auto rounded-2xl border border-neutral-800 wood-bg shadow-xl overflow-hidden">
              <div className="p-6 md:p-8 text-black space-y-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">Qu'est-ce que l'acétate ?</h3>
                  <p>
                    L'acétate, souvent appelé acétate de cellulose, est un matériau plastique semi‑synthétique dérivé de fibres naturelles
                    comme le coton ou la pulpe de bois. Il est particulièrement prisé dans la fabrication de montures de lunettes grâce à ses
                    qualités uniques.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Propriétés de l'acétate :</h4>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><span className="font-semibold">Résistance</span> : l'acétate est durable et peut résister à l'usure quotidienne.</li>
                    <li><span className="font-semibold">Flexibilité</span> : malgré sa dureté, il est suffisamment malléable pour être ajusté, ce qui est essentiel pour les montures.</li>
                    <li><span className="font-semibold">Esthétique</span> : il offre une vaste gamme de couleurs et de motifs, grâce à sa capacité à bien retenir les teintes.</li>
                    <li><span className="font-semibold">Confort</span> : léger, il est agréable à porter.</li>
                    <li><span className="font-semibold">Résistance à la chaleur</span> : il est stable sous une certaine chaleur, ce qui facilite les ajustages par des opticiens.</li>
                  </ol>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2">Utilisation pour les lunettes :</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><span className="font-semibold">Montures</span> : l'acétate est fréquemment utilisé pour fabriquer des montures élégantes, robustes et personnalisables.</li>
                    <li><span className="font-semibold">Pas pour les lentilles</span> : les lentilles de lunettes sont généralement fabriquées en polycarbonate, en CR‑39 ou en verre, pour leurs propriétés optiques.</li>
                  </ul>
                  <p className="mt-3">L'acétate est donc un choix hautement apprécié dans l'industrie de la lunetterie, mais il ne convient pas pour les lentilles en raison de ses propriétés optiques inadaptées.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Exemple de monture et marque */}
          <section className="container mx-auto px-4 mt-12 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl wood-bg p-3">
                <div className="relative w-full h-[420px] md:h-[520px]">
                  <img src="/images/monture acetate.webp" alt="Monture bioacétate Paul & Joe" className="absolute inset-0 w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <p className="text-neutral-300 mb-3">Nous collaborons avec la marque Paul & Joe, reconnue pour fabriquer des montures de lunettes en bioacétate.</p>
                <p className="text-neutral-300">Montures Femmes HANNAH01 conçues en bio acétate. À retrouver au sein de la boutique L'Atelier du 15ème.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
}

