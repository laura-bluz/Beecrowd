var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseFloat(item));
let media = 0, c = 0;

for (let i = 0; ; i++) {
    if ((x[i] < 0) || (x[i] > 10))
        console.log("nota invalida");
    else if ((x[i] >= 0) && (x[i] <= 10)) {
        c++;
        media = (media +  x[i]) / c;
        if(c === 2){
            console.log("media = " + media.toFixed(2));
            break;
        }
    }
}