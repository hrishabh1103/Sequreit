import React from 'react';
import { Calendar } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const milestones = [
    {
      horizon: 'NOW',
      badge: 'CURRENTLY AVAILABLE',
      badgeColor: '#10B981',
      title: 'Visibility & Wire-Speed Remediation',
      items: [
        { name: 'AST Cryptographic Discovery Core', status: 'Working Core' },
        { name: 'Normalized CBOM Inventory Engine', status: 'Working Core' },
        { name: 'Relational Dependency Graph Analysis', status: 'Working Core' },
        { name: 'Contextual HNDL & Risk Evaluation', status: 'Working Core' },
        { name: 'Blast-Radius Migration Prioritizer', status: 'Working Core' },
        { name: 'PQ-VPN Hybrid Tunnel (ML-KEM-768)', status: 'Live Demo Available' }
      ]
    },
    {
      horizon: 'NEXT',
      badge: 'ACTIVE DEVELOPMENT',
      badgeColor: '#F59E0B',
      title: 'Deep Connectors & Advanced Proxies',
      items: [
        { name: 'Kubernetes Workload & Secret Connector', status: 'In Optimization' },
        { name: 'Linux OS & Shared Library Connector', status: 'In Development' },
        { name: 'Hybrid PQ-TLS Termination Module', status: 'In Development' },
        { name: 'Dual-Signature PQ-PKI Integration', status: 'In Development' },
        { name: 'Automated Developer Code Refactoring Recipes', status: 'In Development' },
        { name: 'Automated Post-Migration Validation Suite', status: 'In Optimization' }
      ]
    },
    {
      horizon: 'VISION',
      badge: 'STRATEGIC ROADMAP',
      badgeColor: '#8B5CF6',
      title: 'The Enterprise Crypto-Agility Control Plane',
      items: [
        { name: 'Continuous Policy-As-Code Governance Plane', status: 'Roadmap' },
        { name: 'Zero-Downtime Autonomous Key & Cipher Rotation', status: 'Roadmap' },
        { name: 'Enterprise Cloud KMS & HSM Post-Quantum Modules', status: 'Roadmap' },
        { name: 'QKD Hardware Interface Standardization (ETSI)', status: 'Roadmap' },
        { name: 'Cross-Sovereignty Interoperability Standards', status: 'Roadmap' },
        { name: 'Permanent Cryptographic Nervous System', status: 'Roadmap' }
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>TRANSPARENT PRODUCT EXECUTION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            THE CRYPTOGRAPHIC CONTROL PLANE <br />
            <span className="text-[#00E5FF]">FOR THE POST-QUANTUM WORLD.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            We clearly distinguish what is demonstrably working today from what is actively being optimized and built for tomorrow.
          </p>
        </div>

        {/* 3-Column Roadmap Horizon Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#080C12] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 blur-[80px] pointer-events-none opacity-15"
                style={{ backgroundColor: m.badgeColor }}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-white font-mono-code">{m.horizon}</span>
                  <span
                    className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full font-semibold border"
                    style={{
                      backgroundColor: `${m.badgeColor}15`,
                      color: m.badgeColor,
                      borderColor: `${m.badgeColor}35`
                    }}
                  >
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-mono-code mb-4">{m.title}</h3>

                <div className="space-y-2.5">
                  {m.items.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#05070A] border border-white/5 flex items-center justify-between font-mono-code text-xs">
                      <span className="text-slate-200">{item.name}</span>
                      <span
                        className="text-[10px] shrink-0 ml-2 font-semibold"
                        style={{ color: m.badgeColor }}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 text-[11px] font-mono-code text-slate-500 flex items-center justify-between">
                <span>Execution Phase: {m.horizon}</span>
                <span className="text-slate-400">{idx === 0 ? 'Live in Production / Testbeds' : 'Active Engineering'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
