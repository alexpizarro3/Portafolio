'use client';

import { motion } from 'framer-motion';
import { Factory } from 'lucide-react';

const productionProjects = [
  {
    title: 'Simulated MRP for Raw Material Optimization',
    description:
      'Designed and implemented a Material Requirements Planning (MRP) simulation using Python scripts and Excel models. Automated the calculation of raw material needs based on forecast and production plans. Improved purchasing accuracy and minimized stockouts.',
    tags: ['MRP', 'Python', 'Excel', 'Inventory', 'Simulation'],
  },
  {
    title: 'Production Scheduling Optimization (MPS)',
    description:
      'Led the redesign of the weekly production schedule using historical trends, OTIF data and Excel automation. Improved service level from 85% to 89%.',
    tags: ['MPS', 'Excel', 'OTIF', 'Service Level'],
  },
  {
    title: 'JKPI Dashboard for Manufacturing Performance',
    description:
      'Built a real-time KPI dashboard showing Service Level, Inventory Turns, and Plan vs Actual using Power BI + SAP integration.',
    tags: ['Power BI', 'JKPI', 'Service Level', 'SAP'],
  },
  {
    title: 'Process Improvement: Setup Time Reduction',
    description:
      'Reduced average line setup time by 10% through layout changes, operator training and daily tracking dashboards.',
    tags: ['Process Improvement', 'SMED', 'Dashboards'],
  },
  {
    title: 'Cost Analysis per Process Order',
    description:
      'Developed a cost analysis model using SQL and Power BI to break down raw material, labor, and overhead costs per process order. Enabled financial visibility and variance analysis by product line and production shift.',
    tags: ['Cost Analysis', 'Process Orders', 'Power BI', 'SQL', 'Manufacturing'],
  },
  {
    title: 'Leading CAPEX Projects for Operational Improvements',
    description:
      'Led strategic CAPEX investment projects to upgrade production facilities, resulting in improved production plan compliance, reduced manufacturing costs, energy savings, and enhanced digital transformation across the plant.',
    tags: ['CAPEX', 'Production Plan', 'Cost Reduction', 'Energy Efficiency', 'Digital Transformation'],
  }
];

export default function ProductionPlanningSection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto" id="production-planning">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <Factory className="w-12 h-12 mx-auto text-neon-violet mb-6 drop-shadow-[0_0_8px_rgba(157,78,221,0.5)]" />
          <h2 className="text-3xl font-bold text-white text-glow">
            Production Planning & Execution
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Real-world projects in inventory control, scheduling, MRP simulations, and manufacturing KPIs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {productionProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-xl p-8 group hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] hover:border-neon-cyan/50"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors font-mono">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3 py-1 text-[10px] font-mono text-neon-cyan bg-neon-cyan/5 border border-neon-cyan/20 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
