import React from 'react';
import { Share2 } from 'lucide-react';
import { DependencyGraph } from '../visualizers/DependencyGraph';

export const DependencySection: React.FC = () => {
  return (
    <section id="dependency-graph" className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Share2 className="w-3.5 h-3.5" />
            <span>SIGNATURE ARCHITECTURAL CAPABILITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            CRYPTOGRAPHY IS CONNECTED. <br />
            <span className="text-[#00E5FF]">SEE THE BLAST RADIUS BEFORE YOU TOUCH IT.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Changing one cryptographic component can affect systems far beyond the original finding. CyberKorp correlates individual ciphers and certificates with the applications, databases, and APIs that rely on them.
          </p>
        </div>

        {/* Feature Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#F43F5E] mb-1.5">01 // BLAST RADIUS MODELING</div>
            <h3 className="text-base font-bold text-white mb-2">Simulate Before Deployment</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Identify which mobile clients, microservices, or external B2B partners will break if a certificate is rotated or a cipher suite is restricted.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">02 // MULTI-HOP TRUST CHAINS</div>
            <h3 className="text-base font-bold text-white mb-2">Trace Root to Leaf</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect leaf certificates through intermediate CAs, hardware security modules, and underlying encryption master keys seamlessly.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#8B5CF6] mb-1.5">03 // PHASED MIGRATION SEQUENCING</div>
            <h3 className="text-base font-bold text-white mb-2">Eliminate Downtime Risks</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Generate dependency-aware migration paths so downstream consumers upgrade to quantum-safe support before upstream endpoints enforce it.
            </p>
          </div>
        </div>

        {/* The Signature Interactive Dependency Graph */}
        <DependencyGraph />
      </div>
    </section>
  );
};
