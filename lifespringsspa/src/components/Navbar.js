import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="logo-container">
            <img 
              src="/lifelogo.png" 
              alt="LifeSpring Spa" 
              className="logo"
              onError={(e) => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                parent.innerHTML = `
                  <div class="logo-fallback" style="
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #3D7771;
                    font-size: 20px;
                    font-weight: bold;
                  ">LS</div>
                `;
              }}
            />
          </div>
          <div className="brand-text">
            <div className="brand-name">LifeSpring</div>
            <div className="brand-tagline">Luxury Mobile Spa</div>
          </div>
        </div>

        <button 
          className={`nav-toggle ${open ? 'active' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${open ? 'active' : ''}`}>
          <NavLink to="/" end className="nav-link" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" className="nav-link" onClick={() => setOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/gallery" className="nav-link" onClick={() => setOpen(false)}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
          <NavLink to="/booking" className="nav-link booking-cta" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            Book Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
}