'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const images = [
  "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376760364-5334c9c104ca?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop"
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-matte-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2 block"
            >
              Portfólio
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
               Nossa <span className="text-gradient">Galeria</span>
            </motion.h2>
          </div>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white hover:text-gray-300 transition-colors uppercase tracking-wider underline underline-offset-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ver mais no Instagram
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-sm bg-dark-gray"
            >
              <Image
                src={src}
                alt={`Trabalho de detalhamento automotivo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
