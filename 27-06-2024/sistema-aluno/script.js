const button = document.querySelector("button");
const inputNota = document.querySelector("#nota");

// criando uma função para criar o campo

// criando uma função
function clearForm(){
    inputNota.value = '';
}

button.addEventListener("click", function(event) {
    const inputNotaValue = inputNota.value
    event.preventDefault();
    

    // validação formulário
    if(inputNotaValue === '' ) {
        alert("Campo obrigatório");
        return false;
    }

    // lógica
    if( inputNotaValue >= 6) {
        alert("Você está aprovado");
    } else {
        alert("Você está reprovado");
    }
    // chamando a função limpar campo
    clearForm();

});