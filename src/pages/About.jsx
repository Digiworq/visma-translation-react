import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
  const [stats, setStats] = useState({ customers: 0, projects: 0, words: 0, translators: 0 });

  useEffect(() => {
    const duration = 1800;
    const steps = 50;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setStats({
        customers: Math.floor(progress * 500),
        projects: Math.floor(progress * 1200),
        words: Math.floor(progress * 50),
        translators: Math.floor(progress * 100)
      });
      if (currentStep >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <SEO
        title="About Us - Leading ISO Certified Translation Agency in Bangalore"
        description="VISMA Translation is an ISO 9001:2015 certified language agency in Bangalore with 200+ expert linguists, 100+ languages, and 15+ years of experience delivering precision translation globally."
        keywords="about visma translation, translation agency bangalore, iso certified translation company, best translation agency india, certified translators bangalore, language service provider india, professional translation company, translation agency history, multilingual solutions bangalore, top translation agency india, translation company reviews, who is visma translation"
        canonical="https://visma-translation-react.vercel.app/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "VISMA Translation",
          "url": "https://visma-translation-react.vercel.app",
          "logo": "https://visma-translation-react.vercel.app/logo.png",
          "description": "ISO 9001:2015 certified translation agency in Bangalore with 200+ linguists covering 100+ languages across legal, medical, business, technical and multimedia domains.",
          "foundingDate": "2010",
          "numberOfEmployees": { "@type": "QuantitativeValue", "value": 200 },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+919945342726",
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": "English"
          },
          "sameAs": [
            "https://www.facebook.com/vismatranslation",
            "https://www.linkedin.com/company/vismatranslation"
          ],
          "award": "Top 10 Translation Agency in India",
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "ISO 9001:2015 Certification"
          }
        }}
      />
      <section className="page-hero">
        <div className="hero-bg bg-about"></div>
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb">
              <Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>About Us</span>
            </div>
            <div className="pg-tag"><i className="fas fa-users"></i> Who We Are</div>
            <h1>Bridging Languages,<br /><span className="ac">Connecting Worlds</span></h1>
            <p className="ph-desc">Visma Translation is a premier ISO 9001:2015 certified agency helping businesses break language barriers since 2010. With 200+ expert linguists across 100+ languages, we deliver precision, speed and trust.</p>
            <div className="ph-btns">
              <Link to="/translation-services-contact-us" className="btn-org"><i className="fas fa-envelope"></i> Get In Touch</Link>
              <Link to="/language-services-bangalore" className="btn-ghost"><i className="fas fa-th-large"></i> Our Services</Link>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&auto=format&fit=crop&q=80" alt="About Visma team" loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(232,101,26,.25),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> ISO Certified</div>
              <div className="f-badge p2"><i className="fas fa-certificate"></i> 100+ Languages</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fa" /></svg></div>
      </section>

      <section className="sec bg-light">
        <div className="container g2">
          <div className="illus-box" style={{ background: 'linear-gradient(135deg,#fff3ee,#ffe0cc)', padding: 0, overflow: 'hidden', height: '300px', maxWidth: '440px', margin: '0 auto', width: '100%', borderRadius: '20px' }}>
            <svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxHeight: '300px', display: 'block' }}>
              <rect x="60" y="80" width="240" height="160" rx="8" fill="white" stroke="#e8651a" strokeWidth="1.5" />
              <polygon points="40,85 180,20 320,85" fill="#e8651a" opacity=".8" />
              <rect x="85" y="105" width="35" height="28" rx="4" fill="#e8651a" opacity=".2" stroke="#e8651a" strokeWidth="1" />
              <rect x="133" y="105" width="35" height="28" rx="4" fill="#e8651a" opacity=".2" stroke="#e8651a" strokeWidth="1" />
              <rect x="181" y="105" width="35" height="28" rx="4" fill="#e8651a" opacity=".2" stroke="#e8651a" strokeWidth="1" />
              <rect x="229" y="105" width="35" height="28" rx="4" fill="#e8651a" opacity=".2" stroke="#e8651a" strokeWidth="1" />
              <rect x="85" y="148" width="35" height="28" rx="4" fill="#e8651a" opacity=".15" stroke="#e8651a" strokeWidth="1" />
              <rect x="133" y="148" width="35" height="28" rx="4" fill="#e8651a" opacity=".25" stroke="#e8651a" strokeWidth="1" />
              <rect x="181" y="148" width="35" height="28" rx="4" fill="#e8651a" opacity=".15" stroke="#e8651a" strokeWidth="1" />
              <rect x="229" y="148" width="35" height="28" rx="4" fill="#e8651a" opacity=".2" stroke="#e8651a" strokeWidth="1" />
              <rect x="155" y="196" width="50" height="44" rx="4" fill="#e8651a" opacity=".7" />
              <circle cx="198" cy="220" r="3" fill="white" />
              <rect x="145" y="30" width="70" height="22" rx="11" fill="#e8651a" />
              <text x="180" y="45" fontFamily="Arial" fontSize="9" fill="white" fontWeight="700" textAnchor="middle">ISO 9001:2015</text>
              <text x="180" y="260" fontFamily="Arial" fontSize="11" fill="#e8651a" fontWeight="700" textAnchor="middle">VISMA STORY</text>
            </svg>
          </div>
          <div>
            <div className="stag">Our Story</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, color: '#1a1a2e', margin: '12px 0 16px' }}>Founded on <span style={{ color: '#e8651a' }}>Trust &amp; Precision</span></h3>
            <p style={{ color: '#666680', fontSize: '15px', lineHeight: 1.8, marginBottom: '14px' }}>Visma Translation was established with a singular vision — to provide world-class language services that empower businesses to communicate without boundaries. Starting from Bangalore, we have grown into one of India's top 10 translation agencies, serving clients across 50+ countries.</p>
            <p style={{ color: '#666680', fontSize: '15px', lineHeight: 1.8, marginBottom: '22px' }}>Our ISO 9001:2015 certification reflects our commitment to quality management, ensuring every project meets the highest industry standards.</p>
            <ul className="cklist">
              <li><i className="fas fa-check-circle"></i> 15+ years of language expertise</li>
              <li><i className="fas fa-check-circle"></i> 200+ certified translators worldwide</li>
              <li><i className="fas fa-check-circle"></i> 1200+ successful projects delivered</li>
              <li><i className="fas fa-check-circle"></i> Serving 15+ industry verticals globally</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sec bg-white">
        <div className="container">
          <div className="sh c"><div className="stag">Core Values</div><h2>What <span className="ac">Drives Us</span></h2><p>Our values define every translation, every interaction and every partnership.</p></div>
          <div className="g3">
            <div className="card"><div className="c-icon"><i className="fas fa-star"></i></div><h4>Excellence</h4><p>We hold ourselves to the highest standards of linguistic quality, delivering work that exceeds expectations every time.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-shield-alt"></i></div><h4>Integrity</h4><p>We operate with full transparency and honesty. Every commitment is honoured, every deadline respected.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-lock"></i></div><h4>Confidentiality</h4><p>Your documents are handled with strict privacy protocols and NDA agreements as standard practice.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-bolt"></i></div><h4>Speed</h4><p>We combine technology and human expertise to deliver fast turnarounds without compromising accuracy.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-globe"></i></div><h4>Global Reach</h4><p>Our network of 200+ translators spans every continent, giving you access to native speakers worldwide.</p></div>
            <div className="card"><div className="c-icon"><i className="fas fa-handshake"></i></div><h4>Partnership</h4><p>We are more than a vendor — we are a long-term strategic partner in your global communication journey.</p></div>
          </div>
        </div>
      </section>

      <section className="sec bg-light">
        <div className="container">
          <div className="stat-row">
            <div className="sr-item"><div className="sr-num">{stats.customers}</div><span className="sr-lbl">+ Happy Customers</span></div>
            <div className="sr-item"><div className="sr-num">{stats.projects}</div><span className="sr-lbl">+ Projects Completed</span></div>
            <div className="sr-item"><div className="sr-num">{stats.words}M+</div><span className="sr-lbl">Words Translated</span></div>
            <div className="sr-item"><div className="sr-num">{stats.translators}</div><span className="sr-lbl">Translators Worldwide</span></div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <div>
            <h2>Ready to Work with India's Top Translation Agency?</h2>
            <p>Get a free consultation and quote within 24 hours. No hidden charges.</p>
          </div>
          <div className="cta-btns">
            <Link to="/translation-services-contact-us" className="btn-wh"><i className="fas fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919945342726" className="btn-wb"><i className="fas fa-phone-alt"></i> Call Us Now</a>
          </div>
        </div>
      </div>
    </main>
  );
}
