import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import ServiceSidebar from '../components/ServiceSidebar';
import { useData } from '../context/DataContext';

const SERVICE_DATABASE = {
  '/localization': {
    title: 'Localization Service',
    headingMain: 'Localization',
    headingSub: 'Beyond Translation',
    tag: 'Localization',
    tagIcon: 'fa-globe-americas',
    heroBg: 'bg-localization',
    heroImg: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=800&auto=format&fit=crop&q=80',
    desc: 'We adapt your content to fit the cultural context, idioms and local preferences of your target audience — ensuring your message resonates authentically across every global market.',
    badge1: '50+ Markets',
    badge2: 'ISO Certified',
    stag: 'What We Localise',
    secTitle: 'Our Localization Services',
    secDesc: 'Cultural adaptation for every content type and every market.',
    cards: [
      { icon: 'fa-globe', title: 'Website Localisation', desc: 'Full UI/UX and content adaptation for websites — menus, buttons, date formats, currencies and cultural imagery all adjusted for your target region.' },
      { icon: 'fa-shopping-bag', title: 'E-Commerce Localisation', desc: 'Product listings, checkout flows, payment methods and marketing copy localised for global online retail stores.' },
      { icon: 'fa-film', title: 'Multimedia Localisation', desc: 'Videos, eLearning modules, apps and multimedia content adapted with cultural sensitivity for regional audiences.' },
      { icon: 'fa-bullhorn', title: 'Marketing Localisation', desc: 'Campaigns, slogans and brand messaging adapted to connect authentically — not just translated, but culturally reimagined.' },
      { icon: 'fa-mobile-alt', title: 'App Localisation', desc: 'Mobile and desktop app localisation including UI strings, push notifications, in-app purchases and store listings.' },
      { icon: 'fa-file-alt', title: 'Document Localisation', desc: 'Legal, HR and corporate documents localised with full cultural and regulatory compliance for the target market.' }
    ]
  },
  '/seo-content-writing-services': {
    title: 'SEO Content Writing Service',
    headingMain: 'SEO Content',
    headingSub: 'Writing That Ranks',
    tag: 'SEO Writing',
    tagIcon: 'fa-search',
    heroBg: 'bg-seo',
    heroImg: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=80',
    desc: 'Our proficient team creates high-quality, search engine optimized content in 100+ languages to boost your search rankings and drive organic traffic.',
    badge1: '#1 Ranking SEO',
    badge2: '100+ Languages',
    stag: 'Our Expertise',
    secTitle: 'SEO Content Services',
    secDesc: 'Strategic content writing that satisfies search engines and converts users.',
    cards: [
      { icon: 'fa-key', title: 'Keyword Research', desc: 'In-depth multilingual keyword analysis to target high-intent search queries across global markets.' },
      { icon: 'fa-blog', title: 'Blog & Article Writing', desc: 'Engaging, authoritative blog posts written by native writers to establish brand authority and drive traffic.' },
      { icon: 'fa-code', title: 'On-Page Meta Writing', desc: 'Optimized meta titles, descriptions, and header tags crafted to maximize click-through rates on search results.' },
      { icon: 'fa-file-code', title: 'Technical Copywriting', desc: 'In-depth whitepapers, case studies, and technical articles optimized for both search bots and human readers.' },
      { icon: 'fa-shopping-cart', title: 'Product Descriptions', desc: 'SEO-friendly e-commerce product copy that ranks on search engines and drives sales conversions.' },
      { icon: 'fa-sync-alt', title: 'Content Optimization', desc: 'Refreshing existing website content to improve rankings, keyword density, and user engagement.' }
    ]
  },
  '/social-media-content-services': {
    title: 'Social Media Content Creation',
    headingMain: 'Social Media',
    headingSub: 'Content & Copy',
    tag: 'Social Media',
    tagIcon: 'fa-hashtag',
    heroBg: 'bg-social',
    heroImg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80',
    desc: 'Engaging multilingual content creation crafted specifically for Instagram, LinkedIn, Facebook, and Twitter to captivate your global audience.',
    badge1: 'Viral Reach',
    badge2: 'Multilingual',
    stag: 'Social Strategy',
    secTitle: 'Social Media Services',
    secDesc: 'Platform-optimized content tailored for maximum engagement.',
    cards: [
      { icon: 'fa-pen', title: 'Post Copywriting', desc: 'Captivating short-form and long-form copy crafted in multiple languages to drive comments, shares, and likes.' },
      { icon: 'fa-palette', title: 'Graphic & Banner Design', desc: 'Visually compelling graphics and branded post templates customized for each social media platform.' },
      { icon: 'fa-calendar-alt', title: 'Content Calendars', desc: 'Strategic monthly content planning aligned with global holidays, trending topics, and campaign goals.' },
      { icon: 'fa-video', title: 'Reels & Shorts Scripts', desc: 'High-converting scripts and concepts for TikTok, Instagram Reels, and YouTube Shorts.' },
      { icon: 'fa-comments', title: 'Community Engagement', desc: 'Multilingual response templates and community management to foster loyal online follower relationships.' },
      { icon: 'fa-chart-line', title: 'Performance Insights', desc: 'Data-driven analytics reports monitoring reach, click-through rates, and follower growth.' }
    ]
  },
  '/subtitling': {
    title: 'Sub-Titling Services',
    headingMain: 'Multilingual',
    headingSub: 'Subtitling Services',
    tag: 'Subtitling',
    tagIcon: 'fa-closed-captioning',
    heroBg: 'bg-subtitling',
    heroImg: 'https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800&auto=format&fit=crop&q=80',
    desc: 'Precise time-synced subtitles and closed captioning in 100+ languages for films, TV programs, YouTube videos, corporate ads, and online courses.',
    badge1: 'Precise Sync',
    badge2: 'SRT / VTT / DFXP',
    stag: 'Video Captions',
    secTitle: 'Subtitling Solutions',
    secDesc: 'Professional subtitling services built for broadcast and digital streaming.',
    cards: [
      { icon: 'fa-film', title: 'Film & TV Subtitling', desc: 'Frame-accurate subtitle timing with character limit constraints and cultural nuance preservation.' },
      { icon: 'fa-youtube', title: 'YouTube & Social Video', desc: 'SRT file generation and burned-in captions for YouTube, Reels, and marketing video clips.' },
      { icon: 'fa-universal-access', title: 'Closed Captioning (CC)', desc: 'Accessibility captions specifying audio cues, sound effects, and speaker identification.' },
      { icon: 'fa-graduation-cap', title: 'eLearning Video Subtitles', desc: 'Clear educational subtitles making online courses accessible to global non-native students.' },
      { icon: 'fa-building', title: 'Corporate Video Captions', desc: 'Professional subtitles for internal training videos, webinars, and annual shareholder presentations.' },
      { icon: 'fa-file-export', title: 'Multi-Format Export', desc: 'Delivery in SRT, VTT, SUB, ASS, DFXP, or hardcoded burned-in video formats.' }
    ]
  },
  '/desktop-publishing-services': {
    title: 'Desktop Publishing Service',
    headingMain: 'Desktop Publishing',
    headingSub: 'DTP & Layout Design',
    tag: 'DTP & Design',
    tagIcon: 'fa-desktop',
    heroBg: 'bg-dtp',
    heroImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80',
    desc: 'Expert multilingual layout formatting, brochure design, and typesetting ensuring your translated documents look identical to the original artwork.',
    badge1: 'InDesign / Illustrator',
    badge2: 'RTL Support',
    stag: 'Layout Excellence',
    secTitle: 'Our DTP Services',
    secDesc: 'Flawless document formatting across all graphic design applications.',
    cards: [
      { icon: 'fa-book-open', title: 'Brochure & Catalog Layout', desc: 'Precision typesetting for multi-page commercial catalogs, corporate brochures, and flyers.' },
      { icon: 'fa-align-right', title: 'RTL Layout Formatting', desc: 'Expert right-to-left layout adjustments for Arabic, Hebrew, and Persian scripts.' },
      { icon: 'fa-file-pdf', title: 'Print-Ready PDF Output', desc: 'High-resolution PDF generation complete with bleed marks, vector fonts, and color profiles.' },
      { icon: 'fa-vector-square', title: 'Logo & Graphic Localization', desc: 'Redrawing and translating graphic text inside vector diagrams, schematics, and logos.' },
      { icon: 'fa-laptop-code', title: 'User Manual Typesetting', desc: 'Complex technical manual formatting retaining original pagination, tables, and callouts.' },
      { icon: 'fa-swatchbook', title: 'Font & Style Matching', desc: 'Custom font selection to match branding guidelines in foreign character sets.' }
    ]
  },
  '/voice-over-services': {
    title: 'Voice-Over Services',
    headingMain: 'Voice-Over',
    headingSub: 'Multilingual Narrations',
    tag: 'Voice-Over',
    tagIcon: 'fa-microphone-alt',
    heroBg: 'bg-voiceover',
    heroImg: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&auto=format&fit=crop&q=80',
    desc: 'Professional studio voice-over narrations featuring native voice talent across 50+ languages for commercials, corporate videos, e-learning, and audiobooks.',
    badge1: 'Native Artists',
    badge2: 'Studio Audio',
    stag: 'Audio Excellence',
    secTitle: 'Voice-Over Solutions',
    secDesc: 'Crystal clear voice recordings with perfect tone, accent, and pacing.',
    cards: [
      { icon: 'fa-microphone', title: 'Commercial Voice-Over', desc: 'Persuasive, high-energy voice narrations for television ads, radio spots, and social campaigns.' },
      { icon: 'fa-chalkboard-teacher', title: 'eLearning & Training', desc: 'Clear, articulate instructional voices for corporate onboarding and educational courses.' },
      { icon: 'fa-building', title: 'Corporate Video Narration', desc: 'Professional executive voice-overs for brand videos, company overviews, and annual reports.' },
      { icon: 'fa-book-reader', title: 'Audiobook Narration', desc: 'Engaging storytelling and character voices for fiction and non-fiction audiobooks.' },
      { icon: 'fa-phone-volume', title: 'IVR & Telephony System', desc: 'Polished automated phone system prompts, voicemail greetings, and interactive call routing.' },
      { icon: 'fa-sliders-h', title: 'Audio Post-Production', desc: 'Studio mixing, background noise removal, audio syncing, and mastering to broadcast standards.' }
    ]
  },
  '/transcription': {
    title: 'Transcription Services',
    headingMain: 'Transcription',
    headingSub: 'Audio & Video to Text',
    tag: 'Transcription',
    tagIcon: 'fa-file-audio',
    heroBg: 'bg-transcription',
    heroImg: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&auto=format&fit=crop&q=80',
    desc: 'Accurate audio and video transcriptions into text by experienced human linguists trained in legal, medical, corporate, and academic terminology.',
    badge1: '99%+ Accuracy',
    badge2: 'Human Transcribers',
    stag: 'Speech to Text',
    secTitle: 'Transcription Solutions',
    secDesc: 'Verbatim and clean transcripts formatted to your exact specifications.',
    cards: [
      { icon: 'fa-gavel', title: 'Legal Transcription', desc: 'Transcripts of court proceedings, depositions, witness interviews, and arbitration hearings.' },
      { icon: 'fa-stethoscope', title: 'Medical Transcription', desc: 'Accurate transcription of doctor dictations, clinical notes, patient histories, and medical research.' },
      { icon: 'fa-briefcase', title: 'Corporate Meeting Notes', desc: 'Transcribing board meetings, earnings calls, quarterly reviews, and strategic workshops.' },
      { icon: 'fa-user-ninja', title: 'Interview & Research', desc: 'Detailed academic research interviews, focus group recordings, and investigative journalism.' },
      { icon: 'fa-clock', title: 'Time-Stamped Transcripts', desc: 'Precise timestamping at regular intervals for easy video editing and reference lookup.' },
      { icon: 'fa-language', title: 'Foreign Language Transcribe', desc: 'Direct transcription and simultaneous translation of non-English audio files.' }
    ]
  },
  '/video-editing': {
    title: 'Video Editing Service',
    headingMain: 'Video Editing',
    headingSub: 'Professional Post-Production',
    tag: 'Video Editing',
    tagIcon: 'fa-film',
    heroBg: 'bg-video-edit',
    heroImg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=80',
    desc: 'End-to-end video post-production editing, color grading, sound mixing, and seamless integration of localized audio tracks and subtitles.',
    badge1: 'Pro 4K Editing',
    badge2: 'Multilingual Sync',
    stag: 'Post-Production',
    secTitle: 'Video Editing Services',
    secDesc: 'Transform raw footage into polished, professional global videos.',
    cards: [
      { icon: 'fa-video', title: 'Corporate Video Editing', desc: 'Polishing promotional videos, customer testimonials, product showcases, and event highlights.' },
      { icon: 'fa-magic', title: 'Color Grading & Effects', desc: 'Cinematic color correction, visual effects, motion graphics, and transition overlays.' },
      { icon: 'fa-volume-up', title: 'Audio & Music Syncing', desc: 'Multi-track audio editing, background music scoring, and localized voice-over alignment.' },
      { icon: 'fa-closed-captioning', title: 'Subtitle Integration', desc: 'Burning open captions directly into video render files for mobile social media viewing.' },
      { icon: 'fa-cut', title: 'Social Clip Trimming', desc: 'Re-framing and cutting long-form videos into high-converting 9:16 vertical shorts and reels.' },
      { icon: 'fa-file-video', title: 'Multi-Format Export', desc: 'High-bitrate video rendering optimized for YouTube, broadcast TV, web, or social platforms.' }
    ]
  },
  '/social-media-marketing': {
    title: 'Social Media Marketing Service',
    headingMain: 'Social Media Marketing',
    headingSub: 'Grow Your Brand Online',
    tag: 'Social Marketing',
    tagIcon: 'fa-bullhorn',
    heroBg: 'bg-social',
    heroImg: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80',
    desc: 'Strategic multilingual social media marketing campaigns across Instagram, LinkedIn, Facebook, and Twitter to build brand authority and convert followers into global customers.',
    badge1: 'Viral Campaigns',
    badge2: 'ROI Focused',
    stag: 'Marketing Services',
    secTitle: 'Social Marketing Solutions',
    secDesc: 'Comprehensive digital social media management for modern businesses.',
    cards: [
      { icon: 'fa-bullhorn', title: 'Ad Campaign Management', desc: 'Targeted multilingual paid ad campaigns optimized for Facebook, Instagram, LinkedIn, and YouTube.' },
      { icon: 'fa-users', title: 'Audience Growth Strategy', desc: 'Organic growth strategies tailored to increase follower engagement and brand reach worldwide.' },
      { icon: 'fa-paint-brush', title: 'Brand Creative Design', desc: 'Eye-catching carousel graphics, story templates, and promotional video clips created by expert designers.' },
      { icon: 'fa-comments', title: 'Community & Comment Moderation', desc: 'Real-time multilingual engagement, responding to DMs and comments to maintain strong customer relations.' },
      { icon: 'fa-chart-pie', title: 'Analytics & ROI Reports', desc: 'Detailed monthly performance reports tracking impressions, click-throughs, conversions, and ad spend ROI.' },
      { icon: 'fa-hashtag', title: 'Influencer Marketing', desc: 'Connecting your brand with relevant regional influencers to expand market reach in target countries.' }
    ]
  },
  '/web-development': {
    title: 'Web Development Service',
    headingMain: 'Web Development',
    headingSub: 'Modern & Multilingual Sites',
    tag: 'Web Development',
    tagIcon: 'fa-code',
    heroBg: 'bg-technical',
    heroImg: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    desc: 'Custom, fast, and responsive web development tailored for global businesses. We build SEO-optimized, multilingual websites, web apps, and e-commerce platforms.',
    badge1: 'Responsive & Fast',
    badge2: 'Multilingual Ready',
    stag: 'Engineering & Web',
    secTitle: 'Web Development Solutions',
    secDesc: 'Cutting-edge web design and development built for performance and global reach.',
    cards: [
      { icon: 'fa-laptop-code', title: 'Custom Website Development', desc: 'Modern, high-performance websites built using React, Next.js, and HTML5 tailored to your business goals.' },
      { icon: 'fa-shopping-cart', title: 'E-Commerce Platforms', desc: 'Scalable online store development with integrated payment gateways, multi-currency support, and inventory tracking.' },
      { icon: 'fa-globe', title: 'Multilingual Web Architecture', desc: 'Seamless internationalization (i18n) and localization setup for instant language switching.' },
      { icon: 'fa-mobile-alt', title: 'Responsive Mobile UX', desc: 'Fluid mobile-first design ensuring perfect layout rendering across desktops, tablets, and smartphones.' },
      { icon: 'fa-rocket', title: 'SEO & Speed Optimization', desc: 'Optimized page load speeds, clean semantic code, and structured schema markup for top search engine rankings.' },
      { icon: 'fa-shield-alt', title: 'Maintenance & Security', desc: '24/7 technical maintenance, SSL certificate setup, security patches, and cloud server hosting support.' }
    ]
  },
  '/legal-translation': {
    title: 'Legal Translation Service',
    headingMain: 'Legal Translation',
    headingSub: 'Statutory Precision',
    tag: 'Legal Translation',
    tagIcon: 'fa-gavel',
    heroBg: 'bg-legal',
    heroImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80',
    desc: 'Certified translation of contracts, court documents, patents, litigation files, and statutory agreements by qualified legal translation experts.',
    badge1: 'Sworn Translators',
    badge2: 'Court Accepted',
    stag: 'Legal Expertise',
    secTitle: 'Legal Translation Solutions',
    secDesc: 'Uncompromised accuracy for critical legal and regulatory documentation.',
    cards: [
      { icon: 'fa-file-signature', title: 'Contracts & Agreements', desc: 'Precise translation of commercial leases, employment contracts, NDAs, and merger agreements.' },
      { icon: 'fa-balance-scale', title: 'Court & Litigation Docs', desc: 'Certified translation of court summons, affidavits, judge rulings, and legal pleadings.' },
      { icon: 'fa-copyright', title: 'Intellectual Property & Patents', desc: 'Patent filings, trademark applications, and copyright dispute documentation.' },
      { icon: 'fa-landmark', title: 'Statutory & Compliance', desc: 'Regulatory filings, corporate bylaws, compliance policies, and government submissions.' },
      { icon: 'fa-certificate', title: 'Notarized Translations', desc: 'Official sworn and notarized legal translations accepted by courts and government bodies.' },
      { icon: 'fa-user-shield', title: 'Strict NDA Protection', desc: 'Enforced data privacy protocols ensuring complete client document confidentiality.' }
    ]
  },
  '/medical-translation': {
    title: 'Medical Translation Service',
    headingMain: 'Medical Translation',
    headingSub: 'Pharma & Healthcare',
    tag: 'Medical Translation',
    tagIcon: 'fa-stethoscope',
    heroBg: 'bg-medical',
    heroImg: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=80',
    desc: 'Rigorous translation of clinical trial protocols, medical device manuals, pharmaceutical documents, and patient reports by certified medical linguists.',
    badge1: 'ISO 13485 Compliant',
    badge2: 'Medical Experts',
    stag: 'Healthcare Quality',
    secTitle: 'Medical & Pharma Solutions',
    secDesc: 'Zero-error tolerance for life science and medical documentation.',
    cards: [
      { icon: 'fa-vials', title: 'Clinical Trial Documents', desc: 'Translation of informed consent forms, trial protocols, case report forms, and investigator brochures.' },
      { icon: 'fa-pills', title: 'Pharma Product Insert Copies', desc: 'Patient information leaflets (PIL), drug packaging copy, and dosage instructions.' },
      { icon: 'fa-laptop-medical', title: 'Medical Device Manuals', desc: 'User guides, IFUs, and compliance documentation for diagnostic equipment and devices.' },
      { icon: 'fa-file-medical-alt', title: 'Patient Records & Reports', desc: 'Certified translation of medical history notes, hospital discharge summaries, and lab tests.' },
      { icon: 'fa-notes-medical', title: 'Medical Journal Papers', desc: 'Translating healthcare research papers, clinical study reports, and academic journals.' },
      { icon: 'fa-shield-virus', title: 'Regulatory Submissions', desc: 'FDA, EMA, and CDSCO compliance dossier translations for international market approval.' }
    ]
  },
  '/business-translation': {
    title: 'Business Translation Service',
    headingMain: 'Business Translation',
    headingSub: 'Corporate Communications',
    tag: 'Business Translation',
    tagIcon: 'fa-briefcase',
    heroBg: 'bg-business',
    heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
    desc: 'Professional translation for corporate proposals, financial reports, business plans, and internal communications to drive global corporate growth.',
    badge1: 'Corporate Trusted',
    badge2: '100+ Languages',
    stag: 'Corporate Solutions',
    secTitle: 'Business Translation Services',
    secDesc: 'Streamlining cross-border communication for international enterprises.',
    cards: [
      { icon: 'fa-chart-pie', title: 'Annual Reports & Filings', desc: 'Accurate translation of shareholder reports, balance sheets, and corporate earnings summaries.' },
      { icon: 'fa-handshake', title: 'Business Proposals & RFPs', desc: 'Winning commercial pitch decks, vendor proposals, and tender submissions translated for global clients.' },
      { icon: 'fa-sitemap', title: 'HR & Internal Policies', desc: 'Employee handbooks, code of conduct docs, training manuals, and internal memos.' },
      { icon: 'fa-bullhorn', title: 'PR & Corporate Releases', desc: 'Press releases, media kits, and corporate announcements localized for international news outlets.' },
      { icon: 'fa-envelope-open-text', title: 'Executive Correspondence', desc: 'C-suite email communications, board meeting minutes, and strategic partnership letters.' },
      { icon: 'fa-building', title: 'Company Profiles & Collateral', desc: 'Corporate brochures, presentation decks, and brand guidelines translated in 100+ languages.' }
    ]
  },
  '/certificate-translation': {
    title: 'Certificate Translation Service',
    headingMain: 'Certificate Translation',
    headingSub: 'Embassy & Govt Accepted',
    tag: 'Certificates',
    tagIcon: 'fa-certificate',
    heroBg: 'bg-certificate',
    heroImg: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    desc: 'Official certified translations for birth certificates, marriage certificates, degree diplomas, transcripts, and passports accepted by embassies globally.',
    badge1: '100% Embassy Acceptance',
    badge2: 'Certified Seal',
    stag: 'Official Verification',
    secTitle: 'Certificate Translation Services',
    secDesc: 'Certified, stamped, and signed document translations for official use.',
    cards: [
      { icon: 'fa-id-card', title: 'Birth & Marriage Certificates', desc: 'Certified translation of vital statistics records required for visa and permanent residency applications.' },
      { icon: 'fa-graduation-cap', title: 'Academic Diplomas & Marksheets', desc: 'Degree certificates, school transcripts, and mark sheets translated for university admissions.' },
      { icon: 'fa-passport', title: 'Passports & Visas', desc: 'Official translation of foreign passports, driving licenses, and identity verification cards.' },
      { icon: 'fa-file-invoice', title: 'Police Clearance (PCC)', desc: 'Background check certificates and police clearance reports translated for immigration.' },
      { icon: 'fa-stamp', title: 'Notarized Translation', desc: 'Notary public attestation ensuring legal validity before government authorities.' },
      { icon: 'fa-truck-fast', title: 'Express Delivery', desc: 'Urgent certificate translation delivered within 24 hours complete with official digital seal.' }
    ]
  },
  '/ecommerce-translation': {
    title: 'E-Commerce Translation',
    headingMain: 'E-Commerce Translation',
    headingSub: 'Global Online Stores',
    tag: 'E-Commerce',
    tagIcon: 'fa-shopping-cart',
    heroBg: 'bg-ecommerce',
    heroImg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80',
    desc: 'Expand your online store into international markets with localized product descriptions, checkout flows, customer reviews, and multi-currency copy.',
    badge1: 'High Conversion',
    badge2: 'Shopify / Magento / Amazon',
    stag: 'Global Retail',
    secTitle: 'E-Commerce Localization',
    secDesc: 'Turn international site visitors into paying online customers.',
    cards: [
      { icon: 'fa-box', title: 'Product Catalog Translation', desc: 'Bulk translation of product titles, features, specifications, and SKU attributes.' },
      { icon: 'fa-credit-card', title: 'Checkout & Payment UX', desc: 'Localizing cart pages, shipping policies, return forms, and regional payment method instructions.' },
      { icon: 'fa-tags', title: 'SEO Product Copy', desc: 'Keyword-optimized e-commerce copy that ranks on regional Google search engines.' },
      { icon: 'fa-headset', title: 'Customer Support Templates', desc: 'Multilingual support email templates, chat responses, and FAQ knowledgebase articles.' },
      { icon: 'fa-bullseye', title: 'Ad & Promo Campaigns', desc: 'Translating promo banners, holiday sales popups, and email marketing newsletters.' },
      { icon: 'fa-cogs', title: 'Storefront Integration', desc: 'Seamless API and CSV export for Shopify, WooCommerce, Magento, and Amazon listings.' }
    ]
  },
  '/elearning-translation': {
    title: 'E-Learning Translation Service',
    headingMain: 'E-Learning',
    headingSub: 'Educational Content',
    tag: 'E-Learning',
    tagIcon: 'fa-graduation-cap',
    heroBg: 'bg-elearning',
    heroImg: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
    desc: 'Comprehensive localization of online courses, LMS platforms, training slides, assessments, and educational videos for international learners.',
    badge1: 'SCORM Compliant',
    badge2: '50+ Languages',
    stag: 'Global Education',
    secTitle: 'E-Learning Solutions',
    secDesc: 'Empowering students and corporate trainees in their native language.',
    cards: [
      { icon: 'fa-desktop', title: 'LMS Platform Localization', desc: 'Translating user interfaces, navigation menus, and student dashboards on Canvas, Moodle, and Blackboard.' },
      { icon: 'fa-file-powerpoint', title: 'Slide Deck & Courseware', desc: 'Desktop publishing for Articulate Storyline, Adobe Captivate, and PowerPoint training decks.' },
      { icon: 'fa-tasks', title: 'Quizzes & Assessments', desc: 'Accurate translation of test questions, multiple-choice options, and grading rubrics.' },
      { icon: 'fa-video', title: 'Instructional Video Subtitles', desc: 'Time-synced subtitling and closed captions for video lectures and tutorials.' },
      { icon: 'fa-microphone-alt', title: 'Narrated Course Voice-Overs', desc: 'Studio voice-over recordings matching slide timings and lesson progression.' },
      { icon: 'fa-certificate', title: 'Course Completion Certificates', desc: 'Localized digital certificate templates issued to international graduates.' }
    ]
  },
  '/finance-translation': {
    title: 'Finance Translation Service',
    headingMain: 'Finance Translation',
    headingSub: 'Banking & Financial Docs',
    tag: 'Finance Translation',
    tagIcon: 'fa-chart-line',
    heroBg: 'bg-finance',
    heroImg: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
    desc: 'High-precision translation for audit reports, banking disclosures, investment prospectuses, tax filings, and financial statements.',
    badge1: 'Audit Accurate',
    badge2: 'Financial Specialists',
    stag: 'Financial Precision',
    secTitle: 'Financial Translation Services',
    secDesc: 'Meticulous financial accuracy compliant with global accounting standards.',
    cards: [
      { icon: 'fa-file-invoice-dollar', title: 'Financial Statements & Audits', desc: 'Income statements, balance sheets, cash flow statements, and independent auditor reports.' },
      { icon: 'fa-university', title: 'Banking & Credit Records', desc: 'Bank statement translations, credit reports, loan agreements, and mortgage documents.' },
      { icon: 'fa-chart-bar', title: 'Investment Prospectuses', desc: 'Fund fact sheets, KIID documents, IPO prospectuses, and equity research notes.' },
      { icon: 'fa-shield-alt', title: 'Tax & Compliance Filings', desc: 'Corporate tax returns, VAT disclosures, and international regulatory filings.' },
      { icon: 'fa-coins', title: 'Fintech App Localisation', desc: 'Banking and trading application UI string translations and security prompt localization.' },
      { icon: 'fa-lock', title: 'Banking Security Protocols', desc: 'Strict data encryption protocols ensuring 100% confidentiality of financial records.' }
    ]
  },
  '/technical-translation': {
    title: 'Technical Translation Service',
    headingMain: 'Technical Translation',
    headingSub: 'Manuals & Engineering Docs',
    tag: 'Technical Translation',
    tagIcon: 'fa-cogs',
    heroBg: 'bg-technical',
    heroImg: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&auto=format&fit=crop&q=80',
    desc: 'Expert translation of engineering manuals, product specifications, safety data sheets (SDS), and technical schematics by domain-specialized engineers.',
    badge1: 'ISO Terminology',
    badge2: 'Engineering Experts',
    stag: 'Engineering Precision',
    secTitle: 'Technical Translation Services',
    secDesc: 'Flawless technical terminology management for complex industrial equipment.',
    cards: [
      { icon: 'fa-book-tech', title: 'User & Maintenance Manuals', desc: 'Assembly instructions, operating manuals, and field maintenance guides for machinery.' },
      { icon: 'fa-exclamation-triangle', title: 'Safety Data Sheets (SDS)', desc: 'OSHA & REACH compliant chemical safety data sheets and hazard warning labels.' },
      { icon: 'fa-drafting-compass', title: 'CAD Drawings & Schematics', desc: 'Translating text elements within AutoCAD diagrams, blueprints, and engineering schematics.' },
      { icon: 'fa-laptop-code', title: 'Software & SDK Documentation', desc: 'API documentation, developer guides, code comments, and software release notes.' },
      { icon: 'fa-microchip', title: 'Product Specification Sheets', desc: 'Data sheets, technical whitepapers, and component performance specifications.' },
      { icon: 'fa-database', title: 'Technical Terminology Glossaries', desc: 'Building custom client glossaries to maintain 100% consistency across long technical projects.' }
    ]
  }
};

export default function ServiceDetail() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { services, translationServices } = useData();

  // Per-route SEO keywords
  const ROUTE_KEYWORDS = {
    '/localization': 'localization service bangalore, website localization india, app localization, content localization, cultural adaptation, multilingual localization, ui ux localization, e-commerce localization, localization agency india, software localization bangalore, document localization, marketing localization',
    '/seo-content-writing-services': 'seo content writing bangalore, seo copywriting india, multilingual seo, keyword research services, blog writing services, content marketing india, meta description writing, technical copywriting, product description writing, on page seo writing',
    '/social-media-content-services': 'social media content creation bangalore, multilingual social media content, instagram content agency, linkedin content writing, social media copywriting india, reels script writing, social media graphics bangalore',
    '/subtitling': 'subtitling services india, subtitle translation bangalore, closed captioning services, srt file translation, youtube subtitles bangalore, film subtitling india, video captioning services, dfxp vtt subtitles',
    '/desktop-publishing-services': 'desktop publishing services bangalore, dtp translation india, multilingual typesetting, indesign translation, rtl layout services, print ready pdf translation, brochure typesetting india, dtp localization',
    '/voice-over-services': 'voice over services bangalore, multilingual voiceover india, native voice artist, corporate narration, elearning voiceover, commercial voice over, audiobook narration india, ivr voice recording',
    '/transcription': 'transcription services bangalore, audio transcription india, video transcription services, legal transcription bangalore, medical transcription india, interview transcription, timestamped transcript',
    '/video-editing': 'video editing services bangalore, multilingual video editing, subtitle integration video, color grading bangalore, corporate video editing, social media video editing, 4k video editing india',
    '/social-media-marketing': 'social media marketing agency bangalore, multilingual social media marketing, facebook ads india, instagram marketing, linkedin marketing bangalore, influencer marketing india, social media management',
    '/web-development': 'web development bangalore, multilingual website development, react website bangalore, e-commerce development india, responsive web design, seo optimized website, i18n localization web development',
    '/legal-translation': 'legal translation services bangalore, certified legal translation india, contract translation, court document translation, patent translation india, notarized legal translation, sworn translator bangalore',
    '/medical-translation': 'medical translation services bangalore, clinical trial translation, pharma translation india, medical device manual translation, patient records translation, fda ema dossier translation, healthcare translation bangalore',
    '/business-translation': 'business translation services india, corporate document translation bangalore, annual report translation, business proposal translation, hr document translation, press release translation india',
    '/certificate-translation': 'certificate translation bangalore, birth certificate translation india, marriage certificate translation, degree certificate translation, embassy accepted certificate translation, notarized certificate translation',
    '/ecommerce-translation': 'e-commerce translation bangalore, product catalog translation, shopify translation india, amazon listing translation, checkout localization, ecommerce localization india',
    '/elearning-translation': 'elearning translation bangalore, lms localization india, articulate storyline translation, scorm compliant translation, online course translation, educational content translation',
    '/finance-translation': 'financial translation services bangalore, finance document translation india, audit report translation, investment prospectus translation, tax filing translation, banking document translation',
    '/technical-translation': 'technical translation services bangalore, engineering manual translation india, safety data sheet translation, sds translation, technical document translation, user manual translation india'
  };

  const allDynamic = [...services, ...translationServices];
  const dynamicMatch = allDynamic.find(s => s.path === currentPath || `/${s.key}` === currentPath);
  const isTranslationService = translationServices.some(s => s.path === currentPath || `/${s.key}` === currentPath);
  const sidebarItems = isTranslationService ? translationServices : services;
  const sidebarHub = isTranslationService ? '/translation-services' : '/language-services-bangalore';
  const sidebarLabel = isTranslationService ? 'Translation Services' : 'Services';

  let data = SERVICE_DATABASE[currentPath];
  if (!data && dynamicMatch) {
    data = {
      title: dynamicMatch.title,
      headingMain: dynamicMatch.title,
      headingSub: dynamicMatch.sub || 'Professional Service',
      tag: dynamicMatch.title,
      tagIcon: dynamicMatch.icon || 'fa-star',
      heroBg: 'bg-translation',
      heroImg: dynamicMatch.image || 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80',
      desc: dynamicMatch.desc,
      badge1: 'High Quality',
      badge2: 'Fast Delivery',
      stag: 'Service Overview',
      secTitle: dynamicMatch.title,
      secDesc: dynamicMatch.desc,
      cards: [
        { icon: dynamicMatch.icon || 'fa-check', title: `${dynamicMatch.title} Solutions`, desc: dynamicMatch.desc },
        { icon: 'fa-globe', title: 'Multilingual Support', desc: 'Available in 100+ global languages with ISO 9001 certified precision.' },
        { icon: 'fa-user-check', title: 'Expert Linguists', desc: 'Handled by native language professionals and domain specialists.' }
      ]
    };
  }
  if (!data) {
    data = SERVICE_DATABASE['/localization'];
  }

  const pageKeywords = ROUTE_KEYWORDS[currentPath]
    || `${data.title.toLowerCase()}, certified ${data.headingMain.toLowerCase()} bangalore, ${data.tag.toLowerCase()} services india, professional ${data.tag.toLowerCase()}, iso certified translation`;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.desc,
    "url": `https://visma-translation-react.vercel.app${currentPath}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "VISMA Translation",
      "url": "https://visma-translation-react.vercel.app",
      "telephone": "+919945342726",
      "email": "info@vismatranslation.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560001",
        "addressCountry": "IN"
      }
    },
    "serviceType": data.tag,
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Bangalore" }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://visma-translation-react.vercel.app/contact",
      "servicePhone": "+919945342726"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${data.secTitle} Solutions`,
      "itemListElement": (data.cards || []).map((card, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "Service",
          "name": card.title,
          "description": card.desc
        }
      }))
    }
  };

  return (
    <main>
      <SEO
        title={data.title}
        description={data.desc}
        keywords={pageKeywords}
        canonical={`https://visma-translation-react.vercel.app${currentPath}`}
        schema={pageSchema}
      />
      <section className="page-hero">
        <div className={`hero-bg ${data.heroBg}`}></div>
        <div className="ph-inner">
          <div className="ph-text">
            <div className="breadcrumb">
              <Link to="/">Home</Link><i className="fas fa-chevron-right"></i>
              <Link to={sidebarHub}>{sidebarLabel}</Link><i className="fas fa-chevron-right"></i>
              <span>{data.title}</span>
            </div>
            <div className="pg-tag"><i className={`fas ${data.tagIcon || 'fa-certificate'}`}></i> {data.tag}</div>
            <h1><span className="ac">{data.headingMain}</span><br />{data.headingSub}</h1>
            <p className="ph-desc">{data.desc}</p>
            <div className="ph-btns">
              <Link to="/translation-services-contact-us" className="btn-org"><i className="fas fa-paper-plane"></i> Get a Free Quote</Link>
              <Link to={sidebarHub} className="btn-ghost"><i className="fas fa-th-large"></i> All {sidebarLabel}</Link>
            </div>
          </div>
          <div className="ph-img">
            <div className="ph-illus">
              <img src={data.heroImg} alt={data.title} loading="eager" />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(232,101,26,.25),transparent 60%)', borderRadius: '22px' }}></div>
              <div className="f-badge p1"><i className="fas fa-check-circle"></i> {data.badge1}</div>
              <div className="f-badge p2"><i className="fas fa-certificate"></i> {data.badge2}</div>
            </div>
          </div>
        </div>
        <div className="page-wave"><svg viewBox="0 0 1440 48" preserveAspectRatio="none"><path d="M0,24 C360,48 1080,0 1440,24 L1440,48 L0,48 Z" fill="#f8f9fa" /></svg></div>
      </section>

      <section className="sec bg-light">
        <div className="container">
          <div className="service-page-with-sidebar">
            <ServiceSidebar
              title={sidebarLabel}
              items={sidebarItems}
              hubPath={sidebarHub}
              hubLabel={sidebarLabel}
            />
            <div className="service-page-main">
              <div className="sh c" style={{ textAlign: 'left' }}>
                <div className="stag">{data.stag}</div>
                <h2>{data.secTitle.split(' ')[0]} <span className="ac">{data.secTitle.split(' ').slice(1).join(' ')}</span></h2>
                <p>{data.secDesc}</p>
              </div>
              <div className="g3">
                {data.cards.map((c, idx) => (
                  <div key={idx} className="card">
                    <div className="c-icon" style={{ background: '#e8f4fd', color: '#2980b9' }}>
                      <i className={`fas ${c.icon}`}></i>
                    </div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
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
            <h2>Ready to Get Started with {data.headingMain}?</h2>
            <p>Get a free consultation and quote within 2 hours.</p>
          </div>
          <div className="cta-btns">
            <Link to="/translation-services-contact-us" className="btn-wh"><i className="fas fa-paper-plane"></i> Get Free Quote</Link>
            <a href="tel:+919945342726" className="btn-wb"><i className="fas fa-phone-alt"></i> +91 9945342726</a>
          </div>
        </div>
      </div>
    </main>
  );
}
