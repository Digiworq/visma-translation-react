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
  { path: '/localization', title: 'Localization Service', sub: 'Cultural adaptation', key: 'localization', icon: 'fa-globe-americas', image: imgLocalization, desc: 'Cultural adaptation of software, websites, and mobile applications for international audiences.' },
  { path: '/seo-content', title: 'SEO Content Writing', sub: 'Rank higher online', key: 'seo', icon: 'fa-pen-nib', image: imgSeo, desc: 'Search engine optimized content in multiple languages to drive organic traffic and boost conversions.' },
  { path: '/social-media', title: 'Social Media Content', sub: 'Crafted for every platform', key: 'social', icon: 'fa-share-alt', image: imgSocial, desc: 'Culturally resonant social media posts, graphics, and campaigns for global audience engagement.' },
  { path: '/subtitling', title: 'Sub-Titling Services', sub: 'Movies, TV, YouTube', key: 'subtitling', icon: 'fa-closed-captioning', image: imgSubtitling, desc: 'Accurate multilingual subtitles and closed captions for movies, TV shows, and YouTube videos.' },
  { path: '/dtp', title: 'Desktop Publishing', sub: 'Multilingual DTP', key: 'dtp', icon: 'fa-desktop', image: imgDtp, desc: 'Multilingual layout formatting for brochures, manuals, catalogs, and marketing collateral.' },
  { path: '/voiceover', title: 'Voice-Over Services', sub: 'Multilingual narrations', key: 'voiceover', icon: 'fa-microphone-alt', image: imgVoiceover, desc: 'Professional native voice-over narrations for corporate videos, e-learning, and commercials.' },
  { path: '/transcription', title: 'Transcription Services', sub: 'Audio & video to text', key: 'transcription', icon: 'fa-file-audio', image: imgTranscription, desc: 'Converting audio and video recordings into highly accurate written text in 100+ languages.' },
  { path: '/video-editing', title: 'Video Editing Service', sub: 'Professional post-production', key: 'videoediting', icon: 'fa-film', image: imgVideoediting, desc: 'Professional post-production video editing integrated with localized audio and subtitles.' },
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
  { id: '2', label: 'About Us', path: '/about', isMega: false, visible: true },
  { id: '3', label: 'Services', path: '/services', isMega: true, megaType: 'services', visible: true },
  { id: '4', label: 'Translation Services', path: '/translation-services', isMega: true, megaType: 'translation', visible: true },
  { id: '5', label: 'Apostille Services', path: '/apostille', isMega: false, visible: true },
  { id: '6', label: 'Quality', path: '/quality', isMega: false, visible: true },
  { id: '7', label: 'Contact Us', path: '/contact', isMega: false, visible: true },
  { id: '8', label: 'Blog', path: '/blog', isMega: false, visible: true }
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

  const [leads, setLeads] = useState(() => {
    const saved = localStorage.getItem('visma_leads');
    return saved ? JSON.parse(saved) : [
      { id: '101', name: 'Rajesh Kumar', email: 'rajesh@techcorp.in', phone: '+91 9876543210', service: 'Legal Translation', message: 'Need urgent court document translation for embassy submission.', date: '2026-08-02' },
      { id: '102', name: 'Ananya Sharma', email: 'ananya@globaled.com', phone: '+91 9123456789', service: 'E-Learning Translation', message: 'Looking for French and German localization of 5 training modules.', date: '2026-08-03' }
    ];
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('visma_admin_auth') === 'true';
  });

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
    localStorage.setItem('visma_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('visma_admin_auth', isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  // Auth Functions
  const loginAdmin = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
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

  // Reset to default factory settings
  const resetToDefaults = () => {
    setServices(INITIAL_SERVICES);
    setTranslationServices(INITIAL_TRANSLATION_SERVICES);
    setMenuLinks(INITIAL_MENU_LINKS);
    setHeroContent(INITIAL_HERO);
    setTopbarContent(INITIAL_TOPBAR);
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
      isAdmin,
      loginAdmin,
      logoutAdmin,
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
      resetToDefaults
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
