(function(){

if(typeof products === "undefined"){
console.warn("Products belum dimuat")
}

/* ================= STYLE ================= */

const style=document.createElement("style")

style.innerHTML=`

.cs-icon{
position:fixed;
bottom:170px;
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
bottom:230px;
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
display:flex;
justify-content:space-between;
align-items:center;
}

.cs-close{
cursor:pointer;
font-size:18px;
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

`

document.head.appendChild(style)

/* ================= ICON ================= */

const icon=document.createElement("img")

icon.src="cs-suzuki.png"
icon.className="cs-icon"

document.body.appendChild(icon)

/* ================= CHAT ================= */

const chat=document.createElement("div")

chat.className="cs-chat"

chat.innerHTML=`

<div class="cs-header">

Suzuki AI Assistant

<span class="cs-close" onclick="closeAI()">✕</span>

</div>

<div class="cs-messages" id="csMessages">

<div class="cs-quick">

<button onclick="askAI('Harga XL7')">Harga XL7</button>

<button onclick="askAI('Harga Fronx')">Harga Fronx</button>

<button onclick="askAI('Spesifikasi Ertiga')">Spesifikasi Ertiga</button>

<button onclick="askAI('Simulasi kredit XL7')">Simulasi kredit</button>

<button onclick="askAI('Budget 300 juta mobil apa')">Budget 300 juta</button>

</div>

</div>

<div class="cs-input">
<input id="csInput" placeholder="Tanya mobil Suzuki..." />
<button id="csSend">Kirim</button>
</div>

`

document.body.appendChild(chat)

/* ================= OPEN CHAT ================= */

icon.onclick=()=>{

chat.style.display="flex"

}

/* ================= CLOSE CHAT ================= */

window.closeAI=function(){

chat.style.display="none"

}

/* ================= AI ================= */

function suzukiAI(text){

text=text.toLowerCase()

if(typeof products === "undefined"){

return "Data mobil belum tersedia."

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

<br><b>Spesifikasi</b><br>

Mesin : ${s.engine}<br>
Transmisi : ${s.transmission}<br>
Kapasitas : ${s.passengers} penumpang

`

return reply

}

/* SIMULASI */

if(text.includes("kredit")){

return`

Contoh simulasi kredit:

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

return "Mobil Suzuki sesuai budget:<br><br>"+list.slice(0,5).join("<br>")

}

}

return "Silakan tanya harga atau spesifikasi mobil Suzuki."

}

/* ================= CHAT SYSTEM ================= */

const input=document.getElementById("csInput")
const send=document.getElementById("csSend")
const messages=document.getElementById("csMessages")

window.askAI=function(text){

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
