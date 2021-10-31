var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [N] = lines[0].split('\n').map(item => parseInt(item));
let x = input.split('\n').map(item => parseInt(item));
let y = input.split(' ').map(item => parseInt(item));

for (let i = 1; i <= N; i++){
    if(y[i] === 0)
        console.log("divisao impossivel");
    else
        console.log((x[i] / y[i]).toFixed(1));
}