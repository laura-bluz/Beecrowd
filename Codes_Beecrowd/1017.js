var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseInt(item));
var [b] = lines[1].split(' ').map(item => parseInt(item));

var litros = a * b / 12;
console.log(litros.toFixed(3));