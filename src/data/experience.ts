
export interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements?: string[];
    skills: string[];
}

export const experience: ExperienceItem[] = [
    {
        company: "Google (via Accenture)",
        role: "Senior Supply Chain Reverse Data Analyst",
        period: "Sept 2025 – Present",
        description: "Leading reverse logistics data analytics and infrastructure within the Google ecosystem, optimizing asset recovery, signal sourcing, and automated reporting pipelines.",
        achievements: [
            "RevFleet WS2 Onboarding: Leading efforts in asset signal sourcing, VRM (Vendor Relationship Management) signal integration, and Business Requirements Document (BRD) refinement.",
            "TaskFlow Implementation: Managing team-level planning and agile execution through TaskFlow Portfolios.",
            "Optimizing data extraction using advanced PLX Scripts and GoogleSQL for Reverse Logistics.",
            "Building strategic Looker reports and PLX Dashboards to drive decision-making.",
            "Active participant in the Mentoring & Training Mavens program, focused on leadership and career growth."
        ],
        skills: ["PLX Scripts", "GoogleSQL", "BigQuery", "Looker", "PLX Dashboards", "TaskFlow", "Buganizer", "VRM", "Reverse Logistics", "Scrum Master"]
    },
    {
        company: "B2S Núcleos Fintech",
        role: "Business Intelligence Data Analyst",
        period: "Dec 2024 – Sept 2025",
        description: "Led business intelligence initiatives and automated data transformations to deliver actionable financial insights across the fintech ecosystem.",
        achievements: [
            "Developed strategic BI solutions using Power BI and integrated PostgreSQL databases via Power Query.",
            "Utilized Python for data transformation and advanced analytics to deliver financial insights."
        ],
        skills: ["Power BI", "PostgreSQL", "Power Query", "Python", "Advanced Analytics", "Fintech"]
    },
    {
        company: "Pozuelo (Nutresa Group)",
        role: "Lead Manufacturing Data Analyst",
        period: "2018 – 2024",
        description: "Spearheaded production planning, manufacturing analytics, and digital transformation across plant operations.",
        achievements: [
            "Led production planning and digital transformation, migrating legacy systems to Power BI, saving $500K+.",
            "Developed Python-based MRP simulations and 20+ Python RPAs for SAP data extraction and SQL interaction."
        ],
        skills: ["Power BI", "Python (RPA)", "SAP", "MRP Simulations", "SQL", "Digital Transformation", "Production Planning"]
    },
    {
        company: "Pozuelo (Nutresa Group)",
        role: "System Information Coordinator",
        period: "2012 – 2018",
        description: "Drove plant-wide digital transformation, shop floor integration, and real-time process automation.",
        achievements: [
            "Led plant digital transformation, integrating SAP and Shop Floor data using SQL Server and Python.",
            "Developed real-time web applications with Google Apps Script for digitization of critical processes."
        ],
        skills: ["SAP", "SQL Server", "Python", "Google Apps Script", "Shop Floor Integration", "Plant Digitalization"]
    }
];
