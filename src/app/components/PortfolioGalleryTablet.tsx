import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { SiPython, SiGooglesheets, SiPlotly, SiSap } from 'react-icons/si';
import { FaDatabase, FaChartBar, FaMicrosoft } from 'react-icons/fa';

// ✅ Interfaz de tipo para los proyectos
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
};

// ✅ Lista de proyectos
const projects: Project[] = [
  // Power BI Projects
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
  },

  // Python Projects
  {
    id: 6,
    title: 'Análisis de Inventario y Rentabilidad',
    description:
      'Notebook en Python ejecutado en Google Colab que analiza ventas, márgenes, rentabilidad y clasificación ABC. Incluye limpieza de datos, KPIs financieros, visualizaciones con Plotly y exportación automática a Excel y Google Drive.',
    image: '/portfolio/project6.jpg',
    technologies: ['Python', 'Pandas', 'Plotly', 'Excel', 'Google Drive'],
    link: 'https://colab.research.google.com/drive/1gcAqYP3yEKv8dRD-U2iueZdQJwFpbQoF?usp=sharing'
  }, 
  {
    id: 7,
    title: 'ETL con Python + SQL Server + Google Sheets',
    description:
      'Script en Python que se conecta a una base de datos SQL Server, extrae datos de dos tablas, los transforma y une con Pandas, y exporta el resultado a un archivo CSV. Finalmente, lo sube automáticamente a una hoja de cálculo de Google Sheets en Google Drive.',
    image: '/portfolio/project7.jpg',
    technologies: ['Python', 'Pandas', 'SQL', 'Google Sheets', 'Google Drive'],
    link: 'https://github.com/alexpizarro3/python/blob/main/SqlServerQuerry'
  },
  {
    id: 8,
    title: 'Integración Python con SAP ERP para BI',
    description:
      'Script automatizado en Python que se conecta al entorno SAP ERP utilizando SAP Scripting, ejecuta múltiples transacciones, descarga los reportes, los limpia y consolida en un archivo CSV que se conecta dinámicamente a Power BI para visualización y análisis de negocio.',
    image: '/portfolio/project8.jpg',
    technologies: ['Python', 'SAP', 'CSV', 'Power BI'],
    link: 'https://github.com/alexpizarro3/python/blob/main/Cooispi%20Mes%20Actual.py'
  },
  {
    id: 9,
    title: 'Web Scraping de Precios con Python',
    description:
      'Script automatizado que extrae precios desde sitios web utilizando BeautifulSoup y Selenium. Limpia los datos con Pandas, los guarda en CSV y genera visualizaciones de tendencias con Plotly para análisis de competencia y promociones.',
    image: '/portfolio/project9.jpg',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Plotly', 'Pandas', 'CSV'],
    link: 'https://github.com/alexpizarro3/python/blob/main/WebScrapping'
  },
  {
    id: 10,
    title: 'Consulta API Shoplogix con Python',
    description:
      'Script en Python que consulta automáticamente un API de Shoplogix utilizando fechas dinámicas (hoy menos 6 días como rango). Extrae la data desde dos endpoints, transforma los JSON a CSV con Pandas, y carga los resultados en las tablas SQL Server: TDetalleTiemposTPM y TKpisDesempeño.',
    image: '/portfolio/project10.jpg',
    technologies: ['Python', 'API', 'Pandas', 'JSON', 'SQL'],
    link: 'https://github.com/alexpizarro3/python/blob/main/ApiShoplogix'
  }
];

const techIcons: Record<string, React.ReactNode> = {
  'Power BI': <FaChartBar className="text-yellow-600" />,
  'Python': <SiPython className="text-green-600" />,
  'SQL': <FaDatabase className="text-red-600" />,
  'Google Sheets': <SiGooglesheets className="text-green-700" />,
  'Excel': <FaMicrosoft className="text-green-500" />,
  'Plotly': <SiPlotly className="text-blue-600" />,
  'Power Automate': <FaMicrosoft className="text-blue-600" />,
  'SAP': <SiSap className="text-indigo-600" />
};

export default function PortfolioGalleryTablet() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedSection, setSelectedSection] = useState<'all' | 'powerbi' | 'python'>('all');

  const renderProject = (project: Project) => (
    <motion.div
      key={project.id}
      onClick={() => setActiveProject(project.id === activeProject ? null : project.id)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: project.id * 0.08 }}
      viewport={{ once: true }}
      className={`relative flex flex-col md:flex-row items-center gap-6 cursor-pointer transition-all duration-500 rounded-xl p-2 ${activeProject === project.id ? 'scale-100 bg-white dark:bg-gray-900 shadow-xl z-20' : 'scale-75 opacity-60 hover:scale-80 hover:opacity-100 bg-gray-100 dark:bg-gray-800 z-10'}`}
      onMouseEnter={() => setActiveProject(project.id)}
      onMouseLeave={() => setActiveProject(null)}
    >
      {activeProject === project.id && (
        <div className="absolute -top-2 right-4 text-indigo-600 dark:text-indigo-400 text-xl animate-bounce">⬇</div>
      )}
      <div className="w-full md:w-3/5 flex justify-center">
        <motion.div
          whileHover={{ scale: 1.03 }} transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="relative w-full max-w-[600px] aspect-[16/10] bg-black rounded-xl border-[6px] border-gray-900 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-2 left-2 w-2 h-2 bg-gray-600 rounded-full" />
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className={`rounded-xl ${project.id === 6 ? 'object-contain' : 'object-cover'}`}
          />
        </motion.div>
      </div>
      <div className={`w-full md:w-2/5 text-center md:text-left transition-all duration-500 ${activeProject === project.id ? 'max-h-[500px] opacity-100' : 'max-h-64 opacity-100 overflow-hidden'}`}>
        <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-400">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-4">{project.description}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 text-indigo-600 dark:text-indigo-400 hover:underline font-semibold text-sm"
          >
            {project.link.includes('colab') ? 'Abrir en Google Colab →' : 'Ver proyecto →'}
          </a>
        )}
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-200 text-[10px] font-medium px-2 py-1 rounded-full"
            >
              {techIcons[tech] || null}{tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const powerBIProjects = projects.filter(p => p.id <= 5);
  const pythonProjects = projects.filter(p => p.id > 5);
  const renderPowerBICarousel = () => (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-500">
      <div className="flex gap-6 min-w-[700px]">
        {powerBIProjects.map((project) => (
          <div key={project.id} className="w-[90vw] max-w-md flex-shrink-0">
            {renderProject(project)}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPythonCarousel = () => (
    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-indigo-500">
      <div className="flex gap-6 min-w-[700px]">
        {pythonProjects.map((project) => (
          <div key={project.id} className="w-[90vw] max-w-md flex-shrink-0">
            {renderProject(project)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Portafolio Visual</h2>

      <div className="flex justify-center gap-6 mb-12">
        {['all', 'powerbi', 'python'].map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSection(section as 'all' | 'powerbi' | 'python')}
            className={`px-6 py-3 rounded-full text-md font-semibold transition-colors duration-300 shadow-md ${
              selectedSection === section
                ? section === 'python'
                  ? 'bg-green-600 text-white'
                  : 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            {section === 'all' ? 'Ver Todos' : section === 'powerbi' ? 'Power BI' : 'Python'}
          </motion.button>
        ))}
      </div>

      {(selectedSection === 'all' || selectedSection === 'powerbi') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-indigo-800 dark:text-indigo-300 border-b-2 border-indigo-400 pb-2">🔷 Power BI & Business Intelligence</h3>
          <div className="block md:hidden mb-12">{renderPowerBICarousel()}</div>
          <div className="hidden md:flex flex-col gap-8 mb-20">{powerBIProjects.map(renderProject)}</div>
        </>
      )}

      {(selectedSection === 'all' || selectedSection === 'python') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-green-800 dark:text-green-300 border-b-2 border-green-400 pb-2">🔵 Python y Automatización</h3>
          <div className="block md:hidden">{renderPythonCarousel()}</div>
          <div className="hidden md:flex flex-col gap-8">{pythonProjects.map(renderProject)}</div>
        </>
      )}
    </section>
  );
}
