import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Sparkles,
  Layers
} from 'lucide-react';
import { PORTFOLIO_DATA, SkillItem, SkillProficiency } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeConstellationNode, setActiveConstellationNode] = useState<string | null>(null);

  const categories = ['All', 'Programming', 'Web Development', 'AI / ML', 'Database', 'Tools'];

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter((s) => s.category === selectedCategory);

  const getProficiencyBadge = (prof: SkillProficiency) => {
    switch (prof) {
      case 'Building With':
        return {
          label: 'Building With',
          color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40',
          dot: 'bg-emerald-400',
        };
      case 'Comfortable':
        return {
          label: 'Comfortable',
          color: 'text-blue-400 bg-blue-950/40 border-blue-800/40',
          dot: 'bg-blue-400',
        };
      case 'Learning':
        return {
          label: 'Learning',
          color: 'text-amber-400 bg-amber-950/40 border-amber-800/40',
          dot: 'bg-amber-400',
        };
      case 'Exploring':
        return {
          label: 'Exploring',
          color: 'text-purple-400 bg-purple-950/40 border-purple-800/40',
          dot: 'bg-purple-400',
        };
    }
  };

  // Constellation nodes for Tech Stack Visual (Section 11)
  const constellationNodes = [
    { id: 'software', label: 'Software Architecture', x: 50, y: 50, category: 'Core', radius: 42 },
    { id: 'python', label: 'Python', x: 26, y: 35, category: 'Programming', radius: 36 },
    { id: 'aiml', label: 'AI & ML', x: 28, y: 68, category: 'AI / ML', radius: 38 },
    { id: 'web', label: 'Modern Web / React', x: 74, y: 35, category: 'Web', radius: 38 },
    { id: 'js', label: 'JavaScript & TS', x: 80, y: 66, category: 'Web', radius: 34 },
    { id: 'sql', label: 'SQL & DBMS', x: 50, y: 84, category: 'Database', radius: 32 },
    { id: 'cpp', label: 'C / C++', x: 14, y: 50, category: 'Programming', radius: 30 },
    { id: 'tools', label: 'Git & AI Studio', x: 50, y: 16, category: 'Tools', radius: 32 },
  ];

  const constellationLinks = [
    { from: 'software', to: 'python' },
    { from: 'software', to: 'aiml' },
    { from: 'software', to: 'web' },
    { from: 'software', to: 'sql' },
    { from: 'software', to: 'tools' },
    { from: 'python', to: 'cpp' },
    { from: 'python', to: 'aiml' },
    { from: 'web', to: 'js' },
    { from: 'web', to: 'tools' },
    { from: 'sql', to: 'aiml' },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
              02 · Technical Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              Skills & Technology Stack
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Organized by practical proficiency without artificial percentages. Focused on core programming, AI/ML systems, and modern web application development.
            </p>
          </div>

          {/* Proficiency legend */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-slate-500">Proficiency:</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Building With
            </span>
            <span className="flex items-center gap-1.5 text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400" /> Comfortable
            </span>
            <span className="flex items-center gap-1.5 text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Learning
            </span>
          </div>
        </div>

        {/* Category Filter Buttons (Functional Segmented Control) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-white/[0.06] rounded-xl mb-10 w-fit backdrop-blur-md">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20">
          {filteredSkills.map((skill) => {
            const badge = getProficiencyBadge(skill.proficiency);
            return (
              <div
                key={skill.name}
                className="glass-panel glass-panel-hover p-5 rounded-xl border border-white/[0.06] flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <h3 className="font-display font-semibold text-white text-base group-hover:text-blue-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border inline-flex items-center gap-1.5 shrink-0 ${badge.color}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                      <span>{badge.label}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{skill.category}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-blue-400 transition-opacity">
                    active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section 11: Tech Stack Constellation Network Visual */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-4 border-b border-white/[0.06] gap-2">
            <div>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE ECOSYSTEM MAP</span>
              </div>
              <h3 className="text-xl font-bold font-display text-white mt-1">
                Technology Constellation
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Hover over nodes to explore cross-domain connectivity
            </p>
          </div>

          {/* SVG Constellation Canvas */}
          <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl bg-slate-950/60 overflow-hidden border border-white/[0.04] flex items-center justify-center">
            
            {/* Background grid lines */}
            <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />

            {/* SVG Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              {constellationLinks.map((link, idx) => {
                const source = constellationNodes.find((n) => n.id === link.from);
                const target = constellationNodes.find((n) => n.id === link.to);
                if (!source || !target) return null;

                const isConnected =
                  activeConstellationNode === link.from || activeConstellationNode === link.to;

                return (
                  <line
                    key={idx}
                    x1={`${source.x}%`}
                    y1={`${source.y}%`}
                    x2={`${target.x}%`}
                    y2={`${target.y}%`}
                    stroke={isConnected ? '#60a5fa' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isConnected ? '1.5' : '0.6'}
                    strokeDasharray={isConnected ? 'none' : '2,2'}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Interactive Nodes */}
            {constellationNodes.map((node) => {
              const isSelected = activeConstellationNode === node.id;
              const isCenter = node.id === 'software';

              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setActiveConstellationNode(node.id)}
                  onMouseLeave={() => setActiveConstellationNode(null)}
                  className="absolute cursor-pointer transition-all duration-300 group z-10"
                >
                  <div
                    className={`px-3 py-1.5 rounded-lg border backdrop-blur-md flex items-center gap-2 transition-all transform group-hover:scale-110 shadow-lg ${
                      isSelected
                        ? 'bg-blue-600/90 border-blue-400 text-white shadow-blue-500/40 ring-4 ring-blue-500/20'
                        : isCenter
                        ? 'bg-slate-900 border-blue-500/50 text-white'
                        : 'bg-slate-900/90 border-white/10 text-slate-300 group-hover:border-blue-400 group-hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isCenter ? 'bg-blue-400 animate-pulse' : 'bg-slate-400 group-hover:bg-blue-400'
                      }`}
                    />
                    <span className="text-xs font-mono font-medium whitespace-nowrap">
                      {node.label}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Bottom Info Bar */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/[0.06] backdrop-blur-md">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Selected: {activeConstellationNode ? constellationNodes.find(n => n.id === activeConstellationNode)?.label : 'Hover a node'}</span>
              </span>
              <span className="text-slate-500 hidden sm:inline">
                Interconnected Engineering Matrix
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
