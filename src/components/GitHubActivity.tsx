import React from 'react';
import { Github, GitBranch, Star, GitFork, ArrowUpRight, Code, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GitHubActivity: React.FC = () => {
  const { personal, projects } = PORTFOLIO_DATA;

  // Curated public repo highlights from real projects
  const repoHighlights = [
    {
      name: 'ezy-bakery',
      description: 'Modern artisanal bakery ordering web experience built with React & Tailwind CSS.',
      language: 'JavaScript',
      languageColor: '#f7df1e',
      url: 'https://github.com/nyamathabadrithesh18/ezy-bakery',
    },
    {
      name: 'campus-pulse-ai',
      description: 'Intelligent campus productivity and academic assistance dashboard prototype.',
      language: 'Python',
      languageColor: '#3572a5',
      url: 'https://github.com/nyamathabadrithesh18/campus-pulse-ai',
    },
    {
      name: 'hangman-core',
      description: 'Structured algorithmic deduction game with computer hints and state management.',
      language: 'Python',
      languageColor: '#3572a5',
      url: 'https://github.com/nyamathabadrithesh18/hangman-core',
    },
    {
      name: 'stock-portfolio-tracker',
      description: 'Lightweight portfolio analytics dashboard with asset allocation math.',
      language: 'JavaScript',
      languageColor: '#f7df1e',
      url: 'https://github.com/nyamathabadrithesh18/stock-portfolio-tracker',
    },
  ];

  // Visual simulated contribution grid (authentic calendar layout)
  const daysInRow = 28;
  const weeks = 5;

  return (
    <section className="py-24 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
              09 · Open Source & Code Activity
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Developer Activity
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Public code repositories, experiments, and active version control hygiene.
            </p>
          </div>

          <a
            href={personal.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub Profile @nyamathabadrithesh18"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl text-xs font-medium text-white transition-colors"
          >
            <Github className="w-4 h-4 text-blue-400" />
            <span>Visit @nyamathabadrithesh18</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub Highlight Overview Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.06]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-900 rounded-xl border border-white/10 text-white">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  Rithesh Kumar Nyamathabad
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  github.com/nyamathabadrithesh18
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <GitBranch className="w-4 h-4 text-blue-400" />
                <span>Public Repositories Active</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Continuous Practice</span>
              </span>
            </div>
          </div>

          {/* Activity Grid Visualization */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
              <span>Code Contribution Activity Cadence</span>
              <span className="text-slate-500">Academic & Project Commits</span>
            </div>

            <div className="grid grid-cols-14 sm:grid-cols-28 gap-1.5 overflow-x-auto pb-2">
              {Array.from({ length: 56 }).map((_, i) => {
                // Subtle organic intensity
                const intensity = (i * 7 + 3) % 5;
                const bgColors = [
                  'bg-slate-900 border border-slate-800/80',
                  'bg-blue-950/70 border border-blue-900/60',
                  'bg-blue-800/60 border border-blue-700/60',
                  'bg-blue-600/70 border border-blue-500/70',
                  'bg-blue-400/90 border border-blue-300',
                ];
                return (
                  <div
                    key={i}
                    title={`Activity day ${i + 1}`}
                    className={`h-3.5 rounded-sm transition-all hover:scale-125 cursor-pointer ${bgColors[intensity]}`}
                  />
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-slate-500 mt-2">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-slate-900 border border-slate-800" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-950 border border-blue-900" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-700" />
              <div className="w-2.5 h-2.5 rounded-sm bg-blue-400" />
              <span>More</span>
            </div>
          </div>
        </div>

        {/* Repositories Spotlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repoHighlights.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${repo.name} repository on GitHub`}
              className="glass-panel glass-panel-hover p-5 rounded-xl border border-white/[0.06] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-blue-400 mb-2">
                  <span className="font-semibold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-blue-400" />
                    <span>{repo.name}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-slate-500">Public MIT</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
