import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Terminal, ArrowUpRight, Download, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';
import { LanguageSwitcher, SUPPORTED_LANGUAGES } from './LanguageSwitcher';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
  activeSection: string;
  currentLang?: string;
  onLangChange?: (code: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenTerminal,
  activeSection,
  currentLang = 'en',
  onLangChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [localeToast, setLocaleToast] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        setScrollProgress((winScroll / height) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectLang = (code: string) => {
    if (onLangChange) {
      onLangChange(code);
    }
    const selected = SUPPORTED_LANGUAGES.find((l) => l.code === code);
    setLocaleToast(`Locale: ${selected?.native || code.toUpperCase()}`);
    setTimeout(() => setLocaleToast(null), 2400);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Experience', href: '#experience' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll reading progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-blue-500 z-50 transition-all duration-150 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />

      {/* Floating Minimal Locale Indicator Toast */}
      {localeToast && (
        <div className="fixed top-16 right-6 z-50 pointer-events-none animate-fadeIn">
          <div className="px-3 py-1.5 rounded-lg bg-slate-900/95 border border-blue-500/40 text-blue-300 font-mono text-xs shadow-2xl backdrop-blur-md flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{localeToast} · I18n Ready</span>
          </div>
        </div>
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text wordmark brand */}
          <a
            href="#hero"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              {PORTFOLIO_DATA.personal.shortName}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </a>

          {/* Zone 2: Navigation Links with LanguageSwitcher positioned right near the links */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors relative py-1 focus:outline-none focus-visible:text-blue-400 ${
                      isActive
                        ? 'text-blue-400 font-medium'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-blue-500 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Subtle hairline divider */}
            <div className="h-4 w-[1px] bg-white/10" aria-hidden="true" />

            {/* LanguageSwitcher positioned near the navigation links */}
            <LanguageSwitcher
              currentLang={currentLang}
              onLangChange={handleSelectLang}
              variant="dropdown"
            />
          </div>

          {/* Zone 3: Primary actions (Console & Resume) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Developer Console trigger */}
            <button
              onClick={onOpenTerminal}
              title="Open Developer Console (Easter Egg: type 'sudo' anytime)"
              aria-label="Developer Console"
              className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/60 rounded-lg transition-colors border border-transparent hover:border-slate-700/60 text-xs font-mono hidden sm:flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <Terminal className="w-4 h-4" />
              <span className="hidden md:inline text-slate-400">console</span>
            </button>

            {/* Download Resume button */}
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeDownloadFilename}
              aria-label="Download Resume"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-600/30 transition-all transform active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#030712]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl px-6 py-6 transition-all animate-fadeIn">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base text-slate-300 hover:text-blue-400 py-1.5 border-b border-slate-800/40 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              {/* Dedicated LanguageSwitcher Component (Pill-Toggle in Mobile Drawer) */}
              <div className="pt-2 border-b border-slate-800/40 pb-3">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-2">
                  Language / Locale (Placeholder Engine)
                </span>
                <LanguageSwitcher
                  currentLang={currentLang}
                  onLangChange={(code) => {
                    handleSelectLang(code);
                    setMobileMenuOpen(false);
                  }}
                  variant="pill-toggle"
                  className="w-full justify-between"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={siteConfig.resumeUrl}
                  download={siteConfig.resumeDownloadFilename}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Download Resume"
                  className="w-full py-2.5 px-4 text-center font-semibold text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="View Resume in new tab"
                  className="w-full py-2.5 px-4 text-center font-medium text-sm bg-slate-900 border border-slate-700 text-slate-200 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
                >
                  <Eye className="w-4 h-4 text-blue-400" />
                  <span>View Resume (PDF)</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-2 px-4 text-center font-medium text-xs text-slate-400 hover:text-white bg-slate-950/60 border border-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-blue-400" />
                  <span>Interactive CV Modal</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="w-full py-2 px-4 text-center font-mono text-xs text-slate-400 bg-slate-900 border border-slate-800 rounded-lg hover:text-white flex items-center justify-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  $ sudo terminal
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
