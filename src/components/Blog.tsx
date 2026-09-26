import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, BlogPost } from '../data/portfolioData';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectPost }) => {
  const { blog } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI/ML', 'Web Development', 'Programming'];

  const filteredBlog = selectedCategory === 'All'
    ? blog
    : blog.filter((b) => b.category === selectedCategory);

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <p className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2 select-none">
              10 · Technical Writing & Lessons
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
              From My Notebook
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-xl">
              Ideas, architectural decisions, experiments, and lessons gathered throughout my software development and AI engineering journey.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/80 border border-white/[0.06] rounded-xl backdrop-blur-md">
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
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredBlog.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/[0.08] flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Metadata Row (Unboxed, clean typographic separators per Section 1.A) */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-3">
                  <span className="text-blue-400 font-semibold">{post.category}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{post.readTime}</span>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-blue-300 transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              {/* Card Footer: Read Action */}
              <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1.5">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500">
                  {post.tags[0] && <span>#{post.tags[0]}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
