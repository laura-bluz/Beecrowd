const { Console } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [x, y] = lines[0].split(' ').map(item => parseFloat(item));

if(x > 0.0 && y < 0.0)
    console.log("Q4");
else if(x > 0.0 && y > 0.0)
    console.log("Q1");
else if(x < 0.0 && y > 0.0)
    console.log("Q2");
else if(x < 0.0 && y < 0.0)
    console.log("Q3");
else if(x === 0.0 && y === 0.0)
    console.log("Origem");
else if(y === 0.0)
    console.log("Eixo X");
else
    console.log("Eixo Y");