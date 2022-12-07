const a = 102;
const b = 102;
const c = 1024;

function maiorNumero () {
    if (a > b && a > c) {
        return 'O maior número é o: ' + a;
    }else if (b > a && b > c ){
        return 'O maior número é o: ' + b;
    }else if (c > a && c > b ){
        return 'O maior número é o: ' + c;
    } else {
        return 'Empate, os números sãao iguais!!!'
    }
}
    console.log(maiorNumero(a, b, c));