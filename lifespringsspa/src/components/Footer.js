import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-logo-section">
              <div className="footer-logo-text">LifeSpring</div>
              <p className="footer-description">Luxury mobile spa experiences delivered to your sanctuary</p>
            </div>
            
            <div className="footer-social-icons">
              <a href="#" className="footer-social-icon" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.555.556.9 1.112 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.556.555-1.112.9-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
                </svg>
              </a>
              <a href="#" className="footer-social-icon" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Contact Info</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>45 4th Ave, Welgedacht, Springs, 1559</span>
              </div>
              <div className="footer-contact-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>067 762 2956</span>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Quick Links</h4>
            <nav className="footer-links-nav">
              <a href="/services" className="footer-nav-link">Our Services</a>
              <a href="/gallery" className="footer-nav-link">Treatment Gallery</a>
              <a href="/booking" className="footer-nav-link">Book Appointment</a>
              <a href="/contact" className="footer-nav-link">Get In Touch</a>
            </nav>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-title">Business Hours</h4>
            <div className="footer-business-hours">
              <div className="footer-hours-item">
                <span className="footer-hours-day">Monday - Friday</span>
                <span className="footer-hours-time">8:00 AM - 6:00 PM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Saturday</span>
                <span className="footer-hours-time">9:00 AM - 4:00 PM</span>
              </div>
              <div className="footer-hours-item">
                <span className="footer-hours-day">Sunday</span>
                <span className="footer-hours-time">By Appointment</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-section">
          <div className="footer-copyright-text">
            &copy; 2024 LifeSpring Spa. All rights reserved.
          </div>
          <div className="footer-credits-text">
            Crafted with serenity in mind
          </div>
        </div>
      </div>
    </footer>
  );
}