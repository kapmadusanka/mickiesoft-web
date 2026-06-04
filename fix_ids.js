const fs = require('fs');
const path = require('path');

function walk(d) {
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    if (fs.statSync(p).isDirectory()) {
      walk(p);
    } else if (p.endsWith('.json')) {
      let c = fs.readFileSync(p, 'utf8');
      let changed = false;
      if (c.includes('<h2>Introduction to ')) {
        c = c.replace(/<h2>Introduction to /g, '<h2 id="introduction">Introduction to ');
        c = c.replace(/<h3>Key Benefits<\/h3>/g, '<h3 id="key-benefits">Key Benefits</h3>');
        c = c.replace(/<h2>Conclusion<\/h2>/g, '<h2 id="conclusion">Conclusion</h2>');
        changed = true;
      }
      if (c.includes(' පිළිබඳ හැඳින්වීම</h2>')) {
        c = c.replace(/<h2>(.*? පිළිබඳ හැඳින්වීම)<\/h2>/g, '<h2 id="introduction">$1</h2>');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(p, c);
      }
    }
  }
}

walk('data/blog/details');
console.log('Fixed IDs');
