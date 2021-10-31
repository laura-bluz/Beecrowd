const { S_IFBLK } = require('constants');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a]= lines[0].split(' ').map(item => parseFloat(item));
var salario, reajuste;

if(a >= 0.0 && a <= 400.00){
    salario = a * (15 / 100) + a;
    console.log("Novo salario: " + salario.toFixed(2));
    reajuste = salario - a;
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 15 %");
}else if(a >= 400.01 && a <= 800.00){
    salario = a * (12 / 100) + a;
    console.log("Novo salario: " + salario.toFixed(2));
    reajuste = salario - a;
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 12 %");
}else if(a >= 800.01 && a <= 1200.00){
    salario = a * (10 / 100) + a;
    console.log("Novo salario: " + salario.toFixed(2));
    reajuste = salario - a;
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 10 %");
}else if(a >= 1200.01 && a <= 2000.00){
    salario = a * (7 / 100) + a;
    console.log("Novo salario: " + salario.toFixed(2));
    reajuste = salario - a;
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 7 %");
}else if(a > 2000.00 ){
    salario = a * (4 / 100) + a;
    console.log("Novo salario: " + salario.toFixed(2));
    reajuste = salario - a;
    console.log("Reajuste ganho: " + reajuste.toFixed(2));
    console.log("Em percentual: 4 %");
}