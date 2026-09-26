import React, { useState } from 'react';
import { X, Calendar, Clock, Share2, Check, ArrowLeft, BookOpen, Sparkles, ChevronRight } from 'lucide-react';
import { BlogPost, PORTFOLIO_DATA } from '../data/portfolioData';
import { SEOHead } from './SEOHead';
import { getBlogPostingJsonLd, getBreadcrumbJsonLd } from '../config/seoConfig';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onSelectPost }) => {
  const { blog, personal } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + '#blog/' + post.slug);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedPosts = blog.filter((p) => p.id !== post.id);

  const blogJsonLd = getBlogPostingJsonLd({
    title: post.title,
    summary: post.summary,
    slug: post.slug,
    date: post.date,
    tags: post.tags,
  });

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Notebook', path: '/#blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      {/* Dynamic SEO Head & Structured Data for this Article */}
      <SEOHead
        title={`${post.title} | Rithesh Kumar Nyamathabad`}
        description={`${post.summary} Written by Rithesh Kumar Nyamathabad.`}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
        jsonLdData={[blogJsonLd, breadcrumbJsonLd]}
      />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl text-slate-200"
      >
        {/* Modal Top Header with Breadcrumbs */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-white/[0.08] flex items-center justify-between">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs font-mono text-slate-400 truncate pr-2">
            <a href="/" onClick={onClose} className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <a href="#blog" onClick={onClose} className="hover:text-white transition-colors">Notebook</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <span className="text-blue-400 font-semibold truncate">{post.title}</span>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="px-3 py-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Share article link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close article modal"
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <article className="p-6 sm:p-10 space-y-6">
          {/* Metadata Row (Zero-Pill discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="text-blue-400 font-semibold">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.date}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Article Title */}
          <h1 id="article-title" className="text-2xl sm:text-3xl font-bold font-display text-white leading-tight">
            {post.title}
          </h1>

          {/* Author Byline */}
          <div className="py-3 border-y border-white/[0.08] flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center font-bold text-sm text-blue-300">
              RK
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{personal.name}</p>
              <p className="text-xs text-slate-400">{personal.role} · B.Tech CSE (AI/ML)</p>
            </div>
          </div>

          {/* Lead Summary */}
          <div className="p-4 rounded-xl bg-blue-950/20 border-l-2 border-blue-500 text-sm text-blue-200 italic leading-relaxed">
            {post.summary}
          </div>

          {/* Paragraph Content */}
          <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-white/[0.08]">
            <p className="text-xs font-mono uppercase text-slate-500 mb-2">Topic Tags</p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/80"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Notebook Entries */}
          {relatedPosts.length > 0 && (
            <div className="pt-6 border-t border-white/[0.08]">
              <h3 className="text-sm font-semibold font-display text-white mb-3">
                Other Notebook Entries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedPosts.map((related) => (
                  <button
                    key={related.id}
                    onClick={() => onSelectPost(related)}
                    className="p-3 text-left rounded-xl bg-slate-950/60 hover:bg-slate-800 border border-white/[0.06] transition-colors group"
                  >
                    <span className="text-[11px] font-mono text-blue-400">{related.category}</span>
                    <h4 className="text-xs font-semibold text-white group-hover:text-blue-300 line-clamp-1 mt-0.5">
                      {related.title}
                    </h4>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="pt-4 flex justify-between items-center">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to notebook list</span>
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
