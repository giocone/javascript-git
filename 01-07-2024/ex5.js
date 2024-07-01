const names = ["João Grilo", "Chico", "Rosinha"];
let templatesNames = '';

for (let i = 0; i < names.length; i++) {
    templatesNames += `<li>${names[i]}</li>`;
}
console.log(templatesNames);