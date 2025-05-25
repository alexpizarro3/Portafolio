'use client';

import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import Image from 'next/image';

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
    if (!container) return;
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
        className="relative w-full max-w-[95%] mx-auto overflow-hidden flex gap-2 py-10 min-h-[360px] bg-gradient-to-b from-gray-100/70 to-white dark:from-gray-800/70 dark:to-gray-900 border-t border-b border-indigo-200 dark:border-indigo-700 transition-all duration-700 ease-in-out"
      >
        {[...Array(10).keys()].map((i) => {
          const id = i + 1;
          const isHovered = hoveredImage === id;

          return (
            <div
              key={id}
              className="relative w-32 h-60 flex-shrink-0 cursor-pointer group transition-transform duration-300"
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
                  src={`/portfolio/project${id}.jpg`}
                  alt={`Proyecto ${id}`}
                  width={300} // ajusta según tu diseño
                  height={240} // ajusta según tu diseño
                  className="w-full h-60 object-cover rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 group-hover:ring-4 group-hover:ring-indigo-400"
                />

              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-xs py-1 px-3 rounded-full">
                Proyecto {id}
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="relative z-10 max-w-4xl mx-auto p-4">
          <Image
            src={`/portfolio/project${activeImage}.jpg`}
            alt={`Proyecto ${activeImage}`}
            className="w-full h-auto max-h-[80vh] rounded-lg shadow-xl"
          />
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black p-2 rounded"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>
      </Dialog>
    </section>
  );
}
