// carregar config salva

let config = JSON.parse(localStorage.getItem("config")) || {

musica:true,
volume:50,

}

document.getElementById("musica").checked = config.musica
document.getElementById("volume").value = config.volume



function salvarConfig(){

config.musica = document.getElementById("musica").checked
config.volume = document.getElementById("volume").value

localStorage.setItem("config", JSON.stringify(config))

alert("Configurações salvas")

}


function voltar(){

window.location.href = "jogo.html"

}