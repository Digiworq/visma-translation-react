import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

import imgLocalization from '../../Localization service.png';
import imgSeo from '../../SEO content writing.png';
import imgSocial from '../../Social media content.png';
import imgSubtitling from '../../sub-titling services.png';
import imgDtp from '../../Desktop Publishing (DTP).png';
import imgVoiceover from '../../voice-over services.png';
import imgTranscription from '../../Transcription Services.png';
import imgVideoediting from '../../video editing services.png';
import imgSmmarketing from '../../social media marketing.png';
import imgWebdev from '../../Web development.png';

import imgBusiness from '../../Business Translation.png';
import imgCertificate from '../../certification translation.png';
import imgEcommerce from '../../E-commerce Translation.png';
import imgElearning from '../../E-Learning.png';
import imgFinance from '../../Finance Translation.png';
import imgLegal from '../../Legal translation.png';
import imgMedical from '../../Medical.png';
import imgTechnical from '../../teachnical translation.png';

const SERVICE_IMAGES = {
  localization: imgLocalization,
  seo: imgSeo,
  social: imgSocial,
  subtitling: imgSubtitling,
  dtp: imgDtp,
  voiceover: imgVoiceover,
  transcription: imgTranscription,
  videoediting: imgVideoediting,
  smmarketing: imgSmmarketing,
  webdev: imgWebdev
};

const TRANSLATION_IMAGES = {
  business: imgBusiness,
  certificate: imgCertificate,
  ecommerce: imgEcommerce,
  elearning: imgElearning,
  finance: imgFinance,
  legal: imgLegal,
  medical: imgMedical,
  technical: imgTechnical
};

const SERVICES = [
  { path: '/localization', title: 'Localization Service', sub: 'Cultural adaptation', key: 'localization' },
  { path: '/seo-content', title: 'SEO Content Writing', sub: 'Rank higher online', key: 'seo' },
  { path: '/social-media', title: 'Social Media Content', sub: 'Crafted for every platform', key: 'social' },
  { path: '/subtitling', title: 'Sub-Titling Services', sub: 'Movies, TV, YouTube', key: 'subtitling' },
  { path: '/dtp', title: 'Desktop Publishing', sub: 'Multilingual DTP', key: 'dtp' },
  { path: '/voiceover', title: 'Voice-Over Services', sub: 'Multilingual narrations', key: 'voiceover' },
  { path: '/transcription', title: 'Transcription Services', sub: 'Audio & video to text', key: 'transcription' },
  { path: '/video-editing', title: 'Video Editing Service', sub: 'Professional post-production', key: 'videoediting' },
  { path: '/social-media-marketing', title: 'Social Media Marketing', sub: 'Grow your brand online', key: 'smmarketing' },
  { path: '/web-development', title: 'Web Development', sub: 'Modern & multilingual sites', key: 'webdev' }
];

const TRANSLATIONS = [
  { path: '/business-translation', title: 'Business Translation', sub: 'Corporate communications', key: 'business' },
  { path: '/certificate-translation', title: 'Certificate Translation', sub: 'Embassy accepted', key: 'certificate' },
  { path: '/ecommerce-translation', title: 'E-Commerce Translation', sub: 'Global online stores', key: 'ecommerce' },
  { path: '/elearning-translation', title: 'E-Learning Translation', sub: 'Educational content', key: 'elearning' },
  { path: '/finance-translation', title: 'Finance Translation', sub: 'Banking & financial docs', key: 'finance' },
  { path: '/legal-translation', title: 'Legal Translation', sub: 'Court & contract docs', key: 'legal' },
  { path: '/medical-translation', title: 'Medical Translation', sub: 'Pharma & healthcare', key: 'medical' },
  { path: '/technical-translation', title: 'Technical Translation', sub: 'Manuals & engineering', key: 'technical' }
];

const SVG_PREVIEWS = {
  business: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="180" fill="#ffffff" rx="12"/><rect x="40" y="55" width="140" height="80" rx="8" fill="#f8f9fa" stroke="#e8651a" stroke-width="2"/><text x="80" y="100" font-family="Arial" font-size="12" fill="#1a1a2e" font-weight="bold">BUSINESS</text></svg>`
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState(null);
  const [svcPreview, setSvcPreview] = useState(SERVICES[0]);
  const [transPreview, setTransPreview] = useState(TRANSLATIONS[0]);

  const closeMobile = () => {
    setMobileOpen(false);
    setActiveMega(null);
  };

  const handleMegaClick = (e, megaName) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setActiveMega(activeMega === megaName ? null : megaName);
    } else {
      setActiveMega(null);
      closeMobile();
    }
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span><i className="fas fa-clock"></i> Mon-Sat: 9AM-6PM</span>
            <span><i className="fas fa-map-marker-alt"></i> Bangalore, India</span>
          </div>
          <div className="topbar-right">
            <a href="mailto:info@vismatranslation.com" className="t-btn outline">
              <i className="fas fa-envelope"></i> info@vismatranslation.com
            </a>
            <a href="tel:+919945342726" className="t-btn solid">
              <i className="fas fa-phone-alt"></i> +91 9945342726
            </a>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="navbar" id="navbar">
        <div className="nav-inner">
          <NavLink to="/" style={{ textDecoration: 'none' }} onClick={closeMobile}>
            <Logo />
          </NavLink>

          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`} id="navLinks">
            <NavLink to="/" className="nav-link" onClick={closeMobile}>Home</NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMobile}>About Us</NavLink>

            {/* SERVICES MEGA DROPDOWN */}
            <div 
              className={`nav-item has-mega ${activeMega === 'services' ? 'mega-open' : ''}`}
              onMouseEnter={() => window.innerWidth > 768 && setActiveMega('services')}
              onMouseLeave={() => window.innerWidth > 768 && setActiveMega(null)}
            >
              <NavLink 
                to="/services" 
                className="nav-link" 
                onClick={(e) => handleMegaClick(e, 'services')}
              >
                Services <i className={`fas fa-chevron-down ${activeMega === 'services' ? 'fa-rotate-180' : ''}`}></i>
              </NavLink>
              <div className="mega-panel">
                <div className="mega-left">
                  <NavLink to="/services" className="mega-head" onClick={closeMobile}>
                    Services <i className="fas fa-arrow-right"></i>
                  </NavLink>
                  <div className="mega-cols">
                    <div className="mega-col">
                      {SERVICES.slice(0, 5).map(item => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={`mega-item ${svcPreview.key === item.key ? 'mgi-active' : ''}`}
                          onMouseEnter={() => setSvcPreview(item)}
                          onClick={closeMobile}
                        >
                          <div className="mi-icon"><i className="fas fa-arrow-right"></i></div>
                          <div><strong>{item.title}</strong><span>{item.sub}</span></div>
                        </NavLink>
                      ))}
                    </div>
                    <div className="mega-col">
                      {SERVICES.slice(5).map(item => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={`mega-item ${svcPreview.key === item.key ? 'mgi-active' : ''}`}
                          onMouseEnter={() => setSvcPreview(item)}
                          onClick={closeMobile}
                        >
                          <div className="mi-icon"><i className="fas fa-arrow-right"></i></div>
                          <div><strong>{item.title}</strong><span>{item.sub}</span></div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mega-right">
                  <div className="mega-preview-title">{svcPreview.title}</div>
                  <div className="mega-illus">
                    {SERVICE_IMAGES[svcPreview.key] ? (
                      <img 
                        src={SERVICE_IMAGES[svcPreview.key]} 
                        alt={svcPreview.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} 
                      />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: SVG_PREVIEWS[svcPreview.key] || '' }} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* TRANSLATION SERVICES MEGA DROPDOWN */}
            <div 
              className={`nav-item has-mega ${activeMega === 'translation' ? 'mega-open' : ''}`}
              onMouseEnter={() => window.innerWidth > 768 && setActiveMega('translation')}
              onMouseLeave={() => window.innerWidth > 768 && setActiveMega(null)}
            >
              <NavLink 
                to="/services" 
                className="nav-link" 
                onClick={(e) => handleMegaClick(e, 'translation')}
              >
                Translation Services <i className={`fas fa-chevron-down ${activeMega === 'translation' ? 'fa-rotate-180' : ''}`}></i>
              </NavLink>
              <div className="mega-panel">
                <div className="mega-left">
                  <NavLink to="/services" className="mega-head" onClick={closeMobile}>
                    Translation Services <i className="fas fa-arrow-right"></i>
                  </NavLink>
                  <div className="mega-cols">
                    <div className="mega-col">
                      {TRANSLATIONS.slice(0, 4).map(item => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={`mega-item ${transPreview.key === item.key ? 'mgi-active' : ''}`}
                          onMouseEnter={() => setTransPreview(item)}
                          onClick={closeMobile}
                        >
                          <div className="mi-icon"><i className="fas fa-arrow-right"></i></div>
                          <div><strong>{item.title}</strong><span>{item.sub}</span></div>
                        </NavLink>
                      ))}
                    </div>
                    <div className="mega-col">
                      {TRANSLATIONS.slice(4).map(item => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          className={`mega-item ${transPreview.key === item.key ? 'mgi-active' : ''}`}
                          onMouseEnter={() => setTransPreview(item)}
                          onClick={closeMobile}
                        >
                          <div className="mi-icon"><i className="fas fa-arrow-right"></i></div>
                          <div><strong>{item.title}</strong><span>{item.sub}</span></div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mega-right">
                  <div className="mega-preview-title">{transPreview.title}</div>
                  <div className="mega-illus">
                    {TRANSLATION_IMAGES[transPreview.key] ? (
                      <img 
                        src={TRANSLATION_IMAGES[transPreview.key]} 
                        alt={transPreview.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '12px' }} 
                      />
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: SVG_PREVIEWS[transPreview.key] || '' }} />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/apostille" className="nav-link" onClick={closeMobile}>Apostille Services</NavLink>
            <NavLink to="/quality" className="nav-link" onClick={closeMobile}>Quality</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeMobile}>Contact Us</NavLink>
            <NavLink to="/blog" className="nav-link" onClick={closeMobile}>Blog</NavLink>
          </nav>

          <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
    </>
  );
}
