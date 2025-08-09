"use client";

import { motion } from 'framer-motion';
import Navbar from '../../../app/components/Navbar';
import Footer from '../../../app/components/Footer';
import PageTransitionGlasses from '../../../app/components/PageTransitionGlasses';
import BlueTitle from '../../../app/components/BlueTitle';

export default function Lentilles() {
  const marques = [
    {
      nom: "Johnson & Johnson",
      description: "Leader mondial des lentilles de contact"
    },
    {
      nom: "Alcon",
      description: "Innovation et confort optimal"
    },
    {
      nom: "CooperVision",
      description: "Solutions pour tous types de correction"
    },
    {
      nom: "Ophtalmic",
      description: "Qualité et accessibilité"
    }
  ];

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen" style={{ backgroundImage: "url('/images/bois claire.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Navbar />
        <main className="pt-20">
          <BlueTitle 
            title="Lentilles de Contact"
            subtitle="Liberté et confort au quotidien"
            variant="black"
          />
          
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {marques.map((marque, idx) => (
                  <motion.div
                    key={marque.nom}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="bg-neutral-900 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-102 border border-neutral-800"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white">{marque.nom}</h3>
                    <p className="text-neutral-300">{marque.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
} 