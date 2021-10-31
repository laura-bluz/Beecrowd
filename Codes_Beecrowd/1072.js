var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let[N] = lines[0].split('\n').map(item => parseInt(item));
let x = input.split('\n').map(item => parseInt(item));
let inn = 0, out = 0;
for(let i = 1; i <= N; i++){
    if ((x[i] >= 10) && (x[i] <= 20)){
	    inn = inn + 1;
    }else{ 
        out = out + 1;   
    }
}
console.log(inn + " in");
console.log(out + " out");