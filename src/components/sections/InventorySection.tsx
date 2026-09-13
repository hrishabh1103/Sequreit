import React from 'react';
import { Database } from 'lucide-react';
import { InteractiveCBOM } from '../visualizers/InteractiveCBOM';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const InventorySection: React.FC = () => {
  return (
    <section id="inventory" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={50} direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
              <Database className="w-3.5 h-3.5" />
              <span>STANDARDIZED CBOM INVENTORY</span>
            </div>
          </ScrollReveal>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            TURN SCATTERED CRYPTOGRAPHY <br />
            <TextDecrypt
              text="INTO ONE INTELLIGIBLE INVENTORY."
              as="span"
              className="text-[#00E5FF]"
              speed={32}
              cursorColor="#00E5FF"
            />
          </h2>

          <ScrollReveal delay={150} direction="up">
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              CyberKorp continuously aggregates cryptographic findings into a normalized Cryptography Bill of Materials (CBOM). Understand every algorithm, certificate validity window, key length, and implementation owner in one place.
            </p>
          </ScrollReveal>
        </div>

        {/* CBOM Explanatory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-xl bg-[#05070A] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">01 // NORMALIZATION</div>
            <h3 className="text-base font-bold text-white mb-2">Canonical Cryptographic Schema</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standardizes diverse outputs from source scanners, cloud APIs, and TLS analyzers into a unified schema compatible with evolving CBOM formats.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#05070A] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">02 // EVIDENCE CHAIN</div>
            <h3 className="text-base font-bold text-white mb-2">Verifiable Source Grounding</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every asset links directly to line-of-code call sites, certificate serial fingerprints, or cloud resource identifiers, eliminating false-positive guesswork.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#05070A] border border-white/5">
            <div className="text-xs font-mono-code text-[#00E5FF] mb-1.5">03 // LIVING RECONCILIATION</div>
            <h3 className="text-base font-bold text-white mb-2">Continuous Drift Tracking</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatically identifies new certificate issuances, cipher alterations in microservices, and unapproved key generation as infrastructure updates.
            </p>
          </div>
        </div>

        {/* Interactive CBOM Explorer Component */}
        <InteractiveCBOM />
      </div>
    </section>
  );
};
