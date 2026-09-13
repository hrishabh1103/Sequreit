import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface RemediationSectionProps {
  onExploreVpn: () => void;
  onRequestDemo: () => void;
}

export const RemediationSection: React.FC<RemediationSectionProps> = ({ onExploreVpn, onRequestDemo }) => {
  const remediationSuite = [
    {
      name: 'PQ-VPN',
      subtitle: 'Post-Quantum Hybrid Network Tunnel',
      status: 'AVAILABLE',
      statusLabel: 'Live Technical Demo',
      statusColor: '#10B981',
      desc: 'High-performance encrypted tunnel utilizing post-quantum key encapsulation (ML-KEM-768) combined with classical stateful key exchange for immediate wire-speed protection against HNDL.',
      highlight: true,
      action: onExploreVpn
    },
    {
      name: 'PQC Code Migration',
      subtitle: 'Assisted Developer Refactoring Tooling',
      status: 'IN_DEVELOPMENT',
      statusLabel: 'In Development',
      statusColor: '#F59E0B',
      desc: 'AST-driven code refactoring recipes that suggest drop-in post-quantum cryptographic primitives (ML-KEM, ML-DSA) for Java, Go, Python, and C++ enterprise codebases.'
    },
    {
      name: 'PQ-TLS',
      subtitle: 'Hybrid TLS Termination Proxies',
      status: 'IN_DEVELOPMENT',
      statusLabel: 'In Development',
      statusColor: '#F59E0B',
      desc: 'Reverse proxy and edge ingress plugins supporting dual-algorithm key exchanges and hybrid certificate chains without dropping legacy client connections.'
    },
    {
      name: 'PQ-PKI',
      subtitle: 'Post-Quantum Certificate Authority',
      status: 'IN_DEVELOPMENT',
      statusLabel: 'In Development',
      statusColor: '#F59E0B',
      desc: 'Hierarchical stateful and lattice-based certificate authority architectures enabling dual-signature X.509 issuance and cross-certificate validation.'
    },
    {
      name: 'PQ-KMS / HSM Integration',
      subtitle: 'Quantum-Safe Key Lifecycle Management',
      status: 'ROADMAP',
      statusLabel: 'Roadmap Architecture',
      statusColor: '#8B5CF6',
      desc: 'Hardware security module and cloud key management extensions supporting post-quantum root key generation, wrapping, and policy governance.'
    },
    {
      name: 'QKD Integration Module',
      subtitle: 'Quantum Key Distribution Interconnect',
      status: 'ROADMAP',
      statusLabel: 'Future Vision',
      statusColor: '#8B5CF6',
      desc: 'Standardized ETSI QKD 004/014 connectors linking physical quantum key distribution devices into CyberKorp hybrid network control planes.'
    }
  ];

  return (
    <section id="remediation" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono-code text-[#10B981] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>MODULAR REMEDIATION SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            FROM INTELLIGENCE <br />
            <span className="text-[#00E5FF]">TO CONTROLLED ACTION.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            CyberKorp translates discovery insights into concrete remediation pathways. Rather than forcing wholesale rip-and-replace, we provide modular technologies and guided transformation patterns.
          </p>
        </div>

        {/* 6-Card Remediation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {remediationSuite.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                item.highlight
                  ? 'bg-[#0D1117] border-[#10B981]/40 shadow-2xl shadow-[#10B981]/10 ring-1 ring-[#10B981]/30'
                  : 'bg-[#05070A] border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[11px] font-mono-code px-2.5 py-0.5 rounded-full font-semibold"
                    style={{
                      backgroundColor: `${item.statusColor}15`,
                      color: item.statusColor,
                      border: `1px solid ${item.statusColor}35`
                    }}
                  >
                    {item.statusLabel}
                  </span>
                  {item.highlight && (
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#10B981] font-bold">
                      ★ Flagship Remediation
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-mono-code mb-1">{item.name}</h3>
                <div className="text-xs text-[#00E5FF] font-mono-code mb-3">{item.subtitle}</div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                {item.action ? (
                  <button
                    onClick={item.action}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#10B981] hover:bg-[#0EA271] text-black font-semibold text-xs font-mono-code transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#10B981]/20"
                  >
                    <span>Inspect Live PQ-VPN Showcase</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={onRequestDemo}
                    className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-mono-code transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Early Architecture Access</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
