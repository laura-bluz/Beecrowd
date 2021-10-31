var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = input.split('\n').map(item => parseInt(item));
let somaimpar = 0;

if (x < y) {
    for (let i = x + 1; i < y; i++) {
        if ((i % 2) !== 0){
            somaimpar = somaimpar + i;
        }
    }
} else {
    for (let i = y + 1; i < x; i++) {
        if ((i % 2) !== 0){
            somaimpar = somaimpar + i;
        }  
    }
}
console.log(somaimpar);