'use client';

import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Indicadores Logísticos',
    description: 'Dashboard de KPIs como Costo Logístico, Fill Rate, MAPE y Días de Inventario. Incluye extracción desde SAP, ETL en Python y alertas automáticas con Power Automate. Visualización por país, marca y producto con análisis temporal.',
    image: '/portfolio/project1.webp',
    technologies: ['SAP', 'SQL', 'Power BI', 'Power Automate', 'ETL']
  },
  {
    id: 2,
    title: 'Tiempos Muertos TPM',
    description: 'Sabana de indicadores para analizar el impacto de paros operativos, mecánicos y eléctricos. Vista por línea, producto y marca. Generó ahorros anuales de $50K USD.',
    image: '/portfolio/project2.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 3,
    title: 'Dashboard de Scrap',
    description: 'Dashboard de desperdicio en procesos productivos. Permite visualización clara por línea, producto y turno, con insights para reducir scrap y mejorar eficiencia.',
    image: '/portfolio/project3.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 4,
    title: 'Sobrepeso por Línea',
    description: 'Dashboard de pérdidas por entrega de producto con mayor peso al declarado. Identifica desviaciones por línea y turno para reducir el impacto económico.',
    image: '/portfolio/project4.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 5,
    title: 'Consumo de Gas LPG',
    description: 'Indicador desarrollado para medir consumo de Gas LPG (m³) por horno, producto y tonelada. Contribuyó al cumplimiento de certificaciones energéticas y redujo costos en $50K USD anuales.',
    image: '/portfolio/project5.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 6,
    title: 'Análisis de Inventario y Rentabilidad',
    description: 'Notebook en Python ejecutado en Google Colab que analiza ventas, márgenes, rentabilidad y clasificación ABC...',
    image: '/portfolio/project6.webp',
    technologies: ['Python', 'Pandas', 'Plotly', 'Excel', 'Google Drive'],
    link: 'https://colab.research.google.com/drive/1gcAqYP3yEKv8dRD-U2iueZdQJwFpbQoF?usp=sharing'
  },
  {
    id: 7,
    title: 'ETL con Python + SQL Server + Google Sheets',
    description: 'Script en Python que se conecta a SQL Server, transforma y sube el resultado a Google Sheets.',
    image: '/portfolio/project7.webp',
    technologies: ['Python', 'Pandas', 'SQL', 'Google Sheets', 'Google Drive'],
    link: 'https://github.com/alexpizarro3/python/blob/main/SqlServerQuerry'
  },
  {
    id: 8,
    title: 'Integración Python con SAP ERP para BI',
    description: 'Script automatizado en Python que se conecta al entorno SAP, descarga reportes y los conecta a Power BI.',
    image: '/portfolio/project8.webp',
    technologies: ['Python', 'SAP', 'CSV', 'Power BI'],
    link: 'https://github.com/alexpizarro3/python/blob/main/Cooispi%20Mes%20Actual.py'
  },
  {
    id: 9,
    title: 'Web Scraping de Precios con Python',
    description: 'Script automatizado que extrae precios desde sitios web, limpia los datos con Pandas y genera visualizaciones con Plotly.',
    image: '/portfolio/project9.webp',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Plotly', 'Pandas', 'CSV'],
    link: 'https://colab.research.google.com/drive/1alyhGUI-cosYQY5hRgq72KQhtMLchk4a?usp=sharing'
  },
  {
    id: 10,
    title: 'Consulta API Shoplogix con Python',
    description: 'Script que consulta un API de Shoplogix usando fechas dinámicas. Extrae JSON, transforma a CSV y lo carga en SQL Server.',
    image: '/portfolio/project10.webp',
    technologies: ['Python', 'API', 'Pandas', 'JSON', 'SQL'],
    link: 'https://github.com/alexpizarro3/python/blob/main/ApiShoplogix'
  }
];

export default function PortfolioGalleryTablet() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedSection, setSelectedSection] = useState<'all' | 'powerbi' | 'python'>('all');

  const handleHover = useCallback((id: number | null) => {
    setActiveProject(id);
  }, []);

  const powerBIProjects = useMemo(() => projects.filter(p => p.id <= 5), []);
  const pythonProjects = useMemo(() => projects.filter(p => p.id > 5), []);

  const renderSection = (sectionProjects: Project[]) => (
    <div className="hidden md:flex flex-col gap-8 mb-20">
      {sectionProjects.map(project => (
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
    </div>
  );

  return (
    <section id="portfolio" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Portafolio Visual</h2>

      <div className="flex justify-center gap-6 mb-12">
        {['all', 'powerbi', 'python'].map(section => (
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
          <h3 className="text-2xl font-semibold mb-8 text-indigo-800 dark:text-indigo-300 border-b-2 border-indigo-400 pb-2">
            🔷 Power BI & Business Intelligence
          </h3>
          {renderSection(powerBIProjects)}
        </>
      )}

      {(selectedSection === 'all' || selectedSection === 'python') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-green-800 dark:text-green-300 border-b-2 border-green-400 pb-2">
            🔵 Python y Automatización
          </h3>
          {renderSection(pythonProjects)}
        </>
      )}
    </section>
  );
}
