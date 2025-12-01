import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  
  const reviews = [
    {
      name: "Winnie Mathye",
      text: "My first time spa massage. It was a wow didn't expect such treatment ever. With my daughter it was epic day ever. Definitely come back soon. Happy clients. Oh how can I forget the drinks they offered cherry on top.",
      rating: 5,
      image: "/winnie.png"
    },
     {
      name: "Diketso Khiba",
      text: "LifeSpring Wellness and Spa is definitely where you want to go to relax and unwind. The staff is super friendly and at your service to assist you on the go. I met Nqobile - oh what an amazing soul she is God bless her and the business.",
      rating: 5,
      image: "/dikesto.png"
    },
     {
      name: "Athabile Mrubata",
      text: "Nqobile's hands are magnificent. I went 4 times during my pregnancy and I also surprised my mom on her birthday - she was ecstatic. She could not believe someone is capable of doing what Nqobile does with her hands. Super professional and friendly!",
      rating: 5,
      image: "/athabile.png"
    },
     {
      name: "Fungi Teke",
      text: "So welcoming and the place was so neat. This was my first time getting my lashes done and Nqobile made sure I was comfortable every step of the way and I'm happy with the results. Great service indeed.",
      rating: 5,
      image: "/fungi.png"
    },
    {
      name: "Palesa Lesarh",
      text: "The spa was a five star. Me and my friend were welcomed by smiles and friendly faces. You won't regret going there, you will enjoy each and every moment. The massage was 10/10, I can really recommend Life spring wellness spa.",
      rating: 5,
      image: "/palesa.png"
    },
    {
      name: "Thando Lindokuhle",
      text: "I feel so relaxed and rejuvenated. Thank you for your amazing work today. My back, neck and shoulders feel so much better. Thank you so much for a wonderful and relaxing experience, I'm already looking forward for my next visit.",
      rating: 5,
      image: "/thandolindo.png"
    }
   
    
   
   
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  return (
    <section className="home">
      {/* Luxury Hero Section */}
      <div className="hero-luxury">
        <div className="hero-background-image"></div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
              Luxury Wellness & Spa
            </div>
            
            <h1 className="hero-title">
              Your Sanctuary of
              <span className="highlight"> Serenity</span>
            </h1>
            
            <p className="hero-subtitle">
              Experience premium spa treatments in our tranquil Springs location, 
              or enjoy our exclusive mobile services wherever you are.
            </p>

            <div className="hero-buttons">
              <button className="btn-book" onClick={() => navigate('/booking')}>
                Book Appointment
              </button>
              <button className="btn-explore" onClick={() => navigate('/services')}>
                Explore Services
              </button>
            </div>

            <div className="hero-info">
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>45 4th Ave, Springs</span>
              </div>
              <div className="info-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>Open 7 Days a Week</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="section-header">
            <div className="accent-line-center"></div>
            <h2>Why Choose LifeSpring</h2>
            <p>Excellence in every detail of your wellness journey</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3>Certified Professionals</h3>
              <p>Our therapists are highly trained and certified in their respective specialties</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3>Premium Products</h3>
              <p>We use only the highest quality, professional-grade products and equipment</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3>Two Ways to Enjoy</h3>
              <p>Visit our beautiful spa in Springs or enjoy mobile services at your location</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="services-preview-section">
        <div className="container">
          <div className="section-header">
            <div className="accent-line-center"></div>
            <h2>Signature Treatments</h2>
            <p>Professional services for complete mind and body wellness</p>
          </div>

          <div className="services-preview-grid">
            <div className="service-preview-card">
              <div className="service-image">
                <img src="/massage.png" alt="Therapeutic Massage" />
              </div>
              <div className="service-content">
                <h3>Therapeutic Massage</h3>
                <p>Release tension and restore balance with our expert massage therapies</p>
                <button onClick={() => navigate('/services')}>Learn More</button>
              </div>
            </div>

            <div className="service-preview-card">
              <div className="service-image">
                <img src="/skincare.png" alt="Signature Facials" />
              </div>
              <div className="service-content">
                <h3>Signature Facials</h3>
                <p>Customized skincare treatments for radiant, rejuvenated complexion</p>
                <button onClick={() => navigate('/services')}>Learn More</button>
              </div>
            </div>

            <div className="service-preview-card">
              <div className="service-image">
                <img src="/fungi.png" alt="Beauty Enhancement" />
              </div>
              <div className="service-content">
                <h3>Beauty Enhancement</h3>
                <p>Lashes, brows, nails and makeup for special occasions</p>
                <button onClick={() => navigate('/services')}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Reviews Section */}
      <div className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="accent-line-center"></div>
            <h2>Client Experiences</h2>
            <p>Real moments, real transformations at LifeSpring Wellness & Spa</p>
          </div>

          <div className="reviews-list">
            {reviews.map((review, index) => (
              <div className="review-item" key={index}>
                <div className="review-image">
                  <img 
                    src={review.image} 
                    alt={`${review.name} at the spa`}
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="review-details">
                  <div className="review-header">
                    <div>
                      <h4>{review.name}</h4>
                      <div className="stars">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    <div className="quote-icon">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                      </svg>
                    </div>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience True Relaxation?</h2>
            <p>Visit our spa in Springs or book our mobile services for the ultimate wellness experience</p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => navigate('/booking')}>
                Book Your Visit
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}