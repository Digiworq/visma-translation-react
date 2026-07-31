import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ALL_SERVICES = [
  { path: '/localization', icon: 'fa-globe', title: 'Localization Service', desc: 'Cultural adaptation of software, websites, and mobile applications for international audiences.' },
  { path: '/voiceover', icon: 'fa-microphone-alt', title: 'Voice-Over Services', desc: 'Professional native voice-over narrations for corporate videos, e-learning, and commercials.' },
  { path: '/subtitling', icon: 'fa-closed-captioning', title: 'Sub-Titling Services', desc: 'Accurate multilingual subtitles and closed captions for movies, TV shows, and YouTube videos.' },
  { path: '/transcription', icon: 'fa-file-audio', title: 'Transcription Services', desc: 'Converting audio and video recordings into highly accurate written text in 100+ languages.' },
  { path: '/dtp', icon: 'fa-desktop', title: 'Desktop Publishing (DTP)', desc: 'Multilingual layout formatting for brochures, manuals, catalogs, and marketing collateral.' },
  { path: '/seo-content', icon: 'fa-pen-nib', title: 'SEO Content Writing', desc: 'Search engine optimized content in multiple languages to drive traffic and boost conversions.' },
  { path: '/social-media', icon: 'fa-share-alt', title: 'Social Media Content', desc: 'Culturally resonant social media posts, graphics, and campaigns for global engagement.' },
  { path: '/video-editing', icon: 'fa-film', title: 'Video Editing Service', desc: 'Professional post-production video editing integrated with localized audio and subtitles.' }
];

export default function Services() {
  return (
    <main>
      <SEO 
        title="Our Language Services - Translation, Subtitling & DTP"
        description="Comprehensive ISO Certified language services including document translation, localization, subtitling, transcription, voice-over, and DTP in Bangalore."
        keywords="language services bangalore, document translation, subtitling services, transcription india, voiceover agency, dtp services"
        canonical="https://vismatranslation.com/services"
      />
      <section className="page-hero">
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Services</span></div>
            <div className="pg-tag"><i className="fas fa-th-large"></i> What We Offer</div>
            <h1>Complete Language<br /><span className="ac">Solutions</span></h1>
            <p className="ph-desc">From precise document translation to compelling voice-overs — Visma delivers end-to-end language services tailored for businesses, legal bodies, media houses and individuals worldwide.</p>
            <div className="ph-btns">
              <Link to="/contact" className="btn-org"><i className="fas fa-paper-plane"></i> Get a Free Quote</Link>
              <Link to="/services" className="btn-ghost"><i className="fas fa-language"></i> Translation Services</Link>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus" style={{ position: 'relative' }}>
              <i className="fas fa-th-large"></i><span>OUR SERVICES</span>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> 8 Services</div>
              <div className="f-badge p2"><i className="fas fa-globe"></i> 100+ Languages</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#fff" /></svg></div>
      </section>

      <section className="sec bg-white">
        <div className="container">
          <div className="sh c"><div className="stag">Full Suite</div><h2>All <span className="ac">8 Services</span></h2><p>Every language need covered under one ISO-certified roof.</p></div>
          <div className="g2" style={{ gap: '28px' }}>
            {ALL_SERVICES.map((s, idx) => (
              <div key={idx} className="card" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="c-icon" style={{ width: '56px', height: '56px', fontSize: '24px', flexShrink: 0 }}>
                  <i className={`fas ${s.icon}`}></i>
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
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Localize Your Content?</h2>
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
