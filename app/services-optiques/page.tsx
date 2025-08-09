"use client";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlueTitle from '../components/BlueTitle';
import PageTransitionGlasses from '../components/PageTransitionGlasses';

export default function ServicesOptiquesPage() {
  const services: string[] = [
    "Un accueil et un conseil personnalisé",
    "Choix de votre monture en s'appuyant sur les caractéristiques de votre visage",
    "Adaptation de tout types de verres quelque soit votre amétropie (défaut visuel)",
    "La réalisation d'un devis gratuit pour vos lunettes",
    "Tiers Payant mutuelle",
    "Aide à la manipulation des lentilles de contact (premier porteur)",
    "Le suivi et le contrôle régulier de vos lunettes",
    "Spécialiste verre progressif",
  ];

  const ordonnance: Array<[string, string]> = [
    ["Enfants de moins de 16 ans", "1 an"],
    ["Personnes de 16 à 42 ans", "5 ans"],
    ["Personnes de plus de 42 ans", "3 ans"],
  ];

  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <main className="pt-20">
          <BlueTitle title="Nos Services Optiques" subtitle="Des prestations pour vous accompagner" />

          {/* Liste des services */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-4xl mx-auto rounded-2xl border border-neutral-800 wood-bg shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {services.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-neutral-900 rounded-lg border border-neutral-800 px-4 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white flex-shrink-0 mt-1">
                        <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71l-1.41-1.41z" />
                      </svg>
                      <span className="text-neutral-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Durée de validité */}
          <section className="container mx-auto px-4 mt-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-semibold wood-text drop-shadow mb-4">Durée de validité d'une ordonnance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ordonnance.map(([categorie, duree]) => (
                  <div key={categorie} className="rounded-xl bg-neutral-900 border border-neutral-800 p-5 text-center">
                    <div className="text-white font-semibold mb-2">{categorie}</div>
                    <div className="text-neutral-300">{duree}</div>
                  </div>
                ))}
              </div>
              <p className="text-neutral-300 mt-6">
                Pensez‑y : vous pouvez même faire contrôler votre vue au magasin, muni d'une ordonnance valide dans le cadre d'un renouvellement de lunettes.
              </p>
            </div>
          </section>

          <div className="h-16" />
        </main>
        <Footer />
      </div>
    </PageTransitionGlasses>
  );
}

