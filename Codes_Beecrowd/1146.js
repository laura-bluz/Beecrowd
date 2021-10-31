var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = (input.trim()).split('\n').map(item => parseInt(item));

for (let i = 0; x[i] !== 0; i++) {
    for (let j = 1; j <= x[i]; j++) {
        if (j === 1) {
            process.stdout.write('' + j);
        } else
            process.stdout.write(' ' + j);
    }
    console.log('');   
}