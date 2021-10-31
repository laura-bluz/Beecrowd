var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a] = lines[0].split('\n').map(item => parseInt(item));

for(let i = 1; i <= 10; i++){
    let x = i * a;
    console.log(i + " x " + a + " = " + x);
}