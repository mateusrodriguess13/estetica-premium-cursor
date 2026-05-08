'use client';

import { motion } from 'motion/react';

export function CTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-matte-black border-y border-white/5">
      {/* Background with slight radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f2024] via-matte-black to-matte-black" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center shadow-2xl">
        <motion.h2 
          className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Seu carro merece um acabamento <span className="text-gradient">impecável.</span>
        </motion.h2>
        
        <motion.p
          className="text-lg text-gray-400 font-light mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Agende uma avaliação técnica sem compromisso ou tire suas dúvidas diretamente com nossa equipe.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://wa.me/5511000000000" // Replace with real number
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center min-w-[240px] h-16 px-8 rounded-sm bg-white text-matte-black overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gray-200 transition-transform duration-300 origin-bottom scale-y-0 group-hover:scale-y-100" />
            <span className="relative font-medium text-base z-10 tracking-wide uppercase">
              Falar no WhatsApp
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
