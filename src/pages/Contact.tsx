import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      // Note: In a real app, you'd use your actual EmailJS service/template IDs
      // For this demo, we'll simulate the success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Message sent successfully! We will contact you shortly.');
      formRef.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[clamp(48px,8vw,96px)] leading-[1.05] mb-12"
        >
          GET IN <span className="text-accent">TOUCH</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-text-secondary text-xl max-w-2xl leading-relaxed"
        >
          Ready to elevate your dental clinic's digital presence? Fill out the form below and let's start a conversation.
        </motion.p>
      </section>

      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-text-secondary text-lg">hello@dentastudio.com</p>
                  <p className="text-text-secondary text-lg">support@dentastudio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-text-secondary text-lg">+91 98765 43210</p>
                  <p className="text-text-secondary text-lg">Mon - Fri, 10am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                  <p className="text-text-secondary text-lg">102, Digital Heights, Bandra West</p>
                  <p className="text-text-secondary text-lg">Mumbai, Maharashtra 400050</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 glass rounded-sm">
              <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Quick Response</h4>
              <p className="text-white text-lg">We typically respond to all inquiries within 24 business hours.</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="input-group">
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder=" "
                    className="input-uiverse"
                  />
                  <label className="input-label">Full Name</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="clinic_name"
                    required
                    placeholder=" "
                    className="input-uiverse"
                  />
                  <label className="input-label">Clinic Name</label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="input-group">
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder=" "
                    className="input-uiverse"
                  />
                  <label className="input-label">Email Address</label>
                </div>
                <div className="input-group">
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    placeholder=" "
                    className="input-uiverse"
                  />
                  <label className="input-label">Phone Number</label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="input-group">
                  <select
                    name="package"
                    className="input-uiverse appearance-none"
                    defaultValue="starter"
                  >
                    <option value="starter" className="bg-surface">Starter (₹15,000)</option>
                    <option value="growth" className="bg-surface">Growth (₹40,000)</option>
                    <option value="premium" className="bg-surface">Premium (₹90,000)</option>
                    <option value="custom" className="bg-surface">Custom Solution</option>
                  </select>
                  <label className="input-label !top-0 !text-[10px] !bg-[#10101e] !px-2 !text-accent">Package</label>
                </div>
                <div className="input-group">
                  <input
                    required
                    type="text"
                    name="city"
                    placeholder=" "
                    className="input-uiverse"
                  />
                  <label className="input-label">City</label>
                </div>
              </div>

              <div className="input-group">
                <select
                  name="source"
                  className="input-uiverse appearance-none"
                  defaultValue="google"
                >
                  <option value="google" className="bg-surface">Google Search</option>
                  <option value="instagram" className="bg-surface">Instagram</option>
                  <option value="linkedin" className="bg-surface">LinkedIn</option>
                  <option value="referral" className="bg-surface">Referral</option>
                  <option value="other" className="bg-surface">Other</option>
                </select>
                <label className="input-label !top-0 !text-[10px] !bg-[#10101e] !px-2 !text-accent">How did you hear about us?</label>
              </div>

              <div className="input-group">
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder=" "
                  className="input-uiverse resize-none"
                ></textarea>
                <label className="input-label">Message</label>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="btn-uiverse w-full gap-3"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
