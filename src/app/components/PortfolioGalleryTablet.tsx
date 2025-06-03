'use client';

import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { Project } from './types';

const projects: Project[] = [
  {
    id: 1,
    title: 'Logistics KPIs',
    description: 'Dashboard with KPIs such as Logistics Cost, Fill Rate, MAPE, and Inventory Days. Includes SAP data extraction, ETL in Python, and automated alerts with Power Automate. Visualized by country, brand, and product with time analysis.',
    image: '/portfolio/project1.webp',
    technologies: ['SAP', 'SQL', 'Power BI', 'Power Automate', 'ETL']
  },
  {
    id: 2,
    title: 'TPM Downtime Analysis',
    description: 'Dashboard to analyze operational, mechanical, and electrical downtimes. View by production line, product, and brand. Enabled $50K USD in annual savings.',
    image: '/portfolio/project2.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 3,
    title: 'Scrap Dashboard',
    description: 'Dashboard for waste in production processes. Clear visualization by line, product, and shift. Provides insights to reduce scrap and improve efficiency.',
    image: '/portfolio/project3.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 4,
    title: 'Overweight by Line',
    description: 'Dashboard for product overweight delivered beyond declared values. Identifies deviations by line and shift to reduce financial impact.',
    image: '/portfolio/project4.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 5,
    title: 'LPG Gas Consumption',
    description: 'Indicator to measure LPG gas consumption (m³) per oven, product, and ton. Supported energy certification compliance and saved $50K USD annually.',
    image: '/portfolio/project5.webp',
    technologies: ['Power BI', 'Power Query', 'SQL', 'Python', 'Excel', 'Google Sheets']
  },
  {
    id: 6,
    title: 'Inventory & Profitability Analysis',
    description: 'Python notebook in Google Colab analyzing sales, margins, profitability, and ABC classification...',
    image: '/portfolio/project6.webp',
    technologies: ['Python', 'Pandas', 'Plotly', 'Excel', 'Google Drive'],
    link: 'https://colab.research.google.com/drive/1gcAqYP3yEKv8dRD-U2iueZdQJwFpbQoF?usp=sharing'
  },
  {
    id: 7,
    title: 'ETL with Python + SQL Server + Google Sheets',
    description: 'Python script connecting to SQL Server, transforming and uploading the result to Google Sheets.',
    image: '/portfolio/project7.webp',
    technologies: ['Python', 'Pandas', 'SQL', 'Google Sheets', 'Google Drive'],
    link: 'https://github.com/alexpizarro3/python/blob/main/SqlServerQuerry'
  },
  {
    id: 8,
    title: 'Python Integration with SAP ERP for BI',
    description: 'Automated Python script connecting to SAP, downloading reports, and linking to Power BI.',
    image: '/portfolio/project8.webp',
    technologies: ['Python', 'SAP', 'CSV', 'Power BI'],
    link: 'https://github.com/alexpizarro3/python/blob/main/Cooispi%20Mes%20Actual.py'
  },
  {
    id: 9,
    title: 'Price Web Scraping with Python',
    description: 'Automated script that scrapes prices from websites, cleans data with Pandas, and visualizes with Plotly.',
    image: '/portfolio/project9.webp',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Plotly', 'Pandas', 'CSV'],
    link: 'https://colab.research.google.com/drive/1alyhGUI-cosYQY5hRgq72KQhtMLchk4a?usp=sharing'
  },
  {
    id: 10,
    title: 'Shoplogix API Query with Python',
    description: 'Python script querying Shoplogix API using dynamic dates. Extracts JSON, transforms to CSV, and uploads to SQL Server.',
    image: '/portfolio/project10.webp',
    technologies: ['Python', 'API', 'Pandas', 'JSON', 'SQL'],
    link: 'https://github.com/alexpizarro3/python/blob/main/ApiShoplogix'
  },
  {
    id: 11,
    title: 'Interactive Portfolio Development',
    description: 'Full development of this personal website using Next.js, Tailwind, 3D animations, multilingual support, and dynamic sections to showcase projects, skills, and certifications.',
    image: '/portfolio/project11.webp',
    technologies: ['Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'React', 'TypeScript'],
    link: 'https://alexispizarroportafolio.vercel.app/'
  },
  {
    id: 12,
    title: 'Manufacturing Digitalization with MES',
    description: 'Implementation of a paperless solution using MES software like Shoplogix. Real-time data capture and dashboards enabled informed decisions on the production floor. Achieved $150,000 USD in annual savings.',
    image: '/portfolio/project12.webp',
    technologies: ['MES', 'Shoplogix', 'APIs', 'SQL Server', 'Automation'],
    link: 'https://github.com/alexpizarro3/python/blob/main/ApiShoplogix'
  }
];

export default function PortfolioGalleryTablet() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedSection, setSelectedSection] = useState<'all' | 'powerbi' | 'python' | 'digital'>('all');

  const handleHover = useCallback((id: number | null) => {
    setActiveProject(id);
  }, []);

  const powerBIProjects = useMemo(() => projects.filter(p => p.id <= 5), []);
  const pythonProjects = useMemo(() => projects.filter(p => p.id > 5 && p.id <= 10), []);
  const digitalProjects = useMemo(() => projects.filter(p => p.id >= 11), []);

  const renderSection = (sectionProjects: Project[]) => (
    <div id = "portfolio" className="flex flex-col gap-8 mb-20">
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
      <h2 className="text-3xl font-bold text-center mb-12">Visual Portfolio</h2>

      <div className="flex justify-center gap-6 mb-12">
        {(['all', 'powerbi', 'python', 'digital'] as const).map((section) => (
          <motion.button
            key={section}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSection(section)}
            className={`px-6 py-3 rounded-full text-md font-semibold transition-colors duration-300 shadow-md ${
              selectedSection === section
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
          {renderSection(powerBIProjects)}
        </>
      )}

      {(selectedSection === 'all' || selectedSection === 'python') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-green-800 dark:text-green-300 border-b-2 border-green-400 pb-2">
            🔵 Python & Automation
          </h3>
          {renderSection(pythonProjects)}
        </>
      )}

      {(selectedSection === 'all' || selectedSection === 'digital') && (
        <>
          <h3 className="text-2xl font-semibold mb-8 text-yellow-800 dark:text-yellow-300 border-b-2 border-yellow-400 pb-2">
            🟡 Digital Tft
          </h3>
          {renderSection(digitalProjects)}
        </>
      )}
    </section>
  );
}
