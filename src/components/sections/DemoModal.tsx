import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'DEMO' | 'READINESS';
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, defaultMode = 'DEMO' }) => {
  const [mode, setMode] = useState<'DEMO' | 'READINESS'>(defaultMode);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    companySize: '1,000 - 5,000 employees',
    sector: 'Banking & BFSI',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#080C12] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/15 blur-[90px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-md bg-white/5 hover:bg-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-1.5 p-1 bg-[#05070A] rounded-lg border border-white/10 text-xs font-mono-code">
                <button
                  type="button"
                  onClick={() => setMode('DEMO')}
                  className={`px-3 py-1 rounded transition-colors ${
                    mode === 'DEMO'
                      ? 'bg-[#0066FF] text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Technical Demo
                </button>
                <button
                  type="button"
                  onClick={() => setMode('READINESS')}
                  className={`px-3 py-1 rounded transition-colors ${
                    mode === 'READINESS'
                      ? 'bg-[#00E5FF] text-black font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Readiness Assessment
                </button>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white font-mono-code mb-2">
              {mode === 'DEMO' ? 'Request a SeQureit Demonstration' : 'Assess Your Infrastructure Readiness'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Connect with our technology & product team to map your cryptographic blind spots, evaluate PQ-VPN tunnels, and inspect live CBOM capabilities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-code">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">WORK EMAIL *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@enterprise.com"
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">ORGANIZATION / COMPANY *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. National Clearing Corp"
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">INDUSTRY SECTOR</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option>Banking & BFSI</option>
                    <option>Defence & Aerospace</option>
                    <option>Energy & Utilities</option>
                    <option>Oil & Gas</option>
                    <option>Telecommunications</option>
                    <option>Government & Sovereign</option>
                    <option>Healthcare & Life Sciences</option>
                    <option>Manufacturing & OT</option>
                    <option>Enterprise SaaS / Cloud</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 mb-1">PRIMARY ROLE</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. CISO / VP Architecture"
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">INFRASTRUCTURE SCALE</label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option>&lt; 1,000 employees</option>
                    <option>1,000 - 5,000 employees</option>
                    <option>5,000 - 20,000 employees</option>
                    <option>20,000+ employees (Global)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 mb-1">SPECIFIC ENVIRONMENT INQUIRY / OBJECTIVES</label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your PKI sprawl, PQC transition timeline, or PQ-VPN testbed requirements..."
                  className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold text-sm shadow-xl shadow-[#0066FF]/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Dispatch Technical Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-slate-500 text-center">
                Enterprise confidentiality guaranteed. No data shared with third parties.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 font-mono-code">
            <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Technical Request Acknowledged
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#00E5FF] font-semibold">{formData.name}</span>. The SeQureit engineering team has received your briefing request for <span className="text-white">{formData.company}</span> and will reach out within 24 hours to coordinate an architecture session.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
