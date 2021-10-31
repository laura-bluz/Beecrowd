var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x, y] = input.split('\n').map(item => parseInt(item));

if (x > y) {
    aux = y;
    y = x;
    x = aux;
}
for (let i = x; i < y; i++) {
        if(i < 5){
            if (((5 % i) === 2) || ((5 % i) === 3))
            console.log(i);

        }else if (((i % 5) === 2) || ((i % 5) === 3))
            console.log(i);
}