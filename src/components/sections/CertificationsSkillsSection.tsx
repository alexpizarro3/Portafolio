'use client';

import { motion } from 'framer-motion';
import { BarChart4, Bot, Cpu, Code2, ScrollText, GraduationCap, Cloud } from 'lucide-react';
import CertCard from '@/components/ui/CertCard';
import SkillBar from '@/components/ui/SkillBar';
import RadarChart from '@/components/ui/RadarChart';

import { certifications, skills, skillCategories } from '@/data/skills';

const iconMap: { [key: string]: React.ReactNode } = {
  BarChart4: <BarChart4 className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Bot: <Bot className="w-6 h-6" />,
  ScrollText: <ScrollText className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />
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
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white text-glow mb-3">Education, Certifications & Skills</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-neon-violet to-neon-cyan mx-auto rounded-full"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <CertCard
              {...cert}
              icon={iconMap[cert.icon] || <ScrollText className="w-6 h-6" />}
            />
          </motion.div>
        ))}
      </div>

      {/* Categorized Tech Stack Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-card p-5 rounded-xl border border-white/10 hover:border-neon-cyan/40 transition-colors">
            <h3 className="text-xs font-bold font-mono text-neon-cyan mb-3 tracking-wider uppercase">
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 font-mono hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
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
