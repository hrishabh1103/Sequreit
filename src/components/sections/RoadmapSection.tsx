import React from 'react';
import { Calendar, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const RoadmapSection: React.FC = () => {
  const milestones = [
    {
      horizon: 'NOW',
      badge: 'AVAILABLE TODAY',
      badgeColor: '#10B981',
      title: 'Current Working Capabilities',
      subtitle: 'Demonstrable and functional across active enterprise testbeds.',
      icon: CheckCircle2,
      items: [
        { name: 'Cryptographic Discovery Core', detail: 'AST repo & source-code scanning' },
        { name: 'Crypto Inventory / CBOM', detail: 'Normalized verifiable inventory' },
        { name: 'Dependency Analysis', detail: 'Blast-radius topology mapping' },
        { name: 'Risk & HNDL Assessment', detail: 'Retention window & Shor vulnerability' },
        { name: 'Migration Prioritization', detail: 'Actionable phased work queue' },
        { name: 'PQ-VPN — Live Demonstration', detail: 'ML-KEM-768 hybrid encrypted tunnel' }
      ]
    },
    {
      horizon: 'NEXT',
      badge: 'IN DEVELOPMENT',
      badgeColor: '#F59E0B',
      title: 'Active Engineering',
      subtitle: 'Currently in active development, testing, and optimization.',
      icon: Clock,
      items: [
        { name: 'Kubernetes Connector', detail: 'Workload & container secret inspection' },
        { name: 'Linux/OpenSSL Connector', detail: 'Shared library runtime interception' },
        { name: 'PQ-TLS Termination', detail: 'Post-quantum reverse proxy' },
        { name: 'PQ-PKI Integration', detail: 'Dual-signature authority integration' },
        { name: 'Advanced Validation', detail: 'Automated cryptographic regression suites' }
      ]
    },
    {
      horizon: 'VISION',
      badge: 'ROADMAP',
      badgeColor: '#8B5CF6',
      title: 'Strategic Control Plane',
      subtitle: 'Long-term architectural roadmap toward enterprise agility.',
      icon: Sparkles,
      items: [
        { name: 'KMS/HSM Transformation', detail: 'Hardware root-of-trust migration' },
        { name: 'Migration Automation', detail: 'Automated cryptographic refactoring' },
        { name: 'QKD Integrations', detail: 'Quantum Key Distribution standards' },
        { name: 'Continuous Crypto-Agility', detail: 'Policy-driven change management' }
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative py-28 md:py-36 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={50} direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>TRANSPARENT PRODUCT EXECUTION</span>
            </div>
          </ScrollReveal>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            THE CRYPTOGRAPHIC CONTROL PLANE <br />
            <TextDecrypt
              text="FOR THE POST-QUANTUM WORLD."
              as="span"
              className="text-[#00E5FF]"
              speed={32}
              cursorColor="#00E5FF"
            />
          </h2>

          <ScrollReveal delay={150} direction="up">
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              We clearly distinguish what is demonstrably working today from what is in active engineering and scheduled on our long-term roadmap.
            </p>
          </ScrollReveal>
        </div>

        {/* 3-Column Honest Roadmap Horizon Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#080C12] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 blur-[80px] pointer-events-none opacity-15"
                  style={{ backgroundColor: m.badgeColor }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-white font-mono-code">
                      {m.horizon}
                    </span>
                    <span
                      className="text-[10px] font-mono-code px-3 py-1 rounded-full font-bold border tracking-wider"
                      style={{
                        backgroundColor: `${m.badgeColor}15`,
                        color: m.badgeColor,
                        borderColor: `${m.badgeColor}40`
                      }}
                    >
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-mono-code mb-1">{m.title}</h3>
                  <p className="text-xs text-slate-400 font-mono-code mb-6 leading-relaxed">
                    {m.subtitle}
                  </p>

                  <div className="space-y-3">
                    {m.items.map((item, i) => (
                      <div
                        key={i}
                        className="p-3.5 rounded-xl bg-[#05070A] border border-white/5 font-mono-code text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold">{item.name}</span>
                          <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: m.badgeColor }} />
                        </div>
                        <div className="text-[10px] text-slate-400">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono-code text-slate-500 flex items-center justify-between">
                  <span>Status:</span>
                  <span style={{ color: m.badgeColor }} className="font-semibold">
                    {m.badge}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
