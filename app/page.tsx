"use client";

import Image from "next/image";
import SpinningGlasses from "./components/SpinningGlasses";
import PageTransitionGlasses from "./components/PageTransitionGlasses";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './components/Features';
import BlueTitle from './components/BlueTitle';
import StreetViewModal from './components/StreetViewModal';
import { useMemo, useState } from 'react';

export default function Home() {
  const [isImmersionOpen, setIsImmersionOpen] = useState(false);

  // Lien Street View fourni par l'utilisateur
  const immersionLink = "https://www.google.com/local/place/fid/0x47e671256c5c332d:0xb8c06a7a1722a213/photosphere?iu=https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-bC8HjlzXnsVv0VL4fgP931fnzwFFks714ClO558yZrXVmZ_eNYXX-3lmStdTT9gntPXfb6-dB1Ux74ZD-0d6fb1QoymRuOFjxxvWaz3Js_0GezHDlB8KDrE8OfEkFl0oBEo%3Dw160-h106-k-no-pi-10-ya46.11114-ro-0-fo100&ik=CAoSFkNJSE0wb2dLRUlDQWdJRHFfUGF3UWc%3D";
  // Extraire l'identifiant panoId (paramètre 'ik') pour l'API Street View
  const immersionPanoId = useMemo(() => {
    try {
      const u = new URL(immersionLink);
      return u.searchParams.get("ik") || undefined;
    } catch {
      return undefined;
    }
  }, []);

  // Désactive le cache côté Next pour la page d’accueil (ISR off)
  // Note: pour l’App Router, on peut aussi exporter const revalidate = 0;
  return (
    <PageTransitionGlasses>
      <div className="min-h-screen bg-neutral-900 text-neutral-100">
        <Navbar />
        <div className="hidden md:block">
          <SpinningGlasses />
        </div>
        <main>
          {/* Hero Section avec image */}
          <section className="relative h-screen">
            <div className="absolute inset-0">
              <Image
                src="/images/exterieur clear.jpeg"
                alt="Devanture L'Atelier du 15ème"
                fill
                sizes="100vw"
                quality={75}
                priority
                className="object-cover brightness-90"
                style={{ objectPosition: 'center 25%' }}
              />
            </div>
            {/* Overlay dégradé pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end items-start px-8 md:px-16 pb-24 md:pb-32">
              <div className="max-w-4xl space-y-4">
                <h2 className="neon-warm text-3xl md:text-5xl font-extrabold leading-tight">
                  Opticien lunetier créateur
                </h2>
                <p className="text-base md:text-lg text-white/95">
                  À l'affût des nouvelles tendances et valorisant le « Made in France »
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  {/* Immersion dans la boutique → ouvre la modale intégrée */}
                  <button
                    onClick={() => setIsImmersionOpen(true)}
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="absolute inset-0 opacity-0 wood-bg transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100"></span>
                    <span className="relative group-hover:text-white transition-colors duration-500">Immersion dans la boutique</span>
                  </button>
                  {/* Contactez-nous */}
                  <a 
                    href="mailto:atelierdu15eme@gmail.com"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 wood-bg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" style={{ willChange: 'transform' }}></span>
                    <span className="relative group-hover:text-black transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">Contactez-nous</span>
                  </a>
                  {/* Nos collections */}
                  <a 
                    href="#collections"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white border-2 border-white rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="absolute inset-0 origin-left scale-x-0 wood-bg transition-transform duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" style={{ willChange: 'transform' }}></span>
                    <span className="relative group-hover:text-black transition-colors duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]">Nos collections</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Modale Street View intégrée */}
          <StreetViewModal isOpen={isImmersionOpen} onClose={() => setIsImmersionOpen(false)} panoId={immersionPanoId} />

          {/* Collections Section */}
          <section id="collections" className="py-16">
            <BlueTitle 
              title="Nos Collections"
              subtitle="Nos lunettes de vue et de soleil à la fois tendance et créatrices"
            />
            <div className="container mx-auto px-4 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <a 
                  href="/collections/lunettes-vue"
                  className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-neutral-700"
                >
                  <div className="aspect-[4/3] relative bg-neutral-700">
                    <Image
                      src="/images/image verre de vue pour site .png"
                      alt="Lunettes de Vue"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 wood-text drop-shadow">Lunettes de Vue</h3>
                    <p className="text-neutral-300">Un large choix de lunettes tendance et créatrices.</p>
                  </div>
                </a>
                <a 
                  href="/collections/lunettes-soleil"
                  className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-neutral-700"
                >
                  <div className="aspect-[4/3] relative bg-neutral-700">
                    <Image
                      src="/images/image verre de soleil pour site.png"
                      alt="Lunettes de Soleil"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 wood-text drop-shadow">Lunettes de Soleil</h3>
                    <p className="text-neutral-300">Collections solaires tendance et protection UV garantie.</p>
                  </div>
                </a>
                <a 
                  href="/collections/lentilles"
                  className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-neutral-700"
                >
                  <div className="aspect-[4/3] relative bg-neutral-700">
                    <Image
                      src="/images/image lentille pour site.png"
                      alt="Lentilles de Contact"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 wood-text drop-shadow">Lentilles de Contact</h3>
                    <p className="text-neutral-300">Confort et précision de vision au quotidien.</p>
                  </div>
                </a>
                {/* Carte Lunettes Enfant au même format */}
                <a 
                  href="/collections/lunettes-enfant"
                  className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 border border-neutral-700"
                >
                  <div className="aspect-[4/3] relative bg-neutral-700">
                    <Image
                      src="/images/lunette enfant.jpg"
                      alt="Lunettes Enfant"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 wood-text drop-shadow">Lunettes Enfant</h3>
                    <p className="text-neutral-300">Sélection enfants: confort, solidité et styles actuels.</p>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-16">
            <BlueTitle 
              title="Nos Services"
              subtitle="Des prestations pour vous accompagner"
            />
            <div className="container mx-auto px-4 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-neutral-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 border border-neutral-700">
                  <div className="w-16 h-16 relative mb-6 mx-auto">
                    <Image src="/images/reparation lunettes.jpg" alt="Ajustement" fill className="object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center wood-text drop-shadow">Ajustement</h3>
                  <p className="text-neutral-300 text-center">Réglage précis et adaptation de vos montures.</p>
                </div>
                <div className="bg-neutral-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 border border-neutral-700">
                  <div className="w-16 h-16 relative mb-6 mx-auto">
                    <Image src="/images/image serrage de main.jpg" alt="Tiers Payant" fill className="object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center wood-text drop-shadow">Tiers Payant</h3>
                  <p className="text-neutral-300 text-center">Simplifiez vos démarches avec votre mutuelle.</p>
                </div>
                <div className="bg-neutral-800 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 border border-neutral-700">
                  <div className="w-16 h-16 relative mb-6 mx-auto">
                    <Image src="/images/image teste de vision.png" alt="Examen de Vue" fill className="object-cover rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center wood-text drop-shadow">Examen de Vue</h3>
                  <p className="text-neutral-300 text-center">Contrôle complet et conseils personnalisés.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Prise de rendez-vous */}
          <section id="rendez-vous" className="py-16">
            <BlueTitle 
              title="Prise de rendez‑vous"
              subtitle="Afin de planifier votre rendez‑vous, appelez‑nous ou envoyez‑nous un email"
            />
            <div className="container mx-auto px-4 mt-12">
              <div className="max-w-3xl mx-auto rounded-2xl border border-neutral-800 wood-bg shadow-xl overflow-hidden">
                <div className="p-6 md:p-10 text-center">
                  <p className="text-black mb-6">
                    Afin de planifier des rendez‑vous, appelez‑nous, ou envoyez‑nous un email.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <a 
                      href="tel:+33145752947"
                      className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-black bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <span className="absolute inset-0 opacity-0 bg-neutral-900 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="relative group-hover:text-white">Nous appeler</span>
                    </a>
                    <a 
                      href="mailto:atelierdu15eme@gmail.com"
                      className="group relative inline-flex items-center justify-center px-6 py-3 font-semibold text-white border-2 border-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
                    >
                      <span className="absolute inset-0 origin-left scale-x-0 bg-neutral-900 transition-transform duration-500 group-hover:scale-x-100" />
                      <span className="relative group-hover:text-white">Envoyer un email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Horaires Section */}
          <section id="horaires" className="py-16">
            <BlueTitle 
              title="Horaires"
              subtitle="Nos heures d'ouverture"
            />
            <div className="container mx-auto px-4 mt-16">
              <div className="max-w-3xl mx-auto">
                <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl wood-bg">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-center">
                      <div className="w-full text-center bg-neutral-900 rounded-lg border border-neutral-800 px-6 py-5">
                        <p className="text-white font-semibold text-lg md:text-xl">Du lundi au samedi — 10h à 19h</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-neutral-400 text-center">Horaires susceptibles d’évoluer les jours fériés.</p>
                  </div>
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
