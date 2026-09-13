import React, { useState } from 'react';
import { Sliders, Info } from 'lucide-react';

interface RiskDataPoint {
  id: string;
  name: string;
  x: number; // Asset Criticality (0 to 100)
  y: number; // Cryptographic Vulnerability (0 to 100)
  category: string;
  algorithm: string;
  hndlExposed: boolean;
  notes: string;
}

const SAMPLE_RISK_POINTS: RiskDataPoint[] = [
  { id: '1', name: 'SWIFT Ingress Gateway', x: 92, y: 88, category: 'Banking', algorithm: 'RSA-2048', hndlExposed: true, notes: 'High business criticality with 10-year retention ledger records.' },
  { id: '2', name: 'Tactical IPsec Backbone', x: 95, y: 94, category: 'Defence', algorithm: 'ECDH-P384', hndlExposed: true, notes: 'Classified telemetry exposed to ongoing adversary interception.' },
  { id: '3', name: 'Citizen ID Auth Token', x: 86, y: 82, category: 'Government', algorithm: 'ECDSA-P256', hndlExposed: true, notes: 'National identity signature verification with broad partner surface.' },
  { id: '4', name: 'Internal SRE Monitoring', x: 35, y: 70, category: 'Infra', algorithm: 'RSA-1024', hndlExposed: false, notes: 'Deprecated cipher, but ephemeral internal metrics with low sensitivity.' },
  { id: '5', name: 'Primary DB Tablespace', x: 88, y: 22, category: 'Data', algorithm: 'AES-256-GCM', hndlExposed: false, notes: 'Symmetric encryption with 256-bit entropy; quantum-resistant margin.' },
  { id: '6', name: 'Edge CDN Cache TLS', x: 74, y: 78, category: 'Web', algorithm: 'TLS 1.2 / RSA', hndlExposed: true, notes: 'Public internet-facing edge; vulnerable to passive TLS capture.' },
  { id: '7', name: 'Dev Cluster K8s Ingress', x: 28, y: 40, category: 'DevOps', algorithm: 'ECDSA-P256', hndlExposed: false, notes: 'Staging environment without production secrets or sensitive telemetry.' }
];

export const RiskMatrixSection: React.FC = () => {
  const [selectedPoint, setSelectedPoint] = useState<RiskDataPoint | null>(SAMPLE_RISK_POINTS[0]);
  const [hndlOnly, setHndlOnly] = useState<boolean>(false);
  const [activeWeighting, setActiveWeighting] = useState<'BALANCED' | 'DATA_RETENTION' | 'EXPOSURE'>('BALANCED');

  const visiblePoints = SAMPLE_RISK_POINTS.filter((p) => (hndlOnly ? p.hndlExposed : true));

  return (
    <section className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F43F5E]/10 border border-[#F43F5E]/30 text-xs font-mono-code text-[#F43F5E] mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>CONTEXTUAL RISK MODELING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            NOT ALL CRYPTOGRAPHY <br />
            <span className="text-[#00E5FF]">IS EQUALLY IMPORTANT.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            A deprecated cipher on an ephemeral internal metrics cache does not carry the same risk as an RSA key protecting 20-year sovereign secrets. CyberKorp correlates algorithm vulnerability, exposure surface, and data lifetime to prioritize what matters.
          </p>
          <div className="mt-4 text-xs font-mono-code text-slate-400 flex items-center gap-2">
            <Info className="w-4 h-4 text-[#00E5FF] shrink-0" />
            <span>Note: Configurable risk weighting engine. Demo displays illustrative environment values.</span>
          </div>
        </div>

        {/* 2D Risk Matrix & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* 2D Quadrant Matrix Canvas */}
          <div className="lg:col-span-8 rounded-2xl bg-[#05070A] border border-white/10 p-6 shadow-2xl relative flex flex-col justify-between">
            {/* Top Filter Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono-code">
              <div className="flex items-center gap-2">
                <span className="text-slate-400">PERSPECTIVE:</span>
                <button
                  onClick={() => setHndlOnly(!hndlOnly)}
                  className={`px-3 py-1 rounded border transition-colors ${
                    hndlOnly
                      ? 'bg-[#F43F5E]/20 text-[#F43F5E] border-[#F43F5E]/40 font-bold'
                      : 'bg-[#0D1117] text-slate-400 border-white/5 hover:text-white'
                  }`}
                >
                  {hndlOnly ? '● HNDL Exposed Only' : '○ Show All Assets'}
                </button>
              </div>

              <div className="flex items-center gap-1 text-[11px]">
                <span className="text-slate-500 mr-1">MODEL:</span>
                {(['BALANCED', 'DATA_RETENTION', 'EXPOSURE'] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setActiveWeighting(m)}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeWeighting === m
                        ? 'bg-[#0066FF]/20 text-[#00E5FF] border border-[#0066FF]/40'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Matrix Plot Container */}
            <div className="relative w-full h-[380px] sm:h-[420px] my-6 border-l-2 border-b-2 border-slate-700">
              {/* Quadrant Backgrounds */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F43F5E]/5 border-l border-b border-white/[0.04] p-3 text-right">
                <span className="text-[10px] font-mono-code font-bold text-[#F43F5E] uppercase tracking-wider">
                  QUADRANT 01: CRITICAL (IMMEDIATE ACTION)
                </span>
              </div>
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#F59E0B]/5 border-b border-white/[0.04] p-3">
                <span className="text-[10px] font-mono-code font-bold text-[#F59E0B] uppercase tracking-wider">
                  QUADRANT 02: HIGH (PLAN RE-ENGINEERING)
                </span>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#0066FF]/5 border-l border-white/[0.04] p-3 text-right flex items-end justify-end">
                <span className="text-[10px] font-mono-code font-bold text-[#388BFD] uppercase tracking-wider">
                  QUADRANT 03: MEDIUM (SCHEDULE AUDIT)
                </span>
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#10B981]/5 p-3 flex items-end">
                <span className="text-[10px] font-mono-code font-bold text-[#10B981] uppercase tracking-wider">
                  QUADRANT 04: LOW / RESILIENT
                </span>
              </div>

              {/* Plotted Asset Nodes */}
              {visiblePoints.map((point) => {
                const isSelected = selectedPoint?.id === point.id;
                return (
                  <div
                    key={point.id}
                    onClick={() => setSelectedPoint(point)}
                    style={{
                      left: `${point.x}%`,
                      bottom: `${point.y}%`
                    }}
                    className={`absolute -translate-x-1/2 translate-y-1/2 cursor-pointer transition-all duration-300 group z-20`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform ${
                        isSelected
                          ? 'scale-125 ring-4 ring-[#00E5FF]/40 bg-[#00E5FF]'
                          : point.y > 75 && point.x > 75
                          ? 'bg-[#F43F5E] shadow-lg shadow-[#F43F5E]/40'
                          : point.y > 60
                          ? 'bg-[#F59E0B]'
                          : 'bg-[#10B981]'
                      }`}
                    >
                      <span className="text-[9px] font-bold text-black font-mono-code">
                        {point.id}
                      </span>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#080C12] border border-white/20 px-2 py-1 rounded text-[10px] font-mono-code text-white pointer-events-none shadow-lg">
                      {point.name} ({point.algorithm})
                    </div>
                  </div>
                );
              })}

              {/* Axis Labels */}
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs font-mono-code text-slate-400">
                Asset Business Criticality & Exposure ➔
              </div>
              <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-mono-code text-slate-400 whitespace-nowrap">
                Cryptographic Vulnerability & HNDL Risk ➔
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
              <span>Dynamic scatter plot reflects current policy matrix weights.</span>
              <span className="text-slate-400">Click points to view risk breakdown</span>
            </div>
          </div>

          {/* Point Inspector Details */}
          <div className="lg:col-span-4 rounded-2xl bg-[#080C12] border border-white/10 p-6 shadow-2xl flex flex-col justify-between">
            {selectedPoint ? (
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400 mb-2">
                  <span>SELECTED ASSET TELEMETRY</span>
                  <span className="text-[#00E5FF]">ID: {selectedPoint.id}</span>
                </div>
                <h4 className="text-lg font-bold text-white font-mono-code mb-1">
                  {selectedPoint.name}
                </h4>
                <div className="text-xs text-slate-400 mb-4">{selectedPoint.notes}</div>

                <div className="space-y-3 text-xs font-mono-code">
                  <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                    <span className="text-slate-400">ALGORITHM:</span>
                    <span className="text-[#00E5FF] font-semibold">{selectedPoint.algorithm}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                    <span className="text-slate-400">SECTOR DOMAIN:</span>
                    <span className="text-white font-semibold">{selectedPoint.category}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                    <span className="text-slate-400">CRITICALITY SCORE:</span>
                    <span className="text-white font-semibold">{selectedPoint.x} / 100</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between">
                    <span className="text-slate-400">VULNERABILITY INDEX:</span>
                    <span className="text-[#F43F5E] font-semibold">{selectedPoint.y} / 100</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between items-center">
                    <span className="text-slate-400">HNDL EXPOSURE:</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                        selectedPoint.hndlExposed
                          ? 'bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30'
                          : 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30'
                      }`}
                    >
                      {selectedPoint.hndlExposed ? 'HIGH RETENTION RISK' : 'LOW RISK'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 font-mono-code text-xs">
                Select an asset point on the matrix to review threat breakdown.
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono-code text-slate-400">
              Risk scores adapt dynamically to organizational data retention guidelines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
