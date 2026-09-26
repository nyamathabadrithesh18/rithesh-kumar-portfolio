import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Achievements } from './components/Achievements';
import { Services } from './components/Services';
import { GitHubActivity } from './components/GitHubActivity';
import { Blog } from './components/Blog';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ProjectModal } from './components/ProjectModal';
import { BlogModal } from './components/BlogModal';
import { ResumeModal } from './components/ResumeModal';
import { EasterEggTerminal } from './components/EasterEggTerminal';
import { SEOHead } from './components/SEOHead';
import { ProjectItem, BlogPost, PORTFOLIO_DATA } from './data/portfolioData';
import { SEO_CONFIG, getPersonJsonLd, getWebSiteJsonLd } from './config/seoConfig';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [currentLang, setCurrentLang] = useState('en');

  // Handle URL deep-linking on initial mount and browser back/forward buttons
  useEffect(() => {
    const handleUrlRoute = () => {
      const hash = window.location.hash.replace(/^#/, '');
      const path = window.location.pathname.replace(/^\//, '');

      // Check projects deep link
      if (path.startsWith('projects/') || hash.startsWith('projects/')) {
        const id = (path.startsWith('projects/') ? path : hash).replace('projects/', '');
        const matched = PORTFOLIO_DATA.projects.find((p) => p.id === id);
        if (matched) {
          setSelectedProject(matched);
          setSelectedBlogPost(null);
          return;
        }
      }

      // Check blog deep link
      if (path.startsWith('blog/') || hash.startsWith('blog/')) {
        const slug = (path.startsWith('blog/') ? path : hash).replace('blog/', '');
        const matched = PORTFOLIO_DATA.blog.find((b) => b.slug === slug);
        if (matched) {
          setSelectedBlogPost(matched);
          setSelectedProject(null);
          return;
        }
      }

      // Check resume route
      if (path === 'resume' || hash === 'resume') {
        setIsResumeOpen(true);
      }
    };

    handleUrlRoute();
    window.addEventListener('popstate', handleUrlRoute);
    window.addEventListener('hashchange', handleUrlRoute);
    return () => {
      window.removeEventListener('popstate', handleUrlRoute);
      window.removeEventListener('hashchange', handleUrlRoute);
    };
  }, []);

  const handleOpenProject = (project: ProjectItem) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#projects/${project.id}`);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '#projects');
  };

  const handleOpenBlog = (post: BlogPost) => {
    setSelectedBlogPost(post);
    window.history.pushState(null, '', `#blog/${post.slug}`);
  };

  const handleCloseBlog = () => {
    setSelectedBlogPost(null);
    window.history.pushState(null, '', '#blog');
  };

  // Easter Egg keyboard listener: typing 'sudo' anywhere triggers the console
  useEffect(() => {
    let buffer = '';
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid capturing input inside form fields
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName)) return;

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
        return;
      }

      buffer += e.key.toLowerCase();
      if (buffer.length > 10) buffer = buffer.slice(-10);

      if (buffer.endsWith('sudo')) {
        setIsTerminalOpen(true);
        buffer = '';
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Track active section for navbar indicators
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'projects', 'journey', 'experience', 'blog', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-blue-600/30 selection:text-blue-200">
      {/* Default Homepage SEO Head & Schema.org Structured Data */}
      {!selectedProject && !selectedBlogPost && (
        <SEOHead
          title={SEO_CONFIG.defaultTitle}
          description={SEO_CONFIG.defaultDescription}
          canonicalPath="/"
          jsonLdData={[getPersonJsonLd(), getWebSiteJsonLd()]}
        />
      )}

      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* 3-zone Sticky Top Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        activeSection={activeSection}
        currentLang={currentLang}
        onLangChange={(lang) => setCurrentLang(lang)}
      />

      {/* Main Content Landmarks */}
      <main id="main-content">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <About onOpenResume={() => setIsResumeOpen(true)} />

        <Skills />

        <Projects onSelectProject={handleOpenProject} />

        <JourneyTimeline />

        <Experience />

        <Certifications />

        <Achievements />

        <Services />

        <GitHubActivity />

        <Blog onSelectPost={handleOpenBlog} />

        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />

        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive Modals with Unique URLs and Structured Data */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      <BlogModal
        post={selectedBlogPost}
        onClose={handleCloseBlog}
        onSelectPost={handleOpenBlog}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <EasterEggTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />
    </div>
  );
}

