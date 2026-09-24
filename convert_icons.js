const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

const iconsToImport = new Set();

pageContent = pageContent.replace(/<i data-lucide="([^"]+)"(.*?)><\/i>/g, (match, iconName, attributes) => {
    // Convert kebab-case to PascalCase for the React component
    const componentName = iconName
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
    
    iconsToImport.add(componentName);

    // convert width, height, color from HTML attributes to JSX props if needed
    // The attributes string might have width="24" height="24" etc.
    let jsxProps = attributes;
    jsxProps = jsxProps.replace(/class=/g, 'className=');
    return `<${componentName}${jsxProps} />`;
});

// also fix svgs
pageContent = pageContent.replace(/stroke-width/g, 'strokeWidth');
pageContent = pageContent.replace(/stroke-linecap/g, 'strokeLinecap');
pageContent = pageContent.replace(/stroke-linejoin/g, 'strokeLinejoin');

const imports = `import { ${Array.from(iconsToImport).join(', ')} } from 'lucide-react';\n`;
pageContent = pageContent.replace("import { LucideIcon } from 'lucide-react';", imports);

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Icons and SVGs converted to React components');
