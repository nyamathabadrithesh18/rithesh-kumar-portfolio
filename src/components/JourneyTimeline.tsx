import React from 'react';
import { GraduationCap, Code, Globe, Sparkles, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const { timeline } = PORTFOLIO_DATA;

  const getPhaseIcon = (phase: string) => {
    if (phase.includes('Education')) return GraduationCap;
    if (phase.includes('Programming') || phase.includes('DSA')) return Code;
    if (phase.includes('Web')) return Globe;
    return Sparkles;
  };

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
            04 · Milestones & Evolution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Developer Journey
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            From foundational C/C++ memory semantics to algorithmic problem solving, modern web application architecture, and applied AI systems.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/[0.12] space-y-12">
          {timeline.map((item, index) => {
            const Icon = getPhaseIcon(item.phase);
            return (
              <div key={item.id} className="relative group">
                
                {/* Node indicator dot on timeline line */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>

                {/* Content Glass Panel */}
                <div className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/[0.08] relative">
                  
                  {/* Phase & Status row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                      <Icon className="w-4 h-4 text-blue-400" />
                      <span className="font-semibold uppercase tracking-wider">{item.phase}</span>
                    </div>

                    <span className="text-xs font-mono text-slate-400">
                      {item.status}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5 font-mono">
                    {item.institution}
                  </p>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Key Focus Points */}
                  <div className="mt-4 pt-3 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase">Focus Areas:</span>
                    {item.focusAreas.map((area, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-300 bg-slate-900/80 border border-slate-800 px-2 py-0.5 rounded font-mono"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
