import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import TranslationServices from './pages/TranslationServices';
import Quality from './pages/Quality';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Apostille from './pages/Apostille';
import ServiceDetail from './pages/ServiceDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function SiteChrome({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname === '/admin' || pathname === '/admin/login' || pathname.startsWith('/admin/');
  return (
    <>
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      {children}
      {!isAdmin && <WhatsAppFloat />}
      {!isAdmin && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <DataProvider>
      <Router>
        <SiteChrome>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-visma-translation" element={<About />} />
            <Route path="/language-services-bangalore" element={<Services />} />
            <Route path="/translation-services" element={<TranslationServices />} />
            <Route path="/industries-we-serve" element={<Quality />} />
            <Route path="/translation-services-blog" element={<Blog />} />
            <Route path="/translation-services-contact-us" element={<Contact />} />
            <Route path="/translation-services-apostille" element={<Apostille />} />
            <Route path="/translation-services-privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/translation-services-terms-and-conditions" element={<TermsAndConditions />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Dynamic Service Detail Routes */}
            <Route path="/localization-services" element={<ServiceDetail />} />
            <Route path="/seo-content-writing-services" element={<ServiceDetail />} />
            <Route path="/social-media-content-services" element={<ServiceDetail />} />
            <Route path="/subtitling-services" element={<ServiceDetail />} />
            <Route path="/desktop-publishing-services" element={<ServiceDetail />} />
            <Route path="/voice-over-services" element={<ServiceDetail />} />
            <Route path="/transcription-services" element={<ServiceDetail />} />
            <Route path="/video-editing-services" element={<ServiceDetail />} />
            <Route path="/social-media-marketing" element={<ServiceDetail />} />
            <Route path="/web-development" element={<ServiceDetail />} />

            <Route path="/business-translation" element={<ServiceDetail />} />
            <Route path="/certificate-translation" element={<ServiceDetail />} />
            <Route path="/ecommerce-translation" element={<ServiceDetail />} />
            <Route path="/elearning-translation" element={<ServiceDetail />} />
            <Route path="/finance-translation" element={<ServiceDetail />} />
            <Route path="/legal-translation" element={<ServiceDetail />} />
            <Route path="/medical-translation" element={<ServiceDetail />} />
            <Route path="/technical-translation" element={<ServiceDetail />} />

            {/* Legacy URLs — keep old short routes working */}
            <Route path="/services" element={<Services />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/apostille" element={<Apostille />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/localization" element={<ServiceDetail />} />
            <Route path="/dtp" element={<ServiceDetail />} />
            <Route path="/voiceover" element={<ServiceDetail />} />
            <Route path="/seo-content" element={<ServiceDetail />} />
            <Route path="/social-media" element={<ServiceDetail />} />
            <Route path="/subtitling" element={<ServiceDetail />} />
            <Route path="/transcription" element={<ServiceDetail />} />
            <Route path="/video-editing" element={<ServiceDetail />} />

            {/* Fallback for any dynamically created service path */}
            <Route path="/:serviceKey" element={<ServiceDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </SiteChrome>
      </Router>
    </DataProvider>
  );
}
