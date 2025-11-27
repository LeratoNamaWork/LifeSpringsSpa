import React, { useState } from 'react';
import './Gallery.css';

const images = [
  {
    url: '/images/spa-treatment-1.jpg',
    category: 'Therapeutic Massage'
  },
  {
    url: '/images/spa-treatment-2.jpg',
    category: 'Relaxation Therapy'
  },
  {
    url: '/images/spa-treatment-3.jpg',
    category: 'Beauty Treatments'
  },
  {
    url: '/images/massage-service.jpg',
    category: 'Massage Services'
  },
  {
    url: '/images/facial-service.jpg',
    category: 'Facial Care'
  },
  {
    url: '/images/beauty-service.jpg',
    category: 'Beauty Enhancement'
  },
  {
    url: '/images/review-1.jpg',
    category: 'Client Experience'
  },
  {
    url: '/images/review-2.jpg',
    category: 'Spa Moments'
  },
  {
    url: '/images/review-3.jpg',
    category: 'Wellness Journey'
  },
  {
    url: '/images/review-4.jpg',
    category: 'Pampering Session'
  },
  {
    url: '/images/review-5.jpg',
    category: 'Lash Services'
  },
  {
    url: '/images/review-6.jpg',
    category: 'Special Occasions'
  }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="gallery-page">
      {/* Hero Section */}
      <div className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="container">
          <div className="gallery-hero-content">
            <div className="hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Our Gallery
            </div>
            <h1>Moments of Tranquility</h1>
            <p>Experience the LifeSpring difference through our visual journey</p>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="gallery-main">
        <div className="container">
          <div className="gallery-intro">
            <p>
              Step into our world of wellness and beauty. Browse through our collection 
              of serene moments, happy clients, and stunning transformations at LifeSpring 
              Wellness & Spa.
            </p>
          </div>

          <div className="gallery-grid">
            {images.map((image, index) => (
              <div 
                className="gallery-item" 
                key={index}
                onClick={() => openLightbox(index)}
              >
                <div className="image-wrapper">
                  <img 
                    src={image.url} 
                    alt={image.category}
                    onError={(e) => {
                      e.target.src = '/images/placeholder-spa.jpg';
                    }}
                  />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="image-category">{image.category}</span>
                      <div className="zoom-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                          <path d="M15 11h-4m2-2v4"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentImage].url} 
              alt={images[currentImage].category}
              onError={(e) => {
                e.target.src = '/images/placeholder-spa.jpg';
              }}
            />
            <div className="lightbox-caption">
              <span>{images[currentImage].category}</span>
              <span className="image-counter">{currentImage + 1} / {images.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}