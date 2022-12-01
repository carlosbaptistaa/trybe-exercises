//Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bonus: use somente um if.

const number1 = 10;
const number2 = 16;
const number3 = 31;


if (number1 % 2 === 1 || number2 % 2 === 1 || number3  % 2 === 1){
    console.log(true);
} else {
    console.log(false);
}