import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6b7280]">
        <div>
          <span>© 2026 Mayank Tungariya</span>
        </div>
        <div>
          <span>Built while learning. Still improving.</span>
        </div>
      </div>
    </footer>
  );
};
