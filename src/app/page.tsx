
import { X, Home, Factory, Sofa, Handshake, Image, Star, Phone, MessageCircle, Award, Zap, Package, Target, MapPin, Building2, BedDouble, Utensils, DoorOpen, Settings, Palette, Crown, CheckCircle, Clock } from 'lucide-react';


export default function HomePage() {
  return (
    <>
      

{/*  ================================================
     PAGE LOADER
     ================================================  */}
<div className="page-loader" role="status" aria-label="Loading GRACE™ website">
  <img src="images/logo.png" alt="GRACE Logo" className="logo-img" />
  <div className="loader-bar"><div className="loader-bar-fill"></div></div>
</div>

{/*  ================================================
     NAVBAR
     ================================================  */}
<header id="navbar" role="banner">
  <div className="container nav-inner">

    {/*  Logo  */}
    <a href="#hero" className="nav-logo" aria-label="GRACE™ Furniture - Home">
      <img src="images/logo.png" alt="GRACE Logo" className="logo-img" />
    </a>

    {/*  Desktop Nav Links  */}
    <nav className="nav-links" role="navigation" aria-label="Primary navigation">
      <a href="#hero">Home</a>
      <a href="#about">About</a>
      <a href="#categories">Products</a>
      <a href="#business">B2B Solutions</a>
      <a href="#spotlight">Gallery</a>
      <a href="#contact">Contact</a>
    </nav>

    {/*  Desktop CTA  */}


    {/*  Hamburger  */}
    <button className="hamburger" id="hamburger-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-drawer">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

{/*  Mobile Drawer  */}
<div className="drawer-overlay" id="drawer-overlay" aria-hidden="true"></div>
<nav className="mobile-drawer" id="mobile-drawer" aria-label="Mobile navigation" role="navigation">
  <button className="drawer-close" id="drawer-close-btn" aria-label="Close menu">
    <X width="28" height="28" />
  </button>
  <div className="drawer-links">
    <a href="#hero"><Home width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> Home</a>
    <a href="#about"><Factory width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> About Us</a>
    <a href="#categories"><Sofa width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> Products</a>
    <a href="#business"><Handshake width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> B2B Solutions</a>
    <a href="#spotlight"><Image width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> Gallery</a>
    <a href="#usp"><Star width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> Why Choose Us</a>
    <a href="#contact"><Phone width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> Contact</a>
  </div>
  <div className="drawer-contact">
    <a href="tel:+919842025243"><Phone width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> +91 98420 25243</a>
    <a href="https://wa.me/919842025243" target="_blank" rel="noopener"><MessageCircle width="18" height="18" style={{"verticalAlign":"-4px","marginRight":"6px"}} /> WhatsApp Us</a>
    <div style={{"marginTop":"20px"}}>
      <a href="#contact" className="btn btn-gold" style={{"width":"100%","justifyContent":"center"}}>Get a Quote</a>
    </div>
  </div>
</nav>

{/*  ================================================
     HERO SECTION
     ================================================  */}
<section id="hero" aria-label="Hero">
  <div className="hero-bg" role="img" aria-label="Luxury bedroom interior with premium wooden furniture"></div>
  <div className="container">
    <div className="hero-content">

      <div className="hero-eyebrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Premium B2B Furniture Manufacturer · Salem, Tamil Nadu
      </div>

      <h1 className="hero-headline" id="hero-headline">
        <span className="word">Premium</span>
        <span className="word"> </span>
        <span className="word">Furniture</span>
        <span className="word"> </span>
        <span className="word">for</span>
        <span className="word" style={{"color":"var(--gold)","fontStyle":"italic"}}> Every</span>
        <span className="word"> </span>
        <span className="word" style={{"color":"var(--gold)","fontStyle":"italic"}}>Space</span>
      </h1>

      <p className="hero-sub">Factory-direct quality for showrooms, hotels, interior designers &amp; wholesalers.</p>

      <div className="hero-qualities" role="list">
        <span className="hero-quality" role="listitem">Stylish</span>
        <span className="hero-quality" role="listitem">Durable</span>
        <span className="hero-quality" role="listitem">Elegant</span>
      </div>

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
  </div>
</section>

{/*  ================================================
     ABOUT SECTION (brief)
     ================================================  */}
<section id="about" style={{"padding":"var(--section-pad) 0","background":"var(--cream-dark)"}}>
  <div className="container">
    <div style={{"display":"grid","gridTemplateColumns":"1fr 1fr","gap":"70px","alignItems":"center"}} className="about-grid">
      <div>
        <div className="section-label">About GRACE™</div>
        <h2 className="section-title">Modern Spaces.<br /><span className="gold">Stronger</span> Businesses.</h2>
        
        <p className="section-sub" style={{"marginBottom":"20px","textAlign":"justify"}}>
          GRACE™ is a factory-direct furniture manufacturer based in Salem, Tamil Nadu, with over a decade of experience crafting premium furniture for India's most discerning commercial clients.
        </p>
        <p className="section-sub" style={{"marginBottom":"32px","textAlign":"justify"}}>
          From five-star hotels to showrooms, corporate offices to interior design studios - our clients trust us for consistent quality, on-time delivery, and the flexibility to handle custom bulk orders at scale.
        </p>

      </div>
      <div style={{"position":"relative"}}>
        <div style={{"background":"linear-gradient(135deg,var(--espresso-dark),var(--espresso))","borderRadius":"var(--radius-xl)","padding":"40px","boxShadow":"var(--shadow-lg)","position":"relative","overflow":"hidden"}}>
          <div style={{"position":"absolute","top":"-20px","right":"-20px","width":"120px","height":"120px","borderRadius":"50%","background":"radial-gradient(circle,rgba(245,197,24,0.15),transparent)"}}></div>
          <div style={{"fontFamily":"Inter,system-ui,sans-serif","fontSize":"1.3rem","color":"var(--gold)","marginBottom":"20px"}}>"Make a Good Choice"</div>
          <div style={{"display":"flex","flexDirection":"column","gap":"16px"}}>
            <div style={{"display":"flex","alignItems":"center","gap":"14px","padding":"14px","background":"rgba(255,255,255,0.04)","borderRadius":"var(--radius-sm)","border":"1px solid rgba(255,255,255,0.07)"}}>
              <span style={{"fontSize":"1.5rem","display":"flex","alignItems":"center","color":"var(--gold)"}}><Factory width="24" height="24" /></span>
              <div>
                <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--white)"}}>Factory-Direct Manufacturing</div>
                <div style={{"fontSize":"0.73rem","color":"rgba(255,255,255,0.5)"}}>No middlemen - better pricing for partners</div>
              </div>
            </div>
            <div style={{"display":"flex","alignItems":"center","gap":"14px","padding":"14px","background":"rgba(255,255,255,0.04)","borderRadius":"var(--radius-sm)","border":"1px solid rgba(255,255,255,0.07)"}}>
              <span style={{"fontSize":"1.5rem","display":"flex","alignItems":"center","color":"var(--gold)"}}><Package width="24" height="24" /></span>
              <div>
                <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--white)"}}>Bulk & Custom Orders Welcome</div>
                <div style={{"fontSize":"0.73rem","color":"rgba(255,255,255,0.5)"}}>Tailored solutions for every client need</div>
              </div>
            </div>
            <div style={{"display":"flex","alignItems":"center","gap":"14px","padding":"14px","background":"rgba(255,255,255,0.04)","borderRadius":"var(--radius-sm)","border":"1px solid rgba(255,255,255,0.07)"}}>
              <span style={{"fontSize":"1.5rem","display":"flex","alignItems":"center","color":"var(--gold)"}}><Target width="24" height="24" /></span>
              <div>
                <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--white)"}}>Serving Hotels, Showrooms & Designers</div>
                <div style={{"fontSize":"0.73rem","color":"rgba(255,255,255,0.5)"}}>Trusted across Tamil Nadu and beyond</div>
              </div>
            </div>
            <div style={{"display":"flex","alignItems":"center","gap":"14px","padding":"14px","background":"rgba(255,255,255,0.04)","borderRadius":"var(--radius-sm)","border":"1px solid rgba(255,255,255,0.07)"}}>
              <span style={{"fontSize":"1.5rem","display":"flex","alignItems":"center","color":"var(--gold)"}}><MapPin width="24" height="24" /></span>
              <div>
                <div style={{"fontSize":"0.8rem","fontWeight":"700","color":"var(--white)"}}>Salem Industrial Estate, TN – 636014</div>
                <div style={{"fontSize":"0.73rem","color":"rgba(255,255,255,0.5)"}}>Salem–Ulundurpettai Highway, Udayapatti</div>
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
      
      <p className="section-sub" style={{"margin":"0 auto","textAlign":"center","marginTop":"16px"}}>
        Premium furniture collections designed for commercial excellence - built to impress, built to last.
      </p>
    </div>

    <div className="categories-grid" role="list" aria-label="Product categories">

      {/*  Card 1: Wardrobes  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Wardrobes & Storage">
        <img src="images/cat_wardrobe.jpg" alt="Premium wooden sliding wardrobe with gold handles" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">01</span>
          <span className="cat-name">Wardrobes &amp; Storage</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Wardrobes &amp; Storage</span>
          <p className="cat-hover-desc">Sliding and hinged wardrobes in premium wood finishes with ample storage solutions.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Wardrobes">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 2: Bookshelves  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Bookshelves & Display Cabinets">
        <img src="images/cat_bookshelf.jpg" alt="Elegant display bookshelf cabinet with glass doors and warm lighting" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">02</span>
          <span className="cat-name">Bookshelves &amp; Cabinets</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Bookshelves &amp; Cabinets</span>
          <p className="cat-hover-desc">Display cabinets and bookshelves with glass or solid doors, LED-ready interiors.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Bookshelves">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 3: Office Furniture  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Office Furniture">
        <img src="images/cat_office.jpg" alt="Modern executive office desk setup with leather chair" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">03</span>
          <span className="cat-name">Office Furniture</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Office Furniture</span>
          <p className="cat-hover-desc">Executive desks, workstations, conference tables, and ergonomic seating solutions.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Office Furniture">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 4: Bedroom  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Bedroom Furniture">
        <img src="images/cat_bedroom.jpg" alt="Luxury bedroom furniture set with tufted headboard" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">04</span>
          <span className="cat-name">Bedroom Furniture</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Bedroom Furniture</span>
          <p className="cat-hover-desc">Complete bedroom sets - beds, side tables, chest of drawers in premium finishes.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Bedroom Furniture">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 5: Dining  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Dining Furniture">
        <img src="images/cat_dining.jpg" alt="Elegant dining table with crystal chandelier" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">05</span>
          <span className="cat-name">Dining Furniture</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Dining Furniture</span>
          <p className="cat-hover-desc">Dining tables and chair sets in 4, 6, and 8-seater configurations with upholstered options.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Dining Furniture">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 6: Sofa Sets  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Sofa Sets">
        <img src="images/cat_sofa.jpg" alt="Premium luxury sofa set with gold velvet upholstery" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">06</span>
          <span className="cat-name">Sofa Sets</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Sofa Sets</span>
          <p className="cat-hover-desc">L-shaped, sectional, and classic sofa sets with premium fabric and leather options.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Sofa Sets">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 7: Dressing Tables  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Dressing Tables">
        <img src="images/cat_dressing.jpg" alt="Elegant wooden dressing table with oval LED mirror" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">07</span>
          <span className="cat-name">Dressing Tables</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Dressing Tables</span>
          <p className="cat-hover-desc">Modern vanity and dressing tables with mirrors, drawers, and various finish options.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Dressing Tables">Enquire Now →</a>
        </div>
      </article>

      {/*  Card 8: Custom Solutions  */}
      <article className="cat-card" role="listitem" tabIndex={0} aria-label="Customized Solutions">
        <img src="images/cat_custom.jpg" alt="Artisan craftsman building bespoke wooden furniture" className="cat-card-img" loading="lazy" />
        <div className="cat-card-overlay">
          <span className="cat-num">08</span>
          <span className="cat-name">Customized Solutions</span>
        </div>
        <div className="cat-hover-panel">
          <span className="cat-hover-title">Customized Solutions</span>
          <p className="cat-hover-desc">Bespoke furniture designed and manufactured to your exact specifications and brand standards.</p>
          <a href="#contact" className="cat-view-link" aria-label="Enquire about Custom Solutions">Enquire Now →</a>
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
        <div className="section-label dark">Furniture Solutions</div>
        <span className="business-script">for Your Business</span>
        <h2 className="section-title light" id="business-title">
          The B2B Partner<br />You <span className="gold">Can Rely On</span>
        </h2>
        
        <p className="section-sub light">
          We supply premium factory-direct furniture to showrooms, hotels, interior designers, wholesalers, and corporate offices across India. Consistent quality, flexible quantities, custom finishes, on-time delivery.
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
<section id="usp" aria-labelledby="usp-title">
  <div className="container">
    <div className="usp-header">
      <div className="section-label">Why GRACE™</div>
      <h2 className="section-title" id="usp-title">Why Choose <span className="gold">GRACE™</span></h2>
      
      <p className="section-sub" style={{"margin":"0 auto","textAlign":"center","marginTop":"16px"}}>
        Five core pillars that make us the preferred furniture manufacturing partner for India's top businesses.
      </p>
    </div>

    <div className="usp-grid" role="list">
      <div className="usp-item" role="listitem">
        <div className="usp-icon" aria-hidden="true"><Factory width="32" height="32" color="var(--crimson)" /></div>
        <h3 className="usp-title">Factory Direct Supply</h3>
        <p className="usp-desc">No middlemen. We manufacture and supply directly, giving you better pricing and full transparency.</p>
      </div>
      <div className="usp-item" role="listitem">
        <div className="usp-icon" aria-hidden="true"><Star width="32" height="32" color="var(--crimson)" /></div>
        <h3 className="usp-title">Consistent Quality</h3>
        <p className="usp-desc">Strict quality control at every stage. Every piece that leaves our factory meets our premium standard.</p>
      </div>
      <div className="usp-item" role="listitem">
        <div className="usp-icon" aria-hidden="true"><Zap width="32" height="32" color="var(--crimson)" /></div>
        <h3 className="usp-title">On-Time Delivery</h3>
        <p className="usp-desc">We understand your project timelines. Our logistics team ensures on-schedule delivery, every time.</p>
      </div>
      <div className="usp-item" role="listitem">
        <div className="usp-icon" aria-hidden="true"><Palette width="32" height="32" color="var(--crimson)" /></div>
        <h3 className="usp-title">Custom Orders</h3>
        <p className="usp-desc">Send us your design requirements or dimensions. We'll manufacture it exactly to your specifications.</p>
      </div>
      <div className="usp-item" role="listitem">
        <div className="usp-icon" aria-hidden="true"><Handshake width="32" height="32" color="var(--crimson)" /></div>
        <h3 className="usp-title">Trusted Partner</h3>
        <p className="usp-desc">Long-term B2B relationships with showrooms, hotels, and designers across Tamil Nadu and beyond.</p>
      </div>
    </div>
  </div>
</section>
{/*  ================================================
     SPOTLIGHT - DRESSING TABLES
     ================================================  */}
<section id="spotlight" aria-labelledby="spotlight-title">
  <div className="container">
    <div className="spotlight-header">
      <div className="section-label">Featured Collection</div>
      <h2 className="section-title" id="spotlight-title">Dressing Tables for <span className="script">Modern Spaces</span></h2>
      
      <p className="section-sub" style={{"textAlign":"center","margin":"16px auto 0"}}>
        Vanity and dressing solutions crafted to elevate bedrooms, hotel suites, and showroom displays.
      </p>
    </div>

    {/*  Spotlight Hero  */}
    <div className="spotlight-hero">
      <img src="images/spotlight_hero.jpg" alt="Dressing Tables for Modern Spaces" className="spotlight-hero-img" loading="lazy" />
      <div className="spotlight-hero-overlay" aria-hidden="true"></div>
      <div className="spotlight-hero-text">
        <div className="section-label dark">Signature Collection</div>
        <h3 className="spotlight-hero-title">
          Dressing Tables<br />for <span className="script-gold">Modern Spaces</span>
        </h3>
        <a href="#contact" className="btn btn-gold">Enquire About This Collection</a>
      </div>
    </div>

    {/*  Style Variant Cards  */}
    <div className="spotlight-grid" role="list">
      <div className="spot-card" role="listitem" tabIndex={0}>
        <div className="spot-card-img" role="img" aria-label="Modern and Minimal dressing table style" style={{"background":"url('images/spotlight_1.jpg') center/cover no-repeat"}}>
        </div>
        <div className="spot-card-body">
          <span className="spot-card-tag">Style 01</span>
          <h4 className="spot-card-title">Modern &amp; Minimal</h4>
          <p className="spot-card-desc">Clean lines, matte finishes, integrated LED lighting. For contemporary bedrooms and boutique hotels.</p>
        </div>
      </div>
      <div className="spot-card" role="listitem" tabIndex={0}>
        <div className="spot-card-img" role="img" aria-label="Classic Elegance dressing table style" style={{"background":"url('images/spotlight_2.jpg') center/cover no-repeat"}}>
        </div>
        <div className="spot-card-body">
          <span className="spot-card-tag">Style 02</span>
          <h4 className="spot-card-title">Classic Elegance</h4>
          <p className="spot-card-desc">Rich walnut wood, ornate mirror frames, brass hardware. Timeless appeal for luxury properties.</p>
        </div>
      </div>
      <div className="spot-card" role="listitem" tabIndex={0}>
        <div className="spot-card-img" role="img" aria-label="Trendy and Versatile dressing table style" style={{"background":"url('images/spotlight_3.jpg') center/cover no-repeat"}}>
        </div>
        <div className="spot-card-body">
          <span className="spot-card-tag">Style 03</span>
          <h4 className="spot-card-title">Trendy &amp; Versatile</h4>
          <p className="spot-card-desc">Multi-tonal finishes, versatile storage, dual mirrors. Perfect for showrooms targeting younger demographics.</p>
        </div>
      </div>
      <div className="spot-card" role="listitem" tabIndex={0}>
        <div className="spot-card-img" role="img" aria-label="Rich and Premium dressing table style" style={{"background":"url('images/spotlight_4.jpg') center/cover no-repeat"}}>
        </div>
        <div className="spot-card-body">
          <span className="spot-card-tag">Style 04</span>
          <h4 className="spot-card-title">Rich &amp; Premium</h4>
          <p className="spot-card-desc">Full-length mirrors, gold accents, tufted seating, premium wood grain. Our flagship luxury collection.</p>
        </div>
      </div>
    </div>
  </div>
</section>

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
  <div style={{"overflow":"hidden","padding":"8px 0"}} aria-label="Client testimonials carousel">
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
     CTA BANNER
     ================================================  */}
<section id="cta-banner" aria-labelledby="cta-title">
  <div className="container">
    <div className="cta-banner-inner">
      <div className="gold-ornament" aria-hidden="true"><Crown width="20" height="20" /></div>
      <span className="cta-script">Your Space,</span>
      <h2 className="cta-title" id="cta-title">Our <span>Priority</span></h2>
      <p className="cta-sub">
        Whether you're furnishing 10 rooms or 1,000 - GRACE™ delivers the quality, consistency, and service your business demands. Let's build something exceptional together.
      </p>

    </div>
  </div>
</section>

{/*  ================================================
     CONTACT SECTION
     ================================================  */}
<section id="contact" aria-labelledby="contact-title">
  <div className="container">
    <div style={{"textAlign":"center","marginBottom":"60px"}}>
      <div className="section-label">Get In Touch</div>
      <h2 className="section-title" id="contact-title">Let's <span className="gold">Work Together</span></h2>
      
      <p className="section-sub" style={{"textAlign":"center","margin":"16px auto 0"}}>
        Reach out with your requirements and our team will respond within 24 hours with a customized quote.
      </p>
    </div>

    <div className="contact-grid">

      {/*  Contact Form  */}
      <div className="contact-form-wrap">
        <h3 className="form-title">Send an Enquiry</h3>
        <p className="form-sub">Fill in the details below and we'll get back to you with pricing and availability.</p>

        <form id="contact-form" noValidate>
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="form-name" name="name" placeholder=" " required autoComplete="name" />
              <label htmlFor="form-name">Your Name *</label>
            </div>
            <div className="form-group">
              <input type="text" id="form-company" name="company" placeholder=" " autoComplete="organization" />
              <label htmlFor="form-company">Company / Business</label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input type="tel" id="form-phone" name="phone" placeholder=" " required autoComplete="tel" />
              <label htmlFor="form-phone">Phone Number *</label>
            </div>
            <div className="form-group">
              <input type="email" id="form-email" name="email" placeholder=" " autoComplete="email" />
              <label htmlFor="form-email">Email Address</label>
            </div>
          </div>
          <div className="form-group">
            <select id="form-category" name="category" required defaultValue="">
              <option value="" disabled></option>
              <option value="wardrobes">Wardrobes &amp; Storage</option>
              <option value="bookshelves">Bookshelves &amp; Cabinets</option>
              <option value="office">Office Furniture</option>
              <option value="bedroom">Bedroom Furniture</option>
              <option value="dining">Dining Furniture</option>
              <option value="sofa">Sofa Sets</option>
              <option value="dressing">Dressing Tables</option>
              <option value="custom">Customized Solutions</option>
              <option value="multiple">Multiple Categories</option>
            </select>
            <label htmlFor="form-category">Product Category *</label>
          </div>
          <div className="form-group">
            <textarea id="form-message" name="message" placeholder=" " rows={4}></textarea>
            <label htmlFor="form-message">Your Requirements / Message</label>
          </div>
          <button type="submit" className="btn btn-crimson form-submit" id="form-submit-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Enquiry
          </button>
          <div className="form-success" role="alert" aria-live="polite">
            <CheckCircle width="16" height="16" style={{"verticalAlign":"-3px","marginRight":"4px"}} /> Thank you! We've received your enquiry and will respond within 24 hours.
          </div>
        </form>
      </div>

      {/*  Contact Info  */}
      <div className="contact-info">
        <h3 className="contact-info-title">Contact Details</h3>

        <div className="contact-item">
          <div className="contact-item-icon" aria-hidden="true"><Phone width="20" height="20" /></div>
          <div>
            <span className="contact-item-label">Phone</span>
            <div className="contact-item-value">
              <a href="tel:+919842025243">+91 98420 25243</a><br />
              <a href="tel:+917305010542">+91 73050 10542</a><br />
              <a href="tel:+917305010545">+91 73050 10545</a>
            </div>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-item-icon" aria-hidden="true"><MapPin width="20" height="20" /></div>
          <div>
            <span className="contact-item-label">Factory Address</span>
            <div className="contact-item-value">
              Plot No: P-33, Door No: 120/2,<br />
              Salem Industrial Co-operative Estate Ltd,<br />
              Salem–Ulundurpettai Highway,<br />
              PO Adhikaripatty, Udayapatti,<br />
              Salem, Tamil Nadu – 636014
            </div>
          </div>
        </div>

        <a href="https://wa.me/919842025243?text=Hello%20GRACE%E2%84%A2%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
           className="wa-btn"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Contact GRACE™ on WhatsApp">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
          Chat on WhatsApp
        </a>

        {/*  Google Map Embed  */}
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.852!2d78.0839!3d11.6548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1c!2sSalem%20Industrial%20Estate%2C%20Salem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
            loading="lazy"
            title="GRACE™ Furniture factory location in Salem, Tamil Nadu"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing GRACE™ factory location at Salem Industrial Estate, Tamil Nadu"></iframe>
        </div>

        {/*  Business Hours  */}
        <div className="hours-table">
          <h4 style={{"display":"flex","alignItems":"center","gap":"6px"}}><Clock width="18" height="18" /> Business Hours</h4>
          <div className="hours-row">
            <span className="hours-day">Monday – Friday</span>
            <span className="hours-time">9:00 AM – 6:30 PM</span>
          </div>
          <div className="hours-row">
            <span className="hours-day">Saturday</span>
            <span className="hours-time">9:00 AM – 5:00 PM</span>
          </div>
          <div className="hours-row">
            <span className="hours-day">Sunday</span>
            <span className="hours-time" style={{"color":"var(--text-muted)"}}>Closed</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/*  ================================================
     FOOTER
     ================================================  */}
<footer id="footer" role="contentinfo">
  <div className="container">
    <div className="footer-grid">

      {/*  Brand  */}
      <div className="footer-brand">
        <div className="footer-logo">
          <img src="images/logo.png" alt="GRACE Logo" className="logo-img" />
        </div>
        <p>Premium furniture manufacturer in Salem, Tamil Nadu. Factory-direct supply for showrooms, hotels, interior designers, wholesalers, and corporate clients. Quality you can trust, delivery you can count on.</p>
        <div className="footer-socials" role="list" aria-label="Social media links">
          <a href="#" className="social-btn" role="listitem" aria-label="Follow GRACE™ on Facebook">f</a>
          <a href="#" className="social-btn" role="listitem" aria-label="Follow GRACE™ on Instagram">in</a>
          <a href="#" className="social-btn" role="listitem" aria-label="Follow GRACE™ on YouTube" style={{"fontSize":"0.7rem"}}>▶</a>
          <a href="https://wa.me/919842025243" className="social-btn" role="listitem" aria-label="Chat with GRACE™ on WhatsApp" style={{"fontSize":"0.75rem"}} target="_blank" rel="noopener">WA</a>
        </div>
      </div>

      {/*  Quick Links  */}
      <nav className="footer-col" aria-label="Quick links">
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#categories">Products</a></li>
          <li><a href="#business">B2B Solutions</a></li>
          <li><a href="#spotlight">Gallery</a></li>
          <li><a href="#usp">Why Choose Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/*  Product Categories  */}
      <nav className="footer-col" aria-label="Product categories">
        <h4>Products</h4>
        <ul className="footer-links">
          <li><a href="#categories">Wardrobes &amp; Storage</a></li>
          <li><a href="#categories">Bookshelves &amp; Cabinets</a></li>
          <li><a href="#categories">Office Furniture</a></li>
          <li><a href="#categories">Bedroom Furniture</a></li>
          <li><a href="#categories">Dining Furniture</a></li>
          <li><a href="#categories">Sofa Sets</a></li>
          <li><a href="#categories">Dressing Tables</a></li>
          <li><a href="#contact">Custom Orders</a></li>
        </ul>
      </nav>

      {/*  Contact  */}
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

  {/*  Footer Bottom  */}
  <div style={{"borderTop":"1px solid rgba(255,255,255,0.07)"}}>
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
</footer>

{/*  ================================================
     FLOATING WHATSAPP BUTTON
     ================================================  */}
<a href="https://wa.me/919842025243?text=Hello%20GRACE%E2%84%A2%20Furniture%2C%20I%20would%20like%20to%20enquire%20about%20your%20furniture%20products."
   className="wa-float"
   target="_blank"
   rel="noopener noreferrer"
   id="whatsapp-float"
   aria-label="Chat with GRACE™ Furniture on WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
</a>
{/*  ── Show desktop CTA after scroll ──  */}



    </>
  );
}




