"use client";

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  //

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getCurrentTitle = () => {
    if (pathname === '/collections') return 'Nos Collections';
    if (pathname === '/collections/lunettes-vue') return 'Lunettes de Vue';
    if (pathname === '/collections/lunettes-soleil') return 'Lunettes de Soleil';
    if (pathname === '/collections/lentilles') return 'Lentilles de Contact';
    if (pathname === '/a-propos') return 'À propos';
    if (pathname === '/temoignages') return 'Témoignages';
    if (pathname === '/services-optiques') return 'Services Optiques';
    if (pathname === '/recyclage-medico') return 'Recyclage MÉDICO';
    if (pathname === '/defaut-visuel') return 'Défaut visuel';
    if (pathname === '/montures-bio-acetate') return 'Montures BIO acétate';
    return 'Accueil';
  };

  if (!isVisible) return null;

  return (
    <div className="w-full relative z-[20] bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center py-6">
          <div className="mb-4">
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="/images/logo atelier du 15ème.webp"
                alt="L'Atelier du 15ème - Logo"
                className="object-contain w-full h-full"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <a 
                href={pathname === '/' ? '#accueil' : '/'} 
                className="inline-flex items-center gap-2 text-gray-100 hover:text-blue-300 transition-colors border-b-2 border-blue-300 pb-1 cursor-pointer"
              >
                <span>{getCurrentTitle()}</span>
                {/* petite flèche vers le bas */}
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </a>

              {isDropdownOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 wood-bg text-white shadow-xl rounded-xl border border-neutral-700 py-2 overflow-hidden"
                  style={{ zIndex: 9999 }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  <div className="relative">
                    <a href="/" className="block px-4 py-2 transition-colors hover:bg-white/10">Accueil</a>
                    <a href="/#collections" className="block px-4 py-2 transition-colors hover:bg-white/10">Nos Collections</a>
                    {/* Immersion retiré du menu */}
                    <a href="/a-propos" className="block px-4 py-2 transition-colors hover:bg-white/10">À propos</a>
                    <a href="/temoignages" className="block px-4 py-2 transition-colors hover:bg-white/10">Témoignages</a>
                    <a href="/services-optiques" className="block px-4 py-2 transition-colors hover:bg-white/10">Services Optiques</a>
                    <a href="/#rendez-vous" className="block px-4 py-2 transition-colors hover:bg-white/10">Prise de rendez-vous</a>
                    <a href="/defaut-visuel" className="block px-4 py-2 transition-colors hover:bg-white/10">Défaut visuel</a>
                    <a href="/recyclage-medico" className="block px-4 py-2 transition-colors hover:bg-white/10">Recyclage MÉDICO</a>
                    <a href="/montures-bio-acetate" className="block px-4 py-2 transition-colors hover:bg-white/10">Montures BIO acétate</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bouton hamburger supprimé sur mobile pour éviter la duplication */}
        </div>

        {/* Menu mobile supprimé */}
      </div>
    </div>
  );
} 