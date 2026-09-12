import React, { useState, useEffect } from 'react';
import { Search, FileCode, RefreshCw } from 'lucide-react';

export const DiscoverySection: React.FC = () => {
  const [activeScanTarget, setActiveScanTarget] = useState(0);

  const scanTargets = [
    { name: 'Git Repositories', type: 'Static AST Code Analysis', status: 'Working Core', findings: '18 Algorithms / 3 Secrets', coverage: 'Java, Go, Python, C++, Rust' },
    { name: 'TLS & Public Endpoints', type: 'Live Handshake Inspection', status: 'Working Core', findings: '42 Endpoints / 6 Deprecated', coverage: 'TLS 1.0-1.3, Cipher Suites' },
    { name: 'Cloud KMS & Vault', type: 'Key Metadata Reconciliation', status: 'Working Core', findings: '38 Master Keys / 12 Wrapping', coverage: 'AWS KMS, HashiCorp Vault' },
    { name: 'Kubernetes Workloads', type: 'Sidecar & Ingress Inspector', status: 'In Development', findings: 'Preview Engine Active', coverage: 'K8s Ingress, mTLS Secrets' },
    { name: 'Linux Host OS & OpenSSL', type: 'Binary & Shared Lib Scan', status: 'In Development', findings: 'Prototype Pipeline', coverage: 'libcrypto.so, system CA store' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScanTarget((prev) => (prev + 1) % scanTargets.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [scanTargets.length]);

  const simulatedTelemetryLog = [
    { file: 'src/auth/jwt_signer.go:42', finding: 'crypto/ecdsa.GenerateKey(elliptic.P256())', risk: 'Vulnerable (Shor)', confidence: '99.4%' },
    { file: 'infra/terraform/kms.tf:19', finding: 'key_spec = "RSA_2048" (KeyUsage: SIGN_VERIFY)', risk: 'Vulnerable (Shor)', confidence: '100%' },
    { file: 'nginx/conf.d/api.conf:8', finding: 'ssl_ciphers "ECDHE-RSA-AES128-GCM-SHA256"', risk: 'Hybrid Candidate', confidence: '99.8%' },
    { file: 'backend/crypto/storage.rs:114', finding: 'aes_gcm::Aes256Gcm::new(&key)', risk: 'Standard Compliant', confidence: '100%' }
  ];

  return (
    <section id="discovery" className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Search className="w-3.5 h-3.5" />
            <span>DEEP RECONNAISSANCE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            DISCOVER THE CRYPTOGRAPHY <br />
            <span className="text-[#00E5FF]">YOU DIDN&apos;T KNOW YOU HAD.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            SeQureit continuously traverses source code, repositories, configuration manifests, TLS endpoints, and key management infrastructure to extract cryptographic calls and build evidence-backed findings.
          </p>
        </div>

        {/* Discovery Multi-Surface Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Surface Scanners List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Enterprise Discovery Surfaces</span>
              <span className="text-[#00E5FF]">Multi-Vector</span>
            </div>

            {scanTargets.map((target, idx) => {
              const isActive = activeScanTarget === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveScanTarget(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isActive
                      ? 'bg-[#0D1117] border-[#00E5FF]/40 shadow-lg shadow-[#0066FF]/15'
                      : 'bg-[#080C12] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#00E5FF] animate-ping' : 'bg-slate-600'}`} />
                      <span className="text-sm font-bold text-white">{target.name}</span>
                    </div>
                    <span
                      className={`text-[10px] font-mono-code px-2 py-0.5 rounded-full ${
                        target.status === 'Working Core'
                          ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                          : 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                      }`}
                    >
                      {target.status}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 flex items-center justify-between pt-1">
                    <span>{target.type}</span>
                    <span className="font-mono-code text-slate-300">{target.coverage}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Scanning Terminal & Evidence Inspector */}
          <div className="lg:col-span-7 rounded-2xl bg-[#080C12] border border-white/10 p-6 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F43F5E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-mono-code text-slate-400 ml-2">
                    sequreit-ast-engine :: {scanTargets[activeScanTarget].name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono-code text-[#00E5FF]">
                  <RefreshCw className="w-3 h-3 animate-spin" />
                  <span>STREAMING FINDINGS</span>
                </div>
              </div>

              {/* Terminal Code Evidence Rows */}
              <div className="space-y-3 font-mono-code text-xs">
                {simulatedTelemetryLog.map((log, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#05070A] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <FileCode className="w-3.5 h-3.5 text-[#388BFD]" />
                        {log.file}
                      </span>
                      <span
                        className={`text-[10px] px-2 py-0.2 rounded font-semibold ${
                          log.risk.includes('Vulnerable')
                            ? 'bg-[#F43F5E]/15 text-[#F43F5E] border border-[#F43F5E]/30'
                            : log.risk.includes('Hybrid')
                            ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                            : 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                        }`}
                      >
                        {log.risk}
                      </span>
                    </div>

                    <div className="text-slate-200 text-[11px] bg-[#080C12] p-2 rounded border border-white/5">
                      <span className="text-slate-500 mr-2">&gt;</span>
                      <span className="text-[#00E5FF]">{log.finding}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Engine Capabilities Summary */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono-code text-slate-400">
              <div>
                Target Coverage: <span className="text-white font-semibold">Evidence-backed cryptographic extraction</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Notice: Illustrative demo telemetry
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
