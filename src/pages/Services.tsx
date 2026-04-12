import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, HelpCircle, Plus, Minus, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const pricing = [
  {
    name: 'Starter',
    price: '₹15,000',
    desc: 'Perfect for new clinics looking to establish a professional digital presence.',
    features: [
      'Single Page Landing Design',
      'Mobile Responsive',
      'WhatsApp Integration',
      'Contact Form',
      '1 Month Support',
    ],
    accent: false,
  },
  {
    name: 'Growth',
    price: '₹40,000',
    desc: 'Comprehensive solution for established clinics wanting more patient leads.',
    features: [
      'Multi-page Website (Up to 5)',
      'Patient Portal Integration',
      'Content Strategy',
      'Google Maps Optimization',
      '3 Months Support',
    ],
    accent: true,
  },
  {
    name: 'Premium',
    price: '₹90,000',
    desc: 'The ultimate digital experience for high-end dental studios and chains.',
    features: [
      'Custom High-End Design',
      'Custom Booking System',
      'Brand Identity Kit',
      'Performance Optimization',
      'Priority Support (1 Year)',
    ],
    accent: false,
  },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'A Starter project takes 1-2 weeks, while Growth and Premium projects typically take 4-8 weeks depending on complexity.' },
  { q: 'Do you provide website maintenance?', a: 'Yes, we offer a dedicated maintenance package for ₹8,000/month that covers security, updates, and minor changes.' },
  { q: 'Will my website be mobile-friendly?', a: 'Absolutely. Every website we build is fully responsive and optimized for all devices, especially mobile where most patients search.' },
  { q: 'Can you help with Google rankings?', a: 'Yes, SEO is at the core of our Growth and Premium packages to ensure your clinic appears when patients search for dentists in your area.' },
];

export default function Services() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  return (
    <div className="pt-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(48px,8vw,96px)] leading-[1.05] mb-12"
        >
          OUR <span className="text-accent">SERVICES</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-text-secondary text-xl max-w-2xl leading-relaxed"
        >
          Transparent pricing and specialized solutions designed to grow your dental practice.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className={cn(
                "card-uiverse flex flex-col h-full transition-all duration-500",
                plan.accent ? "scale-105 shadow-2xl shadow-accent/20" : ""
              )}
            >
              <div className="card-uiverse-content p-10 flex flex-col h-full">
                <h3 className={cn("text-2xl mb-2", plan.accent ? "text-text-primary" : "text-accent")}>{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-display font-bold text-text-primary">{plan.price}</span>
                  <span className={cn("text-sm", plan.accent ? "text-text-primary/60" : "text-text-secondary")}>/ project</span>
                </div>
                <p className={cn("text-sm mb-8 leading-relaxed", plan.accent ? "text-text-primary/80" : "text-text-secondary")}>
                  {plan.desc}
                </p>
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check size={16} className={plan.accent ? "text-accent" : "text-accent"} />
                      <span className={cn("text-sm", plan.accent ? "text-text-primary" : "text-text-primary")}>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="btn-uiverse w-full"
                >
                  Choose Plan
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Maintenance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 glass rounded-sm flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-accent">
              <Sparkles size={32} />
            </div>
            <div>
              <h3 className="text-2xl text-text-primary">Maintenance Add-on</h3>
              <p className="text-text-secondary">Keep your site secure, updated, and fast every single month.</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <span className="text-3xl font-display font-extrabold text-text-primary">₹8,000</span>
            <span className="text-text-secondary"> / month</span>
            <Link to="/contact" className="block mt-2 text-accent font-bold uppercase tracking-widest text-sm hover:text-text-primary transition-colors">
              Add to Package
            </Link>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 max-w-4xl mx-auto">
        <h2 className="text-5xl mb-16 text-center">FREQUENTLY ASKED <span className="text-accent">QUESTIONS</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-thin rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between bg-surface/50 hover:bg-surface transition-colors"
              >
                <span className="text-lg font-bold text-left">{faq.q}</span>
                {openFaq === idx ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-accent" />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 text-text-secondary leading-relaxed bg-surface/20">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
