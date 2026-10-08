import React from 'react';
import { BookOpen, Compass, Code2, Sparkles, TerminalSquare } from 'lucide-react';

export const About: React.FC = () => {
  const learningTopics = [
    { title: 'Python', status: 'Core language focus', note: 'Writing scripts, logic problems, small CLI tools' },
    { title: 'Programming Fundamentals', status: 'In progress', note: 'Control flow, OOP basics, modular problem solving' },
    { title: 'AI / Machine Learning', status: 'Foundational study', note: 'Understanding model concepts, data prep, libraries' },
    { title: 'Prompt Engineering', status: 'Active exploration', note: 'System prompts, reasoning structures, few-shot testing' },
    { title: 'Git & GitHub', status: 'Daily practice', note: 'Version control, repository management, commit habits' },
    { title: 'Web Development', status: 'Starting out', note: 'HTML, CSS, React components, building clean interfaces' },
  ];

  return (
    <section id="about" className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3 text-xs font-mono text-[#38bdf8]">
          <span>01</span>
          <span className="text-[#64748b]">/</span>
          <span>PROFILE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans mb-8">
          A little about me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#9ca3af] leading-relaxed font-sans">
            <p>
              Currently in my first year of B.Tech CSE with a specialization in AI/ML. I'm starting with the fundamentals, learning Python, experimenting with AI tools, and trying to turn what I learn into small projects.
            </p>
            <p>
              I'm particularly interested in how people interact with AI and how better prompts can make AI systems more useful. Rather than rushing into frameworks without understanding the roots, I try to spend time understanding how code runs under the hood.
            </p>
            <div className="pt-4 p-4 rounded-sm border border-[#1e2025] bg-[#111316] font-mono text-xs text-[#cbd5e1] space-y-2">
              <div className="flex items-center gap-2 text-[#38bdf8]">
                <TerminalSquare size={14} />
                <span>current_status.json</span>
              </div>
              <div className="text-[#94a3b8] pl-2 border-l border-[#262930] space-y-1">
                <p><span className="text-[#f3f4f6]">"institution":</span> "B.Tech Computer Science (AI/ML)"</p>
                <p><span className="text-[#f3f4f6]">"semester":</span> "Year 1 · Actively learning"</p>
                <p><span className="text-[#f3f4f6]">"philosophy":</span> "Learn fundamentals first → write small code daily"</p>
              </div>
            </div>
          </div>

          {/* Currently Learning Panel */}
          <div className="lg:col-span-5">
            <div className="p-5 rounded-sm border border-[#23262a] bg-[#121417]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1c1e22]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#f3f4f6]">
                  <Compass size={14} className="text-[#38bdf8]" />
                  <span>Currently learning</span>
                </div>
                <span className="text-[11px] font-mono text-[#6b7280]">Year 1 Stack</span>
              </div>

              <div className="space-y-3 font-mono">
                {learningTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-2.5 rounded-sm bg-[#16191d] border border-[#1e2126] hover:border-[#2e333d] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-[#f3f4f6]">{topic.title}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-sm bg-[#1e2229] text-[#38bdf8]">
                        {topic.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#9ca3af] font-sans">
                      {topic.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#1c1e22] text-[11px] font-mono text-[#64748b]">
                * Focus is on foundational understanding and hands-on practice.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
