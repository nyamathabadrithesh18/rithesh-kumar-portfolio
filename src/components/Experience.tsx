import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
            05 · Applied Experience & Activities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Experience & Building Track
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Real software building, academic technical laboratories, collaborative projects, and hands-on software development.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                {/* Type & Period */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs font-mono text-slate-400">
                  <span className="text-blue-400 font-semibold">{exp.type}</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </span>
                </div>

                {/* Role & Org */}
                <h3 className="text-xl font-bold font-display text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-slate-300 mt-0.5">
                  {exp.organization}
                </p>

                {/* Narrative */}
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {exp.description}
                </p>

                {/* Outcomes list */}
                <div className="mt-4 space-y-2">
                  {exp.outcomes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mt-6 pt-4 border-t border-white/[0.05]">
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-2">
                  Technologies
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-slate-300">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
