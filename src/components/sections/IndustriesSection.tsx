import React, { useState } from 'react';
import { INDUSTRIES_DATA } from '../../data/mockData';
import type { IndustryData } from '../../types';
import { Building2, ChevronRight, ArrowUpRight } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryData>(INDUSTRIES_DATA[0]);

  return (
    <section id="industries" className="relative bg-[#EAF8F5] text-[#07111F] overflow-hidden transition-colors duration-500 border-t border-[#0EA5A5]/20">
      {/* Continuity Entry Divider */}
      <div className="relative w-full bg-gradient-to-b from-[#080C12] to-[#EAF8F5] py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-30" />
        </div>
      </div>

      <div className="relative py-16 md:py-24 pale-mint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#0EA5A5]/30 text-xs font-mono-code text-[#0066FF] mb-5 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-[#0EA5A5]" />
              <span className="font-semibold">CRITICAL SECTOR PROFILES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#07111F] tracking-tight leading-[1.05] font-mono-code">
              CRYPTOGRAPHY IS <br />
              <span className="text-[#0066FF]">INFRASTRUCTURE.</span>
            </h2>

            <p className="mt-5 text-base sm:text-xl text-[#475569] font-normal leading-relaxed max-w-3xl">
              Digital backbone infrastructure cannot afford sudden outages, broken certificate trust chains, or retroactive data decryption. SeQureit aligns cryptographic transformation with enterprise operational realities.
            </p>
          </div>

          {/* Minimal and Elegant Sector Navigator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Sector Selector */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {INDUSTRIES_DATA.map((ind) => {
                const isSelected = selectedIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#0066FF] shadow-sm ring-1 ring-[#0066FF]/30'
                        : 'bg-white/70 border-[#D5EFEA] hover:border-[#0EA5A5]/50 hover:bg-white'
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm font-bold font-mono-code tracking-tight ${
                        isSelected ? 'text-[#07111F]' : 'text-[#475569] group-hover:text-[#07111F]'
                      }`}
                    >
                      {ind.name}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? 'text-[#0066FF] translate-x-1' : 'text-[#94A3B8] group-hover:text-[#64748B]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Deep-Dive Card */}
            <div className="lg:col-span-8 p-6 sm:p-10 rounded-3xl bg-white border border-[#D5EFEA] shadow-md shadow-teal-900/5 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E2E8F0] pb-5 mb-6 gap-3">
                  <div>
                    <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#64748B] font-semibold">
                      SECTOR INFRASTRUCTURE BLUEPRINT
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#07111F] font-mono-code mt-1">
                      {selectedIndustry.name}
                    </h3>
                  </div>
                  <span className="text-xs font-mono-code px-3.5 py-1 rounded-full font-semibold border bg-[#0066FF]/10 text-[#0066FF] border-[#0066FF]/25 w-fit">
                    Zero Downtime Mandate
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#1E293B] font-medium leading-relaxed mb-6">
                  {selectedIndustry.tagline}
                </p>

                {/* Acute Challenge Box */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] mb-6 space-y-1.5">
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#E11D48] font-bold">
                    ACUTE CRYPTOGRAPHIC RISK & RETENTION PROFILE:
                  </div>
                  <p className="text-xs sm:text-sm text-[#9F1239] leading-relaxed">
                    {selectedIndustry.criticalChallenge}
                  </p>
                </div>

                {/* Cryptographic Footprint Grid */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-[#64748B] font-semibold">
                    Representative Sector Cryptographic Footprint:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedIndustry.cryptoFootprint.map((item, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-[#F0FBF8] border border-[#D5EFEA] text-xs font-mono-code text-[#07111F] flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5A5]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Known Vulnerabilities */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs font-mono-code uppercase tracking-wider text-[#64748B] font-semibold">
                    Structural Migration Challenges:
                  </div>
                  <div className="space-y-1.5">
                    {selectedIndustry.vulnerabilities.map((vuln, i) => (
                      <div
                        key={i}
                        className="text-xs font-mono-code text-[#64748B] flex items-start gap-2"
                      >
                        <span className="text-[#E11D48] mt-0.5">•</span>
                        <span>{vuln}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SeQureit Impact Strip */}
              <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#64748B] font-semibold">
                    SeQureit Platform Impact:
                  </div>
                  <p className="text-xs sm:text-sm font-mono-code text-[#07111F] font-semibold mt-1 max-w-xl">
                    {selectedIndustry.sequreitImpact}
                  </p>
                </div>
                <div className="text-xs font-mono-code text-[#0066FF] flex items-center gap-1 font-semibold shrink-0">
                  <span>Architecture Tailored</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuity Exit Divider */}
      <div className="relative w-full bg-gradient-to-b from-[#EAF8F5] to-[#080C12] py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-30" />
        </div>
      </div>
    </section>
  );
};
