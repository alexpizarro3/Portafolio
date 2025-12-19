'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { techIcons } from '@/config/icons';
import { Project } from '@/types/project';
import React from 'react';

interface Props {
    project: Project;
    isActive: boolean;
    onHover: (id: number | null) => void;
    onClick: () => void;
}

const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

const TechCard = React.memo(({ project, isActive, onHover, onClick }: Props) => (
    <motion.div
        key={project.id}
        onClick={onClick}
        onMouseEnter={() => onHover(project.id)}
        onMouseLeave={() => onHover(null)}
        {...(!isMobile && {
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            transition: { type: 'spring', damping: 20, stiffness: 100, duration: 0.6 },
            viewport: { once: true, amount: 0.2 },
        })}
        className={`glass-card relative flex flex-col md:flex-row items-center gap-6 cursor-pointer rounded-xl p-4 w-full group ${isActive ? 'border-neon-cyan shadow-[0_0_20px_rgba(0,243,255,0.3)]' : ''
            }`}
    >
        {/* Tech Decorative header line */}
        <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Image Section - Data Window Look */}
        <div className="w-full md:w-3/5 flex justify-center">
            <div className="relative w-full max-w-[600px] aspect-[16/10] bg-black/50 rounded-lg overflow-hidden border border-white/10 group-hover:border-neon-cyan/50 transition-colors duration-300">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${project.id === 6 ? 'object-contain p-4' : ''}`}
                />
                {/* CRT Scanline Effect Overlay (Optional) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />
            </div>
        </div>

        {/* Info Section - Terminal/Code Look */}
        <div className="w-full md:w-2/5 text-center md:text-left flex flex-col h-full justify-between">
            <div>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="text-neon-cyan font-mono text-xs tracking-widest uppercase opacity-70">
                        PROJECT_ID: {String(project.id).padStart(3, '0')}
                    </span>
                    <div className="h-[1px] flex-grow bg-white/10" />
                </div>

                <h3 className="text-lg md:text-xl font-bold mb-3 text-white font-mono break-words group-hover:text-glow transition-all leading-tight">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed line-clamp-3 font-sans border-l-2 border-white/10 pl-3">
                    {project.description}
                </p>
            </div>

            <div className="mt-4">
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 text-[10px] font-mono text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 rounded-sm"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-[10px] font-mono text-gray-400 border border-white/10 rounded-sm">
                            +{project.technologies.length - 4}
                        </span>
                    )}
                </div>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-neon-cyan font-mono text-sm group/link transition-colors"
                    >
                        <span className="border-b border-transparent group-hover/link:border-neon-cyan transition-colors">
                            EXECUTE PROJECT
                        </span>
                        <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                )}
            </div>
        </div>
    </motion.div>
));

TechCard.displayName = 'TechCard';
export default TechCard;
