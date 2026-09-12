import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeStrip } from './components/layout/MarqueeStrip';
import { ProblemSection } from './components/sections/ProblemSection';
import { WhyNowSection } from './components/sections/WhyNowSection';
import { MissionSection } from './components/sections/MissionSection';
import { PlatformLifecycle } from './components/sections/PlatformLifecycle';
import { DiscoverySection } from './components/sections/DiscoverySection';
import { InventorySection } from './components/sections/InventorySection';
import { DependencySection } from './components/sections/DependencySection';
import { RiskMatrixSection } from './components/sections/RiskMatrixSection';
import { PrioritizationSection } from './components/sections/PrioritizationSection';
import { RemediationSection } from './components/sections/RemediationSection';
import { PqVpnSection } from './components/sections/PqVpnSection';
import { ValidationSection } from './components/sections/ValidationSection';
import { CryptoAgilitySection } from './components/sections/CryptoAgilitySection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { WhySeQureitSection } from './components/sections/WhySeQureitSection';
import { TechnologySection } from './components/sections/TechnologySection';
import { EnterpriseTrustSection } from './components/sections/EnterpriseTrustSection';
import { CompanySection } from './components/sections/CompanySection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { ContactSection } from './components/sections/ContactSection';
import { FinalCinematicSection } from './components/sections/FinalCinematicSection';
import { Footer } from './components/layout/Footer';
import { DemoModal } from './components/sections/DemoModal';

export function App() {
  const [demoModalOpen, setDemoModalOpen] = useState<boolean>(false);
  const [demoModalMode, setDemoModalMode] = useState<'DEMO' | 'READINESS'>('DEMO');

  const handleOpenDemo = () => {
    setDemoModalMode('DEMO');
    setDemoModalOpen(true);
  };

  const handleOpenReadiness = () => {
    setDemoModalMode('READINESS');
    setDemoModalOpen(true);
  };

  const handleExplorePlatform = () => {
    const el = document.getElementById('platform');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreVpn = () => {
    const el = document.getElementById('pq-vpn');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#05070A] text-slate-200 overflow-x-hidden">
      {/* Fixed Header */}
      <Navbar
        onRequestDemo={handleOpenDemo}
        onAssessReadiness={handleOpenReadiness}
      />

      <main>
        {/* 1 & 2. Hero & Signature Cryptographic Nervous System */}
        <HeroSection
          onRequestDemo={handleOpenDemo}
          onExplorePlatform={handleExplorePlatform}
        />

        {/* 3. Opening Context & Critical Infrastructure Strip */}
        <MarqueeStrip />

        {/* 4. The Blind Spot: You Cannot Migrate What You Cannot See */}
        <ProblemSection />

        {/* 5. The Strategic Reality: PQC, HNDL & NIST Standards */}
        <WhyNowSection />

        {/* 6. Mission Manifesto: Make Cryptography Visible */}
        <MissionSection />

        {/* 7. Full Platform Lifecycle: 8-Stage Architecture */}
        <PlatformLifecycle />

        {/* 8. Discovery: Multi-Surface AST Code & Endpoint Probing */}
        <DiscoverySection />

        {/* 9. Standardized CBOM Cryptographic Asset Inventory */}
        <InventorySection />

        {/* 10. Signature Dependency Graph: Blast Radius & Impact Simulator */}
        <DependencySection />

        {/* 11. Contextual Risk Modeling & 2D Matrix (with HNDL filter) */}
        <RiskMatrixSection />

        {/* 12. Prioritization: Dynamic Phased Migration Work Queue */}
        <PrioritizationSection />

        {/* 13. Modular Remediation Suite */}
        <RemediationSection
          onExploreVpn={handleExploreVpn}
          onRequestDemo={handleOpenDemo}
        />

        {/* 14. Dedicated PQ-VPN Showcase: Live Post-Quantum Tunnel Demo */}
        <PqVpnSection onRequestDemo={handleOpenDemo} />

        {/* 15. Automated Verification & Post-Migration Telemetry */}
        <ValidationSection />

        {/* 16. Permanent Crypto-Agility: Closed-Loop Automation */}
        <CryptoAgilitySection />

        {/* 17. 10 Mission-Critical Industry Profiles */}
        <IndustriesSection />

        {/* 18. Why SeQureit: 4 Pillars & Core Differentiation */}
        <WhySeQureitSection />

        {/* 19. Deep-Tech Systems Architecture Blueprint */}
        <TechnologySection />

        {/* 20. Enterprise Security & Sovereign Trust */}
        <EnterpriseTrustSection />

        {/* 21. Company & Founder Story: Built in India for Global Transition */}
        <CompanySection />

        {/* 22. Transparent Product Roadmap: Now, Next, Vision */}
        <RoadmapSection />

        {/* 23. Technical Research & Knowledge Hub */}
        <ResourcesSection />

        {/* 24. Final Call to Action */}
        <ContactSection onRequestDemo={handleOpenDemo} />

        {/* 25. Final Atmospheric Finale */}
        <FinalCinematicSection onRequestDemo={handleOpenDemo} />
      </main>

      {/* Global Enterprise Footer */}
      <Footer />

      {/* Interactive Demo Request & Readiness Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        defaultMode={demoModalMode}
      />
    </div>
  );
}

export default App;
