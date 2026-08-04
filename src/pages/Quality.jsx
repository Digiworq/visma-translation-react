import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Quality() {
  return (
    <main>
      <SEO
        title="ISO 9001:2015 Quality Assurance - 99.9% Translation Accuracy Guaranteed"
        description="VISMA Translation's 6-stage quality control process guarantees 99.9% translation accuracy. ISO 9001:2015 certified with native domain linguists, senior editors, and a 50-point QA checklist on every project."
        keywords="quality translation services, iso 9001 certified translation, accurate translation bangalore, quality assurance translation, 99.9 percent accuracy translation, translation quality control, iso certified language services, professional translation quality, native translator quality, translation proofreading services, certified quality translation india, translation accuracy guarantee, gdpr compliant translation, translation nda services, multi stage translation review"
        canonical="https://visma-translation-react.vercel.app/quality"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "ISO 9001:2015 Quality Assured Translation Services",
          "description": "6-stage quality control process ensuring 99.9% accuracy across all translation projects. ISO 9001:2015 certified with native linguists, editorial review, and proprietary QA checklist.",
          "provider": {
            "@type": "Organization",
            "name": "VISMA Translation",
            "url": "https://visma-translation-react.vercel.app",
            "telephone": "+919945342726",
            "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "ISO 9001:2015 Certification" }
          },
          "url": "https://visma-translation-react.vercel.app/quality",
          "serviceType": "Translation Quality Assurance",
          "offers": {
            "@type": "Offer",
            "description": "99.9% accuracy guarantee with unlimited free revisions within 7 days",
            "priceCurrency": "INR"
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Nitish Arya" },
              "reviewBody": "Quick, efficient service for my Spanish document translation and apostille. Well done, Team Visma!"
            },
            {
              "@type": "Review",
              "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
              "author": { "@type": "Person", "name": "Rajesh Kumar" },
              "reviewBody": "Exceptional quality for our legal documents. Their understanding of legal terminology was impressive."
            }
          ]
        }}
      />
      <section className="page-hero">
        <div className="hero-bg bg-quality"></div>
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb"><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Quality</span></div>
            <div className="pg-tag"><i className="fas fa-medal"></i> Quality Assurance</div>
            <h1>ISO 9001:2015<br /><span className="ac">Quality Standards</span></h1>
            <p className="ph-desc">Quality is our foundation. Every translation at Visma is governed by our ISO 9001:2015 certified quality management system ensuring 99.9% accuracy, consistency and reliability.</p>
            <div className="ph-btns">
              <Link to="/contact" className="btn-org"><i className="fas fa-certificate"></i> Get Certified Translation</Link>
              <Link to="/about-visma-translation" className="btn-ghost"><i className="fas fa-info-circle"></i> About Us</Link>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80" alt="Quality assurance ISO" loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(232,101,26,.2),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> 99.9% Accuracy</div>
              <div className="f-badge p2"><i className="fas fa-certificate"></i> ISO 9001:2015</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#fff" /></svg></div>
      </section>

      <section className="sec bg-white">
        <div className="container">
          <div className="sh c"><div className="stag">Quality Framework</div><h2>Our <span className="ac">Quality Process</span></h2><p>A rigorous multi-stage quality control system built into every project.</p></div>
          <div className="g3">
            <div className="card"><div className="c-icon"><i className="fas fa-user-graduate"></i></div><h4>Expert Selection</h4><p>Every translator is rigorously vetted — subject-matter expertise, language proficiency tests and domain certification required.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-language"></i></div><h4>Translation</h4><p>Native-speaking translators with domain expertise produce the first draft with contextual accuracy and cultural sensitivity.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-edit"></i></div><h4>Editing &amp; Review</h4><p>A second senior linguist reviews for accuracy, fluency, consistency and terminology alignment.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-spell-check"></i></div><h4>Proofreading</h4><p>A third independent proofreader catches any remaining errors in grammar, punctuation and formatting.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-tasks"></i></div><h4>QA Checklist</h4><p>Our proprietary 50-point quality checklist is applied before every delivery — zero tolerance for errors.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-certificate"></i></div><h4>ISO Certification</h4><p>All processes comply with ISO 9001:2015 quality management standards — audited annually by independent bodies.</p></div>
          </div>
        </div>
      </section>

      <section className="sec bg-light">
        <div className="container g2">
          <div className="illus-box" style={{ background: 'linear-gradient(135deg,#fff3ee,#ffe0cc)', padding: 0, overflow: 'hidden', height: '300px', maxWidth: '440px', margin: '0 auto', width: '100%', borderRadius: '20px' }}>
            <svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '300px', display: 'block' }}>
              <circle cx="180" cy="110" r="70" fill="rgba(232,101,26,.12)" stroke="#e8651a" strokeWidth="2" />
              <circle cx="180" cy="110" r="55" fill="rgba(232,101,26,.1)" stroke="#e8651a" strokeWidth="1.5" strokeDasharray="5,3" />
              <circle cx="180" cy="110" r="42" fill="white" stroke="#e8651a" strokeWidth="2" />
              <polygon points="180,75 188,98 213,98 193,113 200,136 180,121 160,136 167,113 147,98 172,98" fill="#e8651a" opacity=".9" />
              <rect x="155" y="188" width="50" height="22" rx="4" fill="#e8651a" opacity=".85" />
              <text x="180" y="203" fontFamily="Arial" fontSize="9" fill="white" fontWeight="700" textAnchor="middle">ISO 9001:2015</text>
              <polygon points="155,210 145,230 165,218" fill="#c0392b" opacity=".7" />
              <polygon points="205,210 215,230 195,218" fill="#c0392b" opacity=".7" />
              <circle cx="80" cy="80" r="16" fill="rgba(232,101,26,.1)" stroke="#e8651a" strokeWidth="1.5" />
              <polyline points="73,80 78,86 88,73" stroke="#e8651a" strokeWidth="2" fill="none" strokeLinecap="round" />
              <circle cx="280" cy="80" r="16" fill="rgba(232,101,26,.1)" stroke="#e8651a" strokeWidth="1.5" />
              <polyline points="273,80 278,86 288,73" stroke="#e8651a" strokeWidth="2" fill="none" strokeLinecap="round" />
              <text x="180" y="255" fontFamily="Arial" fontSize="11" fill="#e8651a" fontWeight="700" textAnchor="middle">QUALITY PROMISE</text>
            </svg>
          </div>
          <div>
            <div className="stag">Our Commitment</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: '#1a1a2e', margin: '12px 0 20px' }}>Our <span style={{ color: '#e8651a' }}>Quality Guarantee</span></h3>
            <ul className="cklist">
              <li><i className="fas fa-check-circle"></i> <strong>99.9% Accuracy</strong> — verified by multi-stage human review</li>
              <li><i className="fas fa-check-circle"></i> <strong>ISO 9001:2015 Certified</strong> — internationally recognised standard</li>
              <li><i className="fas fa-check-circle"></i> <strong>Native Translators Only</strong> — no unreviewed machine translation</li>
              <li><i className="fas fa-check-circle"></i> <strong>On-Time Delivery</strong> — 98.7% on-time delivery rate</li>
              <li><i className="fas fa-check-circle"></i> <strong>Free Revisions</strong> — unlimited revisions within 7 days</li>
              <li><i className="fas fa-check-circle"></i> <strong>Confidentiality</strong> — NDA and GDPR-compliant handling</li>
              <li><i className="fas fa-check-circle"></i> <strong>Domain Expertise</strong> — matching translators to subject matter</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec bg-white">
        <div className="container">
          <div className="sh c"><div className="stag">Client Feedback</div><h2>What Our <span className="ac">Clients Say</span></h2><p>Trusted by 500+ clients across India and beyond.</p></div>
          <div className="g3">
            <div className="card" style={{ position: 'relative' }}>
              <div style={{ fontSize: '40px', color: 'rgba(232,101,26,.1)', position: 'absolute', top: '16px', right: '20px' }}><i className="fas fa-quote-right"></i></div>
              <div style={{ color: '#ffa726', marginBottom: '12px', fontSize: '15px' }}>★★★★★</div>
              <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.8, marginBottom: '18px' }}>"Their dedication to customer satisfaction is commendable. Quick, efficient service for my Spanish document translation and apostille. Well done, Team Visma!"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e8651a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>NA</div>
                <div><strong style={{ fontSize: '14px', color: '#1a1a2e', display: 'block' }}>Nitish Arya</strong><span style={{ fontSize: '12px', color: '#666680' }}>Student</span></div>
              </div>
            </div>
            <div className="card" style={{ position: 'relative' }}>
              <div style={{ fontSize: '40px', color: 'rgba(232,101,26,.1)', position: 'absolute', top: '16px', right: '20px' }}><i className="fas fa-quote-right"></i></div>
              <div style={{ color: '#ffa726', marginBottom: '12px', fontSize: '15px' }}>★★★★★</div>
              <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.8, marginBottom: '18px' }}>"I want to express my gratitude for the above-and-beyond assistance during my document translation process. Outstanding support throughout!"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#2980b9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>SV</div>
                <div><strong style={{ fontSize: '14px', color: '#1a1a2e', display: 'block' }}>Sharmila Varma</strong><span style={{ fontSize: '12px', color: '#666680' }}>Digital Marketing Manager</span></div>
              </div>
            </div>
            <div className="card" style={{ position: 'relative' }}>
              <div style={{ fontSize: '40px', color: 'rgba(232,101,26,.1)', position: 'absolute', top: '16px', right: '20px' }}><i className="fas fa-quote-right"></i></div>
              <div style={{ color: '#ffa726', marginBottom: '12px', fontSize: '15px' }}>★★★★★</div>
              <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.8, marginBottom: '18px' }}>"Exceptional quality for our legal documents. Their understanding of legal terminology was impressive and the turnaround was faster than expected."</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#27ae60', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>RK</div>
                <div><strong style={{ fontSize: '14px', color: '#1a1a2e', display: 'block' }}>Rajesh Kumar</strong><span style={{ fontSize: '12px', color: '#666680' }}>Legal Consultant</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Experience Quality-Guaranteed Translation</h2>
            <p>ISO certified. Accuracy guaranteed. Free quote in 2 hours.</p>
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
