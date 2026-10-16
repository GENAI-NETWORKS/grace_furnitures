'use client';

import { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';

interface StyleItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  features: string[];
}

const STYLES: StyleItem[] = [
  {
    id: 'style-1',
    tag: 'Style 01',
    title: 'Modern & Minimal',
    desc: 'Matte finish. Integrated LED. Perfect for boutique hotels.',
    image: '/images/spotlight_1.jpg',
    features: ['Matte Polyurethane Finish', 'Touch-sensor Integrated LED', 'Soft-close Drawers', 'Commercial Warranty']
  },
  {
    id: 'style-2',
    tag: 'Style 02',
    title: 'Classic Elegance',
    desc: 'Walnut wood. Brass hardware. Built for luxury properties.',
    image: '/images/spotlight_2.jpg',
    features: ['Solid Walnut Wood Trim', 'Antique Brass Handles', 'Beveled Mirror Glass', 'Reinforced Joinery']
  },
  {
    id: 'style-3',
    tag: 'Style 03',
    title: 'Trendy & Versatile',
    desc: 'Multi-tonal. Dual mirrors. Top seller in showrooms.',
    image: '/images/spotlight_3.jpg',
    features: ['Dual-tone Veneer Finish', 'Twin Articulated Mirrors', 'Modular Compartments', 'Custom Dimensions']
  },
  {
    id: 'style-4',
    tag: 'Style 04',
    title: 'Rich & Premium',
    desc: 'Gold accents. Tufted seating. Our flagship collection.',
    image: '/images/spotlight_4.jpg',
    features: ['Brushed Gold Metallic PVD', 'Matching Tufted Stool', 'High-density Velvet', 'Bespoke Customization']
  }
];

export default function GalleryShowcase() {
  const [activeItem, setActiveItem] = useState<StyleItem | null>(null);

  const openModal = (item: StyleItem) => {
    setActiveItem(item);
  };

  const closeModal = () => {
    setActiveItem(null);
  };

  return (
    <>
      <section id="spotlight" aria-labelledby="spotlight-title" style={{ background: 'var(--cream)', padding: '40px 0 80px' }}>
        <div className="container">
          <div className="spotlight-header">
            <div className="section-label">Featured Collection</div>
            <h2 className="section-title" id="spotlight-title">
              Dressing Tables for <span className="script">Modern Spaces</span>
            </h2>

            <p className="section-sub" style={{ textAlign: 'center', margin: '16px auto 0' }}>
              4 styles. Hotel &amp; showroom-grade. Custom dimensions on request.
            </p>
          </div>

          {/* Spotlight Hero */}
          <div className="spotlight-hero">
            <img
              src="/images/spotlight_hero.jpg"
              alt="Dressing Tables for Modern Spaces"
              className="spotlight-hero-img"
              loading="lazy"
            />
            <div className="spotlight-hero-overlay" aria-hidden="true" />
            <div className="spotlight-hero-text">
              <div className="section-label dark">Signature Collection</div>
              <h3 className="spotlight-hero-title">
                Dressing Tables<br />for <span className="script-gold">Modern Spaces</span>
              </h3>
              <a href="#contact" className="btn btn-gold">Enquire About This Collection</a>
            </div>
          </div>

          {/* Style Variant Cards */}
          <div className="spotlight-grid" role="list">
            {STYLES.map((style) => (
              <div
                key={style.id}
                className="spot-card"
                role="listitem"
                tabIndex={0}
                onClick={() => openModal(style)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(style);
                  }
                }}
                style={{ cursor: 'pointer' }}
                title="Click to view details"
              >
                <div
                  className="spot-card-img"
                  role="img"
                  aria-label={`${style.title} dressing table style`}
                  style={{
                    background: `url('${style.image}') center/cover no-repeat`,
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      background: 'rgba(26,21,18,0.7)',
                      borderRadius: '50%',
                      padding: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold)'
                    }}
                    aria-hidden="true"
                  >
                    <ZoomIn width={14} height={14} />
                  </div>
                </div>
                <div className="spot-card-body">
                  <span className="spot-card-tag">{style.tag}</span>
                  <h4 className="spot-card-title">{style.title}</h4>
                  <p className="spot-card-desc">{style.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-style-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: '#1a1512',
              border: '1px solid rgba(245, 197, 24, 0.3)',
              borderRadius: '16px',
              maxWidth: '800px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              position: 'relative',
              animation: 'modalFadeIn 0.25s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: 'rgba(26,21,18,0.8)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X width={18} height={18} />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div style={{ position: 'relative', minHeight: '280px', background: '#000' }}>
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              <div style={{ padding: '32px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  {activeItem.tag}
                </span>
                <h3 id="modal-style-title" style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: '#fff', margin: '8px 0 12px' }}>
                  {activeItem.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {activeItem.desc}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Specifications &amp; Highlights:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {activeItem.features.map((feat, idx) => (
                      <li key={idx} style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--crimson)', fontWeight: 'bold' }}>•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  onClick={closeModal}
                  className="btn btn-crimson"
                  style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Request Quote for this Style <ArrowRight width={16} height={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
