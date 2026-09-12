import React from 'react';
import { PqVpnSimulator } from '../visualizers/PqVpnSimulator';
import { ArrowRight, Lock, Key, Server, Laptop } from 'lucide-react';

export const PqVpnSection: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  return (
    <section id="pq-vpn" className="relative py-28 md:py-36 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/35 text-xs font-mono-code text-[#10B981] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>ONE OF SEQUREIT&apos;S CURRENT REMEDIATION CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            A WORKING PIECE <br />
            <span className="text-[#10B981]">OF THE FUTURE.</span>
          </h2>

          <p className="mt-4 text-xl sm:text-2xl text-slate-200 font-light font-mono-code">
            Post-quantum secure connectivity, available today.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
            While long-term crypto-agility governs your entire cryptographic estate, our PQ-VPN delivers immediate protection for critical transit routes right now. It protects sensitive inter-site, data replication, and B2B streams against ongoing Harvest Now, Decrypt Later (HNDL) adversaries.
          </p>
        </div>

        {/* The 4-Stage Transmission Architecture Visual Ribbon */}
        <div className="p-4 sm:p-6 rounded-2xl bg-[#080C12] border border-white/10 mb-12 shadow-xl">
          <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>POST-QUANTUM TUNNEL PIPELINE (FIPS 203)</span>
            <span className="text-[#10B981] font-semibold">Standard: ML-KEM-768</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#00E5FF] shrink-0">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-slate-500">STEP 01</div>
                <div className="text-xs font-bold text-white font-mono-code">Client Endpoint</div>
                <div className="text-[10px] text-slate-400">Initiates Secure Session</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-[#10B981]/30 flex items-center gap-3 shadow-lg shadow-[#10B981]/5">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                <Key className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-[#10B981] font-semibold">STEP 02</div>
                <div className="text-xs font-bold text-white font-mono-code">PQ Handshake</div>
                <div className="text-[10px] text-[#10B981]">ML-KEM-768 KEM</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#388BFD] shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-slate-500">STEP 03</div>
                <div className="text-xs font-bold text-white font-mono-code">Encrypted Tunnel</div>
                <div className="text-[10px] text-slate-400">Wire-Speed Hybrid Flow</div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#8B5CF6] shrink-0">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono-code text-slate-500">STEP 04</div>
                <div className="text-xs font-bold text-white font-mono-code">Destination Server</div>
                <div className="text-[10px] text-slate-400">Core Infrastructure</div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Simulator Component */}
        <PqVpnSimulator onRequestDemo={onRequestDemo} />

        {/* CTA banner below simulator */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-[#080C12] border border-[#10B981]/30 gap-4">
          <div>
            <div className="text-sm font-bold text-white font-mono-code">
              Experience wire-speed post-quantum tunnels on your network.
            </div>
            <div className="text-xs text-slate-400 font-mono-code mt-0.5">
              Available today for technical proof-of-concepts and inter-datacenter links.
            </div>
          </div>
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#0ea271] text-black font-bold text-xs font-mono-code shadow-xl shadow-[#10B981]/20 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Request a Live PQ-VPN Demonstration</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
