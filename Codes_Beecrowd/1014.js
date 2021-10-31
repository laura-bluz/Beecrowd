var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseInt(lines[0]), b = parseFloat(lines[1]);
var consmed;

consmed = a / b;
console.log(consmed.toFixed(3) + " km/l");