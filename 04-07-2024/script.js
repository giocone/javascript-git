// Obtém os elementos do DOM
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");

// Botões
const btnSomar = document.getElementById("btnSomar");
const btnSubtracao = document.getElementById("btnSubtracao");
const btnMultiplicar = document.getElementById("btnMultiplicar");
const btnDividir = document.getElementById("btnDividir")

// Botão resultado
const resultado = document.getElementById("resultado");



// Função para apagar os valores
function eraseValueAndTime() {
    valor1.value = "";
    valor2.value = "";

    setTimeout(function() {
        resultado.innerHTML = 0;
    }, 3000)
}

// Adiciona um evento de clique no botão
btnSomar.addEventListener("click", function() {
    let soma = Number(valor1.value) + Number(valor2.value);
    // Exibe o resultado da soma na tela
    resultado.textContent = soma;

    eraseValueAndTime();
})
btnSubtracao.addEventListener("click", function(){
    let subtracao = Number(valor1.value) - Number(valor2.value);
    resultado.textContent = subtracao;
    
    eraseValueAndTime();
})
btnMultiplicar.addEventListener("click", function(){
    let multiplicacao = Number(valor1.value) * Number(valor2.value);
    resultado.textContent = multiplicacao;
    
    eraseValueAndTime();
})
btnDividir.addEventListener("click", function(){
    let divisao = Number(valor1.value) / Number(valor2.value);
    resultado.textContent = divisao;
    
    eraseValueAndTime();
})