import React, { useState } from 'react';
import { PLATFORM_STAGES } from '../../data/mockData';
import { ChevronRight, CheckCircle2, Layers } from 'lucide-react';

export const PlatformLifecycle: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const activeStage = PLATFORM_STAGES[selectedStage];

  return (
    <section id="platform" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-LIFECYCLE CONTROL PLANE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            FROM CRYPTOGRAPHIC BLIND SPOTS <br />
            <span className="text-[#00E5FF]">TO CONTINUOUS CRYPTO-AGILITY.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            SeQureit is not simply a scanner or a point PQC product. We provide the intelligence and control layer across the entire lifecycle of enterprise cryptographic transformation.
          </p>
        </div>

        {/* Interactive 8-Stage Lifecycle Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stage Selector Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {PLATFORM_STAGES.map((stage, idx) => {
              const isSelected = selectedStage === idx;
              return (
                <button
                  key={stage.step}
                  onClick={() => setSelectedStage(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#0D1117] border-[#00E5FF]/40 shadow-lg shadow-[#0066FF]/15 ring-1 ring-[#00E5FF]/20'
                      : 'bg-[#05070A]/50 border-white/5 hover:border-white/15 hover:bg-[#0D1117]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono-code px-2 py-0.5 rounded ${
                        isSelected
                          ? 'bg-[#00E5FF]/20 text-[#00E5FF] font-bold'
                          : 'bg-white/5 text-slate-400 font-medium'
                      }`}
                    >
                      STAGE {stage.step}
                    </span>
                    <span className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {stage.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded-full ${
                        stage.currentStatus === 'Working Capability'
                          ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                          : stage.currentStatus === 'In Optimization'
                          ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                          : 'bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30'
                      }`}
                    >
                      {stage.currentStatus === 'Working Capability'
                        ? 'Active'
                        : stage.currentStatus === 'In Optimization'
                        ? 'Optimizing'
                        : 'Roadmap'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00E5FF] translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Stage Detail Showcase */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#05070A] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF]/10 blur-[100px] pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2 font-mono-code text-xs">
                <span className="text-slate-500">LIFECYCLE STAGE:</span>
                <span className="text-[#00E5FF] font-bold text-sm">
                  {activeStage.step} // {activeStage.name}
                </span>
              </div>
              <span
                className={`text-[11px] font-mono-code px-2.5 py-1 rounded-full ${
                  activeStage.currentStatus === 'Working Capability'
                    ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                    : activeStage.currentStatus === 'In Optimization'
                    ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                    : 'bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/30'
                }`}
              >
                Status: {activeStage.currentStatus}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{activeStage.headline}</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {activeStage.description}
            </p>

            {/* Core Capabilities */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                Key Technical Engine Capabilities:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStage.capabilities.map((cap, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#0D1117] border border-white/5 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverable Callout */}
            <div className="p-4 rounded-xl bg-[#080C12] border border-[#00E5FF]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400">
                  Primary Enterprise Artifact:
                </div>
                <div className="text-sm font-bold text-white font-mono-code mt-0.5">
                  {activeStage.deliverable}
                </div>
              </div>
              <span className="text-xs font-mono-code text-[#00E5FF] bg-[#0066FF]/10 px-3 py-1 rounded border border-[#0066FF]/30">
                Step {activeStage.step} of 08
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
