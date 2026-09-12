import React from 'react';
import { Shield, Eye, Cpu, RefreshCw } from 'lucide-react';

export const MissionSection: React.FC = () => {
  const pillars = [
    {
      title: 'Visibility',
      stage: '01 // STAGE',
      desc: 'Reveal every cryptographic primitive, key, and certificate buried in microservices, cloud infrastructure, and private repositories.',
      icon: Eye,
      color: '#00E5FF'
    },
    {
      title: 'Intelligence',
      stage: '02 // STAGE',
      desc: 'Correlate upstream API callers with downstream data vaults, evaluate data retention windows, and quantify quantum vulnerability.',
      icon: Cpu,
      color: '#0066FF'
    },
    {
      title: 'Migration',
      stage: '03 // STAGE',
      desc: 'Deploy standardized post-quantum algorithms and hybrid encapsulation without disrupting operational uptime.',
      icon: Shield,
      color: '#8B5CF6'
    },
    {
      title: 'Resilience',
      stage: '04 // STAGE',
      desc: 'Institutionalize permanent crypto-agility to swap, upgrade, and adapt primitives as threats and standards evolve.',
      icon: RefreshCw,
      color: '#10B981'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#05070A] overflow-hidden border-t border-white/[0.08]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0066FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cinematic Manifesto Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-6">
            <span>THE MISSION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6">
            MAKE CRYPTOGRAPHY <br />
            <span className="text-gradient-cyan">VISIBLE.</span>
          </h2>

          <p className="text-lg sm:text-2xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            &ldquo;Our mission is to make cryptographic security visible, manageable and continuously adaptable.&rdquo;
          </p>

          {/* Clean Transformation Pathway Ribbon */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-2 rounded-2xl bg-[#080C12] border border-white/10 text-xs font-mono-code">
            <span className="px-3 py-1 rounded-lg bg-[#00E5FF]/15 text-[#00E5FF] font-semibold border border-[#00E5FF]/30">
              Visibility
            </span>
            <span className="text-slate-600">➔</span>
            <span className="px-3 py-1 rounded-lg bg-[#0066FF]/15 text-[#388BFD] font-semibold border border-[#0066FF]/30">
              Intelligence
            </span>
            <span className="text-slate-600">➔</span>
            <span className="px-3 py-1 rounded-lg bg-[#8B5CF6]/15 text-[#8B5CF6] font-semibold border border-[#8B5CF6]/30">
              Migration
            </span>
            <span className="text-slate-600">➔</span>
            <span className="px-3 py-1 rounded-lg bg-[#10B981]/15 text-[#10B981] font-semibold border border-[#10B981]/30">
              Permanent Resilience
            </span>
          </div>
        </div>

        {/* 4 Evolutionary Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080C12] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${pillar.color}15`, border: `1px solid ${pillar.color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                  </div>
                  <div className="text-xs font-mono-code text-slate-500 mb-1">{pillar.stage}</div>
                  <h3 className="text-xl font-bold text-white mb-2 font-mono-code">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono-code text-slate-500 flex items-center justify-between">
                  <span>Transformation Pillar</span>
                  <span style={{ color: pillar.color }}>Phase 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
