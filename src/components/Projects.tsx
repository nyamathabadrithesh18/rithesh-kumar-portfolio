import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Eye, 
  Play 
} from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<string>('All');

  const filterTabs = ['All', 'Web', 'AI/ML', 'Python', 'C/C++'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => {
        if (filter === 'C/C++') return p.techStack.some((t) => t.includes('C++') || t.includes('C'));
        return p.category === filter;
      });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
              03 · Portfolio Showcase
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Things I've built, experimented with, and learned from. Each project reflects deliberate problem solving, clean architecture, and technical growth.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-white/[0.06] rounded-xl backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = filter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-panel glass-panel-hover rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Media Preview Container */}
              <div className="relative w-full aspect-video overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} software project developed by Rithesh Kumar Nyamathabad`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category & Demo badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-blue-300 border border-white/10 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.demoType && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-1 backdrop-blur-md">
                      <Play className="w-2.5 h-2.5 fill-current" />
                      <span>Interactive Sandbox</span>
                    </span>
                  )}
                </div>

                {/* Hover reveal CTA overlay */}
                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-lg bg-slate-900/90 text-xs font-semibold text-white border border-white/20 shadow-xl flex items-center gap-1.5 backdrop-blur-md">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>View Architecture & Details</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Unboxed Metadata: Tech Stack */}
                <div className="pt-2 border-t border-white/[0.05]">
                  <p className="text-[11px] uppercase tracking-wider font-mono text-slate-500 mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-400 font-mono">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="pt-4 border-t border-white/[0.05] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5 focus:outline-none"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      title="GitHub Repository"
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => onSelectProject(project)}
                      aria-label={`Open interactive preview for ${project.title}`}
                      title="Open Interactive Details"
                      className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
