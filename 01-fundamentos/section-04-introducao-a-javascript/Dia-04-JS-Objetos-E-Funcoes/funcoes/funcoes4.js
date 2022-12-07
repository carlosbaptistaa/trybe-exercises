function conferencia (num) {
    if (num > 0) {
        return 'O número é : ' + num + ' é POSITIVO';
    }
    else if (num < 0) {
            return 'O número é : ' + num + ' é NEGATIVO';
    } else {
        return 'O número é nulo, pois é igual a ZERO!!!'
    }
}
    console.log(conferencia(0));