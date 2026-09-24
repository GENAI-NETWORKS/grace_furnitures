const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Replace logo-badge in index.html
const regex = /<div class="logo-badge"[^>]*>[\s\S]*?<\/div>/g;

html = html.replace(regex, '<img src="images/logo.png" alt="GRACE Logo" class="logo-img" />');

fs.writeFileSync('index.html', html, 'utf8');

// Also, add CSS for logo-img
let css = fs.readFileSync('css/style.css', 'utf8');
if (!css.includes('.logo-img')) {
  css = css.replace('.logo-badge {', '.logo-img {\n  height: 50px;\n  width: auto;\n  display: block;\n}\n\n.logo-badge {');
  fs.writeFileSync('css/style.css', css, 'utf8');
}

console.log('Logo replaced successfully.');
