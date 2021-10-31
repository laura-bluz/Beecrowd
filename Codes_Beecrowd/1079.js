var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let [n] = lines[0].split('\n').map(item => parseInt(item));
let x, media;

for(let i = 1; i <= n; i++){
    x = lines[i].split(' ').map(item => parseFloat(item));
    media = ((x[0] * 2) + (x[1] * 3) + (x[2]) * 5) / 10;
    console.log(media.toFixed(1));
}
