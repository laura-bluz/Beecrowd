var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = input.split('\n').map(item => parseFloat(item));
let i = 0, qtdd = 0;

while(i < 6){
    if(a[i] > 0){
        qtdd++;
    }
    i++;
}
console.log(qtdd + " valores positivos");