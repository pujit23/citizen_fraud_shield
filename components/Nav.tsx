"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path ? "text-white underline underline-offset-4 decoration-2 decoration-[var(--grad-indigo)]" : "text-muted hover:text-white";
  };

  return (
    <header className="w-full flex flex-col z-50">
      {/* Main Navigation */}
      <nav className="w-full border-b backdrop-blur-md" style={{ borderColor: "var(--border-hairline)", backgroundColor: "rgba(8, 8, 11, 0.8)" }}>
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-primary hover:opacity-80 transition-opacity">
            Citizen Fraud Shield
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/scam" className={`text-sm font-medium transition-colors ${isActive("/scam")}`}>
              Scam Detector
            </Link>
            <Link href="/currency" className={`text-sm font-medium transition-colors ${isActive("/currency")}`}>
              Counterfeit Detector
            </Link>
            <Link href="/graph" className={`text-sm font-medium transition-colors ${isActive("/graph")}`}>
              Fraud Graph
            </Link>
            <a
              href="https://github.com/kanishkaaNS/Citizen-Fraud-Shield"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted hover:text-white transition-colors"
            >
              GitHub
            </a>
            <Link href="/scam" className="btn-pill-primary">
              Try it now
            </Link>
          </div>
          
          {/* Mobile minimal nav */}
          <div className="md:hidden flex items-center gap-3">
             <Link href="/scam" className="btn-pill-primary text-xs px-3 py-1.5" onClick={() => setIsMobileMenuOpen(false)}>
              Try it now
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: "var(--border-hairline)", backgroundColor: "var(--bg-elevated)" }}>
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link href="/scam" className={`text-sm font-medium transition-colors ${isActive("/scam")}`} onClick={() => setIsMobileMenuOpen(false)}>
                Scam Detector
              </Link>
              <Link href="/currency" className={`text-sm font-medium transition-colors ${isActive("/currency")}`} onClick={() => setIsMobileMenuOpen(false)}>
                Counterfeit Detector
              </Link>
              <Link href="/graph" className={`text-sm font-medium transition-colors ${isActive("/graph")}`} onClick={() => setIsMobileMenuOpen(false)}>
                Fraud Graph
              </Link>
              <a
                href="https://github.com/kanishkaaNS/Citizen-Fraud-Shield"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
