import React, { useEffect } from 'react';
import { SEO_CONFIG, getCanonicalUrl } from '../config/seoConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonLdData?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = SEO_CONFIG.defaultTitle,
  description = SEO_CONFIG.defaultDescription,
  canonicalPath = '/',
  ogType = 'website',
  ogImage = SEO_CONFIG.defaultOgImage,
  jsonLdData,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to update or create <meta> tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'author', SEO_CONFIG.authorName);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. Canonical Link
    const fullCanonical = getCanonicalUrl(canonicalPath);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonical);

    // 4. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonical);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', SEO_CONFIG.authorName);
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SEO_CONFIG.siteUrl}${ogImage}`;
    setMetaTag('property', 'og:image', fullOgImage);

    // 5. Dynamic JSON-LD Structured Data
    const SCRIPT_ID = 'dynamic-seo-jsonld';
    let scriptTag = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = SCRIPT_ID;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    if (jsonLdData) {
      scriptTag.text = JSON.stringify(jsonLdData, null, 2);
    }
  }, [title, description, canonicalPath, ogType, ogImage, jsonLdData]);

  return null;
};
