const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Card 6 replacement - find by the unique comment marker
const card6Old = /<!-- Card 6: Sofa Sets \(placeholder\) -->[\s\S]*?<\/article>/;
const card6New = `<!-- Card 6: Sofa Sets -->
      <article class="cat-card reveal-up" role="listitem" tabindex="0" aria-label="Sofa Sets">
        <img src="images/cat_sofa.jpg" alt="Premium luxury sofa set with gold velvet upholstery" class="cat-card-img" loading="lazy" />
        <div class="cat-card-overlay">
          <span class="cat-num">06</span>
          <span class="cat-name">Sofa Sets</span>
        </div>
        <div class="cat-hover-panel">
          <span class="cat-hover-title">Sofa Sets</span>
          <p class="cat-hover-desc">L-shaped, sectional, and classic sofa sets with premium fabric and leather options.</p>
          <a href="#contact" class="cat-view-link" aria-label="Enquire about Sofa Sets">Enquire Now \u2192</a>
        </div>
      </article>`;

// Card 7 replacement
const card7Old = /<!-- Card 7: Dressing Tables \(placeholder\) -->[\s\S]*?<\/article>/;
const card7New = `<!-- Card 7: Dressing Tables -->
      <article class="cat-card reveal-up" role="listitem" tabindex="0" aria-label="Dressing Tables">
        <img src="images/cat_dressing.jpg" alt="Elegant wooden dressing table with oval LED mirror" class="cat-card-img" loading="lazy" />
        <div class="cat-card-overlay">
          <span class="cat-num">07</span>
          <span class="cat-name">Dressing Tables</span>
        </div>
        <div class="cat-hover-panel">
          <span class="cat-hover-title">Dressing Tables</span>
          <p class="cat-hover-desc">Modern vanity and dressing tables with mirrors, drawers, and various finish options.</p>
          <a href="#contact" class="cat-view-link" aria-label="Enquire about Dressing Tables">Enquire Now \u2192</a>
        </div>
      </article>`;

// Card 8 replacement
const card8Old = /<!-- Card 8: Custom Solutions \(placeholder\) -->[\s\S]*?<\/article>/;
const card8New = `<!-- Card 8: Custom Solutions -->
      <article class="cat-card reveal-up" role="listitem" tabindex="0" aria-label="Customized Solutions">
        <img src="images/cat_custom.jpg" alt="Artisan craftsman building bespoke wooden furniture" class="cat-card-img" loading="lazy" />
        <div class="cat-card-overlay">
          <span class="cat-num">08</span>
          <span class="cat-name">Customized Solutions</span>
        </div>
        <div class="cat-hover-panel">
          <span class="cat-hover-title">Customized Solutions</span>
          <p class="cat-hover-desc">Bespoke furniture designed and manufactured to your exact specifications and brand standards.</p>
          <a href="#contact" class="cat-view-link" aria-label="Enquire about Custom Solutions">Enquire Now \u2192</a>
        </div>
      </article>`;

let found = 0;
if (card6Old.test(html)) { html = html.replace(card6Old, card6New); found++; console.log('Card 6 replaced'); }
else console.log('Card 6 NOT found - checking...');

if (card7Old.test(html)) { html = html.replace(card7Old, card7New); found++; console.log('Card 7 replaced'); }
else console.log('Card 7 NOT found');

if (card8Old.test(html)) { html = html.replace(card8Old, card8New); found++; console.log('Card 8 replaced'); }
else console.log('Card 8 NOT found');

if (found > 0) {
  fs.writeFileSync('index.html', html, 'utf8');
  console.log(`Done! ${found} cards replaced.`);
} else {
  // Print snippet around line 319 for debugging
  const lines = html.split('\n');
  console.log('Lines 318-322:', lines.slice(317, 322).join('\n'));
}
