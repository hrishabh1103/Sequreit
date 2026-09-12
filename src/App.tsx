import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeStrip } from './components/layout/MarqueeStrip';
import { WhatIsSeQureitSection } from './components/sections/WhatIsSeQureitSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { WhyNowSection } from './components/sections/WhyNowSection';
import { DiscoverySection } from './components/sections/DiscoverySection';
import { PlatformLifecycle } from './components/sections/PlatformLifecycle';
import { InventorySection } from './components/sections/InventorySection';
import { DependencySection } from './components/sections/DependencySection';
import { RiskMatrixSection } from './components/sections/RiskMatrixSection';
import { PrioritizationSection } from './components/sections/PrioritizationSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { PqVpnSection } from './components/sections/PqVpnSection';
import { RemediationSection } from './components/sections/RemediationSection';
import { CompanySection } from './components/sections/CompanySection';
import { CryptoAgilitySection } from './components/sections/CryptoAgilitySection';
import { ValidationSection } from './components/sections/ValidationSection';
import { EnterpriseTrustSection } from './components/sections/EnterpriseTrustSection';
import { RoadmapSection } from './components/sections/RoadmapSection';
import { ResourcesSection } from './components/sections/ResourcesSection';
import { ContactSection } from './components/sections/ContactSection';
import { FinalCinematicSection } from './components/sections/FinalCinematicSection';
import { Footer } from './components/layout/Footer';
import { DemoModal } from './components/sections/DemoModal';

export default function App() {
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
      {/* Floating Centered Pill Navbar */}
      <Navbar
        onRequestDemo={handleOpenDemo}
        onAssessReadiness={handleOpenReadiness}
      />

      <main>
        {/* ================================================================ */}
        {/* SECTION 01: DARK — HERO & CRYPTOGRAPHIC NERVOUS SYSTEM          */}
        {/* ================================================================ */}
        <HeroSection
          onRequestDemo={handleOpenDemo}
          onExplorePlatform={handleExplorePlatform}
        />
        <MarqueeStrip />

        {/* ================================================================ */}
        {/* SECTION 02: LIGHT — WHAT IS SEQUREIT? (THE CONTROL PLANE)       */}
        {/* ================================================================ */}
        <WhatIsSeQureitSection />

        {/* ================================================================ */}
        {/* SECTION 03: DARK — YOU CANNOT MIGRATE WHAT YOU CANNOT SEE       */}
        {/* ================================================================ */}
        <ProblemSection />
        <WhyNowSection />
        <DiscoverySection />

        {/* ================================================================ */}
        {/* SECTION 04: LIGHT — FROM DISCOVERY TO CRYPTO-AGILITY (LIFECYCLE) */}
        {/* ================================================================ */}
        <PlatformLifecycle />

        {/* ================================================================ */}
        {/* SECTION 05: DARK — SEE WHAT YOUR CRYPTOGRAPHY IS CONNECTED TO   */}
        {/* ================================================================ */}
        <InventorySection />
        <DependencySection />
        <RiskMatrixSection />
        <PrioritizationSection />

        {/* ================================================================ */}
        {/* SECTION 06: LIGHT — CRYPTOGRAPHY IS INFRASTRUCTURE (INDUSTRIES) */}
        {/* ================================================================ */}
        <IndustriesSection />

        {/* ================================================================ */}
        {/* SECTION 07: DARK — A WORKING PIECE OF THE FUTURE (PQ-VPN)        */}
        {/* ================================================================ */}
        <PqVpnSection onRequestDemo={handleOpenDemo} />
        <RemediationSection
          onExploreVpn={handleExploreVpn}
          onRequestDemo={handleOpenDemo}
        />

        {/* ================================================================ */}
        {/* SECTION 08: LIGHT — BUILT IN INDIA. DESIGNED FOR THE WORLD (TEAM)*/}
        {/* ================================================================ */}
        <CompanySection />

        {/* ================================================================ */}
        {/* SECTION 09: DARK — CRYPTO-AGILITY IS A PERMANENT CAPABILITY     */}
        {/* ================================================================ */}
        <CryptoAgilitySection />
        <ValidationSection />
        <EnterpriseTrustSection />
        <RoadmapSection />
        <ResourcesSection />

        {/* ================================================================ */}
        {/* SECTION 10: LIGHT -> DARK TRANSITION (FINAL CTA & VISION)       */}
        {/* ================================================================ */}
        <ContactSection onRequestDemo={handleOpenDemo} />
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
