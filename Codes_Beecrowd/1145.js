var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = lines[0].split(' ').map(item => parseInt(item));

for (let i = 0; i < y;) {
    for (let j = 0; j < x; j++) {
        i++;
        if (i > y)
            process.exit();
        if (j === 0) {
            process.stdout.write(''+i);
        } else
            process.stdout.write(' ' + i);
    }
    console.log('');
}