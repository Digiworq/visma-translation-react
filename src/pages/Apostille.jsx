import React from 'react';
import { Link } from 'react-router-dom';

export default function Apostille() {
  return (
    <main>
      <section className="page-hero">
        <div className="hero-bg bg-apostille"></div>
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Apostille Services</span></div>
            <div className="pg-tag"><i className="fas fa-stamp"></i> Apostille Services</div>
            <h1>Fast &amp; Reliable<br /><span className="ac">Apostille Services</span></h1>
            <p className="ph-desc">Get your documents apostilled for international use. We handle MEA apostille, HRD attestation, embassy attestation and more — with express processing across all Indian states.</p>
            <div className="ph-btns">
              <Link to="/contact" className="btn-org"><i className="fas fa-paper-plane"></i> Apply Now</Link>
              <a href="#process" className="btn-ghost"><i className="fas fa-info-circle"></i> How It Works</a>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop&q=80" alt="Apostille services" loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(39,174,96,.25),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> Express 3-5 Days</div>
              <div className="f-badge p2"><i className="fas fa-certificate"></i> 90+ Countries</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fa" /></svg></div>
      </section>

      <section className="sec bg-light">
        <div className="container">
          <div className="sh c"><div className="stag">What We Apostille</div><h2>Documents We <span className="ac">Handle</span></h2><p>All types of document attestation for global use — fast, reliable and tracked.</p></div>
          <div className="g3">
            <div className="card"><div className="c-icon"><i className="fas fa-graduation-cap"></i></div><h4>Educational Documents</h4><p>Degree certificates, diplomas, transcripts and school leaving certificates apostilled for overseas education and employment.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-file-contract"></i></div><h4>Personal Documents</h4><p>Birth, marriage, death certificates and divorce decrees certified for international authorities and embassies.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-briefcase"></i></div><h4>Commercial Documents</h4><p>Company registration, board resolutions, power of attorney and business documents for global use.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-hospital"></i></div><h4>Medical Documents</h4><p>Medical certificates, health records and fitness certificates apostilled for immigration and employment abroad.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-landmark"></i></div><h4>MEA Apostille</h4><p>Ministry of External Affairs apostille accepted by 120+ Hague Convention member nations worldwide.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-university"></i></div><h4>HRD Attestation</h4><p>Human Resource Development attestation for educational certificates required by Gulf and other countries.</p></div>
          </div>
        </div>
      </section>

      <section className="sec bg-white" id="process">
        <div className="container g2">
          <div>
            <div className="stag">Simple Process</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: '#1a1a2e', margin: '12px 0 22px' }}>Get Apostilled in <span style={{ color: '#e8651a' }}>5 Steps</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e8651a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px', flexShrink: 0 }}>1</div><div><strong style={{ color: '#1a1a2e', display: 'block', marginBottom: '4px' }}>Submit Documents</strong><p style={{ color: '#666680', fontSize: '14px' }}>Send originals via courier or visit our Bangalore office.</p></div></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e8651a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px', flexShrink: 0 }}>2</div><div><strong style={{ color: '#1a1a2e', display: 'block', marginBottom: '4px' }}>Verification</strong><p style={{ color: '#666680', fontSize: '14px' }}>Our experts verify authenticity and advise the correct attestation path.</p></div></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e8651a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px', flexShrink: 0 }}>3</div><div><strong style={{ color: '#1a1a2e', display: 'block', marginBottom: '4px' }}>State Attestation</strong><p style={{ color: '#666680', fontSize: '14px' }}>HRD / Home Department attestation as required before MEA.</p></div></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e8651a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '16px', flexShrink: 0 }}>4</div><div><strong style={{ color: '#1a1a2e', display: 'block', marginBottom: '4px' }}>MEA Apostille Stamp</strong><p style={{ color: '#666680', fontSize: '14px' }}>Ministry of External Affairs applies the official Hague apostille stamp.</p></div></div>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#27ae60', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}><i className="fas fa-check"></i></div><div><strong style={{ color: '#1a1a2e', display: 'block', marginBottom: '4px' }}>Delivery</strong><p style={{ color: '#666680', fontSize: '14px' }}>Documents couriered to your address with full tracking provided.</p></div></div>
            </div>
          </div>
          <div className="illus-box" style={{ background: '#eafaf1', padding: 0, overflow: 'hidden', height: '300px', maxWidth: '440px', margin: '0 auto', width: '100%', borderRadius: '20px' }}>
            <svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '300px', display: 'block' }}>
              <defs>
                <linearGradient id="apBg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#eafaf1" />
                  <stop offset="100%" stopColor="#d5f5e3" />
                </linearGradient>
              </defs>
              <rect width="360" height="280" fill="url(#apBg)" />
              <rect x="60" y="40" width="160" height="200" rx="12" fill="white" stroke="#27ae60" strokeWidth="2" opacity=".9" />
              <rect x="70" y="30" width="160" height="200" rx="12" fill="white" stroke="#27ae60" strokeWidth="1.5" opacity=".6" />
              <rect x="80" y="20" width="160" height="200" rx="12" fill="white" stroke="#27ae60" strokeWidth="1" opacity=".3" />
              <rect x="80" y="60" width="120" height="8" rx="4" fill="#27ae60" opacity=".7" />
              <rect x="80" y="78" width="100" height="5" rx="2" fill="rgba(0,0,0,.12)" />
              <rect x="80" y="90" width="110" height="5" rx="2" fill="rgba(0,0,0,.09)" />
              <rect x="80" y="102" width="90" height="5" rx="2" fill="rgba(0,0,0,.09)" />
              <circle cx="200" cy="170" r="48" fill="rgba(39,174,96,.15)" stroke="#27ae60" strokeWidth="3" />
              <circle cx="200" cy="170" r="38" fill="none" stroke="#27ae60" strokeWidth="1.5" strokeDasharray="4,3" />
              <rect x="183" y="148" width="34" height="28" rx="4" fill="#27ae60" opacity=".8" />
              <rect x="175" y="175" width="50" height="8" rx="4" fill="#27ae60" opacity=".9" />
              <rect x="183" y="148" width="34" height="8" rx="4" fill="#27ae60" />
              <circle cx="200" cy="170" r="14" fill="#27ae60" />
              <polyline points="192,170 197,176 210,163" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <text x="130" y="245" fontFamily="Arial" fontSize="10" fill="#27ae60" fontWeight="700" textAnchor="middle">MEA APOSTILLE</text>
              <circle cx="270" cy="60" r="8" fill="#e8651a" opacity=".6" />
              <circle cx="290" cy="80" r="6" fill="#2980b9" opacity=".5" />
              <circle cx="275" cy="100" r="7" fill="#27ae60" opacity=".5" />
              <circle cx="295" cy="55" r="5" fill="#8e44ad" opacity=".4" />
              <text x="280" y="130" fontFamily="Arial" fontSize="9" fill="#27ae60" opacity=".6" textAnchor="middle">90+ Countries</text>
            </svg>
          </div>
        </div>
      </section>

      <section className="sec bg-light">
        <div className="container">
          <div className="sh c"><div className="stag">Timelines</div><h2>Choose Your <span className="ac">Processing Speed</span></h2></div>
          <div className="g3">
            <div className="card" style={{ textAlign: 'center' }}><div className="c-icon" style={{ margin: '0 auto 14px' }}><i className="fas fa-clock"></i></div><h4>Standard</h4><p style={{ fontSize: '28px', fontWeight: 900, color: '#e8651a', margin: '10px 0' }}>7–10 Days</p><p>Best value for non-urgent requirements.</p></div>
            <div className="card" style={{ textAlign: 'center', border: '2px solid #e8651a', background: 'linear-gradient(135deg,#fff6f1,#fff)' }}>
              <div style={{ background: '#e8651a', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '3px 12px', borderRadius: '50px', display: 'inline-block', marginBottom: '10px' }}>RECOMMENDED</div>
              <div className="c-icon" style={{ margin: '0 auto 14px', background: '#e8651a' }}><i className="fas fa-bolt" style={{ color: '#fff' }}></i></div><h4>Express</h4><p style={{ fontSize: '28px', fontWeight: 900, color: '#e8651a', margin: '10px 0' }}>3–5 Days</p><p>Expedited processing for time-sensitive documents.</p></div>
            <div className="card" style={{ textAlign: 'center' }}><div className="c-icon" style={{ margin: '0 auto 14px' }}><i className="fas fa-fighter-jet"></i></div><h4>Urgent</h4><p style={{ fontSize: '28px', fontWeight: 900, color: '#e8651a', margin: '10px 0' }}>24–48 Hrs</p><p>Emergency apostille for last-minute requirements.</p></div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <h2>Start Your Apostille Application Today</h2>
          <p>Quick, reliable and fully tracked. Free assessment within 2 hours.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-wh"><i className="fas fa-paper-plane"></i> Apply Now</Link>
            <a href="tel:+919945342726" className="btn-wb"><i className="fas fa-phone-alt"></i> Call for Help</a>
          </div>
        </div>
      </div>
    </main>
  );
}
