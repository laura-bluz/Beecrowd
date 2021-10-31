var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseInt(item));
let y = input.split(' ').map(item => parseInt(item));
y.shift();

for (let i = 0; ; i++) {
  if(x[i] === y[i])
    break;  
  if (x[i] > y[i])
    console.log("Decrescente");
    else
        console.log("Crescente");
}