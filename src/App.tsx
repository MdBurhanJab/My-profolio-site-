import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';
import PageLoader from './components/PageLoader.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import BackToTop from './components/BackToTop.tsx';

// Pages
import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-background selection:bg-accent selection:text-white">
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Toaster position="bottom-right" theme="dark" richColors />
      </div>
    </Router>
  );
}
