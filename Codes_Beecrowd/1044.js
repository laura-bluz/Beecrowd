var input = require('fs').readFileSync('/Users/User/Desktop/Judge/Códigos/stdin', 'utf8');
var lines = input.split('\n');

var [a, b]= lines[0].split(' ').map(item => parseInt(item));

if((b % a) === 0 || (a % b) === 0)
    console.log("Sao Multiplos");
else
    console.log("Nao sao Multiplos");