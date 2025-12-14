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

  const spring = useSpring(0, { stiffness: 50, damping: 15 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      spring.set(level);
    }
  }, [isInView, level, spring]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-1 font-mono text-gray-700 dark:text-gray-300">
        <span className="font-semibold">{skill}</span>
        <span className="flex">
          <motion.span>{displayValue}</motion.span>%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-indigo-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
