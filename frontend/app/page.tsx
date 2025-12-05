"use client";

import { useState } from "react";

export default function Home() {
  const [persona, setPersona] = useState("");
  const [output, setOutput] = useState("");

  const generatePersona = () => {
    if (!persona.trim()) return;
    setOutput(`
🚀 AI Speed Persona
-------------------------
Name: ${persona}
Tone: Fast, concise, high-clarity  
Style: 1–2 sentence replies  
Focus: Efficiency + actionable info  
Persona Summary:
Reply using strong clarity, no fluff, no long paragraphs.
    `);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black font-sans p-8">
      <main className="w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-10 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
          ⚡ AI Speed Persona Builder
        </h1>

        <p className="text-zinc-600 dark:text-zinc-400 leading-7">
          Enter a persona name and instantly generate a fast-response
          instruction block you can paste into an LLM prompt.
        </p>

        <input
          type="text"
          placeholder="e.g., Turbo Analyst, Quick Coach, Rapid Researcher..."
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
          className="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 p-4 text-black dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          onClick={generatePersona}
          className="w-full h-12 rounded-xl bg-black dark:bg-white text-white dark:text-black font-semibold hover:opacity-85 transition"
        >
          Generate Persona
        </button>

        {output && (
          <div className="bg-zinc-100 dark:bg-zinc-800 p-5 rounded-xl whitespace-pre-wrap text-sm text-black dark:text-zinc-50">
            {output}
          </div>
        )}
      </main>
    </div>
  );
}
