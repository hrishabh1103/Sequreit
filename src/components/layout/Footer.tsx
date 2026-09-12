import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070A] border-t border-white/10 text-slate-400 font-mono-code text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#080C12] border border-[#00E5FF]/40 flex items-center justify-center">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <polygon
                    points="18,3 32,10.5 32,25.5 18,33 4,25.5 4,10.5"
                    stroke="#00E5FF"
                    strokeWidth="2"
                    fill="#080C12"
                  />
                  <circle cx="18" cy="18" r="3" fill="#0066FF" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                SeQureit
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Cryptographic Intelligence for a Quantum-Safe World. We help enterprises discover, understand, prioritize, and transform cryptographic infrastructure toward a continuously crypto-agile future.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#10B981] pt-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Core Discovery Engine &amp; PQ-VPN Working Testbed Online</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-white font-bold tracking-wider text-[11px] uppercase mb-3">
              Platform
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#platform" className="hover:text-[#00E5FF] transition-colors">Platform Lifecycle</a></li>
              <li><a href="#discovery" className="hover:text-[#00E5FF] transition-colors">Discovery Probes</a></li>
              <li><a href="#inventory" className="hover:text-[#00E5FF] transition-colors">Living CBOM</a></li>
              <li><a href="#dependency-graph" className="hover:text-[#00E5FF] transition-colors">Dependency Graph</a></li>
              <li><a href="#pq-vpn" className="hover:text-[#00E5FF] transition-colors">PQ-VPN Showcase</a></li>
            </ul>
          </div>

          {/* Col 3: Sectors */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-white font-bold tracking-wider text-[11px] uppercase mb-3">
              Critical Sectors
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#industries" className="hover:text-[#00E5FF] transition-colors">Banking &amp; BFSI</a></li>
              <li><a href="#industries" className="hover:text-[#00E5FF] transition-colors">Defence &amp; Aerospace</a></li>
              <li><a href="#industries" className="hover:text-[#00E5FF] transition-colors">Energy &amp; Utilities</a></li>
              <li><a href="#industries" className="hover:text-[#00E5FF] transition-colors">Telecommunications</a></li>
              <li><a href="#industries" className="hover:text-[#00E5FF] transition-colors">Government &amp; Sovereign</a></li>
            </ul>
          </div>

          {/* Col 4: Company & Architecture */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-white font-bold tracking-wider text-[11px] uppercase mb-3">
              Company
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#company" className="hover:text-[#00E5FF] transition-colors">Team &amp; Story</a></li>
              <li><a href="#technology" className="hover:text-[#00E5FF] transition-colors">Architecture</a></li>
              <li><a href="#roadmap" className="hover:text-[#00E5FF] transition-colors">Product Roadmap</a></li>
              <li><a href="#resources" className="hover:text-[#00E5FF] transition-colors">Research Briefs</a></li>
              <li><a href="#contact" className="hover:text-[#00E5FF] transition-colors">Briefing Request</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} SeQureit. Built in India. Designed for a Global Cryptographic Transition.
          </div>

          <div className="text-center md:text-right max-w-lg text-[10px]">
            Notice: SeQureit builds cryptographic intelligence, risk mapping, and crypto-agility tooling. Telemetry in demonstrations is illustrative.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
