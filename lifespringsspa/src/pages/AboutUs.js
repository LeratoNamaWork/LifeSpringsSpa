import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-us">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="container">
          <div className="about-hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              Our Story
            </div>
            <h1>Welcome to LifeSpring</h1>
            <p>Where wellness meets luxury in the heart of Springs</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-main">
        <div className="container">
          {/* Story Section */}
          <div className="about-story">
            <div className="story-images">
              <div className="story-image main-image">
                <img 
                  src="/images/spa-interior.jpg" 
                  alt="Luxury spa interior"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-spa.jpg';
                  }}
                />
                <div className="image-overlay"></div>
              </div>
              <div className="story-image accent-image">
                <img 
                  src="/images/spa-treatment-1.jpg" 
                  alt="Relaxing treatment"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-spa.jpg';
                  }}
                />
                <div className="image-overlay"></div>
              </div>
            </div>
            
            <div className="story-content">
              <div className="section-label">
                <div className="label-line"></div>
                <span>Our Philosophy</span>
              </div>
              <h2>The LifeSpring Experience</h2>
              <p className="lead-text">
                At LifeSpring Wellness & Spa, we believe that true relaxation goes beyond 
                the treatment room. It's about creating a holistic experience that rejuvenates 
                your mind, body, and spirit.
              </p>
              <p>
                Founded in Springs, we've built our reputation on exceptional service, skilled 
                therapists, and a genuine commitment to your wellbeing. Whether you visit our 
                tranquil spa or enjoy our mobile services, you'll experience the same level of 
                care and attention to detail.
              </p>
              <p>
                Our team of certified professionals brings years of expertise and a passion 
                for wellness to every treatment. We use only premium products and maintain 
                the highest standards of hygiene and professionalism.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="about-values">
            <div className="section-header-center">
              <div className="accent-line-center"></div>
              <h2>What Sets Us Apart</h2>
              <p>Our commitment to excellence in every detail</p>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <h3>Expert Team</h3>
                <p>Certified therapists with extensive training and a passion for wellness</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3>Premium Quality</h3>
                <p>Only the finest organic products and state-of-the-art equipment</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                  </svg>
                </div>
                <h3>Mobile Services</h3>
                <p>Luxury spa experience delivered to your home, hotel, or office</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3>Flexible Hours</h3>
                <p>Open 7 days a week to accommodate your busy schedule</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <h3>Personalized Care</h3>
                <p>Customized treatments tailored to your unique needs and preferences</p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <h3>Trusted Reputation</h3>
                <p>Highly rated by clients for exceptional service and results</p>
              </div>
            </div>
          </div>

          {/* Gallery Preview */}
          <div className="about-gallery">
            <div className="section-header-center">
              <div className="accent-line-center"></div>
              <h2>Our Space</h2>
              <p>A glimpse into our serene sanctuary</p>
            </div>

            <div className="gallery-grid">
              <div className="gallery-item">
                <img 
                  src="/images/spa-treatment-2.jpg" 
                  alt="Treatment room"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-spa.jpg';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/spa-treatment-3.jpg" 
                  alt="Relaxation area"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-spa.jpg';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/massage-service.jpg" 
                  alt="Massage therapy"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-spa.jpg';
                  }}
                />
              </div>
              <div className="gallery-item">
                <img 
                  src="/images/facial-service.jpg" 
                  alt="Facial treatment"
                  onError={(e) => {
                    e.target.src = '/images/placeholder-spa.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}