'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-matte-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
          alt="Detalhe de um carro esportivo premium"
          fill
          priority
          className="object-cover object-center opacity-40 mix-blend-luminosity"
          sizes="100vw"
        />
        {/* Gradients to blend image into the dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-matte-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-matte-black via-matte-black/80 to-transparent w-full md:w-2/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="uppercase tracking-[0.2em] font-medium text-xs text-silver/70 mb-4 block">
              Detailing Studio de Alta Performance
            </span>
          </motion.div>

          <motion.h1 
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Seu carro com aparência de <span className="text-gradient">novo.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Estética automotiva premium com acabamento impecável e proteção profissional. Eleve o padrão do seu veículo.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <a
              href="#contato"
              className="group inline-flex items-center justify-center h-14 px-8 bg-white text-matte-black font-medium text-base rounded-sm hover:bg-gray-200 transition-all duration-300"
            >
              Agendar agora
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center h-14 px-8 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-base rounded-sm transition-all duration-300 backdrop-blur-sm"
            >
              Ver serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
