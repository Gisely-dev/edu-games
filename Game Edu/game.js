
function salvarPontuacao(nome, pontos){

let ranking = JSON.parse(localStorage.getItem("ranking")) || []

ranking.push({
nome: nome,
pontos: pontos
})

ranking.sort((a,b)=> b.pontos - a.pontos)

localStorage.setItem("ranking", JSON.stringify(ranking))

}

let nome = prompt("Digite seu nome")

salvarPontuacao(nome, pontos)