import React, { useState, useEffect } from 'react';
import { DEPENDENCY_GRAPH_NODES } from '../../data/mockData';
import { Network, Zap, ArrowRight } from 'lucide-react';

export const DependencyGraph: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-cert-ecdsa');
  const [animatingChain, setAnimatingChain] = useState<boolean>(false);
  const [activeChainIndex, setActiveChainIndex] = useState<number>(-1);
  const [migrationPhase, setMigrationPhase] = useState<
    'CURRENT STATE' | 'ASSESSMENT' | 'MIGRATION PLAN' | 'REMEDIATION' | 'VALIDATION'
  >('CURRENT STATE');

  // The signature demonstration chain requested:
  // ECDSA-P256 Certificate -> Enterprise PKI -> API Gateway -> Payment Service -> Customer Application
  const signatureChain = [
    'node-cert-ecdsa',
    'node-pki',
    'node-api-gw',
    'node-payment-svc',
    'node-customer-app'
  ];

  const selectedNode =
    DEPENDENCY_GRAPH_NODES.find((n) => n.id === selectedNodeId) ||
    DEPENDENCY_GRAPH_NODES[0];

  // Animate the cascade ripple through the signature chain
  const triggerSignatureCascade = () => {
    setAnimatingChain(true);
    setActiveChainIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      if (step < signatureChain.length) {
        setActiveChainIndex(step);
        setSelectedNodeId(signatureChain[step]);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setAnimatingChain(false);
          setActiveChainIndex(-1);
          setSelectedNodeId('node-cert-ecdsa');
        }, 1200);
      }
    }, 600);
  };

  // Helper to advance migration phase stepper
  const handleNextPhase = () => {
    const phases: Array<
      'CURRENT STATE' | 'ASSESSMENT' | 'MIGRATION PLAN' | 'REMEDIATION' | 'VALIDATION'
    > = ['CURRENT STATE', 'ASSESSMENT', 'MIGRATION PLAN', 'REMEDIATION', 'VALIDATION'];
    const nextIdx = (phases.indexOf(migrationPhase) + 1) % phases.length;
    setMigrationPhase(phases[nextIdx]);
  };

  // Run cascade animation on initial mount to delight visitor
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerSignatureCascade();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C12] shadow-2xl overflow-hidden relative">
      {/* Top Controller Bar */}
      <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-[#00E5FF]" />
            <h3 className="text-base sm:text-lg font-bold text-white font-mono-code">
              SIGNATURE CRYPTOGRAPHIC DEPENDENCY TOPOLOGY
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Trace cascading ripple impact across enterprise PKI, ingress gateways, and customer applications.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={triggerSignatureCascade}
            disabled={animatingChain}
            className="px-3.5 py-1.5 rounded-lg bg-[#F43F5E]/15 hover:bg-[#F43F5E]/25 border border-[#F43F5E]/40 text-[#F43F5E] text-xs font-mono-code font-semibold transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Zap className={`w-3.5 h-3.5 ${animatingChain ? 'animate-bounce' : ''}`} />
            <span>{animatingChain ? 'Simulating Blast Radius...' : 'What happens if I change this?'}</span>
          </button>

          <button
            onClick={handleNextPhase}
            className="px-3.5 py-1.5 rounded-lg bg-[#0066FF] hover:bg-[#0052cc] text-white text-xs font-mono-code font-semibold transition-all flex items-center gap-1.5 shadow-lg shadow-[#0066FF]/20"
          >
            <span>View Migration Path</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Canvas & Side Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Center: Interactive Topology Canvas */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#05070A] relative flex flex-col justify-between overflow-x-auto">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

          {/* Migration Path Stepper Strip */}
          <div className="relative z-10 pb-5 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-code">
            <span className="text-slate-500 uppercase tracking-wider text-[10px]">
              TRANSFORMATION LIFECYCLE:
            </span>
            <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
              {(
                [
                  'CURRENT STATE',
                  'ASSESSMENT',
                  'MIGRATION PLAN',
                  'REMEDIATION',
                  'VALIDATION'
                ] as const
              ).map((phase, idx) => (
                <button
                  key={phase}
                  onClick={() => setMigrationPhase(phase)}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all flex items-center gap-1 ${
                    migrationPhase === phase
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/40'
                      : 'text-slate-500 hover:text-slate-300 border border-transparent'
                  }`}
                >
                  <span>{idx + 1}.</span>
                  <span>{phase}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Architecture Topology Diagram */}
          <div className="relative z-10 py-8 flex flex-col items-center gap-4 min-w-[500px]">
            {/* Step 1: Root Node — ECDSA-P256 Certificate */}
            <div className="w-full max-w-sm">
              {(() => {
                const node = DEPENDENCY_GRAPH_NODES.find((n) => n.id === 'node-cert-ecdsa')!;
                const isSelected = selectedNodeId === node.id;
                const isInRipple = activeChainIndex === 0;
                return (
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 text-center ${
                      isInRipple
                        ? 'bg-[#F43F5E]/30 border-[#F43F5E] shadow-xl shadow-[#F43F5E]/40 scale-105 ring-2 ring-[#F43F5E]'
                        : isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg ring-2 ring-[#00E5FF]/50 scale-105'
                        : 'bg-[#080C12] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-[#F43F5E] font-bold">ROOT ASSET // DEPTH 1</span>
                      <span className="text-slate-400">{node.category}</span>
                    </div>
                    <div className="text-sm font-bold text-white font-mono-code">
                      {node.label}
                    </div>
                    <div className="text-[11px] text-[#00E5FF] font-mono-code mt-0.5">
                      {node.algorithm}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Connecting Vector 1 */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500">
              <span className={`transition-colors ${activeChainIndex >= 1 ? 'text-[#00E5FF] font-bold animate-pulse' : ''}`}>
                ↓ Issues & Validates Trust Anchor
              </span>
            </div>

            {/* Step 2: Enterprise PKI */}
            <div className="w-full max-w-sm">
              {(() => {
                const node = DEPENDENCY_GRAPH_NODES.find((n) => n.id === 'node-pki')!;
                const isSelected = selectedNodeId === node.id;
                const isInRipple = activeChainIndex === 1;
                return (
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 text-center ${
                      isInRipple
                        ? 'bg-[#F43F5E]/30 border-[#F43F5E] shadow-xl shadow-[#F43F5E]/40 scale-105 ring-2 ring-[#F43F5E]'
                        : isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg ring-2 ring-[#00E5FF]/50 scale-105'
                        : 'bg-[#080C12] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-slate-400">DEPTH 2</span>
                      <span className="text-[#00E5FF]">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-code mt-0.5">
                      {node.algorithm}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Connecting Vector 2 */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500">
              <span className={`transition-colors ${activeChainIndex >= 2 ? 'text-[#00E5FF] font-bold animate-pulse' : ''}`}>
                ↓ Ingress mTLS / TLS 1.3 Termination
              </span>
            </div>

            {/* Step 3: API Gateway */}
            <div className="w-full max-w-sm">
              {(() => {
                const node = DEPENDENCY_GRAPH_NODES.find((n) => n.id === 'node-api-gw')!;
                const isSelected = selectedNodeId === node.id;
                const isInRipple = activeChainIndex === 2;
                return (
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 text-center ${
                      isInRipple
                        ? 'bg-[#F43F5E]/30 border-[#F43F5E] shadow-xl shadow-[#F43F5E]/40 scale-105 ring-2 ring-[#F43F5E]'
                        : isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg ring-2 ring-[#00E5FF]/50 scale-105'
                        : 'bg-[#080C12] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-slate-400">DEPTH 2</span>
                      <span className="text-[#8B5CF6]">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-code mt-0.5">
                      {node.algorithm}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Connecting Vector 3 */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500">
              <span className={`transition-colors ${activeChainIndex >= 3 ? 'text-[#00E5FF] font-bold animate-pulse' : ''}`}>
                ↓ Internal Transaction Dispatch
              </span>
            </div>

            {/* Step 4: Payment Service */}
            <div className="w-full max-w-sm">
              {(() => {
                const node = DEPENDENCY_GRAPH_NODES.find((n) => n.id === 'node-payment-svc')!;
                const isSelected = selectedNodeId === node.id;
                const isInRipple = activeChainIndex === 3;
                return (
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 text-center ${
                      isInRipple
                        ? 'bg-[#F43F5E]/30 border-[#F43F5E] shadow-xl shadow-[#F43F5E]/40 scale-105 ring-2 ring-[#F43F5E]'
                        : isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg ring-2 ring-[#00E5FF]/50 scale-105'
                        : 'bg-[#080C12] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-slate-400">DEPTH 3</span>
                      <span className="text-[#F59E0B]">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-code mt-0.5">
                      {node.algorithm}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Connecting Vector 4 */}
            <div className="flex items-center gap-2 text-xs font-mono-code text-slate-500">
              <span className={`transition-colors ${activeChainIndex >= 4 ? 'text-[#00E5FF] font-bold animate-pulse' : ''}`}>
                ↓ Pinning Anti-Tamper Verification
              </span>
            </div>

            {/* Step 5: Customer Application */}
            <div className="w-full max-w-sm">
              {(() => {
                const node = DEPENDENCY_GRAPH_NODES.find((n) => n.id === 'node-customer-app')!;
                const isSelected = selectedNodeId === node.id;
                const isInRipple = activeChainIndex === 4;
                return (
                  <div
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-300 text-center ${
                      isInRipple
                        ? 'bg-[#F43F5E]/30 border-[#F43F5E] shadow-xl shadow-[#F43F5E]/40 scale-105 ring-2 ring-[#F43F5E]'
                        : isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg ring-2 ring-[#00E5FF]/50 scale-105'
                        : 'bg-[#080C12] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-slate-400">DEPTH 4 // TERMINUS</span>
                      <span className="text-[#10B981]">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">
                      {node.label}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono-code mt-0.5">
                      {node.algorithm}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Graph Footer Caption */}
          <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono-code text-slate-400">
            <span>Click any node in the chain to inspect live dependencies.</span>
            <span className="text-[#00E5FF]">
              Chain Blast Radius: 12 Connected Services & Endpoints
            </span>
          </div>
        </div>

        {/* Right: Signature Side Inspector Panel */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#080C12] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Header Telemetry Fields */}
            <div>
              <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400 mb-1 flex items-center justify-between">
                <span>CRYPTOGRAPHIC ASSET</span>
                <span className="text-[#00E5FF] font-semibold">{selectedNode.id}</span>
              </div>
              <div className="text-xl font-bold text-white font-mono-code">
                {selectedNode.algorithm || 'ECDSA-P256'}
              </div>
              <div className="text-xs text-slate-400 font-mono-code mt-0.5">
                {selectedNode.label}
              </div>
            </div>

            {/* Core Metrics Table requested */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 space-y-2.5 font-mono-code text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">DEPENDENT ASSETS</span>
                <span className="text-white font-bold">12</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">BUSINESS CRITICALITY</span>
                <span className="text-[#F43F5E] font-bold">High</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">MIGRATION RELEVANCE</span>
                <span className="text-[#F59E0B] font-bold">High</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">STATUS</span>
                <span className="text-[#00E5FF] font-semibold">Requires assessment</span>
              </div>
            </div>

            {/* Signature Question & Impact Box */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-[#00E5FF]/20 space-y-2 font-mono-code">
              <div className="text-xs font-bold text-[#00E5FF] flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[#00E5FF]" />
                <span>WHAT HAPPENS IF I CHANGE THIS?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Altering this root certificate without pre-migrating the API Gateway trust store causes TLS handshake negotiation failures across the payment service, breaking 5.2M pinned client applications.
              </p>
            </div>

            {/* Current Phase Context */}
            <div className="p-4 rounded-xl bg-[#05070A] border border-white/5 font-mono-code space-y-2 text-xs">
              <div className="text-[10px] text-slate-400 uppercase flex items-center justify-between">
                <span>ACTIVE PHASE:</span>
                <span className="text-[#00E5FF] font-bold">{migrationPhase}</span>
              </div>
              <div className="text-slate-300 text-[11px] leading-relaxed">
                {migrationPhase === 'CURRENT STATE' &&
                  'As-is architecture with classical ECDSA-P256 vulnerable to retrospective CRQC harvest.'}
                {migrationPhase === 'ASSESSMENT' &&
                  'Correlating call sites, data lifetime, and verifying certificate pinning constraints.'}
                {migrationPhase === 'MIGRATION PLAN' &&
                  'Targeting dual-signature hybrid shim (ML-KEM-768 / ML-DSA-65) with backward compatibility.'}
                {migrationPhase === 'REMEDIATION' &&
                  'Executing phased rollout via SeQureit Agility Proxy to avoid client service disruption.'}
                {migrationPhase === 'VALIDATION' &&
                  'Zero-regression validation gate ensures all downstream APIs negotiate without error.'}
              </div>
            </div>
          </div>

          {/* Action Button: View Migration Path */}
          <div className="pt-6 mt-6 border-t border-white/10">
            <button
              onClick={handleNextPhase}
              className="w-full py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052cc] text-white font-bold text-xs font-mono-code shadow-lg shadow-[#0066FF]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>View Migration Path ({migrationPhase})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
