'use client';

import { motion } from 'framer-motion';
import { BarChart4, Bot, Cpu, Code2, ScrollText } from 'lucide-react';
import CertCard from '@/components/ui/CertCard';
import SkillBar from '@/components/ui/SkillBar';
import RadarChart from '@/components/ui/RadarChart';


import { certifications, skills } from '@/data/skills';

// Helper to render icons dynamically if needed, or pass the component in data (if we changed data file to be .tsx to import icons directly, which is easier)
// The current data file uses string names for icons. We need a map.

const iconMap: { [key: string]: React.ReactNode } = {
  BarChart4: <BarChart4 className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  ScrollText: <ScrollText className="w-6 h-6" />
};

export default function CertificationsSkillsSection() {
  return (
    <motion.section
      id="certifications"
      className="py-24 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-12">Certifications & Skills</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <CertCard
              {...cert}
              icon={iconMap[cert.icon] || <ScrollText className="w-6 h-6" />}
            />
          </motion.div>
        ))}
      </div>

      <div className="space-y-6 mb-16">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: index * 0.2 }}
          >
            <SkillBar skill={skill.name} level={skill.level} />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-4">Skill Radar</h3>
        <RadarChart />
      </motion.div>
    </motion.section>
  );
}
