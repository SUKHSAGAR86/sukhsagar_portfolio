'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, FileText, Sparkles, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Create mailto link as direct fallback so visitor can dispatch immediately
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
  };

  return (
    <section className="py-24 sm:py-28 relative" id="contact">
      <div className="max-w-content mx-auto px-5 sm:px-7">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-medium tracking-wide mb-4">
            <Sparkles size={14} />
            <span>06 // INITIATE DIRECT CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-headline font-extrabold text-light tracking-tight leading-tight mb-4">
            Let&apos;s Build Something <br />
            Resilient Together.
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            Open for software engineering roles, full-stack development contracts, and challenging government or enterprise software projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Column: Direct Communication Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-1 border border-borderSubtle rounded-3xl p-7 sm:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/25 text-mint font-mono text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-mint shadow-[0_0_6px_#B7F7D4]"></span>
                <span>Actively Reviewing Opportunities</span>
              </div>

              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-light tracking-tight leading-snug mb-4">
                Get In Touch With <br />
                Sukhsagar Jangde
              </h3>

              <p className="text-base text-light-dim leading-relaxed mb-8">
                Whether you have an opening in your engineering team, need an experienced MERN &amp; relational developer for a project, or want to discuss mission-critical architecture—feel free to reach out directly.
              </p>

              {/* Contact Channels */}
              <div className="flex flex-col gap-4 mb-10">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-2 border border-light/[0.05] hover:border-borderHover transition-all">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="flex flex-col flex-grow overflow-hidden">
                    <span className="font-mono text-[0.7rem] text-muted uppercase">Direct Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sm sm:text-base font-semibold text-light hover:text-accent truncate transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-9 h-9 rounded-lg bg-surface-1 border border-borderSubtle text-muted hover:text-accent hover:border-accent flex items-center justify-center shrink-0 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check size={16} className="text-mint" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-2 border border-light/[0.05] hover:border-borderHover transition-all">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col flex-grow overflow-hidden">
                    <span className="font-mono text-[0.7rem] text-muted uppercase">Phone / WhatsApp</span>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="text-sm sm:text-base font-semibold text-light hover:text-accent truncate transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="w-9 h-9 rounded-lg bg-surface-1 border border-borderSubtle text-muted hover:text-accent hover:border-accent flex items-center justify-center shrink-0 transition-colors"
                    title="Copy phone number to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check size={16} className="text-mint" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-2 border border-light/[0.05]">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <span className="font-mono text-[0.7rem] text-muted uppercase">Location Base</span>
                    <span className="text-sm sm:text-base font-semibold text-light">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex gap-4 flex-wrap pt-4">
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline font-semibold text-xs sm:text-sm bg-light text-dark hover:bg-white transition-all shadow"
              >
                <FileText size={15} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-headline font-semibold text-xs sm:text-sm bg-surface-2 text-light border border-borderSubtle hover:border-borderHover hover:text-accent transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface-1 border border-borderSubtle rounded-3xl p-7 sm:p-10 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 text-accent mb-2">
              <MessageSquare size={18} />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">Fast Response</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-light tracking-tight mb-1">
              Send a Direct Dispatch
            </h3>
            <p className="text-sm text-muted mb-8">
              Fill out the parameters below to establish contact immediately.
            </p>

            {formSubmitted ? (
              <div className="py-12 px-6 flex flex-col items-center text-center my-auto">
                <div className="w-16 h-16 rounded-full bg-mint/15 border-2 border-mint text-mint flex items-center justify-center mb-6">
                  <Check size={28} />
                </div>
                <h4 className="font-headline text-xl font-bold text-light mb-2">Dispatch Triggered!</h4>
                <p className="text-sm text-light-dim max-w-sm leading-relaxed mb-6">
                  Your message has opened in your mail client. You can also contact me directly at <strong className="text-accent">{personalInfo.email}</strong>.
                </p>
                <button
                  className="px-5 py-2.5 rounded-full font-headline text-xs font-semibold bg-surface-2 text-light border border-borderSubtle hover:border-borderHover transition-all"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-name" className="font-mono text-xs text-light-dim uppercase tracking-wider">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="bg-surface-2 border border-light/[0.08] rounded-xl px-4 py-3 text-light text-sm focus:outline-none focus:border-accent focus:bg-surface-3 transition-colors placeholder:text-muted-dark"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-email" className="font-mono text-xs text-light-dim uppercase tracking-wider">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    className="bg-surface-2 border border-light/[0.08] rounded-xl px-4 py-3 text-light text-sm focus:outline-none focus:border-accent focus:bg-surface-3 transition-colors placeholder:text-muted-dark"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-subject" className="font-mono text-xs text-light-dim uppercase tracking-wider">
                    Subject / Project Context
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Full-Stack Role / Project Inquiry"
                    className="bg-surface-2 border border-light/[0.08] rounded-xl px-4 py-3 text-light text-sm focus:outline-none focus:border-accent focus:bg-surface-3 transition-colors placeholder:text-muted-dark"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-message" className="font-mono text-xs text-light-dim uppercase tracking-wider">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your requirements, role specifications, or inquiry details..."
                    className="bg-surface-2 border border-light/[0.08] rounded-xl px-4 py-3 text-light text-sm focus:outline-none focus:border-accent focus:bg-surface-3 transition-colors placeholder:text-muted-dark resize-y min-h-[100px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-headline font-bold text-sm bg-accent text-dark shadow-[0_4px_20px_rgba(166,184,255,0.25)] hover:bg-accent/90 hover:shadow-[0_8px_30px_rgba(166,184,255,0.45)] hover:-translate-y-0.5 transition-all mt-2"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
