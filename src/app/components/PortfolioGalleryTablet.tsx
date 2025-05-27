import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Indicadores Logísticos',
    description: 'Dashboard mensual con KPIs de Fill Rate, MAPE, Costo Logístico y Días de Cubrimiento.',
    image: '/portfolio/project1.jpg',
  },
  {
    id: 2,
    title: 'Tiempos Muertos TPM',
    description: 'Visualización de causas de paro, tendencia semanal y TreeMap por línea.',
    image: '/portfolio/project2.jpg',
  },
  {
    id: 3,
    title: 'Dashboard de Scrap',
    description: 'Scrap diario, semanal y mensual por línea con metas y tendencia.',
    image: '/portfolio/project3.jpg',
  },
  {
    id: 4,
    title: 'Sobrepeso por Línea',
    description: 'Dashboard que compara % sobrepeso por línea y turno con metas definidas.',
    image: '/portfolio/project4.jpg',
  },
  {
    id: 5,
    title: 'Consumo de Gas LPG',
    description: 'Consumo semanal de Gas LPG en m³, turnos, hornos y monto no reportado en USD.',
    image: '/portfolio/project5.jpg',
  },
];

export default function PortfolioGalleryTablet() {
  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-16">Portafolio Visual</h2>
      <div className="flex flex-col gap-32">
        {projects.map(({ id, title, description, image }) => (
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
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
