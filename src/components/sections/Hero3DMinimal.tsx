'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import RotatingBackground from '@/components/visuals/RotatingBackground';
import VisitCounter from '@/components/ui/VisitCounter';
import { profile } from '@/data/profile';

export default function Hero3DMinimal() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollTop(scrolled > window.innerHeight / 2);
      setShowScrollIcon(scrolled < window.innerHeight - 50); // Más sensible para móviles
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <VisitCounter />
      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <RotatingBackground />
      </Canvas>

      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-12 rounded-2xl relative overflow-hidden"
        >
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-cyan" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan" />

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-glow">
            {profile.name}
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-neon-cyan/50" />
            <p className="text-xl md:text-2xl text-neon-cyan font-mono tracking-widest uppercase">
              {profile.role.replace(/ · /g, ' // ')}
            </p>
            <div className="h-[1px] w-12 bg-neon-cyan/50" />
          </div>

          <p className="text-gray-300 font-light max-w-2xl mx-auto leading-relaxed text-lg">
            {profile.subRole}
          </p>
        </motion.div>
      </div>

      {showScrollIcon && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-neon-cyan cursor-pointer"
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <span className="text-sm font-mono tracking-widest block mb-2 text-center text-[10px] uppercase">Scroll to Init</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-neon-cyan to-transparent mx-auto" />
        </motion.div>
      )}

      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-lg glass-card text-neon-cyan hover:text-white hover:border-neon-cyan transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          aria-label="Scroll to top"
        >
          <span className="font-mono text-xl">↑</span>
        </motion.button>
      )}
    </section>
  );
}
