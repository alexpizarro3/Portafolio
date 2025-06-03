'use client';

import { motion } from 'framer-motion';
import { BarChart4, Bot, Cpu, Code2, ScrollText } from 'lucide-react';
import CertCard from './CertCard';
import SkillBar from './SkillBar';
import RadarChart from './RadarChart';

const certifications = [
  { title: 'PL-300 Microsoft', date: 'June 2025', icon: <BarChart4 className="w-6 h-6" /> },
  { title: 'Data Analyst with Power BI – DataCamp', date: 'May 2025', icon: <BarChart4 className="w-6 h-6" />, link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/0a56adace0b94be8f3845a1195fda8cbb69566b4' },
  { title: 'Python for Data Analysis – DataCamp', date: 'Late 2025', icon: <Code2 className="w-6 h-6" /> },
  { title: 'Data Visualization with Power BI – Great Learning', date: '2023', icon: <Cpu className="w-6 h-6" />, link: 'https://www.mygreatlearning.com/certificate/PVDQICBW' },
  { title: 'Excel Analytics – Great Learning', date: '2023', icon: <Cpu className="w-6 h-6" />, link: 'https://www.mygreatlearning.com/certificate/OATINFET' },
  { title: 'Azure Fundamentals – Great Learning', date: '2023', icon: <Cpu className="w-6 h-6" />, link: 'https://www.mygreatlearning.com/certificate/AVSUSFFM' },
  { title: 'Power BI – Grow Up Academy', date: '2019', icon: <Bot className="w-6 h-6" />, link: 'https://drive.google.com/file/d/1klqmpwbXokHu5weeWDH47CFwULqYoXpz/view?usp=sharing' },
  { title: 'EF SET English B2-C1', date: '2023', icon: <ScrollText className="w-6 h-6" />, link: 'https://cert.efset.org/7VCg9k' },
  { title: 'Conversational English INA CS', date: '2014', icon: <ScrollText className="w-6 h-6" />, link: 'https://drive.google.com/file/d/18QNfnCv4Se03NyOD8zCxnlnLzdXRjIPg/view?usp=sharing' }
];

const skills = [
  { name: 'Power BI', level: 85 },
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 70 },
  { name: 'Power Automate', level: 60 },
  { name: 'Excel / Power Query', level: 75 },
  { name: 'Apps Script', level: 60 },
];

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
            <CertCard {...cert} />
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
