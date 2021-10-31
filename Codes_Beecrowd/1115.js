var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseInt(item));
let y = input.split(' ').map(item => parseInt(item));
y.shift();

for (let i = 0; ; i++) {
    if (x[i] === 0.0 || y[i] === 0.0)
        break;
    else if (x[i] > 0.0 && y[i] < 0.0)
        console.log("quarto");
    else if (x[i] > 0.0 && y[i] > 0.0)
        console.log("primeiro");
    else if (x[i] < 0.0 && y[i] > 0.0)
        console.log("segundo");
    else if (x[i] < 0.0 && y[i] < 0.0)
        console.log("terceiro");
}