/* ============================================================
   AQUASHARK · HOT TUBS PAGE JS
   Append to your existing script.js
   ============================================================ */

(function(){
  'use strict';

  // Only run on the hot tubs page
  if (!document.getElementById('ht-finder')) return;

  // ============ FILTER LOGIC ============
  const filterState = {
    capacity: 'all',
    jets: 'all',
    range: 'all',
    brand: 'all'
  };

  const cards = Array.from(document.querySelectorAll('.ht-card'));
  const matchCount = document.getElementById('ht-match-count');

  function jetBucket(n){
    n = parseInt(n, 10);
    if (n < 50) return 'low';
    if (n <= 80) return 'mid';
    return 'high';
  }

  function cardMatches(card){
    if (filterState.capacity !== 'all' && card.dataset.capacity !== filterState.capacity) return false;
    if (filterState.range !== 'all' && card.dataset.range !== filterState.range) return false;
    if (filterState.brand !== 'all' && card.dataset.brand !== filterState.brand) return false;
    if (filterState.jets !== 'all' && jetBucket(card.dataset.jets) !== filterState.jets) return false;
    return true;
  }

  function applyFilters(){
    let count = 0;
    cards.forEach(card => {
      const match = cardMatches(card);
      card.classList.toggle('ht-hidden', !match);
      if (match) count++;
    });
    if (matchCount) matchCount.textContent = count;

    // Hide brand sections with zero visible cards? We keep them visible
    // because coming-soon blocks should always show for the full picture.
  }

  // Wire up pills
  document.querySelectorAll('.ht-pills').forEach(group => {
    const filterKey = group.dataset.filter;
    group.addEventListener('click', e => {
      const pill = e.target.closest('.ht-pill');
      if (!pill) return;
      group.querySelectorAll('.ht-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterState[filterKey] = pill.dataset.val;
      applyFilters();

      // Smooth scroll to the finder when user interacts
      const firstBrand = document.getElementById('ht-platinum');
      if (firstBrand && window.scrollY < firstBrand.offsetTop - 200) {
        // user is still near finder, don't auto-scroll
      }
    });
  });


  // ============ STICKY BRAND NAV ACTIVE STATE ============
  const brandLinks = document.querySelectorAll('.ht-brandnav-link');
  const brandSections = Array.from(document.querySelectorAll('.ht-brand-section'));

  function updateActiveBrandNav(){
    const scrollPos = window.scrollY + 120;
    let activeId = null;
    for (const section of brandSections) {
      if (section.offsetTop <= scrollPos) activeId = section.id;
    }
    brandLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#','');
      link.classList.toggle('active', href === activeId);
    });
  }

  let scrollTick = false;
  window.addEventListener('scroll', () => {
    if (!scrollTick) {
      requestAnimationFrame(() => {
        updateActiveBrandNav();
        scrollTick = false;
      });
      scrollTick = true;
    }
  });

  // Smooth scroll with offset for sticky nav
  document.querySelectorAll('a[href^="#ht-"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });


  // ============ COMPARE TOOL ============
  // Full spec data — MUST match the HTML card data exactly

const specData = {
  // ─── PLATINUM SPAS · DELUXE ───────────────────────────
  'Happy':         { brand:'Platinum · UK',      range:'Deluxe',        people:5, jets:47, dims:'2,000 × 2,000 × 900 mm', capacity:'1,000 L', weight:'304 kg',  seats:'3 + 2 lounger',  pumps:'2 × 2 HP', heater:'3 kW', amp:'32 Amp' },
  'Palma':         { brand:'Platinum · UK',      range:'Deluxe',        people:5, jets:83, dims:'2,000 × 2,000 × 900 mm', capacity:'1,000 L', weight:'336 kg',  seats:'5 + 1 lounger',  pumps:'2 × 3 HP', heater:'3 kW', amp:'32 Amp' },
  'Refresh':       { brand:'Platinum · UK',      range:'Deluxe',        people:6, jets:49, dims:'2,000 × 2,000 × 900 mm', capacity:'1,000 L', weight:'306 kg',  seats:'3 + 1 lounger',  pumps:'2 × 2 HP', heater:'3 kW', amp:'32 Amp' },
  'Tahiti':        { brand:'Platinum · UK',      range:'Deluxe',        people:3, jets:36, dims:'2,130 × 1,650 × 870 mm', capacity:'900 L',   weight:'251 kg',  seats:'4 seats',        pumps:'1 × 2 HP', heater:'2 kW', amp:'13 Amp' },
 
  // ─── PLATINUM SPAS · PREMIUM ──────────────────────────
  'Barcelona':     { brand:'Platinum · UK',      range:'Premium',       people:5, jets:52, dims:'2,100 × 2,100 × 940 mm', capacity:'—',       weight:'450 kg',  seats:'3 + 2 lounger',  pumps:'2 × 3 HP', heater:'3 kW', amp:'32 Amp' },
  'Lounge Divine': { brand:'Platinum · UK',      range:'Premium',       people:3, jets:42, dims:'2,200 × 1,900 × 800 mm', capacity:'1,100 L', weight:'400 kg',  seats:'1 + 2 lounger',  pumps:'—',        heater:'3 kW', amp:'32 Amp' },
  'Maximus':       { brand:'Platinum · UK',      range:'Premium',       people:6, jets:52, dims:'2,600 × 2,200 × 940 mm', capacity:'—',       weight:'510 kg',  seats:'5 + 1 lounger',  pumps:'3 × 2 HP', heater:'3 kW', amp:'32 Amp' },
  'Santorini':     { brand:'Platinum · UK',      range:'Premium',       people:6, jets:52, dims:'2,100 × 2,100 × 940 mm', capacity:'1,100 L', weight:'490 kg',  seats:'5 + 1 lounger',  pumps:'2 × 3 HP', heater:'3 kW', amp:'32 Amp' },
  'Kenya':         { brand:'Platinum · UK',      range:'Premium',       people:5, jets:52, dims:'2,100 × 2,100 × 940 mm', capacity:'—',       weight:'450 kg',  seats:'3 + 2 lounger',  pumps:'2 × 3 HP', heater:'3 kW', amp:'32 Amp' },
  'Onyx':          { brand:'Platinum · UK',      range:'Premium',       people:5, jets:90, dims:'2,200 × 2,200 × 940 mm', capacity:'1,100 L', weight:'490 kg',  seats:'3 + 2 lounger',  pumps:'4 × 2 HP', heater:'—',    amp:'32 Amp' },
 
  // ─── MICHAEL PHELPS LEGEND SERIES (MASTER SPAS) ───────
  'LSX 700':       { brand:'Phelps Legend · USA', range:'Legend Series', people:5, jets:62, dims:'214 × 214 × 97 cm',      capacity:'1,155 L', weight:'497 kg',  seats:'Lounger + open',  pumps:'3 × pumps', heater:'240 V / 50 Amp', amp:'50 Amp' },
  'LSX 800':       { brand:'Phelps Legend · USA', range:'Legend Series', people:6, jets:70, dims:'239 × 239 × 97 cm',      capacity:'1,552 L', weight:'603 kg',  seats:'Lounger + open',  pumps:'3 × pumps', heater:'240 V / 50 Amp', amp:'50 Amp' },
  'LSX 850':       { brand:'Phelps Legend · USA', range:'Legend Series', people:7, jets:59, dims:'239 × 239 × 97 cm',      capacity:'1,495 L', weight:'531 kg',  seats:'Open seating',    pumps:'3 × pumps', heater:'240 V / 50 Amp', amp:'50 Amp' },
  'LSX 900':       { brand:'Phelps Legend · USA', range:'Legend Series', people:8, jets:72, dims:'275 × 239 × 97 cm',      capacity:'1,855 L', weight:'674 kg',  seats:'Lounger + open',  pumps:'3 × pumps', heater:'240 V / 50 Amp', amp:'50 Amp' },
 
  // ─── PORTCRIL · PORTUGAL (specs TBD from catalogue) ───
  'Essential 2':   { brand:'Portcril · Portugal', range:'Essential',     people:2, jets:'—', dims:'—',                      capacity:'—',       weight:'—',       seats:'—',               pumps:'—',         heater:'—',              amp:'—' },
  'Essential 4':   { brand:'Portcril · Portugal', range:'Essential',     people:4, jets:'—', dims:'—',                      capacity:'—',       weight:'—',       seats:'—',               pumps:'—',         heater:'—',              amp:'—' },
  'Double 320':    { brand:'Portcril · Portugal', range:'Double',        people:5, jets:'—', dims:'—',                      capacity:'—',       weight:'—',       seats:'—',               pumps:'—',         heater:'—',              amp:'—' },
  'Double 520':    { brand:'Portcril · Portugal', range:'Double',        people:6, jets:'—', dims:'—',                      capacity:'—',       weight:'—',       seats:'—',               pumps:'—',         heater:'—',              amp:'—' },
  'Double 620':    { brand:'Portcril · Portugal', range:'Double',        people:6, jets:'—', dims:'—',                      capacity:'—',       weight:'—',       seats:'—',               pumps:'—',         heater:'—',              amp:'—' }
};
  const compareSet = new Set();
  const MAX_COMPARE = 3;

  const tray = document.getElementById('ht-compare-tray');
  const trayItems = document.getElementById('ht-compare-items');
  const trayCount = document.getElementById('ht-compare-count');
  const trayOpen = document.getElementById('ht-compare-open');
  const trayClose = document.getElementById('ht-compare-close');
  const modal = document.getElementById('ht-compare-modal');
  const modalClose = document.getElementById('ht-compare-modal-close');
  const modalTable = document.getElementById('ht-compare-table');

  function renderTray(){
    trayItems.innerHTML = '';
    compareSet.forEach(model => {
      const chip = document.createElement('span');
      chip.className = 'ht-compare-chip';
      chip.innerHTML = model + ' <button type="button" aria-label="Remove ' + model + '">×</button>';
      chip.querySelector('button').addEventListener('click', () => removeFromCompare(model));
      trayItems.appendChild(chip);
    });
    trayCount.textContent = compareSet.size;
    trayOpen.disabled = compareSet.size < 2;
    tray.classList.toggle('active', compareSet.size > 0);
  }

  function removeFromCompare(model){
    compareSet.delete(model);
    // Uncheck the matching checkbox
    document.querySelectorAll('.ht-compare-check').forEach(cb => {
      if (cb.dataset.model === model) cb.checked = false;
    });
    renderTray();
  }

  document.querySelectorAll('.ht-compare-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const model = cb.dataset.model;
      if (cb.checked) {
        if (compareSet.size >= MAX_COMPARE) {
          cb.checked = false;
          alert('You can compare up to ' + MAX_COMPARE + ' hot tubs at a time.');
          return;
        }
        compareSet.add(model);
      } else {
        compareSet.delete(model);
      }
      renderTray();
    });
  });

  trayClose.addEventListener('click', () => {
    compareSet.clear();
    document.querySelectorAll('.ht-compare-check').forEach(cb => cb.checked = false);
    renderTray();
  });

  trayOpen.addEventListener('click', () => {
    if (compareSet.size < 2) return;
    buildCompareTable();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal(){
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

  function buildCompareTable(){
    const models = Array.from(compareSet);
    const rows = [
      ['Brand',          m => specData[m].brand],
      ['Range',          m => specData[m].range],
      ['People',         m => specData[m].people],
      ['Jets',           m => '<strong>' + specData[m].jets + '</strong>'],
      ['Seat layout',    m => specData[m].seats],
      ['Dimensions',     m => specData[m].dims],
      ['Water capacity', m => specData[m].capacity],
      ['Dry weight',     m => specData[m].weight],
      ['Pumps',          m => specData[m].pumps],
      ['Heater',         m => specData[m].heater],
      ['Electrical',     m => specData[m].amp]
    ];

    let html = '<thead><tr><th></th>';
    models.forEach(m => { html += '<th>' + m + '</th>'; });
    html += '</tr></thead><tbody>';

    rows.forEach(([label, getter]) => {
      html += '<tr><td>' + label + '</td>';
      models.forEach(m => { html += '<td>' + getter(m) + '</td>'; });
      html += '</tr>';
    });

    html += '<tr><td></td>';
    models.forEach(m => {
      const msg = encodeURIComponent('Hi Aquashark, I am interested in the ' + m + ' hot tub by Platinum Spas. Please share price and details.');
      html += '<td><a href="https://wa.me/917756999108?text=' + msg + '" target="_blank" rel="noopener" class="ht-btn-wa" style="font-size:11px;padding:8px 12px;"><i class="fab fa-whatsapp"></i> Get price</a></td>';
    });
    html += '</tr></tbody>';

    modalTable.innerHTML = html;
  }


  // ============ INIT ============
  applyFilters();
  updateActiveBrandNav();

})();