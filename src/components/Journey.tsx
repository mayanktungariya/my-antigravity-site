import React from 'react';
import { Calendar, ArrowRight, Target, Milestone, Flag } from 'lucide-react';

interface JourneyStep {
  year: string;
  title: string;
  description: string;
  isNext?: boolean;
}

export const Journey: React.FC = () => {
  const steps: JourneyStep[] = [
    {
      year: '2026',
      title: 'Started B.Tech CSE (AI/ML)',
      description: 'Enrolled in Computer Science Engineering with specialization in Artificial Intelligence and Machine Learning.',
    },
    {
      year: '2026',
      title: 'Started learning Python & programming fundamentals',
      description: 'Focusing on problem-solving mechanics, algorithmic logic, control structures, and clean coding habits.',
    },
    {
      year: '2026',
      title: 'Started exploring AI tools & prompt engineering',
      description: 'Studying prompt evaluation, structured system prompts, and how developers can utilize LLMs effectively in everyday software development.',
    },
    {
      year: 'Next',
      title: 'Build more projects → strengthen programming → explore ML',
      description: 'An ongoing milestone: continuing to write more code, building hands-on portfolio projects, and stepping deeper into machine learning concepts.',
      isNext: true,
    },
  ];

  return (
    <section id="journey" className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#38bdf8]">
          <span>05</span>
          <span className="text-[#64748b]">/</span>
          <span>TIMELINE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans mb-3">
          The journey so far
        </h2>
        <p className="text-sm text-[#9ca3af] max-w-xl mb-12 font-sans">
          A genuine record of where I began and what I'm aiming for next.
        </p>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#202328] space-y-8 max-w-2xl font-mono">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Dot on the line */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                  step.isNext
                    ? 'border-[#38bdf8] bg-[#0c0d0e] group-hover:bg-[#38bdf8]'
                    : 'border-[#4b5563] bg-[#121417] group-hover:border-[#9ca3af]'
                }`}
              />

              <div
                className={`p-5 rounded-sm border transition-all ${
                  step.isNext
                    ? 'border-[#2a303d] bg-[#12161b]'
                    : 'border-[#1e2126] bg-[#121417]'
                }`}
              >
                {/* Year Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${
                      step.isNext
                        ? 'bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30'
                        : 'bg-[#181a1f] text-[#9ca3af] border border-[#22252c]'
                    }`}
                  >
                    {step.year}
                  </span>
                  {step.isNext && (
                    <span className="text-[11px] text-[#38bdf8] font-sans">
                      Ongoing goal
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-[#f3f4f6] font-sans mb-1.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#9ca3af] leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
