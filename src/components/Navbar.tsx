'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Factory, Sofa, Handshake, Image as ImageIcon, Star, Phone, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const isGallery = Boolean(pathname && (pathname === '/gallery' || pathname.startsWith('/gallery')));
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

  const getHref = (hash: string) => {
    if (isGallery) {
      if (hash === '#contact') return '#contact';
      return `/${hash}`;
    }
    if (hash === '#contact') return '/gallery#contact';
    return hash;
  };

  return (
    <>
      <header id="navbar" role="banner" className={`${scrolled ? 'scrolled' : ''} ${isGallery ? 'nav-solid scrolled' : ''}`.trim()}>
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" aria-label="GRACE Furniture - Home">
            <img src="/images/logo.png" alt="GRACE Logo" className="logo-img" />
          </Link>

          <nav className="nav-links" role="navigation" aria-label="Primary navigation">
            <a href={isGallery ? '/' : '#hero'}>Home</a>
            <a href={getHref('#about')}>About</a>
            <a href={getHref('#categories')}>Products</a>
            <a href={getHref('#business')}>B2B Solutions</a>
            <Link href={isGallery ? '#spotlight' : '/gallery'} className={isGallery ? 'active' : ''}>Gallery</Link>
            <a href={getHref('#contact')}>Contact</a>
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
          <a href={isGallery ? '/' : '#hero'} onClick={closeMenu}><Home width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Home</a>
          <a href={getHref('#about')} onClick={closeMenu}><Factory width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> About Us</a>
          <a href={getHref('#categories')} onClick={closeMenu}><Sofa width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Products</a>
          <a href={getHref('#business')} onClick={closeMenu}><Handshake width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> B2B Solutions</a>
          <Link href={isGallery ? '#spotlight' : '/gallery'} className={isGallery ? 'active' : ''} onClick={closeMenu}><ImageIcon width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Gallery</Link>
          <a href={getHref('#usp')} onClick={closeMenu}><Star width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Why Choose Us</a>
          <a href={getHref('#contact')} onClick={closeMenu}><Phone width="18" height="18" style={{ verticalAlign: '-4px', marginRight: '6px' }} /> Contact</a>
        </div>
      </nav>
    </>
  );
}
