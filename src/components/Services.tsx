import React from 'react';
import { Code2, Globe, Cpu, Terminal, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Services: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Globe':
        return Globe;
      case 'Cpu':
        return Cpu;
      default:
        return Terminal;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
            08 · Engineering Focus
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            What I Build
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
            Core technical offerings spanning software engineering, interactive web applications, applied AI systems, and developer tooling.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 w-fit rounded-xl bg-blue-600/10 text-blue-400 border border-blue-500/20 mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] space-y-2">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
