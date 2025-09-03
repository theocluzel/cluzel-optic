"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PageTransitionGlasses from '../../components/PageTransitionGlasses';
import BlueTitle from '../../components/BlueTitle';

export default function LunettesEnfant() {
  const sections = [
    { marque: 'Li', basePath: '/images', files: ['Li 1.webp', 'Li 2.webp', 'Li 3.webp'] },
    { marque: 'La', basePath: '/images', files: ['La 1.webp', 'La 2.webp', 'La 3.webp'] },
  ];

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Lunettes Enfant" subtitle="Confort, solidité et styles adaptés" variant="black" titleIsWood />

          {/* Contenu sous le titre sur fond bois */}
          <div style={{ backgroundImage: "url('/images/bois claire.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
          </div>
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
}