const fs = require('fs');

// ─── 1. HTML changes ───────────────────────────────────────────────────────
let html = fs.readFileSync('index.html', 'utf8');

// Remove hero scroll indicator block
html = html.replace(
  /\s*<div class="hero-scroll" aria-hidden="true">[\s\S]*?<\/div>\s*(?=<\/section>)/,
  '\n'
);

// Remove back-to-top button
html = html.replace(
  /\s*<!-- Back-to-top button -->\s*<button class="back-top"[\s\S]*?<\/button>\s*/,
  '\n'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('HTML: removed scroll indicator and back-to-top button');

// ─── 2. CSS changes ────────────────────────────────────────────────────────
let css = fs.readFileSync('css/style.css', 'utf8');

// Remove hero-scroll block
css = css.replace(
  /\/\* Hero scroll indicator \*\/[\s\S]*?@keyframes scrollPulse \{[\s\S]*?\}\s*/,
  ''
);

// Remove back-top block
css = css.replace(
  /\/\* ── Back-to-top button ── \*\/[\s\S]*?\.back-top:hover \{[^}]*\}\s*/,
  ''
);

// Remove custom scrollbar
css = css.replace(/\/\* ── Custom Scrollbar[\s\S]*?\/\* ── Selection color/, '/* ── Selection color');

fs.writeFileSync('css/style.css', css, 'utf8');
console.log('CSS: removed scroll, back-top, and scrollbar styles');

// ─── 3. JS changes ─────────────────────────────────────────────────────────
let js = fs.readFileSync('js/main.js', 'utf8');

// Remove back-to-top JS block
js = js.replace(
  /\/\* ── Back-to-top button ── \*\/[\s\S]*?}\s*$/,
  ''
);

fs.writeFileSync('js/main.js', js, 'utf8');
console.log('JS: removed back-to-top handler');

console.log('Done!');
