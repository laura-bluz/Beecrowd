var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [num, qtdd, valor] = input.split('\n').map(item => parseFloat(item));
console.log(valor);
console.log("NUMBER = "+ num);
qtdd = qtdd * valor;
console.log("SALARY = U$ " + qtdd.toFixed(2));