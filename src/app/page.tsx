'use client';

import { Mail, Linkedin, Github, BarChart4, Bot, Cpu, Code2, ScrollText, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Hero3D from './components/Hero3D';
import CVSection from './components/CVSection';

const PortfolioGalleryTablet = dynamic(() => import('./components/PortfolioGalleryTablet'), { ssr: false });
const CertificationsSkillsSection = dynamic(() => import('./components/CertificationsSkillsSection'), { ssr: false });
const ContactForm = dynamic(() => import('./components/ContactForm'), { ssr: false });
const FaqAssistant = dynamic(() => import('./components/FaqAssistant'), { ssr: false });

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
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch('/api/visits', { method: 'POST' });
  }, []);

  useEffect(() => {
    const getCount = async () => {
      const res = await fetch('/api/visits');
      const data = await res.json();
      setVisitCount(data.count);
    };
    getCount();
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
          <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide">
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">About</a></li>
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">Downloads</a></li>
            <li><a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a></li>
            <li><a href="#certifications" className="hover:text-indigo-500 transition-colors">Certifications</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-500 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a></li>
            <li><a href="#faqs" className="hover:text-indigo-500 transition-colors">Faqs</a></li>
            {/*<li><DarkModeToggle /></li>*/}
          </ul>
        </div>
      </motion.nav>

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
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a System Engineer and a Business Intelligence and Data Analytics professional with experience in manufacturing and tech companies serving clients across Central America and the U.S. with more than 5 years of experience in data analysis, business intelligence and digital transformation.
          <br /><br />
          I’ve led high-impact projects such as migrating complex Excel-based KPI sheets into Power BI with Python and SQL ETLs, generating over $500K in savings. I also led the digital transformation of plant operations using Google Apps Script, saving an additional $200K.
          <br /><br />
          Currently, I am deploying Bussiness Intelligence and developing strategic dashboards, automations, and reporting systems that boost client revenue and decision-making.
          <br /><br />
          My specialties include end-to-end BI solutions using Power BI, Power Query, Python, SQL, advanced Excel, VSCode, RStudio, and Google Apps Script.
        </p>
      </motion.section>
      <CVSection />
      <motion.section
        id="projects"
        className="py-20 px-6 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <BarChart4 className="mx-auto text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>Saved $100K annually with Excel + SQL KPIs.</li>
              <li>Reduced costs by $400K through Power BI migration.</li>
              <li>Automated refresh via Power BI Service.</li>
            </ul>
          </div>
          <div>
            <Bot className="mx-auto text-green-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Automations</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>20+ Python RPAs for SAP data extraction, SQL interaction, and Google Drive sync.</li>
              <li>24/7 integration via Windows Task Scheduler.</li>
              <li>Automated alerts via email and WhatsApp.</li>
              <li>Monitoring via Power Automate flows.</li>
            </ul>
          </div>
          <div>
            <Cpu className="mx-auto text-purple-500 w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
            <ul className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside">
              <li>Real-time web apps using Google Apps Script.</li>
              <li>Digitization of critical plant processes.</li>
              <li>Real-time KPIs via MES systems (↑ 2% OEE).</li>
            </ul>
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
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <ContactForm />
        <br />
        <div className="flex flex-col items-center gap-4 text-gray-800 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <Mail className="text-pink-600" />
            <a href="mailto:alexpizarro3@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
              alexpizarro3@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="text-blue-600" />
            <a href="https://www.linkedin.com/in/alexis-pizarro-abarca-9018826b/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/alexpizarro3
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Github className="text-black dark:text-white" />
            <a href="https://github.com/alexpizarro3" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/alexpizarro3
            </a>
          </div>
        </div>
      </motion.section>
      <FaqAssistant />
      <div className="text-center text-sm text-gray-500 dark:text-gray-400 py-6">
        {visitCount !== null ? (
          <motion.div
            className="inline-flex items-center gap-2 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Eye className="w-5 h-5 text-indigo-500 animate-pulse" />
            <span className="font-semibold">{visitCount}</span> visits so far.
          </motion.div>
        ) : (
          <>Loading visits...</>
        )}
      </div>

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
    </main>
  );
}
