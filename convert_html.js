const fs = require('fs');
const path = require('path');

let html = fs.readFileSync('legacy/index.html', 'utf8');

// Basic replacements for JSX
html = html.replace(/class=/g, 'className=');
html = html.replace(/for=/g, 'htmlFor=');
html = html.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
html = html.replace(/<img(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
html = html.replace(/<br>/g, '<br />');
html = html.replace(/<hr(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
html = html.replace(/<input(.*?)>/g, (match) => {
    if (match.endsWith('/>')) return match;
    return match.replace(/>$/, ' />');
});
html = html.replace(/<textarea(.*?)>(.*?)<\/textarea>/g, '<textarea$1>$2</textarea>');
// Fix inline styles
html = html.replace(/style="([^"]*)"/g, (match, p1) => {
    const styleObj = p1.split(';').filter(s => s.trim()).reduce((acc, style) => {
        const [key, value] = style.split(':').map(s => s.trim());
        if (key && value) {
            const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
            acc[camelKey] = value;
        }
        return acc;
    }, {});
    return `style={${JSON.stringify(styleObj)}}`;
});

// Extract body contents
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
let bodyContent = bodyMatch ? bodyMatch[1] : html;

// Remove script tags from body
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

const pageTsx = `
import { LucideIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      ${bodyContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageTsx);
console.log('Converted index.html to page.tsx');
