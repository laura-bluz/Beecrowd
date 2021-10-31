var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var soma = parseInt(lines[0]) + parseInt(lines[1]);

console.log("SOMA = " + soma);