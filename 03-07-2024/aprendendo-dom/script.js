let nome = document.getElementById("idNome");
let cidade = document.getElementById("idCidade");

function mudar(event) {
    // Previne o comportamento padrão do evento, como o envio de um formulário
    event.preventDefault();
    document.getElementById("titulo").innerHTML = nome.value;
    nome.value = '';
    
    document.getElementById("tituloCidade").innerHTML = cidade.value;
    cidade.value = '';
}