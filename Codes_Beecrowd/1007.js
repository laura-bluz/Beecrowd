var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c, d] = input.split('\n').map(item => parseInt(item));
var diferenca = (a * b - c * d);
console.log("DIFERENCA = " + diferenca);