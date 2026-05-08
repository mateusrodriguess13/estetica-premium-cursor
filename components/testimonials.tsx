'use client';

import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ricardo Mendes",
    car: "Porsche 911 Carrera",
    text: "O nível de detalhamento e cuidado com o meu carro foi algo que nunca vi antes. A vitrificação deixou a pintura com um reflexo espelhado impressionante. O atendimento é primoroso."
  },
  {
    name: "Fernando Costa",
    car: "BMW M3 Competition",
    text: "Trouxe o carro direto da concessionária para o estúdio. O polimento técnico removeu marcas de fábrica e a proteção cerâmica facilitou demais as lavagens. Profissionais de altíssimo nível."
  },
  {
    name: "André Silva",
    car: "Mercedes-AMG C63",
    text: "A higienização interna mudou completamente a experiência de dirigir. O couro voltou a ter o aspecto fosco original e o cheiro de carro novo. Vale cada centavo investido."
  }
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#141416] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2 block"
          >
            Aprovação Exclusiva
          </motion.span>
          <motion.h2 
            className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            O que dizem os <span className="text-gradient">Clientes</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-matte-black border border-white/5 p-8 rounded-xl relative group hover:border-white/10 transition-colors"
            >
              <Quote className="text-white/10 w-10 h-10 absolute top-6 right-6" />
              <p className="text-gray-400 font-light text-base leading-relaxed mb-8 relative z-10">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <h5 className="text-white font-medium">{testimonial.name}</h5>
                <span className="text-gray-500 text-sm">{testimonial.car}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
