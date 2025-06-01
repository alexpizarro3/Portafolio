'use client';

import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { Mail, Linkedin, Github } from 'lucide-react';
import GargantuaBlackHole from './GargantuaBlackHole';
import GalaxyNebulaShader from './GalaxyNebulaShader';
import Nebula from './Nebula';
import RotatingBackground from './RotatingBackground';

export default function Hero3D() {
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-black via-indigo-950 to-gray-900">
      <a
        href="https://alexispizarroportafolio.vercel.app/"
        className="group absolute top-6 left-6 z-50 flex items-center gap-3"
      >
        <motion.div
          whileHover={{
            scale: 1.15,
            rotate: [0, 5, -5, 0], // rebote leve
            boxShadow: '0px 0px 20px rgba(147, 51, 234, 0.8)', // glow morado
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 12 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl text-white flex items-center justify-center font-extrabold text-2xl"
        >
          AP
        </motion.div>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-semibold">
          Alexis Pizarro
        </span>
      </a>

      <div className="absolute top-0 left-0 z-10 h-full w-full flex flex-col items-start justify-center px-10 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl bg-gradient-to-r from-indigo-900/70 to-purple-800/70 p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-indigo-500/30"
        >
          <h1 className="text-4xl sm:text-xl font-extrabold text-white leading-snug mb-4">
            Alexis Pizarro
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 leading-relaxed">
            Business Intelligence Data Analyst <br /> Power BI Developer • Python Automatización • SQL
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed z-50 flex flex-col sm:flex-col sm:top-1/2 sm:right-2 sm:-translate-y-1/2 sm:space-y-6
          bottom-4 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:bottom-auto sm:left-auto
          bg-black/50 p-2 sm:p-4 rounded-full backdrop-blur-md shadow-xl space-x-6 sm:space-x-0 flex-row sm:flex-col">
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white transition"
        >
        <Mail className="w-7 h-7 sm:w-11 sm:h-11 group-hover:scale-110 group-hover:text-pink-400 transition-transform duration-300" />
          <span className="absolute inset-0 rounded-full ring-2 ring-pink-400 opacity-0 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500"></span>
        </a>
        <a
          href="https://www.linkedin.com/in/alexis-pizarro-abarca-9018826b/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white transition">
          <Linkedin className="w-7 h-7 sm:w-11 sm:h-11 group-hover:scale-110 group-hover:text-blue-400 transition-transform duration-300" />
          <span className="absolute inset-0 rounded-full ring-2 ring-blue-400 opacity-0 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500"></span>
        </a>
        <a
          href="https://github.com/alexpizarro3"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative text-white transition"
        >
          <Github className="w-7 h-7 sm:w-11 sm:h-11 group-hover:scale-110 group-hover:text-gray-400 transition-transform duration-300" />
          <span className="absolute inset-0 rounded-full ring-2 ring-gray-400 opacity-0 group-hover:opacity-60 group-hover:scale-125 transition-all duration-500"></span>
        </a>

      </motion.div>

      <Canvas className="absolute inset-0 z-0" camera={{ position: [0, 0, 6] }}>
       
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <RotatingBackground />
        <GargantuaBlackHole />
        <GalaxyNebulaShader />
        <Nebula />
        <EffectComposer>
          <Bloom intensity={0.65} luminanceThreshold={0.1} luminanceSmoothing={0.85} />
          <Noise opacity={0.005} />
        </EffectComposer>
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </section>
  );
}
