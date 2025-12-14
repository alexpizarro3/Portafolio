
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

export const projects: Project[] = [
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
