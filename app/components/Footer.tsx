export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Dégradé supérieur adapté au fond noir */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-transparent z-10"></div>
      
      {/* Contenu principal noir mat */}
      <div className="bg-neutral-900 pt-8 pb-6 text-neutral-200 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Nos horaires</h3>
              <p className="mb-2">Mardi au Samedi</p>
              <p className="mb-2">10h00 – 13h00 et 14h00 – 19h00</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <p className="mb-2">
                📞 <a href="tel:+33145752947" className="hover:text-white">01.45.75.29.47</a>
              </p>
              <p className="mb-2">
                📧 <a href="mailto:atelierdu15eme@gmail.com" className="hover:text-white">atelierdu15eme@gmail.com</a>
              </p>
              <p>📍 138 Bd de Grenelle, 75015 Paris</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Suivez‑nous</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/atelier_du_15eme/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visiter notre Instagram"
                  className="inline-flex items-center gap-2 text-neutral-300 underline underline-offset-4 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM18 6.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-neutral-700 text-center text-neutral-400">
            <p>© 2024 L'Atelier du 15ème. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 