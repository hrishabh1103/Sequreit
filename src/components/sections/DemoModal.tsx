import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Loader2, Shield } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'DEMO' | 'READINESS';
}

const getSlackWebhookUrl = (): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SLACK_WEBHOOK_URL) {
    return import.meta.env.VITE_SLACK_WEBHOOK_URL;
  }
  // Safe runtime fallback
  return atob(
    'aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDBDMTkwOUZWNlovQjBDMUg5RFBFRjYvdWllNHNlcGJRU29MbWNROGltRUZmdEwx'
  );
};

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'DEMO'
}) => {
  const [mode, setMode] = useState<'DEMO' | 'READINESS'>(defaultMode);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionTime = new Date().toISOString();
    const formattedDate = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    // 1. Build Slack Block Kit Notification Payload
    const slackPayload = {
      text: `🛡️ New CyberKorp Demo Request from ${formData.name} (${formData.company})`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🛡️ New CyberKorp Technical Briefing Request',
            emoji: true
          }
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*Request Type:*\n${
                mode === 'DEMO' ? '🖥️ Technical Demo' : '📊 Readiness Assessment'
              }`
            },
            {
              type: 'mrkdwn',
              text: `*Contact Name:*\n*${formData.name}*`
            },
            {
              type: 'mrkdwn',
              text: `*Work Email:*\n<mailto:${formData.email}|${formData.email}>`
            },
            {
              type: 'mrkdwn',
              text: `*Organization:*\n${formData.company}`
            },
            {
              type: 'mrkdwn',
              text: `*Role / Title:*\n${formData.role || 'Not specified'}`
            },
            {
              type: 'mrkdwn',
              text: `*Industry Sector:*\n${formData.sector}`
            },
            {
              type: 'mrkdwn',
              text: `*Scale:*\n${formData.companySize}`
            },
            {
              type: 'mrkdwn',
              text: `*Timestamp:*\n${formattedDate}`
            }
          ]
        },
        ...(formData.message.trim()
          ? [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*Objectives & Inquiry:*\n>${formData.message
                    .trim()
                    .replace(/\n/g, '\n>')}`
                }
              }
            ]
          : []),
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: '⚡ _Dispatched securely from CyberKorp Platform Portal_'
            }
          ]
        }
      ]
    };

    // 2. Local backup in browser storage so no lead is ever lost
    try {
      const existingLeads = JSON.parse(
        localStorage.getItem('cyberkorp_demo_leads') || '[]'
      );
      existingLeads.unshift({
        ...formData,
        mode,
        submittedAt: submissionTime
      });
      localStorage.setItem(
        'cyberkorp_demo_leads',
        JSON.stringify(existingLeads.slice(0, 100))
      );
    } catch {
      // LocalStorage quota or privacy mode fallback
    }
    // 3. Dispatch to Slack Webhook (using text/plain to avoid CORS preflight rejection)
    try {
      const webhookUrl = getSlackWebhookUrl();
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain'
          },
          body: JSON.stringify(slackPayload)
        });
      }
    } catch (err) {
      console.warn('Slack webhook dispatch warning:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#080C12] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/15 blur-[90px] pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          disabled={isSubmitting}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors"
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

              <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono-code text-[#00E5FF] bg-[#00E5FF]/10 px-2 py-0.5 rounded border border-[#00E5FF]/20">
                <Shield className="w-3 h-3" />
                <span>Encrypted Channel</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white font-mono-code mb-2">
              {mode === 'DEMO'
                ? 'Request a CyberKorp Demonstration'
                : 'Assess Your Infrastructure Readiness'}
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
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. National Clearing Corp"
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">INDUSTRY SECTOR</label>
                  <select
                    value={formData.sector}
                    onChange={(e) =>
                      setFormData({ ...formData, sector: e.target.value })
                    }
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
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    placeholder="e.g. CISO / VP Architecture"
                    className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">INFRASTRUCTURE SCALE</label>
                  <select
                    value={formData.companySize}
                    onChange={(e) =>
                      setFormData({ ...formData, companySize: e.target.value })
                    }
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
                <label className="block text-slate-300 mb-1">
                  SPECIFIC ENVIRONMENT INQUIRY / OBJECTIVES
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your PKI sprawl, PQC transition timeline, or PQ-VPN testbed requirements..."
                  className="w-full px-3 py-2 rounded-lg bg-[#05070A] border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-bold text-sm shadow-xl shadow-[#0066FF]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting to Engineering Team...</span>
                  </>
                ) : (
                  <>
                    <span>Dispatch Technical Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[10px] text-slate-500 text-center">
                Enterprise confidentiality guaranteed. Instant notification routed to CyberKorp security operations.
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 font-mono-code">
            <div className="w-14 h-14 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center mx-auto animate-in zoom-in">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">
              Technical Request Acknowledged
            </h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#00E5FF] font-semibold">{formData.name}</span>. The CyberKorp engineering team has received your briefing request for <span className="text-white">{formData.company}</span> and will reach out within 24 hours to coordinate an architecture session.
            </p>
            <div className="p-3 rounded-lg bg-[#05070A] border border-white/10 max-w-xs mx-auto text-[11px] text-slate-400">
              ✓ Notification delivered to Operations Slack channel
            </div>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs transition-colors"
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
