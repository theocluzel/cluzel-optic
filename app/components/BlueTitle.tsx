import { motion } from 'framer-motion';

interface BlueTitleProps {
  title: string;
  subtitle?: string;
  subtitleIsWood?: boolean;
  variant?: 'wood' | 'black';
}

export default function BlueTitle({ title, subtitle, subtitleIsWood = false, variant = 'wood' }: BlueTitleProps) {
  if (variant === 'black') {
    return (
      <section className="relative">
        <div className="py-16 text-white relative overflow-hidden bg-neutral-900">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              className="text-5xl font-bold text-center mb-3 tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p 
                className="text-lg md:text-xl text-center text-neutral-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative">
      <div
        className="py-16 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url('/images/bois claire.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.35)'
        }}
      >
        <div className="pointer-events-none absolute inset-0"
             style={{
               background: 'radial-gradient(120% 80% at 50% 50%, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.04) 65%, rgba(0,0,0,0) 100%)'
             }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            className="text-5xl font-bold text-center mb-3 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="wood-text">{title}</span>
          </motion.h1>
          {subtitle && (
            <motion.p 
              className={`text-lg md:text-xl text-center ${subtitleIsWood ? 'wood-text' : 'text-neutral-100/95'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
} 