'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const isGallery = pathname === '/gallery';

  const getHref = (hash: string) => {
    if (isGallery) {
      if (hash === '#contact') return '#contact';
      return `/${hash}`;
    }
    if (hash === '#contact') return '/gallery#contact';
    return hash;
  };

  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Link href="/">
                <img src="/images/logo.png" alt="GRACE Logo" className="logo-img" />
              </Link>
            </div>
            <p>Factory-direct furniture from Salem, TN. Hotels, showrooms, designers &amp; corporates supplied pan-India.</p>
            <div className="footer-socials" role="list" aria-label="Social media links">
              <a href="https://www.facebook.com/profile.php?id=61594065782162" className="social-btn" role="listitem" aria-label="Follow GRACE™ on Facebook" target="_blank" rel="noopener">f</a>
              <a href="https://www.instagram.com/grace_furnituresalem/" className="social-btn" role="listitem" aria-label="Follow GRACE™ on Instagram" target="_blank" rel="noopener">in</a>
              <a href="https://wa.me/919842025243" className="social-btn" role="listitem" aria-label="Chat with GRACE™ on WhatsApp" style={{ fontSize: '0.75rem' }} target="_blank" rel="noopener">WA</a>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="footer-col" aria-label="Quick links">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href={isGallery ? '/' : '#hero'}>Home</a></li>
              <li><a href={getHref('#about')}>About Us</a></li>
              <li><a href={getHref('#categories')}>Products</a></li>
              <li><a href={getHref('#business')}>B2B Solutions</a></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><a href={getHref('#usp')}>Why Choose Us</a></li>
              <li><a href={getHref('#contact')}>Contact</a></li>
            </ul>
          </nav>

          {/* Product Categories */}
          <nav className="footer-col" aria-label="Product categories">
            <h4>Products</h4>
            <ul className="footer-links">
              <li><a href={getHref('#categories')}>Wardrobes &amp; Storage</a></li>
              <li><a href={getHref('#categories')}>Bookshelves &amp; Cabinets</a></li>
              <li><a href={getHref('#categories')}>Office Furniture</a></li>
              <li><a href={getHref('#categories')}>Bedroom Furniture</a></li>
              <li><a href={getHref('#categories')}>Dining Furniture</a></li>
              <li><a href={getHref('#categories')}>Sofa Sets</a></li>
              <li><Link href="/gallery">Dressing Tables</Link></li>
              <li><a href={getHref('#contact')}>Custom Orders</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true"><Phone width="14" height="14" /></span>
              <div className="footer-contact-text">
                <a href="tel:+919842025243">+91 98420 25243</a><br />
                <a href="tel:+917305010542">+91 73050 10542</a><br />
                <a href="tel:+917305010545">+91 73050 10545</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true"><MapPin width="14" height="14" /></span>
              <div className="footer-contact-text">
                Plot No: P-33, Door No: 120/2,<br />
                Salem Industrial Co-operative Estate,<br />
                Salem–Ulundurpettai Highway,<br />
                Udayapatti, Salem, TN – 636014
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true"><Clock width="14" height="14" /></span>
              <div className="footer-contact-text">
                Mon–Fri: 9:00 AM – 6:30 PM<br />
                Saturday: 9:00 AM – 5:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container footer-bottom">
          <p className="footer-copy">
            © 2026 <span>GRACE™ Furniture</span>. All Rights Reserved. Crafted with excellence in Salem, Tamil Nadu.
          </p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
            <a href="#">Sitemap</a>
          </nav>
        </div>
      </div>

      {/* Powered By */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)', textAlign: 'center', padding: '12px 0', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>
        Powered by{' '}
        <a
          href="https://genaitechnology.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="powered-by-link"
        >
          Gen-AI Tech | IT Solutions Salem
        </a>
      </div>
    </footer>
  );
}
