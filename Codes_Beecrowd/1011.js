var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]), volume;

volume = ((4/3) * 3.14159 * (a * a * a)); 
console.log("VOLUME = " + volume.toFixed(3));