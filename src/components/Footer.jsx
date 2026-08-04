import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '22px' }}>
              <Logo light={true} />
            </Link>
            <p style={{ marginBottom: '22px', lineHeight: '1.75', fontSize: '13.5px', color: 'rgba(255,255,255,0.7)' }}>
              Visma Translation is a premier translation service provider dedicated to helping businesses overcome language barriers and connect with international audiences.
            </p>
            <div className="iso-badge" style={{ marginBottom: '22px' }}>
              <i className="fas fa-certificate" style={{ marginRight: '8px' }}></i> ISO 9001:2015 Certified
            </div>
            <div className="footer-social" style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <a href="#facebook" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#linkedin" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
              <a href="#twitter" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#youtube" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-visma-translation">About Us</Link></li>
              <li><Link to="/language-services-bangalore">Services</Link></li>
              <li><Link to="/industries-we-serve">Industries</Link></li>
              <li><Link to="/translation-services-contact-us">Contact Us</Link></li>
              <li><Link to="/translation-services-blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/translation-services">Translation Services</Link></li>
              <li><Link to="/localization-services">Localization Services</Link></li>
              <li><Link to="/voice-over-services">Voice-Over Service</Link></li>
              <li><Link to="/subtitling-services">Sub-Titling Service</Link></li>
              <li><Link to="/transcription-services">Transcription Services</Link></li>
              <li><Link to="/translation-services-apostille">Apostille Services</Link></li>
              <li><Link to="/desktop-publishing-services">DTP &amp; Design</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="contact-list ci" style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: 0, listStyle: 'none' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13.5px', color: 'rgba(255,255,255,0.75)' }}>
                <i className="fas fa-phone-alt" style={{ color: 'var(--org)', width: '18px', textAlign: 'center', flexShrink: 0 }}></i>
                <a href="tel:+919945342726" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>+91 9945342726</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13.5px', color: 'rgba(255,255,255,0.75)' }}>
                <i className="fas fa-envelope" style={{ color: 'var(--org)', width: '18px', textAlign: 'center', flexShrink: 0 }}></i>
                <a href="mailto:info@vismatranslation.com" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>info@vismatranslation.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13.5px', color: 'rgba(255,255,255,0.75)' }}>
                <i className="fas fa-map-marker-alt" style={{ color: 'var(--org)', width: '18px', textAlign: 'center', flexShrink: 0 }}></i>
                <span>Bangalore, India</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '13.5px', color: 'rgba(255,255,255,0.75)' }}>
                <i className="fas fa-clock" style={{ color: 'var(--org)', width: '18px', textAlign: 'center', flexShrink: 0 }}></i>
                <span>Mon–Sat: 9 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Visma Translation. All rights reserved. | <Link to="/translation-services-privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link> | <Link to="/translation-services-terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none' }}>Terms and Conditions</Link></p>
          <p style={{ marginTop: '6px', fontSize: '12px', color: 'rgba(255,255,255,0.45)' }}>
            Designed &amp; Developed by{' '}
            <a href="https://www.digiworq.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#e8651a', textDecoration: 'none', fontWeight: '600' }}>
              Digiworq
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
