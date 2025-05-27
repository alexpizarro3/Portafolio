import { motion } from 'framer-motion';
import { BarChart4, Bot, Cpu, Code2, ScrollText } from 'lucide-react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const certifications = [
  { title: 'PL-300 Microsoft', date: 'Late 2025', icon: <BarChart4 className="w-6 h-6" /> },
  { title: 'Power BI – DataCamp', date: 'Mayo 2025', icon: <BarChart4 className="w-6 h-6" /> },
  { title: 'Excel Analytics – Great Learning', date: '2023', icon: <Cpu className="w-6 h-6" /> },
  { title: 'Power BI – Grow Up Academy', date: '2019', icon: <Bot className="w-6 h-6" /> },
  { title: 'Python para Análisis – DataCamp', date: '2024', icon: <Code2 className="w-6 h-6" /> },
  { title: 'EF SET Inglés B2-C1', date: '2023', icon: <ScrollText className="w-6 h-6" /> },
];

const skills = [
  { name: 'Power BI', level: 85 },
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 70 },
  { name: 'Power Automate', level: 60 },
  { name: 'Excel / Power Query', level: 75 },
  { name: 'Apps Script', level: 60 },
];

const radarData = {
  labels: skills.map((s) => s.name),
  datasets: [
    {
      label: 'Nivel de habilidad (%)',
      data: skills.map((s) => s.level),
      backgroundColor: 'rgba(99, 102, 241, 0.3)',
      borderColor: 'rgba(99, 102, 241, 1)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(99, 102, 241, 1)',
    },
  ],
};

const radarOptions = {
  scales: {
    r: {
      beginAtZero: true,
      suggestedMax: 100,
      angleLines: { color: '#ccc' },
      grid: { color: '#eee' },
      pointLabels: { color: '#333' },
      ticks: { backdropColor: 'transparent', color: '#555' },
    },
  },
  plugins: {
    legend: {
      labels: { color: '#444' },
    },
  },
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
      <h2 className="text-3xl font-bold text-center mb-12">Certificaciones & Habilidades</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border dark:border-gray-700 flex items-start gap-4"
          >
            <div className="text-indigo-600 dark:text-indigo-400">{cert.icon}</div>
            <div>
              <h3 className="font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-6 mb-16">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className="bg-indigo-600 h-4 rounded-full shadow-md"
              />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold text-center mb-4">Radar de Habilidades</h3>
        <Radar data={radarData} options={radarOptions} />
      </motion.div>
    </motion.section>
  );
}
