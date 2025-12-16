'use client';

import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface SkillBarProps {
  skill: string;
  level: number; // 0 a 100
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(level);
    }
  }, [isInView, level, spring]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-end mb-2 font-mono text-sm">
        <span className="text-gray-300 font-semibold tracking-wide uppercase">{skill}</span>
        <span className="text-neon-cyan">
          [ <motion.span>{displayValue}</motion.span>% ]
        </span>
      </div>

      <div className="w-full bg-space-light/50 border border-white/10 rounded-sm h-3 p-[2px] backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-violet to-neon-cyan rounded-sm shadow-[0_0_10px_rgba(0,243,255,0.3)]"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Tik marks overlay */}
        <div className="absolute inset-0 w-full h-full flex justify-between px-1 pointer-events-none opacity-20">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-[1px] h-full bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
}
