import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Check, 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Instagram, 
  GraduationCap, 
  Code, 
  Sparkles,
  FileText,
  Eye
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { siteConfig } from '../config/siteConfig';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, skills, projects, experience } = PORTFOLIO_DATA;
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl text-slate-200"
      >
        {/* Sticky Control Header */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span id="resume-title" className="text-sm font-semibold text-white font-display">
              Curriculum Vitae · {personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors border border-slate-700"
              title="View PDF in new tab"
              aria-label="View Resume PDF in new tab"
            >
              <Eye className="w-3.5 h-3.5 text-blue-400" />
              <span>View PDF</span>
            </a>

            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeDownloadFilename}
              onClick={() => {
                try {
                  confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { y: 0.8 },
                  });
                } catch (e) {
                  // safe fallback
                }
                setDownloadSuccess(true);
                setTimeout(() => setDownloadSuccess(false), 3000);
              }}
              aria-label="Download Resume PDF"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </a>

            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Interactive Resume Sheet */}
        <div className="p-6 sm:p-12 space-y-8 bg-slate-950 font-sans print:bg-white print:text-black">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300">
            <h1 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight print:text-black">
              {personal.name}
            </h1>
            <p className="text-blue-400 font-medium text-sm sm:text-base mt-1 print:text-blue-700">
              {personal.role} · {personal.education.specialization}
            </p>
            
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mt-3 print:text-gray-600">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>{personal.contact.email}</span>
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.contact.location}</span>
              </span>
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>github.com/nyamathabadrithesh18</span>
              </a>
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="flex items-center gap-1 hover:text-rose-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold mb-3 print:text-blue-700">
              Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] print:bg-gray-50 print:border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white print:text-black">
                    {personal.education.university}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium print:text-gray-800">
                    {personal.education.degree} — {personal.education.specialization}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 sm:mt-0 print:text-gray-500">
                  {personal.education.location} · {personal.education.status}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold mb-3 print:text-blue-700">
              Technical Proficiencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/[0.06] print:bg-gray-50">
                <span className="font-semibold text-white block mb-1 print:text-black">Programming Languages</span>
                <span className="text-slate-300 print:text-gray-700">Python, C++, C, JavaScript, Java</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/[0.06] print:bg-gray-50">
                <span className="font-semibold text-white block mb-1 print:text-black">Web Development</span>
                <span className="text-slate-300 print:text-gray-700">React, JavaScript (ES6+), HTML5, CSS3, Next.js, Tailwind CSS</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/[0.06] print:bg-gray-50">
                <span className="font-semibold text-white block mb-1 print:text-black">AI & Machine Learning</span>
                <span className="text-slate-300 print:text-gray-700">Foundational AI/ML, Generative AI, Prompt Engineering, Heuristic Search</span>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/[0.06] print:bg-gray-50">
                <span className="font-semibold text-white block mb-1 print:text-black">Databases & Developer Tools</span>
                <span className="text-slate-300 print:text-gray-700">SQL, MySQL, DBMS Concepts, Git, GitHub, VS Code, Google AI Studio, Vercel</span>
              </div>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold mb-3 print:text-blue-700">
              Selected Technical Projects
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] print:bg-gray-50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="font-bold text-white text-sm print:text-black">{p.title}</h3>
                    <span className="text-xs font-mono text-blue-400 print:text-blue-700">
                      {p.techStack.join(' · ')}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed print:text-gray-700">
                    {p.shortDescription}
                  </p>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed print:text-gray-600">
                    <strong>Solution:</strong> {p.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Track */}
          <div>
            <h2 className="text-xs uppercase font-mono tracking-widest text-blue-400 font-semibold mb-3 print:text-blue-700">
              Experience & Activities
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] print:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-white text-sm print:text-black">{exp.role}</h3>
                      <p className="text-xs text-slate-400 print:text-gray-600">{exp.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 print:text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed print:text-gray-700">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-white/[0.08] flex items-center justify-between">
          <p className="text-xs font-mono text-slate-400">
            Path: <code className="text-blue-400">/resume.pdf</code> (Configurable asset)
          </p>

          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeDownloadFilename}
            aria-label="Download Resume PDF"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
