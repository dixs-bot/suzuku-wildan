(function(){

/* =========================
STYLE RESPONSIVE
========================= */

const style=document.createElement("style")

style.innerHTML=`

/* ICON */

.cs-icon{

position:fixed;
bottom:20px;
right:20px;

width:55px;

border-radius:50%;

box-shadow:0 6px 20px rgba(0,0,0,0.3);

cursor:pointer;

z-index:9999;

animation:floatCS 3s infinite ease-in-out;

}

@keyframes floatCS{

0%{transform:translateY(0)}
50%{transform:translateY(-8px)}
100%{transform:translateY(0)}

}


/* CHAT BOX */

.cs-chat{

position:fixed;
bottom:90px;
right:20px;

width:340px;
height:440px;

background:white;

border-radius:12px;

box-shadow:0 10px 40px rgba(0,0,0,0.3);

display:none;
flex-direction:column;

font-family:Arial;

z-index:9999;

}


/* HEADER */

.cs-header{

background:#0f172a;
color:white;

padding:12px;

border-radius:12px 12px 0 0;

font-weight:bold;

}


/* MESSAGE */

.cs-messages{

flex:1;
overflow:auto;
padding:10px;
font-size:13px;

}


/* INPUT */

.cs-input{

display:flex;
border-top:1px solid #eee;

}

.cs-input input{

flex:1;
border:none;
padding:10px;
outline:none;

}

.cs-input button{

background:#16a34a;
color:white;
border:none;
padding:10px 14px;
cursor:pointer;

}


/* WHATSAPP */

.cs-wa{

background:#25D366;
color:white;

text-align:center;

padding:8px;

font-size:12px;

cursor:pointer;

}


/* MOBILE RESPONSIVE */

@media (max-width:768px){

.cs-icon{

width:50px;
bottom:15px;
right:15px;

}

.cs-chat{

width:90%;
right:5%;
bottom:80px;
height:70vh;

}

}

`

document.head.appendChild(style)



/* =========================
ICON
========================= */

const icon=document.createElement("img")

icon.src="cs-suzuki.png"

icon.className="cs-icon"

document.body.appendChild(icon)



/* =========================
CHAT BOX
========================= */

const chat=document.createElement("div")

chat.className="cs-chat"

chat.innerHTML=`

<div class="cs-header">Suzuki AI Assistant</div>

<div class="cs-messages" id="csMessages"></div>

<div class="cs-wa" onclick="window.open('https://wa.me/6281234567890')">
Chat Sales WhatsApp
</div>

<div class="cs-input">
<input id="csInput" placeholder="Tanya mobil Suzuki..." />
<button id="csSend">Kirim</button>
</div>

`

document.body.appendChild(chat)



/* =========================
OPEN CHAT
========================= */

icon.onclick=()=>{

chat.style.display=
chat.style.display==="flex"?"none":"flex"

}



/* =========================
CARI PRODUK
========================= */

function findProduct(text){

text=text.toLowerCase()

return products.find(p =>
text.includes(p.id.toLowerCase()) ||
text.includes(p.name.toLowerCase())
)

}



/* =========================
REKOMENDASI BUDGET
========================= */

function recommendByBudget(budget){

let result=[]

products.forEach(p=>{

p.variants.forEach(v=>{

if(v.otr<=budget){

result.push({

name:p.name,
variant:v.name,
price:v.otr

})

}

})

})

return result

}



/* =========================
AI REPLY
========================= */

function suzukiAI(text){

text=text.toLowerCase()



/* BUDGET */

const budgetMatch=text.match(/\d+/)

if(text.includes("budget") && budgetMatch){

let budget=parseInt(budgetMatch[0])*1000000

const list=recommendByBudget(budget)

if(list.length===0){

return "Budget tersebut belum tersedia mobil Suzuki."

}

let reply=`Mobil Suzuki dengan budget sekitar Rp${budget.toLocaleString()}<br><br>`

list.slice(0,5).forEach(c=>{

reply+=`🚗 ${c.name} ${c.variant}<br>Rp ${c.price.toLocaleString()}<br><br>`

})

return reply

}



/* PRODUK */

const product=findProduct(text)

if(product){

let reply=`<b>${product.name}</b><br><br>`

reply+=`Varian tersedia:<br>`

product.variants.forEach(v=>{

reply+=`• ${v.name} - Rp ${v.otr.toLocaleString()}<br>`

})

const s=product.variants[0].specs

reply+=`

<br><b>Spesifikasi utama</b><br>

Mesin : ${s.engine}<br>
Transmisi : ${s.transmission}<br>
Kapasitas : ${s.passengers} penumpang

`

return reply

}



/* SIMULASI KREDIT */

if(text.includes("kredit")){

return `

Simulasi kredit contoh:

Harga mobil : Rp280.000.000
DP 20% : Rp56.000.000
Tenor : 5 tahun

Cicilan sekitar Rp5 juta / bulan

`

}



/* DEFAULT */

return `

Halo 👋 saya AI Suzuki Assistant.

Saya bisa membantu:

🚗 Harga mobil Suzuki  
🚗 Spesifikasi mobil  
🚗 Simulasi kredit  
🚗 Rekomendasi mobil sesuai budget  

Contoh pertanyaan:

Harga XL7  
Spesifikasi Ertiga  
Budget 300 juta mobil apa  

`

}



/* =========================
CHAT SYSTEM
========================= */

const input=document.getElementById("csInput")
const send=document.getElementById("csSend")
const messages=document.getElementById("csMessages")

send.onclick=()=>{

const text=input.value

if(!text) return

messages.innerHTML+=`<div><b>Anda:</b> ${text}</div>`

const reply=suzukiAI(text)

messages.innerHTML+=`<div><b>Suzuki:</b> ${reply}</div>`

input.value=""

messages.scrollTop=messages.scrollHeight

}

})();
