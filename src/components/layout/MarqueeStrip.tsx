import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const sectors = [
    'BANKING & BFSI',
    'DEFENCE & AEROSPACE',
    'ENERGY & UTILITIES',
    'OIL & GAS',
    'TELECOMMUNICATIONS',
    'GOVERNMENT & PUBLIC SECTOR',
    'CRITICAL INFRASTRUCTURE',
    'HEALTHCARE & LIFE SCIENCES',
    'HIGH-TECH & ENTERPRISE SAAS'
  ];

  return (
    <div className="relative border-y border-white/[0.08] bg-[#080C12]/80 overflow-hidden py-4">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF]/5 to-transparent pointer-events-none" />

      {/* Opening statement bar */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-3">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-mono-code flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
          <span>Cryptography is no longer a library-level concern. It is an infrastructure-level dependency.</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
        </p>
      </div>

      {/* Marquee ticker */}
      <div className="relative flex overflow-x-hidden border-t border-white/[0.04] pt-3">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-xs font-semibold tracking-[0.2em] text-slate-300">
          <span className="text-[#00E5FF] font-mono-code px-3 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30">
            BUILT FOR CRITICAL DIGITAL INFRASTRUCTURE:
          </span>
          {sectors.map((sector, index) => (
            <div key={`s1-${index}`} className="inline-flex items-center gap-3">
              <span className="text-slate-200 hover:text-white transition-colors">{sector}</span>
              <span className="text-slate-600">✦</span>
            </div>
          ))}
        </div>

        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-xs font-semibold tracking-[0.2em] text-slate-300" aria-hidden="true">
          <span className="text-[#00E5FF] font-mono-code px-3 py-0.5 rounded bg-[#00E5FF]/10 border border-[#00E5FF]/30">
            BUILT FOR CRITICAL DIGITAL INFRASTRUCTURE:
          </span>
          {sectors.map((sector, index) => (
            <div key={`s2-${index}`} className="inline-flex items-center gap-3">
              <span className="text-slate-200 hover:text-white transition-colors">{sector}</span>
              <span className="text-slate-600">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
