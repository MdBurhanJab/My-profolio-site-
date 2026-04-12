import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6',
        scrolled ? 'bg-background/80 backdrop-blur-lg py-4 border-b border-border-color' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight group">
          DENTA<span className="text-accent group-hover:text-text-primary transition-colors">STUDIO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative text-sm font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors group"
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"
                initial={false}
                animate={location.pathname === link.path ? { w: '100%' } : {}}
              />
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-border-color pl-8">
            <ThemeToggle />
            <Link
              to="/contact"
              className="btn-uiverse !py-2.5 !px-6 !text-xs"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="text-4xl font-display font-bold text-text-primary hover:text-accent transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          className="mt-4 px-10 py-4 bg-accent text-white font-bold uppercase tracking-widest rounded-sm"
        >
          Get Started
        </Link>
      </motion.div>
    </nav>
  );
}
