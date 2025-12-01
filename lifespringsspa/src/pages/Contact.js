import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message. We will respond within 24 hours.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="container">
          <div className="contact-hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Get In Touch
            </div>
            <h1>Let's Connect</h1>
            <p>We're here to help you plan your perfect wellness experience</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="contact-main">
        <div className="container">
          {/* Quick Contact Cards */}
          <div className="quick-contact-grid">
            <div className="quick-contact-card">
              <div className="quick-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3>Call or WhatsApp</h3>
              <p>067 762 2956</p>
            </div>

            <div className="quick-contact-card">
              <div className="quick-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3>Email Us</h3>
              <p>info@lifespringspa.com</p>
            </div>

            <div className="quick-contact-card">
              <div className="quick-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3>Visit Our Spa</h3>
              <p>45 4th Ave, Welgedacht, Springs</p>
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="contact-content">
            {/* Contact Form */}
            <div className="form-section">
              <div className="section-label">
                <div className="label-line"></div>
                <span>Send Us A Message</span>
              </div>
              <h2>Get in Touch</h2>
              <p className="form-intro">
                Have questions or ready to book? Fill out the form below and we'll 
                get back to you within 24 hours.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="067 762 2956"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">What can we help you with?</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Appointment</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="bridal">Bridal Services</option>
                    <option value="mobile">Mobile Spa Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your wellness needs or any questions you have..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </form>
            </div>

            {/* Location & Info Section */}
            <div className="info-section">
              <div className="info-card">
                <div className="section-label">
                  <div className="label-line"></div>
                  <span>Find Us</span>
                </div>
                <h2>Our Location</h2>
                
                <div className="map-container">
                  <iframe
                    title="spa-location-map"
                    width="100%"
                    height="350"
                    frameBorder="0"
                    src="https://maps.google.com/maps?q=45%204th%20Ave%20Welgedacht%20Springs&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                  />
                </div>

                <div className="location-details">
                  <div className="detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <strong>Address</strong>
                      <span>45 4th Ave, Welgedacht<br/>Springs, 1559</span>
                    </div>
                  </div>

                  <div className="detail-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <div>
                      <strong>Hours</strong>
                      <span>Open 7 Days a Week<br/>By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}