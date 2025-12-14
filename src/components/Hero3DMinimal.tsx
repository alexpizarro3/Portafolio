'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import RotatingBackground from './RotatingBackground';
import VisitCounter from './VisitCounter';
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

      <div className="absolute z-10 top-1/4 left-[30%] transform -translate-x-[50%] text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{profile.name}</h1>
        <div className="text-lg md:text-xl text-indigo-100 leading-relaxed max-w-2xl">
          <p className="mb-2">{profile.role.replace(/ · /g, ' · ')}</p>
          <p className="font-light opacity-90">{profile.subRole}</p>
        </div>
      </div>

      {showScrollIcon && (
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 p-4 text-4xl rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-800 cursor-default sm:bottom-5"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-hidden="true"
        >
          ↓
        </motion.div>
      )}

      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 p-4 text-xl rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-800 transition-transform duration-300 max-w-[90vw] overflow-hidden"
          whileHover={{ scale: 1.2, backgroundColor: '#4f46e5' }}
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </section>
  );
}
