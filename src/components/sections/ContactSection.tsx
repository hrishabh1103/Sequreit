import React from 'react';
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

interface ContactSectionProps {
  onRequestDemo: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestDemo }) => {
  return (
    <section id="contact" className="relative bg-[#EAF4FF] text-[#07111F] overflow-hidden transition-colors duration-500 border-t border-[#0066FF]/20">
      {/* Continuity Entry Divider */}
      <div className="relative w-full bg-gradient-to-b from-[#080C12] to-[#EAF4FF] py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-35" />
        </div>
      </div>

      <div className="relative py-16 md:py-24 pale-blue-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal delay={50} direction="up">
            <div className="rounded-3xl bg-white border border-[#CBD5E1] p-8 sm:p-14 shadow-md shadow-blue-950/5 relative overflow-hidden text-center max-w-5xl mx-auto">
              {/* Subtle blue ambient aura */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0066FF]/5 blur-[100px] pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/25 text-xs font-mono-code text-[#0066FF] mb-6">
                <Shield className="w-3.5 h-3.5" />
                <span>START WITH VISIBILITY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#07111F] tracking-tight leading-tight mb-4 font-mono-code">
                READY TO SEE YOUR <br />
                <TextDecrypt
                  text="CRYPTOGRAPHY?"
                  as="span"
                  className="text-[#0066FF]"
                  speed={36}
                  cursorColor="#0066FF"
                />
              </h2>

              <p className="text-base sm:text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8">
                Let&apos;s map your cryptographic estate, identify the blind spots and determine where your transformation should begin.
              </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-sm font-mono-code shadow-lg shadow-[#0066FF]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#07111F] border border-[#CBD5E1] text-sm font-semibold font-mono-code transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request a Technical Briefing</span>
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-center gap-6 text-xs font-mono-code text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Guided discovery assessments
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Live PQ-VPN demonstration available
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" /> Designed for controlled enterprise environments
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>

      {/* Continuity Exit: Smooth shift from Pale Blue (#EAF4FF) into Deep Navy (#081A2B) to Cosmic Dark (#05070A) */}
      <div className="relative w-full bg-gradient-to-b from-[#EAF4FF] via-[#081A2B] to-[#05070A] py-10">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-30" />
        </div>
      </div>
    </section>
  );
};
