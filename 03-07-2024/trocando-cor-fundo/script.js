let btnMudarCor = document.getElementById("btnMudarCor");
let btnVoltarCor = document.getElementById("btnVoltarCor");

// Adiciona um evento de clique ao botão 'Mudar cor de fundo'
btnMudarCor.addEventListener("click", function() {
    document.body.style.background = "#912CEE";
})
btnVoltarCor.addEventListener("click", function() {
    document.body.style.background = "#FFF";
})
