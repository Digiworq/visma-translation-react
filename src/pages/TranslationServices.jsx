import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';

export default function TranslationServices() {
  const { translationServices } = useData();

  return (
    <main>
      <SEO 
        title="Certified Translation Services - Specialized Domains"
        description="Certified document translation in 100+ languages across Legal, Medical, Financial, Technical, Business, and E-Commerce domains in Bangalore."
        keywords="translation services bangalore, legal translation, medical translation, financial translation, business translation india"
        canonical="https://vismatranslation.com/translation-services"
      />
      <section className="page-hero">
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Translation Services</span></div>
            <div className="pg-tag"><i className="fas fa-language"></i> Certified Document Translation</div>
            <h1>Specialized Document<br /><span className="ac">Translation Services</span></h1>
            <p className="ph-desc">Fast, accurate, and embassy-accepted document translation across 100+ languages. Governed by ISO 9001:2015 quality standards with 2-hour quote response.</p>
            <div className="ph-btns">
              <Link to="/contact" className="btn-org"><i className="fas fa-paper-plane"></i> Get a Free Quote</Link>
              <a href="tel:+919945342726" className="btn-ghost"><i className="fas fa-phone-alt"></i> Call Us Now</a>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80" alt="Specialized Translation Services" loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(232,101,26,.25),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> {translationServices.length} Domains</div>
              <div className="f-badge p2"><i className="fas fa-globe"></i> 100+ Languages</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#fff" /></svg></div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sh c">
            <div className="stag">TRANSLATION SUITE</div>
            <h2>Explore Our <span className="ac">Translation Services</span></h2>
            <p className="sh-desc">Tailored linguistic solutions for legal, medical, corporate, financial, and technical documents.</p>
          </div>

          <div className="g2">
            {translationServices.map(s => (
              <div className="card" key={s.key || s.path} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div className="c-icon" style={{ flexShrink: 0 }}>
                  <i className={`fas ${s.icon || 'fa-language'}`}></i>
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
            <h2>Need Certified Translation Today?</h2>
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
