/**
 * Centralized SEO & Meta Configuration for Rithesh Kumar Nyamathabad
 * Configure production domain, Google Search Console, Analytics, and Schema.org metadata here.
 */

export const SEO_CONFIG = {
  // Production domain — replace with your actual custom domain when deployed
  // All canonical URLs, sitemaps, Open Graph images, and JSON-LD will reference this URL.
  siteUrl: (import.meta.env?.VITE_SITE_URL as string) || 'https://YOUR-DOMAIN.com',

  // Exact name and entity representation for Google Search
  authorName: 'Rithesh Kumar Nyamathabad',
  professionalTitle: 'Software Developer',
  university: 'Marwadi University',
  degree: 'B.Tech in Computer Science and Engineering (AI/ML)',
  location: 'Gujarat, India',

  // Google Search Console verification code (replace placeholder when you verify in GSC)
  googleSiteVerification: 'GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',

  // Google Analytics measurement ID (optional)
  googleAnalyticsId: 'G-XXXXXXXXXX',

  // Default SEO Copy
  defaultTitle: 'Rithesh Kumar Nyamathabad | Software Developer',
  defaultDescription:
    'Rithesh Kumar Nyamathabad is a Software Developer and B.Tech Computer Science Engineering student specializing in AI/ML at Marwadi University. Explore his projects, skills, certifications, blog and developer journey.',

  // Social Sharing Visual Asset
  defaultOgImage: '/src/assets/images/developer_profile_avatar_1790419397359.jpg',

  // Verified social profiles for Schema.org 'sameAs'
  socialProfiles: {
    github: 'https://github.com/nyamathabadrithesh18',
    linkedin: 'https://www.linkedin.com/in/rithesh-kumar-nyamathabad-0bb1ba382/',
    instagram: 'https://www.instagram.com/_urs_sonu_18/',
    email: 'nyamathabadrithesh18@gmail.com',
  },
};

/**
 * Generate fully-qualified Canonical URL
 */
export function getCanonicalUrl(path: string = '/'): string {
  const cleanBase = SEO_CONFIG.siteUrl.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath === '/' ? '/' : cleanPath}`;
}

/**
 * Schema.org Person JSON-LD
 * Helps search engines connect the entity "Rithesh Kumar Nyamathabad"
 */
export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEO_CONFIG.authorName,
    url: getCanonicalUrl('/'),
    jobTitle: SEO_CONFIG.professionalTitle,
    description:
      'Software Developer and Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at Marwadi University.',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: SEO_CONFIG.university,
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Gujarat',
        addressCountry: 'India',
      },
    },
    knowsAbout: [
      'Software Development',
      'Artificial Intelligence',
      'Machine Learning',
      'Web Development',
      'Data Structures & Algorithms',
      'Python',
      'React',
      'C++',
      'SQL',
    ],
    sameAs: [
      SEO_CONFIG.socialProfiles.github,
      SEO_CONFIG.socialProfiles.linkedin,
      SEO_CONFIG.socialProfiles.instagram,
    ].filter(Boolean),
  };
}

/**
 * Schema.org WebSite JSON-LD
 */
export function getWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Rithesh Kumar Nyamathabad — Software Developer Portfolio',
    alternateName: 'Rithesh Kumar Nyamathabad',
    url: getCanonicalUrl('/'),
    description: SEO_CONFIG.defaultDescription,
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.authorName,
    },
  };
}

/**
 * Schema.org BreadcrumbList JSON-LD
 */
export function getBreadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getCanonicalUrl(item.path),
    })),
  };
}

/**
 * Schema.org SoftwareApplication / CreativeWork JSON-LD for Project Pages
 */
export function getProjectJsonLd(project: {
  title: string;
  shortDescription: string;
  category: string;
  slug: string;
  image: string;
  techStack: string[];
  githubUrl: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'All',
    description: `${project.title} - ${project.shortDescription} Developed by Rithesh Kumar Nyamathabad.`,
    url: getCanonicalUrl(`/projects/${project.slug}`),
    image: project.image.startsWith('http') ? project.image : `${SEO_CONFIG.siteUrl}${project.image}`,
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.authorName,
      url: getCanonicalUrl('/'),
    },
    codeRepository: project.githubUrl,
  };
}

/**
 * Schema.org BlogPosting JSON-LD for Blog Articles
 */
export function getBlogPostingJsonLd(post: {
  title: string;
  summary: string;
  slug: string;
  date: string;
  tags: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    url: getCanonicalUrl(`/blog/${post.slug}`),
    datePublished: '2026-01-15',
    dateModified: '2026-03-20',
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.authorName,
      url: getCanonicalUrl('/'),
    },
    publisher: {
      '@type': 'Person',
      name: SEO_CONFIG.authorName,
    },
    keywords: post.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getCanonicalUrl(`/blog/${post.slug}`),
    },
  };
}
