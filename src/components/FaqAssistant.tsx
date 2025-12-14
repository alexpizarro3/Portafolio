'use client';

import { useState } from 'react';

export default function FaqAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) return;

    const response = await fetch('/api/faq', {
      method: 'POST',
      body: JSON.stringify({ question }),
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl p-6 max-w-2xl mx-auto my-20">
      <h2 id = "faqs" className="text-xl font-bold mb-4 text-center">🤖 Ask the Portfolio AI Assistant</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask me about projects, technologies, or impact..."
        className="w-full p-3 mb-4 border rounded dark:bg-gray-800 dark:text-white"
      />
      <button
        onClick={handleAsk}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
      >
        Ask
      </button>
      {answer && (
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded text-gray-900 dark:text-gray-200">
          <strong>AI:</strong> {answer}
        </div>
      )}
    </div>
  );
}
