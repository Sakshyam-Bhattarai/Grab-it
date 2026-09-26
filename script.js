const CATEGORIES=[
{id:'electronics',name:'Electronics',icon:'💻'},
{id:'grocery',name:'Grocery',icon:'🥑'},
{id:'home',name:'Home & Kitchen',icon:'🍳'},
{id:'fashion',name:'Fashion',icon:'👕'},
{id:'beauty',name:'Beauty',icon:'🧴'},
{id:'sports',name:'Sports',icon:'🏀'}
];
const PRODUCTS=[
{id:'p1',name:'Wireless Noise-Cancelling Headphones',cat:'electronics',price:89.99,orig:119.99,rating:4.6,reviews:312,stock:18,icon:'🎧',trending:true,desc:"Over-ear Bluetooth headphones with active noise cancellation and plush ear cushions for all-day comfort.",specs:['Brand: Grab It Audio','Battery life: 30 hours','Connectivity: Bluetooth 5.2']},
{id:'p2',name:'Smart Fitness Watch',cat:'electronics',price:59.99,rating:4.3,reviews:178,stock:32,icon:'⌚',trending:true,desc:"Track steps, heart rate and sleep with a bright always-on display and a battery that lasts a week.",specs:['Brand: Grab It Fit','Battery life: 7 days','Water resistance: 5 ATM']},
{id:'p3',name:'4K Streaming Media Stick',cat:'electronics',price:34.99,orig:44.99,rating:4.4,reviews:401,stock:0,icon:'📺',desc:"Stream your favorite shows in stunning 4K with built-in voice search and thousands of apps.",specs:['Resolution: 4K Ultra HD','Storage: 8GB','Voice remote: Included']},
{id:'p4',name:'Organic Avocados, 6-Pack',cat:'grocery',price:6.49,rating:4.7,reviews:89,stock:60,icon:'🥑',trending:true,desc:"Ready-to-eat organic avocados, perfect for guacamole, toast or salads.",specs:['Pack size: 6 avocados','Origin: Mexico','Type: Organic']},
{id:'p5',name:'Colombian Ground Coffee, 12oz',cat:'grocery',price:8.99,rating:4.5,reviews:214,stock:45,icon:'☕',desc:"Smooth, medium-roast coffee ground fresh from farms in Colombia's highlands.",specs:['Roast: Medium','Weight: 12 oz','Origin: Colombia']},
{id:'p6',name:'Wildflower Honey, 16oz',cat:'grocery',price:7.29,rating:4.8,reviews:132,stock:3,icon:'🍯',desc:"Raw, unfiltered honey harvested from local wildflower fields.",specs:['Weight: 16 oz','Type: Raw & unfiltered','Origin: Local farms']},
{id:'p7',name:'Non-Stick Frying Pan, 10in',cat:'home',price:24.99,orig:32.99,rating:4.5,reviews:267,stock:22,icon:'🍳',trending:true,desc:"A kitchen staple with a durable non-stick surface that heats evenly and cleans up in seconds.",specs:['Size: 10 inch','Material: Aluminum, non-stick coating','Oven safe: Up to 400°F']},
{id:'p8',name:'Cordless Stick Vacuum',cat:'home',price:119.99,rating:4.2,reviews:98,stock:14,icon:'🧹',desc:"Lightweight cordless vacuum that switches from floors to furniture in one click.",specs:['Runtime: 40 minutes','Weight: 4.2 lbs','Bin capacity: 0.6 L']},
{id:'p9',name:'Scented Soy Candle Trio',cat:'home',price:18.99,rating:4.6,reviews:156,stock:40,icon:'🕯️',desc:"Hand-poured soy candles in three warm scents to freshen any room.",specs:['Scents: Vanilla, Lavender, Cedar','Burn time: 40 hrs each','Wax: Soy blend']},
{id:'p10',name:'Bayern Munich Classic kit(26/27)',cat:'fashion',price:12.99,rating:4.3,reviews:342,stock:80,icon:'👕',trending:true,desc:"A soft, breathable everyday tee that keeps its shape wash after wash.",specs:['Material: 100% cotton','Fit: Regular','Care: Machine washable']},
{id:'p11',name:'Everyday Running Sneakers',cat:'fashion',price:49.99,orig:64.99,rating:4.4,reviews:221,stock:26,icon:'👟',desc:"Cushioned running shoes built for daily mileage and all-day comfort.",specs:['Weight: 9.5 oz','Sole: Cushioned foam','Use: Road running']},
{id:'p12',name:'Lightweight Zip Hoodie',cat:'fashion',price:29.99,rating:4.5,reviews:143,stock:19,icon:'🧥',desc:"A lightweight zip-up hoodie for cool mornings and easy layering.",specs:['Material: Cotton-poly blend','Closure: Full zip','Fit: Relaxed']},
{id:'p13',name:'Hydrating Face Moisturizer',cat:'beauty',price:15.99,rating:4.6,reviews:198,stock:55,icon:'🧴',trending:true,desc:"A lightweight daily moisturizer that hydrates without leaving a greasy feel.",specs:['Skin type: All types','Size: 1.7 oz','Key ingredient: Hyaluronic acid']},
{id:'p14',name:'Matte Lipstick Set',cat:'beauty',price:13.49,rating:4.4,reviews:167,stock:4,icon:'💄',desc:"Four long-wearing matte shades that go from desk to dinner.",specs:['Finish: Matte','Shades: 4 included','Long-wear: Up to 8 hrs']},
{id:'p15',name:'Natural Bar Soap, 4-Pack',cat:'beauty',price:9.99,rating:4.7,reviews:210,stock:70,icon:'🧼',desc:"Gentle, dye-free bar soap for sensitive skin, made with natural ingredients.",specs:['Pack size: 4 bars','Ingredients: Natural, dye-free','Scent: Unscented']},
{id:'p16',name:'Official Size Basketball',cat:'sports',price:19.99,rating:4.5,reviews:121,stock:33,icon:'🏀',desc:"An official-size basketball with a grippy composite cover for indoor or outdoor play.",specs:['Size: Official (size 7)','Material: Composite leather','Use: Indoor/outdoor']},
{id:'p17',name:'Non-Slip Yoga Mat',cat:'sports',price:22.99,orig:27.99,rating:4.6,reviews:189,stock:41,icon:'🧘',trending:true,desc:"An extra-thick, non-slip mat that cushions every pose from studio to living room.",specs:['Thickness: 6mm','Material: TPE, non-slip','Length: 72 inch']},
{id:'p18',name:'Adjustable Bike Helmet',cat:'sports',price:27.99,rating:4.3,reviews:76,stock:12,icon:'🚴',desc:"An adjustable, certified-safe helmet that keeps every ride secure and comfortable.",specs:['Sizes: S/M/L adjustable','Certification: CPSC certified','Weight: 320g']}
];
const STAGES=['Order Placed','Confirmed','Packed','Shipped','Out for Delivery','Delivered'];
const STAGE_MS=45000;
let currentPdId=null, currentPdQty=1, trackInterval=null, toastTimer=null;

/* ---- v2: icons, logo, product art, Google sign-in ---- */
const GOOGLE_CLIENT_ID='509989528803-9okk2ku6a7fhf03lo2d6obpd17283vrn.apps.googleusercontent.com';
const SVG_OPEN='<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">';
const SVG_XL='<svg class="ico ico-xl" viewBox="0 0 24 24" aria-hidden="true">';
const ICON={
  search:SVG_OPEN+'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  user:SVG_OPEN+'<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>',
  cart:SVG_OPEN+'<path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
  menu:SVG_OPEN+'<path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  truck:SVG_OPEN+'<path d="M2 6h12v10H2zM14 10h4l3 3v3h-7"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  ret:SVG_OPEN+'<path d="M9 14L4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/></svg>',
  lock:SVG_OPEN+'<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
  check:SVG_XL+'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/></svg>',
  box:SVG_XL+'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/></svg>',
  emptySearch:SVG_XL+'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></svg>',
  emptyCart:SVG_XL+'<path d="M3 4h2l2.4 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6"/><circle cx="10" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/></svg>',
  facebook:SVG_OPEN+'<path d="M15 3h-2.5A4.5 4.5 0 0 0 8 7.5V11H5v4h3v7h4v-7h3l.5-4H12V7.5a.5.5 0 0 1 .5-.5H15z"/></svg>',
  instagram:SVG_OPEN+'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  x:SVG_OPEN+'<path d="M4 4l16 16M20 4L4 20"/></svg>',
  google:'<svg class="ico-g" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9 3.2l6.7-6.7C35.6 2.4 30.2 0 24 0 14.6 0 6.5 5.4 2.6 13.3l7.8 6C12.3 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.5 2.9-2.2 5.4-4.6 7l7.2 5.6c4.2-3.9 6.6-9.6 6.6-17.1z"/><path fill="#FBBC05" d="M10.4 28.7c-.5-1.4-.8-2.9-.8-4.7s.3-3.3.8-4.7l-7.8-6C.9 16.5 0 20.2 0 24s.9 7.5 2.6 10.7l7.8-6z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.2-5.6c-2 1.4-4.7 2.3-8.7 2.3-6.3 0-11.7-4.1-13.6-9.8l-7.8 6C6.5 42.6 14.6 48 24 48z"/></svg>'
};
const CAT_ICON_PATHS={
  electronics:'<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/>',
  grocery:'<path d="M5 9h14l-1.4 9.3A2 2 0 0 1 15.6 20H8.4a2 2 0 0 1-2-1.98z"/><path d="M8 9V7a4 4 0 0 1 8 0v2"/><path d="M9 13v3M15 13v3"/>',
  home:'<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-6h4v6"/>',
  fashion:'<path d="M8 4L4 8l3 3 1.5-1.2V21h7V9.8L19 11l3-3-4-4-2 1.6a3 3 0 0 1-4 0z"/>',
  beauty:'<path d="M12 2c2.2 3 4.5 6.2 4.5 9.7a4.5 4.5 0 1 1-9 0C7.5 8.2 9.8 5 12 2z"/>',
  sports:'<circle cx="5.5" cy="12" r="2.3"/><circle cx="18.5" cy="12" r="2.3"/><path d="M7.8 12h8.4M2 12h1.4M20.6 12H22"/>'
};
function catIconSvg(id,cls){ return '<svg class="ico '+cls+'" viewBox="0 0 24 24" aria-hidden="true">'+(CAT_ICON_PATHS[id]||CAT_ICON_PATHS.home)+'</svg>'; }
function catIcon(id,cls){
  if(cls==='ico-lg') return '<span class="cat-badge" style="background:'+catTint(id)+'">'+catIconSvg(id,'ico-cat')+'</span>';
  return catIconSvg(id,cls);
}
function prodImg(p){ return '<img src="assets/'+p.id+'.png" alt="'+esc(p.name)+'" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'inline-block\'"><span class="prod-emoji" role="img" aria-label="'+esc(p.name)+'" style="display:none">'+p.icon+'</span>'; }
function logoMark(){ return '<svg class="logo-mark" viewBox="0 0 40 40" aria-hidden="true"><rect class="logo-bg" width="40" height="40" rx="11"/><path class="bag" d="M10 16h20l-2 17H12z"/><path class="handle" d="M15 16v-3a5 5 0 0 1 10 0v3"/></svg><span class="logo-word">Grab<b>It</b></span>'; }
function avatarHTML(u){ return u.picture ? '<img class="avatar-img" src="'+esc(u.picture)+'" alt="">' : '<div class="avatar">'+esc((u.name||'?')[0].toUpperCase())+'</div>'; }
function googleBlock(){ return '<div class="gsi-wrap"><div id="gsiBtn" class="gsi-btn"></div><div class="or-divider"><span>or</span></div></div>'; }

let gsiReady=false, gsiTries=0;
function mountGoogle(){
  const el=document.getElementById('gsiBtn'); if(!el) return;
  if(GOOGLE_CLIENT_ID.startsWith('YOUR_')){
    el.innerHTML='<button type="button" class="btn btn-outline btn-block" onclick="googleNotConfigured()">'+ICON.google+'Continue with Google</button>';
    return;
  }
  if(!(window.google&&google.accounts&&google.accounts.id)){
    if(gsiTries++<30) setTimeout(mountGoogle,300);
    return;
  }
  if(!gsiReady){ google.accounts.id.initialize({client_id:GOOGLE_CLIENT_ID,callback:onGoogleCredential}); gsiReady=true; }
  el.innerHTML='';
  google.accounts.id.renderButton(el,{theme:'outline',size:'large',text:'continue_with',shape:'rectangular',width:Math.min(el.parentElement.clientWidth||360,400)});
}
function googleNotConfigured(){ toast('Google sign-in needs a Client ID. Set GOOGLE_CLIENT_ID in script.js.','error'); }
function onGoogleCredential(resp){
  let p;
  try{
    const b=resp.credential.split('.')[1].replace(/-/g,'+').replace(/_/g,'/');
    p=JSON.parse(decodeURIComponent(atob(b).split('').map(c=>'%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)).join('')));
  }catch(e){ toast('Google sign-in failed. Please try again.','error'); return; }
  const email=String(p.email||'').toLowerCase();
  if(!email){ toast('Google did not return an email address.','error'); return; }
  const users=getUsers(); let u=users.find(x=>x.email===email);
  if(!u){ u={name:p.name||email.split('@')[0],email,password:'',provider:'google',picture:p.picture||'',phone:'',address:'',city:'',state:'',zip:''}; users.push(u); }
  else if(p.picture){ u.picture=p.picture; }
  saveUsers(users);
  finishAuth(u.email,'Welcome, '+u.name.split(' ')[0]+'!');
}
function finishAuth(email,msg){
  setSession(email); mergeGuestCart(email);
  toast(msg,'success');
  const redirect=sessionStorage.getItem('gi_redirect'); sessionStorage.removeItem('gi_redirect');
  location.hash=redirect||'#/home'; render();
}

/* ---- storage & utils ---- */
function getUsers(){ try{ return JSON.parse(localStorage.getItem('gi_users')||'[]'); }catch(e){ return []; } }
function saveUsers(u){ localStorage.setItem('gi_users', JSON.stringify(u)); }
function setSession(email){ localStorage.setItem('gi_session', email); }
function clearSession(){ localStorage.removeItem('gi_session'); }
function currentUser(){ const email=localStorage.getItem('gi_session'); if(!email) return null; return getUsers().find(u=>u.email===email)||null; }
function getOrders(email){ try{ return JSON.parse(localStorage.getItem('gi_orders_'+email)||'[]'); }catch(e){ return []; } }
function saveOrders(email,orders){ localStorage.setItem('gi_orders_'+email, JSON.stringify(orders)); }
function cartKey(){ const u=currentUser(); return u? 'gi_cart_'+u.email : 'gi_cart_guest'; }
function getCart(){ try{ return JSON.parse(localStorage.getItem(cartKey())||'{}'); }catch(e){ return {}; } }
function saveCart(c){ localStorage.setItem(cartKey(), JSON.stringify(c)); }
function cartCount(){ const c=getCart(); return Object.values(c).reduce((a,b)=>a+b,0); }
function findProduct(id){ return PRODUCTS.find(p=>p.id===id); }
function catName(id){ const c=CATEGORIES.find(x=>x.id===id); return c?c.name:''; }
function catTint(cat){ const map={electronics:'#E9EEF3',grocery:'#EFF3E3',home:'#F6EEDD',fashion:'#F5EAE6',beauty:'#F7EAF0',sports:'#E6EEF1'}; return map[cat]||'#F0EFEA'; }
function fmt(n){ return 'NPR '+Number(n).toFixed(2); }
function stars(r){ const full=Math.round(r); let s=''; for(let i=1;i<=5;i++) s+= i<=full?'★':'☆'; return '<span class="stars">'+s+'</span> <span class="muted">'+r+'</span>'; }
function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function toast(msg,type){
  let el=document.getElementById('toast');
  if(!el){ el=document.createElement('div'); el.id='toast'; document.body.appendChild(el); }
  el.textContent=msg; el.className='toast show '+(type||'success');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>{ el.className='toast'; }, 2600);
}

/* ---- auth actions ---- */
function requireAuth(msg){
  if(!currentUser()){
    sessionStorage.setItem('gi_redirect', location.hash);
    toast(msg||'Please sign in to continue','error');
    location.hash='#/login';
    return false;
  }
  return true;
}
function mergeGuestCart(email){
  const guest=JSON.parse(localStorage.getItem('gi_cart_guest')||'{}');
  if(Object.keys(guest).length){
    const key='gi_cart_'+email;
    const mine=JSON.parse(localStorage.getItem(key)||'{}');
    for(const id in guest){ const p=findProduct(id); const cap=p?p.stock:99; mine[id]=Math.min((mine[id]||0)+guest[id], cap); }
    localStorage.setItem(key, JSON.stringify(mine));
    localStorage.removeItem('gi_cart_guest');
  }
}
function handleLogin(e){
  e.preventDefault();
  const email=document.getElementById('lEmail').value.trim().toLowerCase();
  const pass=document.getElementById('lPass').value;
  const u=getUsers().find(x=>x.email===email && x.password===pass);
  if(!u){ document.getElementById('loginError').textContent='Invalid email or password.'; return false; }
  setSession(email); mergeGuestCart(email);
  toast('Welcome back, '+u.name.split(' ')[0]+'!','success');
  const redirect=sessionStorage.getItem('gi_redirect'); sessionStorage.removeItem('gi_redirect');
  location.hash = redirect||'#/home'; render();
  return false;
}
function handleSignup(e){
  e.preventDefault();
  const name=document.getElementById('sName').value.trim();
  const email=document.getElementById('sEmail').value.trim().toLowerCase();
  const pass=document.getElementById('sPass').value;
  const confirm=document.getElementById('sConfirm').value;
  const err=document.getElementById('signupError');
  if(!name){ err.textContent='Enter your full name.'; return false; }
  if(!/^\S+@\S+\.\S+$/.test(email)){ err.textContent='Enter a valid email address.'; return false; }
  if(pass.length<6){ err.textContent='Password must be at least 6 characters.'; return false; }
  if(pass!==confirm){ err.textContent='Passwords do not match.'; return false; }
  const users=getUsers();
  if(users.some(x=>x.email===email)){ err.textContent='An account with this email already exists.'; return false; }
  users.push({name,email,password:pass,phone:'',address:'',city:'',state:'',zip:''}); saveUsers(users);
  setSession(email); mergeGuestCart(email);
  toast('Account created! Welcome to Grab It.','success');
  const redirect=sessionStorage.getItem('gi_redirect'); sessionStorage.removeItem('gi_redirect');
  location.hash = redirect||'#/home'; render();
  return false;
}
function logout(){ clearSession(); toast('You have been logged out','success'); location.hash='#/home'; render(); }

/* ---- nav / cart actions ---- */
function doSearch(e){
  e.preventDefault();
  const input=e.target.querySelector('input');
  const v=input.value.trim();
  const mp=document.getElementById('mobilePanel'); if(mp) mp.classList.remove('open');
  location.hash='#/products'+(v?('?q='+encodeURIComponent(v)):'');
  render();
  return false;
}
function applySort(val){
  const {query}=parseRoute();
  query.sort=val;
  const qs=Object.entries(query).filter(([k,v])=>v).map(([k,v])=>encodeURIComponent(k)+'='+encodeURIComponent(v)).join('&');
  location.hash='#/products'+(qs?('?'+qs):'');
}
function toggleMenu(id,e){
  if(e) e.stopPropagation();
  document.querySelectorAll('.dropdown.open,.mobile-panel.open').forEach(el=>{ if(el.id!==id) el.classList.remove('open'); });
  const el=document.getElementById(id); if(el) el.classList.toggle('open');
}
function comingSoon(e){ if(e) e.preventDefault(); toast("This page isn't available in the demo yet",'success'); return false; }
function pdQtyChange(d){
  const p=findProduct(currentPdId); if(!p) return;
  currentPdQty=Math.max(1, Math.min(p.stock||1, currentPdQty+d));
  const el=document.getElementById('pdQtyVal'); if(el) el.textContent=currentPdQty;
}
function addToCart(id,qty){
  const p=findProduct(id); if(!p||p.stock===0) return;
  const q=qty||currentPdQty||1;
  const cart=getCart();
  cart[id]=Math.min(p.stock,(cart[id]||0)+q);
  saveCart(cart);
  toast('Added '+p.name+' to cart','success');
  updateCartBadge();
}
function updateCartBadge(){ const el=document.getElementById('cartCount'); if(el) el.textContent=cartCount(); }
function changeCartQty(id,d){
  const cart=getCart(); const p=findProduct(id); if(!p) return;
  let q=(cart[id]||0)+d; q=Math.max(0,Math.min(p.stock,q));
  if(q===0) delete cart[id]; else cart[id]=q;
  saveCart(cart); render();
}
function removeFromCart(id){ const cart=getCart(); delete cart[id]; saveCart(cart); toast('Item removed from cart','success'); render(); }

/* ---- checkout / profile ---- */
function handleCheckout(e){
  e.preventDefault();
  const fields=['fName','fAddr','fCity','fState','fZip','fPhone'];
  for(const id of fields){ if(!document.getElementById(id).value.trim()){ document.getElementById('checkoutError').textContent='Please fill in all shipping fields.'; return false; } }
  const zip=document.getElementById('fZip').value.trim();
  if(!/^\d{5}$/.test(zip)){ document.getElementById('checkoutError').textContent='Enter a valid 5-digit ZIP code.'; return false; }
  document.getElementById('checkoutError').textContent='';
  const btn=document.getElementById('placeOrderBtn'); btn.disabled=true; btn.innerHTML='<span class="spinner"></span> Placing order...';
  const cart=getCart(); const ids=Object.keys(cart).filter(id=>cart[id]>0);
  let subtotal=0; const items=ids.map(id=>{ const p=findProduct(id); const qty=cart[id]; subtotal+=p.price*qty; return {id:p.id,name:p.name,price:p.price,qty,icon:p.icon,cat:p.cat}; });
  const shipping=subtotal>=50?0:5.99; const tax=+(subtotal*0.08).toFixed(2); const total=+(subtotal+shipping+tax).toFixed(2);
  const payEl=document.querySelector('input[name=pay]:checked'); const pay=payEl?payEl.value:'cod';
  const order={ id:'GI'+Date.now().toString(36).toUpperCase(), items, subtotal, shipping, tax, total, pay,
    address:{name:document.getElementById('fName').value.trim(),line:document.getElementById('fAddr').value.trim(),city:document.getElementById('fCity').value.trim(),state:document.getElementById('fState').value.trim(),zip,phone:document.getElementById('fPhone').value.trim()},
    createdAt: Date.now() };
  setTimeout(()=>{
    const u=currentUser();
    const orders=getOrders(u.email); orders.unshift(order); saveOrders(u.email,orders);
    saveCart({});
    toast('Order placed successfully!','success');
    location.hash='#/order-confirmation/'+order.id; render();
  },700);
  return false;
}
function handleProfileSave(e){
  e.preventDefault();
  const users=getUsers(); const u=currentUser(); const idx=users.findIndex(x=>x.email===u.email);
  users[idx]={...users[idx],
    name:document.getElementById('pName').value.trim()||u.name,
    phone:document.getElementById('pPhone').value.trim(),
    address:document.getElementById('pAddr').value.trim(),
    city:document.getElementById('pCity').value.trim(),
    state:document.getElementById('pState').value.trim(),
    zip:document.getElementById('pZip').value.trim()};
  saveUsers(users); toast('Profile updated','success'); render();
  return false;
}

/* ---- templates ---- */
function headerTpl(query){
  const u=currentUser();
  const q=query&&query.q?esc(query.q):'';
  return '<header class="site-header">'+
    '<div class="header-top">'+
      '<a href="#/home" class="logo">'+logoMark()+'</a>'+
      '<form class="search-form" onsubmit="return doSearch(event)"><input type="text" placeholder="Search products, brands and categories" value="'+q+'"><button type="submit" aria-label="Search">'+ICON.search+'</button></form>'+
      '<div class="header-actions">'+
        '<div class="account-menu">'+
          '<button class="icon-btn" onclick="toggleMenu(\'accountDropdown\',event)">'+ICON.user+' <span class="hide-mobile">'+(u?esc(u.name.split(' ')[0]):'Account')+'</span></button>'+
          '<div class="dropdown" id="accountDropdown">'+(u?('<a href="#/profile">My Profile</a><a href="#/orders">My Orders</a><button onclick="logout()">Log Out</button>'):('<a href="#/login">Sign In</a><a href="#/signup">Create Account</a>'))+'</div>'+
        '</div>'+
        '<a class="icon-btn" href="#/cart">'+ICON.cart+' <span id="cartCount">'+cartCount()+'</span></a>'+
        '<button class="hamburger" onclick="toggleMenu(\'mobilePanel\',event)" aria-label="Menu">'+ICON.menu+'</button>'+
      '</div>'+
    '</div>'+
    '<nav class="category-nav">'+CATEGORIES.map(c=>'<a href="#/products?cat='+c.id+'">'+catIcon(c.id,'ico-sm')+c.name+'</a>').join('')+'</nav>'+
    '<div class="mobile-panel" id="mobilePanel">'+
      '<form onsubmit="return doSearch(event)"><input type="text" placeholder="Search Grab It" value="'+q+'"><button type="submit">'+ICON.search+'</button></form>'+
      CATEGORIES.map(c=>'<a href="#/products?cat='+c.id+'">'+catIcon(c.id,'ico-sm')+c.name+'</a>').join('')+
    '</div>'+
  '</header>';
}
function footerTpl(){
  return '<footer class="site-footer">'+
    '<div class="footer-grid">'+
      '<div class="footer-col"><div class="logo light">'+logoMark()+'</div><p class="muted-light">Everyday essentials, priced right, delivered to your door.</p>'+
        '<div class="social"><a href="#" onclick="return comingSoon(event)" aria-label="Facebook">'+ICON.facebook+'</a><a href="#" onclick="return comingSoon(event)" aria-label="Instagram">'+ICON.instagram+'</a><a href="#" onclick="return comingSoon(event)" aria-label="X">'+ICON.x+'</a></div></div>'+
      '<div class="footer-col"><h4>Customer Service</h4><button onclick="return comingSoon(event)">Help Center</button><button onclick="return comingSoon(event)">Returns & Refunds</button><button onclick="return comingSoon(event)">Shipping Info</button><a href="#/orders">Track an Order</a></div>'+
      '<div class="footer-col"><h4>Quick Links</h4><a href="#/home">Home</a><a href="#/products">All Products</a><a href="#/cart">Cart</a></div>'+
      '<div class="footer-col"><h4>Your Account</h4><a href="#/profile">My Profile</a><a href="#/orders">My Orders</a><a href="#/login">Sign In</a></div>'+
      '<div class="footer-col"><h4>Contact</h4><p class="muted-light">support@grabit.com.np<br>+977 98049997XX<br>Mon–Sat, 8am–10pm</p></div>'+
    '</div>'+
    '<div class="footer-bottom">© '+new Date().getFullYear()+' Grab It. All rights reserved.</div>'+
  '</footer>';
}
function productCard(p){
  const out=p.stock===0, low=p.stock>0&&p.stock<5;
  return '<div class="product-card">'+
    '<a class="product-media" href="#/product/'+p.id+'" style="background:'+catTint(p.cat)+'">'+prodImg(p)+''+(p.orig?'<span class="tag-sale">Sale</span>':'')+'</a>'+
    '<div class="product-body">'+
      '<a class="product-name" href="#/product/'+p.id+'">'+esc(p.name)+'</a>'+
      '<div class="product-rating">'+stars(p.rating)+' <span class="muted">('+p.reviews+')</span></div>'+
      '<div class="product-price">'+fmt(p.price)+(p.orig?' <span class="price-orig">'+fmt(p.orig)+'</span>':'')+'</div>'+
      (out?'<div class="stock-out">Out of stock</div>':low?('<div class="stock-low">Only '+p.stock+' left</div>'):'')+
      '<button class="btn btn-dark btn-sm btn-block" '+(out?'disabled':'')+' onclick="addToCart(\''+p.id+'\',1)">'+(out?'Out of Stock':'Add to Cart')+'</button>'+
    '</div></div>';
}
function pageHome(){
  const trending=PRODUCTS.filter(p=>p.trending).slice(0,6);
  const deals=PRODUCTS.filter(p=>p.orig).slice(0,4);
  return '<section class="hero">'+
      '<div class="hero-text"><span class="eyebrow">Trusted by thousands of shoppers</span><h1>Everyday essentials, priced right.</h1><p>Shop electronics, grocery, home goods and more — all in one place, with fast delivery and easy returns.</p>'+
      '<div class="hero-actions"><a class="btn btn-primary" href="#/products">Shop All Products</a><a class="btn btn-outline" href="#/products?cat=electronics">Explore Electronics</a></div></div>'+
    '</section>'+
    '<section class="container"><div class="section-head"><h2 class="section-title">Shop by Category</h2><p class="section-sub">Find exactly what you need, faster</p></div><div class="category-grid">'+CATEGORIES.map(c=>'<a class="category-tile" href="#/products?cat='+c.id+'">'+catIcon(c.id,'ico-lg')+c.name+'</a>').join('')+'</div></section>'+
    '<section class="container"><div class="section-head"><h2 class="section-title">Trending Now</h2><p class="section-sub">Popular picks other shoppers love</p></div><div class="product-grid">'+trending.map(productCard).join('')+'</div></section>'+
    '<section class="perks"><div class="perk"><span class="perk-ico">'+ICON.truck+'</span><div><strong>Free shipping</strong><p>On orders over $50</p></div></div><div class="perk"><span class="perk-ico">'+ICON.ret+'</span><div><strong>Easy returns</strong><p>30-day return window</p></div></div><div class="perk"><span class="perk-ico">'+ICON.lock+'</span><div><strong>Secure checkout</strong><p>Your data stays protected</p></div></div></section>'+
    '<section class="container"><div class="section-head"><h2 class="section-title">Today\'s Deals</h2><p class="section-sub">Limited-time savings, while they last</p></div><div class="product-grid">'+deals.map(productCard).join('')+'</div></section>';
}
function pageProducts(query){
  let list=PRODUCTS.slice();
  if(query.cat) list=list.filter(p=>p.cat===query.cat);
  if(query.q){ const q=query.q.toLowerCase(); list=list.filter(p=>p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)||catName(p.cat).toLowerCase().includes(q)); }
  const sort=query.sort||'featured';
  if(sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  else if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  const title=query.q?('Results for "'+esc(query.q)+'"'):(query.cat?catName(query.cat):'All Products');
  const allHref='#/products'+(query.q?('?q='+encodeURIComponent(query.q)):'');
  const gridHtml=list.length? ('<div class="product-grid">'+list.map(productCard).join('')+'</div>') : '<div class="empty-state small"><div class="empty-icon">'+ICON.emptySearch+'</div><h3>No products found</h3><p>Try a different search term or browse all categories.</p><a class="btn btn-dark" href="#/products">View All Products</a></div>';
  return '<div class="container products-page">'+
    '<div class="breadcrumb"><a href="#/home">Home</a> / <span>'+title+'</span></div>'+
    '<div class="products-layout">'+
      '<aside class="filters"><h3>Categories</h3><ul class="filter-list">'+
        '<li><a class="'+(!query.cat?'active':'')+'" href="'+allHref+'">All Products</a></li>'+
        CATEGORIES.map(c=>'<li><a class="'+(query.cat===c.id?'active':'')+'" href="#/products?cat='+c.id+'">'+catIcon(c.id,'ico-sm')+c.name+'</a></li>').join('')+
      '</ul></aside>'+
      '<div class="products-main">'+
        '<div class="products-toolbar"><span class="result-count">'+list.length+' result'+(list.length!==1?'s':'')+'</span>'+
        '<select onchange="applySort(this.value)">'+
          '<option value="featured" '+((!query.sort||query.sort==='featured')?'selected':'')+'>Sort: Featured</option>'+
          '<option value="price-asc" '+(query.sort==='price-asc'?'selected':'')+'>Price: Low to High</option>'+
          '<option value="price-desc" '+(query.sort==='price-desc'?'selected':'')+'>Price: High to Low</option>'+
          '<option value="rating" '+(query.sort==='rating'?'selected':'')+'>Top Rated</option>'+
        '</select></div>'+
        gridHtml+
      '</div>'+
    '</div></div>';
}
function pageProduct(id){
  const p=findProduct(id); if(!p) return notFound();
  currentPdId=p.id; currentPdQty=1;
  const related=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4);
  const out=p.stock===0;
  return '<div class="container product-detail">'+
    '<div class="breadcrumb"><a href="#/home">Home</a> / <a href="#/products?cat='+p.cat+'">'+catName(p.cat)+'</a> / <span>'+esc(p.name)+'</span></div>'+
    '<div class="pd-layout">'+
      '<div class="pd-image" style="background:'+catTint(p.cat)+'">'+prodImg(p)+'</div>'+
      '<div class="pd-info"><h1>'+esc(p.name)+'</h1>'+
        '<div class="product-rating">'+stars(p.rating)+' <span class="muted">'+p.rating+' · '+p.reviews+' reviews</span></div>'+
        '<div class="pd-price">'+fmt(p.price)+(p.orig?(' <span class="price-orig">'+fmt(p.orig)+'</span><span class="badge badge-gold">'+Math.round((1-p.price/p.orig)*100)+'% off</span>'):'')+'</div>'+
        '<p class="pd-desc">'+esc(p.desc)+'</p>'+
        '<div class="'+(out?'stock-out':p.stock<5?'stock-low':'stock-ok')+'">'+(out?'Out of stock':p.stock<5?('Only '+p.stock+' left in stock'):('In stock ('+p.stock+' available)'))+'</div>'+
        '<div class="pd-actions">'+
          '<div class="qty-control"><button onclick="pdQtyChange(-1)" aria-label="Decrease quantity">−</button><span id="pdQtyVal">1</span><button onclick="pdQtyChange(1)" aria-label="Increase quantity">+</button></div>'+
          '<button class="btn btn-dark" '+(out?'disabled':'')+' onclick="addToCart(\''+p.id+'\')">Add to Cart</button>'+
          '<button class="btn btn-primary" '+(out?'disabled':'')+' onclick="addToCart(\''+p.id+'\');location.hash=\'#/checkout\'">Buy Now</button>'+
        '</div>'+
        '<h3>Specifications</h3><ul class="specs-list">'+p.specs.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul>'+
      '</div>'+
    '</div>'+
    (related.length?('<h2 class="section-title">You may also like</h2><div class="product-grid">'+related.map(productCard).join('')+'</div>'):'')+
  '</div>';
}
function pageCart(){
  const cart=getCart(); const ids=Object.keys(cart).filter(id=>cart[id]>0);
  if(!ids.length) return '<div class="container empty-state"><div class="empty-icon">'+ICON.emptyCart+'</div><h2>Your cart is empty</h2><p>Looks like you haven\'t added anything yet.</p><a class="btn btn-dark" href="#/products">Start Shopping</a></div>';
  let subtotal=0;
  const rows=ids.map(id=>{
    const p=findProduct(id); if(!p) return '';
    const qty=cart[id]; const lineTotal=p.price*qty; subtotal+=lineTotal;
    return '<div class="cart-row">'+
      '<div class="cart-media" style="background:'+catTint(p.cat)+'">'+prodImg(p)+'</div>'+
      '<div class="cart-info"><a href="#/product/'+p.id+'">'+esc(p.name)+'</a><div class="muted">'+fmt(p.price)+' each</div><button class="link-btn" onclick="removeFromCart(\''+p.id+'\')">Remove</button></div>'+
      '<div class="qty-control"><button onclick="changeCartQty(\''+p.id+'\',-1)" aria-label="Decrease quantity">−</button><span>'+qty+'</span><button onclick="changeCartQty(\''+p.id+'\',1)" aria-label="Increase quantity">+</button></div>'+
      '<div class="cart-line-total">'+fmt(lineTotal)+'</div>'+
    '</div>';
  }).join('');
  const shipping=(subtotal>=50||subtotal===0)?0:5.99;
  const tax=subtotal*0.08; const total=subtotal+shipping+tax;
  return '<div class="container cart-page"><h1>Your Cart</h1><div class="cart-layout">'+
    '<div class="cart-items">'+rows+'</div>'+
    '<div class="order-summary"><h3>Order Summary</h3>'+
      '<div class="summary-row"><span>Subtotal</span><span>'+fmt(subtotal)+'</span></div>'+
      '<div class="summary-row"><span>Shipping</span><span>'+(shipping===0?'Free':fmt(shipping))+'</span></div>'+
      '<div class="summary-row"><span>Estimated tax</span><span>'+fmt(tax)+'</span></div>'+
      '<div class="summary-row total"><span>Total</span><span>'+fmt(total)+'</span></div>'+
      '<button class="btn btn-primary btn-block" onclick="location.hash=\'#/checkout\'">Proceed to Checkout</button>'+
      '<a class="btn btn-outline btn-block" href="#/products">Continue Shopping</a>'+
    '</div></div></div>';
}
function pageCheckout(){
  const cart=getCart(); const ids=Object.keys(cart).filter(id=>cart[id]>0);
  if(!ids.length){ location.hash='#/cart'; return ''; }
  const u=currentUser();
  let subtotal=0;
  const itemsHtml=ids.map(id=>{ const p=findProduct(id); const qty=cart[id]; subtotal+=p.price*qty; return '<div class="summary-row"><span>'+esc(p.name)+' × '+qty+'</span><span>'+fmt(p.price*qty)+'</span></div>'; }).join('');
  const shipping=subtotal>=50?0:5.99; const tax=subtotal*0.08; const total=subtotal+shipping+tax;
  return '<div class="container checkout-page"><h1>Checkout</h1>'+
    '<form class="checkout-layout" onsubmit="return handleCheckout(event)">'+
      '<div class="checkout-form"><h3>Shipping Information</h3>'+
        '<div class="field"><label for="fName">Full name</label><input id="fName" value="'+esc(u.name||'')+'" required></div>'+
        '<div class="field"><label for="fAddr">Address</label><input id="fAddr" value="'+esc(u.address||'')+'" required></div>'+
        '<div class="field-row">'+
          '<div class="field"><label for="fCity">City</label><input id="fCity" value="'+esc(u.city||'')+'" required></div>'+
          '<div class="field"><label for="fState">State</label><input id="fState" value="'+esc(u.state||'')+'" required></div>'+
          '<div class="field"><label for="fZip">ZIP code</label><input id="fZip" value="'+esc(u.zip||'')+'" required></div>'+
        '</div>'+
        '<div class="field"><label for="fPhone">Phone number</label><input id="fPhone" value="'+esc(u.phone||'')+'" required></div>'+
        '<div id="checkoutError" class="error-text"></div>'+
        '<h3>Payment Method</h3><div class="payment-options">'+
          '<label class="radio-card"><input type="radio" name="pay" value="cod" checked> Cash on Delivery</label>'+
          '<label class="radio-card"><input type="radio" name="pay" value="card"> Credit / Debit Card</label>'+
          '<label class="radio-card"><input type="radio" name="pay" value="wallet"> Grab It Wallet</label>'+
        '</div></div>'+
      '<div class="order-summary"><h3>Order Summary</h3>'+itemsHtml+
        '<div class="summary-row"><span>Subtotal</span><span>'+fmt(subtotal)+'</span></div>'+
        '<div class="summary-row"><span>Shipping</span><span>'+(shipping===0?'Free':fmt(shipping))+'</span></div>'+
        '<div class="summary-row"><span>Estimated tax</span><span>'+fmt(tax)+'</span></div>'+
        '<div class="summary-row total"><span>Total</span><span>'+fmt(total)+'</span></div>'+
        '<button type="submit" class="btn btn-primary btn-block" id="placeOrderBtn">Place Order</button>'+
      '</div>'+
    '</form></div>';
}
function pageConfirm(id){
  const u=currentUser(); const order=getOrders(u.email).find(o=>o.id===id);
  if(!order) return notFound();
  const eta=new Date(order.createdAt+5*86400000);
  return '<div class="container confirm-page"><div class="confirm-icon">'+ICON.check+'</div><h1>Thank you, '+esc(u.name.split(' ')[0])+'!</h1><p>Your order has been placed successfully.</p>'+
    '<div class="confirm-box">'+
      '<div class="summary-row"><span>Order number</span><span>'+order.id+'</span></div>'+
      '<div class="summary-row"><span>Estimated delivery</span><span>'+eta.toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})+'</span></div>'+
      '<div class="summary-row total"><span>Total paid</span><span>'+fmt(order.total)+'</span></div>'+
    '</div>'+
    '<div class="confirm-actions"><a class="btn btn-dark" href="#/track/'+order.id+'">Track Order</a><a class="btn btn-outline" href="#/orders">View My Orders</a><a class="btn btn-outline" href="#/products">Continue Shopping</a></div>'+
  '</div>';
}
function orderStage(o){ return Math.min(STAGES.length-1, Math.floor((Date.now()-o.createdAt)/STAGE_MS)); }
function pageOrders(){
  const u=currentUser(); const orders=getOrders(u.email);
  if(!orders.length) return '<div class="container empty-state"><div class="empty-icon">'+ICON.box+'</div><h2>No orders yet</h2><p>When you place an order, it will show up here.</p><a class="btn btn-dark" href="#/products">Start Shopping</a></div>';
  return '<div class="container orders-page"><h1>My Orders</h1><div class="orders-list">'+
    orders.map(o=>{ const stageIdx=orderStage(o); return '<div class="order-card">'+
      '<div class="order-card-head"><div><strong>'+o.id+'</strong><div class="muted">'+new Date(o.createdAt).toLocaleDateString()+'</div></div>'+
      '<span class="badge '+(stageIdx===5?'badge-success':'badge-gold')+'">'+STAGES[stageIdx]+'</span></div>'+
      '<div class="order-card-items muted">'+o.items.map(i=>esc(i.name)+' × '+i.qty).join(', ')+'</div>'+
      '<div class="order-card-foot"><strong>'+fmt(o.total)+'</strong><a class="btn btn-outline btn-sm" href="#/track/'+o.id+'">Track Order</a></div>'+
    '</div>'; }).join('')+
  '</div></div>';
}
function timelineInner(id){
  const u=currentUser(); if(!u) return '';
  const order=getOrders(u.email).find(o=>o.id===id);
  if(!order) return '';
  const stage=orderStage(order);
  return '<div class="timeline">'+STAGES.map((s,i)=>'<div class="timeline-step '+(i<stage?'done':i===stage?'current':'')+'"><div class="dot"></div><div class="step-label">'+s+'</div></div>').join('')+'</div>';
}
function pageTrack(id){
  const u=currentUser(); const order=getOrders(u.email).find(o=>o.id===id);
  if(!order) return notFound();
  return '<div class="container track-page">'+
    '<div class="breadcrumb"><a href="#/orders">My Orders</a> / <span>'+order.id+'</span></div>'+
    '<h1>Track Order '+order.id+'</h1>'+
    '<div id="trackTimeline">'+timelineInner(id)+'</div>'+
    '<div class="track-grid">'+
      '<div class="card"><h3>Shipping Address</h3><p>'+esc(order.address.name)+'<br>'+esc(order.address.line)+'<br>'+esc(order.address.city)+', '+esc(order.address.state)+' '+esc(order.address.zip)+'<br>'+esc(order.address.phone)+'</p></div>'+
      '<div class="card"><h3>Items</h3>'+order.items.map(i=>'<div class="summary-row"><span>'+esc(i.name)+' × '+i.qty+'</span><span>'+fmt(i.price*i.qty)+'</span></div>').join('')+'<div class="summary-row total"><span>Total</span><span>'+fmt(order.total)+'</span></div></div>'+
    '</div></div>';
}
function pageProfile(){
  const u=currentUser(); const orders=getOrders(u.email);
  return '<div class="container profile-page"><h1>My Profile</h1><div class="profile-layout">'+
    '<div class="card profile-card">'+avatarHTML(u)+'<h3>'+esc(u.name)+'</h3><p class="muted">'+esc(u.email)+'</p><p class="muted">'+orders.length+' order'+(orders.length!==1?'s':'')+' placed</p>'+
      '<a class="btn btn-outline btn-block" href="#/orders">View My Orders</a><button class="btn btn-dark btn-block" onclick="logout()">Log Out</button></div>'+
    '<form class="card profile-form" onsubmit="return handleProfileSave(event)"><h3>Account Information</h3>'+
      '<div class="field"><label for="pName">Full name</label><input id="pName" value="'+esc(u.name||'')+'" required></div>'+
      '<div class="field"><label for="pEmail">Email</label><input id="pEmail" value="'+esc(u.email||'')+'" disabled></div>'+
      '<div class="field"><label for="pPhone">Phone number</label><input id="pPhone" value="'+esc(u.phone||'')+'"></div>'+
      '<div class="field"><label for="pAddr">Address</label><input id="pAddr" value="'+esc(u.address||'')+'"></div>'+
      '<div class="field-row">'+
        '<div class="field"><label for="pCity">City</label><input id="pCity" value="'+esc(u.city||'')+'"></div>'+
        '<div class="field"><label for="pState">State</label><input id="pState" value="'+esc(u.state||'')+'"></div>'+
        '<div class="field"><label for="pZip">ZIP code</label><input id="pZip" value="'+esc(u.zip||'')+'"></div>'+
      '</div>'+
      '<button class="btn btn-primary" type="submit">Save Changes</button>'+
    '</form></div></div>';
}
function pageLogin(){
  return '<div class="container auth-page"><form class="card auth-card" onsubmit="return handleLogin(event)"><h1>Sign In</h1>'+
    '<p class="muted">New to Grab It? <a href="#/signup">Create an account</a></p>'+
    googleBlock()+'<div class="field"><label for="lEmail">Email</label><input id="lEmail" type="email" required></div>'+
    '<div class="field"><label for="lPass">Password</label><input id="lPass" type="password" required></div>'+
    '<div id="loginError" class="error-text"></div>'+
    '<button class="btn btn-primary btn-block" type="submit">Sign In</button>'+
    '<p class="muted small">Demo account: demo@grabit.com / demo123</p></form></div>';
}
function pageSignup(){
  return '<div class="container auth-page"><form class="card auth-card" onsubmit="return handleSignup(event)"><h1>Create Account</h1>'+
    '<p class="muted">Already shopping with us? <a href="#/login">Sign in</a></p>'+
    googleBlock()+'<div class="field"><label for="sName">Full name</label><input id="sName" required></div>'+
    '<div class="field"><label for="sEmail">Email</label><input id="sEmail" type="email" required></div>'+
    '<div class="field"><label for="sPass">Password</label><input id="sPass" type="password" required minlength="6"></div>'+
    '<div class="field"><label for="sConfirm">Confirm password</label><input id="sConfirm" type="password" required></div>'+
    '<div id="signupError" class="error-text"></div>'+
    '<button class="btn btn-primary btn-block" type="submit">Create Account</button></form></div>';
}
function notFound(){ return '<div class="container empty-state"><h2>Page not found</h2><a class="btn btn-dark" href="#/home">Go Home</a></div>'; }

/* ---- router ---- */
function parseRoute(){
  const h=(location.hash||'#/home').slice(1);
  const parts=h.split('?');
  const p=parts[0], qs=parts[1];
  const segs=p.split('/').filter(Boolean);
  const query={};
  if(qs) qs.split('&').forEach(pair=>{ const kv=pair.split('='); if(kv[0]) query[decodeURIComponent(kv[0])]=decodeURIComponent(kv[1]||''); });
  return {segs,query};
}
function render(){
  if(trackInterval){ clearInterval(trackInterval); trackInterval=null; }
  const {segs,query}=parseRoute();
  const page=segs[0]||'home';
  let content='';
  if(page==='home') content=pageHome();
  else if(page==='products') content=pageProducts(query);
  else if(page==='product') content=pageProduct(segs[1]);
  else if(page==='login') content=pageLogin();
  else if(page==='signup') content=pageSignup();
  else if(page==='cart') content=pageCart();
  else if(page==='checkout'){ if(!requireAuth('Please sign in to checkout')) return; content=pageCheckout(); }
  else if(page==='order-confirmation'){ if(!requireAuth('Please sign in to view this order')) return; content=pageConfirm(segs[1]); }
  else if(page==='orders'){ if(!requireAuth('Please sign in to view your orders')) return; content=pageOrders(); }
  else if(page==='track'){ if(!requireAuth('Please sign in to track this order')) return; content=pageTrack(segs[1]); }
  else if(page==='profile'){ if(!requireAuth('Please sign in to view your profile')) return; content=pageProfile(); }
  else content=notFound();
  document.getElementById('app').innerHTML=headerTpl(query)+'<main class="main">'+content+'</main>'+footerTpl();
  window.scrollTo(0,0);
  if(page==='login'||page==='signup') mountGoogle();
  if(page==='track'){
    trackInterval=setInterval(()=>{
      const el=document.getElementById('trackTimeline');
      if(el) el.innerHTML=timelineInner(segs[1]); else { clearInterval(trackInterval); trackInterval=null; }
    },4000);
  }
}

/* ---- init ---- */
function seed(){
  if(!localStorage.getItem('gi_users')){
    saveUsers([{name:'Demo Shopper',email:'demo@grabit.com',password:'demo123',phone:'',address:'',city:'',state:'',zip:''}]);
  }
}
document.addEventListener('click', function(){ document.querySelectorAll('.dropdown.open,.mobile-panel.open').forEach(el=>el.classList.remove('open')); });
window.addEventListener('hashchange', render);
seed();
render();
