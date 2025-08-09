"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransitionGlasses from '../components/PageTransitionGlasses';
import BlueTitle from '../components/BlueTitle';

export default function Collections() {
  const collections = {
    lunettesVue: {
      title: "Lunettes de Vue",
      description: "Des montures élégantes et confortables pour tous les styles",
      marques: [
        {
          nom: "Naoned",
          description: "L'élégance à la française, fabriquée en Bretagne"
        },
        {
          nom: "Nathalie Blanc",
          description: "Design parisien, fabrication artisanale"
        },
        {
          nom: "Paul & Joe",
          description: "Le chic parisien au service de votre regard"
        },
        {
          nom: "Caroline Abram",
          description: "Des créations audacieuses et féminines"
        },
        {
          nom: "Lunor",
          description: "L'excellence allemande et le souci du détail"
        },
        {
          nom: "Lindberg",
          description: "Le minimalisme danois et l'innovation technique"
        }
      ]
    },
    lunettesSoleil: {
      title: "Lunettes de Soleil",
      description: "Protection et style pour toutes les saisons",
      marques: [
        {
          nom: "Ray-Ban",
          description: "L'iconique marque américaine"
        },
        {
          nom: "Maui Jim",
          description: "La référence en protection solaire"
        },
        {
          nom: "Persol",
          description: "L'élégance italienne intemporelle"
        },
        {
          nom: "Oakley",
          description: "Performance et technologie"
        },
        {
          nom: "Oliver Peoples",
          description: "Le luxe californien"
        }
      ]
    },
    lentilles: {
      title: "Lentilles",
      description: "Les meilleures marques de lentilles de contact",
      marques: [
        {
          nom: "Johnson & Johnson",
          description: "Innovation et confort optimal"
        },
        {
          nom: "Alcon",
          description: "Technologies avancées pour votre vision"
        },
        {
          nom: "CooperVision",
          description: "Solutions adaptées à chaque porteur"
        },
        {
          nom: "Ophtalmic",
          description: "Qualité et expertise française"
        }
      ]
    }
  };

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
        <main className="pt-20">
          <BlueTitle 
            title="Nos Collections"
            subtitle="Une sélection des meilleures marques optiques"
          />

          {Object.values(collections).map((categorie, index) => (
            <section key={categorie.title} className="py-16">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <h2 className="text-3xl font-bold text-blue-900 mb-4">{categorie.title}</h2>
                  <p className="text-xl text-gray-600 mb-8">{categorie.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorie.marques.map((marque, idx) => (
                      <motion.div
                        key={marque.nom}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: (index * 0.2) + (idx * 0.1) }}
                        className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-102"
                      >
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">{marque.nom}</h3>
                        <p className="text-gray-600">{marque.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          ))}
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
} 