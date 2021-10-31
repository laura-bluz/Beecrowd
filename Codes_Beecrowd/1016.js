var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseInt(item));

var dist = a * 2;
console.log(dist + " minutos");