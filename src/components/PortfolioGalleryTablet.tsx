'use client';

import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects, Project } from '../data/projects';

export default function PortfolioGalleryTablet() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedSection, setSelectedSection] = useState<'all' | 'powerbi' | 'python' | 'digital'>('all');
  const [expandedSection, setExpandedSection] = useState<'powerbi' | 'python' | 'digital' | null>(null);

  const handleHover = useCallback((id: number | null) => {
    setActiveProject(id);
  }, []);

  const powerBIProjects = useMemo(() => projects.filter(p => p.id <= 5), []);
  const pythonProjects = useMemo(() => projects.filter(p => p.id > 5 && p.id <= 10), []);
  const digitalProjects = useMemo(() => projects.filter(p => p.id >= 11), []);

  const renderSection = (sectionProjects: Project[], section: 'powerbi' | 'python' | 'digital') => {
    const isExpanded = expandedSection === section;
    const visibleProjects = isExpanded ? sectionProjects : sectionProjects.slice(0, 3);

    return (
      <div id="portfolio" className="flex flex-col gap-8 mb-10">
        {visibleProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={activeProject === project.id}
            onHover={handleHover}
            onClick={() =>
              setActiveProject(project.id === activeProject ? null : project.id)
            }
          />
        ))}

        {sectionProjects.length > 3 && (
          <button
            onClick={() =>
              setExpandedSection(isExpanded ? null : section)
            }
            className="mx-auto px-5 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    );
  };

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Visual Portfolio</h2>

      <div className="grid grid-cols-2 sm:flex sm:justify-center sm:gap-3 gap-2 mb-12">
        {(['all', 'powerbi', 'python', 'digital'] as const).map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedSection(section);
              setExpandedSection(null); // reinicia cualquier expansión activa
            }}
            className={`px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-md rounded-full font-semibold transition-colors duration-300 shadow-md whitespace-nowrap text-center ${selectedSection === section
                ? section === 'python'
                  ? 'bg-green-600 text-white'
                  : section === 'digital'
                    ? 'bg-yellow-600 text-white'
                    : 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }`}
          >
            {section === 'all'
              ? 'View All'
              : section === 'powerbi'
                ? 'Power BI'
                : section === 'python'
                  ? 'Python'
                  : 'Digital Tft'}
          </motion.button>
        ))}
      </div>

      {(selectedSection === 'all' || selectedSection === 'powerbi') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-indigo-800 dark:text-indigo-300 border-b-2 border-indigo-400 pb-2">
            🔷 Power BI & Business Intelligence
          </h3>
          {renderSection(powerBIProjects, 'powerbi')}
        </>
      )}

      {(selectedSection === 'all' || selectedSection === 'python') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-green-800 dark:text-green-300 border-b-2 border-green-400 pb-2">
            🔵 Python & Automation
          </h3>
          {renderSection(pythonProjects, 'python')}
        </>
      )}

      {(selectedSection === 'all' || selectedSection === 'digital') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-yellow-800 dark:text-yellow-300 border-b-2 border-yellow-400 pb-2">
            🟡 Digital Tft
          </h3>
          {renderSection(digitalProjects, 'digital')}
        </>
      )}
    </section>
  );
}