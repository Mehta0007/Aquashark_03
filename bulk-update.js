const fs = require('fs');
const path = require('path');
const dir = __dirname;

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = [
  // Fix "North Goa" in short footers
  [/Pune, Maharashtra &nbsp;\|&nbsp; North Goa/g, 'Pune, Maharashtra &nbsp;|&nbsp; Dubai, UAE'],
  // Fix duplicate "India & Middle East" line in offices block
  [/🌍 Dubai, UAE<br>🌍 India &amp; Middle East/g, '🌍 Dubai, UAE'],
  // Fix contact.html Goa office card (full address block)
  [/1390, Maximiana Villa, Madel,<br>\s*Thivim, North Goa – 403502<br>\s*Goa, India/g,
   '26th Floor, Amber Gen Tower,<br>Ajman, Dubai, UAE'],
];

let totalFiles = 0;
htmlFiles.forEach(file => {
  const filepath = path.join(dir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  let changed = false;
  replacements.forEach(([from, to]) => {
    const next = content.replace(from, to);
    if (next !== content) { changed = true; content = next; }
  });
  if (changed) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log('Updated:', file);
    totalFiles++;
  }
});
console.log(`\nDone — ${totalFiles} files updated.`);
