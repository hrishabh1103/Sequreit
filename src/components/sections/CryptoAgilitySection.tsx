import React from 'react';
import { RefreshCw } from 'lucide-react';
import { CryptoAgilityLoop } from '../visualizers/CryptoAgilityLoop';

export const CryptoAgilitySection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>THE LONG-TERM DESTINATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CRYPTO-AGILITY IS NOT A PROJECT. <br />
            <span className="text-[#00E5FF]">IT IS A PERMANENT CAPABILITY.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Algorithms evolve. Standards evolve. Threats evolve. Infrastructure evolves. Post-quantum migration is the catalyst, but crypto-agility is the destination—turning cryptographic changes from emergency fire-drills into managed, continuous operations.
          </p>
        </div>

        {/* 3 Core Agility Attributes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">01 // ALGORITHM DECOUPLING</div>
            <h3 className="text-base font-bold text-white mb-2">Eliminate Hardcoded Ciphers</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Abstract cryptographic primitives into policy-driven providers, allowing security teams to upgrade or replace ciphers without modifying application code.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">02 // CONTINUOUS DRIFT DETECTION</div>
            <h3 className="text-base font-bold text-white mb-2">Automated Policy Enforcement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Detect rogue ciphers, expired intermediate certificates, and weak parameters across CI/CD pipelines and production clusters in real time.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">03 // RAPID MITIGATION READINESS</div>
            <h3 className="text-base font-bold text-white mb-2">Future-Proof Architecture</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If an emerging cryptanalytic breakthrough compromises a standard algorithm, transition to alternative lattice, code-based, or hash-based schemes seamlessly.
            </p>
          </div>
        </div>

        {/* Interactive Agility Loop Simulator */}
        <CryptoAgilityLoop />
      </div>
    </section>
  );
};
