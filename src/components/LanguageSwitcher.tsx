import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface LanguageOption {
  code: string;
  label: string;
  native: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', native: 'English' },
  { code: 'hi', label: 'Hindi', native: 'हिन्दी' },
  { code: 'fr', label: 'French', native: 'Français' },
  { code: 'ja', label: 'Japanese', native: '日本語' },
];

export interface LanguageSwitcherProps {
  currentLang?: string;
  onLangChange?: (code: string) => void;
  variant?: 'dropdown' | 'pill-toggle';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLang: externalLang,
  onLangChange,
  variant = 'dropdown',
  className = '',
}) => {
  // Support both internal state management and controlled parent props
  const [internalLang, setInternalLang] = useState<string>('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeCode = externalLang !== undefined ? externalLang : internalLang;

  // Sync internal state when external prop changes
  useEffect(() => {
    if (externalLang !== undefined) {
      setInternalLang(externalLang);
    }
  }, [externalLang]);

  // Handle outside click dismissal
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleSelect = (code: string) => {
    setInternalLang(code);
    if (onLangChange) {
      onLangChange(code);
    }
    setIsOpen(false);
  };

  const activeLanguage =
    SUPPORTED_LANGUAGES.find((l) => l.code === activeCode) || SUPPORTED_LANGUAGES[0];

  // Pill-toggle variant (compact segmented layout)
  if (variant === 'pill-toggle') {
    return (
      <div
        className={`inline-flex items-center p-1 bg-slate-900/90 border border-white/[0.08] rounded-xl backdrop-blur-md ${className}`}
        role="group"
        aria-label="Select Language"
      >
        {SUPPORTED_LANGUAGES.map((lang) => {
          const isSelected = activeCode === lang.code;
          return (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleSelect(lang.code)}
              className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-all ${
                isSelected
                  ? 'bg-blue-600 text-white font-semibold shadow-sm shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
              title={`${lang.label} (${lang.native})`}
            >
              {lang.code.toUpperCase()}
            </button>
          );
        })}
      </div>
    );
  }

  // Default: Glassmorphic Dropdown variant
  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-2.5 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-white/[0.08] hover:border-blue-500/40 rounded-lg transition-all flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-sm"
        title="Switch language locale"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Language Selector"
      >
        <Globe className="w-3.5 h-3.5 text-blue-400" />
        <span className="font-semibold tracking-wider text-[11px]">
          {activeLanguage.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-400' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Supported Languages"
          className="absolute right-0 mt-2 w-36 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-1.5 z-50 animate-fadeIn"
        >
          <div className="px-2.5 py-1 text-[10px] font-mono text-slate-500 border-b border-white/[0.06] mb-1 select-none">
            LOCALE (I18N)
          </div>
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isSelected = activeCode === lang.code;
            return (
              <button
                key={lang.code}
                role="option"
                aria-selected={isSelected}
                type="button"
                onClick={() => handleSelect(lang.code)}
                className={`w-full px-2.5 py-1.5 rounded-lg text-left text-xs font-mono flex items-center justify-between transition-colors ${
                  isSelected
                    ? 'bg-blue-600/20 text-blue-300 font-semibold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-500 uppercase">{lang.code}</span>
                  <span>{lang.native}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
