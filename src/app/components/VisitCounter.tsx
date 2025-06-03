'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visits', { method: 'POST' })
      .then(() => fetch('/api/visits'))
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-full flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200"
    >
      <Eye className="w-4 h-4" />
      {count !== null ? (
        <span>{count} visits</span>
      ) : (
        <span>Loading...</span>
      )}
    </motion.div>
  );
}
