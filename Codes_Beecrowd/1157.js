var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [n] = input.split('\n').map(item => parseInt(item));
let div = 0;

for (let i = 1; i <= n;) {
    if ((n % i) === 0) {
        div = i;
        console.log(div);
        i++;
    }
    else
        i++;
}