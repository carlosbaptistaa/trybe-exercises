let numbers = [5, 9, 3, 19, 70, 8, 10, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index +=1 ) {
    soma += numbers[index]
} 
console.log("A soma dos índices é: " + soma+".");

let media = soma / numbers.length;
console.log("A média dos índices é: " + media+".");

if (media > 20){
    console.log("A média é maior que 20.");
} else {
    console.log("A média é menor que 20.");
}
