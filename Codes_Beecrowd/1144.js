var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = (input.trim()).split('\n').map(item => parseInt(item));
let a = 1, b = 1, c = 1;

if (N < 0)
    process.exit();
console.log(a, b, c);
b = a + 1;
c = b;
console.log(a, b, c);

for (let i = 1; i < N; i++) {
    a = a + 1;
    b = a * a;
    c = a * a * a;
    console.log(a, b, c);
    a = a;
    b = b + 1;
    c = c + 1;
    console.log(a, b, c);
}