import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Github, 
  Linkedin, 
  Instagram, 
  Terminal, 
  Sparkles, 
  Play, 
  Check, 
  Copy,
  Download,
  Eye
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const { personal, stats } = PORTFOLIO_DATA;
  const [terminalTab, setTerminalTab] = useState<'status' | 'env' | 'focus'>('status');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Subtle interactive mouse parallax for the card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Ambient background glow orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Impact Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Clean unboxed kicker label with subtle bullet separator */}
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 mb-4 select-none">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>{personal.subtitle}</span>
            </div>

            {/* Main Name Heading - Exactly ONE Primary H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08] mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Rithesh Kumar Nyamathabad
              </span>
            </h1>

            {/* Supporting Headline - H2 */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-200 mb-6 font-display max-w-2xl leading-snug">
              Software Developer building intelligent, modern and impactful digital experiences
            </h2>

            {/* Supporting Crawlable Paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-sans">
              Rithesh Kumar Nyamathabad is a Software Developer and Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Marwadi University. Passionate about software architecture, algorithms, AI systems, and building practical technology products.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadFilename}
                aria-label="Download Resume"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Resume in new tab"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </a>

              <button
                onClick={onOpenResume}
                aria-label="Open Interactive CV modal"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800/40 rounded-lg transition-colors border border-transparent hover:border-slate-800"
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Interactive CV</span>
              </button>
            </div>

            {/* Social & Contact Connections */}
            <div className="flex items-center gap-4 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">
                Connect
              </span>
              <span className="text-slate-700" aria-hidden="true">/</span>

              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-slate-400 hover:text-blue-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={personal.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800/80 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800/80 rounded-lg transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span className="hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Futuristic Developer Terminal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${-mousePos.y * 6}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="w-full max-w-md glass-panel rounded-xl shadow-2xl overflow-hidden border border-white/[0.08]"
            >
              {/* Terminal Window Header Bar */}
              <div className="px-4 py-3 bg-slate-900/90 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">rithesh@dev-workstation:~</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setTerminalTab('status')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      terminalTab === 'status' ? 'bg-blue-500/20 text-blue-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    status
                  </button>
                  <button
                    onClick={() => setTerminalTab('env')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      terminalTab === 'env' ? 'bg-blue-500/20 text-blue-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    env
                  </button>
                  <button
                    onClick={() => setTerminalTab('focus')}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      terminalTab === 'focus' ? 'bg-blue-500/20 text-blue-300' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    focus
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-slate-950/80 space-y-3">
                {terminalTab === 'status' && (
                  <>
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-emerald-400">$</span>
                      <span className="text-slate-200">whoami</span>
                    </div>
                    <div className="pl-4 border-l border-blue-500/30 text-slate-300 space-y-1">
                      <p className="font-semibold text-white">{personal.name}</p>
                      <p className="text-blue-400">{personal.role}</p>
                      <p className="text-slate-400 text-xs">{personal.education.specialization}</p>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 pt-2">
                      <span className="text-emerald-400">$</span>
                      <span className="text-slate-200">cat goals.txt</span>
                    </div>
                    <div className="pl-4 space-y-1 text-slate-300">
                      <p className="flex items-center gap-2">
                        <span className="text-blue-400">&gt;</span>
                        <span>building practical software ideas</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-blue-400">&gt;</span>
                        <span>solving algorithmic problems</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-blue-400">&gt;</span>
                        <span>learning & applying modern AI/ML</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-blue-400">&gt;</span>
                        <span>creating impactful digital products</span>
                      </p>
                    </div>
                  </>
                )}

                {terminalTab === 'env' && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-400 text-xs"># System Environment</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div><span className="text-slate-500">DEGREE:</span> CSE (AI/ML)</div>
                      <div><span className="text-slate-500">CAMPUS:</span> Marwadi Univ</div>
                      <div><span className="text-slate-500">REGION:</span> Gujarat, IN</div>
                      <div><span className="text-slate-500">STACK:</span> Python · React</div>
                    </div>
                    <p className="text-slate-400 text-xs pt-2"># Active Runtime</p>
                    <p className="text-emerald-400 text-xs">Ready for software engineering internships & projects</p>
                  </div>
                )}

                {terminalTab === 'focus' && (
                  <div className="space-y-2 text-slate-300">
                    <p className="text-slate-400 text-xs"># Active Learning & Building</p>
                    <ul className="space-y-1.5 text-xs">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>Data Structures & Algorithmic Problem Solving</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Interactive Full-Stack Web Architecture</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        <span>Generative AI Scaffolding & Prompt Systems</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Prompt Cursor Line */}
                <div className="flex items-center gap-2 text-slate-400 pt-2 border-t border-slate-800/80">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-400">explore --interactive</span>
                  <span className="w-2 h-4 bg-blue-400 animate-pulse" />
                </div>
              </div>

              {/* Terminal Footer Quick Action */}
              <div className="px-4 py-2.5 bg-slate-900/60 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>Terminal interactive</span>
                </span>
                <button
                  onClick={onOpenTerminal}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 flex items-center gap-1"
                >
                  <span>Launch CLI</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Strip (Compliant with tabular numerals & anti-slop rules) */}
        <div className="mt-16 pt-10 border-t border-white/[0.07] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-white tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-slate-200 mt-1 font-display">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                {stat.description}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
