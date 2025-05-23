'use client';

import { Mail, Linkedin, Github, BarChart4, Bot, Cpu, Moon, Sun, Code2, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useEffect, useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

function RotatingBox() {
  return (
    <>
      {/* @ts-ignore */}
      <mesh rotation={[0.4, 0.2, 0]}>
        {/* @ts-ignore */}
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        {/* @ts-ignore */}
        <meshStandardMaterial color="#6366f1" />
        {/* @ts-ignore */}
      </mesh>
    </>
  );
}



function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const reveal = () => {
      sections.forEach((sec) => {
        const top = sec.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          sec.classList.add('opacity-100', 'translate-y-0');
          sec.classList.remove('opacity-0', 'translate-y-6');
        }
      });
    };
    window.addEventListener('scroll', reveal);
    reveal();
    return () => window.removeEventListener('scroll', reveal);
  }, []);
}

export default function Page() {
  useScrollReveal();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen font-sans tracking-tight overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/90 backdrop-blur border-b py-4 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2"><Code2 className="text-indigo-500" /> Alex Pizarro</h1>
          <ul className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">Sobre mí</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition-colors">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition-colors">Contacto</a></li>
            <li>
              <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
                {darkMode ? <Sun className="w-4 h-4 text-yellow-300" /> : <Moon className="w-4 h-4 text-gray-600" />}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-indigo-100 to-white dark:from-gray-800 dark:to-gray-900 py-24 border-b opacity-0 translate-y-6 transition-all duration-700" id="hero">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">Alex Pizarro</h1>
            <p className="text-lg max-w-xl">
              Transformo datos en decisiones inteligentes. Especialista en Business Intelligence, Power BI, Python, SQL y transformación digital.
            </p>
          </div>
          <div className="h-72 w-full">
            {/* @ts-ignore */}
            <Canvas camera={{ position: [0, 0, 5] }}>
              {/* @ts-ignore */}
              <ambientLight intensity={0.5} />
              {/* @ts-ignore */}
              <directionalLight position={[0, 0, 5]} />
              {/* @ts-ignore */}
              <OrbitControls enableZoom={false} />
              {/* @ts-ignore */}
              <RotatingBox />
            </Canvas>

          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto space-y-4 opacity-0 translate-y-6 transition-all duration-700" id="about">
        <h2 className="text-3xl font-semibold flex items-center gap-2"><ScrollText className="text-indigo-500" /> Sobre mí</h2>
        <p>
          Soy un Business Intelligence Data Analyst con experiencia en dashboards, automatización y transformación digital. He liderado proyectos con grandes ahorros y mejoras operativas. Me especializo en Power BI, Python y SQL.
        </p>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-800 border-t px-6 max-w-5xl mx-auto space-y-12 opacity-0 translate-y-6 transition-all duration-700" id="projects">
        <h2 className="text-3xl font-semibold text-center">Proyectos Destacados</h2>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 text-xl font-medium">
              <BarChart4 className="text-indigo-600" />
              Análisis de Datos
            </div>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
              <li>Ahorro anual de USD 2M con indicadores en Excel + SQL.</li>
              <li>Reducción de costos por USD 1M con migración a Power BI.</li>
              <li>Actualizaciones automáticas en Power BI Service.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 text-xl font-medium">
              <Bot className="text-green-500" />
              Automatizaciones
            </div>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
              <li>20 RPAs en Python para extraer datos desde SAP.</li>
              <li>Integración 24/7 con Windows Task Scheduler.</li>
              <li>Alertas automáticas por correo y WhatsApp.</li>
              <li>Power Automate para monitoreo en Power BI.</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-3 text-xl font-medium">
              <Cpu className="text-purple-500" />
              Transformación Digital
            </div>
            <ul className="list-disc pl-6 mt-2 text-gray-700 dark:text-gray-300">
              <li>Apps web con Google Apps Script para datos en tiempo real.</li>
              <li>Digitalización de procesos críticos en planta.</li>
              <li>Indicadores en tiempo real con sistemas MES (↑ 2% OEE).</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto space-y-6 border-t opacity-0 translate-y-6 transition-all duration-700" id="contact">
        <h2 className="text-3xl font-semibold text-center">Contacto</h2>
        <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <Mail className="text-pink-600" /> alexpizarro3@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="text-blue-600" /> linkedin.com/in/alexpizarro
          </div>
          <div className="flex items-center gap-2">
            <Github className="text-black dark:text-white" /> github.com/alexpizarro
          </div>
        </div>
      </section>
    </main>
  );
}