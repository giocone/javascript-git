// Obtém o botão e a imagem do DOM
const btnMoverImagem = document.getElementById("btnMoverImagem");
let imagem = document.getElementById("imagem");

// Variável para rastrear o estado atual da posição da imagem
let isMoved = false;

// Adiciona um evento de clique ao botão

btnMoverImagem.addEventListener("click", function() {
    if (isMoved) { 
        imagem.style.left = "0"; // Move a imagem para a posição original
    } else {
        imagem.style.left = "1000px"; // Move a imagem para a direita
    }
    // Alterna o estado da posição da imagem
    isMoved = !isMoved;
})