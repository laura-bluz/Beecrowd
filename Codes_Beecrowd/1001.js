var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var x = parseInt(lines[0]), y = parseInt(lines[1]), soma;

soma = x + y;
console.log("X = " + soma);
// console.log("X = " + (parseInt(lines[0]) + parseInt(lines[1])));


