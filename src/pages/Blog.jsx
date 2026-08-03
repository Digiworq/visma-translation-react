import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';

export default function Blog() {
  const { blogs } = useData();

  const featured = blogs.find(b => b.featured) || blogs[0];
  const rest = blogs.filter(b => b.id !== (featured?.id));

  return (
    <main>
      <SEO
        title="Translation Blog - Language, Localization & Apostille Guides"
        description="Expert articles on certified document translation, apostille services, multilingual SEO, medical translation best practices, and language industry insights from VISMA Translation's certified linguists."
        canonical="https://vismatranslation.com/blog"
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

      {blogs.length === 0 ? (
        <section className="sec bg-light">
          <div className="container" style={{ textAlign: 'center', padding: '80px 20px' }}>
            <i className="fas fa-blog" style={{ fontSize: '50px', color: '#ddd', marginBottom: '20px', display: 'block' }}></i>
            <h3 style={{ color: '#999' }}>No blog posts yet.</h3>
            <p style={{ color: '#bbb' }}>Check back soon for articles from our team.</p>
          </div>
        </section>
      ) : (
        <>
          {/* Featured post */}
          {featured && (
            <section className="sec bg-light">
              <div className="container">
                <div className="sh">
                  <div className="stag">Featured</div>
                  <h2>Latest <span className="ac">Article</span></h2>
                </div>
                <div className="feat-post">
                  <div className="feat-img" style={{ background: 'linear-gradient(135deg,#1a1a2e,#0f3460)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {featured.image ? (
                      <img src={featured.image} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', padding: '40px' }}>
                        <i className="fas fa-newspaper" style={{ fontSize: '60px', marginBottom: '12px', display: 'block', color: '#e8651a', opacity: 0.6 }}></i>
                        <span style={{ fontSize: '13px' }}>{featured.category}</span>
                      </div>
                    )}
                  </div>
                  <div className="feat-body">
                    <span style={{ background: '#e8651a', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '50px', display: 'inline-block' }}>
                      {featured.category}
                    </span>
                    <h3>{featured.title}</h3>
                    <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.75 }}>{featured.excerpt}</p>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#aaa', flexWrap: 'wrap' }}>
                      {featured.date && <span><i className="fas fa-calendar" style={{ color: '#e8651a', marginRight: '5px' }}></i>{featured.date}</span>}
                      {featured.readTime && <span><i className="fas fa-clock" style={{ color: '#e8651a', marginRight: '5px' }}></i>{featured.readTime} read</span>}
                      {featured.author && <span><i className="fas fa-user" style={{ color: '#e8651a', marginRight: '5px' }}></i>{featured.author}</span>}
                    </div>
                    {featured.content && (
                      <div style={{ marginTop: '18px', color: '#555', fontSize: '14px', lineHeight: 1.8 }}>
                        {featured.content}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Rest of posts */}
          {rest.length > 0 && (
            <section className="sec bg-light" style={{ paddingTop: 0 }}>
              <div className="container">
                <div className="sh c">
                  <div className="stag">All Articles</div>
                  <h2>More from Our <span className="ac">Blog</span></h2>
                </div>
                <div className="blog-grid">
                  {rest.map(b => (
                    <div className="blog-card" key={b.id}>
                      <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#1a1d24,#2c3040)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                        {b.image ? (
                          <img src={b.image} alt={b.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <i className="fas fa-newspaper" style={{ fontSize: '40px', color: 'rgba(232,101,26,0.5)' }}></i>
                        )}
                        <span className="blog-cat">{b.category}</span>
                      </div>
                      <div className="blog-body">
                        <div className="blog-meta">
                          {b.date && <span><i className="fas fa-calendar"></i> {b.date}</span>}
                          {b.readTime && <span><i className="fas fa-clock"></i> {b.readTime}</span>}
                        </div>
                        <h4>{b.title}</h4>
                        <p>{b.excerpt}</p>
                        {b.author && <p style={{ fontSize: '12px', color: '#aaa', marginTop: '8px' }}><i className="fas fa-user" style={{ color: '#e8651a', marginRight: '5px' }}></i>{b.author}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
