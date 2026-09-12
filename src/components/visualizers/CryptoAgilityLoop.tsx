import React, { useState } from 'react';
import { Zap } from 'lucide-react';

export const CryptoAgilityLoop: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const loopSteps = [
    { title: 'DISCOVER', desc: 'Continuous telemetry monitors codebases, container registries, and active endpoints.', status: 'Active' },
    { title: 'MONITOR', desc: 'Tracks global cryptanalysis advisories, NIST FIPS updates, and vendor security notices.', status: 'Active' },
    { title: 'DETECT CHANGE', desc: 'Identifies deprecated parameter (e.g. legacy curve deprecation or key size reduction).', status: 'Alert' },
    { title: 'ASSESS', desc: 'Recalculates organizational risk score and determines blast radius across dependent microservices.', status: 'Active' },
    { title: 'PRIORITIZE', desc: 'Slots affected workloads into phased maintenance windows without business interruption.', status: 'Active' },
    { title: 'REMEDIATE', desc: 'Dispatches crypto-agility abstraction shims and updates key encapsulation parameters.', status: 'Active' },
    { title: 'VALIDATE', desc: 'Runs automated integration and handshake tests to confirm system returns to resilient green.', status: 'Optimal' }
  ];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step >= loopSteps.length) {
        clearInterval(interval);
        setIsSimulating(false);
        setActiveStep(0);
      } else {
        setActiveStep(step);
      }
    }, 1200);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C12] shadow-2xl p-6 sm:p-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
            CONTINUOUS CRYPTO-AGILITY CYCLE
          </div>
          <div className="text-lg font-bold text-white font-mono-code mt-0.5">
            Closed-Loop Cryptographic Lifecycle Automation
          </div>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052CC] text-white font-semibold text-xs font-mono-code transition-all shadow-lg shadow-[#0066FF]/25 flex items-center gap-2"
        >
          <Zap className={`w-3.5 h-3.5 ${isSimulating ? 'text-[#00E5FF] animate-spin' : ''}`} />
          <span>{isSimulating ? 'Simulation in Progress...' : 'Simulate Algorithm Deprecation'}</span>
        </button>
      </div>

      {/* Circular / Horizontal Process Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 my-8">
        {loopSteps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={idx}
              className={`p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isActive
                  ? 'bg-[#0D1117] border-[#00E5FF] ring-2 ring-[#00E5FF]/40 shadow-xl shadow-[#0066FF]/20 scale-105'
                  : 'bg-[#05070A] border-white/5 opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono-code mb-1.5">
                  <span className={isActive ? 'text-[#00E5FF] font-bold' : 'text-slate-500'}>
                    0{idx + 1}
                  </span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
                  )}
                </div>
                <div className="text-xs font-bold text-white font-mono-code mb-1">
                  {step.title}
                </div>
                <div className="text-[10px] text-slate-400 leading-tight">
                  {step.desc}
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-white/5 text-[9px] font-mono-code text-right">
                <span className={isActive ? 'text-[#00E5FF]' : 'text-slate-600'}>
                  {idx === 6 ? '↻ Loop Ready' : '➔ Next Stage'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Status Output Box */}
      <div className="p-4 rounded-xl bg-[#05070A] border border-[#00E5FF]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-code text-xs">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-[#10B981] animate-pulse shrink-0" />
          <div className="text-slate-300">
            ACTIVE STATE: <span className="text-[#00E5FF] font-bold">{loopSteps[activeStep].title}</span> — {loopSteps[activeStep].desc}
          </div>
        </div>
        <div className="text-[11px] text-slate-500 shrink-0">
          Result: Zero downtime cryptographic lifecycle
        </div>
      </div>
    </div>
  );
};
