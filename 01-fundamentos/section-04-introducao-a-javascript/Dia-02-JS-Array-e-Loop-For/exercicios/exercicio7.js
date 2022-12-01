let numbers = [22, 96, 4, 17, 700, 8, 100, 10, 34, 26];
let menorValor = numbers[0];

for (let index = 0; index < numbers.length; index +=1){

    if (numbers[index] < menorValor){
        menorValor = numbers[index];
    }
}
    console.log("O menor valor é: " + menorValor);
