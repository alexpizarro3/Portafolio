'use client';

import { Code2, ScrollText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { profile } from '../data/profile';
import { services } from '../data/services';
// Components
import Hero3DMinimal from '@/components/sections/Hero3DMinimal';
import Footer from '@/components/sections/Footer';
import CVSection from '@/components/sections/CVSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import Navbar from '@/components/sections/Navbar';
import { useIsMobile } from '../hooks/useIsMobile';
import CyberGrid from '@/components/ui/CyberGrid';
import { Project } from '@/types/project';

const PortfolioGalleryTablet = dynamic(() => import('@/components/sections/PortfolioGalleryTablet'), { ssr: false });
const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle'), { ssr: false });
const ProductionPlanningSection = dynamic(() => import('@/components/sections/ProductionPlanningSection'), { ssr: false });
const ContactForm = dynamic(() => import('@/components/sections/ContactForm'), { ssr: false });
const FaqAssistant = dynamic(() => import('@/components/ui/FaqAssistant'), { ssr: false });

const CertificationsSkillsSection = dynamic(() => import('@/components/sections/CertificationsSkillsSection'), {
    ssr: false,
    loading: () => <div className="text-center py-10">Loading certifications...</div>
});

function Loader() {
    return (
        <div className="fixed inset-0 bg-space-black z-50 flex items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-neon-cyan"></div>
        </div>
    );
}

interface HomeClientProps {
    projects: Project[];
}

export default function HomeClient({ projects }: HomeClientProps) {
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
        const recordVisit = async () => {
            try {
                await fetch('/api/visits', { method: 'POST' });
            } catch {
                console.warn('Failed to record visit');
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
                setVisitCount(0);
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
        <main className="min-h-screen bg-space-black text-white relative">
            <CyberGrid />
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Hero3DMinimal />
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 relative z-10 w-full max-w-6xl mx-auto px-6">
                <ExperienceSection />
            </section>

            {/* Services Section */}
            <motion.section
                id="services"
                className="py-20 px-6 max-w-6xl mx-auto text-center relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold mb-10 text-white text-glow">Featured Highlights</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="p-6 glass-card rounded-xl hover:shadow-neon-cyan/20">
                                <Icon className={`mx-auto w-10 h-10 mb-4 ${service.color}`} />
                                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                                <ul className="text-gray-400 text-sm leading-relaxed list-disc list-inside text-left">
                                    {service.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </motion.section>

            {/* Skills & Certifications */}
            <div className="relative z-10">
                <CertificationsSkillsSection />
                <ProductionPlanningSection />
            </div>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet">Featured Projects</h2>
                <PortfolioGalleryTablet projects={projects} />
            </section>


            {/* Contact Section */}
            <motion.section
                id="contact"
                className="py-20 px-6 max-w-3xl mx-auto text-center relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="glass-panel p-8 rounded-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-white text-glow">Contact</h2>
                    <ContactForm />
                    <br />
                    <div className="flex flex-col items-center gap-4 text-gray-300">
                        {profile.socials.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <div key={index} className="flex items-center gap-2">
                                    <Icon className={social.color} />
                                    <a href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                                        {social.name === "Email" ? profile.contact.email : social.href.replace('https://', '')}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </motion.section>

            <FaqAssistant />
            <Footer visitCount={visitCount} />

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
        </main>
    );
}
