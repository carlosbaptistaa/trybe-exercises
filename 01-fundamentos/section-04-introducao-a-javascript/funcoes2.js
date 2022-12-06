const a = 100;
const b = 100;

function maiorNumero () {
    if (a > b) {
        return 'O maior número é o: ' + a;
    }else if (a < b){
        return 'O maior número é o: ' + b;
    } else {
        return 'Empate, os números sãao iguais!!!'
    }
}
    console.log(maiorNumero(a, b));