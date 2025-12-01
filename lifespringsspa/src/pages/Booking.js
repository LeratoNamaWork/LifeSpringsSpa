import React, { useState } from 'react';
import './Booking.css';

export default function Booking() {
  const [form, setForm] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    service: '', 
    date: '',
    time: '',
    location: '',
    notes: '' 
  });

  const services = [
    'Therapeutic Massage',
    'Signature Facial',
    'Lash Extensions',
    'Brow Sculpting',
    'Luxury Manicure',
    'Spa Pedicure',
    'Bridal Makeup',
    'Couples Massage',
    'Corporate Wellness',
    'Other (Please specify in notes)'
  ];

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Booking Submitted:', form);
    alert('Thank you for your booking request! We will contact you within 2 hours to confirm your appointment.');
    setForm({ 
      name: '', 
      phone: '', 
      email: '', 
      service: '', 
      date: '',
      time: '',
      location: '',
      notes: '' 
    });
  }

  return (
    <section className="booking-page">
      {/* Hero Section */}
      <div className="booking-hero">
        <div className="booking-hero-overlay"></div>
        <div className="container">
          <div className="booking-hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Book Your Experience
            </div>
            <h1>Reserve Your Treatment</h1>
            <p>Begin your journey to relaxation and renewal</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="booking-main">
        <div className="container">
          {/* Quick Info Cards */}
          <div className="quick-info-grid">
            <div className="quick-info-card">
              <div className="quick-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Quick Response</h3>
              <p>Within 2 hours</p>
            </div>

            <div className="quick-info-card">
              <div className="quick-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3>Safety First</h3>
              <p>Sterilized equipment</p>
            </div>

            <div className="quick-info-card">
              <div className="quick-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3>Group Bookings</h3>
              <p>Special rates available</p>
            </div>
          </div>

          {/* Booking Content */}
          <div className="booking-content">
            {/* Booking Form */}
            <div className="form-section-wrapper">
              <div className="section-label">
                <div className="label-line"></div>
                <span>Make A Reservation</span>
              </div>
              <h2>Book Your Appointment</h2>
              <p className="form-intro">
                Fill out the form below to request your appointment. We'll confirm 
                availability and get back to you shortly.
              </p>

              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-section">
                  <h3>Personal Information</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
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
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-section">
                  <h3>Treatment Details</h3>
                  <div className="form-group">
                    <label htmlFor="service">Desired Service *</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Preferred Date *</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="time">Preferred Time *</label>
                      <select
                        id="time"
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select time</option>
                        <option value="08:00">8:00 AM</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Service Location *</label>
                    <select
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select location type</option>
                      <option value="home">My Home</option>
                      <option value="hotel">Hotel</option>
                      <option value="office">Office</option>
                      <option value="event">Event Venue</option>
                      <option value="spa">Visit Our Location</option>
                    </select>
                  </div>
                </div>

                <div className="form-section">
                  <h3>Additional Information</h3>
                  <div className="form-group">
                    <label htmlFor="notes">Special Requests or Notes</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Any specific requirements, allergies, or event details..."
                    ></textarea>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-submit">
                    Submit Booking Request
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="info-sidebar">
              <div className="info-card">
                <div className="section-label">
                  <div className="label-line"></div>
                  <span>Quick Contact</span>
                </div>
                <h2>Need Help?</h2>

                <div className="contact-methods">
                  <a href="tel:0677622956" className="contact-method">
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div className="method-details">
                      <strong>Call Us</strong>
                      <span>067 762 2956</span>
                    </div>
                  </a>

                  <button 
                    type="button" 
                    className="contact-method whatsapp-btn"
                    onClick={() => window.open('https://wa.me/27677622956', '_blank')}
                  >
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                      </svg>
                    </div>
                    <div className="method-details">
                      <strong>WhatsApp</strong>
                      <span>Message us directly</span>
                    </div>
                  </button>

                  <a href="mailto:info@lifespringspa.com" className="contact-method">
                    <div className="method-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div className="method-details">
                      <strong>Email</strong>
                      <span>info@lifespringspa.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="info-card important-info">
                <h3>Important Information</h3>
                <div className="info-list">
                  <div className="info-list-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>All equipment is sterilized between clients</p>
                  </div>
                  <div className="info-list-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>We use premium, hypoallergenic products</p>
                  </div>
                  <div className="info-list-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>24-hour cancellation policy applies</p>
                  </div>
                  <div className="info-list-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p>Special rates for groups and events</p>
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