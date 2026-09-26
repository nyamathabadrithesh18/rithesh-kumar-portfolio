import React from 'react';
import { Trophy, Star, Target, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
            07 · Milestones & Recognition
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Key Achievements
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Tangible milestones in academic excellence, project deployments, and ongoing problem solving.
          </p>
        </div>

        {/* 3-Column Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-blue-400">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
