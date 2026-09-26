import React, { useState } from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Target, 
  Code, 
  BrainCircuit, 
  Terminal, 
  Layers, 
  ArrowUpRight,
  Download
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;
  const [imageError, setImageError] = useState(false);

  const interestAreas = [
    { title: 'Software Development', icon: Code, desc: 'Crafting clean, reliable software solutions with structured patterns' },
    { title: 'Artificial Intelligence & ML', icon: BrainCircuit, desc: 'Exploring modern machine learning algorithms and LLM applications' },
    { title: 'Web Development', icon: Layers, desc: 'Designing responsive, accessible and interactive component-based web apps' },
    { title: 'DSA & Problem Solving', icon: Terminal, desc: 'Strengthening algorithmic thinking, memory complexity and efficiency' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
            01 · Background & Focus
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            About Rithesh Kumar Nyamathabad
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* 2-Column Layout: Bio & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Key Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative group">
              <div className="w-full aspect-square max-w-[380px] mx-auto rounded-2xl overflow-hidden glass-panel p-2.5 border border-white/[0.08] shadow-2xl relative">
                {!imageError ? (
                  <img
                    src="/src/assets/images/developer_profile_avatar_1790419397359.jpg"
                    alt="Rithesh Kumar Nyamathabad, Software Developer"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-tr from-slate-900 via-slate-800 to-blue-950 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-4xl font-bold font-display text-white mb-2">RK</span>
                    <span className="text-sm text-slate-300 font-medium">Rithesh Kumar Nyamathabad</span>
                    <span className="text-xs text-blue-400 mt-1">Software Developer</span>
                  </div>
                )}
                
                {/* Subtle verified badge */}
                <div className="absolute bottom-5 right-5 bg-slate-900/90 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-mono text-slate-200">Active Builder</span>
                </div>
              </div>
            </div>

            {/* Quick Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="glass-panel p-4 rounded-xl border border-white/[0.06]">
                <div className="flex items-center gap-2 text-blue-400 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs uppercase font-mono text-slate-400">Currently</span>
                </div>
                <p className="text-xs font-semibold text-white">B.Tech CSE</p>
                <p className="text-[11px] text-slate-400">AI & ML Track</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/[0.06]">
                <div className="flex items-center gap-2 text-indigo-400 mb-1">
                  <Target className="w-4 h-4" />
                  <span className="text-xs uppercase font-mono text-slate-400">Focus</span>
                </div>
                <p className="text-xs font-semibold text-white">Software Dev</p>
                <p className="text-[11px] text-slate-400">+ Applied AI</p>
              </div>

              <div className="glass-panel p-4 rounded-xl border border-white/[0.06]">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs uppercase font-mono text-slate-400">Location</span>
                </div>
                <p className="text-xs font-semibold text-white">Gujarat, India</p>
                <p className="text-[11px] text-slate-400">Marwadi Univ</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Interests */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I'm <strong className="text-white font-semibold">{personal.name}</strong>, a Computer Science Engineering student specializing in <span className="text-blue-400 font-medium">Artificial Intelligence and Machine Learning</span> at Marwadi University in Gujarat, India.
              </p>
              <p className="text-slate-400 text-base">
                I enjoy transforming ideas into practical software experiences and continuously improving my skills through projects, problem solving, and hands-on learning. My approach centers on writing thoughtful code, understanding computational trade-offs, and building software that directly solves problems.
              </p>
              <p className="text-slate-400 text-base">
                Whether implementing dynamic web applications with React, writing foundational algorithms in C++ or Python, or experimenting with generative AI prompts and workflows, I value clarity, performance, and attention to detail.
              </p>
            </div>

            {/* Interest Matrix Cards */}
            <div className="pt-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4">
                Core Domains of Interest
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interestAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.title}
                      className="glass-panel glass-panel-hover p-4 rounded-xl border border-white/[0.06] flex items-start gap-3.5"
                    >
                      <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white font-display">
                          {area.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">
                          {area.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <span>Read detailed education & credentials in resume</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <span className="text-slate-700 hidden sm:inline" aria-hidden="true">/</span>

              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadFilename}
                aria-label="Download Resume PDF"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-blue-400" />
                <span>Download PDF</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
