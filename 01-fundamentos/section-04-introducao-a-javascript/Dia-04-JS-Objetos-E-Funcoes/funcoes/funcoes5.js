function angulosInternos (a, b, c) {
    if (a + b + c === 180) {
        return angulosInternos = true;
    }
    
    else if (a < 0 || b < 0 || c < 0) {
        return 'Um ângulo não possui valor negativo!!!'
    }
    else if (a + b + c > 0 && a + b + c < 180) {
        return angulosInternos = false;

    }else{
        return 'Não é um triângulo retângulo!!'
    }
}
    console.log(angulosInternos(50, 50, 100));