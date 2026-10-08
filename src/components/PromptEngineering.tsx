import React, { useState } from 'react';
import { Terminal, Copy, Check, ArrowRight, Sparkles, SlidersHorizontal } from 'lucide-react';

export const PromptEngineering: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const basicPrompt = 'Tell me about Python';
  const structuredPrompt =
    'Act as a beginner-friendly programming tutor. Explain Python functions using one simple example, then give me three small practice questions.';

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="prompt-engineering" className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#38bdf8]">
          <span>04</span>
          <span className="text-[#64748b]">/</span>
          <span>SPECIALIZATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans mb-3">
          Prompt engineering
        </h2>

        {/* Short explanation */}
        <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl leading-relaxed mb-10 font-sans">
          Exploring how prompt structure, context, constraints, examples, and iteration can improve the usefulness and consistency of AI outputs.
        </p>

        {/* Visual Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 font-mono">
          {/* Card 1: Basic Prompt */}
          <div className="p-5 rounded-sm border border-[#202328] bg-[#121417] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1c1e22]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                  <span className="text-xs font-semibold text-[#f3f4f6]">Basic prompt</span>
                </div>
                <span className="text-[10px] text-[#6b7280]">Generic & Unconstrained</span>
              </div>

              <div className="p-4 rounded-sm bg-[#0e1012] border border-[#1b1d22] relative group">
                <p className="text-sm text-[#cbd5e1] font-mono select-all">
                  `{basicPrompt}`
                </p>
                <button
                  onClick={() => copyToClipboard(basicPrompt, 'basic')}
                  className="absolute top-2 right-2 p-1.5 rounded-sm bg-[#181a1f] text-[#9ca3af] hover:text-[#f3f4f6] opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copy prompt"
                >
                  {copied === 'basic' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-[#9ca3af] font-sans">
                <div className="flex items-start gap-2">
                  <span className="text-[#ef4444] font-mono text-[11px]">✕</span>
                  <span>Vague intent leads to encyclopedic, unfocused responses</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#ef4444] font-mono text-[11px]">✕</span>
                  <span>No specified target audience level or output formatting</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#1a1c20] text-[11px] text-[#64748b]">
              Expected outcome: generic wall of text
            </div>
          </div>

          {/* Card 2: Structured Prompt */}
          <div className="p-5 rounded-sm border border-[#2a303c] bg-[#12161b] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1f242e]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                  <span className="text-xs font-semibold text-[#f3f4f6]">Structured prompt</span>
                </div>
                <span className="text-[10px] text-[#38bdf8]">Role + Constraint + Goal</span>
              </div>

              <div className="p-4 rounded-sm bg-[#0e1115] border border-[#1e232d] relative group">
                <p className="text-sm text-[#f1f5f9] leading-relaxed font-mono select-all">
                  "{structuredPrompt}"
                </p>
                <button
                  onClick={() => copyToClipboard(structuredPrompt, 'structured')}
                  className="absolute top-2 right-2 p-1.5 rounded-sm bg-[#1c222b] text-[#9ca3af] hover:text-[#f3f4f6] opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copy prompt"
                >
                  {copied === 'structured' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>

              {/* Anatomy of Prompt */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono">
                <div className="p-2 rounded-sm bg-[#161a22] border border-[#202735]">
                  <span className="text-[#38bdf8] block text-[10px]">ROLE:</span>
                  <span className="text-[#cbd5e1]">Beginner programming tutor</span>
                </div>
                <div className="p-2 rounded-sm bg-[#161a22] border border-[#202735]">
                  <span className="text-[#38bdf8] block text-[10px]">CONSTRAINT:</span>
                  <span className="text-[#cbd5e1]">One simple example</span>
                </div>
                <div className="p-2 rounded-sm bg-[#161a22] border border-[#202735] col-span-2">
                  <span className="text-[#38bdf8] block text-[10px]">VERIFICATION / DRILL:</span>
                  <span className="text-[#cbd5e1]">3 small practice questions</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-[#1f242e] text-[11px] text-[#38bdf8]">
              Expected outcome: concise, educational, directly actionable
            </div>
          </div>
        </div>

        {/* Subtle Line specified in user prompt */}
        <div className="p-3.5 rounded-sm border border-[#1e2126] bg-[#111316] text-center font-mono text-xs sm:text-sm text-[#94a3b8]">
          <span className="text-[#38bdf8] font-medium">Currently exploring</span>
          <span className="mx-2 text-[#475569]">·</span>
          <span>Prompt design</span>
          <span className="mx-2 text-[#475569]">·</span>
          <span>AI workflows</span>
          <span className="mx-2 text-[#475569]">·</span>
          <span>LLM tools</span>
        </div>
      </div>
    </section>
  );
};
