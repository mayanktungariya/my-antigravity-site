import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Prompt Engineering', href: '#prompt-engineering', id: 'prompt-engineering' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0c0d0e]/90 backdrop-blur-md border-b border-[#1c1e22]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 group text-sm font-mono tracking-tight text-[#f3f4f6] hover:text-[#38bdf8] transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-[#38bdf8] group-hover:scale-125 transition-transform" />
          <span className="font-semibold text-base tracking-normal font-sans">Mayank Tungariya</span>
          <span className="text-[#6b7280] text-xs hidden sm:inline-block font-mono">/ first-year</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`px-3 py-1.5 rounded-sm transition-colors relative ${
                  isActive
                    ? 'text-[#f3f4f6] font-medium'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#181a1d]'
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#38bdf8]" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 pl-4 border-l border-[#1c1e22] text-xs font-mono text-[#9ca3af]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>building & learning</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#181a1d] rounded-sm transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1c1e22] bg-[#0c0d0e] px-4 py-3 space-y-1 font-mono text-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-sm transition-colors ${
                  isActive
                    ? 'text-[#38bdf8] bg-[#141619] font-medium'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6] hover:bg-[#181a1d]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
