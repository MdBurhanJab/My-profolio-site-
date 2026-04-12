import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Toaster } from 'sonner';

// Components
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import CustomCursor from './components/CustomCursor.tsx';
import ScrollProgress from './components/ScrollProgress.tsx';
import PageLoader from './components/PageLoader.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import BackToTop from './components/BackToTop.tsx';
import PageTransition from './components/PageTransition.tsx';
import { ThemeProvider } from './components/ThemeProvider.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';

// Pages
import Home from './pages/Home.tsx';
import Work from './pages/Work.tsx';
import Services from './pages/Services.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-background selection:bg-accent selection:text-white">
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          
          <main>
            <AnimatedRoutes />
          </main>

          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <Toaster position="bottom-right" theme="dark" richColors />
        </div>
      </Router>
    </ThemeProvider>
  );
}
