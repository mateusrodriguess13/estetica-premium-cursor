'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import Image from 'next/image';

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-100px" });

  const handleMove = (clientPosition: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientPosition - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-24 bg-[#111113] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6" ref={inViewRef}>
        <div className="mb-14text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="mb-12">
            <motion.span 
              className="uppercase tracking-widest text-xs font-semibold text-gray-500 mb-2 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            >
              Resultados
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.1 }}
            >
              Antes & <span className="text-gradient">Depois</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-gray-400 font-light text-base max-w-md pb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            Arraste o controle deslizante para ver a transformação impressionante que nossa correção de pintura proporciona.
          </motion.p>
        </div>

        <motion.div
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize mt-12 bg-dark-gray shadow-2xl"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* After image (background) */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
              alt="Carro após detalhamento"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
             <div className="absolute top-4 right-4 bg-matte-black/70 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-medium text-white border border-white/10 uppercase tracking-wider">
               Depois
             </div>
          </div>

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0 z-10"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            {/* Grayscale/dusty simulated 'Before' picture for demo purposes. In real-world, use actual before picture. */}
            <Image
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop"
              alt="Carro antes do detalhamento"
              fill
              className="object-cover contrast-75 brightness-75 sepia-[.3] hue-rotate-15 blur-[0.5px]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-black/20" />
             <div className="absolute top-4 left-4 bg-matte-black/70 backdrop-blur-md px-3 py-1 rounded-sm text-xs font-medium text-white border border-white/10 uppercase tracking-wider">
               Antes
             </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 z-20 w-1 bg-white/80 transition-all duration-75 pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-8 h-12 bg-white rounded-full border border-gray-200 shadow-xl flex items-center justify-center">
              <div className="flex gap-[2px]">
                <div className="w-[1.5px] h-4 bg-gray-400 rounded-full" />
                <div className="w-[1.5px] h-4 bg-gray-400 rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
