import React, { useState } from 'react';
import { Layers, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PLATFORM_STAGES } from '../../data/mockData';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const PlatformLifecycle: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const activeStage = PLATFORM_STAGES[selectedStage];

  return (
    <section id="platform-lifecycle" className="relative bg-[#071522] text-[#EAF4FF] overflow-hidden transition-colors duration-500 border-t border-[#3B82F6]/20">
      {/* Visual Continuity Transition Strip (Mint -> Technical Navy) */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#E8F7F4] via-[#081A2B] to-[#071522] pt-6 pb-8 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-30" />
        </div>
      </div>

      <div className="relative py-16 md:py-24 deep-blue-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="max-w-4xl mb-16 sm:mb-20">
            <ScrollReveal delay={50} direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/30 text-xs font-mono-code text-[#22D3EE] mb-6 shadow-xs">
                <Layers className="w-3.5 h-3.5" />
                <span>THE 8-STAGE TRANSFORMATION CYCLE</span>
              </div>
            </ScrollReveal>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#EAF4FF] tracking-tight leading-[1.05]">
              FROM DISCOVERY <br />
              <TextDecrypt
                text="TO CRYPTO-AGILITY."
                as="span"
                className="text-[#22D3EE]"
                speed={32}
                cursorColor="#22D3EE"
              />
            </h2>

            <ScrollReveal delay={150} direction="up">
              <p className="mt-6 text-base sm:text-xl text-[#94A9BC] font-normal leading-relaxed max-w-3xl font-sans">
                CyberKorp delivers continuous cryptographic lifecycle control. From unearthing hidden ciphers across enterprise repositories to validating post-quantum migration and establishing permanent agility.
              </p>
            </ScrollReveal>
          </div>

          {/* Interactive 8-Stage Engineering Blueprint Navigator */}
          <ScrollReveal delay={250} direction="up" distance={30}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: 8 Stages List with Deep Blue Engineering Borders */}
            <div className="lg:col-span-5 space-y-2.5">
              {PLATFORM_STAGES.map((stage, idx) => {
                const isSelected = selectedStage === idx;
                return (
                  <button
                    key={stage.step}
                    onClick={() => setSelectedStage(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B2135] border-[#22D3EE] shadow-lg shadow-[#0066FF]/20 ring-1 ring-[#22D3EE]/40'
                        : 'bg-[#06111B]/80 border-white/10 hover:border-[#3B82F6]/40 hover:bg-[#0B2135]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono-code px-2 py-0.5 rounded font-bold ${
                          isSelected
                            ? 'bg-[#22D3EE] text-[#071522]'
                            : 'bg-white/5 text-[#94A9BC] group-hover:text-[#EAF4FF]'
                        }`}
                      >
                        {stage.step}
                      </span>
                      <span
                        className={`text-sm sm:text-base font-bold font-mono-code tracking-tight ${
                          isSelected ? 'text-white' : 'text-[#94A9BC] group-hover:text-white'
                        }`}
                      >
                        {stage.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono-code px-2 py-0.5 rounded-full font-semibold border ${
                          stage.currentStatus === 'Working Capability'
                            ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                            : stage.currentStatus === 'In Optimization'
                            ? 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
                            : 'bg-[#8B5CF6]/15 text-[#8B5CF6] border-[#8B5CF6]/30'
                        }`}
                      >
                        {stage.currentStatus === 'Working Capability'
                          ? 'Available'
                          : stage.currentStatus === 'In Optimization'
                          ? 'In Optimization'
                          : 'Roadmap'}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${
                          isSelected ? 'text-[#22D3EE] translate-x-1' : 'text-slate-600 group-hover:text-[#94A9BC]'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Stage Detail Showcase on Deep Blue Surface */}
            <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#0B2135] border border-[#22D3EE]/25 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6]/10 blur-[100px] pointer-events-none" />

              {/* Engineering Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-6 gap-3">
                <div className="flex items-center gap-2 font-mono-code text-xs">
                  <span className="text-[#94A9BC]">STAGE SPECIFICATION:</span>
                  <span className="text-[#22D3EE] font-bold text-sm">
                    {activeStage.step} // {activeStage.name}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-mono-code px-3 py-1 rounded-full font-semibold border inline-flex items-center gap-1.5 w-fit ${
                    activeStage.currentStatus === 'Working Capability'
                      ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                      : activeStage.currentStatus === 'In Optimization'
                      ? 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
                      : 'bg-[#8B5CF6]/15 text-[#8B5CF6] border-[#8B5CF6]/30'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{activeStage.currentStatus}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 font-mono-code">
                {activeStage.headline}
              </h3>

              <p className="text-sm sm:text-base text-[#94A9BC] leading-relaxed mb-8 font-sans">
                {activeStage.description}
              </p>

              {/* Core Capabilities */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono-code uppercase tracking-wider text-[#94A9BC] font-semibold">
                  Key Technical Engine Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStage.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-[#071522] border border-white/5 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                      <span className="text-xs font-mono-code text-slate-200 leading-snug">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverable Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#071522] border border-[#3B82F6]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-[#94A9BC]">
                    Primary Enterprise Artifact:
                  </div>
                  <div className="text-sm font-bold text-white font-mono-code mt-0.5">
                    {activeStage.deliverable}
                  </div>
                </div>
                <span className="text-xs font-mono-code text-[#22D3EE] bg-[#3B82F6]/20 px-3 py-1.5 rounded-lg border border-[#3B82F6]/40 font-bold">
                  Step {activeStage.step} of 08
                </span>
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Continuity Exit Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#22D3EE]/30 to-transparent" />
    </section>
  );
};
