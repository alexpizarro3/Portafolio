'use client';

import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import RotatingBackground from './RotatingBackground';
import VisitCounter from './VisitCounter';

export default function Hero3DMinimal() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowScrollTop(scrolled > window.innerHeight / 2);
      setShowScrollIcon(scrolled < window.innerHeight - 100);
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Alexis Pizarro</h1>
        <p className="text-lg md:text-xl text-indigo-100 leading-relaxed">
          System Engineer · Senior Lead Production Planner <br />
          Business Intelligence Data Analyst <br />
          Power BI · Python · SQL ETL
        </p>
      </div>

      {showScrollIcon && (
        <motion.div
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 p-5 text-4xl rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-800 cursor-default"
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
