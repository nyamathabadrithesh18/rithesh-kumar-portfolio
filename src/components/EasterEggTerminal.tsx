import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Sparkles, Send } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';

interface EasterEggTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export const EasterEggTerminal: React.FC<EasterEggTerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; output: string | React.ReactNode }>>([
    {
      cmd: 'init',
      output: (
        <div>
          <p className="text-emerald-400 font-bold">Rithesh Kumar Nyamathabad — Developer Shell v2.6</p>
          <p className="text-slate-400 text-xs mt-1">
            Type <span className="text-blue-300">help</span> to list commands, or try{' '}
            <span className="text-blue-300">projects</span>, <span className="text-blue-300">hire</span>,{' '}
            <span className="text-blue-300">skills</span>, <span className="text-blue-300">matrix</span>,{' '}
            <span className="text-blue-300">resume</span>.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300 text-xs">
            <p><span className="text-blue-400 w-24 inline-block">whoami</span> — Identity and background summary</p>
            <p><span className="text-blue-400 w-24 inline-block">skills</span> — Technical capabilities overview</p>
            <p><span className="text-blue-400 w-24 inline-block">projects</span> — List of featured software builds</p>
            <p><span className="text-blue-400 w-24 inline-block">resume</span> — Open full formatted curriculum vitae</p>
            <p><span className="text-blue-400 w-24 inline-block">contact</span> — Reach out directly via email</p>
            <p><span className="text-blue-400 w-24 inline-block">matrix</span> — Enter the developer code zone</p>
            <p><span className="text-blue-400 w-24 inline-block">clear</span> — Clear the terminal history</p>
            <p><span className="text-blue-400 w-24 inline-block">exit</span> — Close developer console</p>
          </div>
        );
        break;

      case 'whoami':
        output = `${PORTFOLIO_DATA.personal.name} — B.Tech CSE (AI/ML) student at Marwadi University, Gujarat. Focused on software development and applied artificial intelligence.`;
        break;

      case 'skills':
        output = `Core Stack: Python, C++, React, JavaScript, SQL, Generative AI, Git, Linux environments.`;
        break;

      case 'projects':
        output = `Featured: Ezy Bakery (Web E-commerce), Campus Pulse AI (Student Assistant), Hangman (Algorithmic Game), Stock Portfolio Tracker.`;
        break;

      case 'resume':
        output = (
          <div className="space-y-1">
            <p className="text-emerald-400">Curriculum Vitae / Resume:</p>
            <p>
              • Download PDF:{' '}
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeDownloadFilename}
                className="text-blue-400 underline hover:text-blue-300"
              >
                {siteConfig.resumeDownloadFilename}
              </a>
            </p>
            <p>
              • View PDF in tab:{' '}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                {siteConfig.resumeUrl}
              </a>
            </p>
          </div>
        );
        onOpenResume();
        break;

      case 'hire':
        output = `Ready for Software Developer / AI Internships! Email: ${PORTFOLIO_DATA.personal.contact.email}`;
        break;

      case 'contact':
        output = `Direct Email: ${PORTFOLIO_DATA.personal.contact.email} | GitHub: ${PORTFOLIO_DATA.personal.contact.github}`;
        break;

      case 'matrix':
        output = (
          <p className="text-emerald-400 font-mono tracking-widest text-xs animate-pulse">
            01010010 01001011 · Code is poetry written in computational logic · 01000001 01001001
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: inputVal, output }]);
    setInputVal('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-slate-950 border border-blue-500/30 rounded-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm text-slate-200"
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-bold text-white text-xs">rithesh@dev-shell: /workspace</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Screen Logs */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-4 bg-slate-950/95">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">$</span>
                <span className="text-white">{item.cmd}</span>
              </div>
              <div className="pl-4 text-slate-300">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="p-3 bg-slate-900/90 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-bold text-sm">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'whoami', 'projects'..."
            className="flex-1 bg-transparent border-none outline-none text-white text-xs sm:text-sm font-mono placeholder-slate-600"
          />
          <button
            type="submit"
            aria-label="Execute command"
            className="px-2 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-xs"
          >
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
};
