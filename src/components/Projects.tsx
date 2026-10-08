import React, { useState } from 'react';
import { ExternalLink, Terminal, ArrowUpRight, Filter } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  filterCategories: string[];
  status: string;
  githubUrl: string;
  demoUrl?: string;
  highlights?: string[];
}

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Python' | 'AI' | 'Web' | 'Experiments'>('All');

  const filterOptions: Array<'All' | 'Python' | 'AI' | 'Web' | 'Experiments'> = [
    'All',
    'Python',
    'AI',
    'Web',
    'Experiments',
  ];

  const projects: Project[] = [
    {
      id: 'ai-tool-explorer',
      number: '01',
      title: 'AI Tool Explorer',
      description:
        'A web concept for discovering AI platforms by category, use case, and features, with a comparison view for different AI tools.',
      tech: ['React', 'JavaScript', 'AI APIs / Data'],
      category: 'Web / AI',
      filterCategories: ['Web', 'AI'],
      status: 'Concept / Learning Project',
      githubUrl: 'https://github.com/mayanktungariya',
      demoUrl: '#',
      highlights: ['Interactive comparison grid', 'Category filtering', 'Model feature breakdown'],
    },
    {
      id: 'python-expense-tracker',
      number: '02',
      title: 'Python Student Expense Tracker',
      description:
        'A beginner Python project for recording daily expenses, categorizing spending, and generating simple summaries.',
      tech: ['Python'],
      category: 'Python / Productivity',
      filterCategories: ['Python'],
      status: 'Learning Project',
      githubUrl: 'https://github.com/mayanktungariya',
      demoUrl: undefined,
      highlights: ['CLI interface', 'CSV persistence', 'Monthly breakdown calculation'],
    },
    {
      id: 'prompt-lab',
      number: '03',
      title: 'Prompt Lab',
      description:
        'A small experimental project for testing, comparing, and organizing different prompts for AI models.',
      tech: ['Python', 'Prompt Engineering', 'AI'],
      category: 'AI / Prompt Engineering',
      filterCategories: ['AI', 'Python', 'Experiments'],
      status: 'Experiment',
      githubUrl: 'https://github.com/mayanktungariya',
      demoUrl: undefined,
      highlights: ['Prompt version comparison', 'Variable injection', 'Structured response templates'],
    },
    {
      id: 'personal-portfolio',
      number: '04',
      title: 'Personal Portfolio',
      description:
        "The portfolio you're currently viewing, designed and built as a way to practice frontend development and present my work.",
      tech: ['React', 'Tailwind CSS', 'Three.js'],
      category: 'Frontend',
      filterCategories: ['Web'],
      status: 'Personal Project',
      githubUrl: 'https://github.com/mayanktungariya/my-antigravity-site',
      demoUrl: '#',
      highlights: ['Minimal technical aesthetic', 'Interactive Binary Orbits visual', 'Responsive layout'],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#38bdf8]">
              <span>02</span>
              <span className="text-[#64748b]">/</span>
              <span>PROJECTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans">
              Things I've been building
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#131518] rounded-sm border border-[#1e2126] font-mono text-xs">
            <span className="px-2 text-[#64748b] hidden sm:inline-block">Filter:</span>
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-2.5 py-1 rounded-sm transition-all text-xs ${
                  activeFilter === filter
                    ? 'bg-[#23262c] text-[#f3f4f6] font-medium shadow-xs'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#1a1c21]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between p-6 rounded-sm border border-[#202328] bg-[#121417] hover:border-[#32363e] hover:bg-[#15171b] transition-all group"
            >
              <div>
                {/* Top Bar with Number & Status */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1a1c20]">
                  <span className="font-mono text-xs text-[#38bdf8] font-medium tracking-wider">
                    PROJECT {project.number}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-sm bg-[#1a1d22] text-[#9ca3af] border border-[#24272e]">
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#f3f4f6] mb-2 font-sans group-hover:text-[#38bdf8] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className="font-mono text-xs text-[#6b7280] font-normal">{project.category}</span>
                </h3>

                {/* Description */}
                <p className="text-sm text-[#9ca3af] leading-relaxed mb-5 font-sans">
                  {project.description}
                </p>

                {/* Technical Highlights / Concepts */}
                {project.highlights && (
                  <div className="mb-5 p-3 rounded-sm bg-[#0e1012] border border-[#1b1d22]">
                    <div className="text-[11px] font-mono text-[#64748b] mb-1.5 flex items-center gap-1.5">
                      <Terminal size={12} className="text-[#38bdf8]" />
                      <span>Key elements:</span>
                    </div>
                    <ul className="text-xs text-[#cbd5e1] font-mono space-y-1">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#38bdf8]">›</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Tech & Links Bar */}
              <div className="pt-4 border-t border-[#1a1c20] flex flex-wrap items-center justify-between gap-3">
                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-[#9ca3af]">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-sm bg-[#181b20] text-[#cbd5e1] border border-[#22252c]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 font-mono text-xs">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm border border-[#262a32] bg-[#14161a] text-[#f3f4f6] hover:bg-[#1f2229] hover:border-[#38bdf8]/40 transition-colors"
                  >
                    <GithubIcon size={12} />
                    <span>Code</span>
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-sm border border-[#262a32] bg-[#14161a] text-[#38bdf8] hover:bg-[#1f2229] hover:border-[#38bdf8] transition-colors"
                    >
                      <span>Demo</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
