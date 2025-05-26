'use client';

import { useState } from 'react';
import { Mail, User, MessageSquareText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<{ success: boolean; message: string } | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();

    if (!name || !email || !message) {
      setFormStatus({ success: false, message: "Todos los campos son obligatorios." });
      return;
    }

    // 🎉 Lanza confeti al enviar
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#8b5cf6', '#ec4899'], // tonos galácticos
    });

    setFormStatus({ success: true, message: "Mensaje enviado exitosamente." });
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-8 bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl shadow-xl max-w-xl mx-auto space-y-6 border border-indigo-400/30"
    >
      <h3 className="text-2xl font-bold text-center text-indigo-300">Envíame un mensaje</h3>

      <div className="relative">
        <User className="absolute top-3.5 left-3 w-5 h-5 text-indigo-400" />
        <input
          type="text"
          name="name"
          required
          placeholder="Tu nombre"
          className="pl-10 pr-4 py-2 w-full rounded-md bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
      </div>

      <div className="relative">
        <Mail className="absolute top-3.5 left-3 w-5 h-5 text-indigo-400" />
        <input
          type="email"
          name="email"
          required
          placeholder="Tu correo"
          className="pl-10 pr-4 py-2 w-full rounded-md bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
        />
      </div>

      <div className="relative">
        <MessageSquareText className="absolute top-3 left-3 w-5 h-5 text-indigo-400" />
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Escribe tu mensaje..."
          className="pl-10 pr-4 py-2 w-full rounded-md bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition transform hover:scale-105 shadow-lg"
      >
        Enviar mensaje
      </button>

      {formStatus && (
        <p className={`text-sm text-center ${formStatus.success ? 'text-green-400' : 'text-red-400'}`}>
          {formStatus.message}
        </p>
      )}
    </form>
  );
}
