const fruits = ['morango', 'banana', 'mamão', 'pera'];
let message = ''
if (fruits.includes('abacaxi')) {
    message = 'A string "abacaxi" existe no array fruits.';
} else if (fruits.includes('pera')) {
    message = 'A string "pera" existe no array fruits.';
} else {
    message = 'Nem pera nem abacaxi existem no array "fruits". ';
}
console.log(message);

// switch(fruits) {
// case fruits['abacaxi']:
//         message = 'A string "abacaxi" existe no array fruits.';
//         break;
//     case fruits['pera']:
//         message = 'A string "pera" existe no array fruits.';
//         break;
//     default:
//         message = 'Nem pera nem abacaxi existem no array "fruits". ';
//         break;
// }
// console.log(message);