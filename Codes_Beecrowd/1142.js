var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = (input.trim()).split('\n').map(item => parseInt(item));
let a = 1, b = 2, c = 3;

if (N < 0)
    process.exit();
    
console.log(a, b, c, "PUM");
for (let i = 1; i < N; i++) {
    
    a = a + 4;
    b = b + 4;
    c = c + 4;

    process.stdout.write((a + ' ' + b + ' ' + c + ' ' + "PUM\n"));
}