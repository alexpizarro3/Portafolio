'use client';

import { FileDown } from 'lucide-react';

export default function CVSection() {
  return (
    <section className="w-full px-4 py-12 max-w-4xl mx-auto text-center relative z-20">
      <div className="glass-panel p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-4 text-white text-glow">Download My Resume</h2>
        <p className="mb-6 text-gray-300 font-light">
          Choose your preferred language to download a one-page resume.
        </p>
        <div id="cvsection" className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cv/Compact_CV_Alexis_EN.pdf"
            download
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-neon-violet/20 border border-neon-violet/50 text-white rounded-lg hover:bg-neon-violet/40 hover:shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-300"
          >
            <FileDown className="w-4 h-4 text-neon-violet group-hover:text-white transition-colors" />
            Download in English
          </a>
          <a
            href="/cv/Compact_CV_Alexis_ES.pdf"
            download
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-neon-cyan/20 border border-neon-cyan/50 text-white rounded-lg hover:bg-neon-cyan/40 hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300"
          >
            <FileDown className="w-4 h-4 text-neon-cyan group-hover:text-white transition-colors" />
            Descargar en Español
          </a>
        </div>
      </div>
    </section>
  );
}
