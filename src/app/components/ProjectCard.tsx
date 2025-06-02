'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { techIcons } from './techIcons';
import { Project } from './types';
import React from 'react';

interface Props {
  project: Project;
  isActive: boolean;
  onHover: (id: number | null) => void;
  onClick: () => void;
}

const ProjectCard = React.memo(({ project, isActive, onHover, onClick }: Props) => (
  <motion.div
    key={project.id}
    onClick={onClick}
    onMouseEnter={() => onHover(project.id)}
    onMouseLeave={() => onHover(null)}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      type: 'spring',
      damping: 20,
      stiffness: 100,
      delay: project.id * 0.08,
      duration: 0.8,
    }}
    viewport={{ once: true, amount: 0.2 }}
    className={`relative flex flex-col md:flex-row items-center gap-6 cursor-pointer transition-all duration-500 rounded-xl p-4 ${
      isActive
        ? 'scale-100 bg-white dark:bg-gray-900 shadow-xl z-20'
        : 'scale-100 md:scale-75 opacity-100 md:opacity-60 hover:md:scale-80 hover:md:opacity-100 bg-gray-100 dark:bg-gray-800 z-10'
    }`}
  >
    {isActive && (
      <div className="absolute -top-2 right-4 text-indigo-600 dark:text-indigo-400 text-xl animate-bounce">
        ⬇
      </div>
    )}

    <div className="w-full md:w-3/5 flex justify-center">
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="relative w-full max-w-[600px] aspect-[16/10] bg-black rounded-xl border-[6px] border-gray-900 shadow-2xl overflow-hidden"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={375}
          className={`rounded-xl w-full h-full ${
            project.id === 6 ? 'object-contain' : 'object-cover'
          }`}
        />
        <div className="absolute top-2 left-2 w-2 h-2 bg-gray-600 rounded-full" />
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
      </motion.div>
    </div>

    <div className="w-full md:w-2/5 text-center md:text-left">
      <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-400">
        {project.title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
        {project.description}
      </p>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-sm"
        >
          {project.link.includes('colab') ? 'Open in Google Colab →' : 'View Project →'}
        </a>
      )}

      <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
        {project.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="flex items-center gap-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 text-[10px] font-medium px-2 py-1 rounded-full"
          >
            {techIcons[tech] || null}
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
));

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
