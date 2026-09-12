import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  label: string;
  category: string;
  color: string;
  highlighted: boolean;
  discovered: boolean;
  pulsePhase: number;
  connectedTo: number[];
}

const SAMPLE_LABELS = [
  { label: 'RSA-2048', cat: 'Algorithm', color: '#F43F5E' },
  { label: 'ECDSA-P256', cat: 'Algorithm', color: '#F59E0B' },
  { label: 'AES-256-GCM', cat: 'Algorithm', color: '#10B981' },
  { label: 'SHA-256', cat: 'Algorithm', color: '#388BFD' },
  { label: 'ML-KEM-768', cat: 'Post-Quantum', color: '#00E5FF' },
  { label: 'ML-DSA-65', cat: 'Post-Quantum', color: '#8B5CF6' },
  { label: 'TLS 1.3', cat: 'Protocol', color: '#00E5FF' },
  { label: 'Internal PKI', cat: 'Infrastructure', color: '#388BFD' },
  { label: 'AWS KMS Key', cat: 'Key', color: '#F59E0B' },
  { label: 'Cloud HSM', cat: 'Infrastructure', color: '#8B5CF6' },
  { label: 'Payment API', cat: 'Service', color: '#F43F5E' },
  { label: 'Auth Gateway', cat: 'Gateway', color: '#00E5FF' },
  { label: 'Cert Authority', cat: 'Certificate', color: '#388BFD' },
  { label: 'SWIFT Ingress', cat: 'Financial', color: '#F43F5E' },
  { label: 'PQ-VPN Tunnel', cat: 'Remediation', color: '#10B981' },
  { label: 'K8s Cluster', cat: 'Infrastructure', color: '#8B5CF6' },
  { label: 'Vault Secret', cat: 'Key', color: '#F59E0B' },
  { label: 'Postgres SSL', cat: 'Database', color: '#388BFD' }
];

export const CryptoNervousHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeHoverNode, setActiveHoverNode] = useState<Node | null>(null);
  const mouseRef = useRef<{ x: number; y: number; isInside: boolean }>({ x: -1000, y: -1000, isInside: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate balanced graph nodes
    const nodeCount = width < 768 ? 28 : 55;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const sample = SAMPLE_LABELS[i % SAMPLE_LABELS.length];
      const baseRadius = Math.random() * 2.5 + 2.5;
      nodes.push({
        x: Math.random() * (width - 80) + 40,
        y: Math.random() * (height - 80) + 40,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: baseRadius,
        baseRadius,
        label: sample.label,
        category: sample.cat,
        color: sample.color,
        highlighted: false,
        discovered: Math.random() > 0.15,
        pulsePhase: Math.random() * Math.PI * 2,
        connectedTo: []
      });
    }

    // Build realistic network edges
    nodes.forEach((node, i) => {
      const connectionsCount = Math.floor(Math.random() * 3) + 1;
      for (let c = 0; c < connectionsCount; c++) {
        const targetIdx = Math.floor(Math.random() * nodes.length);
        if (targetIdx !== i && !node.connectedTo.includes(targetIdx)) {
          node.connectedTo.push(targetIdx);
        }
      }
    });

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      let closestNode: Node | null = null;
      let minDistance = 45;

      // Update positions & physics
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off canvas edges
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        // Cursor attraction/repulsion
        if (mouse.isInside) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            // Subtle spring effect
            const force = (140 - dist) / 140;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }

          if (dist < minDistance) {
            minDistance = dist;
            closestNode = node;
          }
        }

        node.pulsePhase += 0.03;
      }

      // Check hovered node
      if (closestNode !== activeHoverNode) {
        setActiveHoverNode(closestNode);
      }

      // Draw connections (filaments)
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (const targetIdx of node.connectedTo) {
          const target = nodes[targetIdx];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = width < 768 ? 140 : 200;

          if (dist < maxDist) {
            const isHoverChain =
              closestNode &&
              (closestNode === node ||
                closestNode === target ||
                closestNode.connectedTo.includes(i) ||
                closestNode.connectedTo.includes(targetIdx));

            const alpha = isHoverChain
              ? 0.75
              : Math.max(0, (1 - dist / maxDist) * 0.22);

            ctx.strokeStyle = isHoverChain
              ? '#00E5FF'
              : 'rgba(56, 139, 253, ' + alpha + ')';

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();

            // Animated packet pulse along line
            if (isHoverChain || (i + frame) % 70 === 0) {
              const progress = ((frame * 0.015 + i * 0.1) % 1);
              const px = node.x + dx * progress;
              const py = node.y + dy * progress;
              ctx.fillStyle = '#00E5FF';
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const isHovered = closestNode === node;
        const isConnectedToHover = closestNode && closestNode.connectedTo.includes(i);
        const pulse = Math.sin(node.pulsePhase) * 0.8;

        const renderRadius = isHovered
          ? node.baseRadius * 1.8 + pulse
          : isConnectedToHover
          ? node.baseRadius * 1.3
          : node.baseRadius + pulse * 0.3;

        // Outer glow
        if (isHovered || isConnectedToHover) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, renderRadius * 3, 0, Math.PI * 2);
          ctx.fillStyle = node.color === '#F43F5E' ? 'rgba(244, 63, 94, 0.2)' : 'rgba(0, 229, 255, 0.2)';
          ctx.fill();
        }

        // Inner node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, renderRadius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FFFFFF' : node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isHovered ? 15 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node label (display on hover or for key anchors)
        if (isHovered || isConnectedToHover || i % 4 === 0) {
          ctx.font = isHovered ? '600 11px JetBrains Mono' : '400 9px JetBrains Mono';
          ctx.fillStyle = isHovered ? '#FFFFFF' : 'rgba(203, 213, 225, 0.75)';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y - renderRadius - 6);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isInside: true
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.isInside = false;
    setActiveHoverNode(null);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[580px] md:h-[660px] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#05070A] shadow-2xl shadow-black/80"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      {/* Radial depth light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-[#0066FF]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[300px] bg-[#8B5CF6]/10 blur-[110px] rounded-full pointer-events-none" />

      {/* The Dynamic Cryptographic Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

      {/* Overlay Status Bar & Telemetry HUD */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-md bg-[#080C12]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono-code text-slate-300">
          <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
          <span className="text-slate-400">TELEMETRY:</span>
          <span className="text-[#00E5FF] font-semibold">LIVE CRYPTOGRAPHIC TOPOLOGY</span>
          <span className="hidden sm:inline text-slate-500">|</span>
          <span className="hidden sm:inline text-slate-400">STATUS:</span>
          <span className="hidden sm:inline text-[#10B981]">CONTINUOUS MAPPING</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#080C12]/90 border border-white/10 backdrop-blur-md text-[10px] font-mono-code text-slate-400">
          <span>HOVER NODES TO TRACE CRYPTO DEPENDENCIES</span>
        </div>
      </div>

      {/* Floating Active Node Inspector Card */}
      {activeHoverNode && (
        <div className="absolute bottom-4 left-4 z-20 max-w-sm p-4 rounded-xl bg-[#080C12]/95 border border-[#00E5FF]/40 backdrop-blur-xl shadow-2xl shadow-[#0066FF]/20 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: activeHoverNode.color }}
              />
              <span className="text-sm font-bold text-white font-mono-code">
                {activeHoverNode.label}
              </span>
            </div>
            <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider font-mono-code bg-white/5 border border-white/10 rounded text-slate-300">
              {activeHoverNode.category}
            </span>
          </div>
          <div className="text-xs text-slate-400 space-y-1">
            <div className="flex justify-between">
              <span>Connected Nodes:</span>
              <span className="text-[#00E5FF] font-mono-code font-semibold">
                {activeHoverNode.connectedTo.length} Active Links
              </span>
            </div>
            <div className="flex justify-between">
              <span>Discovery Confidence:</span>
              <span className="text-[#10B981] font-mono-code font-semibold">99.8% (Evidence-Backed)</span>
            </div>
            <div className="flex justify-between">
              <span>Post-Quantum Posture:</span>
              <span
                className={`font-mono-code font-semibold ${
                  activeHoverNode.color === '#10B981' || activeHoverNode.color === '#00E5FF'
                    ? 'text-[#10B981]'
                    : activeHoverNode.color === '#F43F5E'
                    ? 'text-[#F43F5E]'
                    : 'text-[#F59E0B]'
                }`}
              >
                {activeHoverNode.color === '#10B981' || activeHoverNode.color === '#00E5FF'
                  ? 'Quantum-Resistant'
                  : 'Vulnerable to Shor Algorithm'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Bottom Vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#05070A] to-transparent pointer-events-none" />
    </div>
  );
};
