import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'smilecare',
    title: 'SmileCare Dental',
    category: 'Premium Website + SEO',
    year: '2024',
    description: 'A complete digital transformation for a high-end cosmetic dental clinic in Mumbai.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    link: 'https://smilecaredental2.netlify.app',
  },
  {
    id: 'elitedent',
    title: 'EliteDent Studio',
    category: 'Brand Identity + Web',
    year: '2023',
    description: 'Modern, minimalist branding and web design for a boutique dental studio.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200',
    link: 'https://elitedentalstudio1.netlify.app',
  },
  {
    id: 'brightsmile',
    title: 'BrightSmile Clinic',
    category: 'Patient Portal + UI/UX',
    year: '2023',
    description: 'Custom patient management portal integrated with a sleek marketing website.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?auto=format&fit=crop&q=80&w=1200',
    link: 'https://brightsmiled.netlify.app',
  },
  {
    id: 'dentpro',
    title: 'DentPro Solutions',
    category: 'Multi-Location SEO',
    year: '2022',
    description: 'Scaling digital presence for a chain of 5 dental clinics across North India.',
    image: 'https://images.unsplash.com/photo-1445527815219-ecbfec67492e?auto=format&fit=crop&q=80&w=1200',
    link: 'https://elitedental1.netlify.app',
  },
];

export default function Work() {
  return (
    <div className="pt-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(48px,8vw,96px)] leading-[1.05] mb-12"
        >
          OUR <span className="text-accent">WORK</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-xl max-w-2xl leading-relaxed"
        >
          We don't just build websites; we build growth engines. Explore our portfolio of high-converting dental experiences.
        </motion.p>
      </section>

      <section className="border-t border-white/5">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group relative border-b border-white/5 hover:bg-surface/30 transition-colors duration-500"
          >
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-accent font-mono text-sm">0{idx + 1}</span>
                  <span className="w-12 h-[1px] bg-white/20" />
                  <span className="text-text-secondary text-sm uppercase tracking-widest">{project.year}</span>
                </div>
                <h2 className="text-4xl md:text-6xl mb-6 group-hover:text-accent transition-colors">{project.title}</h2>
                <p className="text-text-secondary text-lg mb-8 max-w-md">{project.description}</p>
                <div className="flex flex-wrap gap-4">
                  <span className="px-4 py-1 border-thin rounded-full text-xs font-bold uppercase tracking-widest text-white/60">
                    {project.category}
                  </span>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest hover:text-accent transition-colors"
                >
                  View Live Site <ArrowRight size={18} />
                </a>
              </div>
              
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden rounded-sm border-thin group/img">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-accent">
                      <ExternalLink size={24} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl mb-10">HAVE A PROJECT <span className="text-accent">IN MIND?</span></h2>
        <Link
          to="/contact"
          className="btn-uiverse gap-3"
        >
          Let's Talk
          <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
}
