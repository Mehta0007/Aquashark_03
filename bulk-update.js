const fs = require('fs');
const path = require('path');
const dir = __dirname;

const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const footerAddressLines = [
  '<li><i class="fa fa-location-dot"></i><span>Showroom/Office: #1, Sai Audumbar Society, Bengaluru - Mumbai Highway, near Torna hotel, Punawale, Pune, Maharashtra 411033</span></li>',
  '<li><i class="fa fa-industry"></i><span>Factory: Gat No. 6/6, Bypass Road, Vitthalnagar, Dehugaon, Haveli, Pune – 412109</span></li>',
  '<li><i class="fa fa-file-invoice"></i><span>GST: 27ABTFA6579L1ZG</span></li>',
  '<li><i class="fa fa-location-dot"></i><span>26th Floor, Amber Gen Tower, Ajman, Dubai, UAE</span></li>',
].join('\n          ');

const replacements = [
  // Replace old short footer location lines with current Aquashark addresses.
  [/<li><i class="fa fa-location-dot"><\/i><span>Pune, Maharashtra &nbsp;\|&nbsp; Dubai, UAE<\/span><\/li>/g, footerAddressLines],
  // Fix duplicate "India & Middle East" line in offices block.
  [/🌍 Dubai, UAE<br>🌍 India &amp; Middle East/g, 'Showroom: Punawale, Pune<br>Factory: Dehugaon, Pune<br>Dubai, UAE'],
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
