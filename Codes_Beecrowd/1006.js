var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var media = ((2 * parseFloat(lines[0])) + (3 * parseFloat(lines[1])) + (5 * parseFloat(lines[2])));
media = media / 10;

console.log("MEDIA = " + media.toFixed(1));