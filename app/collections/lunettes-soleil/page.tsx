"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../../app/components/Navbar';
import Footer from '../../../app/components/Footer';
import PageTransitionGlasses from '../../../app/components/PageTransitionGlasses';
import BlueTitle from '../../../app/components/BlueTitle';

export default function LunettesSoleil() {
  const sections = [
    { marque: 'S',  basePath: '/images', files: ['S 1.webp',  'S 2.webp',  'S 3.webp',  'S 4.webp',  'S 5.webp'] },
    { marque: 'GI', basePath: '/images', files: ['GI 1.webp', 'GI 2.webp', 'GI 3.webp', 'GI 4.webp', 'GI 5.webp'] },
    { marque: 'Ban',basePath: '/images', files: ['Ban 1.webp','Ban 2.webp','ban 3.webp','Ban 4.webp','Ban 5.webp'] },
  ];

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen" style={{ backgroundImage: "url('/images/bois claire.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Lunettes de Soleil" subtitle="Découvrez nos sélections par marques" variant="black" />

          {sections.map((section) => {
            const logo = `${section.basePath}/${section.files[0]}`;
            const others = section.files.slice(1).map((f) => `${section.basePath}/${f}`);
            return (
              <section key={section.marque} className="py-12">
                <div className="container mx-auto px-4">
                  <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-24 md:w-64 md:h-32">
                      <Image src={logo} alt={`${section.marque} logo`} fill className="object-contain" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6 place-items-center">
                    {others.map((src, idx) => (
                      <motion.div
                        key={src}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="relative w-full aspect-[4/3] overflow-hidden"
                      >
                        <Image src={src} alt={`${section.marque} modèle ${idx + 2}`} fill className="object-contain" />
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