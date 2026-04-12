import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    try {
      const formData = new FormData(formRef.current);
      const googleFormData = new FormData();
      
      googleFormData.append('entry.611650111', formData.get('user_name') as string);
      googleFormData.append('entry.1690372332', formData.get('clinic_name') as string);
      googleFormData.append('entry.1299669285', formData.get('user_email') as string);
      googleFormData.append('entry.379878888', formData.get('user_phone') as string);
      googleFormData.append('entry.410977668', formData.get('package') as string);
      googleFormData.append('entry.23064597', formData.get('city') as string);
      googleFormData.append('entry.1781482574', formData.get('source') as string);
      googleFormData.append('entry.333322305', formData.get('message') as string);

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSdCFgXdsmqvR_WORhcnlmr9RbjczEcxPTqo9eOM5Fj3ggTF8w/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        body: googleFormData
      });
      
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
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(48px,8vw,96px)] leading-[1.05] mb-12"
        >
          GET IN <span className="text-accent">TOUCH</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.2, duration: 0.8 }}
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
                  <p className="text-text-secondary text-lg">mdburhanjabir@gmail.com</p>
                  <p className="text-text-secondary text-lg">mdburhanjabir311@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-accent/10 rounded-sm flex items-center justify-center text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Call Us</h3>
                  <p className="text-text-secondary text-lg">+918431136274</p>
                  <p className="text-text-secondary text-lg">Mon-Fri,10am-9pm</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-8 glass rounded-sm">
              <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Quick Response</h4>
              <p className="text-text-primary text-lg">We typically respond to all inquiries within 24 business hours.</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                    defaultValue="Starter Website (Rs 15,000)"
                  >
                    <option value="Starter Website (Rs 15,000)" className="bg-surface">Starter Website (Rs 15,000)</option>
                    <option value="Growth Website (Rs 40,000)" className="bg-surface">Growth Website (Rs 40,000)</option>
                    <option value="Premium Clinic OS (Rs 90,000)" className="bg-surface">Premium Clinic OS (Rs 90,000)</option>
                    <option value="Monthly Maintenance (Rs 8,000/month)" className="bg-surface">Monthly Maintenance (Rs 8,000/month)</option>
                    <option value="Not sure — need consultation" className="bg-surface">Not sure — need consultation</option>
                  </select>
                  <label className="input-label !top-0 !text-[10px] !bg-surface !px-2 !text-accent">Package</label>
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
                  defaultValue="Google Search"
                >
                  <option value="Google Search" className="bg-surface">Google Search</option>
                  <option value="Instagram" className="bg-surface">Instagram</option>
                  <option value="LinkedIn" className="bg-surface">LinkedIn</option>
                  <option value="WhatsApp" className="bg-surface">WhatsApp</option>
                  <option value="Referral from someone" className="bg-surface">Referral from someone</option>
                  <option value="Other" className="bg-surface">Other</option>
                </select>
                <label className="input-label !top-0 !text-[10px] !bg-surface !px-2 !text-accent">How did you hear about us?</label>
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
