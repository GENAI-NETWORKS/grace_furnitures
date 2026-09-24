const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Script injection
if (!html.includes('lucide@latest')) {
  html = html.replace('<script src="js/main.js" defer></script>', '<script src="https://unpkg.com/lucide@latest"></script>\n  <script src="js/main.js" defer></script>');
}

// 2. Replacements
const map = [
  // Nav / Logos
  ['<span class="logo-crown">♛</span>', '<span class="logo-crown"><i data-lucide="crown" width="14" height="14"></i></span>'],
  ['<span class="logo-crown" aria-hidden="true">♛</span>', '<span class="logo-crown" aria-hidden="true"><i data-lucide="crown" width="14" height="14"></i></span>'],
  // Mobile drawer
  ['🏠 Home', '<i data-lucide="home" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> Home'],
  ['🏭 About Us', '<i data-lucide="factory" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> About Us'],
  ['🛋️ Products', '<i data-lucide="sofa" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> Products'],
  ['🤝 B2B Solutions', '<i data-lucide="handshake" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> B2B Solutions'],
  ['🖼️ Gallery', '<i data-lucide="image" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> Gallery'],
  ['⭐ Why Choose Us', '<i data-lucide="star" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> Why Choose Us'],
  ['📞 Contact', '<i data-lucide="phone" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> Contact'],
  ['📞 +91 98420 25243', '<i data-lucide="phone" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> +91 98420 25243'],
  ['💬 WhatsApp Us', '<i data-lucide="message-circle" width="18" height="18" style="vertical-align:-4px;margin-right:6px"></i> WhatsApp Us'],

  // Trust Badges
  ['<span class="icon" aria-hidden="true">🏆</span>', '<span class="icon" aria-hidden="true"><i data-lucide="award" width="18" height="18"></i></span>'],
  ['<span class="icon" aria-hidden="true">⚡</span>', '<span class="icon" aria-hidden="true"><i data-lucide="zap" width="18" height="18"></i></span>'],
  ['<span class="icon" aria-hidden="true">🤝</span>', '<span class="icon" aria-hidden="true"><i data-lucide="handshake" width="18" height="18"></i></span>'],

  // About Section
  ['<span style="font-size:1.5rem;">🏭</span>', '<span style="font-size:1.5rem;display:flex;align-items:center;color:var(--gold)"><i data-lucide="factory" width="24" height="24"></i></span>'],
  ['<span style="font-size:1.5rem;">📦</span>', '<span style="font-size:1.5rem;display:flex;align-items:center;color:var(--gold)"><i data-lucide="package" width="24" height="24"></i></span>'],
  ['<span style="font-size:1.5rem;">🎯</span>', '<span style="font-size:1.5rem;display:flex;align-items:center;color:var(--gold)"><i data-lucide="target" width="24" height="24"></i></span>'],
  ['<span style="font-size:1.5rem;">📍</span>', '<span style="font-size:1.5rem;display:flex;align-items:center;color:var(--gold)"><i data-lucide="map-pin" width="24" height="24"></i></span>'],

  // Product placeholders
  ['<div style="font-size:4rem;" aria-hidden="true">🛋️</div>', '<div style="color:var(--gold);" aria-hidden="true"><i data-lucide="sofa" width="64" height="64"></i></div>'],
  ['<div style="font-size:4rem;" aria-hidden="true">🪞</div>', '<div style="color:var(--gold);" aria-hidden="true"><i data-lucide="sparkles" width="64" height="64"></i></div>'],
  ['<div style="font-size:4rem;" aria-hidden="true">⚙️</div>', '<div style="color:var(--gold);" aria-hidden="true"><i data-lucide="settings" width="64" height="64"></i></div>'],

  // Business Section
  ['<div class="biz-icon" aria-hidden="true">🏢</div>', '<div class="biz-icon" aria-hidden="true"><i data-lucide="building-2" width="20" height="20"></i></div>'],
  ['<div class="biz-icon" aria-hidden="true">🛏️</div>', '<div class="biz-icon" aria-hidden="true"><i data-lucide="bed-double" width="20" height="20"></i></div>'],
  ['<div class="biz-icon" aria-hidden="true">🛋️</div>', '<div class="biz-icon" aria-hidden="true"><i data-lucide="sofa" width="20" height="20"></i></div>'],
  ['<div class="biz-icon" aria-hidden="true">🍽️</div>', '<div class="biz-icon" aria-hidden="true"><i data-lucide="utensils" width="20" height="20"></i></div>'],
  ['<div class="biz-icon" aria-hidden="true">🚪</div>', '<div class="biz-icon" aria-hidden="true"><i data-lucide="door-open" width="20" height="20"></i></div>'],
  ['<div class="biz-icon" aria-hidden="true">⚙️</div>', '<div class="biz-icon" aria-hidden="true"><i data-lucide="settings" width="20" height="20"></i></div>'],

  // USP Strip
  ['<div class="usp-icon" aria-hidden="true">🏭</div>', '<div class="usp-icon" aria-hidden="true"><i data-lucide="factory" width="32" height="32" color="var(--crimson)"></i></div>'],
  ['<div class="usp-icon" aria-hidden="true">⭐</div>', '<div class="usp-icon" aria-hidden="true"><i data-lucide="star" width="32" height="32" color="var(--crimson)"></i></div>'],
  ['<div class="usp-icon" aria-hidden="true">⚡</div>', '<div class="usp-icon" aria-hidden="true"><i data-lucide="zap" width="32" height="32" color="var(--crimson)"></i></div>'],
  ['<div class="usp-icon" aria-hidden="true">🎨</div>', '<div class="usp-icon" aria-hidden="true"><i data-lucide="palette" width="32" height="32" color="var(--crimson)"></i></div>'],
  ['<div class="usp-icon" aria-hidden="true">🤝</div>', '<div class="usp-icon" aria-hidden="true"><i data-lucide="handshake" width="32" height="32" color="var(--crimson)"></i></div>'],

  // Spotlight
  ['<div class="spotlight-hero-placeholder" aria-hidden="true">🪞</div>', '<div class="spotlight-hero-placeholder" aria-hidden="true" style="color:rgba(255,255,255,0.3)"><i data-lucide="sparkles" width="80" height="80"></i></div>'],
  ['<span aria-hidden="true" style="font-size:2.5rem;">🪞</span>', '<i data-lucide="monitor" width="40" height="40" color="rgba(255,255,255,0.2)"></i>'],
  ['<span aria-hidden="true" style="font-size:2.5rem;">✨</span>', '<i data-lucide="sparkles" width="40" height="40" color="rgba(255,255,255,0.2)"></i>'],
  ['<span aria-hidden="true" style="font-size:2.5rem;">💫</span>', '<i data-lucide="gem" width="40" height="40" color="rgba(255,255,255,0.2)"></i>'],
  ['<span aria-hidden="true" style="font-size:2.5rem;">👑</span>', '<i data-lucide="crown" width="40" height="40" color="rgba(255,255,255,0.2)"></i>'],

  // Form submit & Contact
  ['✅', '<i data-lucide="check-circle" width="16" height="16" style="vertical-align:-3px;margin-right:4px"></i>'],
  ['<div class="contact-item-icon" aria-hidden="true">📞</div>', '<div class="contact-item-icon" aria-hidden="true"><i data-lucide="phone" width="20" height="20"></i></div>'],
  ['<div class="contact-item-icon" aria-hidden="true">📍</div>', '<div class="contact-item-icon" aria-hidden="true"><i data-lucide="map-pin" width="20" height="20"></i></div>'],
  ['<h4>🕐 Business Hours</h4>', '<h4 style="display:flex;align-items:center;gap:6px"><i data-lucide="clock" width="18" height="18"></i> Business Hours</h4>'],

  // Footer & Buttons
  ['<div class="gold-ornament" aria-hidden="true">♛</div>', '<div class="gold-ornament" aria-hidden="true"><i data-lucide="crown" width="20" height="20"></i></div>'],
  ['<span class="footer-contact-icon" aria-hidden="true">📞</span>', '<span class="footer-contact-icon" aria-hidden="true"><i data-lucide="phone" width="14" height="14"></i></span>'],
  ['<span class="footer-contact-icon" aria-hidden="true">📍</span>', '<span class="footer-contact-icon" aria-hidden="true"><i data-lucide="map-pin" width="14" height="14"></i></span>'],
  ['<span class="footer-contact-icon" aria-hidden="true">🕐</span>', '<span class="footer-contact-icon" aria-hidden="true"><i data-lucide="clock" width="14" height="14"></i></span>'],
  ['aria-label="Back to top">↑</button>', 'aria-label="Back to top"><i data-lucide="arrow-up" width="20" height="20"></i></button>'],

  // CTA call btn
  ['📞 Call Us Now', '<i data-lucide="phone-call" width="16" height="16" style="vertical-align:-3px;margin-right:6px"></i> Call Us Now']
];

for (const [search, replace] of map) {
  html = html.split(search).join(replace);
}

fs.writeFileSync('index.html', html, 'utf8');

// Also update js/main.js to initialize Lucide
let js = fs.readFileSync('js/main.js', 'utf8');
if (!js.includes('lucide.createIcons')) {
  js = js.replace('function initAnimations() {', 'function initAnimations() {\n  lucide.createIcons();');
  fs.writeFileSync('js/main.js', js, 'utf8');
}

console.log("Done replacing emojis with Lucide icons");
