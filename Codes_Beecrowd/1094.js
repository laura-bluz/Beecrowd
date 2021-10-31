var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [N] = lines[0].split('\n').map(item => parseInt(item));
var x = input.split('\n').map(item => item);
var cobaias = 0, coelhos = 0, ratos = 0, sapos = 0;

for (let i = 1; i <= N; i++){ 
    cobaias = cobaias + parseInt(x[i]);    
    if(x[i].match("C")){
        coelhos = coelhos + parseInt(x[i]);         
    }
    if(x[i].match("R")){
        ratos = ratos + parseInt(x[i]);
    }
    if(x[i].match("S")){
        sapos = sapos + parseInt(x[i]);
    }
}
console.log("Total: " + cobaias + " cobaias");
console.log("Total de coelhos: " + coelhos);
console.log("Total de ratos: " + ratos);
console.log("Total de sapos: " + sapos);

console.log("Percentual de coelhos: " + ((coelhos * 100) / cobaias).toFixed(2) + " %");
console.log("Percentual de ratos: " + ((ratos * 100) / cobaias).toFixed(2) + " %");
console.log("Percentual de sapos: " + ((sapos * 100) / cobaias).toFixed(2) + " %");