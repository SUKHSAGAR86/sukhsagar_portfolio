'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, FileText } from 'lucide-react';
import styles from './Contact.module.scss';

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
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow eyebrow--mint">
            <span>06 // INITIATE DIRECT CONTACT</span>
          </div>
          <h2 className="section-header__title">
            Let&apos;s Build Something <br />
            Resilient Together.
          </h2>
          <p className="section-header__desc">
            Open for software engineering roles, full-stack development contracts, and challenging government or enterprise software projects.
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Direct Communication Info */}
          <div className={styles.directInfoCard}>
            <div className={styles.availabilityBanner}>
              <span className={styles.pulseDot}></span>
              <span>Actively Reviewing Opportunities</span>
            </div>

            <h3 className={styles.directTitle}>
              Get In Touch With <br />
              Sukhsagar Jangde
            </h3>

            <p className={styles.directDesc}>
              Whether you have a vacancy in your engineering team, need an experienced MERN &amp; relational developer for a project, or want to discuss mission-critical architecture—feel free to reach out directly.
            </p>

            {/* Contact Channels */}
            <div className={styles.channelList}>
              {/* Email */}
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Mail size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <div className={styles.channelLabel}>Direct Email</div>
                  <a href={`mailto:${personalInfo.email}`} className={styles.channelValue}>
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={styles.copyBtn}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone */}
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <Phone size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <div className={styles.channelLabel}>Phone / WhatsApp</div>
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className={styles.channelValue}>
                    {personalInfo.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className={styles.copyBtn}
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check size={16} className={styles.checkIcon} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location */}
              <div className={styles.channelItem}>
                <div className={styles.channelIcon}>
                  <MapPin size={18} />
                </div>
                <div className={styles.channelDetails}>
                  <div className={styles.channelLabel}>Location Base</div>
                  <div className={styles.channelValueStatic}>
                    {personalInfo.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className={styles.quickActions}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--sm"
              >
                <FileText size={15} />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary btn--sm"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send a Direct Dispatch</h3>
            <p className={styles.formSubtitle}>Fill out the parameters below to establish contact immediately.</p>

            {formSubmitted ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}>
                  <Check size={28} />
                </div>
                <h4 className={styles.successTitle}>Dispatch Triggered!</h4>
                <p className={styles.successText}>
                  Your message has opened in your mail client. You can also contact me directly at <strong>{personalInfo.email}</strong>.
                </p>
                <button
                  className="btn btn--secondary btn--sm"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.inputGroup}>
                  <label htmlFor="contact-name" className={styles.inputLabel}>
                    Full Name <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    className={styles.textInput}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-email" className={styles.inputLabel}>
                    Email Address <span className={styles.requiredStar}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    className={styles.textInput}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-subject" className={styles.inputLabel}>
                    Subject / Project Context
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Full-Stack Role / Project Inquiry"
                    className={styles.textInput}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="contact-message" className={styles.inputLabel}>
                    Message <span className={styles.requiredStar}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Describe your requirements, role specifications, or inquiry details..."
                    className={styles.textArea}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn--accent btn--lg">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
