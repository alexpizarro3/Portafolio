
'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '@/data/experience';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-20 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold mb-4 text-white text-glow">Professional Experience</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-neon-violet to-neon-cyan mx-auto rounded-full"></div>
            </motion.div>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-10 ml-6 md:ml-10"
                    >
                        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-space-black border border-neon-cyan shadow-[0_0_10px_rgba(0,243,255,0.4)]">
                            <Briefcase className="h-3 w-3 text-neon-cyan" />
                        </span>

                        <div className="glass-card p-6 rounded-xl hover:border-neon-cyan/50 transition-colors duration-300 group">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2 font-mono">
                                    {job.role}
                                    {index === 0 && (
                                        <span className="bg-neon-cyan/10 text-neon-cyan text-xs font-mono px-2.5 py-0.5 rounded border border-neon-cyan/20 animate-pulse">
                                            Current
                                        </span>
                                    )}
                                </h3>
                                <div className="flex items-center text-sm font-mono text-gray-400 mt-2 md:mt-0">
                                    <Calendar className="w-4 h-4 mr-1 text-neon-violet" />
                                    {job.period}
                                </div>
                            </div>

                            <div className="text-lg font-semibold text-neon-cyan mb-3">
                                {job.company}
                            </div>

                            <p className="text-gray-300 mb-4 leading-relaxed font-light">
                                {job.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-mono font-medium rounded-sm bg-white/5 text-gray-300 border border-white/10 group-hover:border-neon-cyan/30 group-hover:text-neon-cyan transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
