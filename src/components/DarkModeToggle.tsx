'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null); // null evita parpadeo inicial

  // Establece el tema desde localStorage o preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const activeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(activeDark);
    document.documentElement.classList.toggle('dark', activeDark);
  }, []);

  // Actualiza el DOM y guarda preferencia
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  if (isDark === null) return null; // evita que el ícono parpadee antes de hidratar

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="transition duration-300 hover:scale-110"
    >
      {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700 dark:text-gray-200" />}
    </button>
  );
}
