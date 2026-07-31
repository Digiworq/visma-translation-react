import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: '90px' }}>
        <div className="hero-bg bg-contact"></div>
        <div className="ph-inner" style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}>
          <div className="ph-text" style={{ alignItems: 'center' }}>
            <div className="breadcrumb" style={{ justifyContent: 'center' }}>
              <Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Contact Us</span>
            </div>
            <div className="pg-tag"><i className="fas fa-envelope"></i> Get In Touch</div>
            <h1>Let's Start Your <span className="ac">Project</span></h1>
            <p className="ph-desc" style={{ textAlign: 'center', maxWidth: '540px' }}>Get a free quote within 2 hours. We're available Mon-Sat 9AM-6PM and respond to all enquiries within 24 hours.</p>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fa" /></svg></div>
      </section>

      <section className="sec bg-light">
        <div className="container contact-wrap">
          <div>
            <div className="stag">Contact Information</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(22px,3vw,32px)', fontWeight: 900, color: '#1a1a2e', margin: '12px 0 10px' }}>We'd Love to <span style={{ color: '#e8651a' }}>Hear From You</span></h3>
            <p style={{ color: '#666680', fontSize: '15px', lineHeight: 1.75, marginBottom: '24px' }}>Reach out by phone, email or the form. Our team responds promptly and professionally.</p>
            <div className="ci-card"><div className="ci-ico"><i className="fas fa-phone-alt"></i></div><div><strong style={{ display: 'block', fontSize: '14px', color: '#1a1a2e', marginBottom: '3px' }}>Phone</strong><span style={{ fontSize: '13px', color: '#666680' }}>+91 9945342726</span></div></div>
            <div className="ci-card"><div className="ci-ico"><i className="fas fa-envelope"></i></div><div><strong style={{ display: 'block', fontSize: '14px', color: '#1a1a2e', marginBottom: '3px' }}>Email</strong><span style={{ fontSize: '13px', color: '#666680' }}>info@vismatranslation.com</span></div></div>
            <div className="ci-card"><div className="ci-ico"><i className="fas fa-map-marker-alt"></i></div><div><strong style={{ display: 'block', fontSize: '14px', color: '#1a1a2e', marginBottom: '3px' }}>Office</strong><span style={{ fontSize: '13px', color: '#666680' }}>Bangalore, Karnataka, India</span></div></div>
            <div className="ci-card"><div className="ci-ico"><i className="fas fa-clock"></i></div><div><strong style={{ display: 'block', fontSize: '14px', color: '#1a1a2e', marginBottom: '3px' }}>Hours</strong><span style={{ fontSize: '13px', color: '#666680' }}>Monday – Saturday: 9:00 AM – 6:00 PM</span></div></div>
            <div className="ci-card"><div className="ci-ico"><i className="fab fa-whatsapp"></i></div><div><strong style={{ display: 'block', fontSize: '14px', color: '#1a1a2e', marginBottom: '3px' }}>WhatsApp</strong><span style={{ fontSize: '13px', color: '#666680' }}>+91 9945342726</span></div></div>
          </div>

          <div className="form-card">
            <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1a1a2e', marginBottom: '6px' }}>Send Us a Message</h4>
            <p style={{ color: '#666680', fontSize: '14px', marginBottom: '26px' }}>Fill in the form and we'll respond within 2 hours.</p>
            <form id="contactForm" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div className="form-row">
                <div className="fg"><label>Full Name *</label><input type="text" placeholder="Your full name" required /></div>
                <div className="fg"><label>Email Address *</label><input type="email" placeholder="your@email.com" required /></div>
              </div>
              <div className="form-row">
                <div className="fg"><label>Phone Number</label><input type="tel" placeholder="+91 9999999999" /></div>
                <div className="fg"><label>Service Required</label>
                  <select defaultValue="Translation Services">
                    <option>Translation Services</option>
                    <option>Localization Services</option>
                    <option>Apostille Services</option>
                    <option>Voice-Over Service</option>
                    <option>Sub-Titling Service</option>
                    <option>Transcription Services</option>
                    <option>SEO Content Writing</option>
                    <option>Desktop Publishing</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="fg"><label>Source Language</label><input type="text" placeholder="e.g. English" /></div>
                <div className="fg"><label>Target Language</label><input type="text" placeholder="e.g. Hindi, French..." /></div>
              </div>
              <div className="fg"><label>Message *</label><textarea placeholder="Tell us about your project — document type, word count, deadline..." required></textarea></div>
              <button type="submit" className="sub-btn" id="submitBtn" style={{ background: submitted ? '#27ae60' : '' }}>
                {submitted ? <><i className="fas fa-check-circle"></i> Message Sent! We'll reply soon.</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
