import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  TrendingUp, 
  Layers, 
  Play,
  RotateCcw,
  Sparkles,
  ShoppingBag,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { SEOHead } from './SEOHead';
import { getProjectJsonLd, getBreadcrumbJsonLd } from '../config/seoConfig';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'interactive'>('details');

  // --- Hangman Interactive Mini-Game State ---
  const hangmanWords = [
    { word: 'ALGORITHM', hint: 'A step-by-step computational procedure' },
    { word: 'PYTHON', hint: 'Interpreted high-level programming language' },
    { word: 'REACT', hint: 'Declarative component-based UI library' },
    { word: 'DATABASE', hint: 'Organized collection of structured data' },
    { word: 'NEURAL', hint: 'Type of biological or artificial computational network' },
  ];
  const [hangmanIndex, setHangmanIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const currentHangman = hangmanWords[hangmanIndex];
  const maxHangmanMistakes = 6;
  const hangmanMistakes = guessedLetters.filter(
    (char) => !currentHangman.word.includes(char)
  ).length;
  const isHangmanWon = currentHangman.word
    .split('')
    .every((char) => guessedLetters.includes(char));
  const isHangmanLost = hangmanMistakes >= maxHangmanMistakes;

  const handleGuess = (letter: string) => {
    if (isHangmanWon || isHangmanLost || guessedLetters.includes(letter)) return;
    setGuessedLetters([...guessedLetters, letter]);
  };

  const handleResetHangman = () => {
    setGuessedLetters([]);
    setHangmanIndex((prev) => (prev + 1) % hangmanWords.length);
  };

  // --- Bakery Interactive Simulator State ---
  const [bakeryCart, setBakeryCart] = useState<{ name: string; price: number; qty: number }[]>([
    { name: 'Artisan Sourdough Batard', price: 6.5, qty: 1 },
    { name: 'Cardamom Almond Brioche', price: 4.2, qty: 2 },
  ]);
  const [customNote, setCustomNote] = useState('Celebration ribbon with handwritten note');
  const bakeryTotal = bakeryCart.reduce((sum, item) => sum + item.price * item.qty, 0);

  // --- Stock Portfolio Simulator State ---
  const [stockAllocation, setStockAllocation] = useState({
    techEquity: 60,
    etfIndex: 30,
    cashReserves: 10,
  });
  const totalCapital = 10000;
  const projectedReturn = (
    (stockAllocation.techEquity * 0.14 +
      stockAllocation.etfIndex * 0.08 +
      stockAllocation.cashReserves * 0.035) /
    100
  ).toFixed(2);

  if (!project) return null;

  const projectJsonLd = getProjectJsonLd({
    title: project.title,
    shortDescription: project.shortDescription,
    category: project.category,
    slug: project.id,
    image: project.image,
    techStack: project.techStack,
    githubUrl: project.githubUrl,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: project.title, path: `/projects/${project.id}` },
  ]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Dynamic SEO Head & Structured Data for this Project */}
      <SEOHead
        title={`${project.title} | Rithesh Kumar Nyamathabad`}
        description={`${project.title} — ${project.shortDescription} Designed and engineered by Rithesh Kumar Nyamathabad.`}
        canonicalPath={`/projects/${project.id}`}
        ogImage={project.image}
        jsonLdData={[projectJsonLd, breadcrumbJsonLd]}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl text-slate-200"
      >
        {/* Top Header Bar with Semantic Breadcrumb */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-slate-400 truncate pr-2">
            <a href="/" onClick={onClose} className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <a href="#projects" onClick={onClose} className="hover:text-white transition-colors">Projects</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-blue-400 font-semibold truncate">{project.title}</span>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            {project.demoType && (
              <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    activeTab === 'details' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('interactive')}
                  className={`px-3 py-1 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                    activeTab === 'interactive' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Play className="w-3 h-3 text-cyan-300" />
                  <span>Live Sandbox</span>
                </button>
              </div>
            )}

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Main Hero Media / Preview */}
          <div className="w-full aspect-video sm:h-72 rounded-xl overflow-hidden relative border border-white/[0.08] shadow-inner bg-slate-950">
            <img
              src={project.image}
              alt={`${project.title} architectural overview by Rithesh Kumar Nyamathabad`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <p className="text-xs font-mono text-blue-400">PROJECT BY RITHESH KUMAR NYAMATHABAD</p>
                <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-display text-white">{project.title}</h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="px-3 py-1.5 bg-slate-900/90 hover:bg-slate-800 border border-white/20 rounded-lg text-xs font-medium text-white flex items-center gap-1.5 backdrop-blur-md transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {activeTab === 'details' ? (
            /* Details View */
            <div className="space-y-8">
              {/* Problem & Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-rose-500/20">
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>The Problem Solved</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>The Architecture & Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-400 mb-3">
                  Key Technical Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-950/40 border border-white/[0.04] flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider font-mono text-slate-400 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700/80 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & What I Learned */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-950/50 border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase mb-2">
                    <Layers className="w-4 h-4" />
                    <span>Technical Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/50 border border-white/[0.05]">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase mb-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>What I Learned</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.learnings}
                  </p>
                </div>
              </div>

              {/* Future Roadmap */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-white/[0.05]">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Future Improvements & Roadmap</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.futureImprovements}
                </p>
              </div>
            </div>
          ) : (
            /* Live Interactive Mini-Sandbox */
            <div className="p-6 rounded-xl bg-slate-950 border border-blue-500/20 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-white">Interactive Sandbox Demonstration</span>
                </div>
                <span className="text-xs font-mono text-slate-400">Live Client-Side Prototype</span>
              </div>

              {/* Interactive Hangman Demo */}
              {project.demoType === 'interactive-hangman' && (
                <div className="space-y-6 font-mono">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-900 rounded-lg border border-slate-800">
                    <div>
                      <p className="text-xs text-slate-400">HINT: {currentHangman.hint}</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Mistakes: <span className="text-rose-400">{hangmanMistakes}</span> / {maxHangmanMistakes}
                      </p>
                    </div>
                    <button
                      onClick={handleResetHangman}
                      className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 border border-slate-700"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Next Word</span>
                    </button>
                  </div>

                  {/* Word letter reveals */}
                  <div className="flex items-center justify-center gap-2.5 py-4">
                    {currentHangman.word.split('').map((char, index) => {
                      const revealed = guessedLetters.includes(char) || isHangmanLost;
                      return (
                        <div
                          key={index}
                          className={`w-10 h-12 rounded-lg border flex items-center justify-center text-xl font-bold ${
                            revealed
                              ? 'bg-blue-600/20 border-blue-400 text-white'
                              : 'bg-slate-900 border-slate-700 text-transparent'
                          }`}
                        >
                          {revealed ? char : '_'}
                        </div>
                      );
                    })}
                  </div>

                  {/* Win / Loss banner */}
                  {isHangmanWon && (
                    <div className="p-3 bg-emerald-950/60 border border-emerald-500/40 rounded-lg text-emerald-300 text-center text-sm">
                      🎉 Computational word solved! Outstanding deductive logic.
                    </div>
                  )}
                  {isHangmanLost && (
                    <div className="p-3 bg-rose-950/60 border border-rose-500/40 rounded-lg text-rose-300 text-center text-sm">
                      Exceeded mistake limit. The word was: <strong>{currentHangman.word}</strong>
                    </div>
                  )}

                  {/* Virtual Alphabet Keyboard */}
                  <div className="grid grid-cols-7 sm:grid-cols-9 gap-1.5">
                    {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => {
                      const isUsed = guessedLetters.includes(letter);
                      return (
                        <button
                          key={letter}
                          disabled={isUsed || isHangmanWon || isHangmanLost}
                          onClick={() => handleGuess(letter)}
                          className={`py-2 text-xs font-semibold rounded transition-colors ${
                            isUsed
                              ? 'bg-slate-900 text-slate-600 border border-slate-800 cursor-not-allowed'
                              : 'bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white border border-slate-700 active:scale-95'
                          }`}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Interactive Bakery Cart Simulator */}
              {project.demoType === 'interactive-bakery' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Live client-side basket recalculation and custom baking note handler:
                  </p>

                  <div className="space-y-2">
                    {bakeryCart.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs sm:text-sm"
                      >
                        <div>
                          <p className="font-semibold text-white">{item.name}</p>
                          <p className="text-slate-400 text-xs">${item.price.toFixed(2)} each</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              const updated = [...bakeryCart];
                              if (updated[idx].qty > 1) {
                                updated[idx].qty -= 1;
                                setBakeryCart(updated);
                              }
                            }}
                            className="w-6 h-6 rounded bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700"
                          >
                            -
                          </button>
                          <span className="font-mono px-2">{item.qty}</span>
                          <button
                            onClick={() => {
                              const updated = [...bakeryCart];
                              updated[idx].qty += 1;
                              setBakeryCart(updated);
                            }}
                            className="w-6 h-6 rounded bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700"
                          >
                            +
                          </button>
                          <span className="font-mono font-semibold text-emerald-400 min-w-16 text-right">
                            ${(item.price * item.qty).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
                    <label className="text-xs font-mono text-slate-400">Order Customization Message</label>
                    <input
                      type="text"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      className="w-full px-3 py-1.5 bg-slate-950 border border-slate-700 rounded text-xs text-white focus:outline-none focus:border-blue-500"
                      placeholder="Special instructions..."
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-blue-950/30 border border-blue-500/30 rounded-lg">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <ShoppingBag className="w-4 h-4 text-blue-400" />
                      <span>Simulated Cart Total:</span>
                    </div>
                    <span className="text-lg font-mono font-bold text-white tabular-nums">
                      ${bakeryTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              )}

              {/* Interactive Stock Portfolio Simulator */}
              {project.demoType === 'interactive-stock' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Drag the capital allocation sliders to simulate risk-weighted annual portfolio yield:
                  </p>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-blue-400">Tech Equities ({stockAllocation.techEquity}%)</span>
                        <span className="text-slate-300">${(totalCapital * (stockAllocation.techEquity / 100)).toLocaleString()}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={stockAllocation.techEquity}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          const remaining = 100 - val;
                          setStockAllocation({
                            techEquity: val,
                            etfIndex: Math.round(remaining * 0.7),
                            cashReserves: Math.round(remaining * 0.3),
                          });
                        }}
                        className="w-full accent-blue-500 cursor-pointer"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-indigo-400">Index ETFs ({stockAllocation.etfIndex}%)</span>
                        <span className="text-slate-300">${(totalCapital * (stockAllocation.etfIndex / 100)).toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-indigo-950 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: `${stockAllocation.etfIndex}%` }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span className="text-emerald-400">Cash Reserves ({stockAllocation.cashReserves}%)</span>
                        <span className="text-slate-300">${(totalCapital * (stockAllocation.cashReserves / 100)).toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-emerald-950 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${stockAllocation.cashReserves}%` }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between font-mono">
                    <div>
                      <p className="text-xs text-slate-400">Weighted Expected Yield</p>
                      <p className="text-lg font-bold text-emerald-400 tabular-nums">+{projectedReturn}% / yr</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-400">1-Year Capital Projection</p>
                      <p className="text-lg font-bold text-white tabular-nums">
                        ${(totalCapital * (1 + Number(projectedReturn) / 100)).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Footer Bar */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Explore Source on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
            >
              Close Window
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
