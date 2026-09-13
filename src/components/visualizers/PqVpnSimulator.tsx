import React, { useState, useEffect } from 'react';
import { ShieldCheck, ShieldAlert, Laptop, Server } from 'lucide-react';

export const PqVpnSimulator: React.FC<{ onRequestDemo: () => void }> = ({ onRequestDemo }) => {
  const [tunnelMode, setTunnelMode] = useState<'CLASSICAL' | 'PQC_HYBRID'>('PQC_HYBRID');
  const [packetTick, setPacketTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketTick((t) => (t + 1) % 100);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C12] shadow-2xl overflow-hidden relative">
      {/* Top Controller Bar */}
      <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${tunnelMode === 'PQC_HYBRID' ? 'bg-[#10B981] animate-ping' : 'bg-[#F43F5E]'}`} />
            <h3 className="text-base sm:text-lg font-bold text-white font-mono-code">
              LIVE TUNNEL TELEMETRY SIMULATOR
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Toggle protocol mode to compare classical handshake vulnerability vs CyberKorp post-quantum encapsulation.
          </p>
        </div>

        {/* Toggle Mode Button */}
        <div className="flex items-center gap-2 bg-[#05070A] p-1.5 rounded-lg border border-white/10 text-xs font-mono-code">
          <button
            onClick={() => setTunnelMode('CLASSICAL')}
            className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
              tunnelMode === 'CLASSICAL'
                ? 'bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/40 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Classical (ECDH)</span>
          </button>

          <button
            onClick={() => setTunnelMode('PQC_HYBRID')}
            className={`px-3.5 py-1.5 rounded transition-all flex items-center gap-1.5 ${
              tunnelMode === 'PQC_HYBRID'
                ? 'bg-[#10B981] text-black font-bold shadow-lg shadow-[#10B981]/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            <span>CyberKorp PQ-VPN (ML-KEM)</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Packet Flow Pipeline */}
      <div className="p-6 sm:p-10 bg-[#05070A] relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Client Node */}
          <div className="md:col-span-3 p-4 rounded-xl bg-[#080C12] border border-white/10 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#00E5FF]">
              <Laptop className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-white font-mono-code">CLIENT WORKSTATION</div>
            <div className="text-[10px] font-mono-code text-slate-400">IP: 10.240.12.88</div>
            <div className="text-[9px] font-mono-code text-slate-500 pt-1 border-t border-white/5">
              CyberKorp Micro-Agent Active
            </div>
          </div>

          {/* Animated Tunnel Stream */}
          <div className="md:col-span-6 relative py-6">
            {/* Status Label above line */}
            <div className="text-center mb-2">
              <span
                className={`text-[11px] font-mono-code px-3 py-0.5 rounded-full font-semibold border ${
                  tunnelMode === 'PQC_HYBRID'
                    ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                    : 'bg-[#F43F5E]/15 text-[#F43F5E] border-[#F43F5E]/30'
                }`}
              >
                {tunnelMode === 'PQC_HYBRID'
                  ? 'ML-KEM-768 + X25519 HYBRID ENCAPSULATION'
                  : 'VULNERABLE TO HARVEST NOW, DECRYPT LATER (HNDL)'}
              </span>
            </div>

            {/* Tunnel Pipe Graphic */}
            <div className="relative h-10 rounded-full border border-white/10 bg-[#080C12] overflow-hidden flex items-center px-4">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundColor: tunnelMode === 'PQC_HYBRID' ? '#10B981' : '#F43F5E'
                }}
              />

              {/* Animated Encrypted Data Packets */}
              {[15, 38, 62, 85].map((offset, i) => {
                const pos = (packetTick * 1.5 + offset) % 100;
                return (
                  <div
                    key={i}
                    style={{ left: `${pos}%` }}
                    className="absolute -translate-x-1/2 flex items-center gap-1 transition-all duration-75"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-mono-code font-bold ${
                        tunnelMode === 'PQC_HYBRID'
                          ? 'bg-[#10B981] text-black shadow-md shadow-[#10B981]/60'
                          : 'bg-[#F43F5E] text-white shadow-md shadow-[#F43F5E]/60'
                      }`}
                    >
                      ✓
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-between text-[10px] font-mono-code text-slate-500 mt-2 px-2">
              <span>Handshake: {tunnelMode === 'PQC_HYBRID' ? 'FIPS 203 (ML-KEM)' : 'RFC 8422 (ECDH-P256)'}</span>
              <span>Wire Cipher: AES-256-GCM (256-bit)</span>
            </div>
          </div>

          {/* Server / Datacenter Node */}
          <div className="md:col-span-3 p-4 rounded-xl bg-[#080C12] border border-white/10 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#0066FF]">
              <Server className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-white font-mono-code">ENTERPRISE GATEWAY</div>
            <div className="text-[10px] font-mono-code text-slate-400">IP: 198.51.100.24</div>
            <div className="text-[9px] font-mono-code text-slate-500 pt-1 border-t border-white/5">
              Dual-Stack Terminus
            </div>
          </div>
        </div>

        {/* Telemetry Metrics Comparison */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono-code">
          <div className="p-3 rounded-lg bg-[#080C12] border border-white/5">
            <div className="text-slate-500 text-[10px]">KEY EXCHANGE MECHANISM:</div>
            <div className={`font-bold mt-1 ${tunnelMode === 'PQC_HYBRID' ? 'text-[#10B981]' : 'text-[#F43F5E]'}`}>
              {tunnelMode === 'PQC_HYBRID' ? 'ML-KEM-768 + X25519' : 'Standard ECDH (Curve P-256)'}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#080C12] border border-white/5">
            <div className="text-slate-500 text-[10px]">THROUGHPUT OVERHEAD:</div>
            <div className="text-white font-bold mt-1">
              {tunnelMode === 'PQC_HYBRID' ? '< 1.8% Wire Overhead' : 'Baseline 0.0%'}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#080C12] border border-white/5">
            <div className="text-slate-500 text-[10px]">HNDL ADVERSARY PROTECTION:</div>
            <div className={`font-bold mt-1 ${tunnelMode === 'PQC_HYBRID' ? 'text-[#10B981]' : 'text-[#F43F5E]'}`}>
              {tunnelMode === 'PQC_HYBRID' ? 'Active Quantum Resilience' : 'VULNERABLE (Store & Decrypt)'}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#080C12] border border-white/5">
            <div className="text-slate-500 text-[10px]">CURRENT PRODUCT AVAILABILITY:</div>
            <div className="text-[#00E5FF] font-bold mt-1">
              Demonstrable Live Today
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-400 font-mono-code">
            Demonstrate post-quantum tunnel handshakes against your live network traffic.
          </span>
          <button
            onClick={onRequestDemo}
            className="px-5 py-2.5 rounded-md bg-[#10B981] hover:bg-[#0EA271] text-black font-semibold text-xs font-mono-code transition-all shadow-lg shadow-[#10B981]/25 flex items-center gap-2"
          >
            <span>Request a Live PQ-VPN Demonstration</span>
          </button>
        </div>
      </div>
    </div>
  );
};
