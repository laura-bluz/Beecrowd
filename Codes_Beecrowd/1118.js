const { exit } = require('process');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseFloat(item));
let media = 0, c = 0;

for (let i = 0; i < 50 ; i++) { // 50 é pra não ficar infinito, mas tem que tirar quando tiver tudo pronto
    if ((x[i] < 0) || (x[i] > 10))
        console.log("nota invalida");
    else if ((x[i] >= 0) && (x[i] <= 10)) {
        c++;
        media = (media +  x[i]) / c;
        if(c === 2){
            console.log("media = " + media.toFixed(2));
            for(i = i+1; ;i++){
                console.log("novo calculo (1-sim 2-nao)");
                if(x[i] === 1){
                    c = 0;
                    media = 0;
                    break;
                }else if(x[i] === 2){
                    process.exit();
                }
            } 
        }
    }
}