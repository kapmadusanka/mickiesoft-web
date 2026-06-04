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
      if (c.includes('id="introduction"')) {
        c = c.replace(/id="introduction"/g, 'id=\\"introduction\\"');
        changed = true;
      }
      if (c.includes('id="key-benefits"')) {
        c = c.replace(/id="key-benefits"/g, 'id=\\"key-benefits\\"');
        changed = true;
      }
      if (c.includes('id="conclusion"')) {
        c = c.replace(/id="conclusion"/g, 'id=\\"conclusion\\"');
        changed = true;
      }
      if (c.includes('id="what-is"')) {
        c = c.replace(/id="what-is"/g, 'id=\\"what-is\\"');
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(p, c);
        // Verify JSON is now valid
        try {
          JSON.parse(fs.readFileSync(p, 'utf8'));
        } catch (e) {
          console.error(`File ${p} is still invalid JSON: ${e.message}`);
        }
      }
    }
  }
}
walk('data/blog/details');
console.log('Fixed quotes in JSON files');
