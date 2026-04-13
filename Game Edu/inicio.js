function jogar(){
alert("Iniciando jogo...")
}

function jogar(){
    window.location.href = "jogo.html";
}

/* PARTICULAS */

let canvas = document.getElementById("particulas")
let ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particulas = []

for(let i=0;i<80;i++){

particulas.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*3,
d:Math.random()*1

})

}

function desenhar(){

ctx.clearRect(0,0,canvas.width,canvas.height)

ctx.fillStyle="white"

for(let i=0;i<particulas.length;i++){

let p = particulas[i]

ctx.beginPath()
ctx.arc(p.x,p.y,p.r,0,Math.PI*2)
ctx.fill()

p.y += p.d

if(p.y > canvas.height){

p.y = 0
p.x = Math.random()*canvas.width

}

}

requestAnimationFrame(desenhar)

}

desenhar()