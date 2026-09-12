import React from 'react';
import { ArrowRight, ArrowUpRight, Cpu } from 'lucide-react';
import { CryptoNervousHero } from '../visualizers/CryptoNervousHero';

interface HeroSectionProps {
  onRequestDemo: () => void;
  onExplorePlatform: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRequestDemo, onExplorePlatform }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0066FF]/15 via-[#00E5FF]/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top category indicator */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080C12] border border-white/10 backdrop-blur-md shadow-inner text-xs font-mono-code text-slate-300">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
            <span>CRYPTOGRAPHIC INTELLIGENCE & CONTROL PLANE</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[11px] font-mono-code text-[#00E5FF]">
            <Cpu className="w-3 h-3" />
            <span>PQC Migration Entry ➔ Crypto-Agility Destination</span>
          </div>
        </div>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            YOUR CRYPTOGRAPHY <br />
            <span className="text-slate-400">IS EVERYWHERE.</span>
          </h1>

          <p className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#00E5FF] font-mono-code pt-1">
            CAN YOU SEE IT ALL?
          </p>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pt-3">
            SeQureit gives enterprises the intelligence to discover, understand, prioritize, and transform cryptography across their digital infrastructure.
          </p>

          <p className="text-xs sm:text-sm text-slate-400 font-mono-code flex items-center justify-center gap-2 pt-1">
            <span className="text-[#10B981]">●</span>
            <span>&ldquo;You cannot migrate what you cannot see.&rdquo;</span>
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={onExplorePlatform}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-semibold text-sm shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onRequestDemo}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#080C12] hover:bg-[#161B22] text-slate-200 hover:text-white border border-white/15 hover:border-[#00E5FF]/50 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Hero Interactive Canvas Section */}
        <div className="mt-14 relative">
          <CryptoNervousHero />
        </div>
      </div>
    </section>
  );
};
