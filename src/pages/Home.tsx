import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Code, Sparkles, Users, Award, CheckCircle2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const benefits = [
  { icon: Users, title: 'Personalized Attention', desc: 'Direct collaboration and dedicated focus on your clinic.' },
  { icon: Code, title: 'Modern Tech Stack', desc: 'Fast, secure, and accessible websites built with the latest tools.' },
  { icon: CheckCircle2, title: 'Transparent Process', desc: 'Clear communication and step-by-step guidance.' },
  { icon: Award, title: 'Quality Driven', desc: 'High-quality design tailored for growing dental practices.' },
];

const featuredWork = [
  {
    title: 'SmileCare Dental',
    category: 'Premium Website + SEO',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    size: 'large',
    link: 'https://smilecaredental2.netlify.app',
  },
  {
    title: 'EliteDent Studio',
    category: 'Brand Identity + Web',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200',
    size: 'small',
    link: 'https://elitedentalstudio1.netlify.app',
  },
];

const processSteps = [
  { title: 'Discovery', desc: 'Deep dive into your clinic goals and patient demographics.' },
  { title: 'Strategy', desc: 'Mapping the patient journey from search to appointment.' },
  { title: 'Design', desc: 'Creating a high-end visual identity that builds trust.' },
  { title: 'Launch', desc: 'Optimized deployment with ongoing growth support.' },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 relative overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-thin bg-accent/5 text-accent text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Sparkles size={14} />
              Specialized Dental Web Studio
            </motion.div>
            
            <h1 className="text-[clamp(48px,8vw,96px)] leading-[1.05] mb-8">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                CRAFTING
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-gradient"
              >
                DIGITAL
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                SMILES.
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-text-secondary text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              We build high-converting websites exclusively for dental clinics that turn website visitors into loyal patients.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/work"
                className="btn-uiverse gap-3"
              >
                View Our Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="btn-uiverse gap-3 !bg-transparent"
              >
                Book a Call
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="glass p-6 rounded-lg relative z-10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="font-mono text-sm text-accent/80 leading-relaxed">
                <p><span className="text-white">const</span> clinic = <span className="text-white">{'{'}</span></p>
                <p className="pl-4">name: <span className="text-white">"SmileCare Dental"</span>,</p>
                <p className="pl-4">conversion: <span className="text-white">"45%"</span>,</p>
                <p className="pl-4 text-white">status: <span className="text-accent">"Thriving"</span></p>
                <p><span className="text-white">{'}'}</span>;</p>
                <p className="mt-4 text-white">clinic.optimizeForPatients();</p>
              </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -top-10 -right-10 grid grid-cols-6 gap-4 opacity-20">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Marquee */}
      <div className="py-12 border-y border-white/5 bg-surface/30 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              <span className="text-2xl font-display font-bold text-white/20 uppercase tracking-tighter">Modern Dental Web Design</span>
              <span className="text-2xl font-display font-bold text-accent/40 uppercase tracking-tighter">High Conversion Design</span>
              <span className="text-2xl font-display font-bold text-white/20 uppercase tracking-tighter">Dental SEO Experts</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Work Grid */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl mb-6">SELECTED <span className="text-accent">PROJECTS</span></h2>
            <p className="text-text-secondary text-lg">A showcase of high-end digital experiences crafted for modern dental practices.</p>
          </div>
          <Link to="/work" className="group flex items-center gap-2 text-accent font-bold uppercase tracking-widest hover:text-white transition-colors">
            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-10 gap-8">
          {featuredWork.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "group relative overflow-hidden rounded-sm",
                project.size === 'large' ? "md:col-span-6" : "md:col-span-4"
              )}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-3xl font-display font-bold text-white mb-4">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                  View Live Site <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-surface/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl mb-4">WHY CHOOSE <span className="text-accent">US</span></h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">Dedicated to helping new and growing dental practices establish a strong digital presence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-lg text-center hover:border-accent/50 transition-colors"
              >
                <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl mb-20 text-center">OUR <span className="text-accent">PROCESS</span></h2>
        <div className="grid md:grid-cols-4 gap-px bg-white/5 border-thin">
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="card-uiverse"
            >
              <div className="card-uiverse-content p-10 group">
                <span className="text-accent font-mono text-xl mb-8 block">0{idx + 1}</span>
                <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-6 bg-surface/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl mb-20">CLINIC <span className="text-accent">VOICES</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Sarah Johnson', clinic: 'SmileCare Dental', quote: 'The conversion rate on our new site is incredible. We saw a 40% increase in bookings within the first month.' },
              { name: 'Dr. Michael Chen', clinic: 'EliteDent Studio', quote: 'Professional, efficient, and they truly understand the dental industry. Best investment we made this year.' },
              { name: 'Dr. Emily White', clinic: 'BrightSmile Clinic', quote: 'Our patients love the new site. It builds so much trust before they even step into the clinic.' },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="card-uiverse"
              >
                <div className="card-uiverse-content p-10">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Sparkles key={i} size={16} className="text-accent" />)}
                  </div>
                  <p className="text-lg italic mb-8 text-text-primary">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-accent text-sm uppercase tracking-widest">{t.clinic}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-accent p-12 md:p-24 rounded-sm text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="grid grid-cols-12 gap-4 h-full">
              {[...Array(48)].map((_, i) => <div key={i} className="border-r border-white/20" />)}
            </div>
          </div>
          
          <h2 className="text-5xl md:text-8xl text-white mb-10 leading-none">READY TO <br /> <span className="text-black">TRANSFORM?</span></h2>
          <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">Let's build a digital presence that reflects the quality of your dental care.</p>
          <Link
            to="/contact"
            className="btn-uiverse gap-3"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
