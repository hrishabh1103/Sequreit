import React, { useState } from 'react';
import { PRIORITY_QUEUE_ITEMS } from '../../data/mockData';
import type { PriorityItem } from '../../types';
import { ListOrdered } from 'lucide-react';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const PrioritizationSection: React.FC = () => {
  const [selectedQueueItem, setSelectedQueueItem] = useState<PriorityItem>(PRIORITY_QUEUE_ITEMS[0]);

  return (
    <section className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={50} direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
              <ListOrdered className="w-3.5 h-3.5" />
              <span>ACTIONABLE MIGRATION ROADMAP</span>
            </div>
          </ScrollReveal>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            NOT EVERYTHING <br />
            <TextDecrypt
              text="NEEDS TO MOVE AT ONCE."
              as="span"
              className="text-[#00E5FF]"
              speed={32}
              cursorColor="#00E5FF"
            />
          </h2>

          <ScrollReveal delay={150} direction="up">
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              A blanket migration approach causes organizational paralysis. CyberKorp translates discovery findings into an actionable, prioritized execution queue—clarifying WHAT to migrate, WHEN to migrate, and WHY it matters.
            </p>
          </ScrollReveal>
        </div>

        {/* Priority Queue Cards & Active Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Queue Items */}
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Dynamic Migration Work Queue</span>
              <span className="text-[#00E5FF]">Sorted by Blast & HNDL Weight</span>
            </div>

            {PRIORITY_QUEUE_ITEMS.map((item) => {
              const isSelected = selectedQueueItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedQueueItem(item)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0D1117] border-[#00E5FF]/40 shadow-xl shadow-[#0066FF]/15 ring-1 ring-[#00E5FF]/20'
                      : 'bg-[#080C12] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-md bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00E5FF] font-mono-code text-xs font-bold flex items-center justify-center">
                        0{item.rank}
                      </span>
                      <span className="text-sm font-bold text-white font-mono-code">
                        {item.title}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded font-semibold ${
                        item.risk === 'CRITICAL'
                          ? 'bg-[#F43F5E]/15 text-[#F43F5E] border border-[#F43F5E]/30'
                          : 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                      }`}
                    >
                      {item.risk} PRIORITY
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 font-mono-code mb-2 truncate">
                    Target: <span className="text-slate-200">{item.targetAsset}</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-500 pt-2 border-t border-white/5">
                    <span>Exposure: {item.exposure}</span>
                    <span className="text-[#00E5FF]">
                      Dependencies: {item.dependencyCount} Links
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Priority Focus Inspector */}
          <div className="lg:col-span-5 rounded-2xl bg-[#080C12] border border-white/10 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400 mb-2">
                <span>PRIORITY DISPATCH INTELLIGENCE</span>
                <span className="text-[#00E5FF]">{selectedQueueItem.id}</span>
              </div>
              <h3 className="text-xl font-bold text-white font-mono-code mb-2">
                {selectedQueueItem.title}
              </h3>
              <div className="text-xs font-mono-code text-[#00E5FF] mb-4">
                Target: {selectedQueueItem.targetAsset}
              </div>

              {/* Attributes Grid */}
              <div className="space-y-3 text-xs font-mono-code mb-6">
                <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                  <span className="text-slate-400">DATA CLASSIFICATION:</span>
                  <span className="text-white font-semibold">{selectedQueueItem.dataSensitivity}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                  <span className="text-slate-400">HNDL EXPOSURE WINDOW:</span>
                  <span className="text-[#F43F5E] font-semibold">{selectedQueueItem.hndlRelevance}</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                  <span className="text-slate-400">CONNECTED DEPENDENCIES:</span>
                  <span className="text-[#00E5FF] font-semibold">{selectedQueueItem.dependencyCount} Systems</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                  <span className="text-slate-400">MIGRATION COMPLEXITY:</span>
                  <span className="text-[#F59E0B] font-semibold">{selectedQueueItem.migrationComplexity}</span>
                </div>
              </div>

              {/* Recommended Action Box */}
              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#00E5FF]/30 space-y-1.5 text-xs font-mono-code">
                <div className="text-[10px] text-[#00E5FF] font-bold uppercase">
                  RECOMMENDED REMEDIATION ACTION:
                </div>
                <div className="text-slate-200 leading-relaxed">
                  {selectedQueueItem.recommendedAction}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
              <span>Status: Ready for migration dispatch</span>
              <span className="text-[#10B981]">Queue Rank 0{selectedQueueItem.rank}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
