import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Heart, Sparkles, Download, Eye, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050c] border-t border-white/[0.08] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-12 border-b border-white/[0.06]">
          
          <div className="md:col-span-6 space-y-3">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              {personal.name}
            </span>
            <p className="text-xs sm:text-sm font-mono text-blue-400">
              {personal.subtitle}
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Undergraduate Computer Science & Engineering student at Marwadi University, passionate about developing software, algorithms, and applied machine learning solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Rithesh</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills & Tech Stack</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-blue-400 transition-colors">Engineering Blog</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Actions */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-3">
              Profiles & Resume
            </span>
            <div className="flex flex-col gap-2 text-xs">
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={personal.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="text-slate-400 hover:text-rose-400 transition-colors flex items-center gap-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram Profile</span>
              </a>
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadFilename}
                aria-label="Download Resume"
                className="text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-1.5 font-medium"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Download Resume</span>
              </a>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume in new tab"
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5 text-slate-400" />
                <span>View Resume</span>
              </a>
              <button
                onClick={onOpenResume}
                className="text-left text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Interactive CV Modal</span>
              </button>
              <button
                onClick={onOpenTerminal}
                className="text-left text-slate-400 hover:text-blue-400 transition-colors font-mono"
              >
                $ sudo terminal (CLI)
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 font-mono">
            © 2026 {personal.name}. All rights reserved.
          </p>

          <p className="font-mono text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Built with curiosity & code.</span>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
