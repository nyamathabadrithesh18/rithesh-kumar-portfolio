import React from 'react';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="py-20 relative overflow-hidden bg-tech-dots">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-blue-500/20 relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 max-w-xl z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Want to know more about my journey?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Download my resume to explore my education, technical proficiencies, projects, and academic experience in detail.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 shrink-0 z-10">
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeDownloadFilename}
              aria-label="Download Resume"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume in new tab"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              <Eye className="w-4 h-4 text-blue-400" />
              <span>View Resume</span>
            </a>

            <button
              onClick={onOpenResume}
              aria-label="Open Interactive CV modal"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 rounded-xl transition-all"
            >
              <FileText className="w-4 h-4 text-slate-500" />
              <span>Interactive CV</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

