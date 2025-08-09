"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueTitle from '../components/BlueTitle';
import PageTransitionGlasses from '../components/PageTransitionGlasses';

export default function DefautVisuel() {
  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Défaut visuel" subtitle="Comprendre les troubles de la vision" />

          {/* Image d'en-tête */}
          <section className="container mx-auto px-4 mt-12">
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl wood-bg">
              <img src="/images/defaut visuel.webp" alt="Défauts visuels" className="w-full h-auto block" />
            </div>
          </section>

          {/* Contenu explicatif sur fond bois */}
          <section className="container mx-auto px-4 mt-12 mb-24">
            <div className="max-w-4xl mx-auto rounded-2xl border border-neutral-800 wood-bg shadow-xl overflow-hidden">
              <div className="p-6 md:p-8 text-black space-y-4">
                <p>
                  Un défaut visuel, c’est une altération de la vision qui peut être due à plusieurs causes, souvent liées
                  à la forme ou au fonctionnement des yeux. Voici quelques exemples courants de défauts visuels :
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <span className="font-semibold">Myopie</span> : difficulté à voir de loin. L'image se forme à l'avant de la rétine car l'œil est
                    trop long ou la cornée trop courbée.
                  </li>
                  <li>
                    <span className="font-semibold">Hypermétropie</span> : difficulté à voir de près. L'image se forme à l'arrière de la rétine car l'œil est
                    trop court ou la cornée pas assez courbée.
                  </li>
                  <li>
                    <span className="font-semibold">Astigmatisme</span> : vision floue à toutes les distances, causée par une courbure irrégulière de la cornée
                    ou du cristallin.
                  </li>
                  <li>
                    <span className="font-semibold">Presbytie</span> : perte progressive de la capacité à voir de près due au vieillissement naturel du cristallin.
                  </li>
                  <li>
                    <span className="font-semibold">Cataracte</span> : opacification du cristallin, entraînant une vision trouble, souvent liée à l'âge.
                  </li>
                  <li>
                    <span className="font-semibold">Daltonisme</span> : incapacité partielle ou totale à distinguer certaines couleurs, souvent d'origine génétique.
                  </li>
                  <li>
                    <span className="font-semibold">Glaucome</span> : dommages au nerf optique, souvent causés par une pression intraoculaire élevée, qui peuvent
                    entraîner une perte de vision.
                  </li>
                  <li>
                    <span className="font-semibold">Dégénérescence maculaire liée à l’âge (DMLA)</span> : perte progressive de la vision centrale.
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
}

