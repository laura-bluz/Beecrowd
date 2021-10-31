var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var prod = parseInt(lines[0]) * parseInt(lines[1]);

console.log("PROD = " + prod);