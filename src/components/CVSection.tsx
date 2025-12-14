'use client';

export default function CVSection() {
  return (
    <section className="w-full px-4 py-12 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Download My Resume</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        Choose your preferred language to download a one-page resume.
      </p>
      <div id = "cvsection" className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/cv/Compact_CV_Alexis_EN.pdf"
          download
          className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
        >
          Download in English
        </a>
        <a
          href="/cv/Compact_CV_Alexis_ES.pdf"
          download
          className="px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition"
        >
          Descargar en Español
        </a>
      </div>
    </section>
  );
}
