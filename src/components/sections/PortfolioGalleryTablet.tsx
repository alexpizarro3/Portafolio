'use client';

import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import TechCard from '@/components/ui/TechCard';
import { Project } from '@/types/project';

interface PortfolioGalleryTabletProps {
  projects: Project[];
}

export default function PortfolioGalleryTablet({ projects }: PortfolioGalleryTabletProps) {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedSection, setSelectedSection] = useState<'all' | 'powerbi' | 'python' | 'digital'>('all');
  const [expandedSection, setExpandedSection] = useState<'powerbi' | 'python' | 'digital' | null>(null);

  const handleHover = useCallback((id: number | null) => {
    setActiveProject(id);
  }, []);

  const powerBIProjects = useMemo(() => projects.filter(p => p.id <= 5), [projects]);
  const pythonProjects = useMemo(() => projects.filter(p => p.id > 5 && p.id <= 10), [projects]);
  const digitalProjects = useMemo(() => projects.filter(p => p.id >= 11), [projects]);

  const renderSection = (sectionProjects: Project[], section: 'powerbi' | 'python' | 'digital') => {
    const isExpanded = expandedSection === section;
    const visibleProjects = isExpanded ? sectionProjects : sectionProjects.slice(0, 3);

    return (
      <div className="flex flex-col gap-8 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map(project => (
            <TechCard
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onHover={handleHover}
              onClick={() =>
                setActiveProject(project.id === activeProject ? null : project.id)
              }
            />
          ))}
        </div>

        {sectionProjects.length > 3 && (
          <button
            onClick={() =>
              setExpandedSection(isExpanded ? null : section)
            }
            className="mx-auto px-5 py-2 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-500/50 hover:bg-indigo-600/40 transition font-mono text-sm"
          >
            {isExpanded ? '[-] Collapse' : '[+] Expand'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:flex sm:justify-center sm:gap-3 gap-2 mb-12">
        {(['all', 'powerbi', 'python', 'digital'] as const).map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedSection(section);
              setExpandedSection(null);
            }}
            className={`px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-md rounded-full font-mono font-semibold transition-all duration-300 shadow-lg whitespace-nowrap text-center backdrop-blur-md border ${selectedSection === section
              ? section === 'python'
                ? 'bg-green-600/20 text-green-300 border-green-500/50 shadow-green-900/20'
                : section === 'digital'
                  ? 'bg-yellow-600/20 text-yellow-300 border-yellow-500/50 shadow-yellow-900/20'
                  : 'bg-indigo-600/20 text-indigo-300 border-indigo-500/50 shadow-indigo-900/20'
              : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h3 className="text-xl font-mono mb-6 text-neon-cyan border-b border-white/10 pb-2 inline-block">
            &gt; Power BI & Business Intelligence
          </h3>
          {renderSection(powerBIProjects, 'powerbi')}
        </motion.div>
      )}

      {(selectedSection === 'all' || selectedSection === 'python') && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h3 className="text-xl font-mono mb-6 text-green-400 border-b border-white/10 pb-2 inline-block">
            &gt; Python & Automation
          </h3>
          {renderSection(pythonProjects, 'python')}
        </motion.div>
      )}

      {(selectedSection === 'all' || selectedSection === 'digital') && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="text-xl font-mono mb-6 text-yellow-400 border-b border-white/10 pb-2 inline-block">
            &gt; Digital Tft
          </h3>
          {renderSection(digitalProjects, 'digital')}
        </motion.div>
      )}
    </div>
  );
}