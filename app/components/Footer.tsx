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
              <p className="mb-3">
                <a
                  href="tel:+33145752947"
                  aria-label="Appeler le 01 45 75 29 47"
                  className="inline-flex items-center gap-2 text-neutral-300 underline underline-offset-4 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6.6 10.8c1.2 2.3 3.1 4.2 5.4 5.4l1.8-1.8c.3-.3.8-.4 1.2-.3 1 .3 2 .5 3 .5.7 0 1.2.5 1.2 1.2V19c0 .7-.5 1.2-1.2 1.2C10.6 20.2 3.8 13.4 3.8 4.8 3.8 4.1 4.3 3.6 5 3.6h2.3c.7 0 1.2.5 1.2 1.2 0 1 .2 2 .5 3 .1.4 0 .9-.3 1.2L6.6 10.8z"/></svg>
                  01.45.75.29.47
                </a>
              </p>
              <p className="mb-3">
                <a
                  href="mailto:atelierdu15eme@gmail.com"
                  aria-label="Envoyer un email à atelierdu15eme@gmail.com"
                  className="inline-flex items-center gap-2 text-neutral-300 underline underline-offset-4 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm0 2v.2l8 5 8-5V8l-8 5-8-5z"/></svg>
                  atelierdu15eme@gmail.com
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="https://www.google.com/maps?q=138+Bd+de+Grenelle,+75015+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir l'adresse sur Google Maps"
                  className="inline-flex items-center gap-2 text-neutral-300 underline underline-offset-4 hover:text-white transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2a7 7 0 0 1 7 7c0 5.2-7 13-7 13S5 14.2 5 9a7 7 0 0 1 7-7zm0 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>
                  138 Bd de Grenelle, 75015 Paris
                </a>
              </p>
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