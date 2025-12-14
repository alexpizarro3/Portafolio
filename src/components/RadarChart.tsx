'use client';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Power BI', A: 90 },
  { subject: 'Python', A: 80 },
  { subject: 'SQL', A: 85 },
  { subject: 'Excel', A: 95 },
  { subject: 'ETL', A: 75 }
];

export default function RadarSkillsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Skill" dataKey="A" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
