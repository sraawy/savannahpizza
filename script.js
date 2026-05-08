/* ============================================================
   SAVANNAH — script.js (Complete)
   ============================================================ */

/* ===== DATA ===== */
const pizzas=[
  {name:"Margherita",genre:"Classique",price:800,desc:"Sauce tomate, mozzarella fraîche, basilic, huile d'olive",best:false,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=450&fit=crop"},
  {name:"Pepperoni",genre:"Italienne",price:1000,desc:"Sauce tomate, mozzarella, pepperoni épicé, origan",best:true,img:"https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&h=450&fit=crop"},
  {name:"Quatre Fromages",genre:"Fromage",price:1100,desc:"Mozzarella, gorgonzola, parmesan, chèvre, miel",best:true,img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=450&fit=crop"},
  {name:"Végétarienne",genre:"Végétarien",price:900,desc:"Poivrons, champignons, oignons, olives, tomates fraîches",best:false,img:"https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=600&h=450&fit=crop"},
  {name:"Hawaïenne",genre:"Tropicale",price:950,desc:"Jambon, ananas caramélisé, mozzarella, sauce tomate",best:false,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop"},
  {name:"Carnivore",genre:"Viande",price:1300,desc:"Boeuf haché, poulet grillé, merguez, lardons fumés",best:true,img:"https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=600&h=450&fit=crop"},
  {name:"Diavola",genre:"Piquante",price:1050,desc:"Salami piquant, piment, mozzarella, sauce tomate",best:false,img:"https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=600&h=450&fit=crop"},
  {name:"Fruits de Mer",genre:"Poisson",price:1400,desc:"Crevettes, calamars, moules, ail, persil",best:false,img:"https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=450&fit=crop"},
  {name:"BBQ Chicken",genre:"Américaine",price:1100,desc:"Poulet grillé, sauce BBQ, oignons rouges, cheddar",best:false,img:"https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&h=450&fit=crop"},
  {name:"Truffe Noire",genre:"Premium",price:1600,desc:"Crème de truffe, champignons, mozzarella, roquette",best:true,img:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=450&fit=crop"},
  {name:"Capricciosa",genre:"Classique",price:1150,desc:"Jambon, champignons, artichauts, olives, mozzarella",best:false,img:"https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=450&fit=crop"},
  {name:"Calzone",genre:"Spéciale",price:1200,desc:"Pizza pliée, jambon, mozzarella, champignons, oeuf",best:false,img:"https://images.unsplash.com/photo-1589790334644-ca0869a39926?w=600&h=450&fit=crop"},
  {name:"Prosciutto",genre:"Italienne",price:1250,desc:"Prosciutto di Parma, roquette, parmesan, mozzarella",best:false,img:"https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=450&fit=crop"},
  {name:"Champignon",genre:"Végétarien",price:950,desc:"Champignons frais, crème, ail, persil, mozzarella",best:false,img:"https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=600&h=450&fit=crop"},
  {name:"Anchois",genre:"Poisson",price:1050,desc:"Anchois, câpres, olives, tomates séchées, origan",best:false,img:"https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?w=600&h=450&fit=crop"},
  {name:"Mexicaine",genre:"Piquante",price:1100,desc:"Boeuf épicé, piments, maïs, haricots, guacamole",best:false,img:"https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=600&h=450&fit=crop"},
  {name:"Méditerranéenne",genre:"Méditerranée",price:1150,desc:"Tomates séchées, feta, olives noires, basilic",best:false,img:"https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=600&h=450&fit=crop"},
  {name:"Savanah Spéciale",genre:"Signature",price:1500,desc:"Merguez, poivrons grillés, oignons caramélisés, fromage fondu",best:true,img:"https://images.unsplash.com/photo-1579888944880-d98341245702?w=600&h=450&fit=crop"},
  {name:"Reine",genre:"Classique",price:1200,desc:"Jambon, champignons, mozzarella, sauce tomate",best:false,img:"https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=450&fit=crop"},
  {name:"Mozzarella",genre:"Classique",price:850,desc:"Double mozzarella, sauce tomate basilic, huile d'olive",best:false,img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=450&fit=crop"}
];

const drinks=[
  {name:"Coca-Cola 33cl",price:150,cat:"Boisson",emoji:"🥤"},
  {name:"Fanta Orange 33cl",price:150,cat:"Boisson",emoji:"🍊"},
  {name:"Sprite 33cl",price:150,cat:"Boisson",emoji:"🍋"},
  {name:"Eau Minérale 50cl",price:50,cat:"Boisson",emoji:"💧"},
  {name:"Jus d'Orange Frais",price:200,cat:"Jus",emoji:"🍊"},
  {name:"Jus de Mangue Frais",price:250,cat:"Jus",emoji:"🥭"},
  {name:"Limonade Maison",price:200,cat:"Limonade",emoji:"🍋"},
  {name:"Menthe à l'Eau",price:150,cat:"Limonade",emoji:"🌿"}
];

const sauces=[
  {name:"Sauce Piquante",price:50,cat:"Sauce",emoji:"🌶️"},
  {name:"Sauce BBQ",price:50,cat:"Sauce",emoji:"🍖"},
  {name:"Sauce Fromagère",price:70,cat:"Sauce",emoji:"🧀"},
  {name:"Sauce Alfredo",price:70,cat:"Sauce",emoji:"🤍"},
  {name:"Sauce Tomate Basilic",price:50,cat:"Sauce",emoji:"🍅"},
  {name:"Honey Mustard",price:60,cat:"Sauce",emoji:"🍯"}
];

/* ===== STATE ===== */
let cart=[];
let selectedAddons=[];
let currentQty=1;
let currentPizza=null;
let activeFilter="Tous";
let lenisInstance=null;

/* ===== BUILD MARQUEE ===== */
function buildMarquee(){
  const h=[...pizzas,...pizzas].map(p=>
    `<span class="text-3xl md:text-5xl font-display font-bold text-sv-border/50 mx-8 whitespace-nowrap hover:text-sv-accent transition-colors duration-500 select-none">${p.name}</span>`
  ).join('');
  document.getElementById('mq1').innerHTML=h;
  document.getElementById('mq2').innerHTML=h;
}

/* ===== BUILD FILTERS ===== */
function getGenres(){
  const s=new Set();
  pizzas.forEach(p=>s.add(p.genre));
  return["Tous",...Array.from(s)];
}

function buildFilters(){
  const g=getGenres();
  document.getElementById('filterBar').innerHTML=g.map(f=>
    `<button class="filter-pill${f===activeFilter?' active':''}" onclick="filterCards('${f}')">${f}</button>`
  ).join('');
}

/* ===== SEARCH + FILTER ===== */
function applyFilters(){
  const q=(document.getElementById('searchInput').value||'').toLowerCase().trim();
  const clearBtn=document.getElementById('searchClear');
  clearBtn.classList.toggle('hidden',!q);

  let visible=0;
  document.querySelectorAll('.pizza-card').forEach(card=>{
    const idx=parseInt(card.dataset.i);
    const p=pizzas[idx];
    const matchSearch=!q ||
      p.name.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      p.genre.toLowerCase().includes(q);
    const matchFilter=activeFilter==="Tous" || p.genre===activeFilter;

    if(matchSearch && matchFilter){
      card.style.display='';
      visible++;
    } else {
      card.style.display='none';
    }
  });

  document.getElementById('noResults').classList.toggle('hidden',visible>0);
}

function clearSearch(){
  document.getElementById('searchInput').value='';
  applyFilters();
}

function filterCards(genre){
  activeFilter=genre;
  buildFilters();
  applyFilters();
  document.querySelectorAll('.pizza-card').forEach(card=>{
    if(card.style.display!=='none'){
      gsap.fromTo(card,{opacity:0,y:25},{opacity:1,y:0,duration:.5,ease:"power3.out"});
    }
  });
}

/* ===== BUILD GRID ===== */
function buildGrid(){
  document.getElementById('grid').innerHTML=pizzas.map((p,i)=>`
    <div class="pizza-card" data-i="${i}" data-genre="${p.genre}">
      <div class="card-inner rounded-2xl overflow-hidden bg-sv-card border border-sv-border/60 hover:border-sv-accent/25 transition-colors duration-500">
        <div class="relative overflow-hidden aspect-[4/3]">
          <img src="${p.img}" alt="${p.name}" class="card-img w-full h-full object-cover" loading="lazy"
               onerror="this.src='https://picsum.photos/seed/sav${i}/600/450.jpg'">
          <div class="absolute top-3.5 left-3.5"><span class="genre-tag">${p.genre}</span></div>
          <div class="absolute top-3.5 right-3.5"><span class="pizza-num">${String(i+1).padStart(2,'0')}</span></div>
          ${p.best?'<div class="absolute bottom-3.5 left-3.5"><span class="best-badge">Best Seller</span></div>':''}
        </div>
        <div class="p-5">
          <h3 class="font-heading font-bold text-[1.05rem] text-sv-text leading-tight">${p.name}</h3>
          <p class="text-sv-muted text-xs mt-1.5 leading-relaxed line-clamp-2">${p.desc}</p>
          <div class="flex items-end justify-between mt-4 gap-3">
            <span class="price-tag whitespace-nowrap">${p.price} DA</span>
            <button class="add-btn" onclick="openModal(${i})"><span class="plus">+</span> Ajouter</button>
          </div>
        </div>
      </div>
    </div>`).join('');
}

/* ===== MODAL ===== */
function openModal(idx){
  currentPizza=pizzas[idx];
  selectedAddons=[];
  currentQty=1;
  const m=document.getElementById('modalContent');
  m.innerHTML=`
    <div class="relative">
      <img src="${currentPizza.img}" alt="${currentPizza.name}" class="w-full aspect-[16/9] object-cover rounded-t-[20px]"
           onerror="this.src='https://picsum.photos/seed/sav${idx}/680/380.jpg'">
      <button onclick="closeModal()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white/80 hover:text-white transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
      ${currentPizza.best?'<div class="absolute bottom-4 left-4"><span class="best-badge">Best Seller</span></div>':''}
    </div>
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between gap-4 mb-2">
        <h3 class="font-heading font-bold text-2xl text-sv-text">${currentPizza.name}</h3>
        <span class="price-tag text-xl whitespace-nowrap">${currentPizza.price} DA</span>
      </div>
      <span class="genre-tag inline-block mb-4">${currentPizza.genre}</span>
      <p class="text-sv-muted text-sm leading-relaxed mb-8">${currentPizza.desc}</p>
      <div class="mb-8">
        <h4 class="text-[10px] font-bold tracking-[.25em] uppercase text-sv-muted mb-4">Boissons & Jus</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${drinks.map((d,di)=>`<button class="addon-btn" onclick="toggleAddon(this,'drink',${di})">
            <span class="check"></span><span>${d.emoji} ${d.name}</span><span class="addon-price">${d.price} DA</span>
          </button>`).join('')}
        </div>
      </div>
      <div class="mb-8">
        <h4 class="text-[10px] font-bold tracking-[.25em] uppercase text-sv-muted mb-4">Sauces</h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${sauces.map((s,si)=>`<button class="addon-btn" onclick="toggleAddon(this,'sauce',${si})">
            <span class="check"></span><span>${s.emoji} ${s.name}</span><span class="addon-price">${s.price} DA</span>
          </button>`).join('')}
        </div>
      </div>
      <div class="flex items-center justify-between mb-6">
        <span class="text-[10px] font-bold tracking-[.25em] uppercase text-sv-muted">Quantité</span>
        <div class="flex items-center gap-3">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="font-heading font-bold text-lg w-8 text-center" id="modalQty">1</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
      </div>
      <div class="flex items-center justify-between pt-5 border-t border-sv-border">
        <div>
          <p class="text-[10px] tracking-[.2em] uppercase text-sv-muted mb-1">Total</p>
          <p class="font-heading font-extrabold text-2xl" id="modalTotal">${currentPizza.price} DA</p>
        </div>
        <button class="modal-add-btn" style="max-width:220px" onclick="addToCart()">Ajouter au Panier</button>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.classList.add('locked');
  if(lenisInstance) lenisInstance.stop();
}

function closeModal(){
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.classList.remove('locked');
  if(lenisInstance) lenisInstance.start();
}

function toggleAddon(btn,type,idx){
  const key=type==='drink'?drinks[idx]:sauces[idx];
  const i=selectedAddons.findIndex(a=>a.name===key.name);
  if(i>-1){
    selectedAddons.splice(i,1);
    btn.classList.remove('selected');
    btn.querySelector('.check').innerHTML='';
  } else {
    selectedAddons.push({...key,type});
    btn.classList.add('selected');
    btn.querySelector('.check').innerHTML='✓';
  }
  updateModalTotal();
}

function changeQty(d){
  currentQty=Math.max(1,Math.min(10,currentQty+d));
  document.getElementById('modalQty').textContent=currentQty;
  updateModalTotal();
}

function updateModalTotal(){
  const addonsTotal=selectedAddons.reduce((s,a)=>s+a.price,0);
  const total=(currentPizza.price+addonsTotal)*currentQty;
  document.getElementById('modalTotal').textContent=total.toLocaleString('fr-DZ')+' DA';
}

/* ===== CART ===== */
function addToCart(){
  const addonsTotal=selectedAddons.reduce((s,a)=>s+a.price,0);
  cart.push({
    id:Date.now(),
    name:currentPizza.name,
    price:currentPizza.price,
    qty:currentQty,
    addons:[...selectedAddons],
    addonsTotal:addonsTotal*currentQty,
    total:(currentPizza.price+addonsTotal)*currentQty,
    img:currentPizza.img
  });
  closeModal();
  updateCartUI();
  toast('Ajouté au panier',
    `${currentQty}x ${currentPizza.name}${selectedAddons.length?' + '+selectedAddons.length+' accompagnement(s)':''}`);
}

function removeFromCart(id){
  cart=cart.filter(c=>c.id!==id);
  updateCartUI();renderCartItems();
}

function changeCartQty(id,d){
  const item=cart.find(c=>c.id===id);
  if(!item)return;
  item.qty=Math.max(1,item.qty+d);
  item.addonsTotal=item.addons.reduce((s,a)=>s+a.price,0)*item.qty;
  item.total=(item.price+item.addons.reduce((s,a)=>s+a.price,0))*item.qty;
  updateCartUI();renderCartItems();
}

function updateCartUI(){
  const badge=document.getElementById('cartBadge');
  const count=cart.reduce((s,c)=>s+c.qty,0);
  badge.textContent=count;
  if(count>0) badge.classList.add('show');
  else badge.classList.remove('show');
}

function renderCartItems(){
  const box=document.getElementById('cartItems');
  const footer=document.getElementById('cartFooter');
  if(cart.length===0){
    box.innerHTML=`<div class="flex flex-col items-center justify-center h-full text-center">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#252017" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
      <p class="text-sv-muted text-sm mt-4">Votre panier est vide</p>
      <p class="text-sv-border text-xs mt-1">Ajoutez des pizzas depuis le menu</p>
    </div>`;
    footer.innerHTML='';
    return;
  }
  box.innerHTML=cart.map(c=>`
    <div class="cart-item">
      <img src="${c.img}" alt="${c.name}" class="cart-item-img" onerror="this.src='https://picsum.photos/seed/c${c.id}/60/60.jpg'">
      <div class="flex-1 min-w-0">
        <p class="font-heading font-bold text-sm text-sv-text truncate">${c.name}</p>
        ${c.addons.length?`<p class="text-sv-muted text-[11px] mt-0.5 truncate">${c.addons.map(a=>a.emoji+' '+a.name).join(', ')}</p>`:''}
        <div class="flex items-center gap-3 mt-2">
          <button class="qty-btn" style="width:26px;height:26px;font-size:13px" onclick="changeCartQty(${c.id},-1)">−</button>
          <span class="font-heading font-bold text-xs w-5 text-center">${c.qty}</span>
          <button class="qty-btn" style="width:26px;height:26px;font-size:13px" onclick="changeCartQty(${c.id},1)">+</button>
        </div>
      </div>
      <div class="flex flex-col items-end gap-2">
        <span class="font-heading font-bold text-sm" style="background:linear-gradient(135deg,#e8621e,#d4a04a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${c.total.toLocaleString('fr-DZ')} DA</span>
        <button class="cart-remove" onclick="removeFromCart(${c.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>`).join('');

  const grandTotal=cart.reduce((s,c)=>s+c.total,0);
  footer.innerHTML=`
    <div class="flex items-center justify-between mb-5">
      <span class="text-[10px] font-bold tracking-[.2em] uppercase text-sv-muted">Total de la commande</span>
      <span class="font-heading font-extrabold text-xl" style="background:linear-gradient(135deg,#e8621e,#d4a04a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">${grandTotal.toLocaleString('fr-DZ')} DA</span>
    </div>
    <button class="order-btn" onclick="placeOrder()">Commander via WhatsApp</button>
    <p class="text-sv-muted text-[10px] text-center mt-3 tracking-wider">Livraison disponible à Mostaganem</p>`;
}

function openCart(){
  renderCartItems();
  document.getElementById('cartOverlay').classList.add('active');
  document.getElementById('cartDrawer').classList.add('active');
  document.body.classList.add('locked');
  if(lenisInstance) lenisInstance.stop();
}

function closeCart(){
  document.getElementById('cartOverlay').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('active');
  document.body.classList.remove('locked');
  if(lenisInstance) lenisInstance.start();
}

function placeOrder(){
  if(cart.length===0)return;
  const items=cart.map(c=>
    `• ${c.qty}x ${c.name}${c.addons.length?' + '+c.addons.map(a=>a.name).join(', '):''} — ${c.total.toLocaleString('fr-DZ')} DA`
  ).join('\n');
  const total=cart.reduce((s,c)=>s+c.total,0);
  const msg=`🛒 *Nouvelle Commande — SAVANNAH*\n\n${items}\n\n💰 *Total : ${total.toLocaleString('fr-DZ')} DA*\n📍 Livraison : Mostaganem, Salamandre`;
  window.open(`https://wa.me/213555123456?text=${encodeURIComponent(msg)}`,'_blank');
  toast('Commande envoyée','Vous serez redirigé vers WhatsApp');
}

/* ===== TOAST ===== */
function toast(title,msg){
  const box=document.getElementById('toastBox');
  const el=document.createElement('div');
  el.className='toast';
  el.innerHTML=`<div class="tt">${title}</div><div>${msg}</div>`;
  box.appendChild(el);
  requestAnimationFrame(()=>requestAnimationFrame(()=>el.classList.add('show')));
  setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>el.remove(),500);
  },3000);
}

/* ===== CURSOR ===== */
function initCursor(){
  if(window.innerWidth<768) return;

  const ember=document.getElementById('cEmber');
  const aurora=document.getElementById('cAurora');
  const canvas=document.getElementById('cSparks');
  const ctx=canvas.getContext('2d');

  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  window.addEventListener('resize',()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
  });

  let mx=window.innerWidth/2, my=window.innerHeight/2;
  let ax=mx, ay=my;
  let isHovering=false;

  const sparks=[];
  const MAX_SPARKS=35;

  function createSpark(x,y){
    if(sparks.length>=MAX_SPARKS) return;
    const angle=Math.random()*Math.PI*2;
    const speed=Math.random()*1.2+.3;
    sparks.push({
      x:x, y:y,
      vx:Math.cos(angle)*speed,
      vy:Math.sin(angle)*speed,
      life:1,
      decay:Math.random()*.02+.012,
      size:Math.random()*2.5+.8,
      hue:Math.random()>.5?22:38
    });
  }

  function drawSparks(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for(let i=sparks.length-1;i>=0;i--){
      const s=sparks[i];
      s.x+=s.vx; s.y+=s.vy; s.vy+=0.03; s.life-=s.decay;
      if(s.life<=0){sparks.splice(i,1);continue;}
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.size*s.life,0,Math.PI*2);
      ctx.fillStyle=`hsla(${s.hue},90%,58%,${s.life*.7})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.size*s.life*3,0,Math.PI*2);
      ctx.fillStyle=`hsla(${s.hue},90%,58%,${s.life*.12})`;
      ctx.fill();
    }
  }

  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    if(Math.random()>.55) createSpark(mx,my);
  });

  const hoverSelectors='a,button,.pizza-card,.social-btn,.nav-link,.addon-btn,.qty-btn,.filter-pill,.cart-btn,.side-dot';
  document.addEventListener('mouseover',e=>{
    if(e.target.closest(hoverSelectors)){
      isHovering=true;
      ember.classList.add('hover');
      aurora.classList.add('hover');
    }
  });
  document.addEventListener('mouseout',e=>{
    if(e.target.closest(hoverSelectors)){
      isHovering=false;
      ember.classList.remove('hover');
      aurora.classList.remove('hover');
    }
  });

  document.addEventListener('mousedown',()=>{
    ember.classList.add('clicking');
    for(let i=0;i<8;i++) createSpark(mx,my);
  });
  document.addEventListener('mouseup',()=>{
    ember.classList.remove('clicking');
  });

  function loop(){
    ax+=(mx-ax)*.06;
    ay+=(my-ay)*.06;

    if(isHovering){
      ember.style.transform=`translate3d(${mx-24}px,${my-24}px,0)`;
    } else {
      ember.style.transform=`translate3d(${mx-3}px,${my-3}px,0)`;
    }

    aurora.style.transform=`translate3d(${ax-200}px,${ay-200}px,0)`;
    drawSparks();
    requestAnimationFrame(loop);
  }
  loop();
}

/* ===== 3D TILT ===== */
function init3D(){
  if(window.innerWidth<768) return;
  document.querySelectorAll('.pizza-card').forEach(card=>{
    const inner=card.querySelector('.card-inner');
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const x=e.clientX-r.left, y=e.clientY-r.top;
      const cx=r.width/2, cy=r.height/2;
      inner.style.transform=`rotateX(${(y-cy)/cy*-7}deg) rotateY(${(x-cx)/cx*7}deg) translateZ(15px)`;
    });
    card.addEventListener('mouseleave',()=>{
      inner.style.transform='rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

/* ===== MOBILE MENU ===== */
function toggleMobile(){
  document.getElementById('burgerBtn').classList.toggle('open');
  document.getElementById('mobMenu').classList.toggle('open');
}
function closeMobile(){
  document.getElementById('burgerBtn').classList.remove('open');
  document.getElementById('mobMenu').classList.remove('open');
}

/* ===== SIDE NAV ===== */
function sideNavClick(section){
  if(lenisInstance) lenisInstance.scrollTo(`#${section}`,{duration:1.2});
}

function updateSideNav(){
  const sections=['hero','menu','contact'];
  const dots=document.querySelectorAll('.side-dot');
  let current='hero';
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(el){
      const rect=el.getBoundingClientRect();
      if(rect.top<=window.innerHeight/2) current=id;
    }
  });
  dots.forEach(d=>{
    d.classList.toggle('active',d.dataset.section===current);
  });
}

/* ===== LOADER ===== */
function runLoader(){
  const tl=gsap.timeline();
  const counter={val:0};

  tl.to('#lPizza',{opacity:1,scale:1,duration:.8,ease:'back.out(1.4)'})
    .to('#lBrand',{opacity:1,y:0,duration:.7,ease:'power3.out'},'-=.3')
    .to('#lCounter',{opacity:1,duration:.3},'-=.3')
    .to('#lBar',{opacity:1,duration:.3},'-=.3')
    .to(counter,{val:100,duration:2.2,ease:'power2.inOut',onUpdate:()=>{
      document.getElementById('lCounter').textContent=String(Math.floor(counter.val)).padStart(3,'0');
      document.getElementById('lFill').style.width=counter.val+'%';
    }},'-=.2')
    .to('#lPizza',{scale:1.3,opacity:0,duration:.4,ease:'power2.in'})
    .to('#lBrand',{y:-25,opacity:0,duration:.35,ease:'power2.in'},'-=.25')
    .to('#lCounter',{opacity:0,duration:.2},'-=.3')
    .to('#lBar',{opacity:0,duration:.2},'-=.2')
    .to('#loader',{yPercent:-100,duration:.9,ease:'power4.inOut'})
    .set('#loader',{display:'none'})
    .call(animateHero);
}

function animateHero(){
  const tl=gsap.timeline();

  // Split pizza panels assemble
  tl.to('#splitPizza',{opacity:1,duration:0.6,ease:'power2.out'})
    .from('.split-panel',{
      y:i=>(i%2===0?-1:1)*80,
      rotateY:i=>(i-1.5)*25,
      rotateX:i=>(i%2===0?12:-12),
      opacity:0,
      duration:1.4,
      ease:'expo.out',
      stagger:0.1
    },'-=0.3')
    .to('.hero-title .word-inner',{y:0,duration:1.4,ease:'power4.out',stagger:.12},'-=1.2')
    .to('#heroSub',{opacity:1,duration:.8,ease:'power3.out'},'-=.8')
    .to('#scrollHint',{opacity:1,duration:.5},'-=.4');
}

/* ===== SCROLL ANIMATIONS ===== */
function initScroll(){
  gsap.registerPlugin(ScrollTrigger);

  // Menu line
  gsap.to('#menuLine',{
    width:80,
    scrollTrigger:{trigger:'#menuLine',start:'top 88%',end:'top 65%',scrub:1}
  });

  // Menu title words
  gsap.utils.toArray('#menu h2 .word-inner').forEach(w=>{
    gsap.to(w,{y:0,duration:1,ease:'power3.out',
      scrollTrigger:{trigger:w,start:'top 90%',toggleActions:"play reverse play reverse"}
    });
  });

  // Menu desc
  gsap.to('#menuDesc',{
    opacity:1,y:0,duration:.8,ease:'power3.out',
    scrollTrigger:{trigger:'#menuDesc',start:'top 88%',toggleActions:"play reverse play reverse"}
  });

  // Cards — LEFT/RIGHT slide animation, reverses on scroll up
  document.querySelectorAll('.pizza-card').forEach((card,i)=>{
    const isLeft = i % 2 === 0;
    gsap.fromTo(card,
      { opacity:0, y:50, x:isLeft?-70:70 },
      {
        opacity:1, y:0, x:0,
        duration:1, ease:'power3.out',
        scrollTrigger:{
          trigger:card,
          start:'top 92%',
          toggleActions:"play reverse play reverse"
        }
      }
    );
  });

  // Hero parallax
  gsap.to('.hero-title',{
    y:-120,opacity:.15,
    scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:1}
  });
  gsap.to('#scrollHint',{
    opacity:0,
    scrollTrigger:{trigger:'#hero',start:'top top',end:'25% top',scrub:1}
  });
  // Split pizza parallax
  gsap.to('#splitPizza',{
    y:80,opacity:0,
    scrollTrigger:{trigger:'#hero',start:'30% top',end:'bottom top',scrub:1}
  });

  // Nav background on scroll
  ScrollTrigger.create({
    trigger:'#menu',start:'top 80%',
    onEnter:()=>document.getElementById('nav').style.background='rgba(12,10,7,.85)',
    onLeaveBack:()=>document.getElementById('nav').style.background='transparent'
  });

  // Back to top button
  ScrollTrigger.create({
    trigger:'#contact',start:'top 70%',
    onEnter:()=>document.getElementById('btt').classList.add('show'),
    onLeaveBack:()=>document.getElementById('btt').classList.remove('show')
  });
}

/* ===== LENIS ===== */
function initLenis(){
  lenisInstance=new Lenis({
    duration:1.3,
    easing:t=>Math.min(1,1.001-Math.pow(2,-10*t)),
    smooth:true
  });
  lenisInstance.on('scroll',()=>{
    ScrollTrigger.update();
    updateSideNav();
  });
  gsap.ticker.add(t=>lenisInstance.raf(t*1000));
  gsap.ticker.lagSmoothing(0);
}

/* ===== KEYBOARD ===== */
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeModal();closeCart();closeMobile();}
});

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded',()=>{
  gsap.registerPlugin(ScrollTrigger);
  buildMarquee();
  buildFilters();
  buildGrid();

  document.getElementById('searchInput').addEventListener('input',applyFilters);

  gsap.set('#lBrand',{y:20});
  initLenis();
  initCursor();
  runLoader();
  setTimeout(()=>{
    init3D();
    initScroll();
  },3200);
});