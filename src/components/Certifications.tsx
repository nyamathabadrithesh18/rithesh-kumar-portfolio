import React from 'react';
import { Award, ExternalLink, Calendar, ShieldCheck, Plus } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
              06 · Verified Learning
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Certifications & Credentials
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Academic credentials and verified technical curriculum coursework.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`glass-panel p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                cert.isPlaceholder
                  ? 'border-dashed border-white/20 bg-slate-950/40 opacity-75 hover:opacity-100'
                  : 'glass-panel-hover border-white/[0.08]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
                    {cert.isPlaceholder ? <Plus className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                  </div>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.05] flex items-center justify-between text-xs font-mono">
                {cert.credentialId ? (
                  <span className="text-slate-500 text-[11px] truncate max-w-[140px]">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span className="text-slate-600 text-[11px]">Placeholder</span>
                )}

                {!cert.isPlaceholder && cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
