var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseInt(item));
let fat = n;

if (n === 0)
    fat = 1;
while (n > 1) {
    n = n - 1;
    fat = fat * n;
}
console.log(fat);