import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Indicadores Logísticos',
    description:
      'Dashboard de KPIs como Costo Logístico, Fill Rate, MAPE y Días de Inventario. Incluye extracción desde SAP, ETL en Python y alertas automáticas con Power Automate. Visualización por país, marca y producto con análisis temporal.',
    image: '/portfolio/project1.jpg',
    technologies: ['SAP', 'SQL', 'Power BI', 'Power Automate', 'ETL']
  },
  {
    id: 2,
    title: 'Tiempos Muertos TPM',
    description:
      'Sabana de indicadores para analizar el impacto de paros operativos, mecánicos y eléctricos. Vista por línea, producto y marca. Generó ahorros anuales de $50K USD.',
    image: '/portfolio/project2.jpg',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 3,
    title: 'Dashboard de Scrap',
    description:
      'Dashboard de desperdicio en procesos productivos. Permite visualización clara por línea, producto y turno, con insights para reducir scrap y mejorar eficiencia.',
    image: '/portfolio/project3.jpg',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 4,
    title: 'Sobrepeso por Línea',
    description:
      'Dashboard de pérdidas por entrega de producto con mayor peso al declarado. Identifica desviaciones por línea y turno para reducir el impacto económico.',
    image: '/portfolio/project4.jpg',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 5,
    title: 'Consumo de Gas LPG',
    description:
      'Indicador desarrollado para medir consumo de Gas LPG (m³) por horno, producto y tonelada. Contribuyó al cumplimiento de certificaciones energéticas y redujo costos en $50K USD anuales.',
    image: '/portfolio/project5.jpg',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  }
];

export default function PortfolioGalleryTablet() {
  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Portafolio Visual</h2>
      <div className="flex flex-col gap-32">
        {projects.map(({ id, title, description, image, technologies }) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: id * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="w-full md:w-3/5 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative w-full max-w-[800px] aspect-[16/10] bg-black rounded-[2rem] border-[10px] border-gray-900 shadow-2xl overflow-hidden"
              >
                {/* Notch and Home button */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-gray-600 rounded-full" />
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-600 rounded-full" />
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 800px"
                  className={`rounded-[1.5rem] ${id === 2 ? 'object-contain' : 'object-cover'}`}
                />
              </motion.div>
            </div>
            <div className="w-full md:w-2/5 text-center md:text-left">
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400">{title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
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
