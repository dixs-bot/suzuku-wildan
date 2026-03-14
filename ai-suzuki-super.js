(function(){

/* ===============================
STYLE
=============================== */

const style=document.createElement("style")

style.innerHTML=`

.cs-icon{
position:fixed;
bottom:180px;
right:20px;
width:55px;
border-radius:50%;
box-shadow:0 6px 20px rgba(0,0,0,0.35);
cursor:pointer;
z-index:99999999;
animation:csFloat 3s infinite ease-in-out;
}

@keyframes csFloat{
0%{transform:translateY(0)}
50%{transform:translateY(-8px)}
100%{transform:translateY(0)}
}

.cs-chat{
position:fixed;
bottom:170px;
right:20px;
width:340px;
height:460px;
background:white;
border-radius:14px;
box-shadow:0 15px 45px rgba(0,0,0,0.35);
display:none;
flex-direction:column;
font-family:Arial;
z-index:99999999;
}

.cs-header{
background:#0f172a;
color:white;
padding:12px;
border-radius:14px 14px 0 0;
font-weight:bold;
}

.cs-messages{
flex:1;
overflow:auto;
padding:10px;
font-size:13px;
}

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

.cs-wa{
background:#25D366;
color:white;
text-align:center;
padding:8px;
font-size:12px;
cursor:pointer;
}

/* QUICK QUESTION */

.cs-quick{
display:flex;
flex-wrap:wrap;
gap:6px;
margin-bottom:10px;
}

.cs-quick button{
background:#f1f5f9;
border:none;
border-radius:20px;
padding:6px 10px;
font-size:12px;
cursor:pointer;
}

.cs-quick button:hover{
background:#16a34a;
color:white;
}

/* MOBILE */

@media (max-width:768px){

.cs-icon{
bottom:180px;
width:50px;
right:15px;
}

.cs-chat{
width:92%;
right:4%;
height:65vh;
}

}

`

document.head.appendChild(style)



/* ===============================
ICON
=============================== */

const icon=document.createElement("img")

icon.src="cs-suzuki.png"

icon.className="cs-icon"

document.body.appendChild(icon)



/* ===============================
CHAT BOX
=============================== */

const chat=document.createElement("div")

chat.className="cs-chat"

chat.innerHTML=`

<div class="cs-header">Suzuki AI Assistant</div>

<div class="cs-messages" id="csMessages">

<div class="cs-quick">

<button onclick="askAI('Harga XL7')">Harga XL7</button>

<button onclick="askAI('Spesifikasi Ertiga')">Spesifikasi Ertiga</button>

<button onclick="askAI('Simulasi kredit')">Simulasi kredit</button>

<button onclick="askAI('Budget 300 juta mobil apa')">Budget 300 juta</button>

<button onclick="askAI('Promo Suzuki Bandung')">Promo Suzuki</button>

</div>

</div>

<div class="cs-wa" onclick="window.open('https://wa.me/6281234567890')">
Chat Sales WhatsApp
</div>

<div class="cs-input">
<input id="csInput" placeholder="Tanya mobil Suzuki..." />
<button id="csSend">Kirim</button>
</div>

`

document.body.appendChild(chat)



/* ===============================
OPEN CHAT
=============================== */

icon.onclick=()=>{

chat.style.display=
chat.style.display==="flex"?"none":"flex"

}



/* ===============================
AI FUNCTION
=============================== */

function suzukiAI(text){

text=text.toLowerCase()

if(typeof products==="undefined"){

return "Data mobil belum dimuat."

}

/* CARI MOBIL */

let product=products.find(p=>
text.includes(p.id.toLowerCase()) ||
text.includes(p.name.toLowerCase())
)

if(product){

let reply=`<b>${product.name}</b><br><br>`

reply+="Varian tersedia:<br>"

product.variants.forEach(v=>{
reply+=`• ${v.name} - Rp ${v.otr.toLocaleString()}<br>`
})

let s=product.variants[0].specs

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

return`
Simulasi kredit contoh:

Harga mobil : Rp280.000.000
DP 20% : Rp56.000.000
Tenor : 5 tahun

Cicilan sekitar Rp5 juta / bulan
`

}

/* BUDGET */

if(text.includes("budget")){

let num=text.match(/\d+/)

if(num){

let budget=parseInt(num[0])*1000000

let list=[]

products.forEach(p=>{
p.variants.forEach(v=>{
if(v.otr<=budget){
list.push(p.name+" "+v.name+" - Rp "+v.otr.toLocaleString())
}
})
})

if(list.length){
return "Mobil Suzuki sesuai budget:<br><br>"+list.slice(0,5).join("<br>")
}

}

}

/* DEFAULT */

return`

Halo 👋 saya AI Suzuki Assistant.

Saya bisa membantu:

🚗 Harga mobil Suzuki  
🚗 Spesifikasi mobil  
🚗 Simulasi kredit  
🚗 Rekomendasi mobil sesuai budget  

`

}



/* ===============================
CHAT SYSTEM
=============================== */

const input=document.getElementById("csInput")
const send=document.getElementById("csSend")
const messages=document.getElementById("csMessages")

function askAI(text){

messages.innerHTML+=`<div><b>Anda:</b> ${text}</div>`

const reply=suzukiAI(text)

messages.innerHTML+=`<div><b>Suzuki:</b> ${reply}</div>`

messages.scrollTop=messages.scrollHeight

}

send.onclick=()=>{

const text=input.value

if(!text) return

askAI(text)

input.value=""

}

})();
