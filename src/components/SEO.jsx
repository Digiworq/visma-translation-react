import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://visma-translation-react.vercel.app';

export default function SEO({ title, description, keywords, canonical, schema }) {
  const { pathname } = useLocation();

  // Always use the passed canonical, or auto-generate from current path
  const canonicalUrl = canonical || `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    if (title) {
      document.title = `${title} | VISMA Translation`;
    }

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setOgMeta = (property, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setOgMeta('og:title', title ? `${title} | VISMA Translation` : undefined);
    setOgMeta('og:description', description);
    setOgMeta('og:url', canonicalUrl);
    setOgMeta('og:type', 'website');
    setOgMeta('og:site_name', 'VISMA Translation');

    // Twitter card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title ? `${title} | VISMA Translation` : undefined);
    setMeta('twitter:description', description);
    setMeta('twitter:url', canonicalUrl);

    // Canonical link tag
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonicalUrl);

    // Robots
    setMeta('robots', 'index, follow');

    // JSON-LD schema
    const existingScript = document.querySelector('script[data-page-schema="true"]');
    if (existingScript) existingScript.remove();

    if (schema) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.querySelector('script[data-page-schema="true"]');
      if (s) s.remove();
    };
  }, [title, description, keywords, canonicalUrl, schema]);

  return null;
}
