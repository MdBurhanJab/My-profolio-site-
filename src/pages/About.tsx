import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Zap, Heart, ArrowRight, Code2, Smartphone, Search, ShieldCheck, Database, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const values = [
  { icon: Target, title: 'Precision', desc: 'Just like clinical work, we believe digital precision is non-negotiable.' },
  { icon: Zap, title: 'Growth', desc: 'Our primary metric is the growth of your patient list and clinic revenue.' },
  { icon: Award, title: 'Quality', desc: 'We only deliver premium experiences that reflect high-end dental care.' },
  { icon: Heart, title: 'Trust', desc: 'Building trust between patients and clinics through honest digital design.' },
];

const techStack = [
  { icon: Code2, title: 'Modern Frameworks', desc: 'Built on React & modern architectures for lightning-fast, app-like performance.' },
  { icon: Cpu, title: 'Fluid Animations', desc: 'Powered by Framer Motion to create premium, memorable patient experiences.' },
  { icon: Smartphone, title: 'Mobile-First', desc: 'Flawless responsive design ensuring your clinic looks perfect on every device.' },
  { icon: Search, title: 'SEO Optimized', desc: 'Engineered for Core Web Vitals to dominate local Google search rankings.' },
  { icon: ShieldCheck, title: 'Bank-Grade Security', desc: 'Robust protection ensuring patient data and clinic information remain secure.' },
  { icon: Database, title: 'Scalable Backend', desc: 'Future-proof infrastructure that grows seamlessly alongside your practice.' },
];

export default function About() {
  return (
    <div className="pt-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(48px,8vw,96px)] leading-[1.05] mb-12"
        >
          OUR <span className="text-accent">STORY</span>
        </motion.h1>
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-white leading-relaxed mb-8">
              Your clinic provides <span className="text-accent">world-class care</span>. Your website should be a <span className="text-accent">patient acquisition machine</span>.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              In today's digital landscape, a generic template won't cut it. Patients judge your clinical expertise within milliseconds of landing on your page. We craft bespoke, lightning-fast digital experiences that instantly build trust, showcase your authority, and turn casual visitors into booked appointments.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              If you're tired of losing patients to competitors with inferior care but better marketing, you're in the right place. Let's transform your digital presence into your most valuable asset. Reach out today, and let's build something extraordinary together.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative aspect-square rounded-sm overflow-hidden border-thin"
          >
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1200"
              alt="Studio Workspace"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-surface/20 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl mb-20">CORE <span className="text-accent">VALUES</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="card-uiverse"
              >
                <div className="card-uiverse-content p-10 group">
                  <v.icon size={40} className="text-accent mb-8 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl mb-4">{v.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl mb-20">OUR <span className="text-accent">TECH ARSENAL</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-uiverse"
            >
              <div className="card-uiverse-content p-10 group">
                <tech.icon size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl mb-4 text-white">{tech.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl mb-10">WANT TO BE OUR NEXT <span className="text-accent">SUCCESS STORY?</span></h2>
        <Link
          to="/contact"
          className="btn-uiverse gap-3"
        >
          Let's Start
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}
