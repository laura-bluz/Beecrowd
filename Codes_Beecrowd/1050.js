var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a] = lines[0].split(' ').map(item => parseInt(item));

/*if(a === 61)
    console.log("Brasilia");
else if(a === 71)
    console.log("Salvador");
else if(a === 11)
    console.log("Sao Paulo");
else if(a === 21)
    console.log("Rio de Janeiro");
else if(a === 32)
    console.log("Juiz de Fora");
else if(a === 19)
    console.log("Campinas");
else if(a === 27)
    console.log("Vitoria");
else if(a === 31)
    console.log("Belo Horizonte");
else
    console.log("DDD nao cadastrado");*/

// usando switch case
switch(a){
    case 61:
        console.log("Brasilia")
    break;
    case 71:
        console.log("Salvador");
    break;
    case 11:
        console.log("Sao Paulo");
    break;
    case 21:
        console.log("Rio de Janeiro");
    break;
    case 32:
        console.log("Juiz de Fora");
    break;
    case 19:
        console.log("Campinas");
    break;
    case 27:
        console.log("Vitoria");
    break;
    case 31:
        console.log("Belo Horizonte");
    break;
    default:
        console.log("DDD nao cadastrado");
}