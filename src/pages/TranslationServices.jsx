import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useData } from '../context/DataContext';

export default function TranslationServices() {
  const { translationServices } = useData();

  return (
    <main>
      <SEO
        title="Certified Document Translation Services - Legal, Medical, Financial & More"
        description="Embassy-accepted certified document translation in 100+ languages across Legal, Medical, Financial, Technical, Business, E-Commerce, E-Learning, and Certificate domains in Bangalore. ISO 9001:2015 certified."
        keywords="certified translation services bangalore, legal translation india, medical translation bangalore, financial translation services, technical translation india, business translation bangalore, certificate translation services, e-commerce translation india, elearning translation, document translation 100 languages, sworn translation bangalore, notarized translation india, embassy accepted translation, iso certified document translation, professional translation services india"
        canonical="https://vismatranslation.com/translation-services"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Certified Translation Services by VISMA Translation",
          "description": "Specialized certified document translation services in Bangalore across 8 expert domains.",
          "url": "https://vismatranslation.com/translation-services",
          "numberOfItems": 8,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Legal Translation", "url": "https://vismatranslation.com/legal-translation", "description": "Certified translation of contracts, court documents, patents, and legal agreements." } },
            { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Medical Translation", "url": "https://vismatranslation.com/medical-translation", "description": "Clinical trials, pharma, medical device, and patient records translation." } },
            { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "Business Translation", "url": "https://vismatranslation.com/business-translation", "description": "Corporate reports, business proposals, and executive communications translation." } },
            { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "Finance Translation", "url": "https://vismatranslation.com/finance-translation", "description": "Financial statements, audit reports, and banking documents translation." } },
            { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "Technical Translation", "url": "https://vismatranslation.com/technical-translation", "description": "Engineering manuals, SDS sheets, and technical documentation translation." } },
            { "@type": "ListItem", "position": 6, "item": { "@type": "Service", "name": "Certificate Translation", "url": "https://vismatranslation.com/certificate-translation", "description": "Birth, marriage, degree certificate translation accepted by embassies." } },
            { "@type": "ListItem", "position": 7, "item": { "@type": "Service", "name": "E-Commerce Translation", "url": "https://vismatranslation.com/ecommerce-translation", "description": "Product catalog, checkout, and storefront translation for global retail." } },
            { "@type": "ListItem", "position": 8, "item": { "@type": "Service", "name": "E-Learning Translation", "url": "https://vismatranslation.com/elearning-translation", "description": "LMS platforms, course materials, and instructional video translation." } }
          ]
        }}
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
          <div className="service-page-with-sidebar">
            <ServiceSidebar
              title="Translation Services"
              items={translationServices}
              hubPath="/translation-services"
              hubLabel="Translation Services"
            />
            <div className="service-page-main">
              <div className="sh" style={{ textAlign: 'left', marginBottom: '28px' }}>
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
