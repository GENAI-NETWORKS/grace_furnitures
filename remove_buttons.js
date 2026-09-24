const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /\s*<div class="hero-ctas">[\s\S]*?<\/div>/;
html = html.replace(regex, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Removed hero-ctas block');
