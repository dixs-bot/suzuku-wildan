(function(){

/* ==============================
STYLE VISITOR BOX
============================== */

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
box-shadow:0 10px 40px rgba(0,0,0,0.4);
font-family:Arial;
font-size:13px;
z-index:9999;
min-width:210px;
}

.visitor-title{
font-weight:bold;
margin-bottom:6px;
color:#facc15;
}

.visitor-row{
display:flex;
justify-content:space-between;
margin:3px 0;
}

.visitor-popup{
position:fixed;
left:20px;
bottom:20px;
background:white;
padding:10px 14px;
border-radius:10px;
box-shadow:0 10px 30px rgba(0,0,0,0.3);
font-size:13px;
z-index:9999;
animation:popupFade .5s ease;
}

@keyframes popupFade{
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



/* ==============================
CREATE VISITOR BOX
============================== */

const box=document.createElement("div")

box.className="visitor-pro-box"

box.innerHTML=`

<div class="visitor-title">Website Activity</div>

<div class="visitor-row">
<span>👥 Total Visitor</span>
<span id="visitor-total">10.927</span>
</div>

<div class="visitor-row">
<span>🟢 Online Now</span>
<span id="visitor-online">8</span>
</div>

<div class="visitor-row">
<span>👀 Visitors Now</span>
<span id="visitor-now">8</span>
</div>

`

document.body.appendChild(box)



/* ==============================
RANDOM VISITOR ONLINE
============================== */

function updateVisitors(){

let randomVisitor=Math.floor(Math.random()*8)+3

document.getElementById("visitor-online").innerText=randomVisitor
document.getElementById("visitor-now").innerText=randomVisitor

}

setInterval(updateVisitors,5000)



/* ==============================
DATA KECAMATAN BANDUNG RAYA
============================== */

const kecamatanBandung=[

"Cimahi",
"Cimahi Utara",
"Cimahi Selatan",
"Cimahi Tengah",

"Antapani",
"Arcamanik",
"Andir",
"Astana Anyar",
"Babakan Ciparay",
"Bandung Kidul",
"Bandung Kulon",
"Bandung Wetan",
"Batununggal",
"Bojongloa Kaler",
"Bojongloa Kidul",
"Buah Batu",
"Cibeunying Kaler",
"Cibeunying Kidul",
"Cibiru",
"Cicendo",
"Cidadap",
"Cinambo",
"Coblong",
"Gedebage",
"Kiaracondong",
"Lengkong",
"Mandalajati",
"Panyileukan",
"Rancasari",
"Regol",
"Sukajadi",
"Sukasari",
"Sumur Bandung",
"Ujung Berung"

]



/* ==============================
DATA MOBIL SUZUKI
============================== */

const mobilSuzuki=[

"XL7 Hybrid",
"Ertiga Hybrid",
"Grand Vitara",
"Jimny 5 Door",
"Baleno",
"S-Presso",
"Carry Pickup"

]



/* ==============================
POPUP ACTIVITY
============================== */

function showVisitorPopup(){

const kecamatan=kecamatanBandung[Math.floor(Math.random()*kecamatanBandung.length)]

const mobil=mobilSuzuki[Math.floor(Math.random()*mobilSuzuki.length)]

const popup=document.createElement("div")

popup.className="visitor-popup"

popup.innerHTML=`
🚗 Seseorang dari <b>${kecamatan}</b><br>
sedang melihat <b>${mobil}</b>
`

document.body.appendChild(popup)

setTimeout(()=>{
popup.remove()
},6000)

}

setInterval(showVisitorPopup,12000)

})();
