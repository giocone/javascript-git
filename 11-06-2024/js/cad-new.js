const campo = document.querySelector("#campo");
const salvarBtn = document.querySelector("#salvar");

// Criando um elemento p
const pMensagem = document.createElement('p');


// Adicionar evento de clique no botão salvar
// Usar prevent.default apenas quando existir um <form>


salvarBtn.addEventListener("click", function() {
    const valor = campo.value;

    if (valor.trim() === "") {
        // alert("Preencha o campo");
        pMensagem.textContent = "Campo obrigatório:";
        campo.insertAdjacentElement("afterend", pMensagem);
        pMensagem.setAttribute("class", "error"); // dois modos de mudar a cor da fonte
        // pMensagem.style.color = "#FF0000";
        return;
    }

    // Salvar no LocalStorage
    const chave = `valorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor);

    // Limpar campo após salvar
    campo.value = "";

    // Exibir os valores salvos
    carregarValoresSalvos();
    apagarLista();
});