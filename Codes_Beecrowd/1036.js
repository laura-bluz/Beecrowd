var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [a, b, c] = lines[0].split(' ').map(item => parseFloat(item));
var r1, r2;

// bhaskara = -b + - raiz (b² -4ac) / 2a

if((a === 0) || ((b * b - 4 * a * c) < 0))
		console.log("Impossivel calcular");
	else{
        r1 = (- b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
	    console.log("R1 = " + r1.toFixed(5));
	    
        r2 = (- b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
	    console.log("R2 = " + r2.toFixed(5));	
	}