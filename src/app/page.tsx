import Navbar from '@/components/Navbar';
import UspSection from '@/components/UspSection';
import Footer from '@/components/Footer';

import { X, Home, Factory, Sofa, Handshake, Image, Star, Phone, MessageCircle, Award, Zap, Package, Target, MapPin, Building2, BedDouble, Utensils, DoorOpen, Settings, Palette, CheckCircle, Clock } from 'lucide-react';


export default function HomePage() {
  return (
    <>



      {/*  ================================================
     NAVBAR
     ================================================  */}
      <Navbar />

      {/*  ================================================
     HERO SECTION
     ================================================  */}
      <section id="hero" aria-label="Hero">
        <div className="hero-bg" role="presentation" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-layout">

            {/* Left Content */}
            <div className="hero-content">
              <div className="hero-eyebrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                Factory-Direct · Salem, Tamil Nadu
              </div>

              <h1 className="hero-headline" id="hero-headline">
                Premium Furniture for <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Every Space</span>
              </h1>

              <p className="hero-sub">Factory-direct. Bulk-ready. Custom finishes. Pan-India delivery.</p>

              <div className="hero-trust" role="list" aria-label="Trust badges">
                <div className="trust-badge" role="listitem">
                  <span className="icon" aria-hidden="true"><Award width="18" height="18" /></span>
                  <span>Premium Quality</span>
                </div>
                <div className="trust-badge" role="listitem">
                  <span className="icon" aria-hidden="true"><Zap width="18" height="18" /></span>
                  <span>On-Time Delivery</span>
                </div>
                <div className="trust-badge" role="listitem">
                  <span className="icon" aria-hidden="true"><Handshake width="18" height="18" /></span>
                  <span>Trusted Partner</span>
                </div>
              </div>
            </div>

            {/* Right Image Showcase with Unique Style */}
            <div className="hero-showcase" aria-label="GRACE factory showroom showcase">
              <div className="hero-showcase-backdrop" aria-hidden="true"></div>
              
              <div className="hero-showcase-frame">
                <img
                  src="/images/hero_bg.jpg"
                  alt="GRACE™ Salem factory floor and showroom with handcrafted luxury furniture"
                  className="hero-showcase-img"
                  loading="eager"
                />
                <div className="hero-showcase-overlay" aria-hidden="true"></div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="hero-floating-badge hero-badge-top">
                <span className="hero-badge-icon"><Star width="14" height="14" fill="var(--gold)" /></span>
                <div>
                  <strong className="hero-badge-title">15+ Years</strong>
                  <span className="hero-badge-sub">Factory Excellence</span>
                </div>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="hero-floating-badge hero-badge-bottom">
                <span className="hero-badge-icon"><Factory width="15" height="15" /></span>
                <div>
                  <strong className="hero-badge-title">Direct from Salem</strong>
                  <span className="hero-badge-sub">No Middlemen Markup</span>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="hero-corner-bracket hero-corner-tl" aria-hidden="true"></div>
              <div className="hero-corner-bracket hero-corner-br" aria-hidden="true"></div>
            </div>

          </div>
        </div>
      </section>

      {/*  ================================================
     ABOUT SECTION (brief)
     ================================================  */}
      <section id="about" style={{ "padding": "var(--section-pad) 0", "background": "var(--cream-dark)" }}>
        <div className="container">
          <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "70px", "alignItems": "center" }} className="about-grid">
            <div>
              <div className="section-label">About GRACE™</div>
              <h2 className="section-title">Modern Spaces.<br /><span className="gold">Stronger</span> Businesses.</h2>

              <p className="section-sub" style={{ "marginBottom": "32px" }}>
                Salem-based manufacturer. 15+ years. Supplying hotels, showrooms &amp; designers with factory-direct furniture no middlemen, no compromises.
              </p>

            </div>
            <div style={{ "position": "relative" }}>
              <div style={{ "background": "linear-gradient(135deg,var(--espresso-dark),var(--espresso))", "borderRadius": "var(--radius-xl)", "padding": "40px", "boxShadow": "var(--shadow-lg)", "position": "relative", "overflow": "hidden" }}>
                <div style={{ "position": "absolute", "top": "-20px", "right": "-20px", "width": "120px", "height": "120px", "borderRadius": "50%", "background": "radial-gradient(circle,rgba(245,197,24,0.15),transparent)" }}></div>
                <div style={{ "fontFamily": "Inter,system-ui,sans-serif", "fontSize": "1.3rem", "color": "var(--gold)", "marginBottom": "20px" }}>"Make a Good Choice"</div>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "16px" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "background": "rgba(255,255,255,0.04)", "borderRadius": "var(--radius-sm)", "border": "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ "fontSize": "1.5rem", "display": "flex", "alignItems": "center", "color": "var(--gold)" }}><Factory width="24" height="24" /></span>
                    <div>
                      <div style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--white)" }}>Factory-Direct Manufacturing</div>
                      <div style={{ "fontSize": "0.73rem", "color": "rgba(255,255,255,0.5)" }}>No middlemen - better pricing for partners</div>
                    </div>
                  </div>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "background": "rgba(255,255,255,0.04)", "borderRadius": "var(--radius-sm)", "border": "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ "fontSize": "1.5rem", "display": "flex", "alignItems": "center", "color": "var(--gold)" }}><Package width="24" height="24" /></span>
                    <div>
                      <div style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--white)" }}>Bulk & Custom Orders Welcome</div>
                      <div style={{ "fontSize": "0.73rem", "color": "rgba(255,255,255,0.5)" }}>Tailored solutions for every client need</div>
                    </div>
                  </div>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "background": "rgba(255,255,255,0.04)", "borderRadius": "var(--radius-sm)", "border": "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ "fontSize": "1.5rem", "display": "flex", "alignItems": "center", "color": "var(--gold)" }}><Target width="24" height="24" /></span>
                    <div>
                      <div style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--white)" }}>Serving Hotels, Showrooms & Designers</div>
                      <div style={{ "fontSize": "0.73rem", "color": "rgba(255,255,255,0.5)" }}>Trusted across Tamil Nadu and beyond</div>
                    </div>
                  </div>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "padding": "14px", "background": "rgba(255,255,255,0.04)", "borderRadius": "var(--radius-sm)", "border": "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ "fontSize": "1.5rem", "display": "flex", "alignItems": "center", "color": "var(--gold)" }}><MapPin width="24" height="24" /></span>
                    <div>
                      <div style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "var(--white)" }}>Salem Industrial Estate, TN – 636014</div>
                      <div style={{ "fontSize": "0.73rem", "color": "rgba(255,255,255,0.5)" }}>Salem–Ulundurpettai Highway, Udayapatti</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ================================================
     PRODUCT CATEGORIES
     ================================================  */}
      <section id="categories" aria-labelledby="categories-title">
        <div className="container">
          <div className="categories-header">
            <div className="section-label">Our Product Range</div>
            <h2 className="section-title" id="categories-title">Crafted for <span className="gold">Every Space</span></h2>

            <p className="section-sub" style={{ "margin": "0 auto", "textAlign": "center", "marginTop": "16px" }}>
              8 categories. Bulk orders. Custom specs. All from one factory.
            </p>
          </div>

          <div className="categories-grid" role="list" aria-label="Product categories">

            {/*  Card 1: Wardrobes  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Wardrobes & Storage">
              <img src="/images/Wardrobes.png" alt="Premium wooden sliding wardrobe with gold handles" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">01</span>
                <span className="cat-name">Wardrobes &amp; Storage</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Wardrobes &amp; Storage</span>
                <p className="cat-hover-desc">Sliding &amp; hinged. Premium wood. Bulk-order ready.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Wardrobes">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 2: Bookshelves  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Bookshelves & Display Cabinets">
              <img src="/images/Bookshelves.png" alt="Elegant display bookshelf cabinet with glass doors and warm lighting" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">02</span>
                <span className="cat-name">Bookshelves &amp; Cabinets</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Bookshelves &amp; Cabinets</span>
                <p className="cat-hover-desc">Glass or solid doors. LED-ready interiors.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Bookshelves">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 3: Office Furniture  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Office Furniture">
              <img src="/images/OfficeFurniture.png" alt="Modern executive office desk setup with leather chair" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">03</span>
                <span className="cat-name">Office Furniture</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Office Furniture</span>
                <p className="cat-hover-desc">Desks, workstations &amp; conference tables. Corporate-grade.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Office Furniture">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 4: Bedroom  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Bedroom Furniture">
              <img src="/images/BedroomFurniture.png" alt="Luxury bedroom furniture set with tufted headboard" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">04</span>
                <span className="cat-name">Bedroom Furniture</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Bedroom Furniture</span>
                <p className="cat-hover-desc">Beds, side tables, drawers. Hotel-grade finishes.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Bedroom Furniture">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 5: Dining  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Dining Furniture">
              <img src="/images/DiningSet.png" alt="Elegant dining table with crystal chandelier" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">05</span>
                <span className="cat-name">Dining Furniture</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Dining Furniture</span>
                <p className="cat-hover-desc">4, 6 &amp; 8-seater sets. Upholstered options available.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Dining Furniture">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 6: Sofa Sets  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Sofa Sets">
              <img src="/images/Sofaset.png" alt="Premium luxury sofa set with gold velvet upholstery" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">06</span>
                <span className="cat-name">Sofa Sets</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Sofa Sets</span>
                <p className="cat-hover-desc">L-shaped, sectional &amp; classic. Fabric or leather.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Sofa Sets">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 7: Dressing Tables  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Dressing Tables">
              <img src="/images/Dressingtables.png" alt="Elegant wooden dressing table with oval LED mirror" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">07</span>
                <span className="cat-name">Dressing Tables</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Dressing Tables</span>
                <p className="cat-hover-desc">Mirrors, drawers, multi-finish. Modern &amp; classic styles.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Dressing Tables">Enquire Now →</a>
              </div>
            </article>

            {/*  Card 8: Custom Solutions  */}
            <article className="cat-card" role="listitem" tabIndex={0} aria-label="Customized Solutions">
              <img src="/images/Customizedfurnitures.png" alt="Artisan craftsman building bespoke wooden furniture" className="cat-card-img" loading="lazy" />
              <div className="cat-card-overlay">
                <span className="cat-num">08</span>
                <span className="cat-name">Customized Solutions</span>
              </div>
              <div className="cat-hover-panel">
                <span className="cat-hover-title">Customized Solutions</span>
                <p className="cat-hover-desc">Your spec, your brand. We manufacture it.</p>
                <a href="/gallery#contact" className="cat-view-link" aria-label="Enquire about Custom Solutions">Enquire Now →</a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/*  ================================================
     B2B BUSINESS SOLUTIONS
     ================================================  */}
      <section id="business" aria-labelledby="business-title">
        <div className="container">
          <div className="business-grid">

            <div className="business-img-wrap">
              <img src="images/business_office.jpg" alt="Premium corporate office with professional walnut desks and leather chairs" loading="lazy" />
              <div className="business-img-badge">
                <span className="num">15+</span>
                <span className="lbl">Years of Excellence</span>
              </div>
            </div>

            <div className="business-content">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div className="section-label dark" style={{ marginBottom: 0 }}>Furniture Solutions</div>
                <span className="business-script" style={{ marginBottom: 0 }}>for Your Business</span>
              </div>
              <h2 className="section-title light" id="business-title">
                The B2B Partner<br />You <span className="gold">Can Rely On</span>
              </h2>

              <p className="section-sub light">
                Factory-direct supply across India. Flexible MOQ, custom finishes, on-time every time.
              </p>

              <div className="business-icon-grid">
                <div className="biz-icon-item">
                  <div className="biz-icon" aria-hidden="true"><Building2 width="20" height="20" /></div>
                  <div className="biz-text">
                    <div className="biz-title">Office Furniture</div>
                    <div className="biz-desc">Desks, workstations, conference tables, executive suites</div>
                  </div>
                </div>
                <div className="biz-icon-item">
                  <div className="biz-icon" aria-hidden="true"><BedDouble width="20" height="20" /></div>
                  <div className="biz-text">
                    <div className="biz-title">Bedroom Sets</div>
                    <div className="biz-desc">Hotel-grade beds, wardrobes, and bedroom furniture</div>
                  </div>
                </div>
                <div className="biz-icon-item">
                  <div className="biz-icon" aria-hidden="true"><Sofa width="20" height="20" /></div>
                  <div className="biz-text">
                    <div className="biz-title">Sofa &amp; Seating</div>
                    <div className="biz-desc">Reception, lounge, and premium sofa sets</div>
                  </div>
                </div>
                <div className="biz-icon-item">
                  <div className="biz-icon" aria-hidden="true"><Utensils width="20" height="20" /></div>
                  <div className="biz-text">
                    <div className="biz-title">Dining Furniture</div>
                    <div className="biz-desc">Restaurant, hotel dining, and residential dining sets</div>
                  </div>
                </div>
                <div className="biz-icon-item">
                  <div className="biz-icon" aria-hidden="true"><DoorOpen width="20" height="20" /></div>
                  <div className="biz-text">
                    <div className="biz-title">Wardrobes</div>
                    <div className="biz-desc">Sliding, hinged, walk-in wardrobe solutions</div>
                  </div>
                </div>
                <div className="biz-icon-item">
                  <div className="biz-icon" aria-hidden="true"><Settings width="20" height="20" /></div>
                  <div className="biz-text">
                    <div className="biz-title">Custom Manufacturing</div>
                    <div className="biz-desc">Fully bespoke furniture to your specifications</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/*  ================================================
     WHY CHOOSE US / USP STRIP
     ================================================  */}
      <UspSection />


      {/*  ================================================
     TESTIMONIALS / TRUSTED BY
     ================================================  */}
      <section id="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="testimonials-header">
            <div className="section-label dark">Client Testimonials</div>
            <h2 className="section-title light" id="testimonials-title">What Our Partners <span className="gold">Say</span></h2>

          </div>
        </div>

        {/*  Auto-scrolling marquee  */}
        <div style={{ "overflow": "hidden", "padding": "8px 0" }} aria-label="Client testimonials carousel">
          <div className="marquee-track" role="list">
            {/*  Set 1  */}
            <div className="testi-card" role="listitem">
              <div className="testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testi-quote">"GRACE™ delivered 200+ wardrobes for our hotel project ahead of schedule. The quality is exceptional - our guests keep complimenting the furniture!"</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">RK</div>
                <div><div className="testi-name">Rajan Kumar</div><div className="testi-role">Hotel GM, Coimbatore</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem">
              <div className="testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testi-quote">"As an interior designer, I've been sourcing from GRACE™ for 6 years. Their consistency and willingness to accommodate custom dimensions is unmatched."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">PM</div>
                <div><div className="testi-name">Priya Meenakshi</div><div className="testi-role">Interior Designer, Chennai</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem">
              <div className="testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testi-quote">"We've furnished three showrooms using GRACE™'s factory-direct pricing. The margin is great and quality keeps our customers coming back to us."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">AS</div>
                <div><div className="testi-name">Arjun Selvam</div><div className="testi-role">Showroom Owner, Salem</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem">
              <div className="testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testi-quote">"Corporate office fit-out for 120 workstations. GRACE™ handled the entire custom brief professionally. Delivered on time, zero quality issues."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">VN</div>
                <div><div className="testi-name">Vijay Natarajan</div><div className="testi-role">Facilities Manager, Bangalore</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem">
              <div className="testi-stars" aria-label="5 out of 5 stars">★★★★★</div>
              <p className="testi-quote">"The dressing table collection is simply stunning. My boutique hotel guests routinely ask where the furniture is from. GRACE™ is my go-to supplier."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">SL</div>
                <div><div className="testi-name">Sunita Lakshmi</div><div className="testi-role">Boutique Hotel Owner, Ooty</div></div>
              </div>
            </div>
            {/*  Duplicates for seamless loop  */}
            <div className="testi-card" role="listitem" aria-hidden="true">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"GRACE™ delivered 200+ wardrobes for our hotel project ahead of schedule. The quality is exceptional - our guests keep complimenting the furniture!"</p>
              <div className="testi-author">
                <div className="testi-avatar">RK</div>
                <div><div className="testi-name">Rajan Kumar</div><div className="testi-role">Hotel GM, Coimbatore</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem" aria-hidden="true">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"As an interior designer, I've been sourcing from GRACE™ for 6 years. Their consistency and willingness to accommodate custom dimensions is unmatched."</p>
              <div className="testi-author">
                <div className="testi-avatar">PM</div>
                <div><div className="testi-name">Priya Meenakshi</div><div className="testi-role">Interior Designer, Chennai</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem" aria-hidden="true">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"We've furnished three showrooms using GRACE™'s factory-direct pricing. The margin is great and quality keeps our customers coming back to us."</p>
              <div className="testi-author">
                <div className="testi-avatar">AS</div>
                <div><div className="testi-name">Arjun Selvam</div><div className="testi-role">Showroom Owner, Salem</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem" aria-hidden="true">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"Corporate office fit-out for 120 workstations. GRACE™ handled the entire custom brief professionally. Delivered on time, zero quality issues."</p>
              <div className="testi-author">
                <div className="testi-avatar">VN</div>
                <div><div className="testi-name">Vijay Natarajan</div><div className="testi-role">Facilities Manager, Bangalore</div></div>
              </div>
            </div>
            <div className="testi-card" role="listitem" aria-hidden="true">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"The dressing table collection is simply stunning. My boutique hotel guests routinely ask where the furniture is from. GRACE™ is my go-to supplier."</p>
              <div className="testi-author">
                <div className="testi-avatar">SL</div>
                <div><div className="testi-name">Sunita Lakshmi</div><div className="testi-role">Boutique Hotel Owner, Ooty</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*  ================================================
     FOOTER
     ================================================  */}
      <Footer />


      {/*  ── Show desktop CTA after scroll ──  */}



    </>
  );
}








