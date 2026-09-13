import React, { useState, useEffect } from 'react';
import { MOCK_CBOM_ASSETS } from '../../data/mockData';
import type { CryptoAsset } from '../../types';
import {
  Search,
  ChevronRight,
  ChevronLeft,
  Info,
  X,
  Copy,
  Check,
  Terminal,
  ShieldAlert,
  CheckCircle2,
  Lock,
  Layers,
  ExternalLink,
  Cpu
} from 'lucide-react';

export const InteractiveCBOM: React.FC = () => {
  const [selectedAsset, setSelectedAsset] = useState<CryptoAsset>(MOCK_CBOM_ASSETS[0]);
  const [filterType, setFilterType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const filteredAssets = MOCK_CBOM_ASSETS.filter((asset) => {
    const matchesFilter = filterType === 'ALL' || asset.type === filterType;
    const matchesSearch =
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.algorithm.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsInspectorOpen(false);
      }
    };
    if (isInspectorOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isInspectorOpen]);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleOpenInspector = (asset: CryptoAsset, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedAsset(asset);
    setIsInspectorOpen(true);
  };

  const currentIndex = filteredAssets.findIndex((a) => a.id === selectedAsset.id);
  const handlePrevAsset = () => {
    if (currentIndex > 0) {
      setSelectedAsset(filteredAssets[currentIndex - 1]);
    } else if (filteredAssets.length > 0) {
      setSelectedAsset(filteredAssets[filteredAssets.length - 1]);
    }
  };

  const handleNextAsset = () => {
    if (currentIndex < filteredAssets.length - 1) {
      setSelectedAsset(filteredAssets[currentIndex + 1]);
    } else if (filteredAssets.length > 0) {
      setSelectedAsset(filteredAssets[0]);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C12] shadow-2xl overflow-hidden relative">
      {/* Top Banner with Illustrative environment notice */}
      <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse" />
            <h3 className="text-base sm:text-lg font-bold text-white font-mono-code">
              LIVING CRYPTOGRAPHY BILL OF MATERIALS (CBOM)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Normalized cryptographic asset catalog with location, algorithm classification, and ownership links.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono-code text-slate-300">
            <Info className="w-3.5 h-3.5 text-[#00E5FF]" />
            <span>Notice: Live Telemetry Catalog</span>
          </div>
          <button
            onClick={() => handleOpenInspector(selectedAsset)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono-code font-semibold transition-colors shadow-lg shadow-[#0066FF]/20"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Open Inspector</span>
          </button>
        </div>
      </div>

      {/* Controls Bar: Search & Filter Tabs */}
      <div className="p-4 border-b border-white/5 bg-[#05070A]/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Type Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs font-mono-code scrollbar-thin">
          {['ALL', 'Certificate', 'Key', 'Algorithm', 'Endpoint', 'Protocol'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                filterType === type
                  ? 'bg-[#0066FF] text-white font-semibold shadow'
                  : 'bg-[#0D1117] text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search asset ID, algorithm, owner..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#0D1117] border border-white/10 rounded-md text-slate-200 placeholder-slate-500 focus:outline-none focus:border-[#00E5FF] font-mono-code"
          />
        </div>
      </div>

      {/* Main Table View */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs font-mono-code divide-y divide-white/5">
          <thead className="bg-[#05070A] text-slate-400">
            <tr>
              <th className="py-3 px-4 font-semibold">Asset ID & Name</th>
              <th className="py-3 px-4 font-semibold">Type</th>
              <th className="py-3 px-4 font-semibold">Algorithm / Protocol</th>
              <th className="py-3 px-4 font-semibold">Environment</th>
              <th className="py-3 px-4 font-semibold">Risk Posture</th>
              <th className="py-3 px-4 font-semibold">Migration Relevance</th>
              <th className="py-3 px-4 font-semibold text-right">Inspect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredAssets.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-slate-500">
                  No cryptographic assets matching "{searchQuery}".
                </td>
              </tr>
            ) : (
              filteredAssets.map((asset) => {
                const isSelected = selectedAsset.id === asset.id;
                return (
                  <tr
                    key={asset.id}
                    onClick={() => setSelectedAsset(asset)}
                    className={`cursor-pointer transition-all duration-150 ${
                      isSelected
                        ? 'bg-[#0066FF]/20 border-l-4 border-l-[#00E5FF]'
                        : 'hover:bg-white/[0.03] border-l-4 border-l-transparent'
                    }`}
                  >
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                        )}
                        <span className="font-semibold text-white">{asset.name}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{asset.id}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px]">
                        {asset.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="text-[#00E5FF] font-semibold">{asset.algorithm}</span>
                      {asset.protocol && (
                        <span className="text-slate-500 ml-1.5 text-[10px]">({asset.protocol})</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">{asset.environment}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold inline-flex items-center gap-1 ${
                          asset.risk === 'CRITICAL'
                            ? 'bg-[#F43F5E]/15 text-[#F43F5E] border border-[#F43F5E]/30'
                            : asset.risk === 'HIGH'
                            ? 'bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30'
                            : asset.risk === 'LOW'
                            ? 'bg-[#388BFD]/15 text-[#388BFD] border border-[#388BFD]/30'
                            : 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30'
                        }`}
                      >
                        {asset.risk === 'CRITICAL' && <ShieldAlert className="w-3 h-3" />}
                        {asset.risk === 'OPTIMAL' && <CheckCircle2 className="w-3 h-3" />}
                        {asset.risk}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium">
                      {asset.migrationRelevance}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        type="button"
                        onClick={(e) => handleOpenInspector(asset, e)}
                        className="text-[#00E5FF] hover:text-white bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 px-2.5 py-1 rounded border border-[#00E5FF]/30 inline-flex items-center gap-1 text-[11px] transition-colors"
                      >
                        <span>Detail</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Selected Asset Evidence Inspector Drawer / Details Bar */}
      <div className="p-5 sm:p-6 bg-[#0D1117] border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
              EVIDENCE-BASED ASSET TELEMETRY:
            </span>
            <span className="text-sm font-bold text-white font-mono-code px-2 py-0.5 rounded bg-white/5 border border-white/10">
              {selectedAsset.name}
            </span>
            <span className="text-[10px] text-slate-500 font-mono-code">
              ({selectedAsset.id})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs font-mono-code">
              <button
                onClick={handlePrevAsset}
                title="Previous Asset"
                className="p-1 rounded bg-[#05070A] hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleNextAsset}
                title="Next Asset"
                className="p-1 rounded bg-[#05070A] hover:bg-white/10 text-slate-400 hover:text-white border border-white/5 transition-colors"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <span className="text-xs font-mono-code text-[#00E5FF]">
              Dependencies: {selectedAsset.dependenciesCount} Upstream/Downstream
            </span>

            <button
              onClick={() => handleOpenInspector(selectedAsset)}
              className="px-3 py-1 rounded bg-[#00E5FF]/10 hover:bg-[#00E5FF]/20 text-[#00E5FF] hover:text-white border border-[#00E5FF]/30 text-xs font-mono-code font-semibold inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Inspect Deep-Dive</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Telemetry Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono-code">
          <div className="p-3 rounded-lg bg-[#05070A] border border-white/5 space-y-1.5">
            <div className="text-slate-500 text-[10px] uppercase flex items-center justify-between">
              <span>PHYSICAL / CLOUD LOCATION:</span>
              <button
                onClick={() => copyToClipboard(selectedAsset.location, 'loc')}
                className="text-slate-500 hover:text-white transition-colors"
                title="Copy location"
              >
                {copiedField === 'loc' ? (
                  <Check className="w-3 h-3 text-[#10B981]" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
              </button>
            </div>
            <div className="text-slate-200 break-all select-all font-mono-code text-[11px] leading-relaxed">
              {selectedAsset.location}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#05070A] border border-white/5 space-y-1.5">
            <div className="text-slate-500 text-[10px] uppercase">OWNING TEAM & TIER:</div>
            <div className="text-slate-200 flex items-center justify-between">
              <span>{selectedAsset.owner}</span>
              <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] text-slate-400">
                {selectedAsset.businessCriticality}
              </span>
            </div>
            <div className="text-[10px] text-slate-500">
              Environment: <span className="text-slate-300">{selectedAsset.environment}</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#05070A] border border-white/5 space-y-1.5">
            <div className="text-slate-500 text-[10px] uppercase">DATA LIFETIME & HNDL POSTURE:</div>
            <div className="text-slate-200">
              {selectedAsset.dataLifetime}
            </div>
            <div>
              {selectedAsset.hndlRelevance ? (
                <span className="inline-flex items-center gap-1 text-[#F43F5E] text-[10px] font-bold bg-[#F43F5E]/10 px-1.5 py-0.5 rounded border border-[#F43F5E]/20">
                  <ShieldAlert className="w-2.5 h-2.5" />
                  HNDL Exposed (Intercept & Decrypt Risk)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[#10B981] text-[10px] font-semibold bg-[#10B981]/10 px-1.5 py-0.5 rounded border border-[#10B981]/20">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  Not Immediately Harvest-Exposed
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Cryptographic Evidence Extract Box */}
        <div className="mt-3 p-3 rounded-lg bg-[#05070A] border border-[#00E5FF]/20 text-xs font-mono-code flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-start sm:items-center gap-2 overflow-hidden">
            <Terminal className="w-3.5 h-3.5 text-[#00E5FF] shrink-0 mt-0.5 sm:mt-0" />
            <span className="text-slate-400 font-semibold shrink-0">EVIDENCE EXTRACT:</span>
            <span className="text-[#00E5FF] truncate select-all">{selectedAsset.evidence}</span>
          </div>
          <button
            onClick={() => copyToClipboard(selectedAsset.evidence, 'evidence')}
            className="text-xs text-slate-400 hover:text-white shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
          >
            {copiedField === 'evidence' ? (
              <>
                <Check className="w-3 h-3 text-[#10B981]" />
                <span className="text-[#10B981]">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* FULL-SCREEN ASSET TELEMETRY & CBOM INSPECTOR MODAL */}
      {isInspectorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#080C12] border border-white/15 shadow-2xl shadow-black/80 overflow-hidden text-slate-200 font-sans"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-[#05070A]/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-[#0066FF]/20 border border-[#0066FF]/40 text-[#00E5FF] font-semibold">
                    {selectedAsset.id}
                  </span>
                  <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                    {selectedAsset.type}
                  </span>
                  <span
                    className={`text-xs font-mono-code px-2 py-0.5 rounded font-semibold inline-flex items-center gap-1 ${
                      selectedAsset.risk === 'CRITICAL'
                        ? 'bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/30'
                        : selectedAsset.risk === 'HIGH'
                        ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30'
                        : selectedAsset.risk === 'LOW'
                        ? 'bg-[#388BFD]/20 text-[#388BFD] border border-[#388BFD]/30'
                        : 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30'
                    }`}
                  >
                    {selectedAsset.risk} RISK
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-mono-code">
                  {selectedAsset.name}
                </h3>
              </div>

              <button
                onClick={() => setIsInspectorOpen(false)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Close Inspector (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
              {/* Section 1: Cryptographic Specification */}
              <div className="p-4 rounded-xl bg-[#0D1117] border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#00E5FF] uppercase font-bold tracking-wider">
                  <Lock className="w-3.5 h-3.5" />
                  <span>01 // Cryptographic Classification & Quantum Vulnerability</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono-code">
                  <div className="p-3 rounded-lg bg-[#05070A] border border-white/5">
                    <div className="text-slate-500 text-[10px]">ALGORITHM:</div>
                    <div className="text-base font-bold text-white mt-0.5">{selectedAsset.algorithm}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#05070A] border border-white/5">
                    <div className="text-slate-500 text-[10px]">PROTOCOL:</div>
                    <div className="text-base font-bold text-slate-200 mt-0.5">
                      {selectedAsset.protocol || 'Direct Invocation'}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#05070A] border border-white/5">
                    <div className="text-slate-500 text-[10px]">POST-QUANTUM STATUS:</div>
                    <div
                      className={`text-xs font-bold mt-1 ${
                        selectedAsset.status === 'Vulnerable to PQC'
                          ? 'text-[#F43F5E]'
                          : selectedAsset.status === 'Hybrid Ready'
                          ? 'text-[#00E5FF]'
                          : 'text-[#10B981]'
                      }`}
                    >
                      {selectedAsset.status}
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#05070A] border border-white/5">
                    <div className="text-slate-500 text-[10px]">MIGRATION RELEVANCE:</div>
                    <div className="text-xs font-bold text-white mt-1">
                      {selectedAsset.migrationRelevance}
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-[#05070A] border border-white/5 text-xs text-slate-300 leading-relaxed font-mono-code">
                  {selectedAsset.risk === 'CRITICAL' || selectedAsset.risk === 'HIGH' ? (
                    <div className="flex items-start gap-2 text-rose-300">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-[#F43F5E] mt-0.5" />
                      <span>
                        <strong>Quantum Threat Advisory:</strong> This primitive relies on integer factorization or discrete logarithms, rendering it immediately breakable by Shor's Algorithm on a Cryptographically Relevant Quantum Computer (CRQC). Recommended target: <strong>ML-KEM-768 (FIPS 203)</strong> or <strong>ML-DSA-65 (FIPS 204)</strong>.
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-start gap-2 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#10B981] mt-0.5" />
                      <span>
                        <strong>Quantum Threat Advisory:</strong> This primitive satisfies current NIST quantum-safety criteria (symmetric 256-bit entropy or post-quantum hybrid encapsulation). Regular crypto-agility rotation monitoring applies.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Section 2: Evidence Extract & Call Site */}
              <div className="p-4 rounded-xl bg-[#0D1117] border border-white/5 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-code text-[#00E5FF] uppercase font-bold tracking-wider">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>02 // Source Evidence & Infrastructure Grounding</span>
                  </div>
                  <span className="text-slate-500 font-normal lowercase">AST / X.509 telemetry</span>
                </div>

                <div className="space-y-2 text-xs font-mono-code">
                  <div className="p-3 rounded-lg bg-[#05070A] border border-white/5">
                    <div className="text-slate-500 text-[10px] mb-1 flex items-center justify-between">
                      <span>CALL SITE OR CERTIFICATE LOCATION:</span>
                      <button
                        onClick={() => copyToClipboard(selectedAsset.location, 'modal-loc')}
                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        {copiedField === 'modal-loc' ? (
                          <span className="text-[#10B981] text-[10px]">Copied</span>
                        ) : (
                          <span className="text-[10px]">Copy Path</span>
                        )}
                      </button>
                    </div>
                    <code className="text-slate-200 select-all font-mono-code break-all text-[11px]">
                      {selectedAsset.location}
                    </code>
                  </div>

                  <div className="p-3 rounded-lg bg-[#05070A] border border-[#00E5FF]/20">
                    <div className="text-slate-400 text-[10px] mb-1 flex items-center justify-between">
                      <span>VERIFIABLE EVIDENCE STRING:</span>
                      <button
                        onClick={() => copyToClipboard(selectedAsset.evidence, 'modal-ev')}
                        className="text-[#00E5FF] hover:underline inline-flex items-center gap-1"
                      >
                        {copiedField === 'modal-ev' ? (
                          <span className="text-[#10B981] text-[10px]">Copied</span>
                        ) : (
                          <span className="text-[10px]">Copy String</span>
                        )}
                      </button>
                    </div>
                    <code className="text-[#00E5FF] font-mono-code select-all text-xs block leading-relaxed">
                      {selectedAsset.evidence}
                    </code>
                  </div>
                </div>
              </div>

              {/* Section 3: Governance, Dependencies & HNDL Risk */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Governance & Blast Radius */}
                <div className="p-4 rounded-xl bg-[#0D1117] border border-white/5 space-y-3 text-xs font-mono-code">
                  <div className="flex items-center gap-2 text-[#00E5FF] uppercase font-bold tracking-wider">
                    <Layers className="w-3.5 h-3.5" />
                    <span>03 // Ownership & Blast Radius</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Owning Team:</span>
                      <span className="text-white font-semibold">{selectedAsset.owner}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Environment:</span>
                      <span className="text-white">{selectedAsset.environment}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Criticality Tier:</span>
                      <span className="text-white">{selectedAsset.businessCriticality}</span>
                    </div>
                    <div className="flex justify-between py-1.5">
                      <span className="text-slate-400">Blast Radius:</span>
                      <span className="text-[#00E5FF] font-bold">
                        {selectedAsset.dependenciesCount} Upstream & Downstream Nodes
                      </span>
                    </div>
                  </div>
                </div>

                {/* HNDL Analysis */}
                <div className="p-4 rounded-xl bg-[#0D1117] border border-white/5 space-y-3 text-xs font-mono-code">
                  <div className="flex items-center gap-2 text-[#00E5FF] uppercase font-bold tracking-wider">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>04 // HNDL & Exposure Analysis</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Data Retention:</span>
                      <span className="text-white">{selectedAsset.dataLifetime}</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-white/5">
                      <span className="text-slate-400">Harvest Exposure:</span>
                      <span
                        className={
                          selectedAsset.hndlRelevance ? 'text-[#F43F5E] font-bold' : 'text-[#10B981]'
                        }
                      >
                        {selectedAsset.hndlRelevance ? 'High (Adversary Intercept)' : 'Standard'}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 pt-1 leading-relaxed">
                      {selectedAsset.hndlRelevance
                        ? 'Confidential data encrypted with this asset exceeds the 5-year threshold, making it vulnerable to retrospective decryption once CRQC arrives.'
                        : 'Ephemerality or robust symmetric protection minimizes retrospective harvesting risk.'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-[#05070A] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-code">
              <div className="text-slate-500 text-[11px]">
                CyberKorp CBOM Spec v2.4 • Continuous Discovery Pipeline
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={() =>
                    copyToClipboard(
                      JSON.stringify(selectedAsset, null, 2),
                      'cbom-json'
                    )
                  }
                  className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors inline-flex items-center gap-1.5"
                >
                  {copiedField === 'cbom-json' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied JSON</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Export CBOM JSON</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setIsInspectorOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white font-semibold transition-colors"
                >
                  Done Inspecting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
