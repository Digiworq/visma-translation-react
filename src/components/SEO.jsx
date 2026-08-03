import { useEffect } from 'react';

export default function SEO({ title, description, keywords, canonical, schema }) {
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
    if (canonical) {
      setOgMeta('og:url', canonical);
      let twitterUrl = document.querySelector('meta[name="twitter:url"]');
      if (!twitterUrl) {
        twitterUrl = document.createElement('meta');
        twitterUrl.setAttribute('name', 'twitter:url');
        document.head.appendChild(twitterUrl);
      }
      twitterUrl.setAttribute('content', canonical);
    }

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // Inject / replace per-page JSON-LD schema
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
      // Clean up page-specific schema on unmount so it doesn't leak to the next page
      const s = document.querySelector('script[data-page-schema="true"]');
      if (s) s.remove();
    };
  }, [title, description, keywords, canonical, schema]);

  return null;
}
