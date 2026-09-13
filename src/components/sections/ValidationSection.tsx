import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const ValidationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const verificationGates = [
    {
      gate: '01',
      title: 'Algorithm Conformance',
      status: 'VERIFIED',
      checks: [
        { name: 'NIST ML-KEM-768 parameter compliance', passed: true },
        { name: 'Deprecation of vulnerable RSA-2048 modulus', passed: true },
        { name: 'Entropy source seeding audit (FIPS 140-3)', passed: true }
      ],
      telemetry: 'Cipher negotiation test: TLS_AES_256_GCM_SHA384 with X25519_MLKEM768 negotiated in 21ms.'
    },
    {
      gate: '02',
      title: 'Dependency & Trust Continuity',
      status: 'VERIFIED',
      checks: [
        { name: 'Downstream payment API handshake integrity', passed: true },
        { name: 'Dual-signature X.509 certificate chain validation', passed: true },
        { name: 'Mobile client certificate pin verification', passed: true }
      ],
      telemetry: '0 dropped client handshakes across 50,000 synthetic regression requests.'
    },
    {
      gate: '03',
      title: 'Latency & Throughput Budget',
      status: 'VERIFIED',
      checks: [
        { name: 'Handshake latency delta within < 4ms SLA', passed: true },
        { name: 'Packet fragmentation threshold verified', passed: true },
        { name: 'Gateway CPU saturation delta < 3.2%', passed: true }
      ],
      telemetry: 'Benchmark: 99.4th percentile TLS handshake latency overhead measured at +2.1ms.'
    },
    {
      gate: '04',
      title: 'Cryptographic Proof & Evidence',
      status: 'VERIFIED',
      checks: [
        { name: 'Signed CBOM diff generated for audit log', passed: true },
        { name: 'Automated policy compliance attestation', passed: true },
        { name: 'Baseline reconciliation confirmed clean', passed: true }
      ],
      telemetry: 'Proof artifact SHA-256: d49b... signed by CyberKorp Evidence Validator.'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={50} direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>POST-MIGRATION VERIFICATION SUITE</span>
            </div>
          </ScrollReveal>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            MIGRATION IS NOT COMPLETE <br />
            <TextDecrypt
              text="UNTIL IT IS VERIFIED."
              as="span"
              className="text-[#00E5FF]"
              speed={32}
              cursorColor="#00E5FF"
            />
          </h2>

          <ScrollReveal delay={150} direction="up">
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              Deploying a post-quantum cipher is only half the battle. Organizations must rigorously prove that the intended algorithms took effect, certificates chain correctly, applications remain fully functional, and no performance regression occurred.
            </p>
          </ScrollReveal>
        </div>

        {/* Validation Steps Pipeline Ribbon */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-10 text-xs font-mono-code">
          {['1. CHANGE', '2. TEST', '3. VERIFY', '4. VALIDATE', '5. ATTEST'].map((step, idx) => (
            <div key={idx} className="flex items-center gap-3 shrink-0">
              <span className="px-4 py-2 rounded-lg bg-[#05070A] border border-white/10 text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                <span>{step}</span>
              </span>
              {idx < 4 && <span className="text-slate-600">➔</span>}
            </div>
          ))}
        </div>

        {/* Interactive Validation Dashboard */}
        <div className="rounded-2xl border border-white/10 bg-[#05070A] p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                Automated Verification Telemetry
              </div>
              <div className="text-lg font-bold text-white font-mono-code mt-0.5">
                Target: Ingress Gateway / payment-routing-proxy (Post-Migration)
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs font-mono-code font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>All 4 Validation Gates Passed</span>
              </span>
            </div>
          </div>

          {/* Interactive Gate Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-6">
            {verificationGates.map((gate, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  activeTab === i
                    ? 'bg-[#0D1117] border-[#00E5FF]/40 shadow-lg shadow-[#0066FF]/10 ring-1 ring-[#00E5FF]/20'
                    : 'bg-[#080C12] border-white/5 hover:border-white/15'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                  <span className="text-[#00E5FF]">GATE {gate.gate}</span>
                  <span className="text-[#10B981] font-bold">100% PASS</span>
                </div>
                <div className="text-xs font-bold text-white font-mono-code">{gate.title}</div>
              </button>
            ))}
          </div>

          {/* Detailed Active Gate Verification Checklist & Evidence Log */}
          <div className="p-5 rounded-xl bg-[#080C12] border border-white/5 space-y-4 font-mono-code text-xs">
            <div className="text-slate-400 text-[11px] uppercase tracking-wider">
              Gate Checks: {verificationGates[activeTab].title}
            </div>

            <div className="space-y-2">
              {verificationGates[activeTab].checks.map((check, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex items-center justify-between">
                  <span className="text-slate-200">{check.name}</span>
                  <span className="text-[#10B981] flex items-center gap-1 font-semibold text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" /> PASSED
                  </span>
                </div>
              ))}
            </div>

            <div className="p-3 rounded-lg bg-[#05070A] border border-[#00E5FF]/20 text-[11px] text-[#00E5FF]">
              <span className="text-slate-400 mr-2">LIVE TEST TELEMETRY:</span>
              {verificationGates[activeTab].telemetry}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
