import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { question } = await req.json();
  const lowerQ = question.toLowerCase();

  const faqs: { keywords: string[]; answer: string }[] = [
    {
      keywords: ['who created', 'who made', 'who built', 'created'],
      answer: 'This portfolio was designed and developed by Alexis Pizarro using Next.js, Tailwind CSS, Three.js, and Framer Motion.',
    },
    {
      keywords: ['study path', 'education', 'university', 'study', 'studies', 'path'],
      answer: 'Alexis Pizarro studied Systems Engineering at Hispanoamerican University in Heredia. He later earned certifications through Grow Up and Microsoft.',
    },
    {
      keywords: ['years of experience', 'experience'],
      answer: 'Alexis has over 5 years of experience in System Engineering, Business Intelligence, and Data Analysis.',
    },
    {
      keywords: ['technologies', 'stack', 'used', 'tech', 'stack'],
      answer: 'The portfolio uses Next.js, Tailwind CSS, React Three Fiber, Framer Motion, and Supabase for the backend.',
    },
    {
      keywords: ['purpose', 'goal', 'mission'],
      answer: "This portfolio showcases Alexis Pizarro's skills, projects, and achievements in data analysis and business intelligence.",
    },
    {
      keywords: ['3d animation', 'three.js', 'shaders', '3d'],
      answer: 'The 3D animation was built with React Three Fiber and custom shaders for a galactic effect.',
    },
    {
      keywords: ['how many projects', 'number of projects', 'project', 'projects'],
      answer: 'The portfolio currently showcases 12 projects categorized under Power BI, Python, and Digital Transformation.',
    },
    {
      keywords: ['digital tft', 'digital transformation', 'digital'],
      answer: 'Digital Tft stands for Digital Transformation — projects that involved automating and digitizing real-world operations like manufacturing.',
    },
    {
      keywords: ['impactful', 'important project', 'biggest savings', 'impact'],
      answer: 'The Digital Manufacturing project using Shoplogix MES saved $150K/year by enabling real-time data and going fully paperless.',
    },
    {
      keywords: ['python projects', 'python', 'scripts', 'automation'],
      answer: 'The Python projects include automation scripts for data processing, web scraping, and ETL tasks, enhancing efficiency and accuracy.',
    },
    {
      keywords: ['power bi projects', 'power bi'],
      answer: 'The Power BI projects focus on creating interactive dashboards and reports for data visualization and business intelligence.',
    },
    {
      keywords: ['dax', 'dax knowledge'],
      answer: 'DAX (Data Analysis Expressions) is used in Power BI for data modeling and creating complex calculations in reports.',
    },
    {
      keywords: ['sql', 'sql knowledge'],
      answer: 'SQL (Structured Query Language) is used for querying and managing data in relational databases, essential for ETL processes.',
    },
    {
      keywords: ['achievement', 'achievements', 'accomplishment'],
      answer: 'Alexis has led initiatives saving over $500K through BI dashboards, process automation with Python, and paperless manufacturing.',
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
