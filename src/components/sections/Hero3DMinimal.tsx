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

  // Typewriter variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollTop(scrolled > window.innerHeight / 2);
      setShowScrollIcon(scrolled < window.innerHeight - 50);
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

          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-glow"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {profile.name.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-neon-cyan/50" />
            <p className="text-xl md:text-2xl text-neon-cyan font-mono tracking-widest uppercase">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {profile.role.replace(/ · /g, ' // ')}
              </motion.span>
            </p>
            <div className="h-[1px] w-12 bg-neon-cyan/50" />
          </div>

          <motion.p
            className="text-gray-300 font-light max-w-2xl mx-auto leading-relaxed text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            {profile.subRole}
          </motion.p>
        </motion.div>
      </div>

      {showScrollIcon && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-neon-cyan cursor-pointer flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-neon-cyan/80">Initialize</span>
          <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center p-1 backdrop-blur-sm">
            <motion.div
              className="w-1 h-3 bg-neon-cyan rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          <svg className="w-6 h-6 text-neon-cyan/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
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
