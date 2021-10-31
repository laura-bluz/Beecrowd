var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [N] = lines[0].split('\n').map(item => parseInt(item));
let i = 1, quadrado = 0;

for(; i <= N; i++){
    if((i % 2) === 0){
        quadrado = (i * i);
        console.log(i + "^2" + " = " + quadrado);
    }
}