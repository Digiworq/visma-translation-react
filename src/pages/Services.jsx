import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useData } from '../context/DataContext';

export default function Services() {
  const { services } = useData();

  return (
    <main>
      <SEO
        title="Digital & Media Language Services - Localization, SEO, Voice-Over & More"
        description="Complete digital language services including website localization, SEO content writing, social media content, subtitling, DTP, voice-over, transcription, video editing, social media marketing, and web development in Bangalore."
        keywords="language services bangalore, website localization india, voiceover agency bangalore, subtitling services india, video editing bangalore, web development multilingual, social media marketing agency, seo content writing bangalore, desktop publishing dtp bangalore, transcription services india, digital media services, localization agency india, multilingual digital services, content creation agency, language solutions india"
        canonical="https://visma-translation-react.vercel.app/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Digital & Language Services by VISMA Translation",
          "description": "Complete range of digital and language services offered by VISMA Translation in Bangalore.",
          "url": "https://visma-translation-react.vercel.app/services",
          "numberOfItems": 10,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Website Localization", "url": "https://visma-translation-react.vercel.app/localization", "provider": { "@type": "Organization", "name": "VISMA Translation" } } },
            { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "SEO Content Writing", "url": "https://visma-translation-react.vercel.app/seo-content" } },
            { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "Social Media Content", "url": "https://visma-translation-react.vercel.app/social-media" } },
            { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Sub-Titling Services", "url": "https://visma-translation-react.vercel.app/subtitling" } },
            { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Desktop Publishing (DTP)", "url": "https://visma-translation-react.vercel.app/dtp" } },
            { "@type": "ListItem", "position": 6, "item": { "@type": "Service", "name": "Voice-Over Services", "url": "https://visma-translation-react.vercel.app/voiceover" } },
            { "@type": "ListItem", "position": 7, "item": { "@type": "Service", "name": "Transcription Services", "url": "https://visma-translation-react.vercel.app/transcription" } },
            { "@type": "ListItem", "position": 8, "item": { "@type": "Service", "name": "Video Editing", "url": "https://visma-translation-react.vercel.app/video-editing" } },
            { "@type": "ListItem", "position": 9, "item": { "@type": "Service", "name": "Social Media Marketing", "url": "https://visma-translation-react.vercel.app/social-media-marketing" } },
            { "@type": "ListItem", "position": 10, "item": { "@type": "Service", "name": "Web Development", "url": "https://visma-translation-react.vercel.app/web-development" } }
          ]
        }}
      />
      <section className="page-hero">
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Services</span></div>
            <div className="pg-tag"><i className="fas fa-th-large"></i> What We Offer</div>
            <h1>Complete Digital &amp;<br /><span className="ac">Language Solutions</span></h1>
            <p className="ph-desc">From precise website localization to high-converting social media marketing and web development — Visma delivers end-to-end solutions tailored for global businesses.</p>
            <div className="ph-btns">
              <Link to="/contact" className="btn-org"><i className="fas fa-paper-plane"></i> Get a Free Quote</Link>
              <Link to="/translation-services" className="btn-ghost"><i className="fas fa-language"></i> Translation Services</Link>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" alt="Complete Language Solutions" loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(232,101,26,.25),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> {services.length} Services</div>
              <div className="f-badge p2"><i className="fas fa-globe"></i> 100+ Languages</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#fff" /></svg></div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="service-page-with-sidebar">
            <ServiceSidebar
              title="Services"
              items={services}
              hubPath="/services"
              hubLabel="Services"
            />
            <div className="service-page-main">
              <div className="sh" style={{ textAlign: 'left', marginBottom: '28px' }}>
                <div className="stag">FULL SERVICE SUITE</div>
                <h2>Explore Our <span className="ac">Specialized Services</span></h2>
                <p className="sh-desc">Comprehensive solutions for localization, digital marketing, multimedia post-production, and web technology.</p>
              </div>

              <div className="g2">
                {services.map(s => (
                  <div className="card" key={s.key || s.path} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div className="c-icon" style={{ flexShrink: 0 }}>
                      <i className={`fas ${s.icon || 'fa-cog'}`}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#1a1a2e', marginBottom: '8px' }}>{s.title}</h4>
                      <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.7, marginBottom: '14px' }}>{s.desc}</p>
                      <Link to={s.path} style={{ color: '#e8651a', fontWeight: 700, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                        Learn More <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Transform Your Global Presence?</h2>
            <p>Get a free quote within 2 hours. ISO certified quality guaranteed.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn-wh"><i className="fas fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919945342726" className="btn-wb"><i className="fas fa-phone-alt"></i> Call Us</a>
          </div>
        </div>
      </div>
    </main>
  );
}
