var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = input.split('\n').map(item => parseInt(item));

for (var i = a; (i < (a + 12)); i++) {
    if ((i % 2) !== 0)
         console.log(i);
}