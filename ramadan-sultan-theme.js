(function(){

/* CREATE STYLE */

const style=document.createElement("style")

style.innerHTML=`

.ramadan-sultan{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
pointer-events:none;
z-index:-1;
overflow:hidden;
}

.ramadan-bg{
position:absolute;
width:100%;
height:100%;
background:linear-gradient(#020617,#0f172a,#020617);
}

.ramadan-moon{
position:absolute;
top:80px;
right:120px;
width:120px;
height:120px;
background:#fde68a;
border-radius:50%;
box-shadow:0 0 100px gold;
}

.ramadan-moon::after{
content:"";
position:absolute;
left:40px;
width:120px;
height:120px;
background:#020617;
border-radius:50%;
}

.ramadan-stars{
position:absolute;
width:100%;
height:100%;
background-image:
radial-gradient(white 1px,transparent 1px),
radial-gradient(white 1px,transparent 1px);
background-size:60px 60px;
animation:stars 2s infinite alternate;
}

@keyframes stars{
0%{opacity:0.4}
100%{opacity:0.8}
}

.lantern{
position:absolute;
top:0;
width:80px;
filter:drop-shadow(0 0 20px gold);
animation:swing 6s infinite ease-in-out;
}

.l1{left:10%}
.l2{left:50%}
.l3{right:10%}

@keyframes swing{
0%{transform:rotate(-6deg)}
50%{transform:rotate(6deg)}
100%{transform:rotate(-6deg)}
}

.ramadan-text{
position:absolute;
top:40px;
left:50%;
transform:translateX(-50%);
font-size:28px;
font-weight:bold;
color:#facc15;
text-shadow:0 0 20px gold;
font-family:serif;
animation:textGlow 3s infinite alternate;
}
@keyframes textGlow{
0%{text-shadow:0 0 15px gold}
100%{text-shadow:0 0 50px gold}
}

.shooting-star{
position:absolute;
top:200px;
left:-200px;
width:250px;
height:2px;
background:linear-gradient(90deg,white,transparent);
animation:shoot 8s infinite;
}

@keyframes shoot{
0%{transform:translateX(0) translateY(0)}
100%{transform:translateX(1800px) translateY(400px)}
}

.ketupat{
position:absolute;
width:35px;
height:35px;
background:#22c55e;
transform:rotate(45deg);
animation:float 6s infinite ease-in-out;
}

.k1{top:180px;left:25%}
.k2{top:220px;right:25%}

@keyframes float{
0%{transform:translateY(0) rotate(45deg)}
50%{transform:translateY(-25px) rotate(45deg)}
100%{transform:translateY(0) rotate(45deg)}
}

#ramadan-confetti{
position:absolute;
width:100%;
height:100%;
}

`

document.head.appendChild(style)

/* CREATE HTML */

const theme=document.createElement("div")
theme.className="ramadan-sultan"

theme.innerHTML=`

<div class="ramadan-bg"></div>

<div class="ramadan-moon"></div>

<div class="ramadan-stars"></div>

<img src="https://cdn-icons-png.flaticon.com/512/2909/2909764.png" class="lantern l1">
<img src="https://cdn-icons-png.flaticon.com/512/2909/2909764.png" class="lantern l2">
<img src="https://cdn-icons-png.flaticon.com/512/2909/2909764.png" class="lantern l3">

<div class="ramadan-text">Ramadan Kareem</div>

<div class="shooting-star"></div>

<div class="ketupat k1"></div>
<div class="ketupat k2"></div>

<canvas id="ramadan-confetti"></canvas>

`

document.body.appendChild(theme)

/* CONFETTI */

const canvas=document.getElementById("ramadan-confetti")
const ctx=canvas.getContext("2d")

canvas.width=window.innerWidth
canvas.height=window.innerHeight

let confetti=[]

for(let i=0;i<100;i++){

confetti.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*5+2,
speed:Math.random()*2+1
})

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height)

confetti.forEach(c=>{

ctx.fillStyle="gold"
ctx.fillRect(c.x,c.y,c.size,c.size)

c.y+=c.speed

if(c.y>canvas.height){
c.y=0
}

})

requestAnimationFrame(draw)

}

draw()

})();
