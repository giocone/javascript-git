let range = document.querySelector("#range");
let rangeValue = document.querySelector("#rangeValue");

// Função para alterar o valor do range input
range.addEventListener("input", function() {
    rangeValue.textContent = range.value;
});
  
