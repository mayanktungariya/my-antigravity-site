import React from 'react';
import { Layers, Terminal, Sparkles, Brain, Cpu, Compass } from 'lucide-react';

interface SkillGroup {
  level: string;
  badge: string;
  description: string;
  skills: { name: string; tag?: string }[];
}

export const Skills: React.FC = () => {
  const skillGroups: SkillGroup[] = [
    {
      level: 'Currently learning',
      badge: 'Active Study',
      description: 'Technologies I write and practice with regularly as part of coursework and self-study.',
      skills: [
        { name: 'Python', tag: 'Core focus' },
        { name: 'JavaScript', tag: 'ES6+' },
        { name: 'HTML5', tag: 'Semantic' },
        { name: 'CSS3', tag: 'Tailwind' },
        { name: 'Git & GitHub', tag: 'Version control' },
      ],
    },
    {
      level: 'Exploring',
      badge: 'Curiosity & Experiments',
      description: 'Areas of interest where I experiment with tools, concepts, and smaller prototypes.',
      skills: [
        { name: 'AI / Machine Learning', tag: 'Concepts' },
        { name: 'Prompt Engineering', tag: 'Design' },
        { name: 'React', tag: 'Components' },
        { name: 'APIs', tag: 'REST & Integration' },
        { name: 'Generative AI', tag: 'LLM Workflows' },
      ],
    },
    {
      level: 'Fundamentals',
      badge: 'Core Foundations',
      description: 'Core computer science problem solving skills taught in the first year curriculum.',
      skills: [
        { name: 'Programming Logic', tag: 'Algorithms' },
        { name: 'Problem Solving', tag: 'Step-by-step analysis' },
        { name: 'Data Structures', tag: 'Arrays, Lists, Maps' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#38bdf8]">
          <span>03</span>
          <span className="text-[#64748b]">/</span>
          <span>TECH & SKILLS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans mb-3">
          What I'm working with
        </h2>
        <p className="text-sm text-[#9ca3af] max-w-xl mb-10 font-sans">
          An honest snapshot of my technical progress as a first-year student. No inflated skill bars—just what I'm learning, experimenting with, and building upon.
        </p>

        {/* 3 Tier Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-6 rounded-sm border border-[#202328] bg-[#121417] hover:border-[#2e333d] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Level Title and Badge */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1c1f24]">
                  <h3 className="text-base font-semibold text-[#f3f4f6] font-sans">
                    {group.level}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#191c22] text-[#38bdf8] border border-[#252a34]">
                    {group.badge}
                  </span>
                </div>

                {/* Subtitle Description */}
                <p className="text-xs text-[#9ca3af] leading-relaxed mb-6 font-sans">
                  {group.description}
                </p>

                {/* Skills Pills */}
                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between px-3 py-2 rounded-sm bg-[#16181d] border border-[#1e2126] font-mono text-xs"
                    >
                      <span className="text-[#f3f4f6] font-medium">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] text-[#6b7280]">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-6 pt-3 border-t border-[#1a1c20] flex items-center justify-between text-[11px] font-mono text-[#64748b]">
                <span>Status: actively progressing</span>
                <span className="text-[#38bdf8]">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
