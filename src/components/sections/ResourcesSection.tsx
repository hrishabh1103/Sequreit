import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, Clock, X, CheckCircle2 } from 'lucide-react';

interface Article {
  title: string;
  category: string;
  readTime: string;
  summary: string;
  type: string;
  detailedOverview: string;
  takeaways: string[];
  nistAlignment: string;
}

export const ResourcesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      title: 'Understanding Your Cryptographic Estate: The Hidden Infrastructure Dependency',
      category: 'Cryptographic Discovery',
      readTime: '6 min read',
      summary: 'Why modern enterprises have dozens of uninventoried certificates and hardcoded ciphers buried in microservices, and how automated AST scanning creates visibility.',
      type: 'Architecture Brief',
      detailedOverview: 'Enterprise software architectures frequently suffer from cryptographic drift. As services evolve, developers invoke language cryptographic libraries (e.g. crypto/ecdsa, java.security, pycryptodome) with static parameters that remain unchecked for years. This overview analyzes how automated AST (Abstract Syntax Tree) static extraction paired with live TLS endpoint probing produces an evidence-backed baseline without requiring runtime agent instrumentation.',
      takeaways: [
        'Static source code AST scanning identifies cryptographic calls at compile time with exact file-and-line evidence.',
        'Network endpoint probing reconciles active TLS cipher suites and certificates against source code declarations.',
        'Eliminates the blind spot where developers hardcode legacy RSA-1024 or deprecated hash functions in microservices.'
      ],
      nistAlignment: 'FIPS 140-3 Primitives & Baseline Discovery Guidelines'
    },
    {
      title: 'Why Cryptographic Discovery Must Precede Post-Quantum Migration',
      category: 'PQC',
      readTime: '8 min read',
      summary: 'Migrating algorithms without understanding relational dependency depth risks breaking critical APIs, payment gateways, and mobile certificate pins.',
      type: 'Technical Guide',
      detailedOverview: 'Many organizations attempt to jump directly into post-quantum algorithm trials without understanding the blast radius of their existing systems. When an edge certificate is reissued with hybrid post-quantum keys (e.g. ML-KEM-768), upstream mobile apps with hardcoded certificate pinning or downstream partner gateways may reject the handshake. A rigorous discovery phase models multi-hop trust dependencies to ensure backward compatibility and zero downtime.',
      takeaways: [
        'Mapping upstream API callers and downstream databases prevents catastrophic service outages during cipher migration.',
        'Hybrid certificates must be phased across legacy client fleets before strict enforcement is enabled.',
        'Dependency modeling reduces migration risk from an unpredictable event to a scheduled, low-risk operational update.'
      ],
      nistAlignment: 'NIST SP 800-227 (Post-Quantum Cryptography Migration Guidance)'
    },
    {
      title: 'From Cryptographic Bill of Materials (CBOM) to Actionable Migration Roadmap',
      category: 'CBOM',
      readTime: '7 min read',
      summary: 'How to convert raw asset inventories into phased work queues prioritized by Harvest Now, Decrypt Later (HNDL) data retention horizons.',
      type: 'Executive Brief',
      detailedOverview: 'A Cryptography Bill of Materials (CBOM) is the cryptographic equivalent of an SBOM. It creates an immutable, machine-readable inventory of all algorithms, keys, certificates, and protocols in use. This brief outlines how SeQureit enriches the CBOM with business criticality scores and data retention horizons, converting thousands of raw assets into a focused priority queue based on HNDL exposure.',
      takeaways: [
        'Standardizes cryptographic telemetry across heterogeneous environments into canonical, auditable records.',
        'Enriches asset records with data retention horizons to isolate records subject to multi-decade regulatory retention.',
        'Automates transition dispatch so infrastructure teams know exactly which endpoints to migrate first.'
      ],
      nistAlignment: 'CycloneDX CBOM Specification & NIST PQC Transition Gates'
    },
    {
      title: 'What Crypto-Agility Actually Means in Real-World Infrastructure',
      category: 'Crypto-Agility',
      readTime: '5 min read',
      summary: 'Debunking the myth that post-quantum readiness is a one-time project. Designing architectures that can swap ciphers on-demand as threats evolve.',
      type: 'Strategy Paper',
      detailedOverview: 'True crypto-agility is an architectural design philosophy where cryptographic algorithms are decoupled from application logic. Rather than embedding hardcoded cipher parameters, systems invoke cryptographic provider abstractions governed by centralized policy. If an emerging cryptanalytic breakthrough compromises a standard algorithm in the future, the enterprise can rotate to alternative primitives without rewriting code or rebuilding containers.',
      takeaways: [
        'Decouples algorithm implementation from core business logic via lightweight crypto-shims.',
        'Enables policy-driven algorithm switching across Kubernetes clusters, API gateways, and microservices.',
        'Transforms cryptographic obsolescence from an emergency crisis into a routine configuration deployment.'
      ],
      nistAlignment: 'Permanent Crypto-Agility Standards Architecture'
    },
    {
      title: 'Preparing Critical Infrastructure for Post-Quantum Connectivity: The Role of Hybrid PQ-VPNs',
      category: 'Migration',
      readTime: '9 min read',
      summary: 'Analyzing wire-speed hybrid key encapsulation (ML-KEM-768 + X25519) to shield B2B datalinks and SCADA telemetry from passive adversary capture.',
      type: 'Engineering Deep Dive',
      detailedOverview: 'Critical digital infrastructure (power grids, pipeline telemetry, interbank payment rails) requires encrypted connectivity that operates at wire speed with minimal latency overhead. This deep dive examines the implementation of hybrid post-quantum key encapsulation in VPN tunnels, pairing NIST FIPS 203 (ML-KEM-768) with classical elliptic curve Diffie-Hellman (X25519) to provide immediate protection against Harvest Now, Decrypt Later adversaries without risking protocol breakdown.',
      takeaways: [
        'Hybrid dual-key exchange guarantees classical security bounds even in the hypothetical scenario of a novel attack on lattice schemes.',
        'Maintains line-rate throughput with less than 2% packet overhead for mission-critical telemetry.',
        'Serves as an immediate, deployable remediation tool while broader application layer migration is planned.'
      ],
      nistAlignment: 'NIST FIPS 203 (ML-KEM) & IETF Hybrid Key Exchange Standards'
    }
  ];

  const categories = ['ALL', 'Cryptographic Discovery', 'PQC', 'CBOM', 'Crypto-Agility', 'Migration'];

  const filteredArticles = activeCategory === 'ALL'
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <section id="resources" className="relative py-24 md:py-32 bg-[#080C12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono-code text-[#00E5FF] mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE & RESEARCH PERSPECTIVES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ENGINEERING INSIGHTS <br />
            <span className="text-[#00E5FF]">FOR CRYPTOGRAPHIC LEADERS.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical technical analysis, architecture frameworks, and migration methodology authored by the SeQureit research and engineering team. Click any paper to read the architectural overview.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-mono-code">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg border transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-[#0066FF] text-white border-[#0066FF] font-semibold shadow-md'
                  : 'bg-[#05070A] text-slate-400 border-white/5 hover:text-white hover:border-white/15'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <div
              key={idx}
              onClick={() => setActiveArticle(article)}
              className="p-6 rounded-2xl bg-[#05070A] border border-white/10 hover:border-[#00E5FF]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono-code text-slate-400 mb-3">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[#00E5FF]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {article.readTime}
                  </span>
                </div>

                <div className="text-[10px] font-mono-code text-slate-500 uppercase tracking-wider mb-1.5">
                  {article.type}
                </div>

                <h3 className="text-base font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono-code">
                <span className="text-slate-500">SeQureit Research</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveArticle(article);
                  }}
                  className="text-[#00E5FF] flex items-center gap-1 group-hover:translate-x-1 transition-transform font-semibold hover:underline"
                >
                  <span>Read Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Research Overview Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-[#080C12] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black max-h-[90vh] overflow-y-auto">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/15 blur-[90px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-md bg-white/5 hover:bg-white/10"
              aria-label="Close Overview Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 font-mono-code text-xs">
              <span className="px-2.5 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-semibold">
                {activeArticle.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{activeArticle.type}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{activeArticle.readTime}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4 font-mono-code">
              {activeArticle.title}
            </h3>

            <div className="p-4 rounded-xl bg-[#05070A] border border-white/10 mb-6 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono-code">
              <div className="text-[10px] text-[#00E5FF] font-bold uppercase tracking-wider mb-1.5">
                EXECUTIVE SUMMARY:
              </div>
              {activeArticle.detailedOverview}
            </div>

            {/* Core Architectural Takeaways */}
            <div className="space-y-3 mb-6">
              <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400">
                Core Engineering Takeaways:
              </div>
              <div className="space-y-2">
                {activeArticle.takeaways.map((point, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#05070A] border border-white/5 flex items-start gap-2.5 text-xs font-mono-code text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards Alignment */}
            <div className="p-3 rounded-lg bg-[#05070A] border border-[#0066FF]/30 text-xs font-mono-code flex items-center justify-between mb-6">
              <span className="text-slate-400">Standards Alignment:</span>
              <span className="text-[#00E5FF] font-semibold">{activeArticle.nistAlignment}</span>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 text-xs font-mono-code text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                Close Overview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
