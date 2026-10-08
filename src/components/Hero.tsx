import React, { useRef } from 'react';
import { ArrowDownRight, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { BinaryOrbits, BinaryOrbitsRef } from '@/components/ui/binary-orbits';

export const Hero: React.FC = () => {
  const orbitsRef = useRef<BinaryOrbitsRef>(null);

  const handleHeroClick = () => {
    orbitsRef.current?.ripple();
  };

  return (
    <section
      id="hero"
      onClick={handleHeroClick}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-24 pb-16 overflow-hidden border-b border-[#1c1e22]"
    >
      {/* Binary Orbits Background Visual */}
      <div className="absolute inset-0 z-0 pointer-events-auto opacity-75 lg:opacity-90">
        <BinaryOrbits
          ref={orbitsRef}
          backgroundColor="#0c0d0e"
          colors={['#38bdf8', '#94a3b8']}
          stars={50000}
          starSize={1.4}
          arms={3}
          twist={3.2}
          armStrength={0.55}
          core={1.1}
          coreSize={0.08}
          tilt={60}
          roll={-12}
          scale={1.05}
          centerX={0.62}
          centerY={0.5}
          glow={0.35}
          intensity={0.9}
          speed={0.8}
          twinkle={0.3}
          interactive={true}
          hoverWake={true}
          clickRipple={true}
          wakeStrength={1.2}
          rippleStrength={1.2}
          className="w-full h-full"
        />
        {/* Subtle gradient vignette to guarantee high text contrast on the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0d0e] via-[#0c0d0e]/75 to-transparent pointer-events-none w-full md:w-3/5" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0c0d0e] to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Technical Pill Label */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-[#23262a] bg-[#121417]/90 text-xs font-mono text-[#9ca3af] mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
            <span>B.Tech CSE (AI/ML) · First Year</span>
          </div>

          {/* Name Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#f3f4f6] font-sans mb-3">
            Mayank Tungariya
          </h1>

          {/* Role Subheading */}
          <p className="text-xl sm:text-2xl text-[#cbd5e1] font-normal mb-5 tracking-tight font-sans">
            Aspiring Prompt Engineer <span className="text-[#64748b]">&</span> AI/ML Developer
          </p>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-[#9ca3af] leading-relaxed mb-8 max-w-xl font-sans">
            First-year CSE (AI/ML) student currently learning Python, exploring AI, and building small projects while figuring out what to build next.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#f3f4f6] text-[#0c0d0e] font-medium hover:bg-white hover:shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            >
              <span>View Projects</span>
              <ArrowDownRight size={14} />
            </a>

            <a
              href="https://github.com/mayanktungariya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm border border-[#23262a] bg-[#131518]/90 text-[#f3f4f6] hover:bg-[#1a1c21] hover:border-[#33373e] transition-all focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ExternalLink size={12} className="text-[#6b7280]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-[#9ca3af] hover:text-[#f3f4f6] transition-colors underline-offset-4 hover:underline"
            >
              <Mail size={13} />
              <span>Contact</span>
            </a>
          </div>

          {/* Orbital Hint Indicator */}
          <div className="mt-12 flex items-center gap-2 text-[11px] font-mono text-[#64748b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]/60 animate-ping" />
            <span>Interactive orbital simulation · Move cursor to perturb stars · Click to ripple</span>
          </div>
        </div>
      </div>
    </section>
  );
};
