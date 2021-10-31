var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseFloat(item));
var nota, moeda;  

console.log("NOTAS:");
nota = a / 100;
console.log(Math.floor(nota) + " nota(s) de R$ 100.00");
nota = a % 100;
nota = nota / 50;
console.log(Math.floor(nota) + " nota(s) de R$ 50.00");
nota = a % 50;
nota = nota / 20;
console.log(Math.floor(nota) + " nota(s) de R$ 20.00");
nota = nota / 10;
console.log(Math.floor(nota) + " nota(s) de R$ 10.00");
nota = a % 10;
nota = nota / 5;
console.log(Math.floor(nota) + " nota(s) de R$ 5.00");
nota = a % 5;
nota = nota / 2;
console.log(Math.floor(nota) + " nota(s) de R$ 2.00");
nota = a % 5;
nota = nota % 2;
console.log("MOEDAS:");
a = nota * 100; 

console.log(Math.floor(a / 100) + " moeda(s) de R$ 1.00");
moeda = a % 100;
console.log(Math.floor(moeda / 50) + " moeda(s) de R$ 0.50");
moeda = moeda % 50;
console.log(Math.floor(moeda / 25) + " moeda(s) de R$ 0.25");
moeda = moeda % 25;
console.log(Math.floor(moeda / 10) + " moeda(s) de R$ 0.10");
moeda = moeda % 10;
console.log(Math.floor(moeda / 5) + " moeda(s) de R$ 0.05");
moeda = moeda % 5;
console.log(Math.floor(moeda / 1) + " moeda(s) de R$ 0.01");