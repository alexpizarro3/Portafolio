import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

const projects = [
  { id: 1, title: 'Dashboard de KPIs', img: '/portfolio/project1.jpg' },
  { id: 2, title: 'Automatización de Reportes', img: '/portfolio/project2.jpg' },
  { id: 3, title: 'Análisis de Producción', img: '/portfolio/project3.jpg' },
  { id: 4, title: 'Web App de Escalamientos', img: '/portfolio/project4.jpg' },
  { id: 5, title: 'Indicadores MES Tiempo Real', img: '/portfolio/project5.jpg' },
  { id: 6, title: 'Análisis Financiero con Python', img: '/portfolio/project6.jpg' },
  { id: 7, title: 'Scraper SAP Automatizado', img: '/portfolio/project7.jpg' },
  { id: 8, title: 'Dashboards de Calidad', img: '/portfolio/project8.jpg' },
  { id: 9, title: 'Sistema de Producción Visual', img: '/portfolio/project9.jpg' },
  { id: 10, title: 'Monitoreo de OEE', img: '/portfolio/project10.jpg' },
];

export default function PortfolioGallery() {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(1);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const openModal = (id: number) => {
    setActiveImage(id);
    setOpen(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current;
    if (!container || window.innerWidth < 768) return;
    const { left, width } = container.getBoundingClientRect();
    const x = e.clientX - left;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const scrollX = (x / width) * maxScroll;
    container.scrollTo({ left: scrollX, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 px-6 max-w-screen-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">Portafolio Visual</h2>
      <div
        ref={scrollRef}
        onMouseMove={handleMouseMove}
        className="relative w-full max-w-[95%] mx-auto overflow-x-auto flex gap-4 py-10 min-h-[360px] bg-gradient-to-b from-gray-100/70 to-white dark:from-gray-800/70 dark:to-gray-900 border-t border-b border-indigo-200 dark:border-indigo-700 transition-all duration-700 ease-in-out scrollbar-thin scrollbar-thumb-indigo-300 dark:scrollbar-thumb-indigo-600"
      >
        {projects.map(({ id, title, img }) => {
          const isHovered = hoveredImage === id;

          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="relative w-32 h-60 flex-shrink-0 cursor-pointer group"
              onClick={() => openModal(id)}
              onMouseEnter={() => setHoveredImage(id)}
              onMouseLeave={() => setHoveredImage(null)}
              style={{ perspective: '1000px' }}
            >
              <div
                className="transition-transform duration-300 transform"
                style={{
                  transform: `rotateY(${isHovered ? '15deg' : '50deg'}) scale(${isHovered ? 1.25 : 0.85})`,
                  zIndex: isHovered ? 40 : 10,
                }}
              >
                <Image
                  src={img}
                  alt={title}
                  width={300}
                  height={240}
                  className="w-full h-60 object-cover rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 group-hover:ring-4 group-hover:ring-indigo-400"
                />
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-3 rounded-full">
                {title}
              </div>
            </motion.div>
          );
        })}
      </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-90"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Image
                    src={`/portfolio/project${activeImage}.jpg`}
                    alt={`Proyecto ${activeImage}`}
                    className="w-full h-auto max-h-[80vh] rounded-lg shadow-xl"
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black p-2 rounded"
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
