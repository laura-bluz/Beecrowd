var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let x = input.split('\n').map(item => parseInt(item));

for (let i = 0; ; i++) {
  if(x[i] === 2002){
    console.log("Acesso Permitido");
    break;
  }else
    console.log("Senha Invalida");
}