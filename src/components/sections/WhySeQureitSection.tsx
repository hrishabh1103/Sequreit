import React from 'react';
import { Network, ShieldCheck, RefreshCw, Cpu, Layers } from 'lucide-react';

export const WhySeQureitSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'VENDOR-NEUTRAL',
      headline: 'Works across heterogeneous estates',
      desc: 'No lock-in to proprietary hardware or exclusive cloud ecosystems. SeQureit maps and orchestrates cryptography across multi-cloud, on-premises datacenters, legacy mainframes, and air-gapped environments alike.',
      icon: Layers,
      color: '#00E5FF'
    },
    {
      num: '02',
      title: 'INFRASTRUCTURE-AWARE',
      headline: 'Deep relational dependency mapping',
      desc: 'Cryptography does not exist in isolation. SeQureit maps how ciphers connect to services, APIs, identity tokens, and databases—preventing migration changes from causing catastrophic service outages.',
      icon: Network,
      color: '#0066FF'
    },
    {
      num: '03',
      title: 'MIGRATION-FOCUSED',
      headline: 'Discovery translated into execution',
      desc: 'Discovery without prioritization produces alert fatigue. SeQureit evaluates data longevity, HNDL exposure, and dependency depth to deliver an actionable, phased migration work queue.',
      icon: ShieldCheck,
      color: '#8B5CF6'
    },
    {
      num: '04',
      title: 'CRYPTO-AGILITY',
      headline: 'A permanent operational capability',
      desc: 'We do not treat post-quantum readiness as a one-time project. We build the continuous control plane that allows your enterprise to adapt to cryptographic shifts, algorithm updates, and emerging standards indefinitely.',
      icon: RefreshCw,
      color: '#10B981'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            WE DON&apos;T ASK YOU <br />
            TO REPLACE YOUR WORLD. <br />
            <span className="text-[#00E5FF]">WE HELP YOU UNDERSTAND IT.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Others build point quantum-safe infrastructure. SeQureit helps enterprises understand, prioritize, and transform the cryptography already embedded across their existing digital estates.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-[#080C12] border border-[#0066FF]/20 text-xs sm:text-sm font-mono-code text-[#00E5FF]">
            &ldquo;PQC migration is our entry point. Crypto-agility is our destination.&rdquo;
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#080C12] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${pillar.color}15`, border: `1px solid ${pillar.color}40` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                    </div>
                    <span className="text-sm font-mono-code font-bold text-slate-500">
                      PILLAR {pillar.num}
                    </span>
                  </div>

                  <div className="text-xs font-mono-code text-[#00E5FF] uppercase tracking-wider mb-1">
                    {pillar.title}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{pillar.headline}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-slate-500">
                  <span>Architecture Foundation</span>
                  <span className="text-slate-400">Enterprise Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
