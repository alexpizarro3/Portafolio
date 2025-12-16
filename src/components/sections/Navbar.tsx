'use client';

import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle'), { ssr: false });

export default function Navbar() {
    return (
        <motion.nav
            className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 glass-panel rounded-full py-3 px-6 shadow-lg"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold flex items-center gap-2 font-mono text-neon-cyan">
                    <Code2 className="text-neon-violet" /> AP_V9
                </h1>
                <ul className="hidden md:flex gap-8 text-sm font-mono text-gray-300">
                    {['About', 'Experience', 'Planning', 'Certifications', 'Portfolio', 'Contact'].map((item) => (
                        <li key={item}>
                            <a
                                href={`/#${item.toLowerCase().replace(' ', '-')}`}
                                className="hover:text-neon-cyan transition-colors relative group"
                            >
                                <span className="text-neon-cyan opacity-0 group-hover:opacity-100 absolute -left-3 transition-opacity">&gt;</span>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="ml-4">
                    <ThemeToggle />
                </div>
            </div>
        </motion.nav>
    );
}
