import React from 'react';
import { ExternalLink, GitBranch, GitCommit, GitFork } from 'lucide-react';
import { GithubIcon } from '@/components/icons';

export const GitHubBuilding: React.FC = () => {
  const githubProfileUrl = 'https://github.com/mayanktungariya';

  return (
    <section className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-sm border border-[#202328] bg-[#121417] flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38bdf8]">
              <GitBranch size={13} />
              <span>OPEN EXPERIMENTS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans">
              More experiments live on GitHub
            </h2>

            <p className="text-sm sm:text-base text-[#9ca3af] leading-relaxed font-sans">
              Most of what I'm building right now is part of the learning process. Some projects are rough, some are experiments, and some will probably get rebuilt later.
            </p>

            <div className="flex items-center gap-4 pt-2 text-xs font-mono text-[#64748b]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                Public repositories
              </span>
              <span>·</span>
              <span>Daily git commits</span>
              <span>·</span>
              <span>Learning openly</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 font-mono">
            <a
              href={githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-sm bg-[#f3f4f6] text-[#0c0d0e] font-medium text-xs hover:bg-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            >
              <GithubIcon size={16} />
              <span>Visit GitHub</span>
              <ExternalLink size={13} />
            </a>
            <span className="text-[11px] text-[#6b7280]">
              github.com/mayanktungariya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
