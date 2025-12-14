'use client';


import { Code2, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { profile } from '../data/profile';
import { services } from '../data/services';
// Components
import Hero3DMinimal from '@/components/Hero3DMinimal';
import Footer from '@/components/Footer';
import CVSection from '../components/CVSection';
import ExperienceSection from '../components/ExperienceSection';
import { useIsMobile } from '../hooks/useIsMobile';

const PortfolioGalleryTablet = dynamic(() => import('../components/PortfolioGalleryTablet'), { ssr: false });
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), { ssr: false });
const ProductionPlanningSection = dynamic(() => import('../components/ProductionPlanningSection'), { ssr: false });
const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false });
const FaqAssistant = dynamic(() => import('../components/FaqAssistant'), { ssr: false });

const CertificationsSkillsSection = dynamic(() => import('../components/CertificationsSkillsSection'), {
  ssr: false,
  loading: () => <div className="text-center py-10">Loading certifications...</div>
});

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
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Optional: Only fetch if we expect it to work or fail silently
    const recordVisit = async () => {
      try {
        await fetch('/api/visits', { method: 'POST' });
      } catch {
        console.warn('Failed to record visit, likely missing env vars');
      }
    };
    recordVisit();
  }, []);

  useEffect(() => {
    const getCount = async () => {
      try {
        const res = await fetch('/api/visits');
        if (!res.ok) throw new Error('API failed');
        const data = await res.json();
        setVisitCount(data.count);
      } catch {
        console.warn('Failed to fetch visit count');
        setVisitCount(0); // Default or hide
      }
    };
    getCount();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="pt-20 min-h-screen font-sans tracking-tight bg-gradient-to-b from-indigo-50 via-white to-white dark:from-gray-900 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-800/90 backdrop-blur border-b py-4 shadow-sm"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2"><Code2 className="text-indigo-500" /> {profile.name}</h1>
          <ul className="flex gap-4 sm:gap-6 text-sm sm:text-base text-gray-600 dark:text-gray-300 overflow-x-auto whitespace-nowrap max-w-full scrollbar-hide">
            <li><a href="#about" className="hover:text-indigo-500 transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-indigo-500 transition-colors">Experience</a></li>
            <li><a href="#production-planning" className="hover:text-indigo-500 transition-colors">Planning</a></li>
            <li><a href="#certifications" className="hover:text-indigo-500 transition-colors">Certifications</a></li>
            <li><a href="#portfolio" className="hover:text-indigo-500 transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a></li>
          </ul>
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>

      {isMobile ? (
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-indigo-900 to-black overflow-hidden">
          <Image
            src="/portfolio/movilStatic.webp"
            alt="Static Hero3D Image"
            fill
            className="object-cover opacity-90"
            priority
          />

          {/* Contenido central */}
          <div className="absolute inset-x-0 bottom-10 z-10 flex items-center justify-center px-4 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full max-w-sm sm:max-w-md bg-gradient-to-r from-indigo-900/70 to-purple-800/70 p-4 sm:p-6 rounded-2xl shadow-xl backdrop-blur-md border border-indigo-500/30"
            >
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-2 text-center">
                {profile.name}
              </h1>
              <p className="text-sm sm:text-base text-indigo-100 leading-relaxed text-center">
                {profile.role} <br />
                {profile.subRole}
              </p>
            </motion.div>
          </div>

          {/* Scroll Down separadamente para no tapar el contenido */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-3 text-3xl rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-800 cursor-default"
            >
              ↓
            </motion.div>
            <span className="mt-1 text-white text-xs opacity-70"> </span>
          </div>
        </section>
      ) : (
        <Hero3DMinimal />
      )
      }

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
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
          {profile.about}
        </p>
      </motion.section>

      <CVSection />

      <ExperienceSection />

      <motion.section
        id="services"
        className="py-20 px-6 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-10">Featured Highlights</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Icon className={`mx-auto w-10 h-10 mb-4 ${service.color}`} />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <ul className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed list-disc list-inside text-left">
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </motion.section>

      <CertificationsSkillsSection />
      <ProductionPlanningSection />
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
          {profile.socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon className={social.color} />
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {social.name === "Email" ? profile.contact.email : social.href.replace('https://', '')}
                </a>
              </div>
            );
          })}
        </div>
      </motion.section>

      <FaqAssistant />
      <Footer visitCount={visitCount} />

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
