import React from 'react';
import { Shield, Lock, Key, Server, EyeOff, FileText, CheckCircle2 } from 'lucide-react';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const EnterpriseTrustSection: React.FC = () => {
  const trustPillars = [
    {
      title: 'Data Minimization',
      desc: 'Probes inspect only cryptographic algorithm parameters, AST signatures, and certificate metadata. Confidential payload data and application traffic are never extracted or stored.',
      icon: EyeOff
    },
    {
      title: 'Evidence Isolation',
      desc: 'Cryptographic findings and CBOM evidence are cryptographically isolated within customer tenant boundaries with customer-managed encryption keys (CMEK).',
      icon: Lock
    },
    {
      title: 'Controlled Environments',
      desc: 'Designed for controlled enterprise environments, dedicated customer VPC instances, and hybrid enterprise infrastructure with zero unwanted outbound connections.',
      icon: Server
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      desc: 'Granular permissions segregate discovery insights, vulnerability findings, and remediation controls according to infrastructure ownership domains.',
      icon: Key
    },
    {
      title: 'Auditability',
      desc: 'Every discovery scan, baseline adjustment, and remediation recommendation generates a verifiable, tamper-evident audit trail for enterprise governance.',
      icon: FileText
    },
    {
      title: 'Configurable Telemetry',
      desc: 'Full administrative control over scan egress, rate limits, and network routing to guarantee zero interference with critical line-of-business operations.',
      icon: Shield
    }
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal delay={50} direction="down">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
              <Shield className="w-3.5 h-3.5" />
              <span>ENTERPRISE GOVERNANCE & ARCHITECTURE</span>
            </div>
          </ScrollReveal>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BUILT FOR ENTERPRISE SECURITY <br />
            <TextDecrypt
              text="AND SOVEREIGN TRUST."
              as="span"
              className="text-[#00E5FF]"
              speed={32}
              cursorColor="#00E5FF"
            />
          </h2>

          <ScrollReveal delay={150} direction="up">
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              CyberKorp is engineered for deployment in high-security environments. Our architecture respects data sovereignty, enforces strict data minimization, and is designed for controlled enterprise environments.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#080C12] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0066FF]/15 border border-[#0066FF]/30 flex items-center justify-center text-[#00E5FF] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-mono-code mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono-code text-[#10B981] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enterprise Grounded</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deployment Modes Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-[#080C12] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-mono-code text-[#00E5FF] uppercase tracking-wider mb-1">
              SUPPORTED DEPLOYMENT MODELS:
            </div>
            <div className="text-sm font-semibold text-white font-mono-code">
              Designed for Controlled Enterprise Environments • Dedicated Cloud VPC (AWS / Azure / GCP) • Hybrid Enterprise Infrastructure
            </div>
          </div>
          <div className="text-xs font-mono-code text-slate-400 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            No external telemetry required for controlled environments
          </div>
        </div>
      </div>
    </section>
  );
};
