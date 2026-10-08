import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact links
  const placeholderEmail = 'mayank.tungariya@example.com';
  const githubProfileUrl = 'https://github.com/mayanktungariya';
  const placeholderLinkedin = 'https://linkedin.com/in/your-profile';

  const copyEmail = () => {
    navigator.clipboard.writeText(placeholderEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 border-b border-[#1c1e22] bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#38bdf8]">
          <span>06</span>
          <span className="text-[#64748b]">/</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#f3f4f6] font-sans mb-3">
          Let's connect
        </h2>
        <p className="text-sm sm:text-base text-[#9ca3af] max-w-xl leading-relaxed mb-10 font-sans">
          Always open to connecting with other students, developers, and people interested in AI.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {/* Email Card */}
          <div className="p-5 rounded-sm border border-[#202328] bg-[#121417] flex flex-col justify-between hover:border-[#2e333d] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3 text-[#6b7280]">
                <div className="flex items-center gap-2 text-[#cbd5e1]">
                  <Mail size={15} className="text-[#38bdf8]" />
                  <span className="font-medium">Email</span>
                </div>
                <span className="text-[10px]">Direct inbox</span>
              </div>
              <p className="text-[#f3f4f6] font-mono break-all mb-4 select-all text-xs">
                {placeholderEmail}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-[#1a1c20]">
              <a
                href={`mailto:${placeholderEmail}`}
                className="px-3 py-1.5 rounded-sm bg-[#1a1d22] text-[#cbd5e1] hover:text-[#f3f4f6] hover:bg-[#23272e] transition-colors flex items-center gap-1.5"
              >
                <span>Compose</span>
                <ExternalLink size={11} />
              </a>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 rounded-sm border border-[#23262c] text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#1a1d22] transition-colors flex items-center gap-1.5"
              >
                {copiedEmail ? (
                  <>
                    <Check size={11} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={11} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-sm border border-[#202328] bg-[#121417] flex flex-col justify-between hover:border-[#2e333d] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3 text-[#6b7280]">
                <div className="flex items-center gap-2 text-[#cbd5e1]">
                  <GithubIcon size={15} className="text-[#38bdf8]" />
                  <span className="font-medium">GitHub</span>
                </div>
                <span className="text-[10px]">Code & repos</span>
              </div>
              <p className="text-[#f3f4f6] font-mono break-all mb-4 text-xs">
                github.com/mayanktungariya
              </p>
            </div>

            <div className="pt-3 border-t border-[#1a1c20]">
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#1a1d22] text-[#cbd5e1] hover:text-[#f3f4f6] hover:bg-[#23272e] transition-colors"
              >
                <span>View Profile</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-sm border border-[#202328] bg-[#121417] flex flex-col justify-between hover:border-[#2e333d] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3 text-[#6b7280]">
                <div className="flex items-center gap-2 text-[#cbd5e1]">
                  <LinkedinIcon size={15} className="text-[#38bdf8]" />
                  <span className="font-medium">LinkedIn</span>
                </div>
                <span className="text-[10px]">Network</span>
              </div>
              <p className="text-[#f3f4f6] font-mono break-all mb-4 text-xs">
                linkedin.com/in/your-profile
              </p>
            </div>

            <div className="pt-3 border-t border-[#1a1c20]">
              <a
                href={placeholderLinkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#1a1d22] text-[#cbd5e1] hover:text-[#f3f4f6] hover:bg-[#23272e] transition-colors"
              >
                <span>Connect</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 p-3 rounded-sm border border-[#1b1e23] bg-[#101215] text-xs font-mono text-[#64748b]">
          * Contact information links are configured as clean placeholders ready to be updated with personal handles.
        </div>
      </div>
    </section>
  );
};
