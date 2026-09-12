import React, { useState } from 'react';
import { Cpu, CheckCircle2, ChevronRight } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<number>(0);

  const architectureLayers = [
    {
      layer: '01',
      name: 'INGESTION & CONNECTOR LAYER',
      tag: 'Working & Roadmap Connectors',
      status: 'Multi-Surface Ingestion',
      components: ['Git AST Extractors (Working)', 'TLS Endpoint Probers (Working)', 'Cloud KMS Connectors (Working)', 'K8s Sidecar Agents (In Dev)', 'Linux OS Probers (In Dev)'],
      description: 'Distributed lightweight probes extract cryptographic primitives, algorithm calls, certificate fingerprints, and key parameters without transmitting confidential payload data.'
    },
    {
      layer: '02',
      name: 'PARSING & NORMALIZATION ENGINE',
      tag: 'Canonical Schema',
      status: 'Working Core',
      components: ['Algorithm Normalizer', 'Cipher Suite Disassembler', 'Parameter Extractor', 'X.509 Chain Deconstructor'],
      description: 'Converts disparate outputs from compilers, network handshakes, and cloud registries into standardized, machine-readable cryptographic schemas.'
    },
    {
      layer: '03',
      name: 'CRYPTOGRAPHY BILL OF MATERIALS (CBOM)',
      tag: 'Living Inventory',
      status: 'Working Core',
      components: ['Asset Relationship Store', 'Lifecycle Indexer', 'Evidence Attestation Ledger', 'Baseline Reconciler'],
      description: 'Maintains an immutable, versioned catalog of all cryptographic assets with evidence grounding tied directly to code commits or hardware serials.'
    },
    {
      layer: '04',
      name: 'RELATIONAL DEPENDENCY GRAPH',
      tag: 'Graph Topology',
      status: 'Working Core',
      components: ['Blast Radius Engine', 'Trust Anchor Correlator', 'Transitive Link Analyzer', 'Multi-Hop Path Finder'],
      description: 'Models the interconnected graph of cryptographic trust, tracing dependencies from leaf API calls through intermediate CAs and hardware security modules.'
    },
    {
      layer: '05',
      name: 'CONTEXTUAL RISK & HNDL ENGINE',
      tag: 'Multi-Factor Assessment',
      status: 'Working Core',
      components: ['Data Shelf-Life Calculator', 'NIST PQC Vulnerability Scorer', 'Exposure Surface Evaluator', 'Policy Weighting Matrix'],
      description: 'Evaluates algorithm vulnerability against adversary retention horizons and business criticality, avoiding blanket alerts and false priorities.'
    },
    {
      layer: '06',
      name: 'REMEDIATION & AGILITY PLANE',
      tag: 'Execution & Control',
      status: 'PQ-VPN Live / Roadmap Suite',
      components: ['PQ-VPN Gateway (Live)', 'PQC Hybrid Shims (In Dev)', 'Dual-Sign PKI Orchestrator (In Dev)', 'Continuous Verification Loop (In Dev)'],
      description: 'Coordinates remediation across hybrid post-quantum tunnels, assisted developer refactoring recipes, and continuous crypto-agility monitoring.'
    }
  ];

  return (
    <section id="technology" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>DEEP-TECH SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ENGINEERED AROUND <br />
            <span className="text-[#00E5FF]">CRYPTOGRAPHIC INTELLIGENCE.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            SeQureit is architected as an end-to-end intelligence and control pipeline—from multi-surface discovery probes to automated dependency correlation and post-quantum remediation.
          </p>
        </div>

        {/* Technical Architecture Blueprint Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Layer Selector Stack */}
          <div className="lg:col-span-5 space-y-2.5">
            {architectureLayers.map((layer, idx) => {
              const isSelected = selectedLayer === idx;
              return (
                <div
                  key={layer.layer}
                  onClick={() => setSelectedLayer(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#0D1117] border-[#00E5FF]/50 shadow-xl shadow-[#0066FF]/20 ring-1 ring-[#00E5FF]/30'
                      : 'bg-[#05070A] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <span className={`text-xs font-mono-code font-bold px-2 py-0.5 rounded ${isSelected ? 'bg-[#00E5FF]/20 text-[#00E5FF]' : 'bg-white/5 text-slate-500'}`}>
                        L{layer.layer}
                      </span>
                      <span className={`text-xs font-bold font-mono-code tracking-tight ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {layer.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-[#00E5FF]' : 'text-slate-600'}`} />
                  </div>

                  <div className="text-[11px] text-slate-400 font-mono-code flex items-center justify-between pl-8">
                    <span>{layer.tag}</span>
                    <span className="text-[#00E5FF] text-[10px]">{layer.status}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Layer Deep Blueprint */}
          <div className="lg:col-span-7 rounded-2xl bg-[#05070A] border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#0066FF]/10 blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-[10px] font-mono-code text-slate-400 uppercase tracking-wider">
                    BLUEPRINT SPECIFICATION
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono-code mt-0.5">
                    LAYER {architectureLayers[selectedLayer].layer} // {architectureLayers[selectedLayer].name}
                  </h3>
                </div>
                <span className="text-xs font-mono-code px-2.5 py-1 rounded bg-[#0066FF]/15 text-[#00E5FF] border border-[#0066FF]/30">
                  {architectureLayers[selectedLayer].status}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {architectureLayers[selectedLayer].description}
              </p>

              {/* Internal Sub-components */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                  Architectural Modules & Subsystems:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {architectureLayers[selectedLayer].components.map((comp, i) => (
                    <div key={i} className="p-3 rounded-lg bg-[#080C12] border border-white/5 flex items-center gap-2.5 text-xs font-mono-code text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF] shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code text-slate-500">
              <span>SeQureit Deep-Tech Pipeline</span>
              <span className="text-slate-400">Layer {architectureLayers[selectedLayer].layer} of 06</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
