function maiorNumero (primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return 'O maior número é o: ' + primeiroNum;
    }else if (primeiroNum < segundoNum){
        return 'O maior número é o: ' + segundoNum;
    } else {
        return 'Empate, os números sãao iguais!!!'
    }
}
    console.log(maiorNumero (100, 100));