var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a] = lines[0].split('\n').map(item => parseInt(item));

for(let i = 1; i <= 10000; i++){
    if((i % a) === 2)
        console.log(i);
}