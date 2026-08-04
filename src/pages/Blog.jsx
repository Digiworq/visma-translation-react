import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';

export default function Blog() {
  const { blogs } = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const featured = blogs.find(b => b.featured) || blogs[0] || null;
  const rest = blogs.filter(b => b.id !== (featured?.id));

  const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category).filter(Boolean)))];

  const filtered = selectedCategory === 'All'
    ? rest
    : rest.filter(b => b.category === selectedCategory);

  return (
    <main>
      <SEO
        title="Translation Blog - Language, Localization & Apostille Guides"
        description="Expert articles on certified document translation, apostille services, multilingual SEO, medical translation best practices, and language industry insights from Visma Translation's certified linguists."
        canonical="https://visma-translation-react.vercel.app/blog"
      />

      {/* Hero */}
      <section className="page-hero" style={{ paddingBottom: '90px' }}>
        <div className="hero-bg bg-blog"></div>
        <div className="ph-inner" style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}>
          <div className="ph-text" style={{ alignItems: 'center' }}>
            <div className="breadcrumb" style={{ justifyContent: 'center' }}>
              <Link to="/">Home</Link>
              <i className="fas fa-chevron-right"></i>
              <span>Blog</span>
            </div>
            <div className="pg-tag"><i className="fas fa-pen-alt"></i> Knowledge Hub</div>
            <h1>Insights on <span className="ac">Language &amp; Translation</span></h1>
            <p className="ph-desc" style={{ textAlign: 'center' }}>
              Expert articles, industry news, language tips and translation guides from our certified linguists.
            </p>
          </div>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fa" />
          </svg>
        </div>
      </section>

      <section className="sec bg-light">
        <div className="container">

          {/* No posts state */}
          {blogs.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: '#999' }}>
              <i className="fas fa-pen-alt" style={{ fontSize: '56px', marginBottom: '20px', display: 'block', opacity: 0.2 }}></i>
              <h3 style={{ color: '#bbb', fontWeight: 600 }}>No blog posts yet.</h3>
              <p>Check back soon for articles and insights.</p>
            </div>
          )}

          {/* Featured Post */}
          {featured && (
            <>
              <div className="sh">
                <div className="stag">Featured</div>
                <h2>Latest <span className="ac">Article</span></h2>
              </div>
              <div className="feat-post">
                <div className="feat-img" style={{ overflow: 'hidden' }}>
                  {featured.image ? (
                    <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <PlaceholderIllustration />
                  )}
                </div>
                <div className="feat-body">
                  {featured.category && (
                    <span style={{ background: '#e8651a', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '14px' }}>
                      {featured.category}
                    </span>
                  )}
                  <h3>{featured.title}</h3>
                  <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.75 }}>{featured.excerpt}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#aaa', marginBottom: '20px', flexWrap: 'wrap' }}>
                    {featured.date && <span><i className="fas fa-calendar" style={{ color: '#e8651a', marginRight: '5px' }}></i>{featured.date}</span>}
                    {featured.readTime && <span><i className="fas fa-clock" style={{ color: '#e8651a', marginRight: '5px' }}></i>{featured.readTime}</span>}
                    {featured.author && <span><i className="fas fa-user" style={{ color: '#e8651a', marginRight: '5px' }}></i>{featured.author}</span>}
                  </div>
                  <button
                    onClick={() => setExpandedId(expandedId === featured.id ? null : featured.id)}
                    className="blog-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', width: 'fit-content' }}
                  >
                    {expandedId === featured.id ? 'Close Article' : 'Read Full Article'} <i className={`fas fa-arrow-${expandedId === featured.id ? 'up' : 'right'}`}></i>
                  </button>
                  {expandedId === featured.id && (
                    <div style={{ marginTop: '20px', fontSize: '14.5px', lineHeight: '1.85', color: '#555', borderTop: '1px solid #eee', paddingTop: '20px', whiteSpace: 'pre-wrap' }}>
                      {featured.content}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Category Filter */}
          {rest.length > 0 && (
            <>
              <div className="sh c" style={{ marginTop: '60px' }}>
                <div className="stag">All Articles</div>
                <h2>More from Our <span className="ac">Blog</span></h2>
              </div>

              {categories.length > 2 && (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '36px' }}>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        padding: '7px 18px',
                        borderRadius: '50px',
                        border: '1.5px solid',
                        borderColor: selectedCategory === cat ? '#e8651a' : '#ddd',
                        background: selectedCategory === cat ? '#e8651a' : '#fff',
                        color: selectedCategory === cat ? '#fff' : '#555',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              {filtered.length === 0 && (
                <p style={{ textAlign: 'center', color: '#aaa', padding: '40px 0' }}>No posts in this category yet.</p>
              )}

              <div className="blog-grid">
                {filtered.map(blog => (
                  <BlogCard key={blog.id} blog={blog} expanded={expandedId === blog.id} onToggle={() => setExpandedId(expandedId === blog.id ? null : blog.id)} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Have a Translation Project?</h2>
            <p>Get a free quote within 2 hours. Fast, accurate and ISO certified.</p>
          </div>
          <div className="cta-btns">
            <Link to="/translation-services-contact-us" className="btn-wh"><i className="fas fa-paper-plane"></i> Get Free Quote</Link>
            <Link to="/language-services-bangalore" className="btn-wb"><i className="fas fa-th-large"></i> Our Services</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function BlogCard({ blog, expanded, onToggle }) {
  return (
    <div className="blog-card">
      <div className="blog-thumb" style={{ overflow: 'hidden', padding: 0, background: '#f0f0f0' }}>
        {blog.image ? (
          <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <CardPlaceholder category={blog.category} />
        )}
        {blog.category && <span className="blog-cat">{blog.category}</span>}
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          {blog.date && <span><i className="fas fa-calendar"></i> {blog.date}</span>}
          {blog.readTime && <span><i className="fas fa-clock"></i> {blog.readTime}</span>}
          {blog.author && <span><i className="fas fa-user"></i> {blog.author}</span>}
        </div>
        <h4>{blog.title}</h4>
        <p>{blog.excerpt}</p>
        <button
          onClick={onToggle}
          className="blog-link"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {expanded ? 'Close' : 'Read More'} <i className={`fas fa-arrow-${expanded ? 'up' : 'right'}`}></i>
        </button>
        {expanded && (
          <div style={{ marginTop: '16px', fontSize: '13.5px', lineHeight: '1.85', color: '#555', borderTop: '1px solid #eee', paddingTop: '16px', whiteSpace: 'pre-wrap' }}>
            {blog.content}
          </div>
        )}
      </div>
    </div>
  );
}

function PlaceholderIllustration() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#1a1a2e,#0f3460)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <i className="fas fa-pen-alt" style={{ fontSize: '48px', color: 'rgba(232,101,26,0.5)' }}></i>
    </div>
  );
}

function CardPlaceholder({ category }) {
  const colors = {
    'Apostille': '#eafaf1',
    'Localization': '#e8f4fd',
    'Medical': '#fef9e7',
    'Voice-Over': '#f5eef8',
    'Industry': '#fff3ee',
    'SEO': '#eafaf1',
    'Legal': '#e8f4fd',
  };
  const bg = colors[category] || '#f0f0f0';
  return (
    <div style={{ width: '100%', height: '100%', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <i className="fas fa-newspaper" style={{ fontSize: '36px', color: 'rgba(232,101,26,0.35)' }}></i>
    </div>
  );
}
