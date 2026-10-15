const PRODUCTS = [{"id": "p1", "name": "Dell Inspiron Laptop", "category": "Electronics", "price": 28500, "condition": "Good", "location": "Ludhiana", "description": "Reliable laptop for study and office work.", "image": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85"}, {"id": "p2", "name": "Canon EOS Camera", "category": "Electronics", "price": 22000, "condition": "Excellent", "location": "Delhi", "description": "DSLR camera with good image quality.", "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85"}, {"id": "p3", "name": "JBL Bluetooth Speaker", "category": "Electronics", "price": 4500, "condition": "Good", "location": "Chandigarh", "description": "Portable wireless speaker with strong sound.", "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85"}, {"id": "p4", "name": "Samsung 27-inch Monitor", "category": "Electronics", "price": 11500, "condition": "Excellent", "location": "Mohali", "description": "Full HD monitor for work and entertainment.", "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=85"}, {"id": "p5", "name": "Sony Headphones", "category": "Electronics", "price": 6800, "condition": "Good", "location": "Amritsar", "description": "Comfortable over-ear wireless headphones.", "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"}, {"id": "p6", "name": "Mechanical Gaming Keyboard", "category": "Electronics", "price": 3200, "condition": "Excellent", "location": "Jalandhar", "description": "RGB mechanical keyboard for gaming and work.", "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85"}, {"id": "p7", "name": "GoPro Action Camera", "category": "Electronics", "price": 18500, "condition": "Good", "location": "Patiala", "description": "Compact action camera for travel and outdoor use.", "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?auto=format&fit=crop&w=900&q=85"}, {"id": "p8", "name": "iPhone 13 128GB", "category": "Mobiles", "price": 34000, "condition": "Excellent", "location": "Chandigarh", "description": "Well-maintained iPhone with 128GB storage.", "image": "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=900&q=85"}, {"id": "p9", "name": "Samsung Galaxy S22", "category": "Mobiles", "price": 27500, "condition": "Good", "location": "Ludhiana", "description": "Premium Android phone with excellent display.", "image": "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=85"}, {"id": "p10", "name": "OnePlus 11", "category": "Mobiles", "price": 33000, "condition": "Excellent", "location": "Delhi", "description": "Fast Android phone with clean condition.", "image": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=85"}, {"id": "p11", "name": "Google Pixel 7", "category": "Mobiles", "price": 24500, "condition": "Good", "location": "Mohali", "description": "Pixel phone with excellent camera performance.", "image": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85"}, {"id": "p12", "name": "Redmi Note 12 Pro", "category": "Mobiles", "price": 14500, "condition": "Good", "location": "Amritsar", "description": "Value-focused smartphone with AMOLED display.", "image": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85"}, {"id": "p13", "name": "Realme GT Neo", "category": "Mobiles", "price": 17500, "condition": "Fair", "location": "Jalandhar", "description": "Performance-focused phone with fast charging.", "image": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=85"}, {"id": "p14", "name": "iPad Air", "category": "Mobiles", "price": 31500, "condition": "Excellent", "location": "Patiala", "description": "Lightweight tablet for study and creative work.", "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=85"}, {"id": "p15", "name": "Hyundai i20", "category": "Vehicles", "price": 650000, "condition": "Good", "location": "Delhi", "description": "Comfortable hatchback in usable condition.", "image": "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=900&q=85"}, {"id": "p16", "name": "Honda City", "category": "Vehicles", "price": 720000, "condition": "Good", "location": "Chandigarh", "description": "Well-maintained family sedan.", "image": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=85"}, {"id": "p17", "name": "Royal Enfield Classic 350", "category": "Vehicles", "price": 175000, "condition": "Excellent", "location": "Patiala", "description": "Classic motorcycle with clean body and engine.", "image": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85"}, {"id": "p18", "name": "Yamaha MT-15", "category": "Vehicles", "price": 135000, "condition": "Good", "location": "Ludhiana", "description": "Sporty motorcycle for city riding.", "image": "https://images.unsplash.com/photo-1558980394-0c9e9c8c0f5b?auto=format&fit=crop&w=900&q=85"}, {"id": "p19", "name": "Mountain Bicycle", "category": "Vehicles", "price": 8500, "condition": "Good", "location": "Amritsar", "description": "Multi-speed bicycle for fitness and commuting.", "image": "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=900&q=85"}, {"id": "p20", "name": "TVS Jupiter Scooter", "category": "Vehicles", "price": 72000, "condition": "Good", "location": "Jalandhar", "description": "Practical scooter for daily city travel.", "image": "https://images.unsplash.com/photo-1558980664-10ea3f5e1f2f?auto=format&fit=crop&w=900&q=85"}, {"id": "p21", "name": "Electric Scooter", "category": "Vehicles", "price": 48000, "condition": "Excellent", "location": "Mohali", "description": "Compact electric scooter with low running cost.", "image": "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=85"}, {"id": "p22", "name": "3 Seater Sofa", "category": "Furniture", "price": 12000, "condition": "Good", "location": "Ludhiana", "description": "Comfortable fabric sofa for living room.", "image": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85"}, {"id": "p23", "name": "Queen Size Bed", "category": "Furniture", "price": 18500, "condition": "Good", "location": "Chandigarh", "description": "Wooden queen-size bed frame.", "image": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=85"}, {"id": "p24", "name": "Study Table", "category": "Furniture", "price": 3200, "condition": "Good", "location": "Jalandhar", "description": "Compact study table with storage.", "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6b0?auto=format&fit=crop&w=900&q=85"}, {"id": "p25", "name": "6 Seater Dining Table", "category": "Furniture", "price": 14500, "condition": "Excellent", "location": "Amritsar", "description": "Dining set suitable for family meals.", "image": "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85"}, {"id": "p26", "name": "Ergonomic Office Chair", "category": "Furniture", "price": 6500, "condition": "Good", "location": "Mohali", "description": "Adjustable chair for long work sessions.", "image": "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=900&q=85"}, {"id": "p27", "name": "Wooden Wardrobe", "category": "Furniture", "price": 22000, "condition": "Fair", "location": "Patiala", "description": "Large storage wardrobe with shelves.", "image": "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85"}, {"id": "p28", "name": "Bookshelf", "category": "Furniture", "price": 4500, "condition": "Good", "location": "Delhi", "description": "Tall bookshelf for books and decor.", "image": "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=900&q=85"}, {"id": "p29", "name": "Samsung Refrigerator", "category": "Home Appliances", "price": 18000, "condition": "Excellent", "location": "Amritsar", "description": "Double-door refrigerator with spacious storage.", "image": "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=85"}, {"id": "p30", "name": "LG Washing Machine", "category": "Home Appliances", "price": 15500, "condition": "Good", "location": "Ludhiana", "description": "Fully automatic washing machine.", "image": "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=85"}, {"id": "p31", "name": "Voltas Air Conditioner", "category": "Home Appliances", "price": 24000, "condition": "Good", "location": "Chandigarh", "description": "Split AC suitable for a medium room.", "image": "https://images.unsplash.com/photo-1631545806609-32b7f3c7e1b5?auto=format&fit=crop&w=900&q=85"}, {"id": "p32", "name": "Philips Air Fryer", "category": "Home Appliances", "price": 4800, "condition": "Excellent", "location": "Jalandhar", "description": "Compact air fryer for everyday cooking.", "image": "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85"}, {"id": "p33", "name": "Mixer Grinder", "category": "Home Appliances", "price": 2600, "condition": "Good", "location": "Patiala", "description": "Three-jar mixer grinder for kitchen use.", "image": "https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=900&q=85"}, {"id": "p34", "name": "Microwave Oven", "category": "Home Appliances", "price": 6200, "condition": "Good", "location": "Mohali", "description": "Countertop microwave oven in working condition.", "image": "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=900&q=85"}, {"id": "p35", "name": "Dyson Vacuum Cleaner", "category": "Home Appliances", "price": 19500, "condition": "Excellent", "location": "Delhi", "description": "Cordless vacuum cleaner with strong suction.", "image": "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=85"}];

const USER_KEY="remarketUser";
const LOGIN_KEY="remarketLoggedIn";
const LISTING_KEY="remarketListings";

function getUser(){return JSON.parse(localStorage.getItem(USER_KEY)||"null")}
function isLoggedIn(){return localStorage.getItem(LOGIN_KEY)==="true"}
function getListings(){return JSON.parse(localStorage.getItem(LISTING_KEY)||"[]")}
function allProducts(){return [...PRODUCTS,...getListings()]}
function money(v){return "₹"+Number(v).toLocaleString("en-IN")}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}

function updateHeader(){
  const box=document.getElementById("headerActions");
  if(!box)return;
  if(isLoggedIn()){
    const u=getUser();
    box.innerHTML=`<div class="nav-actions"><span class="nav-user">${escapeHtml(u?.name||"User")}</span><button class="nav-logout" onclick="logoutUser()">Logout</button></div>`;
  }else{
    box.innerHTML=`<div class="nav-actions"><a class="nav-login" href="login.html">Login</a><a class="nav-join" href="register.html">Join ReMarket</a></div>`;
  }
}
function logoutUser(){localStorage.setItem(LOGIN_KEY,"false");location.href="index.html"}
function requireLogin(){
  if(!isLoggedIn()){alert("Please register and login first.");location.href="login.html";return false}
  return true
}
function renderCard(p){
  return `<a class="product-card" href="product-details.html?id=${encodeURIComponent(p.id)}">
    <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
    <div class="product-card-body">
      <span class="tag">${escapeHtml(p.category)}</span>
      <h3>${escapeHtml(p.name)}</h3>
      <div class="product-price">${money(p.price)}</div>
      <div class="product-meta"><span>${escapeHtml(p.condition)}</span><span>${escapeHtml(p.location)}</span></div>
    </div>
  </a>`;
}
function renderHome(){
  const box=document.getElementById("featuredProducts");
  if(box)box.innerHTML=allProducts().slice(0,7).map(renderCard).join("");
}
function searchFromHome(){
  const q=document.getElementById("homeSearch")?.value.trim();
  location.href="products.html"+(q?"?search="+encodeURIComponent(q):"");
}
function focusHomeSearch(){document.getElementById("homeSearch")?.focus()}

function renderProducts(){
  const box=document.getElementById("product-list"); if(!box)return;
  const params=new URLSearchParams(location.search);
  const search=document.getElementById("searchInput");
  const cat=document.getElementById("categoryFilter");
  const cond=document.getElementById("conditionFilter");
  if(params.get("search"))search.value=params.get("search");
  if(params.get("category"))cat.value=params.get("category");
  function apply(){
    const q=search.value.toLowerCase().trim();
    const c=cat.value, co=cond.value;
    const arr=allProducts().filter(p=>(!q||p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q))&&(!c||p.category===c)&&(!co||p.condition===co));
    document.getElementById("productCount").textContent=`${arr.length} product${arr.length===1?"":"s"} found`;
    box.innerHTML=arr.length?arr.map(renderCard).join(""):`<div class="empty-state">No products found.<br><a href="products.html">Clear filters</a></div>`;
  }
  [search,cat,cond].forEach(x=>x.addEventListener("input",apply));
  apply();
}
function register(){
  const form=document.getElementById("registerForm");if(!form)return;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=document.getElementById("registerName").value.trim();
    const email=document.getElementById("registerEmail").value.trim().toLowerCase();
    const password=document.getElementById("registerPassword").value;
    const confirm=document.getElementById("confirmPassword").value;
    const notice=document.getElementById("registerNotice");
    if(password.length<6){notice.textContent="Password must contain at least 6 characters.";return}
    if(password!==confirm){notice.textContent="Passwords do not match.";return}
    localStorage.setItem(USER_KEY,JSON.stringify({name,email,password}));
    localStorage.setItem(LOGIN_KEY,"false");
    location.href="login.html?registered=1";
  });
}
function login(){
  const form=document.getElementById("loginForm");if(!form)return;
  const params=new URLSearchParams(location.search);
  const saved=getUser();
  const email=document.getElementById("loginEmail");
  if(saved&&params.get("registered"))email.value=saved.email;
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const u=getUser(), notice=document.getElementById("loginNotice");
    if(!u){notice.textContent="No account found. Please register first.";return}
    if(email.value.trim().toLowerCase()!==u.email||document.getElementById("loginPassword").value!==u.password){notice.textContent="Incorrect email or password.";return}
    localStorage.setItem(LOGIN_KEY,"true");location.href="index.html";
  });
}
function sell(){
  const form=document.getElementById("sellForm");if(!form)return;
  if(!requireLogin()){form.style.display="none";return}
  let imageData="";
  const input=document.getElementById("sellImage");
  input.addEventListener("change",()=>{
    const file=input.files[0];if(!file)return;
    const reader=new FileReader();
    reader.onload=e=>{imageData=e.target.result;document.getElementById("imagePreview").innerHTML=`<img src="${imageData}" alt="Preview">`};
    reader.readAsDataURL(file);
  });
  form.addEventListener("submit",e=>{
    e.preventDefault();
    if(!imageData){alert("Please select a product image.");return}
    const u=getUser();
    const listing={id:"user-"+Date.now(),name:document.getElementById("sellName").value.trim(),category:document.getElementById("sellCategory").value,price:Number(document.getElementById("sellPrice").value),condition:document.getElementById("sellCondition").value,location:document.getElementById("sellLocation").value.trim()||"Not specified",description:document.getElementById("sellDescription").value.trim(),image:imageData,sellerEmail:u.email,sellerName:u.name};
    const list=getListings();list.push(listing);localStorage.setItem(LISTING_KEY,JSON.stringify(list));
    document.getElementById("sellNotice").textContent="Product added successfully!";
    form.reset();document.getElementById("imagePreview").textContent="Image preview will appear here";imageData="";
    setTimeout(()=>location.href="products.html",700);
  });
}
function dashboard(){
  const box=document.getElementById("myListings");if(!box)return;
  if(!requireLogin()){box.innerHTML="";return}
  const u=getUser(), mine=getListings().filter(p=>p.sellerEmail===u.email);
  document.getElementById("welcomeText").textContent=`Welcome, ${u.name}. Here are your published products.`;
  document.getElementById("listingCount").textContent=mine.length;
  box.innerHTML=mine.length?mine.map(renderCard).join(""):`<div class="empty-state">You have no listings yet.<br><a href="sell.html">Sell your first product</a></div>`;
}
function details(){
  const img=document.getElementById("detailImage");if(!img)return;
  const id=new URLSearchParams(location.search).get("id"),p=allProducts().find(x=>x.id===id);
  if(!p){document.querySelector(".details-grid").innerHTML=`<div class="empty-state">Product not found.<br><a href="products.html">Back to products</a></div>`;return}
  img.src=p.image;img.alt=p.name;
  document.getElementById("detailCategory").textContent=p.category;
  document.getElementById("detailName").textContent=p.name;
  document.getElementById("detailPrice").textContent=money(p.price);
  document.getElementById("detailCondition").textContent="Condition: "+p.condition;
  document.getElementById("detailLocation").textContent="Location: "+p.location;
  document.getElementById("detailDescription").textContent=p.description;
  document.getElementById("purchaseButton").onclick=()=>{if(requireLogin())alert("Purchase request sent for "+p.name+".")};
}
document.addEventListener("DOMContentLoaded",()=>{updateHeader();renderHome();renderProducts();register();login();sell();dashboard();details()});
