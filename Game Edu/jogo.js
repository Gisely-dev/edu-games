let perguntas = [
{
pergunta:"Quanto é 5 + 3?",
opcoes:["6","8","10","7"],
correta:1
},
{
pergunta:"Quanto é 9 - 4?",
opcoes:["3","5","6","7"],
correta:1
},
{
pergunta:"Quanto é 6 x 2?",
opcoes:["10","12","8","14"],
correta:1
}
]

let atual = 0
let pontos = 0

function novaPergunta(){

let p = perguntas[atual]

document.getElementById("pergunta").innerText = p.pergunta

for(let i=0;i<4;i++){
document.getElementById("alt"+i).innerText = p.opcoes[i]
document.getElementById("alt"+i).classList.remove("correto","errado")
}

document.getElementById("resultado").innerText=""
}

function responder(opcao){

let p = perguntas[atual]

if(opcao == p.correta){

document.getElementById("resultado").innerText="✅ Acertou!"
document.getElementById("alt"+opcao).classList.add("correto")

pontos++
document.getElementById("pontos").innerText=pontos

}else{

document.getElementById("resultado").innerText="❌ Errou!"
document.getElementById("alt"+opcao).classList.add("errado")

}

atual++

if(atual >= perguntas.length){
atual = 0
}

}

novaPergunta()

function ranking(){
    window.location.href = "ranking.html";
}

function config(){
alert("Configurações do jogo")
}

function config(){
    window.location.href = "config.html";
}