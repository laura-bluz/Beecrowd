var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = input.split('\n').map(item => item);
var  [b, sfix, com] = input.split('\n').map(item => parseFloat(item));
//console.log(a);
var venda;
//console.log(c.toFixed(2));
//console.log(d.toFixed(2));
com = ((com/100)*15);
venda = sfix + com;
console.log("TOTAL = R$ "+ venda.toFixed(2));