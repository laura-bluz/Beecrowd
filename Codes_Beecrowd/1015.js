var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b] = lines[0].split(' ').map(item => parseFloat(item));
var [c, d] = lines[1].split(' ').map(item => parseFloat(item));
var dist;
// ((x2 - x1)* (x2 - x1)) +((y2 - y1) * (y2 - y1));

dist = (((c-a) * (c-a)) + ((d-b) * (d -b)));
dist = Math.sqrt(dist);
console.log(dist.toFixed(4));