'use client';
import { useState, useEffect } from 'react';
import { Home, Factory, Sofa, Handshake, Image as ImageIcon, Star, Phone, MessageCircle, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    if (next) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    const scrollY = Math.abs(parseInt(document.body.style.top || '0'));
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);
  };

  return (
    <>
      <header id="navbar" role="banner" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="#hero" className="nav-logo" aria-label="GRACET Furniture - Home">
            <img src="images/logo.png" alt="GRACE Logo" className="logo-img" />
          </a>

          <nav className="nav-links" role="navigation" aria-label="Primary navigation">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#categories">Products</a>
            <a href="#business">B2B Solutions</a>
            <a href="#spotlight">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <button 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            id="hamburger-btn" 
            aria-label="Open navigation menu" 
            aria-expanded={isOpen} 
            aria-controls="mobile-drawer"
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`drawer-overlay ${isOpen ? 'show' : ''}`} id="drawer-overlay" aria-hidden="true" onClick={closeMenu}></div>
      <nav className={`mobile-drawer ${isOpen ? 'open' : ''}`} id="mobile-drawer" aria-label="Mobile navigation" role="navigation">
        <button className="drawer-close" id="drawer-close-btn" aria-label="Close menu" onClick={closeMenu}>
          <X width="28" height="28" />
        </button>
        <div className="drawer-links">
          <a href="#hero" onClick={closeMenu}><Home width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Home</a>
          <a href="#about" onClick={closeMenu}><Factory width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> About Us</a>
          <a href="#categories" onClick={closeMenu}><Sofa width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Products</a>
          <a href="#business" onClick={closeMenu}><Handshake width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> B2B Solutions</a>
          <a href="#spotlight" onClick={closeMenu}><ImageIcon width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Gallery</a>
          <a href="#usp" onClick={closeMenu}><Star width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Why Choose Us</a>
          <a href="#contact" onClick={closeMenu}><Phone width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Contact</a>
        </div>
        <div className="drawer-contact">
          <a href="tel:+919842025243"><Phone width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> +91 98420 25243</a>
          <a href="https://wa.me/919842025243" target="_blank" rel="noopener"><MessageCircle width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> WhatsApp Us</a>
          <div style={{ marginTop: '20px' }}>
            <a href="#contact" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={closeMenu}>Get a Quote</a>
          </div>
        </div>
      </nav>
    </>
  );
}
