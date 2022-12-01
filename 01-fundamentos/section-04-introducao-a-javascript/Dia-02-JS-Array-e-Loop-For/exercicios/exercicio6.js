let numbers = [2, 96, 4, 17, 700, 8, 100, 2, 34, 26];
let resultado = 0;

for (let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] % 2 !== 0) {
        resultado += 1;
    }
}

if (resultado === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(resultado);
}