import React from 'react';
import { PqVpnSimulator } from '../visualizers/PqVpnSimulator';

export const PqVpnSection: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  return (
    <section id="pq-vpn" className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/15 border border-[#10B981]/35 text-xs font-mono-code text-[#10B981] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>CURRENT WORKING REMEDIATION PRODUCT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            QUANTUM-SAFE CONNECTIVITY. <br />
            <span className="text-[#10B981]">SECURE CONNECTIONS FOR THE POST-QUANTUM ERA.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Our PQ-VPN is designed as a core remediation product within the broader SeQureit platform. It establishes wire-speed encrypted tunnels that combine classical robustness with post-quantum lattice-based key encapsulation to protect against ongoing adversary data harvesting.
          </p>
        </div>

        {/* Key Product Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#10B981] mb-1.5">01 // HYBRID ARCHITECTURE</div>
            <h3 className="text-base font-bold text-white mb-2">Dual-Key Encapsulation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Combines NIST ML-KEM-768 with classical X25519 Diffie-Hellman, ensuring full backward compatibility and zero security degradation even if an algorithm is later adjusted.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#10B981] mb-1.5">02 // LINE-RATE PERFORMANCE</div>
            <h3 className="text-base font-bold text-white mb-2">Minimal Latency Overhead</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Optimized cryptographic assembly routines maintain wire-speed throughput across high-frequency interbank links and high-bandwidth datalink interconnects.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5">
            <div className="text-xs font-mono-code text-[#10B981] mb-1.5">03 // SEAMLESS ORCHESTRATION</div>
            <h3 className="text-base font-bold text-white mb-2">Platform-Integrated</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Deploys directly from the SeQureit management plane to protect vulnerable B2B endpoints identified during initial cryptographic discovery.
            </p>
          </div>
        </div>

        {/* Live Simulator Component */}
        <PqVpnSimulator onRequestDemo={onRequestDemo} />
      </div>
    </section>
  );
};
