'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import Link from 'next/link';

export default function PaperlessPlanta2023Page() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Cpu className="w-12 h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold mb-4">Proyecto Paperless Planta (2023)</h1>
          <p className="text-lg opacity-90">
            Transformación digital total en planta de producción: capturas en tiempo real, dashboards y ahorro millonario.
          </p>
        </motion.div>
      </section>

      {/* Contenido */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">🎯 Objetivo</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            El objetivo fue eliminar el uso de papel en las líneas de producción y permitir la captura de datos en tiempo real para decisiones operativas más efectivas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">🛠️ Implementación</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Instalación de tablets industriales resistentes para captura en planta.</li>
            <li>Formularios digitales creados con Google Apps Script.</li>
            <li>Conexión en tiempo real con dashboards Power BI vía Google Sheets + Python ETL.</li>
            <li>Visualización en línea de métricas clave por línea y turno.</li>
            <li>Entrenamiento a operadores y supervisores.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">💰 Resultados</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Ahorro estimado anual: <strong>$150,000</strong></li>
            <li>Reducción de errores humanos en +60%</li>
            <li>Disponibilidad de información en tiempo real para toda la planta</li>
            <li>Aumento del OEE en +2% en los primeros 3 meses</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-700">📌 Conclusión</h2>
          <p className="leading-relaxed text-gray-700 dark:text-gray-300">
            Este fue uno de los proyectos más significativos de mi carrera profesional. Demostró cómo una transformación bien ejecutada puede traer resultados tangibles, empoderar al equipo operativo y abrir camino a una cultura data-driven en planta.
          </p>
        </motion.div>

        <div className="pt-10">
          <Link href="/transformacion-digital" className="text-indigo-600 hover:underline">← Volver a todos los proyectos</Link>
        </div>
      </section>
    </main>
  );
}
