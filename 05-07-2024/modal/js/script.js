const button = document.querySelector("button");
const popup = document.querySelector(".popup-wrapper");

// Exemplo de includes
const classListArray = ["popup-close", "popup-link", "d-none"];

button.addEventListener("click", function() {
    popup.classList.add("d-block");
});

popup.addEventListener("click", function(event) {
    const classListClick = event.target.classList[0];
    const classNameArray = ["popup-close", "popup-link", "popup-wrapper"];
    const classCloseClick = classNameArray.includes(classListClick);

    if (classCloseClick) {
        popup.classList.remove("d-block");
    }
});
