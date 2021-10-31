var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseInt(item));
var idade;
idade = a / 365;
console.log(Math.floor(idade) + " ano(s)");
idade = ( a % 365) / 30;
console.log(Math.floor(idade) + " mes(es)");
idade = ( a % 365) % 30;
console.log(Math.floor(idade) + " dia(s)");