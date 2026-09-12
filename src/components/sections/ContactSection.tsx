import React from 'react';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';

interface ContactSectionProps {
  onRequestDemo: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestDemo }) => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#05070A] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#080C12] to-[#0D1117] border border-white/15 p-8 sm:p-14 shadow-2xl relative overflow-hidden text-center max-w-5xl mx-auto">
          {/* Radial Lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0066FF]/15 blur-[120px] pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-6">
            <Shield className="w-3.5 h-3.5" />
            <span>START WITH VISIBILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            SEE YOUR CRYPTOGRAPHY. <br />
            <span className="text-gradient-cyan">BUILD TOWARD CRYPTO-AGILITY.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Let&apos;s map your cryptographic estate, eliminate blind spots, and identify where to begin post-quantum transformation with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold text-sm font-mono-code shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Request a Technical Briefing</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#080C12] hover:bg-[#161B22] text-slate-200 hover:text-white border border-white/15 text-sm font-semibold font-mono-code transition-all flex items-center justify-center gap-2"
            >
              <span>Schedule Architecture Review</span>
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Zero commitment discovery pilots
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Live PQ-VPN hardware testbed access
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Air-gapped & sovereign options
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
