import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <main>
      <section className="page-hero" style={{ paddingBottom: '90px' }}>
        <div className="hero-bg bg-blog"></div>
        <div className="ph-inner" style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}>
          <div className="ph-text" style={{ alignItems: 'center' }}>
            <div className="breadcrumb" style={{ justifyContent: 'center' }}><Link to="/">Home</Link><i className="fas fa-chevron-right"></i><span>Blog</span></div>
            <div className="pg-tag"><i className="fas fa-pen-alt"></i> Knowledge Hub</div>
            <h1>Insights on <span className="ac">Language &amp; Translation</span></h1>
            <p className="ph-desc" style={{ textAlign: 'center' }}>Expert articles, industry news, language tips and translation guides from our certified linguists.</p>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fa" /></svg></div>
      </section>

      <section className="sec bg-light">
        <div className="container">
          <div className="sh"><div className="stag">Featured</div><h2>Latest <span className="ac">Article</span></h2></div>
          <div className="feat-post">
            <div className="feat-img" style={{ background: 'linear-gradient(135deg,#1a1a2e,#0f3460)', overflow: 'hidden', padding: 0 }}>
              <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <circle cx="200" cy="160" r="100" fill="rgba(232,101,26,.1)" stroke="rgba(232,101,26,.3)" strokeWidth="2" />
                <circle cx="200" cy="160" r="80" fill="none" stroke="rgba(232,101,26,.2)" strokeWidth="1.5" strokeDasharray="5,4" />
                <circle cx="200" cy="160" r="60" fill="rgba(232,101,26,.08)" stroke="rgba(232,101,26,.25)" strokeWidth="1.5" />
                <ellipse cx="165" cy="130" rx="35" ry="25" fill="rgba(232,101,26,.3)" />
                <ellipse cx="230" cy="150" rx="28" ry="20" fill="rgba(232,101,26,.25)" />
                <ellipse cx="180" cy="185" rx="22" ry="15" fill="rgba(232,101,26,.2)" />
                <ellipse cx="240" cy="120" rx="15" ry="10" fill="rgba(232,101,26,.2)" />
                <line x1="100" y1="160" x2="300" y2="160" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
                <line x1="200" y1="60" x2="200" y2="260" stroke="rgba(255,255,255,.1)" strokeWidth="1" />
                <ellipse cx="200" cy="160" rx="100" ry="30" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
                <ellipse cx="200" cy="160" rx="100" ry="60" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="1" />
                <text x="55" y="90" fontFamily="Arial" fontSize="14" fill="#e8651a" opacity=".7" fontWeight="700">EN</text>
                <text x="320" y="90" fontFamily="Arial" fontSize="14" fill="#3498db" opacity=".7" fontWeight="700">FR</text>
                <text x="50" y="240" fontFamily="Arial" fontSize="14" fill="#27ae60" opacity=".7" fontWeight="700">HI</text>
                <text x="315" y="240" fontFamily="Arial" fontSize="14" fill="#8e44ad" opacity=".7" fontWeight="700">AR</text>
                <circle cx="200" cy="160" r="8" fill="#e8651a" opacity=".9" />
                <circle cx="200" cy="160" r="4" fill="white" opacity=".8" />
                <text x="200" y="308" fontFamily="Arial" fontSize="11" fill="rgba(255,255,255,.4)" fontWeight="700" textAnchor="middle">FEATURED POST</text>
              </svg>
            </div>
            <div className="feat-body">
              <span style={{ background: '#e8651a', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '50px', display: 'inline-block', width: 'fit-content' }}>Translation Tips</span>
              <h3>Why Certified Translation Matters for Your Visa Application</h3>
              <p style={{ color: '#666680', fontSize: '14px', lineHeight: 1.75 }}>Understanding why you need a certified translation for embassy or immigration purposes can save you time, money and last-minute stress. Here's everything you need to know.</p>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#aaa' }}><span><i className="fas fa-calendar" style={{ color: '#e8651a', marginRight: '5px' }}></i>July 15, 2026</span><span><i className="fas fa-clock" style={{ color: '#e8651a', marginRight: '5px' }}></i>5 min read</span><span><i className="fas fa-user" style={{ color: '#e8651a', marginRight: '5px' }}></i>Anil Verma</span></div>
              <a href="#article" className="blog-link" style={{ width: 'fit-content' }}>Read Full Article <i className="fas fa-arrow-right"></i></a>
            </div>
          </div>

          <div className="sh c"><div className="stag">All Articles</div><h2>More from Our <span className="ac">Blog</span></h2></div>
          <div className="blog-grid">
            {/* Card 1 */}
            <div className="blog-card">
              <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#eafaf1,#d5f5e3)', overflow: 'hidden', padding: 0 }}>
                <svg viewBox="0 0 390 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="390" height="190" fill="#eafaf1" />
                  <rect x="60" y="25" width="130" height="160" rx="10" fill="white" stroke="#27ae60" strokeWidth="1.5" opacity=".9" />
                  <rect x="80" y="25" width="130" height="160" rx="10" fill="white" stroke="#27ae60" strokeWidth="1" opacity=".6" />
                  <rect x="100" y="25" width="130" height="160" rx="10" fill="white" stroke="#27ae60" strokeWidth="1" opacity=".3" />
                  <rect x="115" y="50" width="100" height="7" rx="3" fill="#27ae60" opacity=".7" />
                  <rect x="115" y="65" width="80" height="5" rx="2" fill="rgba(0,0,0,.1)" />
                  <rect x="115" y="76" width="90" height="5" rx="2" fill="rgba(0,0,0,.08)" />
                  <circle cx="250" cy="110" r="45" fill="rgba(39,174,96,.15)" stroke="#27ae60" strokeWidth="2" />
                  <rect x="234" y="88" width="32" height="26" rx="4" fill="#27ae60" opacity=".8" />
                  <rect x="226" y="113" width="48" height="8" rx="4" fill="#27ae60" opacity=".9" />
                  <circle cx="250" cy="110" r="14" fill="#27ae60" />
                  <polyline points="242,110 248,117 260,103" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="290" y="45" width="70" height="20" rx="10" fill="#27ae60" opacity=".2" stroke="#27ae60" strokeWidth="1" />
                  <text x="325" y="59" fontFamily="Arial" fontSize="9" fill="#27ae60" fontWeight="700" textAnchor="middle">MEA</text>
                  <rect x="290" y="75" width="70" height="20" rx="10" fill="#27ae60" opacity=".15" stroke="#27ae60" strokeWidth="1" />
                  <text x="325" y="89" fontFamily="Arial" fontSize="9" fill="#27ae60" fontWeight="700" textAnchor="middle">APOSTILLE</text>
                </svg>
                <span className="blog-cat">Apostille</span>
              </div>
              <div className="blog-body"><div className="blog-meta"><span><i className="fas fa-calendar"></i> Jul 10, 2026</span><span><i className="fas fa-clock"></i> 4 min</span></div><h4>MEA Apostille vs Embassy Attestation — What's the Difference?</h4><p>A clear guide explaining when MEA apostille is needed vs embassy attestation for your documents.</p><a href="#read" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a></div>
            </div>

            {/* Card 2 */}
            <div className="blog-card">
              <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#e8f4fd,#b8daff)', overflow: 'hidden', padding: 0 }}>
                <svg viewBox="0 0 390 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="390" height="190" fill="#e8f4fd" />
                  <circle cx="195" cy="95" r="75" fill="rgba(41,128,185,.12)" stroke="rgba(41,128,185,.3)" strokeWidth="2" />
                  <circle cx="195" cy="95" r="55" fill="none" stroke="rgba(41,128,185,.2)" strokeWidth="1.5" strokeDasharray="5,3" />
                  <circle cx="195" cy="95" r="35" fill="rgba(41,128,185,.1)" stroke="#2980b9" strokeWidth="1.5" />
                  <line x1="120" y1="95" x2="270" y2="95" stroke="#2980b9" strokeWidth="1" opacity=".4" />
                  <line x1="195" y1="20" x2="195" y2="170" stroke="#2980b9" strokeWidth="1" opacity=".4" />
                  <ellipse cx="195" cy="95" rx="55" ry="20" fill="none" stroke="#2980b9" strokeWidth="1" opacity=".3" />
                  <text x="80" y="60" fontFamily="Arial" fontSize="13" fill="#2980b9" fontWeight="800" opacity=".8">EN</text>
                  <text x="280" y="60" fontFamily="Arial" fontSize="13" fill="#e8651a" fontWeight="800" opacity=".8">FR</text>
                  <text x="78" y="145" fontFamily="Arial" fontSize="13" fill="#27ae60" fontWeight="800" opacity=".8">AR</text>
                  <text x="278" y="145" fontFamily="Arial" fontSize="13" fill="#8e44ad" fontWeight="800" opacity=".8">HI</text>
                  <circle cx="195" cy="95" r="10" fill="#2980b9" opacity=".8" />
                  <circle cx="195" cy="95" r="5" fill="white" opacity=".8" />
                </svg>
                <span className="blog-cat">Localization</span>
              </div>
              <div className="blog-body"><div className="blog-meta"><span><i className="fas fa-calendar"></i> Jul 3, 2026</span><span><i className="fas fa-clock"></i> 6 min</span></div><h4>Localization vs Translation: Why the Distinction Matters for Global Brands</h4><p>Many businesses confuse translation with localization. Here's why getting this right can make or break your international marketing.</p><a href="#read" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a></div>
            </div>

            {/* Card 3 */}
            <div className="blog-card">
              <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#fef9e7,#fad7a0)', overflow: 'hidden', padding: 0 }}>
                <svg viewBox="0 0 390 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="390" height="190" fill="#fef9e7" />
                  <circle cx="195" cy="95" r="65" fill="rgba(230,126,34,.12)" stroke="rgba(230,126,34,.35)" strokeWidth="2" />
                  <rect x="178" y="42" width="34" height="60" rx="8" fill="#e67e22" opacity=".75" />
                  <rect x="160" y="60" width="70" height="24" rx="8" fill="#e67e22" opacity=".75" />
                  <circle cx="195" cy="95" r="12" fill="white" opacity=".9" />
                  <rect x="120" y="135" width="150" height="6" rx="3" fill="#e67e22" opacity=".3" />
                  <rect x="140" y="147" width="110" height="5" rx="2" fill="rgba(0,0,0,.1)" />
                  <rect x="80" y="50" width="50" height="35" rx="6" fill="rgba(230,126,34,.1)" stroke="#e67e22" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="105" y="72" fontFamily="Arial" fontSize="9" fill="#e67e22" fontWeight="700" textAnchor="middle">Clinical</text>
                  <text x="105" y="82" fontFamily="Arial" fontSize="9" fill="#e67e22" fontWeight="700" textAnchor="middle">Report</text>
                  <rect x="260" y="50" width="50" height="35" rx="6" fill="rgba(230,126,34,.1)" stroke="#e67e22" strokeWidth="1" strokeDasharray="3,2" />
                  <text x="285" y="72" fontFamily="Arial" fontSize="9" fill="#e67e22" fontWeight="700" textAnchor="middle">Medical</text>
                  <text x="285" y="82" fontFamily="Arial" fontSize="9" fill="#e67e22" fontWeight="700" textAnchor="middle">Records</text>
                  <line x1="130" y1="67" x2="178" y2="78" stroke="#e67e22" strokeWidth="1" strokeDasharray="3,2" opacity=".5" />
                  <line x1="260" y1="67" x2="212" y2="78" stroke="#e67e22" strokeWidth="1" strokeDasharray="3,2" opacity=".5" />
                </svg>
                <span className="blog-cat">Medical</span>
              </div>
              <div className="blog-body"><div className="blog-meta"><span><i className="fas fa-calendar"></i> Jun 25, 2026</span><span><i className="fas fa-clock"></i> 5 min</span></div><h4>The Importance of Accurate Medical Translation in Healthcare</h4><p>A single mistranslated word in a medical document can have serious consequences. Best practices for healthcare translation accuracy.</p><a href="#read" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a></div>
            </div>

            {/* Card 4 */}
            <div className="blog-card">
              <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#f5eef8,#d7bde2)', overflow: 'hidden', padding: 0 }}>
                <svg viewBox="0 0 390 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="390" height="190" fill="#f5eef8" />
                  <rect x="155" y="35" width="30" height="65" rx="15" fill="#8e44ad" opacity=".75" />
                  <path d="M120,80 Q120,130 195,130 Q270,130 270,80" fill="none" stroke="#8e44ad" strokeWidth="3" opacity=".7" />
                  <line x1="195" y1="130" x2="195" y2="155" stroke="#8e44ad" strokeWidth="3" opacity=".6" />
                  <rect x="165" y="155" width="60" height="8" rx="4" fill="#8e44ad" opacity=".5" />
                  <circle cx="100" cy="95" r="8" fill="#8e44ad" opacity=".3" />
                  <circle cx="115" cy="78" r="10" fill="#8e44ad" opacity=".35" />
                  <circle cx="275" cy="78" r="10" fill="#8e44ad" opacity=".35" />
                  <circle cx="290" cy="95" r="8" fill="#8e44ad" opacity=".3" />
                  <rect x="50" y="55" width="55" height="45" rx="8" fill="rgba(142,68,173,.12)" stroke="#8e44ad" strokeWidth="1.5" />
                  <text x="77" y="82" fontFamily="Arial" fontSize="20" fill="#8e44ad" opacity=".6" textAnchor="middle">🎙</text>
                  <rect x="285" y="55" width="55" height="45" rx="8" fill="rgba(142,68,173,.12)" stroke="#8e44ad" strokeWidth="1.5" />
                  <text x="312" y="82" fontFamily="Arial" fontSize="18" fill="#8e44ad" opacity=".6" textAnchor="middle">🌍</text>
                </svg>
                <span className="blog-cat">Voice-Over</span>
              </div>
              <div className="blog-body"><div className="blog-meta"><span><i className="fas fa-calendar"></i> Jun 18, 2026</span><span><i className="fas fa-clock"></i> 4 min</span></div><h4>Choosing the Right Voice-Over Language for Your Brand Video</h4><p>Accent, tone and dialect matter enormously in voice-over work. A practical guide to picking the right language and artist.</p><a href="#read" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a></div>
            </div>

            {/* Card 5 */}
            <div className="blog-card">
              <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#fff3ee,#ffd5b8)', overflow: 'hidden', padding: 0 }}>
                <svg viewBox="0 0 390 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="390" height="190" fill="#fff3ee" />
                  <rect x="50" y="150" width="290" height="3" rx="1" fill="rgba(232,101,26,.3)" />
                  <rect x="60" y="120" width="28" height="33" rx="4" fill="#e8651a" opacity=".3" />
                  <rect x="103" y="98" width="28" height="55" rx="4" fill="#e8651a" opacity=".45" />
                  <rect x="146" y="75" width="28" height="78" rx="4" fill="#e8651a" opacity=".6" />
                  <rect x="189" y="52" width="28" height="101" rx="4" fill="#e8651a" opacity=".75" />
                  <rect x="232" y="35" width="28" height="118" rx="4" fill="#e8651a" opacity=".9" />
                  <rect x="275" y="20" width="28" height="133" rx="4" fill="#e8651a" />
                  <polyline points="74,120 117,98 160,75 203,52 246,35 289,20" stroke="#2c3e50" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="74" cy="120" r="4" fill="#2c3e50" /><circle cx="117" cy="98" r="4" fill="#2c3e50" />
                  <circle cx="160" cy="75" r="4" fill="#2c3e50" /><circle cx="203" cy="52" r="4" fill="#2c3e50" />
                  <circle cx="246" cy="35" r="4" fill="#2c3e50" /><circle cx="289" cy="20" r="5" fill="#2c3e50" stroke="white" strokeWidth="2" />
                  <text x="60" y="170" fontFamily="Arial" fontSize="10" fill="#e8651a" fontWeight="700" opacity=".7">Hindi</text>
                  <text x="103" y="170" fontFamily="Arial" fontSize="10" fill="#e8651a" fontWeight="700" opacity=".7">Tamil</text>
                  <text x="146" y="170" fontFamily="Arial" fontSize="10" fill="#e8651a" fontWeight="700" opacity=".7">Telugu</text>
                  <text x="189" y="170" fontFamily="Arial" fontSize="10" fill="#e8651a" fontWeight="700" opacity=".7">FR</text>
                  <text x="232" y="170" fontFamily="Arial" fontSize="10" fill="#e8651a" fontWeight="700" opacity=".7">AR</text>
                  <text x="275" y="170" fontFamily="Arial" fontSize="10" fill="#e8651a" fontWeight="700" opacity=".7">ZH</text>
                </svg>
                <span className="blog-cat">Industry</span>
              </div>
              <div className="blog-body"><div className="blog-meta"><span><i className="fas fa-calendar"></i> Jun 10, 2026</span><span><i className="fas fa-clock"></i> 7 min</span></div><h4>Top 5 Languages Indian Businesses Should Translate Into in 2026</h4><p>These five languages offer the best ROI for translation investment for Indian companies expanding globally.</p><a href="#read" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a></div>
            </div>

            {/* Card 6 */}
            <div className="blog-card">
              <div className="blog-thumb" style={{ background: 'linear-gradient(135deg,#eafaf1,#a9dfbf)', overflow: 'hidden', padding: 0 }}>
                <svg viewBox="0 0 390 190" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                  <rect width="390" height="190" fill="#eafaf1" />
                  <rect x="80" y="25" width="230" height="130" rx="10" fill="white" stroke="#27ae60" strokeWidth="1.5" opacity=".8" />
                  <rect x="80" y="25" width="230" height="22" rx="10" fill="#16213e" />
                  <rect x="80" y="35" width="230" height="12" fill="#16213e" />
                  <circle cx="96" cy="36" r="4" fill="#e74c3c" opacity=".8" />
                  <circle cx="110" cy="36" r="4" fill="#f39c12" opacity=".8" />
                  <circle cx="124" cy="36" r="4" fill="#27ae60" opacity=".8" />
                  <rect x="145" y="29" width="120" height="14" rx="7" fill="rgba(255,255,255,.1)" />
                  <text x="205" y="40" fontFamily="Arial" fontSize="7" fill="rgba(255,255,255,.5)" textAnchor="middle">vismatranslation.com</text>
                  <rect x="95" y="58" width="80" height="7" rx="3" fill="#27ae60" opacity=".5" />
                  <rect x="95" y="71" width="60" height="5" rx="2" fill="rgba(0,0,0,.1)" />
                  <rect x="95" y="81" width="70" height="5" rx="2" fill="rgba(0,0,0,.08)" />
                  <circle cx="260" cy="90" r="28" fill="rgba(39,174,96,.2)" stroke="#27ae60" strokeWidth="2" />
                  <circle cx="255" cy="85" r="8" fill="none" stroke="#27ae60" strokeWidth="2.5" />
                  <line x1="261" y1="92" x2="272" y2="103" stroke="#27ae60" strokeWidth="3" strokeLinecap="round" />
                  <text x="95" y="115" fontFamily="monospace" fontSize="8" fill="#27ae60" opacity=".6">&lt;html lang="multi"&gt;</text>
                  <text x="80" y="170" fontFamily="Arial" fontSize="10" fill="#27ae60" fontWeight="700" textAnchor="start">SEO · RANK · CONVERT</text>
                </svg>
                <span className="blog-cat">SEO</span>
              </div>
              <div className="blog-body"><div className="blog-meta"><span><i className="fas fa-calendar"></i> Jun 2, 2026</span><span><i className="fas fa-clock"></i> 5 min</span></div><h4>Multilingual SEO: How to Rank in Multiple Languages</h4><p>A step-by-step guide to building a multilingual SEO strategy that drives organic traffic from international audiences.</p><a href="#read" className="blog-link">Read More <i className="fas fa-arrow-right"></i></a></div>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container cta-inner">
          <h2>Have a Translation Project?</h2>
          <p>Get a free quote within 2 hours. Fast, accurate and ISO certified.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-wh"><i className="fas fa-paper-plane"></i> Get Free Quote</Link>
            <Link to="/services" className="btn-wb"><i className="fas fa-th-large"></i> Our Services</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
