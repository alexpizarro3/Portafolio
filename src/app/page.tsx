'use client';

import { Mail, Linkedin, Github, BarChart4, Bot, Cpu, Code2, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Hero3D from './components/Hero3D';
import ContactForm from './components/ContactForm';
import CertificationsSkillsSection from './components/CertificationsSkillsSection'; 
import PortfolioGalleryTablet from './components/PortfolioGalleryTablet';
import DarkModeToggle from './components/DarkModeToggle';

function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
    </div>
  );
}

export default function Page() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen font-sans tracking-tight bg-gradient-to-b from-indigo-100 via-white to-white dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <motion.nav
        className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/90 backdrop-blur border-b py-4 shadow-sm"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><Code2 className="text-indigo-500" /> Alexis Pizarro</h1>
          <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">Sobre mí</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition-colors">Proyectos</a></li>
            <li><a href="#certifications" className="hover:text-indigo-500 transition-colors">Certificaciones</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition-colors">Contacto</a></li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero nuevo con fondo 3D animado */}
      <Hero3D />

      <motion.section
        id="about"
        className="py-20 px-6 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ScrollText className="mx-auto text-indigo-500 w-10 h-10 mb-4" />
        <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Soy un profesional en Inteligencia de Negocios y Análisis de Datos con experiencia en manufactura y empresas tecnológicas que brindan servicios en Centroamérica y Estados Unidos.
          <br /><br />
          He liderado proyectos de alto impacto como la creación de una sabana de indicadores migrada de Excel a Power BI con ETLs en Python y SQL, generando ahorros de más de $500K USD. También impulsé la transformación digital en planta mediante herramientas como Google Apps Script, logrando ahorros de $200K USD.
          <br /><br />
          Actualmente desarrollo dashboards estratégicos, automatizaciones y sistemas de reporting que optimizan ingresos y decisiones para nuestros clientes.  
          <br /><br />
          Me especializo en soluciones end-to-end usando Power BI, Power Query, Python, SQL, Excel avanzado, VSCode, RStudio y Google Apps Script.
        </p>

      </motion.section>

      <motion.section
        id="projects"
        className="py-20 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-10">Proyectos Destacados</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <BarChart4 className="mx-auto text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Análisis de Datos</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>Ahorro anual de USD 100K USD con indicadores en Excel + SQL.</li>
              <li>Reducción de costos por 400K USD con migración a Power BI.</li>
              <li>Actualizaciones automáticas en Power BI Service.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full">Power BI</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">Python</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">Excel</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">Sql</span>
            </div>

          </div>
          <div>
            <Bot className="mx-auto text-green-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automatizaciones</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>20 RPAs en Python para extraer datos desde SAP e interaccion con SQL y Google Drive.</li>
              <li>Integración 24/7 con Windows Task Scheduler.</li>
              <li>Alertas automáticas por correo y WhatsApp.</li>
              <li>Power Automate para monitoreo en Power BI.</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full">Python</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">Excel</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">VsCode</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">Power Automate</span>
            </div>

          </div>
          <div>
            <Cpu className="mx-auto text-purple-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Transformación Digital</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>Apps web con Google Apps Script para datos en tiempo real.</li>
              <li>Digitalización de procesos críticos en planta.</li>
              <li>Indicadores en tiempo real con sistemas MES (↑ 2% OEE).</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full">Google Apps Script</span>
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">MES</span>
              <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-2 py-1 rounded-full">IOT</span>
            </div>
          </div>
        </div>
      </motion.section>

      <CertificationsSkillsSection />
      
      <PortfolioGalleryTablet />

      <motion.section
        id="contact"
        className="py-20 px-6 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <ContactForm />
        <br />
        <div className="flex flex-col items-center gap-4 text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <Mail className="text-pink-600" />
            <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">alexpizarro3@gmail.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="text-blue-600" />
            <a href="https://www.linkedin.com/in/alexis-pizarro-abarca-9018826b/" target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/alexpizarro3</a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="text-black dark:text-white" />
            <a href="https://github.com/alexpizarro3" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/alexpizarro3</a>
          </div>
        </div>
      </motion.section>

      {showScrollTop && (
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 z-50 p-4 text-xl rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-800 hover:scale-110 transition-transform duration-300"
          whileHover={{ scale: 1.2, backgroundColor: '#4f46e5' }}
          aria-label="Volver arriba"
        >
          ↑
        </motion.button>
      )}
    </main>
  );
}
