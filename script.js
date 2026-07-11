
// ============================================================
// PRODUCT DATA
// ============================================================
const PRODUCTS = {
  popular: [
    {id:1,  emoji:'🏊', image:'images/products/fiberglass/ibiza.png',    cat:'Fiberglass Pool', name:'  12×6×3ft — (Ibiza Pool)  ',                  price:'Get Quote', rating:'★★★★★', reviews:14, badge:null,      desc:'Bean-shaped cocktail pool with a natural resort-like feel. Perfect for small backyards, wellness zones and landscaped gardens.', specs:'Size: 12×6×3ft · Bean-shaped design · Built-in seating · Low water capacity'},
    {id:2,  emoji:'🏊', image:'images/products/fiberglass/cocktail.png', cat:'Fiberglass Pool', name:'  12×6×3ft — (Cocktail Pool)   ',               price:'Get Quote', rating:'★★★★★', reviews:22, badge:null,      desc:'Compact and stylish — designed for patios, rooftops, urban homes and lounge-style spaces. Efficient temperature control.',     specs:'Size: 12×6×3ft · Rooftop ready · Heated use compatible · Minimal footprint'},
    {id:3,  emoji:'🏊', image:'images/products/fiberglass/manila.png',   cat:'Fiberglass Pool', name:'  14×8×4.4ft — (Manila Pool)  ',               price:'Get Quote', rating:'★★★★★', reviews:31, badge:null,      desc:'Ergonomically designed steps with built-in seating ledge. Perfect for luxury villas and families seeking safe swimming depth.',   specs:'Size: 14×8×4.4ft · Counter current option · 100% Leak-proof · Multiple finishes'},
    {id:4,  emoji:'🏊', image:'images/products/fiberglass/sydney.png',   cat:'Fiberglass Pool', name:'  18×8×4.4ft — (Sydney Pool)  ',               price:'Get Quote', rating:'★★★★★', reviews:28, badge:'POPULAR', desc:'A streamlined family pool designed for activity and fun. Sufficient length for short laps and aqua workouts.',               specs:'Size: 18×8×4.4ft · Uniform depth · Counter current option · Perfect villa pool'},
    {id:5,  emoji:'🏊', image:'images/products/fiberglass/toronto.png',  cat:'Fiberglass Pool', name:'  20×10×4.4ft — (Toronto Pool)',             price:'Get Quote', rating:'★★★★★', reviews:19, badge:null,      desc:'Roomy, stylish pool for premium outdoor lifestyles. Generous width for group use and aquatic games.',                             specs:'Size: 20×10×4.4ft · Heating option · Lap-friendly · Multiple finishes'},
    {id:6,  emoji:'🏊', image:'images/products/fiberglass/mexico.png',    cat:'Fiberglass Pool', name:'  30×14×4.4ft — (Mexico Pool)  ',               price:'Get Quote', rating:'★★★★★', reviews:12, badge:null,      desc:'A generous family pool with premium styling for large backyards and villas. Excellent for floating, swimming and kids\' play.',  specs:'Size: 30×12×4.4ft · Heating option · Lap-friendly · Designer finishes'},
    {id:7,  emoji:'🏊', image:'images/paris.jpeg',   cat:'Fiberglass Pool', name:'32×14ft + Kids Pool — (Paris Pool)   ',       price:'Get Quote', rating:'★★★★★', reviews:8,  badge:'PREMIUM', desc:'Grand pool for resorts, villas and estates. Exceptional length for serious swimmers with optional kids\' pool attachment.',      specs:'Size: 32×14×4.4ft · Kids pool optional · Jacuzzi attached (optional) · Resort-grade'},
    // {id:8,  emoji:'⬆️', image:'images/products/above-ground/bombay.png', name:'Bombay Pool — 14×8×4.4ft',             price:'Get Quote', rating:'★★★★☆', reviews:17, badge:'NEW',     desc:'Premium plug & play above-ground pool with ACP aluminium skirting. Includes filter, pump, LED light and plumbing.',            specs:'ACP Skirting · LED fitted · Sand filter · Circulation pump included · Plug & Play'},
  ],
  bestsellers: [
    {id:9,  emoji:'🛁', image: "images/hottub/Happy-1-900x900.webp", name:'Happy — 5 Person, 47 Jets',          price:'Get Quote', rating:'★★★★★', reviews:41, badge:null,        desc:'2000×2000×900mm. 5 seats with 2 loungers. Bluetooth, LED, ozone. 32 Amp supply.',                                   specs:'Jets: 47 · Seats: 3+2 lounger · Water: 1000L · Pumps: 2×2HP · Bluetooth'},
    {id:10, emoji:'🛁', image: "images/hottub/Palma-edited-900x900.webp", name:'Palma — 5 Person, 83 Jets',          price:'Get Quote', rating:'★★★★★', reviews:36, badge:'TOP PICK',   desc:'2000×2000×900mm. Maximum jet count for deep hydrotherapy. 5 seats + 1 lounger. Bluetooth music system included.',         specs:'Jets: 83 · Seats: 5+1 lounger · Water: 1000L · Pumps: 2×3HP · Bluetooth'},
    {id:11, emoji:'🛁', image: "images/hottub/Santorini-Overhead-View-AI-Gen-cropped-900x900.webp", name:'Santorini — 6 Person, 52 Jets',      price:'Get Quote', rating:'★★★★★', reviews:29, badge:null,        desc:'2100×2100×940mm. 6-person premium range. 5 seats + 1 lounger, Bluetooth, LED lighting, SW ozone.',                    specs:'Jets: 52 · Seats: 5+1 lounger · Water: 1100L · Pumps: 2×3HP · Bluetooth'},
    {id:12, emoji:'🛁', image: "images/hottub/Maximus-Overhead-View-AI-Gen-cropped-900x900.webp", name:'Maximus — 6 Person, 52 Jets',        price:'Get Quote', rating:'★★★★★', reviews:24, badge:null,        desc:'2600×2200×940mm. Largest Platinum Spas model. 5 seats + 1 lounger, perfect for large gatherings.',                      specs:'Jets: 52 · Seats: 5+1 lounger · Pumps: 3×2HP · Bluetooth · 32 Amp'},
    {id:13, emoji:'🛁', image: "images/hottub/LSX 900.png", name:'LSX 900 — 8 Person, 72 Jets',        price:'Get Quote', rating:'★★★★★', reviews:18, badge:'LUXURY',    desc:'Michael Phelps Legend Series. 8 seats, 72 stainless jets, WiFi, 3 water features, EcoPur filtration. The best of Master Spas.',  specs:'Jets: 72 · Seats: 8 · Weight: 1485lb dry · Power: 240V/50A · WiFi module'},
    {id:14, emoji:'🛁', image: "images/hottub/lsx700.jpg", name:'LSX 700 — 5 Person, 62 Jets',        price:'Get Quote', rating:'★★★★★', reviews:15, badge:null,        desc:'Legend Series. StressRelief Neck & Shoulder Seat, contoured lounge, 62 jets. A perennial best-seller.',                    specs:'Jets: 62 · Seats: 5 · Water: 1155L · Power: 240V/50A · WiFi module'},
    {id:15, emoji:'🔥', image: "images/sauna/MP3-sauna.webp", name:'MP3 Sauna — 3 Person Infrared',      price:'Get Quote', rating:'★★★★★', reviews:11, badge:null,        desc:'3-person infrared sauna. Canadian Hemlock wood, chromotherapy LED, wireless audio. 80°F–160°F. Ships in 2 weeks.',           specs:'Capacity: 3 · Size: 60×49×75in · 110V/20A · Chromotherapy LED · Wireless audio'},
    {id:16, emoji:'🔥', image: "images/sauna/barrel-250.jpg", name:'Barrel 250 Sauna — 6 Person',        price:'Get Quote', rating:'★★★★★', reviews:9,  badge:null,        desc:'Outdoor barrel sauna. 40mm Thermo Nordic spruce, panoramic window, 2×LED, Thermo Aspen flooring. 2.5×2.4×2.25m.',          specs:'Capacity: 6 · 2 terrace + 2 sauna benches · Panoramic window · Nordic spruce'},
  ],
  toprated: [
    {id:17, emoji:'🌊', image: "images/swimspa/Trainer 21D Swim.png", name:'Trainer 21D Swim Spa',               price:'Get Quote', rating:'★★★★★', reviews:27, badge:'BESTSELLER', desc:'53cm×239cm×153cm. 47 jets, Air-Injected VIP Technology propulsion, 4 pumps, EcoPur filtration, LED lighting.',            specs:'Jets: 47+51 stainless · Water: 6928L · Power: 240V/100A · Pumps: 4 · VIP Technology'},
    {id:18, emoji:'🌊', image: "images/swimspa/Challenger 21D Swim Spa.png", name:'Challenger 21D Swim Spa',            price:'Get Quote', rating:'★★★★★', reviews:21, badge:null,        desc:'653cm×239cm×153cm. Largest swim spa. 5 pumps, Airless VIP Technology, 53 jets, Master Blasters foot therapy.',             specs:'Jets: 47+53 stainless · Water: 6928L · Power: 240V/100A · Pumps: 5 · Airless VIP'},
    {id:19, emoji:'🌊', image: "images/swimspa/MP pro.png", name:'MP Signature Pro SwimSpa',           price:'Get Quote', rating:'★★★★★', reviews:16, badge:'PREMIUM',   desc:'587cm×239cm×153cm. Air-Injected VIP Technology. 53 jets, WiFi touch control, EcoPur filtration, waterline LED.',          specs:'Jets: 53 · Water: 9255L · Power: 240V/60A · WiFi · EcoPur Charge filtration'},
    {id:20, emoji:'🌊', image: "images/swimspa/Helios Swim Spa.png", name:'Helios Swim Spa — 5 Person',         price:'Get Quote', rating:'★★★★★', reviews:13, badge:null,        desc:'5900×2250×1500mm. 53 total jets, 3×3HP swim pumps, Bluetooth, SW ozone. Platinum Premium Shield insulation.',             specs:'Jets: 53 · Seats: 4+1 lounger · Water: 10500L · Pumps: 3×3HP swim · Bluetooth'},
    {id:21, emoji:'🌊', image: "images/swimspa/Zelus Swimspas (1).png", name:'Zelus Swim Spa — 3 Person',          price:'Get Quote', rating:'★★★★★', reviews:10, badge:null,        desc:'5900×2250×1500mm. 42 jets, 3 swim pumps, Bluetooth. Compact swim spa perfect for home fitness.',                         specs:'Jets: 42 · Seats: 2+1 lounger · Water: 9800L · Pumps: 3×3HP swim · Bluetooth'},
    {id:22, emoji:'🧊', image: "images/sauna/chill tub origina;.jpg", name:'Chill Tubs Original',                price:'Get Quote', rating:'★★★★★', reviews:19, badge:null,        desc:'Stainless steel 316. 400L capacity. Cools to 3°C. Built-in ozone purification system. Antifreeze function included.',     specs:'Material: SS316 · Water: 400L · Min: 3°C · Power: 13A/220V · Ozone filter'},
    {id:23, emoji:'🧊', image: "images/sauna/Chill-Tub-Pro.jpg", name:'Chill Tubs Pro',                     price:'Get Quote', rating:'★★★★★', reviews:14, badge:'NEW',       desc:'Touchscreen + built-in WiFi. Aristech Acrylic, 700L, 3°C to 40°C range. LED corner lighting. Premium cold therapy.',      specs:'Material: Acrylic · Water: 700L · Temp: 3°C–40°C · WiFi · LED lighting'},
    {id:24, emoji:'🧊', image: "images/chill tubs/AlpineTerrain_Lifestyle_DSC4967-web.webp", name:'Alpine Cold Tub',                    price:'Get Quote', rating:'★★★★★', reviews:11, badge:null,        desc:'84×42×30in. 120 gallon. 2.1HP, 2 jets, LED lighting. Power: 120V/15A. 1-2 person cold plunge experience.',               specs:'Capacity: 1 · Fill: 455L · Power: 120V/15A · HP: 2.1 · LED lighting'},
    {id:25, emoji:'⚙️', image: "images/sauna/rooftop.jpg", name:'Rooftop Stainless Steel Pool',       price:'Get Quote', rating:'★★★★★', reviews:7,  badge:'CUSTOM',     desc:'Lightweight, hygienic stainless steel pool system for rooftop, infinity, competition and commercial aquatic projects.',       specs:'Partner: Natare · Lightweight · Waterproof · Hygienic · Custom engineered'},
    {id:26, emoji:'💧', image: "images/sauna/hydrotherapy.jpg", name:'Rehabilitation Hydrotherapy Pool',   price:'Get Quote', rating:'★★★★★', reviews:6,  badge:'CUSTOM',     desc:'Medical and rehabilitation pool solution with therapy jets, underwater treadmill and variable depth floor options.',          specs:'Therapy jets · Underwater treadmill option · Variable depth option · Hospitals · Sports facilities'},
  ]
};

// ============================================================
// CART & WISHLIST STATE
// ============================================================
let cart = JSON.parse(sessionStorage.getItem('asCart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('asWishlist') || '[]');
let currentModalProduct = null;
let modalQty = 1;

function saveCart(){ sessionStorage.setItem('asCart', JSON.stringify(cart)); }
function updateCartBadge(){
  const badge = document.getElementById('cartBadge');
  if(!badge) return;
  const total = cart.reduce((s,i)=>s+i.qty,0);
  badge.textContent = total;
}

// ============================================================
// CATEGORY HELPER
// ============================================================
function getCategoryFromProduct(p) {
  const name = (p.name || '').toLowerCase();
  if (name.includes('fiberglass pool') || name.includes('ibiza') || name.includes('cocktail') || name.includes('manila') || name.includes('sydney') || name.includes('toronto') || name.includes('paris') || name.includes('mexico')) return 'Fiberglass Pool';
  if (name.includes('above ground') || name.includes('bombay')) return 'Above Ground Pool';
  if (name.includes('swim spa') || name.includes('trainer') || name.includes('challenger') || name.includes('mp signature') || name.includes('helios') || name.includes('zelus')) return 'Swim Spa';
  if (name.includes('hot tub') || name.includes('happy') || name.includes('palma') || name.includes('santorini') || name.includes('maximus') || name.includes('lsx')) return 'Hot Tub';
  if (name.includes('cold tub') || name.includes('chill tub') || name.includes('alpine')) return 'Cold Tub';
  if (name.includes('sauna') || name.includes('barrel')) return 'Sauna';
  if (name.includes('stainless steel') || name.includes('natare')) return 'Stainless Steel Pool';
  if (name.includes('hydrotherapy') || name.includes('rehab')) return 'Hydrotherapy Pool';
  return 'Unknown Category';
}

// ============================================================
// PRODUCT CARD HELPERS
// ============================================================
function getCatGradient(product){
  const cat = getCategoryFromProduct(product);
  if(cat.includes('Hot Tub'))      return 'linear-gradient(135deg,#023e8a 0%,#0077b6 100%)';
  if(cat.includes('Swim Spa'))     return 'linear-gradient(135deg,#005f73 0%,#0a9396 100%)';
  if(cat.includes('Sauna'))        return 'linear-gradient(135deg,#7b2d00 0%,#d4470a 100%)';
  if(cat.includes('Cold Tub'))     return 'linear-gradient(135deg,#0c4a6e 0%,#0369a1 100%)';
  if(cat.includes('Above Ground')) return 'linear-gradient(135deg,#065f46 0%,#059669 100%)';
  return 'linear-gradient(135deg,#0077b6 0%,#00b4d8 100%)';
}

function productCardHTML(p){
  const inWishlist = wishlist.includes(p.id);
  const category = getCategoryFromProduct(p);
  const imageHtml = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="product-img">`
    : `<div class="product-emoji-card" style="background:${getCatGradient(p.cat)}"><span class="product-emoji-icon">${p.emoji}</span></div>`;
  const specsPreview = (p.specs || '')
    .split('·').map(item=>item.trim()).filter(Boolean).slice(0,2)
    .map(item=>`<span class="product-spec-pill">${item}</span>`).join('');
  const priceHtml = `<span class="product-price" style="font-size:13px;color:var(--primary);font-weight:700;">${p.price}</span>`;
  const btnHtml  = `<button class="product-add-btn" onclick="openQuickView(${p.id})"><i class="fa fa-circle-info" style="margin-right:5px;font-size:11px;"></i>Get Details</button>`;
  const badgeHtml = p.badge ? `<span class="product-badge${p.badge==='NEW'?' new':''}">${p.badge}</span>` : '';
  return `
    <div class="product-card" data-id="${p.id}" data-name="${p.name.toLowerCase()}">
      ${badgeHtml}
      <div class="product-actions">
        <button class="product-action-btn" title="Quick View" onclick="openQuickView(${p.id})"><i class="fa fa-eye"></i></button>
        <button class="product-action-btn" title="Compare"><i class="fa fa-code-compare"></i></button>
        <button class="product-action-btn wishlist-btn${inWishlist?' wishlisted':''}" title="Wishlist" onclick="toggleWishlist(${p.id},this)">
          <i class="${inWishlist?'fas':'far'} fa-heart"></i>
        </button>
      </div>
      <div class="product-img-wrap">
        <div class="product-img-stage">${imageHtml}</div>
      </div>
      <div class="product-info">
        <div class="product-cat">${category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating"><span class="stars">${p.rating}</span><span style="font-size:11px;color:#999;">(${p.reviews})</span></div>
        <div class="product-specs-preview">${specsPreview}</div>
        <div class="product-footer-row">
          <div class="product-price-wrap">${priceHtml}</div>
          <button class="product-quick-link" onclick="openQuickView(${p.id})">Quick View</button>
        </div>
        ${btnHtml}
      </div>
    </div>`;
}

// ============================================================
// RENDER PRODUCTS
// ============================================================
function getProduct(id){ for(const t of Object.values(PRODUCTS)){ const p=t.find(x=>x.id===id); if(p) return p; } return null; }

function renderProducts(tab){
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  grid.innerHTML = PRODUCTS[tab].map(p => productCardHTML(p)).join('');
}

// ============================================================
// FILTER BY CATEGORY (category strip pills)
// ============================================================
const CAT_KEYWORDS = {
  'Fiberglass Pools':    'Fiberglass',
  'Above Ground':        'Above Ground',
  'Swim Spas':           'Swim Spa',
  'Hot Tubs':            'Hot Tub',
  'Cold / Chill Tubs':   'Cold Tub',
  'Saunas':              'Sauna',
  'Stainless Steel':     'Stainless',
  'Hydrotherapy':        'Hydro'
};

function filterByCategory(catName, btn){
  document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  if(btn) btn.classList.add('active');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));

  const keyword = CAT_KEYWORDS[catName];
  const grid = document.getElementById('productGrid');
  if(!grid) return;

  const allProducts = [...PRODUCTS.popular, ...PRODUCTS.bestsellers, ...PRODUCTS.toprated];
  const filtered = keyword ? allProducts.filter(p=>getCategoryFromProduct(p).includes(keyword)) : allProducts;

  grid.classList.add('fading');
  setTimeout(()=>{
    if(!filtered.length){
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;">
        <div style="font-size:48px;margin-bottom:12px;">🚧</div>
        <div style="font-size:16px;font-weight:700;color:#1a2330;">Coming Soon</div>
        <div style="font-size:13px;color:#6d7680;margin-top:6px;">Products in this category will be listed shortly.<br>Call us on <strong>+91-9765376667</strong> to enquire.</div>
      </div>`;
    } else {
      grid.innerHTML = filtered.map(p=>productCardHTML(p)).join('');
    }
    grid.classList.remove('fading');
  }, 200);

  const section = document.getElementById('productsSection');
  if(section) section.scrollIntoView({behavior:'smooth', block:'start'});
}

// ============================================================
// TAB SWITCH
// ============================================================
function setTab(btn, tab){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  const grid = document.getElementById('productGrid');
  if(!grid) return;
  grid.classList.add('fading');
  setTimeout(()=>{ renderProducts(tab); grid.classList.remove('fading'); }, 200);
}

// ============================================================
// ADD TO ENQUIRY CART
// ============================================================
function addToCart(id, qty){
  qty = qty||1;
  const p = getProduct(id);
  if(!p) return;
  const ex = cart.find(i=>i.id===id);
  const category = getCategoryFromProduct(p); // Infer category for cart item
  if(ex){ ex.qty+=qty; } else { cart.push({id,name:p.name,emoji:p.emoji,cat:category,price:p.price,qty}); }
  saveCart(); updateCartBadge();
  showToast(`${p.emoji} <strong>${p.name}</strong> added to enquiry`, 'cart');
}
// ============================================================
// CART DRAWER
// ============================================================
function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow='hidden';
  renderCart();
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow='';
}
function renderCart(){
  const c=document.getElementById('cartItems'), f=document.getElementById('cartFooter');
  if(!c||!f) return;
  if(!cart.length){
    c.innerHTML=`<div class="cart-empty"><i class="fa fa-paper-plane"></i><p>No enquiries yet</p><span style="font-size:12px;text-align:center;">Browse products and add them<br>to get a personalised quote</span></div>`;
    f.style.display='none'; return;
  }
  f.style.display='block';
  c.innerHTML=cart.map(item=>`
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info"> 
        <div class="cart-item-cat">${item.cat}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price}</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty(${item.id},-1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})"><i class="fa fa-times"></i></button>
    </div>`).join('');
  document.getElementById('cartTotal').textContent = `${cart.reduce((s,i)=>s+i.qty,0)} product(s)`;
}
function changeQty(id,d){
  const item=cart.find(i=>i.id===id); if(!item) return;
  item.qty+=d;
  if(item.qty<=0) removeFromCart(id,true);
  else { saveCart(); updateCartBadge(); renderCart(); }
}
function removeFromCart(id,silent){
  cart=cart.filter(i=>i.id!==id); saveCart(); updateCartBadge(); renderCart();
  if(!silent) showToast('Item removed from enquiry','cart');
}
function sendEnquiry(){
  if(!cart.length){ showToast('Add at least one product to enquire.','cart'); return; }
  const productList = cart.map(i=>`${i.name} (x${i.qty})`).join(', ');
  const msg = encodeURIComponent(`Hi Aquashark! I'd like a quote for: ${productList}`);
  window.open(`https://wa.me/919765376667?text=${msg}`, '_blank');
}

// ============================================================
// QUICK VIEW
// ============================================================
function openQuickView(id){
  const p=getProduct(id); if(!p) return;
  currentModalProduct=p; modalQty=1;
  const category = getCategoryFromProduct(p); // Infer category for modal
  document.getElementById('modalImg').innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}" class="modal-product-img">`
    : `<div class="product-emoji-card" style="background:${getCatGradient(p)};border-radius:14px;"><span class="product-emoji-icon">${p.emoji}</span></div>`;
  document.getElementById('modalCat').textContent=category; // Display inferred category
  document.getElementById('modalName').textContent=p.name;
  document.getElementById('modalStars').textContent=p.rating;
  document.getElementById('modalReviews').textContent=`(${p.reviews} enquiries)`;
  document.getElementById('modalPriceWrap').innerHTML=`<div class="modal-price">${p.price}</div>`;
  document.getElementById('modalDesc').textContent=p.desc;
  document.getElementById('modalSpecs').innerHTML=`<strong>Specs:</strong> ${p.specs}`;
  document.getElementById('modalQtyVal').textContent='1';
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(e){ if(e.target===document.getElementById('modalOverlay')) closeModalDirect(); }
function closeModalDirect(){ document.getElementById('modalOverlay').classList.remove('open'); document.body.style.overflow=''; }
function changeModalQty(d){ modalQty=Math.max(1,modalQty+d); document.getElementById('modalQtyVal').textContent=modalQty; }
function addFromModal(){ if(!currentModalProduct) return; addToCart(currentModalProduct.id,modalQty); closeModalDirect(); }

// ============================================================
// WISHLIST
// ============================================================
function toggleWishlist(id,btn){
  const idx=wishlist.indexOf(id), p=getProduct(id);
  if(idx===-1){
    wishlist.push(id); btn.classList.add('wishlisted'); btn.querySelector('i').className='fas fa-heart';
    showToast(`${p?p.emoji+' ':''}Saved to wishlist`,'wishlist');
  } else {
    wishlist.splice(idx,1); btn.classList.remove('wishlisted'); btn.querySelector('i').className='far fa-heart';
    showToast('Removed from wishlist','wishlist');
  }
  localStorage.setItem('asWishlist',JSON.stringify(wishlist));
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg,type){
  const c=document.getElementById('toast-container');
  if(!c) return;
  const t=document.createElement('div');
  t.className='toast'+(type==='wishlist'?' wishlist':'');
  t.innerHTML=`<i class="fa ${type==='wishlist'?'fa-heart':'fa-circle-check'}"></i><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(()=>{ t.classList.add('removing'); setTimeout(()=>t.remove(),300); },3000);
}

// ============================================================
// HERO SLIDER
// ============================================================
let current=0;
function updateSlider(){
  const slidesEl=document.getElementById('slides');
  if(!slidesEl) return;
  slidesEl.style.transform=`translateX(-${current*100}%)`;
  document.querySelectorAll('.dot').forEach((d,i)=>d.classList.toggle('active',i===current));
}
function slide(dir){ current=(current+dir+3)%3; updateSlider(); }
function goSlide(i){ current=i; updateSlider(); }
if(document.getElementById('slides')) setInterval(()=>slide(1),6000);

// ============================================================
// COUNTDOWN
// ============================================================
(function(){
  const cdH=document.getElementById('cdH');
  if(!cdH) return;
  let end=parseInt(sessionStorage.getItem('asEnd')||'0');
  if(!end||end<Date.now()){ end=Date.now()+24*3600000; sessionStorage.setItem('asEnd',end); }
  function tick(){
    const d=Math.max(0,end-Date.now());
    document.getElementById('cdH').textContent=String(Math.floor(d/3600000)).padStart(2,'0');
    document.getElementById('cdM').textContent=String(Math.floor(d%3600000/60000)).padStart(2,'0');
    document.getElementById('cdS').textContent=String(Math.floor(d%60000/1000)).padStart(2,'0');
  }
  tick(); setInterval(tick,1000);
})();

// ============================================================
// SEARCH
// ============================================================
const searchInputEl = document.getElementById('searchInput');
if(searchInputEl){
  searchInputEl.addEventListener('keydown',e=>{ if(e.key==='Enter') doSearch(); });
  searchInputEl.addEventListener('input',function(){
    if(!this.value) document.querySelectorAll('.product-card').forEach(c=>c.classList.remove('search-highlight','search-dim'));
  });
}
function doSearch(){
  const inp=document.getElementById('searchInput');
  if(!inp) return;
  const q=inp.value.trim().toLowerCase();
  const cards=document.querySelectorAll('.product-card');
  if(!q){ cards.forEach(c=>c.classList.remove('search-highlight','search-dim')); return; }
  const section=document.getElementById('productsSection');
  if(section) section.scrollIntoView({behavior:'smooth',block:'start'});
  let any=false;
  cards.forEach(c=>{
    if((c.dataset.name||'').includes(q)){ c.classList.add('search-highlight'); c.classList.remove('search-dim'); any=true; }
    else { c.classList.add('search-dim'); c.classList.remove('search-highlight'); }
  });
  if(!any){ cards.forEach(c=>c.classList.remove('search-highlight','search-dim')); showToast('No products matched your search.','cart'); }
}

// ============================================================
// NEWSLETTER
// ============================================================
function subscribeNewsletter(){
  const i=document.getElementById('newsletterEmail'), m=document.getElementById('newsletterMsg');
  if(!i||!m) return;
  const v=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.value.trim());
  if(!i.value.trim()){ m.textContent='Please enter your email.'; m.className='newsletter-msg error'; return; }
  if(!v){ m.textContent='Please enter a valid email.'; m.className='newsletter-msg error'; return; }
  m.textContent='✓ Subscribed! You\'ll receive our latest updates.'; m.className='newsletter-msg success'; i.value='';
  setTimeout(()=>{ m.textContent=''; m.className='newsletter-msg'; },5000);
}

// ============================================================
// ESC KEY
// ============================================================
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeModalDirect();
    if(document.getElementById('cartDrawer')) closeCart();
    closeMobileNav();
  }
});

// ============================================================
// CATEGORY STRIP SLIDER
// ============================================================
let catPage = 0;

function getCategoryPageSize(){
  if(window.innerWidth <= 640) return 1;
  if(window.innerWidth <= 1024) return 3;
  return 4;
}
function getCategoryPageCount(){
  const items = document.querySelectorAll('.cat-pill').length;
  return Math.max(1, Math.ceil(items / getCategoryPageSize()));
}
function updateCategoryStrip(){
  const track = document.getElementById('catTrack');
  if(!track) return;
  const pages = getCategoryPageCount();
  catPage = Math.max(0, Math.min(catPage, pages - 1));
  const pageSize = getCategoryPageSize();
  const offset = (100 / pageSize) * pageSize * catPage;
  track.style.transform = `translateX(-${offset}%)`;
}
function moveCategoryStrip(direction){ catPage += direction; updateCategoryStrip(); }
function goCategoryPage(page){ catPage = page; updateCategoryStrip(); }
window.addEventListener('resize', updateCategoryStrip);

// ============================================================
// PRODUCT DETAIL GALLERY
// ============================================================
function selectPoolModel(btn, image, name, size, desc){
  const mainImage = document.getElementById('poolMainImage');
  const modelName = document.getElementById('poolModelName');
  const modelSize = document.getElementById('poolModelSize');
  const modelDesc = document.getElementById('poolModelDesc');
  if(mainImage) {
    mainImage.src = image;
    mainImage.alt = `${name} fiberglass pool model`;
  }
  if(modelName) modelName.textContent = name;
  if(modelSize) modelSize.textContent = size;
  if(modelDesc) modelDesc.textContent = desc;
  document.querySelectorAll('.detail-thumbs button').forEach(item=>item.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function selectSwimSpaModel(btn, image, name, brand, desc){
  const mainImage = document.getElementById('swimSpaMainImage');
  const modelName = document.getElementById('swimSpaModelName');
  const modelBrand = document.getElementById('swimSpaModelBrand');
  const modelDesc = document.getElementById('swimSpaModelDesc');
  if(mainImage) {
    mainImage.src = image;
    mainImage.alt = `${name} swim spa model`;
  }
  if(modelName) modelName.textContent = name;
  if(modelBrand) modelBrand.textContent = brand;
  if(modelDesc) modelDesc.textContent = desc;
  document.querySelectorAll('.detail-thumbs button').forEach(item=>item.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function selectHotTubModel(btn, image, name, brand, desc){
  const mainImage = document.getElementById('hotTubMainImage');
  const modelName = document.getElementById('hotTubModelName');
  const modelBrand = document.getElementById('hotTubModelBrand');
  const modelDesc = document.getElementById('hotTubModelDesc');
  if(mainImage) {
    mainImage.src = image;
    mainImage.alt = `${name} model`;
  }
  if(modelName) modelName.textContent = name;
  if(modelBrand) modelBrand.textContent = brand;
  if(modelDesc) modelDesc.textContent = desc;
  document.querySelectorAll('.detail-thumbs button').forEach(item=>item.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function selectDetailModel(btn, image, imageId, name, nameId, meta, metaId, desc, descId){
  const mainImage = document.getElementById(imageId);
  const modelName = document.getElementById(nameId);
  const modelMeta = document.getElementById(metaId);
  const modelDesc = document.getElementById(descId);
  if(mainImage && image) {
    mainImage.src = image;
    mainImage.alt = `${name} product model`;
  }
  if(modelName) modelName.textContent = name;
  if(modelMeta) modelMeta.textContent = meta;
  if(modelDesc) modelDesc.textContent = desc;
  document.querySelectorAll('.detail-thumbs button').forEach(item=>item.classList.remove('active'));
  if(btn) btn.classList.add('active');
}

function toggleMobileSubMenu(btn){
  const sub    = btn.nextElementSibling;
  const isOpen = sub.classList.contains('open');
  // close all open sub-menus first
  document.querySelectorAll('.mnav-sub.open').forEach(s=>{
    s.classList.remove('open');
    if(s.previousElementSibling) s.previousElementSibling.classList.remove('open');
  });
  if(!isOpen){
    sub.classList.add('open');
    btn.classList.add('open');
  }
}

// ============================================================
// INIT
// ============================================================
if(document.getElementById('productGrid')) renderProducts('popular');
updateCartBadge();
if(document.getElementById('catTrack')) updateCategoryStrip();

// ============================================================
// MOBILE NAV — inject hamburger + drawer into every page
// ============================================================
(function(){
  const ha = document.querySelector('.header-actions');
  if(ha){
    const btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.id = 'navToggle';
    btn.setAttribute('aria-label','Toggle navigation');
    btn.innerHTML = '<span></span><span></span><span></span>';
    btn.onclick = toggleMobileNav;
    ha.appendChild(btn);
  }
  document.body.insertAdjacentHTML('beforeend',`
<div class="mobile-nav-overlay" id="mobileNavOverlay"></div>
<nav class="mobile-nav" id="mobileNav" aria-label="Mobile navigation">
  <div class="mobile-nav-head">
    <a href="index.html" style="text-decoration:none;">
      <span style="font-family:Poppins,sans-serif;font-size:18px;font-weight:900;color:var(--primary-dark);">Aqua<span style="color:var(--aqua);">shark</span></span>
      <span style="display:block;font-size:9px;font-weight:600;color:var(--text-light);letter-spacing:1.5px;text-transform:uppercase;">Pools &amp; Spas</span>
    </a>
    <button class="mobile-nav-close" onclick="closeMobileNav()" aria-label="Close menu"><i class="fa fa-times"></i></button>
  </div>
  <div class="mob-search">
    <input type="text" id="mobSearchInput" placeholder="Search pools, spas...">
    <button onclick="doMobSearch()"><i class="fa fa-search"></i></button>
  </div>
  <div class="mobile-nav-links">
    <a href="index.html" class="mob-link">Home</a>
    <details class="mob-accordion">
      <summary class="mob-link">Products <i class="fa fa-chevron-down"></i></summary>
      <div class="mob-sub">
        <a href="fiberglass-pools.html"><i class="fa fa-water"></i> Fiberglass Pools</a>
        <a href="above-ground-pools.html"><i class="fa fa-person-swimming"></i> Above Ground Pools</a>
        <a href="swim-spas.html"><i class="fa fa-hot-tub-person"></i> Swim Spas</a>
        <a href="hot-tubs.html"><i class="fa fa-bath"></i> Hot Tubs</a>
        <a href="cold-tubs.html"><i class="fa fa-snowflake"></i> Cold / Chill Tubs</a>
        <a href="saunas.html"><i class="fa fa-fire"></i> Saunas</a>
        <a href="stainless-steel-pools.html"><i class="fa fa-gear"></i> Stainless Steel Pools</a>
        <a href="hydrotherapy-pools.html"><i class="fa fa-heart-pulse"></i> Hydrotherapy Pools</a>
      </div>
    </details>
    <details class="mob-accordion">
      <summary class="mob-link">Brands <i class="fa fa-chevron-down"></i></summary>
      <div class="mob-sub">
        <a href="brands.html#platinum-spas"><i class="fa fa-star"></i> Platinum Spas (UK)</a>
        <a href="brands.html#master-spas"><i class="fa fa-star"></i> Master Spas (USA)</a>
        <a href="brands.html#michael-phelps"><i class="fa fa-medal"></i> Michael Phelps Swim Spas</a>
        <a href="cold-tubs.html"><i class="fa fa-snowflake"></i> Chilly Goat (USA)</a>
        <a href="saunas.html"><i class="fa fa-fire"></i> Sweaty Goat Saunas</a>
        <a href="brands.html#natare"><i class="fa fa-gear"></i> Natare Systems</a>
        <a href="pooltron.html"><i class="fa fa-shield-halved"></i> Pooltron® (UK)</a>
      </div>
    </details>
    <details class="mob-accordion">
      <summary class="mob-link">Company <i class="fa fa-chevron-down"></i></summary>
      <div class="mob-sub">
        <a href="about.html"><i class="fa fa-circle-info"></i> About Aquashark</a>
        <a href="about.html#awards"><i class="fa fa-trophy"></i> Awards &amp; Accolades</a>
        <a href="about.html#team"><i class="fa fa-users"></i> Our Team</a>
        <a href="brands.html"><i class="fa fa-globe"></i> Global Partners</a>
        <a href="resources.html#blog"><i class="fa fa-newspaper"></i> Blog</a>
      </div>
    </details>
    <a href="wellness.html" class="mob-link">Wellness</a>
    <a href="projects.html" class="mob-link">Projects</a>
    <a href="resources.html" class="mob-link">Resources</a>
    <a href="contact.html" class="mob-link">Contact</a>
  </div>
  <div class="mobile-nav-footer">
    <a href="contact.html" class="mob-enquire-btn"><i class="fa fa-phone"></i> Enquire Now</a>
    <div class="mob-contact-info">
      <a href="tel:+919765376667"><i class="fa fa-phone"></i>+91-9765376667</a>
      <a href="mailto:info@aquashark.in"><i class="fa fa-envelope"></i>info@aquashark.in</a>
    </div>
  </div>
</nav>`);
  const ov = document.getElementById('mobileNavOverlay');
  if(ov) ov.onclick = closeMobileNav;
})();

function toggleMobileNav(){
  const nav=document.getElementById('mobileNav');
  const ov=document.getElementById('mobileNavOverlay');
  const btn=document.getElementById('navToggle');
  if(nav&&nav.classList.contains('open')){ closeMobileNav(); return; }
  if(nav) nav.classList.add('open');
  if(ov) ov.classList.add('open');
  if(btn) btn.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeMobileNav(){
  const nav=document.getElementById('mobileNav');
  const ov=document.getElementById('mobileNavOverlay');
  const btn=document.getElementById('navToggle');
  if(nav) nav.classList.remove('open');
  if(ov) ov.classList.remove('open');
  if(btn) btn.classList.remove('open');
  document.body.style.overflow='';
}
function doMobSearch(){
  const inp=document.getElementById('mobSearchInput');
  if(!inp) return;
  const si=document.getElementById('searchInput');
  if(si) si.value=inp.value;
  closeMobileNav();
  if(inp.value.trim()) doSearch();
}

                                                    