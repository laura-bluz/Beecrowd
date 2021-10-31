var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var media = (3.5 * parseFloat(lines[0])) + (7.5 * parseFloat(lines[1]));
media = media / 11;
console.log("MEDIA = " + media.toFixed(5));