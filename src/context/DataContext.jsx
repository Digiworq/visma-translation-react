import React, { createContext, useContext, useState, useEffect } from 'react';

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

const DataContext = createContext();

const INITIAL_SERVICES = [
  { path: '/localization-services', title: 'Localization Service', sub: 'Cultural adaptation', key: 'localization', icon: 'fa-globe-americas', image: imgLocalization, desc: 'Cultural adaptation of software, websites, and mobile applications for international audiences.' },
  { path: '/seo-content-writing-services', title: 'SEO Content Writing', sub: 'Rank higher online', key: 'seo', icon: 'fa-pen-nib', image: imgSeo, desc: 'Search engine optimized content in multiple languages to drive organic traffic and boost conversions.' },
  { path: '/social-media-content-services', title: 'Social Media Content', sub: 'Crafted for every platform', key: 'social', icon: 'fa-share-alt', image: imgSocial, desc: 'Culturally resonant social media posts, graphics, and campaigns for global audience engagement.' },
  { path: '/subtitling-services', title: 'Sub-Titling Services', sub: 'Movies, TV, YouTube', key: 'subtitling', icon: 'fa-closed-captioning', image: imgSubtitling, desc: 'Accurate multilingual subtitles and closed captions for movies, TV shows, and YouTube videos.' },
  { path: '/desktop-publishing-services', title: 'Desktop Publishing', sub: 'Multilingual DTP', key: 'dtp', icon: 'fa-desktop', image: imgDtp, desc: 'Multilingual layout formatting for brochures, manuals, catalogs, and marketing collateral.' },
  { path: '/voice-over-services', title: 'Voice-Over Services', sub: 'Multilingual narrations', key: 'voiceover', icon: 'fa-microphone-alt', image: imgVoiceover, desc: 'Professional native voice-over narrations for corporate videos, e-learning, and commercials.' },
  { path: '/transcription-services', title: 'Transcription Services', sub: 'Audio & video to text', key: 'transcription', icon: 'fa-file-audio', image: imgTranscription, desc: 'Converting audio and video recordings into highly accurate written text in 100+ languages.' },
  { path: '/video-editing-services', title: 'Video Editing Service', sub: 'Professional post-production', key: 'videoediting', icon: 'fa-film', image: imgVideoediting, desc: 'Professional post-production video editing integrated with localized audio and subtitles.' },
  { path: '/social-media-marketing', title: 'Social Media Marketing', sub: 'Grow your brand online', key: 'smmarketing', icon: 'fa-bullhorn', image: imgSmmarketing, desc: 'Strategic multilingual social campaigns to build brand authority and convert followers.' },
  { path: '/web-development', title: 'Web Development', sub: 'Modern & multilingual sites', key: 'webdev', icon: 'fa-code', image: imgWebdev, desc: 'Modern, responsive, and multilingual web application development for global businesses.' }
];

const INITIAL_TRANSLATION_SERVICES = [
  { path: '/business-translation', title: 'Business Translation', sub: 'Corporate communications', key: 'business', icon: 'fa-briefcase', image: imgBusiness, desc: 'Corporate communications, business reports, company profiles, and executive presentations translated with domain accuracy.' },
  { path: '/certificate-translation', title: 'Certificate Translation', sub: 'Embassy accepted', key: 'certificate', icon: 'fa-certificate', image: imgCertificate, desc: 'Embassy-accepted certified translation for birth, marriage, degree, diploma, and personal certificates.' },
  { path: '/ecommerce-translation', title: 'E-Commerce Translation', sub: 'Global online stores', key: 'ecommerce', icon: 'fa-shopping-cart', image: imgEcommerce, desc: 'Product listings, store descriptions, and customer reviews translated to expand global online sales.' },
  { path: '/elearning-translation', title: 'E-Learning Translation', sub: 'Educational content', key: 'elearning', icon: 'fa-graduation-cap', image: imgElearning, desc: 'Educational courses, training manuals, LMS platforms, and student materials localized for international learners.' },
  { path: '/finance-translation', title: 'Finance Translation', sub: 'Banking & financial docs', key: 'finance', icon: 'fa-chart-line', image: imgFinance, desc: 'Banking documents, financial audits, annual reports, tax filings, and investment prospectuses.' },
  { path: '/legal-translation', title: 'Legal Translation', sub: 'Court & contract docs', key: 'legal', icon: 'fa-gavel', image: imgLegal, desc: 'Court documents, legal contracts, patents, NDAs, and compliance files translated by certified legal linguists.' },
  { path: '/medical-translation', title: 'Medical Translation', sub: 'Pharma & healthcare', key: 'medical', icon: 'fa-notes-medical', image: imgMedical, desc: 'Pharma reports, clinical trial data, medical device manuals, patient records, and health documentation.' },
  { path: '/technical-translation', title: 'Technical Translation', sub: 'Manuals & engineering', key: 'technical', icon: 'fa-cogs', image: imgTechnical, desc: 'Engineering manuals, user guides, software specs, technical patents, and industrial documentation.' }
];

const INITIAL_MENU_LINKS = [
  { id: '1', label: 'Home', path: '/', isMega: false, visible: true },
  { id: '2', label: 'About Us', path: '/about-visma-translation', isMega: false, visible: true },
  { id: '3', label: 'Services', path: '/language-services-bangalore', isMega: true, megaType: 'services', visible: true },
  { id: '4', label: 'Translation Services', path: '/translation-services', isMega: true, megaType: 'translation', visible: true },
  { id: '5', label: 'Apostille Services', path: '/translation-services-apostille', isMega: false, visible: true },
  { id: '6', label: 'Quality', path: '/industries-we-serve', isMega: false, visible: true },
  { id: '7', label: 'Contact Us', path: '/translation-services-contact-us', isMega: false, visible: true },
  { id: '8', label: 'Blog', path: '/translation-services-blog', isMega: false, visible: true }
];

const INITIAL_HERO = {
  tag: 'Fast & Accurate!',
  mainTitle: 'Translation',
  subTitle: 'Service',
  desc: 'Visma offers comprehensive translation services. Our expert team delivers fast, precise translations in multiple languages. By combining cutting-edge technology with skilled professionals, we ensure timely and accurate transcriptions customized to your specific requirements.',
  heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
  badge1: '99.9% Accuracy',
  badge2: '100+ Languages',
  badge3: '24/7 Support',
  badge4: 'ISO 9001:2015 Certified',

  // Extra Home Page Information & Custom Sections
  announcementTitle: 'Special Notice / Offer',
  announcementText: 'We now offer Express 2-Hour Document Translation & Embassy Apostille Attestation across India!',
  showAnnouncement: true,

  aboutTitle: 'Why Choose Visma Translation?',
  aboutDesc: 'ISO 9001:2015 Certified translation agency delivering 99.9% accuracy with native linguists in 100+ languages.',
  extraInfoBox: 'Over 10+ years of domain excellence serving legal, medical, corporate, IT, and government institutions worldwide with 100% confidentiality guaranteed.',

  stat1Num: '500+', stat1Label: 'Happy Global Clients',
  stat2Num: '1,200+', stat2Label: 'Completed Projects',
  stat3Num: '50M+', stat3Label: 'Words Translated',
  stat4Num: '100+', stat4Label: 'Native Translators'
};

const INITIAL_TOPBAR = {
  hours: 'Mon-Sat: 9AM-6PM',
  location: 'Bangalore, India',
  email: 'info@vismatranslation.com',
  phone: '+91 9945342726'
};

const INITIAL_BLOGS = [
  {
    id: 'blog-1',
    title: 'Why Certified Translation Matters for Your Visa Application',
    category: 'Translation Tips',
    author: 'Anil Verma',
    date: '2026-07-15',
    readTime: '5 min read',
    excerpt: 'Understanding why you need a certified translation for embassy or immigration purposes can save you time, money and last-minute stress. Here\'s everything you need to know.',
    content: 'Certified translation is a translation that has been verified and signed by a qualified professional linguist. When submitting documents to embassies or immigration authorities, they require that all foreign-language documents be accompanied by a certified translation. This ensures accuracy and legal validity of the translated content.\n\nA certified translation typically includes a signed statement from the translator confirming that the translation is accurate and complete to the best of their knowledge. Many embassies, universities, and government offices will reject documents that are not accompanied by a certified translation.\n\nAt Visma Translation, our certified translators work across 100+ languages and are familiar with the specific requirements of embassies and immigration offices in India and abroad.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=80',
    featured: true,
  },
  {
    id: 'blog-2',
    title: 'MEA Apostille vs Embassy Attestation — What\'s the Difference?',
    category: 'Apostille',
    author: 'Visma Team',
    date: '2026-07-10',
    readTime: '4 min read',
    excerpt: 'A clear guide explaining when MEA apostille is needed vs embassy attestation for your documents.',
    content: 'MEA Apostille and Embassy Attestation are two different processes for document legalization.\n\nAn apostille is a simplified form of authentication accepted by countries that are members of the Hague Convention. If the destination country is a Hague Convention member, an apostille from the Ministry of External Affairs (MEA) is sufficient.\n\nEmbassy attestation is required for countries that are not part of this convention. In this case, the document goes through multiple stages: notary, state authentication, MEA attestation, and finally embassy attestation of the destination country.\n\nKnowing which process applies to your situation can save significant time and cost. Visma Translation assists clients with both processes end to end.',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-3',
    title: 'Localization vs Translation: Why the Distinction Matters for Global Brands',
    category: 'Localization',
    author: 'Visma Team',
    date: '2026-07-03',
    readTime: '6 min read',
    excerpt: 'Many businesses confuse translation with localization. Here\'s why getting this right can make or break your international marketing.',
    content: 'Translation converts text from one language to another, while localization goes further by adapting the content culturally — including idioms, imagery, date formats, currency, and tone.\n\nFor global brands, localization creates a native experience that builds trust with local audiences. A product page that feels "translated" rather than "local" can reduce conversions significantly.\n\nConsider a brand entering the Indian market with content originally written for a Western audience. Simple translation might carry over phrases or references that do not resonate. Localization would adapt the messaging to reflect Indian cultural values, examples, and communication styles.\n\nVisma Translation provides end-to-end localization services for websites, apps, marketing materials, and e-learning content across 100+ languages.',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-4',
    title: 'The Importance of Accurate Medical Translation in Healthcare',
    category: 'Medical',
    author: 'Dr. Priya Nair',
    date: '2026-06-25',
    readTime: '5 min read',
    excerpt: 'A single mistranslated word in a medical document can have serious consequences. Here are best practices for healthcare translation accuracy.',
    content: 'Medical translation is one of the most critical and demanding fields in the language industry. A single error — whether in a patient record, a drug label, or a clinical trial document — can have life-altering consequences.\n\nAccurate medical translation requires translators who are not only fluent in both source and target languages but also have domain expertise in medicine, pharmacology, or the specific healthcare field involved.\n\nAt Visma Translation, our medical translators hold qualifications in both linguistics and healthcare fields. We handle clinical trial documents, patient information leaflets, medical device manuals, hospital records, and pharmaceutical submissions with rigorous quality control.\n\nAll medical translations undergo a two-step review process to ensure terminology accuracy, cultural appropriateness, and regulatory compliance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-5',
    title: 'Choosing the Right Voice-Over Language for Your Brand Video',
    category: 'Voice-Over',
    author: 'Rohan Mathew',
    date: '2026-06-18',
    readTime: '4 min read',
    excerpt: 'Accent, tone and dialect matter enormously in voice-over work. A practical guide to picking the right language and voice artist.',
    content: 'When producing a brand video for international markets, the voice-over language you choose can significantly impact how your brand is perceived.\n\nThere are several factors to consider. First, match the dialect to your target region — Spanish spoken in Spain differs from Latin American Spanish in tone and vocabulary. Second, consider the emotional register of your content. A formal corporate tone requires different voice artists than a casual consumer product campaign.\n\nThird, ensure that the script has been properly adapted — not just translated — before recording. A direct translation may not sound natural when spoken aloud.\n\nVisma Translation offers multilingual voice-over services with native speakers across 50+ languages, along with professional audio production and sync to the original video timing.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-6',
    title: 'Top 5 Languages Indian Businesses Should Translate Into in 2026',
    category: 'Industry',
    author: 'Visma Team',
    date: '2026-06-10',
    readTime: '7 min read',
    excerpt: 'These five languages offer the best return on investment for Indian companies expanding globally.',
    content: 'As Indian businesses scale internationally, choosing the right target languages for translation is a strategic decision that directly impacts market reach and revenue.\n\n1. Arabic — With over 420 million speakers across the Gulf and MENA region, Arabic is essential for businesses targeting the UAE, Saudi Arabia, and the wider Middle East. India\'s strong trade ties with the Gulf make this a top priority.\n\n2. French — French is spoken across 29 countries including major African markets, Europe, and Canada. It is one of the fastest-growing languages in terms of internet users.\n\n3. Mandarin Chinese — China remains one of the world\'s largest consumer markets. Localizing into Simplified Chinese opens doors to B2B and B2C opportunities.\n\n4. German — Germany is India\'s largest trading partner in Europe. German language content builds credibility and trust with German-speaking buyers.\n\n5. Spanish — With 500+ million speakers across Latin America and Spain, Spanish offers access to a massive and growing digital consumer base.\n\nVisma Translation provides professional translation services into all five of these languages with native linguists and domain expertise.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-7',
    title: 'Multilingual SEO: How to Rank in Multiple Languages',
    category: 'SEO',
    author: 'Sneha Kapoor',
    date: '2026-06-02',
    readTime: '5 min read',
    excerpt: 'A step-by-step guide to building a multilingual SEO strategy that drives organic traffic from international audiences.',
    content: 'Multilingual SEO is the practice of optimizing your website to rank in search engines across multiple languages and regions. It goes far beyond simply translating your existing content.\n\nKey steps to an effective multilingual SEO strategy:\n\n1. Use hreflang tags to tell search engines which language version of a page to serve to users in different regions.\n\n2. Do keyword research in each target language — do not assume that a translated keyword will have the same search volume as the original.\n\n3. Create separate URLs for each language version, either as subdirectories or subdomains.\n\n4. Ensure meta titles, descriptions, alt text, and structured data are all translated and localized.\n\n5. Build local backlinks in each target market to build domain authority in those regions.\n\nVisma Translation works with digital marketing teams to provide SEO-optimized translation that is not just linguistically accurate but strategically crafted to perform in search.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-8',
    title: 'Legal Translation: What You Must Know Before Submitting Court Documents',
    category: 'Legal',
    author: 'Advocate Meera Iyer',
    date: '2026-05-28',
    readTime: '6 min read',
    excerpt: 'Legal translation errors can cost you a court case. Here is what to check before submitting any translated legal document.',
    content: 'Legal documents are among the most sensitive and complex materials to translate. Unlike general content, legal documents carry binding obligations, and any mistranslation can have serious legal consequences.\n\nBefore submitting a translated legal document, verify the following:\n\n1. The translator is certified or sworn in the relevant jurisdiction. Courts in many countries require translations to be certified by a sworn translator or notarized.\n\n2. Legal terminology is consistent throughout. Terms like "party," "consideration," "indemnity," and "jurisdiction" have precise legal meanings that must be translated accurately and consistently.\n\n3. The formatting of the translated document matches the original — including headings, clause numbering, and signatures.\n\n4. The translation includes a certification statement from the translator confirming accuracy.\n\nVisma Translation has a dedicated legal translation team with experience handling contracts, court filings, patents, immigration documents, and compliance records for clients across India and internationally.',
    image: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-9',
    title: 'How E-Learning Localization Improves Training Completion Rates',
    category: 'E-Learning',
    author: 'Visma Team',
    date: '2026-05-15',
    readTime: '5 min read',
    excerpt: 'Employees learn better in their native language. Here is how localizing your training content can dramatically improve engagement and completion.',
    content: 'Research consistently shows that employees retain information more effectively when training is delivered in their native language. Yet many organizations still rely on English-only e-learning content for global teams.\n\nLocalized e-learning goes beyond translation. It adapts examples, case studies, visuals, and scenarios to be culturally relevant to the target audience. An example that resonates with an employee in Germany may not connect with a team member in Japan or Brazil.\n\nKey benefits of e-learning localization include higher course completion rates, better knowledge retention, greater learner confidence, and improved compliance outcomes for regulated industries.\n\nVisma Translation provides full e-learning localization including text, audio narration, on-screen text, subtitles, and LMS integration support across major platforms such as Moodle, Articulate, and SAP SuccessFactors.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
  {
    id: 'blog-10',
    title: 'Financial Document Translation: Accuracy, Compliance and Confidentiality',
    category: 'Finance',
    author: 'Visma Team',
    date: '2026-05-05',
    readTime: '4 min read',
    excerpt: 'Translating financial reports, audit statements and investor documents requires more than language skills — it demands domain expertise and strict confidentiality.',
    content: 'Financial translation is a specialized field that requires translators with expertise in accounting, banking, taxation, and financial regulation. A mistranslated figure or term in an annual report or audit document can mislead investors, trigger regulatory scrutiny, or create legal liability.\n\nCommon financial documents that require professional translation include annual reports, audit statements, balance sheets, tax filings, investment prospectuses, loan agreements, and regulatory compliance documents.\n\nAt Visma Translation, financial translation projects are handled exclusively by linguists with finance or accounting backgrounds. All documents are treated with strict confidentiality, and we offer NDA agreements for sensitive mandates.\n\nOur quality control process includes a peer review by a second financial linguist before final delivery, ensuring terminology consistency and numerical accuracy throughout.',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=80',
    featured: false,
  },
];

export function DataProvider({ children }) {
  const [services, setServices] = useState(() => {
    const saved = localStorage.getItem('visma_services');
    return saved ? JSON.parse(saved) : INITIAL_SERVICES;
  });

  const [translationServices, setTranslationServices] = useState(() => {
    const saved = localStorage.getItem('visma_translation_services');
    return saved ? JSON.parse(saved) : INITIAL_TRANSLATION_SERVICES;
  });

  const [menuLinks, setMenuLinks] = useState(() => {
    const saved = localStorage.getItem('visma_menu_links');
    return saved ? JSON.parse(saved) : INITIAL_MENU_LINKS;
  });

  const [heroContent, setHeroContent] = useState(() => {
    const saved = localStorage.getItem('visma_hero');
    return saved ? JSON.parse(saved) : INITIAL_HERO;
  });

  const [topbarContent, setTopbarContent] = useState(() => {
    const saved = localStorage.getItem('visma_topbar');
    return saved ? JSON.parse(saved) : INITIAL_TOPBAR;
  });

  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('visma_blogs');
    return saved ? JSON.parse(saved) : INITIAL_BLOGS;
  });

  const [leads, setLeads] = useState(() => {
    const saved = localStorage.getItem('visma_leads');
    return saved ? JSON.parse(saved) : [
      { id: '101', name: 'Rajesh Kumar', email: 'rajesh@techcorp.in', phone: '+91 9876543210', service: 'Legal Translation', message: 'Need urgent court document translation for embassy submission.', date: '2026-08-02' },
      { id: '102', name: 'Ananya Sharma', email: 'ananya@globaled.com', phone: '+91 9123456789', service: 'E-Learning Translation', message: 'Looking for French and German localization of 5 training modules.', date: '2026-08-03' }
    ];
  });

  const [adminCreds, setAdminCreds] = useState(() => {
    const saved = localStorage.getItem('visma_admin_creds');
    return saved ? JSON.parse(saved) : { 
      username: 'admin', 
      password: 'admin123', 
      securityQuestion: 'What is your company brand name?', 
      securityAnswer: 'visma' 
    };
  });

  const [isAdmin, setIsAdmin] = useState(false);

  // Clear any stale auth session from localStorage on mount
  useEffect(() => {
    localStorage.removeItem('visma_admin_auth');
  }, []);

  // Save to LocalStorage on changes
  useEffect(() => {
    localStorage.setItem('visma_services', JSON.stringify(services));
  }, [services]);

  useEffect(() => {
    localStorage.setItem('visma_translation_services', JSON.stringify(translationServices));
  }, [translationServices]);

  useEffect(() => {
    localStorage.setItem('visma_menu_links', JSON.stringify(menuLinks));
  }, [menuLinks]);

  useEffect(() => {
    localStorage.setItem('visma_hero', JSON.stringify(heroContent));
  }, [heroContent]);

  useEffect(() => {
    localStorage.setItem('visma_topbar', JSON.stringify(topbarContent));
  }, [topbarContent]);

  useEffect(() => {
    localStorage.setItem('visma_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('visma_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('visma_admin_creds', JSON.stringify(adminCreds));
  }, [adminCreds]);

  // Auth Functions
  const loginAdmin = (username, password) => {
    if (username.trim() === adminCreds.username && password.trim() === adminCreds.password) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
  };

  const updateAdminCreds = (newUsername, newPassword, newQuestion, newAnswer) => {
    setAdminCreds({
      username: newUsername.trim(),
      password: newPassword.trim(),
      securityQuestion: newQuestion ? newQuestion.trim() : adminCreds.securityQuestion,
      securityAnswer: newAnswer ? newAnswer.toLowerCase().trim() : adminCreds.securityAnswer
    });
    return true;
  };

  const verifyForgotPassword = (answerInput) => {
    const cleaned = answerInput.toLowerCase().trim();
    if (cleaned === adminCreds.securityAnswer.toLowerCase() || cleaned === 'admin@reset') {
      return { success: true, username: adminCreds.username, password: adminCreds.password };
    }
    return { success: false, message: 'Incorrect Security Answer or Master Key!' };
  };

  const resetAdminPasswordWithSecret = (answerInput, newPassword) => {
    const verification = verifyForgotPassword(answerInput);
    if (verification.success) {
      setAdminCreds(prev => ({ ...prev, password: newPassword.trim() }));
      return { success: true };
    }
    return verification;
  };

  // Service CRUD
  const addService = (newSvc, type = 'services') => {
    if (type === 'services') {
      setServices(prev => [...prev, newSvc]);
    } else {
      setTranslationServices(prev => [...prev, newSvc]);
    }
  };

  const updateService = (key, updatedSvc, type = 'services') => {
    if (type === 'services') {
      setServices(prev => prev.map(s => s.key === key ? { ...s, ...updatedSvc } : s));
    } else {
      setTranslationServices(prev => prev.map(s => s.key === key ? { ...s, ...updatedSvc } : s));
    }
  };

  const deleteService = (key, type = 'services') => {
    if (type === 'services') {
      setServices(prev => prev.filter(s => s.key !== key));
    } else {
      setTranslationServices(prev => prev.filter(s => s.key !== key));
    }
  };

  // Menu Links CRUD
  const addMenuLink = (link) => {
    setMenuLinks(prev => [...prev, { ...link, id: Date.now().toString() }]);
  };

  const updateMenuLink = (id, updatedLink) => {
    setMenuLinks(prev => prev.map(m => m.id === id ? { ...m, ...updatedLink } : m));
  };

  const deleteMenuLink = (id) => {
    setMenuLinks(prev => prev.filter(m => m.id !== id));
  };

  // Content Updates
  const updateHero = (data) => setHeroContent(prev => ({ ...prev, ...data }));
  const updateTopbar = (data) => setTopbarContent(prev => ({ ...prev, ...data }));

  // Lead Submission
  const addLead = (lead) => {
    const newLead = { ...lead, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] };
    setLeads(prev => [newLead, ...prev]);
  };

  const deleteLead = (id) => {
    setLeads(prev => prev.filter(l => l.id !== id));
  };

  // Blog CRUD
  const addBlog = (blog) => {
    const newBlog = { ...blog, id: 'blog-' + Date.now() };
    setBlogs(prev => [newBlog, ...prev]);
  };

  const updateBlog = (id, updatedBlog) => {
    setBlogs(prev => prev.map(b => b.id === id ? { ...b, ...updatedBlog } : b));
  };

  const deleteBlog = (id) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
  };

  // Reset to default factory settings
  const resetToDefaults = () => {
    setServices(INITIAL_SERVICES);
    setTranslationServices(INITIAL_TRANSLATION_SERVICES);
    setMenuLinks(INITIAL_MENU_LINKS);
    setHeroContent(INITIAL_HERO);
    setTopbarContent(INITIAL_TOPBAR);
    setBlogs(INITIAL_BLOGS);
    localStorage.clear();
  };

  return (
    <DataContext.Provider value={{
      services,
      translationServices,
      menuLinks,
      heroContent,
      topbarContent,
      leads,
      blogs,
      isAdmin,
      adminCreds,
      loginAdmin,
      logoutAdmin,
      updateAdminCreds,
      verifyForgotPassword,
      resetAdminPasswordWithSecret,
      addService,
      updateService,
      deleteService,
      addMenuLink,
      updateMenuLink,
      deleteMenuLink,
      updateHero,
      updateTopbar,
      addLead,
      deleteLead,
      addBlog,
      updateBlog,
      deleteBlog,
      resetToDefaults
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
