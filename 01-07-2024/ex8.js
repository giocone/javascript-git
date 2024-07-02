const numbers = [7, 92, 34, 46, 90, 25, 11, 3, 89, 76, 99];

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 11 && numbers[i] <=90) {
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);
