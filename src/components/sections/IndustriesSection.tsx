import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../../data/mockData';
import type { IndustryData } from '../../types';
import { Building2, ChevronRight, CheckCircle2 } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData>(INDUSTRIES_DATA[0]);

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>CRITICAL SECTOR INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BUILT FOR THE SYSTEMS <br />
            <span className="text-[#00E5FF]">THAT CANNOT FAIL.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            SeQureit protects digital backbone infrastructure where downtime is intolerable, data retention spans decades, and cryptographic dependencies touch national security and global commerce.
          </p>
        </div>

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Industry Selection Buttons */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedIndustry.id === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0D1117] border-[#00E5FF]/40 shadow-lg shadow-[#0066FF]/15 ring-1 ring-[#00E5FF]/20'
                      : 'bg-[#05070A] border-white/5 hover:border-white/15'
                  }`}
                >
                  <span className={`text-xs font-bold font-mono-code tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {ind.name}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#00E5FF] translate-x-0.5' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Selected Industry Deep-Dive Card */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-[#05070A] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div
              className="absolute top-0 right-0 w-80 h-80 blur-[100px] pointer-events-none opacity-20"
              style={{ backgroundColor: selectedIndustry.accent }}
            />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400">
                    SECTOR PROFILE
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono-code mt-0.5">
                    {selectedIndustry.name}
                  </h3>
                </div>
                <span
                  className="text-xs font-mono-code px-3 py-1 rounded-full font-semibold border"
                  style={{
                    backgroundColor: `${selectedIndustry.accent}15`,
                    color: selectedIndustry.accent,
                    borderColor: `${selectedIndustry.accent}35`
                  }}
                >
                  Mission-Critical
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mb-6">
                {selectedIndustry.tagline}
              </p>

              {/* Acute Cryptographic Challenge */}
              <div className="p-4 rounded-xl bg-[#080C12] border border-white/5 mb-6 space-y-2">
                <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#F43F5E] font-bold">
                  ACUTE INFRASTRUCTURE CHALLENGE:
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedIndustry.criticalChallenge}
                </p>
              </div>

              {/* Cryptographic Footprint Grid */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                  Sector Cryptographic Footprint:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedIndustry.cryptoFootprint.map((fp, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-[#080C12] border border-white/5 text-xs font-mono-code text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
                      <span>{fp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SeQureit Impact Statement */}
              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#00E5FF]/30 space-y-1.5">
                <div className="text-[10px] font-mono-code text-[#00E5FF] font-bold uppercase">
                  SEQUREIT DEPLOYMENT IMPACT:
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedIndustry.sequreitImpact}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
              <span>Domain: {selectedIndustry.name} Infrastructure</span>
              <span className="text-[#10B981] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> High-Availability Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
