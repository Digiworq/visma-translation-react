import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useData } from '../context/DataContext';

export default function Home() {
  const { heroContent, services, translationServices, addLead } = useData();
  const [stats, setStats] = useState({ customers: 0, projects: 0, words: 0, translators: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '', email: '', phone: '', service: 'Translation Services', message: ''
  });

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    addLead(contactForm);
    setFormSubmitted(true);
    setContactForm({ name: '', email: '', phone: '', service: 'Translation Services', message: '' });
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <main>
      <SEO
        title="Best Language Translation & Apostille Services in India"
        description="ISO 9001:2015 certified translation agency in Bangalore offering document translation, MEA apostille, website localization, subtitling, voice-over, and DTP in 100+ languages. Free 2-hour quote."
        keywords="translation services bangalore, certified translation india, apostille services bangalore, document translation services, legal translation bangalore, certificate translation india, medical translation services, business translation, iso certified translation agency, language services india, multilingual translation, embassy accepted translation, notarized translation bangalore, 100 languages translation, visma translation"
        canonical="https://visma-translation-react.vercel.app/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "VISMA Translation",
          "description": "ISO 9001:2015 certified translation agency in Bangalore providing certified document translation, MEA apostille, localization, subtitling and voice-over in 100+ languages.",
          "url": "https://visma-translation-react.vercel.app",
          "telephone": "+919945342726",
          "email": "info@vismatranslation.com",
          "image": "https://visma-translation-react.vercel.app/logo.png",
          "priceRange": "$$",
          "currenciesAccepted": "INR",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Bangalore",
            "addressLocality": "Bangalore",
            "addressRegion": "Karnataka",
            "postalCode": "560001",
            "addressCountry": "IN"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": 12.9716, "longitude": 77.5946 },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "320",
            "bestRating": "5"
          },
          "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "City", "name": "Bangalore" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Language & Translation Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Certified Document Translation", "description": "Embassy-accepted certified translation in 100+ languages." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MEA Apostille Services", "description": "Fast MEA apostille legalization for all document types." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Localization", "description": "Full cultural and technical adaptation for global websites." } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Voice-Over & Subtitling", "description": "Studio voice narrations and synced subtitles in 50+ languages." } }
            ]
          }
        }}
      />
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url('${heroContent.heroImage || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&auto=format&fit=crop'}')`,
          backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.13, zIndex: 0
        }}></div>

        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-tag">
              <span className="tag-line"></span>
              <span>{heroContent.tag || 'Fast & Accurate!'}</span>
            </div>
            <h1 className="hero-title">
              {heroContent.mainTitle}<br />
              <span className="red">{heroContent.subTitle}</span>
            </h1>
            <p className="hero-desc">
              {heroContent.desc}
            </p>
            <div className="hero-btns">
              <a href="#services" className="btn-red">Learn More</a>
              <Link to="/contact" className="btn-outline-dark">Contact Us</Link>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><i className="fas fa-shield-alt"></i><span>{heroContent.badge4 || 'ISO 9001:2015 Certified'}</span></div>
              <div className="trust-item"><i className="fas fa-star"></i><span>Top 10 Agency in India</span></div>
              <div className="trust-item"><i className="fas fa-globe"></i><span>{heroContent.badge2 || '100+ Languages'}</span></div>
            </div>
          </div>

          <div className="hero-image">
            <div className="hero-img-wrap">
              <div className="hero-img-placeholder" style={{ position: 'relative', overflow: 'hidden', borderRadius: '20px', boxShadow: '0 32px 80px rgba(0,0,0,0.4)' }}>
                <img
                  src={heroContent.heroImage || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80"}
                  alt="Visma Translation Service"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', borderRadius: '20px' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(192,57,43,0.25),transparent 60%)', borderRadius: '20px' }}></div>
                <div className="img-badge" style={{ position: 'absolute', bottom: '20px', left: '20px', zIndex: 2 }}>
                  <i className="fas fa-certificate"></i> {heroContent.badge4 || 'ISO 9001:2015'}
                </div>
              </div>
              <div className="hero-float-card card1">
                <i className="fas fa-check-circle"></i>
                <span>{heroContent.badge1 || '99.9% Accuracy'}</span>
              </div>
              <div className="hero-float-card card2">
                <i className="fas fa-globe-americas"></i>
                <span>{heroContent.badge2 || '100+ Languages'}</span>
              </div>
              <div className="hero-float-card card3">
                <i className="fas fa-clock"></i>
                <span>{heroContent.badge3 || '24/7 Support'}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none"><path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8f9fa" /></svg>
        </div>
      </section>

      {/* ===== ANNOUNCEMENT BANNER ===== */}
      {heroContent.showAnnouncement !== false && (
        <div className="home-announcement-bar" style={{
          background: 'linear-gradient(90deg, #181a1e 0%, #282c34 100%)',
          color: '#ffffff',
          padding: '14px 0',
          borderBottom: '2px solid var(--org)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
        }}>
          <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{
                background: 'var(--org)',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: 800,
                padding: '4px 12px',
                borderRadius: '50px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                <i className="fas fa-bullhorn" style={{ marginRight: '5px' }}></i> {heroContent.announcementTitle || 'Special Notice'}
              </span>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
                {heroContent.announcementText || 'Express 2-Hour Document Translation & Embassy Apostille Legalization available across India!'}
              </p>
            </div>
            <Link to="/contact" style={{
              background: 'transparent',
              color: 'var(--org)',
              border: '1px solid var(--org)',
              padding: '6px 16px',
              borderRadius: '50px',
              fontSize: '12.5px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}>
              Get Free Quote <i className="fas fa-arrow-right" style={{ marginLeft: '4px' }}></i>
            </Link>
          </div>
        </div>
      )}

      {/* ===== STATS STRIP ===== */}
      <div className="stats-strip" id="stats">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-num">{heroContent.stat1Num || '500+'}</span>
            <span className="stat-label">{heroContent.stat1Label || 'Happy Customers'}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{heroContent.stat2Num || '1,200+'}</span>
            <span className="stat-label">{heroContent.stat2Label || 'Projects Completed'}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{heroContent.stat3Num || '50M+'}</span>
            <span className="stat-label">{heroContent.stat3Label || 'Words Translated'}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-num">{heroContent.stat4Num || '100+'}</span>
            <span className="stat-label">{heroContent.stat4Label || 'Translators Worldwide'}</span>
          </div>
        </div>
      </div>

      {/* ===== KEY DELIVERABLES / WHY CHOOSE VISMA ===== */}
      <section className="deliverables" id="about">
        <div className="container">
          <div className="section-head center">
            <span className="tag">What We Deliver</span>
            <h2>{heroContent.aboutTitle || 'Why Choose Visma Translation?'}</h2>
            <p>{heroContent.aboutDesc || 'ISO 9001:2015 Certified translation agency delivering 99.9% accuracy with native linguists in 100+ languages.'}</p>
          </div>

          {heroContent.extraInfoBox && (
            <div style={{
              background: '#f8f9fa',
              borderLeft: '4px solid var(--org)',
              padding: '20px 24px',
              borderRadius: '12px',
              marginBottom: '32px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
            }}>
              <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.7', color: 'var(--dark)', fontWeight: 500 }}>
                <i className="fas fa-info-circle" style={{ color: 'var(--org)', marginRight: '10px', fontSize: '18px' }}></i>
                {heroContent.extraInfoBox}
              </p>
            </div>
          )}

          <div className="deliverables-grid">
            <div className="deliver-card">
              <div className="deliver-icon"><i className="fas fa-bolt"></i></div>
              <h4>Fast Turnaround</h4>
              <p>We deliver translations quickly without compromising on quality, meeting your tightest deadlines.</p>
            </div>
            <div className="deliver-card">
              <div className="deliver-icon"><i className="fas fa-check-double"></i></div>
              <h4>High Accuracy</h4>
              <p>99.9% accuracy guaranteed with multi-level quality checks by certified linguists.</p>
            </div>
            <div className="deliver-card">
              <div className="deliver-icon"><i className="fas fa-globe"></i></div>
              <h4>100+ Languages</h4>
              <p>From European to Asian languages, we cover over 100 language pairs globally.</p>
            </div>
            <div className="deliver-card">
              <div className="deliver-icon"><i className="fas fa-certificate"></i></div>
              <h4>ISO Certified</h4>
              <p>ISO 9001:2015 certified processes ensuring consistent quality across all projects.</p>
            </div>
            <div className="deliver-card">
              <div className="deliver-icon"><i className="fas fa-user-graduate"></i></div>
              <h4>Expert Linguists</h4>
              <p>Qualified translators with domain expertise in legal, medical, technical &amp; more.</p>
            </div>
            <div className="deliver-card">
              <div className="deliver-icon"><i className="fas fa-lock"></i></div>
              <h4>Confidentiality</h4>
              <p>All documents handled with strict confidentiality and signed NDA agreements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TOP 10 BANNER ===== */}
      <section className="top10-banner">
        <div className="container">
          <div className="top10-inner">
            <div className="top10-text">
              <span className="tag light">Recognition</span>
              <h2>Top 10 Translation Agency <span className="red">in India</span></h2>
              <p>Our exceptional language translation services are designed to help you break down language barriers and connect with customers from all over the world. In a world that is increasingly interconnected, effective communication is key to building relationships and fostering trust with your audience.</p>
              <Link to="/contact" className="btn-red">Get Started Today</Link>
            </div>
            <div className="top10-visual">
              <div className="award-badge">
                <i className="fas fa-trophy"></i>
                <span>Top 10</span>
                <small>Translation Agency</small>
                <small>in India</small>
              </div>
              <div className="award-dots">
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-head center">
            <span className="tag">What We Offer</span>
            <h2>Our <span className="red">Complete Services</span></h2>
            <p>From translation to voice-over, we provide end-to-end language solutions for businesses worldwide.</p>
          </div>
          <div className="services-grid">

            <div className="svc-card">
              <div className="svc-num">01</div>
              <div className="svc-icon"><i className="fas fa-language"></i></div>
              <h3>Translation Services</h3>
              <p>As the best translation service provider, we pride ourselves on having a team of skilled linguists who are experts in various languages and dialects. Whether you need documents translated, marketing materials localized, or websites adapted for different cultures, we have the resources and knowledge to meet your needs.</p>
              <Link to="/language-services-bangalore" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card featured">
              <div className="svc-num">02</div>
              <div className="svc-icon"><i className="fas fa-globe-americas"></i></div>
              <h3>Localization Services</h3>
              <p>Our exceptional language localization services go beyond mere translation. We understand that localization involves adapting your content to fit the cultural context of your target audience — considering local customs, idioms, and preferences to create a message that resonates deeply with your audience.</p>
              <Link to="/localization" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">03</div>
              <div className="svc-icon"><i className="fas fa-pen-nib"></i></div>
              <h3>DTP &amp; Logo Design</h3>
              <p>We offer comprehensive Desktop Publishing services including logo design, brochure creation, flyer production, typesetting, layouts, and graphic designing. We also specialize in creating infographics for social media, ensuring that your visual content is as engaging as your written content.</p>
              <Link to="/desktop-publishing-services" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">04</div>
              <div className="svc-icon"><i className="fas fa-hashtag"></i></div>
              <h3>Social Media Content</h3>
              <p>Our team excels in creating and crafting creative content with precision. We focus on producing content that is impactful, engaging, and conversational enough to retain customer attention. We tailor our content to suit each platform's unique characteristics, ensuring maximum reach and engagement.</p>
              <Link to="/social-media-content-services" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">05</div>
              <div className="svc-icon"><i className="fas fa-search"></i></div>
              <h3>SEO Content Writing</h3>
              <p>Our proficient team of writers possesses expertise in both SEO and writing, allowing us to create content that not only informs but also ranks well in search engines. We understand keywords, meta descriptions, and other SEO elements, incorporating them seamlessly to drive traffic to your website.</p>
              <Link to="/seo-content-writing-services" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">06</div>
              <div className="svc-icon"><i className="fas fa-closed-captioning"></i></div>
              <h3>Sub-Titling Service</h3>
              <p>Our subtitling service is the ideal solution for movies, TV programs, video games, and YouTube videos. Our dedicated team of industry professionals handles the subtitling process with utmost precision, ensuring that the timing, tone, and context are preserved to enhance the viewing experience.</p>
              <Link to="/subtitling" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">07</div>
              <div className="svc-icon"><i className="fas fa-microphone-alt"></i></div>
              <h3>Voice-Over Service</h3>
              <p>As a multilingual voice-over agency, we offer a wide range of voice-over services in Bangalore, India. Our services encompass everything from crafting compelling scripts to delivering captivating narrations. Our talented voice-over artists are skilled in various languages and accents.</p>
              <Link to="/voice-over-services" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">08</div>
              <div className="svc-icon"><i className="fas fa-file-audio"></i></div>
              <h3>Transcription Services</h3>
              <p>Visma specializes in transcribing both audio and video content. We ensure that your complex and detailed audio and video transcription is handled precisely by professional transcribers trained to capture every nuance of the spoken word, providing accurate and reliable transcripts.</p>
              <Link to="/transcription" className="svc-link">Read More <i className="fas fa-arrow-right"></i></Link>
            </div>

          </div>
        </div>
      </section>

      {/* ===== INDUSTRIES ===== */}
      <section className="industries" id="quality">
        <div className="container">
          <div className="section-head center">
            <span className="tag">Who We Serve</span>
            <h2>Popular <span className="red">Industries</span> We Serve</h2>
            <p>Visma Translation stands out as a premier provider, serving prominent companies across multiple sectors globally.</p>
          </div>
          <div className="industries-grid">
            <div className="ind-card"><i className="fas fa-heartbeat"></i><span>Medical &amp; Pharma</span></div>
            <div className="ind-card"><i className="fas fa-gavel"></i><span>Legal</span></div>
            <div className="ind-card"><i className="fas fa-landmark"></i><span>Banking &amp; Finance</span></div>
            <div className="ind-card"><i className="fas fa-microchip"></i><span>Technology</span></div>
            <div className="ind-card"><i className="fas fa-industry"></i><span>Manufacturing</span></div>
            <div className="ind-card"><i className="fas fa-shopping-bag"></i><span>Retail &amp; Consumer</span></div>
            <div className="ind-card"><i className="fas fa-university"></i><span>Government</span></div>
            <div className="ind-card"><i className="fas fa-tv"></i><span>Media &amp; Entertainment</span></div>
          </div>
          <div className="partner-strip">
            <p>Visma Translation stands as a strategic ally to leading industries, helping sectors effectively bridge linguistic gaps, facilitating smoother interactions and fostering better understanding in an increasingly interconnected world.</p>
          </div>
        </div>
      </section>

      {/* ===== LANGUAGES ===== */}
      <section className="languages" id="languages">
        <div className="container">
          <div className="section-head center">
            <span className="tag">Global Reach</span>
            <h2>Most Popular <span className="red">Languages</span></h2>
            <p>We provide expert translations across international and Indian regional languages.</p>
          </div>

          <h4 className="lang-category">International Languages</h4>
          <div className="lang-grid">
            <span className="lang-tag"><i className="fas fa-flag"></i> English to French</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Chinese</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Dutch</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Polish</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to German</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Arabic</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Danish</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Slovakian</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Russian</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Japanese</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Nepalese</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Thai</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Italian</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Korean</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Greek</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Vietnamese</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Portuguese</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Norwegian</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Spanish</span>
            <span className="lang-tag highlight"><i className="fas fa-globe"></i> All Intl. Languages</span>
          </div>

          <h4 className="lang-category">Indian Regional Languages</h4>
          <div className="lang-grid">
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Assamese</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Bengali</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Gujarati</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Kannada</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Hindi</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Marathi</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Malayalam</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Tamil</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Telugu</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Oriya</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Kashmiri</span>
            <span className="lang-tag"><i className="fas fa-flag"></i> English to Urdu</span>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials">
        <div className="container">
          <div className="section-head center">
            <span className="tag">Client Says</span>
            <h2>What Our <span className="red">Clients Say</span></h2>
            <p>We are reliable, honest and operate with integrity. Our exceptional language translation services will help you break down language barriers.</p>
          </div>
          <div className="testi-grid">

            <div className="testi-card">
              <div className="testi-quote"><i className="fas fa-quote-left"></i></div>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p>I have successfully availed myself of the convenient and cost-effective personal document translation services in Spanish, along with the apostille services provided by Team Visma. I am truly grateful for their assistance. Thanks to their quick and efficient services, I was able to manage my education-related documents without any hassle. Their dedication to customer satisfaction is commendable. Well done, Team Visma!</p>
              <div className="testi-author">
                <div className="author-avatar">NA</div>
                <div>
                  <strong>Nitish Arya</strong>
                  <span>Student</span>
                </div>
              </div>
            </div>

            <div className="testi-card">
              <div className="testi-quote"><i className="fas fa-quote-left"></i></div>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p>I want to express my gratitude to each member of the team for all your hard work and the above-and-beyond assistance you provided during my document translation process. Your efforts are much appreciated, and I look forward to collaborating with you on my next project. Thank you once again for your outstanding support!</p>
              <div className="testi-author">
                <div className="author-avatar">SV</div>
                <div>
                  <strong>Sharmila Varma</strong>
                  <span>Digital Marketing Manager</span>
                </div>
              </div>
            </div>

            <div className="testi-card">
              <div className="testi-quote"><i className="fas fa-quote-left"></i></div>
              <div className="stars">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                <i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
              </div>
              <p>Visma Translation provided exceptional service for our legal document translations. Their attention to detail and understanding of legal terminology was impressive. The turnaround was fast and the quality was top-notch. I highly recommend their services to any business needing professional translation.</p>
              <div className="testi-author">
                <div className="author-avatar">RK</div>
                <div>
                  <strong>Rajesh Kumar</strong>
                  <span>Legal Consultant</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" id="apostille">
        <div className="container">
          <div className="cta-inner">
            <div className="cta-text">
              <span className="tag light">Ready to Go Global?</span>
              <h2>Professional Document Translation Service</h2>
              <p>Connect with us for Accurate and Urgent Document Translation. Are you ready to take your business to new heights? Unlock your pathway to global triumph — Connect with International Audiences.</p>
              <div className="cta-features">
                <span><i className="fas fa-check"></i> Certified Translation</span>
                <span><i className="fas fa-check"></i> Apostille Services</span>
                <span><i className="fas fa-check"></i> Express Delivery</span>
                <span><i className="fas fa-check"></i> 100+ Languages</span>
              </div>
              <div className="cta-btns">
                <Link to="/contact" className="btn-red">Get a Free Quote</Link>
                <a href="tel:+919945342726" className="btn-outline-red"><i className="fas fa-phone-alt"></i> Call Now</a>
              </div>
            </div>
            <div className="cta-visual">
              <div className="globe-wrap">
                <i className="fas fa-globe-asia globe-icon"></i>
                <div className="orbit orbit1"><span></span></div>
                <div className="orbit orbit2"><span></span></div>
                <div className="orbit orbit3"><span></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="tag">Get In Touch</span>
              <h2>Let's Start Your <span className="red">Project</span></h2>
              <p>Track overall market trends and more. Unlock your pathway to global triumph — Connect with International Audiences.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="c-icon"><i className="fas fa-phone-alt"></i></div>
                  <div><strong>Phone</strong><span>+91 9945342726</span></div>
                </div>
                <div className="contact-item">
                  <div className="c-icon"><i className="fas fa-envelope"></i></div>
                  <div><strong>Email</strong><span>info@vismatranslation.com</span></div>
                </div>
                <div className="contact-item">
                  <div className="c-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div><strong>Location</strong><span>Bangalore, India</span></div>
                </div>
                <div className="contact-item">
                  <div className="c-icon"><i className="fas fa-clock"></i></div>
                  <div><strong>Hours</strong><span>Mon–Sat: 9:00 AM – 6:00 PM</span></div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+91 9999999999" required />
                  </div>
                  <div className="form-group">
                    <label>Service Required</label>
                    <select defaultValue="Translation Services">
                      <option>Translation Services</option>
                      <option>Localization Services</option>
                      <option>Voice-Over Service</option>
                      <option>Sub-Titling Service</option>
                      <option>Transcription Services</option>
                      <option>SEO Content Writing</option>
                      <option>DTP &amp; Logo Design</option>
                      <option>Apostille Services</option>
                    </select>
                  </div>
                </div>
                <div className="form-group full">
                  <label>Your Message</label>
                  <textarea placeholder="Tell us about your project requirements..." required></textarea>
                </div>
                <button type="submit" className="btn-red full-width" style={{ background: formSubmitted ? '#27ae60' : '', borderColor: formSubmitted ? '#27ae60' : '' }}>
                  {formSubmitted ? <><i className="fas fa-check-circle"></i> Message Sent!</> : <><i className="fas fa-paper-plane"></i> Send Message</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
