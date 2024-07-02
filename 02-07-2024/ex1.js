const drinkType = "suco";
//poderia ser usado uma varíavel let message = "" no lugar do console.log

switch (drinkType) {
    case "água":
        console.log("Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.")
        break;
    case "refrigerante":
        console.log("Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.")
        break;
    case "suco":
        console.log("Bebida produzida do líquido extraído de frutos.")
        break;
    default:
        console.log("Bebida desconhecida.")
}