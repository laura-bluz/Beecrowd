var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let a = input.split('\n').map(item => parseFloat(item));
let qtdd = 0, media = 0;

for(let i = 0; i < 6; i++){
    if(a[i] > 0){
        media = media + a[i];
        qtdd++;
    }
}
media = media / qtdd;
console.log(qtdd + " valores positivos");
console.log(media.toFixed(1));