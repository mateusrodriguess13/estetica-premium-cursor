'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Award, Gem, Users, CheckCircle } from 'lucide-react';

const blocks = [
  {
    icon: Award,
    title: 'Atendimento Premium',
    description: 'Experiência personalizada desde o primeiro contato, com consultoria dedicada às reais necessidades do seu veículo.'
  },
  {
    icon: Gem,
    title: 'Produtos Importados',
    description: 'Utilizamos apenas as marcas mais prestigiadas e certificadas do mercado global (Gyeon, Koch Chemie, Menzerna).'
  },
  {
    icon: Users,
    title: 'Técnicos Especializados',
    description: 'Nossa equipe passa por treinamentos constantes e domina as técnicas mais avançadas e seguras de detalhamento.'
  },
  {
    icon: CheckCircle,
    title: 'Garantia de Qualidade',
    description: 'Certificado de garantia para serviços de vitrificação e inspeção minuciosa sob iluminação especial antes da entrega.'
  }
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 relative overflow-hidden bg-matte-black">
      {/* Abstract subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2 block"
            >
              Por que nos escolher
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Padrão <span className="text-gradient">Internacional</span> de Qualidade
            </motion.h2>
            <motion.p
               className="text-gray-400 font-light text-lg mb-10 max-w-lg leading-relaxed"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
            >
              Não somos um lava-rápido. Somos um estúdio focado na perfeição estética e proteção duradoura, onde seu veículo é tratado como uma obra de arte.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {blocks.map((block, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
                  className="flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <block.icon size={20} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-white font-medium">{block.title}</h4>
                  <p className="text-gray-500 font-light text-sm">{block.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="relative aspect-square lg:aspect-[4/5] rounded-lg overflow-hidden border border-white/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <Image
              src="https://images.unsplash.com/photo-1600871146310-928574acade6?q=80&w=1928&auto=format&fit=crop"
              alt="Detalhe de pintura impecável"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Inner vignette for premium feel */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
