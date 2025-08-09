import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageTransitionGlassesProps {
  children: ReactNode;
}

export default function PageTransitionGlasses({ children }: PageTransitionGlassesProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Contenu de la page */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.3,
            delay: 0.2
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Transition des rideaux */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {/* Rideau gauche avec demi-lunette */}
            <motion.div
              variants={{
                initial: { x: '-100%' },
                animate: { x: '0%' },
                exit: { x: '-120%' }
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="absolute left-0 top-0 w-1/2 h-full wood-bg flex items-center justify-end"
            >
              {/* Demi-lentille gauche */}
              <div
                className="absolute right-0 w-[200px] h-[100px]"
              >
                {/* Verre transparent (on garde le bleu existant) */}
                <div 
                  className="absolute inset-0 bg-blue-100/30"
                  style={{
                    clipPath: 'circle(50px at 125px 50px)'
                  }}
                />
                {/* Contour noir */}
                <svg 
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 100"
                  style={{ overflow: 'visible' }}
                >
                  <circle
                    cx="125"
                    cy="50"
                    r="50"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Branche extérieure gauche */}
                  <path
                    d="M75,50 C75,50 55,60 35,65 C15,70 0,72 -10,73"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Demi-pont gauche */}
                  <path
                    d="M175,50 L200,50"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
            
            {/* Rideau droit avec demi-lunette */}
            <motion.div
              variants={{
                initial: { x: '100%' },
                animate: { x: '0%' },
                exit: { x: '120%' }
              }}
              transition={{ 
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="absolute right-0 top-0 w-1/2 h-full wood-bg flex items-center justify-start"
            >
              {/* Demi-lentille droite */}
              <div
                className="absolute left-0 w-[200px] h-[100px]"
              >
                {/* Verre transparent (on garde le bleu existant) */}
                <div 
                  className="absolute inset-0 bg-blue-100/30"
                  style={{
                    clipPath: 'circle(50px at 75px 50px)'
                  }}
                />
                {/* Contour noir */}
                <svg 
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 200 100"
                  style={{ overflow: 'visible' }}
                >
                  <circle
                    cx="75"
                    cy="50"
                    r="50"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Branche extérieure droite */}
                  <path
                    d="M125,50 C125,50 145,60 165,65 C185,70 200,72 210,73"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    fill="none"
                  />
                  {/* Demi-pont droit */}
                  <path
                    d="M0,50 L25,50"
                    stroke="#1a1a1a"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 