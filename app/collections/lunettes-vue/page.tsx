"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../../app/components/Navbar';
import Footer from '../../../app/components/Footer';
import PageTransitionGlasses from '../../../app/components/PageTransitionGlasses';
import BlueTitle from '../../../app/components/BlueTitle';

export default function LunettesVue() {
  const sections = [
    { marque: 'Marlone', basePath: '/images', files: ['marlone 1.webp', 'marlone 2.webp', 'marlone 3.webp', 'marlone 4.webp', 'marlone 5.webp'] },
    { marque: 'Tom',     basePath: '/images', files: ['tom 1.webp',     'tom 2.webp',     'tom 3.webp',     'tom 4.webp',     'tom 5.webp'] },
    { marque: 'Ray',     basePath: '/images', files: ['ray 1.webp',     'ray 2.webp',     'ray 3.webp',     'ray 4.webp',     'ray 5.webp'] },
    { marque: 'P',       basePath: '/images', files: ['P 1.webp',       'P 2.webp',       'P 3.webp',       'P 4.webp',       'P 5.webp'] },
    { marque: 'G',       basePath: '/images', files: ['G 1.webp',       'G 2.webp',       'G 3.webp',       'G 4.webp',       'G 5.webp'] },
    { marque: 'L',       basePath: '/images', files: ['L 1.webp',       'L 2.webp',       'L3.webp',        'L4.webp',        'L5.webp'] },
    { marque: 'O',       basePath: '/images', files: ['O 1.webp',       'O 2.webp',       'O 3.webp',       '0 4.webp',       '0 5.webp'] },
  ];

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Lunettes de Vue" subtitle="Découvrez nos sélections par marques" variant="black" titleIsWood />

          {sections.map((section) => {
            const logo = `${section.basePath}/${section.files[0]}`;
            const others = section.files.slice(1).map((f) => `${section.basePath}/${f}`);
            return (
              <section key={section.marque} className="py-12">
                <div className="container mx-auto px-4">
                  {/* Logo de marque sur plaque bois (comme Enfant) */}
                  <div className="flex justify-center mb-8">
                    <div className="wood-bg rounded-2xl px-6 py-4 shadow-lg border border-neutral-800/30">
                      <div className="relative w-48 h-24 md:w-64 md:h-32">
                        <Image src={logo} alt={`${section.marque} logo`} fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                  {/* Grille 2 colonnes centrées (1 sur mobile), cadres vitrine */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center justify-items-center">
                    {others.map((src, idx) => (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="relative w-full max-w-[260px] aspect-video sm:aspect-[4/3] rounded-xl shadow-lg wood-bg p-3 border border-neutral-800/20 overflow-hidden"
                      >
                        <div
                          className="relative w-full h-[97%] sm:h-full -translate-y-1 sm:translate-y-0 rounded-lg border overflow-hidden bg-white"
                          style={{
                            borderColor: '#e5e7eb',
                            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.75), inset 0 -1px 0 rgba(0,0,0,0.06)'
                          }}
                        >
                          <Image src={src} alt={`${section.marque} modèle ${idx + 2}`} fill className="object-contain" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
} 