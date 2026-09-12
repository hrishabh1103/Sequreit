import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCinematicSectionProps {
  onRequestDemo: () => void;
}

export const FinalCinematicSection: React.FC<FinalCinematicSectionProps> = ({ onRequestDemo }) => {
  return (
    <section className="relative py-32 md:py-44 bg-[#05070A] overflow-hidden border-t border-white/[0.08]">
      {/* Background Central Atmospheric Nexus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-r from-[#0066FF]/20 via-[#00E5FF]/10 to-[#8B5CF6]/20 blur-[160px] rounded-full pointer-events-none" />

      {/* Subtle Central Geometric Shield Halo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-[#00E5FF]/15 rounded-full pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] border border-[#0066FF]/10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Ambient Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080C12] border border-white/15 text-xs font-mono-code text-slate-300 mb-8 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
          <span>THE QUANTUM ERA IS COMING. YOUR CRYPTOGRAPHY SHOULD BE READY.</span>
        </div>

        {/* Grand Headline */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
          UNDERSTAND TODAY. <br />
          <span className="text-gradient-cyan">SECURE TOMORROW.</span>
        </h2>

        <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
          Build the cryptographic resilience your infrastructure will need next.
        </p>

        {/* Central Brand Emblem */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-[#080C12] border border-[#00E5FF]/40 flex items-center justify-center shadow-2xl shadow-[#0066FF]/40 mb-3">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10"
            >
              <polygon
                points="18,3 32,10.5 32,25.5 18,33 4,25.5 4,10.5"
                stroke="#00E5FF"
                strokeWidth="2"
                fill="#080C12"
              />
              <circle cx="18" cy="18" r="4" fill="#0066FF" />
              <circle cx="18" cy="18" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white font-mono-code">
            SeQureit
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-[#00E5FF] font-mono-code mt-0.5">
            Cryptographic Intelligence for a Quantum-Safe World
          </span>
        </div>

        {/* Final CTA Button */}
        <div>
          <button
            onClick={onRequestDemo}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold text-sm font-mono-code shadow-2xl shadow-[#0066FF]/40 hover:shadow-[#0066FF]/60 transition-all inline-flex items-center gap-2 group cursor-pointer"
          >
            <span>Request a Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
