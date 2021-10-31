var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x] = lines[0].split('\n').map(item => parseInt(item));
let [y] = lines[1].split('\n').map(item => parseInt(item));

