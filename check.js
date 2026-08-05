const fs = require('fs');
const list = JSON.parse(fs.readFileSync('data/blog/list/en.json'));
let missing = false;
list.forEach(p => {
  if (!fs.existsSync(`data/blog/details/${p.slug}/en.json`)) {
    console.log(`Missing details for ${p.slug}`);
    missing = true;
  }
});
if (!missing) console.log("All blog posts have details files.");
