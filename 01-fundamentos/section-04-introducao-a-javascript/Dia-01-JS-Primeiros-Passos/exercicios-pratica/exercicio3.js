//Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.


const number01 = 69;
const number02 = 990;
const number03 = 80;

if (number01 > number02 && number01 > number03){
    console.log("O maior número é: " + number01);
}
else if (number02 > number01 && number02 > number03){
    console.log("O maior número é: " + number02);
}
else {
    console.log("O maior número é: " + number03);
}