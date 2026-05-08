'use client';

import { motion, Variants } from 'motion/react';
import { Sparkles, ShieldCheck, Droplets, PaintBucket, CarFront, Zap } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Polimento Técnico',
    description: 'Correção de verniz com remoção de riscos, redemoinhos e oxidação, devolvendo o brilho original da pintura.',
  },
  {
    icon: ShieldCheck,
    title: 'Vitrificação',
    description: 'Camada de proteção cerâmica de alta resistência com durabilidade de até 5 anos contra desgastes climáticos.',
  },
  {
    icon: CarFront,
    title: 'Higienização Interna',
    description: 'Limpeza profunda e hidratação de couro, revitalização de plásticos e oxi-sanitização para eliminação de odores.',
  },
  {
    icon: Droplets,
    title: 'Lavagem Premium',
    description: 'Lavagem detalhada focada em frestas, rodas, caixas de roda e motor, utilizando apenas produtos seguros de pH neutro.',
  },
  {
    icon: PaintBucket,
    title: 'Proteção de Pintura',
    description: 'Aplicação de ceras premium e selantes sintéticos para um brilho profundo e repelência de água extrema.',
  },
  {
    icon: Zap,
    title: 'Revitalização Estética',
    description: 'Restauração de faróis opacos, limpeza técnica de vidros (remoção de chuva ácida) e condicionamento de borrachas.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-matte-black relative border-t border-white/5">
      <div className="absolute top-0 inset-w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2 block"
          >
            Nossa Expertise
          </motion.span>
          <motion.h2 
            className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Serviços de <span className="text-gradient">Excelência</span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-[#141416] border border-white/5 rounded-xl p-8 hover:bg-[#1A1A1D] transition-colors duration-500 overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-silver group-hover:text-white transition-colors">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
