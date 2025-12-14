
'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { experience } from '../data/experience';

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
                <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
                <div className="h-1 w-20 bg-indigo-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900 ml-3 md:ml-6 space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-10 ml-6 md:ml-10"
                    >
                        <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 ring-4 ring-white dark:ring-gray-900">
                            <Briefcase className="h-3 w-3 text-white" />
                        </span>

                        <div className="p-6 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    {job.role}
                                    {index === 0 && (
                                        <span className="bg-indigo-100 text-indigo-800 text-xs font-mono px-2.5 py-0.5 rounded dark:bg-indigo-900/50 dark:text-indigo-300">
                                            Current
                                        </span>
                                    )}
                                </h3>
                                <div className="flex items-center text-sm font-mono text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {job.period}
                                </div>
                            </div>

                            <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-3">
                                {job.company}
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {job.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {job.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-indigo-50/50 text-indigo-700 dark:bg-gray-700/50 dark:text-indigo-300 border border-indigo-100/50 dark:border-gray-600/50"
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
