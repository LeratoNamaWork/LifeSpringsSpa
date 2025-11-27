import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <div className="services-hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              Our Treatments
            </div>
            <h1>Experience Luxury Wellness</h1>
            <p>Premium spa services tailored to your needs</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="services-main">
        <div className="container">
          {/* Services Overview */}
          <div className="services-intro">
            <div className="intro-content">
              <div className="section-label">
                <div className="label-line"></div>
                <span>What We Offer</span>
              </div>
              <h2>Our Services</h2>
              <div className="services-list">
                <ul>
                  <li>Massages</li>
                  <li>Facials</li>
                  <li>Waxing</li>
                  <li>Manicures</li>
                  <li>Pedicures</li>
                  <li>Lashes & Brow Tint</li>
                </ul>
              </div>
            </div>

            <div className="intro-content">
              <div className="section-label">
                <div className="label-line"></div>
                <span>Who We Serve</span>
              </div>
              <h2>We Cater For</h2>
              <div className="services-list">
                <ul>
                  <li>Individuals</li>
                  <li>Couples</li>
                  <li>Bridal Shower</li>
                  <li>Weddings</li>
                  <li>Baby Shower</li>
                  <li>Corporate Event & Golf Days</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile Service Highlight */}
          <div className="mobile-service-section">
            <div className="mobile-service-image">
              <img 
                src="/images/spa-treatment-1.jpg" 
                alt="Mobile spa service"
                onError={(e) => {
                  e.target.src = '/images/placeholder-spa.jpg';
                }}
              />
              <div className="image-overlay"></div>
            </div>
            
            <div className="mobile-service-content">
              <div className="section-label">
                <div className="label-line"></div>
                <span>Convenience Meets Luxury</span>
              </div>
              <h2>LifeSpring Mobile Spa</h2>
              <p className="lead-text">
                Services are provided in the comfort of your home, office, hotel or other venues.
              </p>
              <p>
                We bring the spa to you, transforming your space into a relax station. Experience 
                the same premium treatments and professional care without leaving your preferred location.
              </p>
              
              <div className="contact-info">
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>Whatsapp & Calls: 0877622956</span>
                </div>
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span>lifesprings_sa</span>
                </div>
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
                  </svg>
                  <span>LifeSpring Spa</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="detailed-services">
            <div className="section-header-center">
              <div className="accent-line-center"></div>
              <h2>Featured Treatments</h2>
              <p>Discover our signature wellness experiences</p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <img 
                    src="/images/massage-service.jpg" 
                    alt="Therapeutic Massage"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="service-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/>
                    </svg>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Therapeutic Massage</h3>
                  <p>Expert techniques to melt away tension and restore muscular balance through tailored pressure and rhythmic movements.</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img 
                    src="/images/facial-service.jpg" 
                    alt="Signature Facials"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="service-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Signature Facials</h3>
                  <p>Advanced skincare treatments using premium products to address specific concerns and reveal radiant complexion.</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img 
                    src="/images/beauty-service.jpg" 
                    alt="Lash Artistry"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="service-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Lash & Brow Services</h3>
                  <p>Precision lash extensions, lifts, and brow tinting designed to enhance your natural beauty with flawless results.</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img 
                    src="/images/spa-treatment-2.jpg" 
                    alt="Nail Therapy"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="service-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
                    </svg>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Manicures & Pedicures</h3>
                  <p>Luxurious hand and foot treatments combining therapeutic techniques with elegant nail artistry.</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img 
                    src="/images/spa-treatment-3.jpg" 
                    alt="Waxing Services"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="service-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Professional Waxing</h3>
                  <p>Gentle, effective hair removal services using premium wax for smooth, long-lasting results.</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-image">
                  <img 
                    src="/images/review-1.jpg" 
                    alt="Special Occasion Services"
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="service-overlay">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                    </svg>
                  </div>
                </div>
                <div className="service-content">
                  <h3>Special Occasions</h3>
                  <p>Complete beauty packages for weddings, bridal showers, baby showers, and corporate events.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}