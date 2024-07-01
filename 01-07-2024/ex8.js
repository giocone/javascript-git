/*
- Utilize um for loop para gerar um novo array com apenas os números entre  
- 11 e 90 presentes no array "numbers" (incluindo 11 e 90);
- Exiba o novo array no console;
- O resultado deve ser: [34, 46, 90, 25, 11, 89, 76].
*/

const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 11 && numbers[i] <=90) {
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);
