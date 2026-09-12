import React from 'react';
import { Clock, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const WhyNowSection: React.FC = () => {
  const transitionTimeline = [
    { phase: 'TODAY', title: 'Adversary Collection', desc: 'Encrypted network traffic and data stores are intercepted and harvested for retroactive analysis (HNDL).' },
    { phase: 'DISCOVERY', title: 'Cryptographic Mapping', desc: 'Identify all classical ciphers (RSA, ECDSA, DH) embedded across applications, APIs, and infrastructure.' },
    { phase: 'MIGRATION PLANNING', title: 'CBOM & Blast Radius', desc: 'Prioritize long-retention data and internet-facing surfaces using dependency graph analysis.' },
    { phase: 'HYBRID / PQC TRANSITION', title: 'Standardized Algorithms', desc: 'Deploy NIST-standardized algorithms (ML-KEM, ML-DSA, SLH-DSA) alongside classical algorithms.' },
    { phase: 'VALIDATION', title: 'Proof & Interoperability', desc: 'Verify handshake integrity, latency budgets, and certificate validation across all downstream clients.' },
    { phase: 'CRYPTO-AGILITY', title: 'Permanent Resilience', desc: 'Institutionalize dynamic algorithm switching to withstand future cryptanalytic breakthroughs.' }
  ];

  const algorithmComparison = [
    {
      category: 'Key Encapsulation (KEM)',
      classical: 'RSA-2048 / ECDH-P256',
      classicalStatus: 'Vulnerable to Shor Algorithm',
      pqc: 'ML-KEM-768 (FIPS 203)',
      pqcStatus: 'NIST Standardized (Lattice-Based)',
      notes: 'Formerly known in research as Kyber; now standardized as ML-KEM.'
    },
    {
      category: 'Digital Signatures',
      classical: 'RSA-3072 / ECDSA-P384',
      classicalStatus: 'Vulnerable to Shor Algorithm',
      pqc: 'ML-DSA-65 (FIPS 204) / SLH-DSA (FIPS 205)',
      pqcStatus: 'NIST Standardized (Lattice & Hash-Based)',
      notes: 'Stateful hash signatures (LMS/XMSS) for firmware; ML-DSA for general certificates.'
    },
    {
      category: 'Symmetric Encryption',
      classical: 'AES-128-CBC',
      classicalStatus: 'Security Margin Reduced by Grover',
      pqc: 'AES-256-GCM',
      pqcStatus: 'Quantum-Resistant Standard',
      notes: 'Doubling key size to 256 bits provides sufficient post-quantum security margin.'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>THE STRATEGIC REALITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            THE CRYPTOGRAPHIC TRANSITION <br />
            <span className="text-[#00E5FF]">HAS ALREADY BEGUN.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Post-quantum cryptography is moving from academic research into enterprise implementation. Organizations must identify vulnerable cryptography, understand dependencies, prioritize migration, and safeguard long-lived sensitive data.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-[#080C12] border border-[#00E5FF]/20 text-xs sm:text-sm font-mono-code text-[#00E5FF]">
            &ldquo;Quantum readiness is not a single migration project. It is an infrastructure transformation problem.&rdquo;
          </div>
        </div>

        {/* HNDL & Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* HNDL Explanation Card */}
          <div className="lg:col-span-1 p-6 rounded-2xl bg-[#080C12] border border-white/10 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#F43F5E]/10 blur-[80px] pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#F43F5E]/10 border border-[#F43F5E]/30 text-[11px] font-mono-code text-[#F43F5E] mb-4">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>HNDL MECHANISM</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Harvest Now, Decrypt Later
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Adversaries are currently capturing encrypted network flows, financial transactions, and sovereign communications.
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">
                When cryptanalytically relevant quantum computers emerge, this stored data can be decrypted retrospectively. If your data retains business or regulatory value for 7 to 30 years, the exposure window is today.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono-code text-slate-400">
              <span className="text-white font-semibold">High Retention Targets:</span> Defence telemetry, banking ledgers, patient genomics, citizen identities.
            </div>
          </div>

          {/* Timeline Process Flow */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-[#080C12] border border-white/10 shadow-xl flex flex-col justify-between">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-6 flex items-center justify-between">
              <span>Standardized Cryptographic Transition Sequence</span>
              <span className="text-[#00E5FF]">6 Phased Gates</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {transitionTimeline.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#0D1117] border border-white/5 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono-code text-[#00E5FF] font-semibold mb-1">
                      {item.phase}
                    </div>
                    <div className="text-xs font-bold text-white mb-1.5">{item.title}</div>
                    <div className="text-[11px] text-slate-400 leading-normal">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono-code text-slate-400 flex items-center justify-between">
              <span>Transition Goal: Continuous enterprise crypto-agility</span>
              <span className="text-[#10B981] flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> NIST FIPS 203/204/205 Alignment
              </span>
            </div>
          </div>
        </div>

        {/* Algorithm Standards Reference Table */}
        <div className="rounded-2xl border border-white/10 bg-[#080C12] p-6 shadow-xl">
          <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
            <span>Cryptographic Primitives: Classical Vulnerability vs NIST PQC Standards</span>
            <span className="text-[11px] text-slate-500">Official Standards Reference</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono-code">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="pb-3 font-semibold">Primitive Category</th>
                  <th className="pb-3 font-semibold">Classical Primitive</th>
                  <th className="pb-3 font-semibold">Quantum Vulnerability</th>
                  <th className="pb-3 font-semibold">Post-Quantum Replacement</th>
                  <th className="pb-3 font-semibold">Standard Reference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {algorithmComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02]">
                    <td className="py-3.5 font-semibold text-white">{row.category}</td>
                    <td className="py-3.5 text-slate-300">{row.classical}</td>
                    <td className="py-3.5 text-[#F43F5E]">{row.classicalStatus}</td>
                    <td className="py-3.5 text-[#00E5FF] font-semibold">{row.pqc}</td>
                    <td className="py-3.5 text-slate-400">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
