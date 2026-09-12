import React, { useState } from 'react';
import { DEPENDENCY_GRAPH_NODES } from '../../data/mockData';
import { Network, Play, Zap, ArrowRight } from 'lucide-react';

export const DependencyGraph: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-cert-ecdsa');
  const [simulationActive, setSimulationActive] = useState<boolean>(false);
  const [migrationStep, setMigrationStep] = useState<'CURRENT' | 'ASSESSMENT' | 'PLAN' | 'REMEDIATION' | 'VALIDATION'>('CURRENT');

  const selectedNode = DEPENDENCY_GRAPH_NODES.find((n) => n.id === selectedNodeId) || DEPENDENCY_GRAPH_NODES[0];

  // Helper function to find all recursive downstream dependencies
  const getDownstreamNodeIds = (startId: string): string[] => {
    const visited = new Set<string>();
    const queue = [startId];
    while (queue.length > 0) {
      const current = queue.shift()!;
      const node = DEPENDENCY_GRAPH_NODES.find((n) => n.id === current);
      if (node) {
        for (const dep of node.dependencies) {
          if (!visited.has(dep)) {
            visited.add(dep);
            queue.push(dep);
          }
        }
      }
    }
    return Array.from(visited);
  };

  const downstreamIds = getDownstreamNodeIds(selectedNodeId);

  const triggerImpactSimulation = () => {
    setSimulationActive(true);
    setTimeout(() => {
      setSimulationActive(false);
    }, 3500);
  };

  const advanceMigrationPath = () => {
    const steps: Array<'CURRENT' | 'ASSESSMENT' | 'PLAN' | 'REMEDIATION' | 'VALIDATION'> = [
      'CURRENT',
      'ASSESSMENT',
      'PLAN',
      'REMEDIATION',
      'VALIDATION'
    ];
    const nextIdx = (steps.indexOf(migrationStep) + 1) % steps.length;
    setMigrationStep(steps[nextIdx]);
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C12] shadow-2xl overflow-hidden relative">
      {/* Top Banner */}
      <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Network className="w-4 h-4 text-[#00E5FF]" />
            <h3 className="text-base sm:text-lg font-bold text-white font-mono-code">
              INTERACTIVE CRYPTOGRAPHIC DEPENDENCY TOPOLOGY
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Click any node to trace cascading blast radius, downstream service impact, and migration paths.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={triggerImpactSimulation}
            disabled={simulationActive}
            className="px-3 py-1.5 rounded-md bg-[#F43F5E]/15 border border-[#F43F5E]/40 text-[#F43F5E] hover:bg-[#F43F5E]/25 text-xs font-mono-code transition-all flex items-center gap-1.5"
          >
            <Zap className={`w-3.5 h-3.5 ${simulationActive ? 'animate-bounce' : ''}`} />
            <span>{simulationActive ? 'Simulating Blast Radius...' : 'What happens if I change this?'}</span>
          </button>

          <button
            onClick={advanceMigrationPath}
            className="px-3 py-1.5 rounded-md bg-[#0066FF] text-white hover:bg-[#0052CC] text-xs font-mono-code transition-all flex items-center gap-1.5 shadow"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Path: {migrationStep}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Graph Canvas & Side Inspector Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Graph Display Area */}
        <div className="lg:col-span-8 p-6 bg-[#05070A] relative min-h-[460px] flex flex-col justify-between overflow-x-auto">
          {/* Subtle Cyber Grid */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

          {/* Migration Path Indicator Banner */}
          <div className="relative z-10 flex items-center gap-2 text-[11px] font-mono-code pb-4 border-b border-white/5">
            <span className="text-slate-500">TRANSFORMATION STAGE:</span>
            <div className="flex items-center gap-1.5">
              {(['CURRENT', 'ASSESSMENT', 'PLAN', 'REMEDIATION', 'VALIDATION'] as const).map((step) => (
                <span
                  key={step}
                  onClick={() => setMigrationStep(step)}
                  className={`cursor-pointer px-2 py-0.5 rounded border transition-colors ${
                    migrationStep === step
                      ? 'bg-[#00E5FF]/20 text-[#00E5FF] border-[#00E5FF]/40 font-bold'
                      : 'text-slate-500 border-transparent hover:text-slate-300'
                  }`}
                >
                  {step}
                </span>
              ))}
            </div>
          </div>

          {/* Node Architecture Map */}
          <div className="relative z-10 my-8 flex flex-col gap-6">
            {/* Level 1: Ingress / Root Cert */}
            <div className="flex justify-center">
              {DEPENDENCY_GRAPH_NODES.filter((n) => n.depth === 1).map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3.5 rounded-xl border transition-all duration-200 w-64 ${
                      isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-xl shadow-[#0066FF]/30 ring-2 ring-[#00E5FF]/40 scale-105'
                        : 'bg-[#080C12] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-[#F43F5E] font-bold">DEPTH {node.depth} // ROOT INGRESS</span>
                      <span className="text-slate-400">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">{node.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{node.algorithm}</div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Vertical Vectors */}
            <div className="flex justify-around px-16 text-slate-600 text-xs font-mono-code select-none pointer-events-none">
              <span className={`transition-colors ${simulationActive ? 'text-[#00E5FF] animate-pulse' : ''}`}>↓ mTLS Trust</span>
              <span className={`transition-colors ${simulationActive ? 'text-[#00E5FF] animate-pulse' : ''}`}>↓ TLS 1.3 Termination</span>
            </div>

            {/* Level 2: PKI & Gateway */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto w-full">
              {DEPENDENCY_GRAPH_NODES.filter((n) => n.depth === 2).map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isDownstream = downstreamIds.includes(node.id);
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3 rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg shadow-[#0066FF]/30 ring-2 ring-[#00E5FF]/40'
                        : isDownstream && simulationActive
                        ? 'bg-[#F43F5E]/20 border-[#F43F5E] animate-pulse shadow-md shadow-[#F43F5E]/30'
                        : isDownstream
                        ? 'bg-[#0D1117] border-[#00E5FF]/40'
                        : 'bg-[#080C12] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-slate-400">DEPTH {node.depth}</span>
                      <span className="text-[#00E5FF]">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">{node.label}</div>
                    <div className="text-[10px] text-slate-400">{node.algorithm}</div>
                  </div>
                );
              })}
            </div>

            {/* Connecting Vectors */}
            <div className="flex justify-around px-16 text-slate-600 text-xs font-mono-code select-none pointer-events-none">
              <span className={`transition-colors ${simulationActive ? 'text-[#00E5FF] animate-pulse' : ''}`}>↓ PKCS#11 HSM</span>
              <span className={`transition-colors ${simulationActive ? 'text-[#00E5FF] animate-pulse' : ''}`}>↓ Internal RPC</span>
            </div>

            {/* Level 3: HSM & Payment API */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto w-full">
              {DEPENDENCY_GRAPH_NODES.filter((n) => n.depth === 3).map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isDownstream = downstreamIds.includes(node.id);
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-3 rounded-xl border transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] shadow-lg ring-2 ring-[#00E5FF]/40'
                        : isDownstream && simulationActive
                        ? 'bg-[#F43F5E]/20 border-[#F43F5E] animate-pulse shadow-md shadow-[#F43F5E]/30'
                        : isDownstream
                        ? 'bg-[#0D1117] border-[#00E5FF]/40'
                        : 'bg-[#080C12] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono-code mb-1">
                      <span className="text-slate-400">DEPTH {node.depth}</span>
                      <span className="text-[#8B5CF6]">{node.category}</span>
                    </div>
                    <div className="text-xs font-bold text-white font-mono-code">{node.label}</div>
                    <div className="text-[10px] text-slate-400">{node.algorithm}</div>
                  </div>
                );
              })}
            </div>

            {/* Level 4 & 5: Downstream Services, DB & Mobile Apps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto w-full pt-2">
              {DEPENDENCY_GRAPH_NODES.filter((n) => n.depth >= 4).map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isDownstream = downstreamIds.includes(node.id);
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`cursor-pointer p-2.5 rounded-lg border transition-all duration-200 ${
                      isSelected
                        ? 'bg-[#0066FF]/25 border-[#00E5FF] ring-2 ring-[#00E5FF]/40'
                        : isDownstream && simulationActive
                        ? 'bg-[#F43F5E]/20 border-[#F43F5E] animate-pulse'
                        : isDownstream
                        ? 'bg-[#0D1117] border-[#00E5FF]/30'
                        : 'bg-[#080C12] border-white/10'
                    }`}
                  >
                    <div className="text-[9px] font-mono-code text-slate-400 flex justify-between">
                      <span>D{node.depth}</span>
                      <span>{node.category}</span>
                    </div>
                    <div className="text-[11px] font-bold text-white font-mono-code truncate">{node.label}</div>
                    <div className="text-[9px] text-slate-400 truncate">{node.algorithm}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Graph Footer Notice */}
          <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono-code text-slate-500">
            <span>Graph shows direct & transitive cryptographic dependencies.</span>
            <span className="text-[#00E5FF]">
              {downstreamIds.length} Nodes In Blast Radius
            </span>
          </div>
        </div>

        {/* Side Inspector Panel */}
        <div className="lg:col-span-4 p-6 bg-[#080C12] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
          <div>
            <div className="text-[10px] font-mono-code uppercase tracking-wider text-slate-400 mb-2">
              SELECTED ASSET TELEMETRY
            </div>
            <h4 className="text-xl font-bold text-white font-mono-code mb-1">
              {selectedNode.label}
            </h4>
            <div className="text-xs text-slate-400 mb-4">{selectedNode.description}</div>

            {/* Metrics List */}
            <div className="space-y-3 font-mono-code text-xs mb-6">
              <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between items-center">
                <span className="text-slate-400">CATEGORY:</span>
                <span className="text-white font-semibold">{selectedNode.category}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between items-center">
                <span className="text-slate-400">ALGORITHM:</span>
                <span className="text-[#00E5FF] font-semibold">{selectedNode.algorithm}</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between items-center">
                <span className="text-slate-400">DOWNSTREAM BLAST:</span>
                <span className="text-[#F43F5E] font-semibold">
                  {downstreamIds.length} Dependent Services
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between items-center">
                <span className="text-slate-400">BUSINESS IMPACT:</span>
                <span className="text-[#F59E0B] font-semibold">High (Payment Settlement Rail)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-[#05070A] border border-white/5 flex justify-between items-center">
                <span className="text-slate-400">PQC RELEVANCE:</span>
                <span className="text-[#F43F5E] font-semibold">Vulnerable to Shor Algorithm</span>
              </div>
            </div>

            {/* Contextual Migration Roadmap Guidance based on migrationStep */}
            <div className="p-3.5 rounded-xl bg-[#0D1117] border border-[#00E5FF]/30 space-y-1.5 text-xs font-mono-code">
              <div className="text-[10px] text-[#00E5FF] font-bold uppercase">
                RECOMMENDED NEXT STEP ({migrationStep}):
              </div>
              <div className="text-slate-200">
                {migrationStep === 'CURRENT' && 'Map all connected clients and verify certificate pinning policies.'}
                {migrationStep === 'ASSESSMENT' && 'Model latency overhead of post-quantum ML-KEM-768 hybrid certificates.'}
                {migrationStep === 'PLAN' && 'Schedule phased canary deployment on API Gateway ingress without dropping legacy clients.'}
                {migrationStep === 'REMEDIATION' && 'Issue dual-signature certificates and enable hybrid post-quantum key encapsulation.'}
                {migrationStep === 'VALIDATION' && 'Execute regression handshake tests across customer mobile apps and payment settlement rails.'}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <button
              onClick={advanceMigrationPath}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] text-white font-semibold text-xs font-mono-code transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>Advance Migration Path ➔ {migrationStep}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
