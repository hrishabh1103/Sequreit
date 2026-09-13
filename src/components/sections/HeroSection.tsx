import React from 'react';
import { ArrowRight, ArrowUpRight, Cpu } from 'lucide-react';
import { CryptoNervousHero } from '../visualizers/CryptoNervousHero';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

interface HeroSectionProps {
  onRequestDemo: () => void;
  onExplorePlatform: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestDemo,
  onExplorePlatform
}) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#05070A]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#0066FF]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-[#00E5FF]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Eyebrow Badge */}
        <ScrollReveal delay={100} direction="down">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#00E5FF] shadow-inner">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
              <Cpu className="w-3 h-3" />
              <span>PQC Migration Entry ➔ Crypto-Agility Destination</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Hero Headlines */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            YOUR CRYPTOGRAPHY <br />
            <span className="text-slate-400">IS EVERYWHERE.</span>
          </h1>

          <div className="pt-1">
            <TextDecrypt
              text="CAN YOU SEE IT ALL?"
              as="h2"
              className="text-2xl sm:text-4xl font-semibold tracking-tight text-[#00E5FF] font-mono-code"
              speed={45}
              delay={350}
              cursorColor="#00E5FF"
            />
          </div>

          <ScrollReveal delay={300} direction="up">
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pt-3">
              CyberKorp gives enterprises the intelligence to discover, understand, prioritize, and transform cryptography across their digital infrastructure.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-mono-code flex items-center justify-center gap-2 pt-2">
              <span className="text-[#10B981]">●</span>
              <span>&ldquo;You cannot migrate what you cannot see.&rdquo;</span>
            </p>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal delay={450} direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <button
                onClick={onExplorePlatform}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-semibold text-sm shadow-xl shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onRequestDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#080C12] hover:bg-[#161B22] text-slate-200 hover:text-white border border-white/15 hover:border-[#00E5FF]/50 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
              >
                <span>Talk to Our Team</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white" />
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Interactive Canvas Section */}
        <ScrollReveal delay={550} direction="up" distance={35}>
          <div className="mt-14 relative">
            <CryptoNervousHero />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
