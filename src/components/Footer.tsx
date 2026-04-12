import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface/30 border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <Link to="/" className="text-3xl font-display font-bold tracking-tight mb-8 block">
              DENTA<span className="text-accent">STUDIO</span>
            </Link>
            <p className="text-text-secondary text-lg max-w-sm leading-relaxed mb-10">
              Transforming dental clinics through premium digital experiences and strategic growth solutions.
            </p>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 border-thin rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border-thin rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border-thin rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-text-primary font-bold uppercase tracking-widest text-sm mb-8">Studio</h4>
            <ul className="space-y-4">
              <li><Link to="/work" className="text-text-secondary hover:text-accent transition-colors">Work</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-text-primary font-bold uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              <li><span className="text-text-secondary">Web Design</span></li>
              <li><span className="text-text-secondary">Dental SEO</span></li>
              <li><span className="text-text-secondary">Branding</span></li>
              <li><span className="text-text-secondary">Maintenance</span></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-text-primary font-bold uppercase tracking-widest text-sm mb-8">Newsletter</h4>
            <p className="text-text-secondary text-sm mb-6">Get dental marketing tips delivered to your inbox.</p>
            <div className="flex flex-col gap-4">
              <div className="input-group">
                <input
                  type="email"
                  placeholder=" "
                  className="input-uiverse !py-3"
                />
                <label className="input-label">Email address</label>
              </div>
              <button className="btn-uiverse !py-3 w-full flex justify-center items-center gap-2">
                Subscribe <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border-color flex flex-col md:flex-row justify-between items-center gap-6 text-text-secondary text-xs font-bold uppercase tracking-widest">
          <p>© 2024 DentaStudio. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
