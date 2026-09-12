import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onRequestDemo: () => void;
  onAssessReadiness: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestDemo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible near the top
      if (currentScrollY < 40) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN: smoothly hide
        setVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP: smoothly reveal
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
      setScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300 ease-out transform ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-4xl lg:max-w-5xl mx-auto pointer-events-auto">
        {/* Centered Floating Pill Navigation Bar */}
        <div
          className={`w-full rounded-full border transition-all duration-300 px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-6 shadow-2xl shadow-black/80 ${
            scrolled
              ? 'bg-[#05070A]/95 border-white/15 py-2.5'
              : 'bg-[#080C12]/90 backdrop-blur-xl border-white/10 py-2.5 sm:py-3'
          }`}
        >
          {/* Brand Logo - Compact, single line, cleanly anchored on left */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#0066FF]/25 rounded-full blur-sm group-hover:bg-[#00E5FF]/35 transition-all duration-300" />
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-105"
              >
                <polygon
                  points="18,3 32,10.5 32,25.5 18,33 4,25.5 4,10.5"
                  stroke="#00E5FF"
                  strokeWidth="1.75"
                  strokeOpacity="0.9"
                  fill="#080C12"
                />
                <circle cx="18" cy="18" r="3.5" fill="#0066FF" />
                <circle cx="18" cy="18" r="1.5" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="text-base font-bold tracking-tight text-white font-mono-code flex items-center gap-1.5 whitespace-nowrap">
              SeQureit
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            </span>
          </a>

          {/* Centered Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-4 lg:gap-6">
            <a
              href="#platform"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              Platform
            </a>
            <a
              href="#technology"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              Technology
            </a>
            <a
              href="#dependency-graph"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              Dependencies
            </a>
            <a
              href="#pq-vpn"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              PQ-VPN
            </a>
            <a
              href="#industries"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              Industries
            </a>
            <a
              href="#company"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              Company
            </a>
            <a
              href="#resources"
              className="text-xs uppercase tracking-wider text-slate-300 hover:text-[#00E5FF] transition-colors font-medium whitespace-nowrap"
            >
              Research
            </a>
          </nav>

          {/* Right Action CTA - Comfortably enclosed inside the pill */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onRequestDemo}
              className="px-4 py-1.5 sm:py-2 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] hover:from-[#0052CC] hover:to-[#0066FF] transition-all shadow-md shadow-[#0066FF]/30 flex items-center gap-1.5 whitespace-nowrap group"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle Mobile Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 bg-[#080C12]/95 border border-white/15 rounded-2xl p-5 space-y-3 backdrop-blur-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="space-y-2.5 text-xs font-mono-code">
              <a
                href="#platform"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                Platform Lifecycle
              </a>
              <a
                href="#technology"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                Technology &amp; Architecture
              </a>
              <a
                href="#dependency-graph"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                Dependency Graph
              </a>
              <a
                href="#pq-vpn"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                PQ-VPN Demonstration
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                Critical Industries
              </a>
              <a
                href="#company"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                Founding Team
              </a>
              <a
                href="#resources"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1 text-slate-300 hover:text-[#00E5FF]"
              >
                Research &amp; Insights
              </a>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestDemo();
                }}
                className="w-full py-2 text-xs font-semibold text-white bg-[#0066FF] hover:bg-[#0052CC] rounded-lg shadow flex items-center justify-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
