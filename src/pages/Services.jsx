import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ALL_SERVICES = [
  { path: '/localization', icon: 'fa-globe-americas', title: 'Localization Service', desc: 'Cultural adaptation of software, websites, and mobile applications for international audiences.' },
  { path: '/seo-content', icon: 'fa-pen-nib', title: 'SEO Content Writing', desc: 'Search engine optimized content in multiple languages to drive organic traffic and boost conversions.' },
  { path: '/social-media', icon: 'fa-share-alt', title: 'Social Media Content', desc: 'Culturally resonant social media posts, graphics, and campaigns for global audience engagement.' },
  { path: '/subtitling', icon: 'fa-closed-captioning', title: 'Sub-Titling Services', desc: 'Accurate multilingual subtitles and closed captions for movies, TV shows, and YouTube videos.' },
  { path: '/dtp', icon: 'fa-desktop', title: 'Desktop Publishing (DTP)', desc: 'Multilingual layout formatting for brochures, manuals, catalogs, and marketing collateral.' },
  { path: '/voiceover', icon: 'fa-microphone-alt', title: 'Voice-Over Services', desc: 'Professional native voice-over narrations for corporate videos, e-learning, and commercials.' },
  { path: '/transcription', icon: 'fa-file-audio', title: 'Transcription Services', desc: 'Converting audio and video recordings into highly accurate written text in 100+ languages.' },
  { path: '/video-editing', icon: 'fa-film', title: 'Video Editing Service', desc: 'Professional post-production video editing integrated with localized audio and subtitles.' },
  { path: '/social-media-marketing', icon: 'fa-bullhorn', title: 'Social Media Marketing', desc: 'Strategic multilingual social campaigns to build brand authority and convert followers.' },
  { path: '/web-development', icon: 'fa-code', title: 'Web Development', desc: 'Modern, responsive, and multilingual web application development for global businesses.' }
];

export default function Services() {
  return (
    <main>
      <SEO 
        title="Our Services - All 10 Digital & Language Solutions"
        description="Explore all 10 specialized services including website localization, SEO content, voice-over, subtitling, DTP, transcription, video editing, social media marketing, and web development."
        keywords="language services bangalore, website localization, voiceover agency, video editing, web development, social media marketing india"
        canonical="https://vismatranslation.com/services"
      />
      <section className="page-hero">
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Services</span></div>
            <div className="pg-tag"><i className="fas fa-th-large"></i> What We Offer</div>
            <h1>Complete Digital &amp;<br /><span className="ac">Language Solutions</span></h1>
            <p className="ph-desc">From precise website localization to high-converting social media marketing and web development — Visma delivers 10 end-to-end solutions tailored for global businesses.</p>
            <div className="ph-btns">
              <Link to="/contact" className="btn-org"><i className="fas fa-paper-plane"></i> Get a Free Quote</Link>
              <Link to="/translation-services" className="btn-ghost"><i className="fas fa-language"></i> Translation Services</Link>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" alt="Complete Language Solutions" loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(232,101,26,.25),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> All 10 Services</div>
              <div className="f-badge p2"><i className="fas fa-globe"></i> 100+ Languages</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#fff" /></svg></div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sh c">
            <div className="stag">FULL SERVICE SUITE</div>
            <h2>Explore All <span className="ac">10 Specialized Services</span></h2>
            <p className="sh-desc">Comprehensive solutions for localization, digital marketing, multimedia post-production, and web technology.</p>
          </div>

          <div className="g2">
            {ALL_SERVICES.map(s => (
              <div className="card" key={s.path} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="c-icon" style={{ flexShrink: 0 }}>
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
