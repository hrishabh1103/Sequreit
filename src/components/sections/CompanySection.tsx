import React from 'react';
import { TEAM_MEMBERS } from '../../data/mockData';
import { Globe2, MapPin } from 'lucide-react';

export const CompanySection: React.FC = () => {
  const globalRegions = [
    { name: 'India (Headquarters)', role: 'Engineering Hub & Core R&D', status: 'Primary Nexus' },
    { name: 'North America', role: 'Enterprise BFSI & Cloud Architecture', status: 'Global Alignment' },
    { name: 'Europe', role: 'BSI / ANSSI Standards & PQC Frameworks', status: 'Global Alignment' },
    { name: 'Middle East', role: 'Critical Energy Infrastructure', status: 'Global Alignment' },
    { name: 'Asia-Pacific', role: 'High-Throughput Telecom & Financial Rails', status: 'Global Alignment' }
  ];

  return (
    <section id="company" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            <span>GLOBAL MISSION // ENGINEERING EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            BUILT IN INDIA. <br />
            <span className="text-[#00E5FF]">DESIGNED FOR A GLOBAL CRYPTOGRAPHIC TRANSITION.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            SeQureit is being built by a dedicated team combining deep-tech cybersecurity, software systems engineering, DevOps, cryptanalysis research, and enterprise technology delivery.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-[#05070A] border border-white/10 text-xs sm:text-sm font-mono-code text-slate-300">
            &ldquo;College friends. Industry experience. One ambition: Build the infrastructure that helps organizations move safely into the post-quantum era.&rdquo;
          </div>
        </div>

        {/* Global Connection Topology Strip */}
        <div className="p-6 rounded-2xl bg-[#05070A] border border-white/10 shadow-2xl mb-16 relative overflow-hidden">
          <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#00E5FF]" />
              <span>Sovereign R&D with Global Architectural Interoperability</span>
            </span>
            <span className="text-[#00E5FF]">NIST & Global PQC Alignment</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {globalRegions.map((region, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#080C12] border border-white/5 space-y-1 font-mono-code">
                <div className="text-xs font-bold text-white flex items-center justify-between">
                  <span>{region.name}</span>
                  {idx === 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />}
                </div>
                <div className="text-[11px] text-slate-400">{region.role}</div>
                <div className="text-[10px] text-[#00E5FF] pt-1">{region.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span>Leadership & Engineering Core</span>
            <span className="text-slate-500">Credible, Focused Team</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#05070A] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-200 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center font-mono-code font-bold text-white">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#0066FF]/20 text-[#00E5FF] border border-[#0066FF]/40 font-semibold">
                      {member.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-mono-code mb-1">{member.name}</h3>
                  <div className="text-xs text-[#00E5FF] font-mono-code mb-3">{member.focus}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{member.bio}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono-code text-slate-500 flex items-center justify-between">
                  <span>Founding Team</span>
                  <span className="text-slate-400">Engineering Core</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
