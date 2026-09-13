import React from 'react';
import { Layers, ArrowDown, Shield, RefreshCw } from 'lucide-react';

export const WhatIsCyberKorpSection: React.FC = () => {
  const hiddenSubstrates = [
    { label: 'APPLICATIONS', category: 'Microservices & Core Logic' },
    { label: 'APIS & INGRESS', category: 'REST / GraphQL / gRPC' },
    { label: 'CERTIFICATES', category: 'X.509, TLS & mTLS Trust' },
    { label: 'PKI HIERARCHY', category: 'Public, Private & Sub-CAs' },
    { label: 'CRYPTOGRAPHIC KEYS', category: 'Signing, Master & Ephemeral' },
    { label: 'KMS INSTANCES', category: 'AWS KMS / Azure KV / GCP' },
    { label: 'HARDWARE HSMS', category: 'FIPS 140-2 / PKCS#11' },
    { label: 'NETWORKS', category: 'IPsec, B2B & Mesh Tunnels' },
    { label: 'SOURCE CODE', category: 'AST Cryptographic Invocations' },
    { label: 'EDGE & DEVICES', category: 'IoT, OT & Industrial Controllers' }
  ];

  const controlPlaneSteps = [
    { name: 'DISCOVER', desc: 'Scan code, network & cloud assets' },
    { name: 'INVENTORY', desc: 'Normalized living CBOM registry' },
    { name: 'UNDERSTAND', desc: 'Relational blast-radius topology' },
    { name: 'ASSESS', desc: 'HNDL exposure & Shor vulnerability' },
    { name: 'PRIORITIZE', desc: 'Actionable phased migration queue' },
    { name: 'REMEDIATE', desc: 'Hybrid shims & wire-speed PQ-VPN' },
    { name: 'VALIDATE', desc: 'Automated regression verification' }
  ];

  return (
    <section id="platform" className="relative bg-[#E8F7F4] text-[#07111F] overflow-hidden transition-colors duration-500 border-t border-[#0EA5A5]/25">
      {/* Visual Continuity Transition Strip (Dark Navy -> Blueprint Lines -> Soft Pale Mint) */}
      <div className="relative w-full overflow-hidden bg-gradient-to-b from-[#081A2B] to-[#E8F7F4] pt-8 pb-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 text-[11px] font-mono-code text-cyan-300/80 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>INFRASTRUCTURE STATE SHIFT: LIVE TOPOLOGY → TECHNICAL BLUEPRINT</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5A5]" />
          </div>
          <div className="tech-divider my-2 opacity-50" />
        </div>
      </div>

      <div className="relative py-16 md:py-24 pale-mint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Pill & Lead Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#0EA5A5]/30 text-xs font-mono-code text-[#0066FF] mb-6 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-[#0EA5A5]" />
              <span className="font-semibold">THE CRYPTOGRAPHIC CONTROL PLANE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#07111F] tracking-tight leading-[1.1] mb-6 font-mono-code">
              YOUR CRYPTOGRAPHY IS AN <br />
              <span className="text-[#0066FF]">INVISIBLE DEPENDENCY LAYER.</span>
            </h2>

            <p className="text-base sm:text-xl text-[#475569] font-normal max-w-3xl mx-auto leading-relaxed">
              Cryptography is embedded across applications, APIs, certificates, PKI, keys, KMS, HSMs, networks and devices.
              <span className="block mt-2 text-[#64748B] text-sm sm:text-base">
                CyberKorp maps that hidden layer, connects the dependencies, identifies risk and helps organizations transform it for a quantum-safe future.
              </span>
            </p>
          </div>

          {/* Clean Technical Blueprint Visualization */}
          <div className="rounded-3xl bg-white/95 border border-[#0EA5A5]/25 p-6 sm:p-10 lg:p-14 shadow-lg shadow-teal-900/5 relative overflow-hidden">
            {/* Level 1: The Heterogeneous Embedded Infrastructure */}
            <div className="relative z-10 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-code uppercase tracking-wider text-[#64748B] font-semibold">
                  01 // HETEROGENEOUS ENTERPRISE INFRASTRUCTURE (THE EMBEDDED LAYER)
                </span>
                <span className="text-[11px] font-mono-code text-[#0EA5A5] hidden sm:inline">
                  Blueprint Schema v2.4
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {hiddenSubstrates.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#F0FBF8] border border-[#D5EFEA] hover:border-[#0066FF]/40 hover:bg-white transition-all text-center group shadow-xs"
                  >
                    <div className="text-xs sm:text-sm font-bold text-[#07111F] font-mono-code group-hover:text-[#0066FF] transition-colors">
                      {item.label}
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono-code mt-0.5 truncate">
                      {item.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Connector Line */}
            <div className="relative z-10 flex flex-col items-center justify-center my-6">
              <div className="h-6 w-px bg-gradient-to-b from-[#0EA5A5]/40 to-[#0066FF]" />
              <div className="p-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#0066FF]">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-[#0066FF] to-[#0EA5A5]/40" />
            </div>

            {/* Level 2: CyberKorp Control Plane Nexus */}
            <div className="relative z-10 p-6 sm:p-8 rounded-2xl bg-[#F0FBF8] border-2 border-[#0EA5A5]/30 shadow-xs relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#D5EFEA]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/25 flex items-center justify-center text-[#0066FF]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono-code text-[#0EA5A5] font-semibold">
                      INTELLIGENCE & CONTROL LAYER
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#07111F] font-mono-code">
                      CYBERKORP CONTROL PLANE
                    </h3>
                  </div>
                </div>

                <div className="max-w-md text-xs sm:text-sm text-[#475569] font-mono-code bg-white p-3.5 rounded-lg border border-[#D5EFEA] shadow-xs">
                  &ldquo;CyberKorp does not ask enterprises to replace their infrastructure. It helps them understand and transform the cryptography already embedded within it.&rdquo;
                </div>
              </div>

              {/* The 7 Lifecycle Operations */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-6">
                {controlPlaneSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-[#D5EFEA] hover:border-[#0066FF]/40 transition-all text-center flex flex-col justify-between shadow-xs"
                  >
                    <div className="text-[10px] font-mono-code text-[#0066FF] font-bold mb-1">
                      0{idx + 1} //
                    </div>
                    <div className="text-xs font-bold text-[#07111F] font-mono-code mb-1">
                      {step.name}
                    </div>
                    <div className="text-[10px] text-[#64748B] font-mono-code leading-tight">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Connector Line */}
            <div className="relative z-10 flex flex-col items-center justify-center my-6">
              <div className="h-6 w-px bg-gradient-to-b from-[#0066FF] to-[#0EA5A5]" />
              <div className="p-1.5 rounded-full bg-[#0EA5A5]/15 border border-[#0EA5A5]/40 text-[#0EA5A5]">
                <ArrowDown className="w-4 h-4" />
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-[#0EA5A5] to-transparent" />
            </div>

            {/* Level 3: The Long-Term Destination — Crypto-Agility */}
            <div className="relative z-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0EA5A5]/10 via-[#F0FBF8] to-[#0066FF]/10 border border-[#0EA5A5]/35 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0EA5A5]/20 border border-[#0EA5A5]/40 flex items-center justify-center text-[#0EA5A5]">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-code uppercase tracking-wider text-[#0EA5A5] font-bold">
                    THE STRATEGIC DESTINATION
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-[#07111F] font-mono-code">
                    CRYPTO-AGILE INFRASTRUCTURE
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] font-mono-code max-w-xl text-center md:text-right">
                PQC migration is the entry point. Crypto-agility is the destination. Continuously observe, validate, and adapt cryptographic primitives without operational downtime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Continuity Exit Divider (Soft Pale Mint -> Deep Technical Navy) */}
      <div className="relative w-full bg-gradient-to-b from-[#E8F7F4] to-[#071522] py-6 border-b border-[#00E5FF]/20">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-40" />
        </div>
      </div>
    </section>
  );
};
