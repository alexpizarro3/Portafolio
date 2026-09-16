import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { question } = await req.json();
  const lowerQ = question.toLowerCase();

  const faqs: { keywords: string[]; answer: string }[] = [
    {
      keywords: ['who created', 'who made', 'who built', 'created', 'who are you', 'quien es', 'who is'],
      answer: 'This portfolio belongs to Alexis Pizarro Abarca, Senior Supply Chain Data Analyst and Information Systems Engineer with extensive experience in the Google Ecosystem, BI, Python RPA, and Generative AI.',
    },
    {
      keywords: ['google', 'accenture', 'revfleet', 'reverse logistics'],
      answer: 'At Google (via Accenture), Alexis works as Senior Supply Chain Reverse Data Analyst, leading efforts in asset signal sourcing, VRM signal integration, BRD refinement, PLX Scripts, GoogleSQL, Looker reports, and TaskFlow implementation.',
    },
    {
      keywords: ['ai', 'generative ai', 'gemini', 'notebooklm', 'ia', 'inteligencia artificial'],
      answer: 'Alexis leverages Generative AI (Google Gemini, NotebookLM, Gems, Veo) to accelerate complex data workflows, optimize project delivery, and enhance analytical precision.',
    },
    {
      keywords: ['scrum', 'agile', 'scrum master', 'leadership'],
      answer: 'Alexis serves as Scrum Master, facilitating agile ceremonies, optimizing team velocity, and administering project tools like TaskFlow Portfolios, Buganizer, and Aurora.',
    },
    {
      keywords: ['study path', 'education', 'university', 'study', 'studies', 'degree'],
      answer: 'Alexis holds a B.S. in Information Systems Engineering from Universidad Hispanoamericana (curriculum complete, thesis pending), along with GCP Analytics, Google Data Analytics, and DataCamp certifications.',
    },
    {
      keywords: ['years of experience', 'experience', 'career', 'trayectoria'],
      answer: 'Alexis has over 12 years of progressive engineering and analytical experience spanning Google (via Accenture), B2S Núcleos Fintech, and Pozuelo (Nutresa Group).',
    },
    {
      keywords: ['technologies', 'stack', 'used', 'tech', 'skills'],
      answer: 'Technical stack: PLX Scripts, GoogleSQL, BigQuery, PostgreSQL, SQL Server, Looker, Power BI (DAX/Query), Python (RPA), Google Apps Script, Power Automate, and Google Gemini AI.',
    },
    {
      keywords: ['certifications', 'certificates', 'certificaciones'],
      answer: 'Key certifications include Google Cloud Platform Analytics (2025), Google Data Analytics Professional (2024), Data Analyst with Power BI (DataCamp 2025), and EF SET English Certificate (B2-C1).',
    },
    {
      keywords: ['purpose', 'goal', 'mission'],
      answer: "This portfolio showcases Alexis Pizarro's professional profile, real-world data engineering solutions, interactive dashboards, and career achievements.",
    },
    {
      keywords: ['fintech', 'b2s'],
      answer: 'At B2S Núcleos Fintech, Alexis developed strategic Power BI solutions, integrated PostgreSQL databases via Power Query, and used Python for financial analytics.',
    },
    {
      keywords: ['pozuelo', 'nutresa', 'manufacturing'],
      answer: 'At Pozuelo (Nutresa Group), Alexis led production planning, developed Python-based MRP simulations, 20+ Python RPAs for SAP/SQL, and generated over $500K in operational savings.',
    },
    {
      keywords: ['achievement', 'achievements', 'accomplishment', 'savings'],
      answer: 'Alexis delivered over $500K in cost savings migrating legacy manufacturing systems to Power BI, built 20+ Python RPAs, and currently drives high-impact reverse logistics pipelines at Google.',
    },
  ];

  const match = faqs.find(faq =>
    faq.keywords.some(keyword => lowerQ.includes(keyword))
  );

  const answer = match
    ? match.answer
    : "I'm still learning! Try asking something about Alexis's projects, technologies, or achievements.";

  return NextResponse.json({ answer });
}
