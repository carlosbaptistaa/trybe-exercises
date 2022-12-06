let numeros = [3, 4, 5, 2, 2];
let soma = 0;

for (let index = 0; index < numeros.length; index += 1) {
  soma += numeros[index];
}

if (soma > 15) {
  console.log(soma);
} else {
  console.log('O valor é menor que 16.');
}