import React, { useState } from 'react';
import { Eye, EyeOff, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [illuminated, setIlluminated] = useState(false);

  const infrastructureElements = [
    { title: 'Core Applications', tech: 'Java / Go / Node.js Microservices', defaultStatus: 'Obscured Calls', illuminatedStatus: '142 Hardcoded Cipher Instances' },
    { title: 'API Gateways & Ingress', tech: 'Envoy / NGINX / Cloud Endpoints', defaultStatus: 'TLS Blind Spot', illuminatedStatus: 'TLS 1.2 Deprecated Cipher Suites' },
    { title: 'Internal PKI & CAs', tech: 'Enterprise Vault / Private CAs', defaultStatus: 'Unknown Expiries', illuminatedStatus: 'RSA-1024 / SHA-1 Trust Roots' },
    { title: 'Cloud KMS & HSMs', tech: 'AWS KMS / Azure Key Vault / On-prem HSM', defaultStatus: 'Unmapped Wrapping Keys', illuminatedStatus: 'Symmetric Envelope Key Hierarchy' },
    { title: 'Database Storage', tech: 'PostgreSQL / Oracle / Redis', defaultStatus: 'Uncorrelated Tablespaces', illuminatedStatus: 'AES-256-GCM Column-Level Protection' },
    { title: 'B2B & Tactical VPNs', tech: 'IPsec / WireGuard / OpenVPN', defaultStatus: 'Hidden Classical Handshakes', illuminatedStatus: 'ECDH-P256 Vulnerable Handshake' }
  ];

  return (
    <section id="problem" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F43F5E]/10 border border-[#F43F5E]/30 text-xs font-mono-code text-[#F43F5E] mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>THE CRYPTOGRAPHIC BLIND SPOT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            YOU CANNOT MIGRATE <br />
            <span className="text-[#00E5FF]">WHAT YOU CANNOT SEE.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Modern enterprises depend on cryptography across applications, infrastructure, networks, identities, and data. But most organizations do not have a complete, continuously updated picture of where cryptography exists or what depends on it.
          </p>
        </div>

        {/* Interactive Blind Spot vs CyberKorp Illuminator Inspector */}
        <div className="rounded-2xl border border-white/10 bg-[#05070A] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/10 blur-[120px] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                Interactive Infrastructure Inspector
              </div>
              <div className="text-lg font-bold text-white mt-0.5">
                {illuminated ? 'CyberKorp Cryptographic Intelligence Layer' : 'Standard Enterprise Visibility (The Blind Spot)'}
              </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center gap-3 bg-[#080C12] p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setIlluminated(false)}
                className={`px-3 py-1.5 rounded text-xs font-mono-code transition-all flex items-center gap-1.5 ${
                  !illuminated
                    ? 'bg-[#161B22] text-slate-200 shadow border border-white/10'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <EyeOff className="w-3.5 h-3.5 text-slate-400" />
                <span>The Blind Spot</span>
              </button>

              <button
                onClick={() => setIlluminated(true)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono-code transition-all flex items-center gap-1.5 ${
                  illuminated
                    ? 'bg-[#0066FF] text-white shadow-lg shadow-[#0066FF]/30 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>Activate CyberKorp Lens</span>
              </button>
            </div>
          </div>

          {/* Infrastructure Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {infrastructureElements.map((elem, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all duration-300 ${
                  illuminated
                    ? 'bg-[#0D1117] border-[#00E5FF]/30 shadow-lg shadow-[#0066FF]/10'
                    : 'bg-[#080C12]/60 border-white/5 opacity-75'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-white">{elem.title}</span>
                  <span className="text-[10px] font-mono-code text-slate-400">{elem.tech}</span>
                </div>

                <div className="pt-2 border-t border-white/5">
                  <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400 mb-1">
                    Cryptographic State:
                  </div>
                  <div
                    className={`text-xs font-mono-code font-medium flex items-center gap-2 ${
                      illuminated ? 'text-[#00E5FF]' : 'text-slate-500'
                    }`}
                  >
                    {illuminated ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-600 shrink-0" />
                    )}
                    <span>{illuminated ? elem.illuminatedStatus : elem.defaultStatus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stage Progression Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code">
            <div className="text-slate-400">
              MIGRATION CONFIDENCE STAGES:
            </div>
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className={`px-2.5 py-1 rounded border ${!illuminated ? 'bg-white/10 text-slate-200 border-white/20' : 'text-slate-500 border-white/5'}`}>
                1. UNKNOWN
              </span>
              <span className="text-slate-600">➔</span>
              <span className={`px-2.5 py-1 rounded border ${illuminated ? 'bg-[#0066FF]/20 text-[#00E5FF] border-[#0066FF]/40' : 'text-slate-600 border-white/5'}`}>
                2. DISCOVERED
              </span>
              <span className="text-slate-600">➔</span>
              <span className={`px-2.5 py-1 rounded border ${illuminated ? 'bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/40' : 'text-slate-600 border-white/5'}`}>
                3. CORRELATED
              </span>
              <span className="text-slate-600">➔</span>
              <span className={`px-2.5 py-1 rounded border ${illuminated ? 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40' : 'text-slate-600 border-white/5'}`}>
                4. UNDERSTOOD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
