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
      <div className="container">
        <div className="contact-header">
          <div className="accent-line-center"></div>
          <h1>Get In Touch</h1>
          <p className="contact-subtitle">We're here to help you plan your perfect wellness experience</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-section">
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
                    placeholder="Enter your full name"
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
                    placeholder="Your contact number"
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
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Information</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="bridal">Bridal Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us about your wellness needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary">
                Send Message
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                </svg>
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-card">
              <h3>Contact Information</h3>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Address</div>
                  <div className="contact-value">45 4th Ave, Welgedacht, Springs, 1559</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Phone / WhatsApp</div>
                  <div className="contact-value">067 762 2956</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                </div>
                <div>
                  <div className="contact-label">Email</div>
                  <div className="contact-value">info@lifespringspa.com</div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a href="#" className="social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                    Instagram
                  </a>
                  <a href="#" className="social-link">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            <div className="map-container">
              <iframe
                title="spa-location-map"
                width="100%"
                height="200"
                frameBorder="0"
                src="https://maps.google.com/maps?q=45%204th%20Ave%20Welgedacht%20Springs&t=&z=13&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}