let numbers = [5, 9, 3, 19, 700, 800, 100, 2, 35, 27];
let maiorNumero = numbers[0];

for (let index = 0; index < numbers.length; index +=1 ){

    if (numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    }
}

console.log("O maior número é: " + maiorNumero+".");