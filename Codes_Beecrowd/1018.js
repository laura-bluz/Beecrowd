var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseInt(item));
var nota;  

console.log(a);
nota = a / 100;
console.log(Math.floor(nota) + " nota(s) de R$ 100,00");
nota = a % 100;
nota = nota / 50;
console.log(Math.floor(nota) + " nota(s) de R$ 50,00");
nota = a % 50;
nota = nota / 20;
console.log(Math.floor(nota) + " nota(s) de R$ 20,00");
nota = nota / 10;
console.log(Math.floor(nota) + " nota(s) de R$ 10,00");
nota = a % 10;
nota = nota / 5;
console.log(Math.floor(nota) + " nota(s) de R$ 5,00");
nota = a % 5;
nota = nota / 2;
console.log(Math.floor(nota) + " nota(s) de R$ 2,00");
nota = a % 5;
nota = nota % 2;
console.log(Math.floor(nota) + " nota(s) de R$ 1,00");