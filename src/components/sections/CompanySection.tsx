import React from 'react';
import { TEAM_MEMBERS } from '../../data/mockData';
import { Globe2, MapPin, Award } from 'lucide-react';
import { TextDecrypt } from '../common/TextDecrypt';
import { ScrollReveal } from '../common/ScrollReveal';

export const CompanySection: React.FC = () => {
  const globalRegions = [
    { name: 'India (Headquarters)', role: 'Engineering Hub & Core R&D', status: 'Primary Nexus' },
    { name: 'North America', role: 'Enterprise BFSI & Cloud Architecture', status: 'Global Alignment' },
    { name: 'Europe', role: 'BSI / ANSSI Standards & PQC Frameworks', status: 'Global Alignment' },
    { name: 'Middle East', role: 'Critical Energy Infrastructure', status: 'Global Alignment' },
    { name: 'Asia-Pacific', role: 'High-Throughput Telecom & Financial Rails', status: 'Global Alignment' }
  ];

  const coreTeam = TEAM_MEMBERS.filter((m) => !m.isAdvisor);
  const advisors = TEAM_MEMBERS.filter((m) => m.isAdvisor);

  return (
    <section id="company" className="relative bg-[#EAF4FF] text-[#07111F] overflow-hidden transition-colors duration-500 border-t border-[#0066FF]/20">
      {/* Continuity Entry Divider */}
      <div className="relative w-full bg-gradient-to-b from-[#080C12] to-[#EAF4FF] py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-35" />
        </div>
      </div>

      <div className="relative py-16 md:py-24 pale-blue-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header with Large Human & Restrained Typography */}
          <div className="max-w-4xl mb-14 sm:mb-18">
            <ScrollReveal delay={50} direction="down">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#0066FF]/25 text-xs font-mono-code text-[#0066FF] mb-5 shadow-xs">
                <Globe2 className="w-3.5 h-3.5" />
                <span className="font-semibold">THE FOUNDING TEAM</span>
              </div>
            </ScrollReveal>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#07111F] tracking-tight leading-[1.05] font-mono-code">
              BUILT IN INDIA. <br />
              <TextDecrypt
                text="DESIGNED FOR THE WORLD."
                as="span"
                className="text-[#0066FF]"
                speed={32}
                cursorColor="#0066FF"
              />
            </h2>

            <ScrollReveal delay={120} direction="up">
              <div className="mt-6 p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs max-w-2xl">
                <p className="text-xl sm:text-2xl font-serif italic text-[#07111F] leading-snug">
                  &ldquo;College friends. Industry experience. One ambition.&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#475569] font-mono-code leading-relaxed">
                  Building the foundational cryptographic control plane that helps global enterprises migrate safely into the post-quantum era.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Global Alignment Strip */}
          <div className="p-6 rounded-3xl bg-white border border-[#CBD5E1] shadow-xs mb-14 relative overflow-hidden">
            <div className="text-xs font-mono-code uppercase tracking-wider text-[#64748B] mb-4 flex items-center justify-between">
              <span className="flex items-center gap-2 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#0066FF]" />
                <span>Global Engineering Alignment & Standards Harmony</span>
              </span>
              <span className="text-[#0066FF] font-bold">NIST FIPS 203 / 204 / 205</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {globalRegions.map((region, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 font-mono-code"
                >
                  <div className="text-xs font-bold text-[#07111F] flex items-center justify-between">
                    <span>{region.name}</span>
                    {idx === 0 && <span className="w-2 h-2 rounded-full bg-[#10B981]" />}
                  </div>
                  <div className="text-[11px] text-[#64748B] leading-tight">{region.role}</div>
                  <div className="text-[10px] text-[#0066FF] font-semibold pt-1">{region.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="space-y-8">
            <div className="text-xs font-mono-code uppercase tracking-wider text-[#64748B] font-semibold flex items-center justify-between border-b border-[#CBD5E1] pb-3">
              <span>Founding Leadership & Engineering Core</span>
              <span className="text-[#94A3B8]">Deep-Tech Focus</span>
            </div>

            {/* 4 Core Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#0066FF]/40 transition-all flex flex-col justify-between shadow-xs hover:shadow-sm group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] flex items-center justify-center font-mono-code font-bold text-[#07111F] text-sm group-hover:bg-[#0066FF]/10 group-hover:text-[#0066FF] group-hover:border-[#0066FF]/30 transition-colors">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 font-bold">
                        {member.role}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#07111F] font-mono-code mb-1">
                      {member.name}
                    </h3>
                    <div className="text-xs text-[#0066FF] font-mono-code font-semibold mb-3">
                      {member.focus}
                    </div>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#F1F5F9] text-[11px] font-mono-code text-[#94A3B8] flex items-center justify-between">
                    <span>Team Core</span>
                    <span className="text-[#64748B]">CyberKorp</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Strategic Advisory */}
            {advisors.length > 0 && (
              <div className="mt-8 pt-8 border-t border-[#CBD5E1]">
                <div className="text-xs font-mono-code uppercase tracking-wider text-[#64748B] font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#0066FF]" />
                  <span>Strategic Advisory</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {advisors.map((advisor, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono-code text-[#0066FF] font-bold">
                            {advisor.role}
                          </span>
                          <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-full bg-[#F1F5F9] text-[#64748B] border border-[#E2E8F0]">
                            Industry Advisory
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-[#07111F] font-mono-code">
                          {advisor.name}
                        </h4>
                        <p className="text-xs font-mono-code text-[#475569] mt-1">
                          {advisor.bio}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Continuity Exit Divider */}
      <div className="relative w-full bg-gradient-to-b from-[#EAF4FF] to-[#080C12] py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="tech-divider opacity-35" />
        </div>
      </div>
    </section>
  );
};
