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
      <div className="container">
        <div className="booking-header">
          <div className="accent-line-center"></div>
          <h1>Reserve Your Treatment</h1>
          <p className="booking-subtitle">Begin your journey to relaxation and renewal</p>
        </div>

        <div className="booking-grid">
          <div className="booking-form-section">
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
                    rows="4"
                    placeholder="Any specific requirements, allergies, or event details..."
                  ></textarea>
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  Submit Booking Request
                </button>
                <button 
                  type="button" 
                  className="btn-secondary"
                  onClick={() => window.open('https://wa.me/27677622956', '_blank')}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                  Message on WhatsApp
                </button>
              </div>
            </form>
          </div>

          <div className="booking-info">
            <div className="info-card">
              <h3>Booking Information</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4>Response Time</h4>
                  <p>We typically respond to booking requests within 2 hours during business hours</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4>Safety & Hygiene</h4>
                  <p>All our equipment is sterilized between clients. We use premium, hypoallergenic products</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                </div>
                <div>
                  <h4>Group & Events</h4>
                  <p>Special rates available for bridal parties, corporate events, and group bookings</p>
                </div>
              </div>

              <div className="contact-quick">
                <h4>Prefer to Call?</h4>
                <p>Speak directly with our wellness coordinator</p>
                <a href="tel:0677622956" className="phone-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  067 762 2956
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}