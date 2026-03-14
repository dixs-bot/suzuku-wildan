(function(){

/* ===============================
VISITOR PRO MAX SYSTEM
=============================== */

const style=document.createElement("style")

style.innerHTML=`

.visitor-pro-box{

position:fixed;
bottom:20px;
right:20px;

background:linear-gradient(135deg,#020617,#0f172a);

color:white;

padding:14px 18px;

border-radius:14px;

box-shadow:0 10px 40px rgba(0,0,0,0.5);

font-family:Arial;

font-size:13px;

z-index:9999;

min-width:180px;

animation:visitorFade 1s ease;

}

.visitor-title{
font-weight:bold;
margin-bottom:6px;
color:#facc15;
}

.visitor-row{
display:flex;
justify-content:space-between;
margin:2px 0;
}

.visitor-online{
color:#22c55e;
font-weight:bold;
}

.visitor-total{
color:#facc15;
font-weight:bold;
}

.visitor-popup{

position:fixed;
left:20px;
bottom:20px;

background:white;

color:#111;

padding:10px 14px;

border-radius:10px;

box-shadow:0 10px 30px rgba(0,0,0,0.3);

font-size:13px;

animation:popupShow .6s ease;

z-index:9999;

}

@keyframes popupShow{

from{
opacity:0;
transform:translateY(20px);
}

to{
opacity:1;
transform:translateY(0);
}

}

@keyframes visitorFade{

from{
opacity:0;
transform:translateY(20px);
}

to{
opacity:1;
transform:translateY(0);
}

}

`

document.head.appendChild(style)



/* ===============================
CREATE VISITOR BOX
=============================== */

const box=document.createElement("div")

box.className="visitor-pro-box"

box.innerHTML=`

<div class="visitor-title">Website Activity</div>

<div class="visitor-row">
<span>👥 Total Visitor</span>
<span class="visitor-total" id="visitor-total">0</span>
</div>

<div class="visitor-row">
<span>🟢 Online Now</span>
<span class="visitor-online" id="visitor-online">1</span>
</div>

`

document.body.appendChild(box)



/* ===============================
LOAD TOTAL VISITOR
=============================== */

async function loadVisitor(){

try{

const res=await fetch("https://api.countapi.xyz/hit/suzuki-njs-cimahi/visits")

const data=await res.json()

document.getElementById("visitor-total").innerText=data.value

}catch(e){

console.log("Visitor error")

}

}

loadVisitor()



/* ===============================
SIMULATE ONLINE VISITOR
=============================== */

function simulateOnline(){

const online=Math.floor(Math.random()*8)+1

document.getElementById("visitor-online").innerText=online

}

setInterval(simulateOnline,5000)



/* ===============================
POPUP ACTIVITY
=============================== */

const cars=[
"XL7 Hybrid",
"Ertiga Hybrid",
"Grand Vitara",
"Jimny 5 Door",
"S-Presso",
"Carry Pickup",
"Baleno"
]

const cities=[
"Bandung",
"Jakarta",
"Cimahi",
"Bekasi",
"Depok",
"Tangerang",
"Bogor"
]

function showPopup(){

const car=cars[Math.floor(Math.random()*cars.length)]

const city=cities[Math.floor(Math.random()*cities.length)]

const popup=document.createElement("div")

popup.className="visitor-popup"

popup.innerHTML=`
🚗 Seseorang dari <b>${city}</b><br>
sedang melihat <b>${car}</b>
`

document.body.appendChild(popup)

setTimeout(()=>{
popup.remove()
},5000)

}

setInterval(showPopup,12000)



})();
