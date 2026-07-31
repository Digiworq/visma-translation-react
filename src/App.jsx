import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/translation-services" element={<TranslationServices />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apostille" element={<Apostille />} />
        
        {/* Service Detail Routes */}
        <Route path="/localization" element={<ServiceDetail />} />
        <Route path="/seo-content" element={<ServiceDetail />} />
        <Route path="/social-media" element={<ServiceDetail />} />
        <Route path="/subtitling" element={<ServiceDetail />} />
        <Route path="/dtp" element={<ServiceDetail />} />
        <Route path="/voiceover" element={<ServiceDetail />} />
        <Route path="/transcription" element={<ServiceDetail />} />
        <Route path="/video-editing" element={<ServiceDetail />} />
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

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </Router>
  );
}
