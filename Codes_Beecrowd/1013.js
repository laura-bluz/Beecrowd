var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = lines[0].split(' ').map(item => parseInt(item));
var maior, x;

maior = (a+b+Math.abs(a-b))/2;

x = maior;
x = (x+c+Math.abs(x-c))/2;
console.log(x + " eh o maior");